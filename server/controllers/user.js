const express = require("express");
const router = express.Router();
const { user, matches } = require("../models");
const bcrypt = require("bcrypt");
const saltRounds = 10;

// POST new accounts
router.post("/register", async (req, res) => {
  try {
    const { name, username, password } = req.body;
    const hash = await bcrypt.hash(password, saltRounds);
    const newUser = await user.create({ name, username, password: hash, wins: 0, losses: 0 });

    const { password: _, ...userWithoutPassword } = newUser.toJSON();
    res.status(201).json(userWithoutPassword);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error." });
  }
});

// POST login
router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ message: "Invalid username or password" });
    }

    const foundUser = await user.findOne({ where: { username } });

    if (!foundUser) {
      return res.status(404).json({ message: "No existing user with the provided username" });
    }

    const match = await bcrypt.compare(password, foundUser.password);

    if (!match) {
      return res.status(401).json({ message: "Invalid password" });
    }

    res.json({
      id: foundUser.id,
      name: foundUser.name,
      username: foundUser.username,
      createdAt: foundUser.createdAt,
      updatedAt: foundUser.updatedAt,
      wins: foundUser.wins,
      losses: foundUser.losses,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error." });
  }
});

// GET match history with wins and losses
router.get("/matches/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    const foundUser = await user.findByPk(userId);

    if (!foundUser) {
      return res.status(404).json({ message: "User not found." });
    }

    // Return only wins and losses
    res.json({ wins: foundUser.wins, losses: foundUser.losses });
  } catch (error) {
    console.error("Error fetching match history:", error);
    res.status(500).json({ message: "Server Error.", error: error.message });
  }
});

// POST update wins
router.post("/update-wins/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    const foundUser = await user.findByPk(userId);

    if (!foundUser) {
      return res.status(404).json({ message: "User not found." });
    }

    foundUser.wins += 1;
    await foundUser.save();

    res.json({ message: "Wins updated.", user: foundUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error." });
  }
});

// POST update losses
router.post("/update-losses/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    const foundUser = await user.findByPk(userId);

    if (!foundUser) {
      return res.status(404).json({ message: "User not found." });
    }

    foundUser.losses += 1;
    await foundUser.save();

    res.json({ message: "Losses updated.", user: foundUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error." });
  }
});

module.exports = router;

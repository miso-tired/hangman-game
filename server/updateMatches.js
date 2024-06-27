const { user, matches } = require("../server/models");

async function updateMatchesTable() {
  try {
    const users = await user.findAll();

    for (const userRecord of users) {
      const { id, username, wins, losses } = userRecord;

      // Check user matches
      let matchRecord = await matches.findOne({ where: { user_id: id } });

      // Create new record for user if it doesn't exist
      if (!matchRecord) {
        matchRecord = await matches.create({
          user_id: id,
          username: username,
          wins: wins,
          losses: losses,
        });
      } else {
        // Update user wins and losses
        matchRecord.username = username;
        matchRecord.wins = wins;
        matchRecord.losses = losses;
        await matchRecord.save();
      }
    }

    console.log("Matches table updated successfully.");
  } catch (error) {
    console.error("Error updating matches table:", error);
  }
}

updateMatchesTable();

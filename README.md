# Hangman

##  Game Description
Your typical hangman game. However, the list of guessable words is currently limited to 50 different words. Words will range from having four to six letter words. 

## Inspiration
I wanted to make a simple game using TypeScript, Sass, and React for the frontend. For the backend I also use TypeScript, in addition to Redux, MongoDB, and Bcryptjs. The main focus of this project was strengthening my skills in TypeScript along with authentication and database manipulation. Users should be able to register and login with their emails and passwords. Logged in users should be able to keep track of their wins and losses in the game with the help of a connection to a MongoDB database.

## Tech Stack

## Cited Sources
WebDevSimplified (2022). [HangmanWord component](https://github.com/WebDevSimplified/react-hangman/blob/main/src/HangmanWord.tsx).

```jsx
<span style={{ visibility: usedLetters.includes(letter) ? "visible" : "hidden" }}>{letter}</span>

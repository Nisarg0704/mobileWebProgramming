# Math Game App
# Author: Nisarg Khatri
## Overview
This project is a Math Game application built using React Native for the frontend and Express.js for the backend. The application provides a simple platform for users to sign up, log in, play a math game, and view their results on a leaderboard.

## Features
- **User Authentication**: Users can sign up and log in.
- **Math Game**: Users solve random addition problems and receive instant feedback.
- **Leaderboard**: Tracks and displays the top 10 players who answered correctly.

## Prerequisites
Ensure you have the following installed on your system:
- Node.js
- npm or yarn
- Expo CLI (for running the React Native app)

## Installation
### Backend
1. Navigate to the backend directory.
   ```bash
   cd backend
   ```
2. Install dependencies.
   ```bash
   npm install
   ```
3. Start the server.
   ```bash
   npm start
   ```
   The server will run on `http://localhost:3000`.

### Frontend
1. Navigate to the frontend directory.
   ```bash
   cd frontend
   ```
2. Install dependencies.
   ```bash
   npm install
   ```
3. Start the app.
   ```bash
   npm start
   ```
4. Use Expo Go or an emulator to run the app.

## Folder Structure
```
├── backend
│   ├── server.js
│   └── package.json
├── frontend
│   ├── App.js
│   ├── HomeScreen.js
│   ├── LoginScreen.js
│   ├── SignupScreen.js
│   ├── MathGameScreen.js
│   ├── GameResultScreen.js
│   ├── app.json
│   └── package.json
```

## API Endpoints
### POST /signup
Creates a new user.
- **Request Body**:
  ```json
  {
    "username": "string",
    "password": "string"
  }
  ```
- **Response**:
  ```json
  {
    "status": "success"
  }
  ```

### POST /login
Authenticates a user.
- **Request Body**:
  ```json
  {
    "username": "string",
    "password": "string"
  }
  ```
- **Response**:
  ```json
  {
    "status": "success"
  }
  ```

### POST /update
Updates the leaderboard.
- **Request Body**:
  ```json
  {
    "username": "string",
    "result": "correct" | "incorrect"
  }
  ```
- **Response**:
  ```json
  {
    "leaders": ["string"]
  }
  ```

## Contribution
Feel free to fork this repository and submit pull requests to improve the project.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

---

### GitHub Comment
"Initial commit of the Math Game App. Includes backend with Express.js, frontend with React Native, and basic user authentication, math game functionality, and leaderboard."

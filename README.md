# Game Competitiveness Checker

This React application allows users to analyze the competitiveness of a two-player game by inputting utility matrices and selecting a sorting algorithm.

## Features

-   Input utility matrices for two players.
-   Choose between Merge Sort and Merge Insertion Sort for payoff tuple sorting.
-   Determine if a game is strictly competitive.
-   Display sorted payoff tuples.
-   Navigation between the main checker and an "About" page.

## Technologies Used

-   React
-   React Router DOM
-   JavaScript

## Installation

1.  Clone the repository:

    ```bash
    git clone <repository_url>
    ```

2.  Navigate to the project directory:

    ```bash
    cd <project_directory>
    ```

3.  Install dependencies:

    ```bash
    npm install
    ```

## Usage

1.  Start the development server:

    ```bash
    npm run dev
    ```

2.  Open your browser and navigate to `http://localhost:5173/` (or the address provided by Vite).

3.  Enter the dimensions of the utility matrices (number of actions for each player).

4.  Input the utility values for each player's matrix.

5.  Select a sorting algorithm (Merge Sort or Merge Insertion Sort).

6.  Click the "Calculate" button to analyze the game's competitiveness.

7.  View the results, including whether the game is strictly competitive and the sorted payoff tuples.

8.  Click the "About" link in the navigation to learn more about the application.

## Project Structure

react-game-checker/
├── src/                      # Source directory for the application code
│   ├── components/           
│   │   ├── Footer.jsx        # Footer component
│   │   ├── Header.jsx        # Header component with navigation links
│   │   ├── MatrixInput.jsx   # Component for inputting matrices
│   │   ├── ResultDisplay.jsx  # Component for displaying results
│   │   └── SortSelection.jsx  # Component for selecting sorting algorithms
│   ├── pages/                
│   │   ├── About.jsx         # About page component
│   │   └── Home.jsx          # Home page component with main functionality
│   ├── utils/                # Utility functions and sorting algorithms
│   │   ├── logic.js          # Logic for processing matrices and determining      
│   │   ├── mergeInsertionSort.js # Implementation of Merge Insertion Sort
│   │   └── mergeSort.js      # Implementation of Merge Sort
│   ├── App.jsx               # Main application component
│   ├── index.css             # Global styles for the application
│   └── main.jsx              # Entry point for the React application
└── README.md                 # Documentation for the project


## License
This project is licensed under the [MIT License](LICENSE).



# GitHub User Profile Fetcher

## Overview

The GitHub User Profile Fetcher is a simple web application that allows users to search for GitHub profiles and view detailed information about a specified user. This includes the user's bio, followers, following count, location, and their repositories. The application fetches data from the GitHub API and dynamically updates the webpage to display the relevant information.

## Features

- **User Search:** Allows users to search for GitHub profiles by entering a username.
- **Profile Display:** Shows the user's avatar, login name, bio, followers, following count, and location.
- **Repositories List:** Lists the user's repositories with details such as name, description, number of forks, stars, and last updated date.
- **Pagination:** Displays only a subset of repositories initially, with an option to show all repositories.

## Technologies Used

- **HTML** for the structure of the webpage.
- **CSS** for styling the user interface.
- **JavaScript** for interacting with the GitHub API and dynamically updating the webpage.

## How It Works

1. **User Input:** When a user types a GitHub username into the search input, the application sends a request to the GitHub API to fetch the user data.
2. **Display User Info:** If the user exists, their profile information and repositories are displayed. If no user is found, the profile section is hidden.
3. **Repositories Handling:** Repositories are listed with their details, and only a subset is displayed initially. Users can click a button to show all repositories.

## Usage

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/elasri21/devChallenges_github_profile.git
   ```
2. Open the `index.html` file in your web browser to view the application.

## Example

Here's an example of how the application works:

1. Enter a GitHub username (e.g., `octocat`) in the search input field.
2. The application fetches and displays the user's profile information and repositories.
3. Click the "Show All" button to view all repositories if there are more than four.

## Code Description

- **JavaScript Code:**
  - **Event Listener:** An event listener on the input field detects changes and fetches data from the GitHub API.
  - **Data Handling:** Parses the JSON response and updates the DOM with user profile information and repositories.
  - **Date Calculation:** Calculates the time since the last update for each repository.
  - **Show All Repositories:** Shows all repositories when the "Show All" button is clicked.

## Contributing

If you want to contribute to this project, feel free to fork the repository and submit a pull request with your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

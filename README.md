# GitHub User Explorer

**GitHub User Explorer** is a web application that allows users to explore GitHub profiles by entering a username. It fetches the user's profile details, recent repositories, followers, and more using the GitHub API.

**Live Demo**: [GitHub User Explorer](https://github-user-explorer-1siz.onrender.com)

## Features

- Retrieve and display GitHub user profile information, including:
  - Username
  - Avatar
  - Bio
  - Public repositories count
  - Followers and following count
  - Location and blog link (if available)
  
- View the user's recent public repositories (name, description, stars, forks).
- List the user's followers and following users.
- Error handling for non-existent GitHub usernames.
- Clean and modern UI with a focus on simplicity and accessibility.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/github-user-explorer.git
   cd github-user-explorer
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the application:

   ```bash
   npm start
   ```

   The app will be running on `http://localhost:3000`.

## Usage

1. Navigate to the homepage.
2. Enter a valid GitHub username in the input field and submit the form.
3. The profile details of the user will be displayed, along with their recent repositories, followers, and following users.
4. If the username doesn't exist, you'll get an error message with suggestions for popular GitHub profiles.

## Technologies Used

- **Node.js**: Backend runtime environment.
- **Express.js**: Web framework for Node.js.
- **EJS**: Embedded JavaScript templating for rendering the frontend.
- **Axios**: For making HTTP requests to the GitHub API.
- **GitHub API**: To retrieve user profile data, repositories, followers, and more.

## API Usage

This project makes use of the [GitHub API](https://docs.github.com/en/rest) to fetch user data.

### Endpoints:

- `GET /`: Displays the homepage with a form to input a GitHub username.
- `POST /profile`: Fetches the user's profile data and repositories.
- `GET /profile`: Displays the retrieved GitHub profile with details.

## Contributing

If you'd like to contribute to this project, feel free to fork the repository and submit a pull request. Issues and suggestions are also welcome!

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


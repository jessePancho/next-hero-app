# Next Hero App

Next Hero App is a superhero search application built with Next.js. It allows users to search for their favorite superheroes and view detailed information about them, including their stats and biography.

## Features

- **Superhero Search**: Search for superheroes by name using the RapidAPI Superhero API.
- **Detailed Information**: View stats like intelligence, strength, speed, and more.
- **Responsive Design**: Fully responsive UI for seamless use across devices.
- **Theming**: Integrated with Material-UI for consistent theming and styling.
- **State Management**: Redux Toolkit for efficient state management.
- **Error Handling**: Graceful error messages for failed API requests or invalid searches.

## Technologies Used

- **Frontend**: React, Next.js, Material-UI
- **State Management**: Redux Toolkit
- **API Integration**: Axios, RapidAPI Superhero API
- **Styling**: Material-UI's CSS-in-JS
- **Build Tool**: Next.js

## Getting Started

### Prerequisites

- Node.js (v16 or later)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/jessePancho/next-hero-app.git
   cd next-hero-app
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env` file in the root directory and add the following:
   ```env
   RAPIDAPI_KEY=your_rapidapi_key_here
   ```

### Running the App

- Start the development server:

  ```bash
  npm run dev
  # or
  yarn dev
  ```

- Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

### Building for Production

- Build the app for production:

  ```bash
  npm run build
  # or
  yarn build
  ```

- Start the production server:
  ```bash
  npm start
  # or
  yarn start
  ```

## Project Structure

```
next-hero-app/
├── public/                # Static assets
├── src/
│   ├── components/        # Reusable components
│   │   ├── Form/          # Superhero search form
│   │   ├── Footer/        # Footer component
│   │   ├── Heading/       # Page heading
│   │   └── SuperheroCard/ # Superhero details card
│   ├── pages/             # Next.js pages
│   │   ├── api/           # API routes
│   │   ├── _app.js        # Custom App component
│   │   └── index.js       # Home page
│   ├── redux/             # Redux store and slices
│   ├── shared/            # Shared constants and utilities
│   └── styles/            # Global and component-specific styles
├── .env                   # Environment variables
├── package.json           # Project metadata and scripts
└── README.md              # Project documentation
```

## API Integration

This app uses the [RapidAPI Superhero API](https://rapidapi.com/) to fetch superhero data. Ensure you have a valid API key and add it to the `.env` file.

## Scripts

- `npm run dev`: Start the development server.
- `npm run build`: Build the app for production.
- `npm run start`: Start the production server.
- `npm run lint`: Run ESLint to check for code issues.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your message here"
   ```
4. Push to your branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a pull request.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## Acknowledgments

- [RapidAPI Superhero API](https://rapidapi.com/)
- [Material-UI](https://mui.com/)
- [Next.js](https://nextjs.org/)

# Expedia Clone Project

This project is a comprehensive clone of the Expedia website, built using React and Vite. It aims to replicate the core features and user experience of the Expedia platform, providing users with a familiar interface for browsing and booking travel accommodations.

## Table of Contents

- [Project Overview](#project-overview)
- [Project Structure](#project-structure)
- [Images](#images)
- [Key Features](#key-features)
- [Technologies Used](#technologies-used)
- [Components](#components)
- [Pages](#pages)
- [Setup and Installation](#setup-and-installation)
- [Running the Project](#running-the-project)
- [Mock Server](#mock-server)
- [Styling](#styling)
- [Responsive Design](#responsive-design)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

This Expedia clone aims to recreate the main functionalities of the Expedia website, focusing on the accommodation booking process. It includes features such as searching for stays, viewing property details, and a simplified booking flow.

## Project Structure

The project follows a modular React application structure:
    
    Expedia-Project/
    ├── Expedia/
    │   ├── dist/
    │   ├── node_modules/
    │   ├── public/
    │   ├── src/
    │   │   ├── assets/
    │   │   ├── Components/
    │   │   │   ├── Footer.jsx
    │   │   │   ├── ImgBanner.jsx
    │   │   │   ├── ImgContainer.jsx
    │   │   │   ├── Navbar.jsx
    │   │   │   ├── Offer.jsx
    │   │   │   ├── RecentSearch.jsx
    │   │   │   ├── SearchBar.jsx
    │   │   │   ├── StaysSearch.jsx
    │   │   │   └── TrendingDestination.jsx
    │   │   ├── pages/
    │   │   │   ├── GetApp.jsx
    │   │   │   ├── Home.jsx
    │   │   │   ├── SignIn.jsx
    │   │   │   └── StaysResult.jsx
    │   │   ├── App.css
    │   │   ├── App.jsx
    │   │   ├── index.css
    │   │   └── main.jsx
    │   ├── .eslintrc.cjs
    │   ├── .gitignore
    │   ├── db.json
    │   ├── index.html
    │   ├── index.js
    │   ├── package-lock.json
    │   ├── package.json
    │   ├── README.md
    │   └── vite.config.js
    └── README.md

## Images
**Home page Images**
<img width="959" alt="image" src="https://github.com/Mohd-Murtaza/Expedia-Project/assets/112779948/656bf4cf-8cf2-4f45-ad73-5bee1834d7fa">
<img width="959" alt="image" src="https://github.com/Mohd-Murtaza/Expedia-Project/assets/112779948/58d5ae73-832e-4954-9539-8f72ce1deef6">
<img width="959" alt="image" src="https://github.com/Mohd-Murtaza/Expedia-Project/assets/112779948/dbc0f796-98e8-4b79-9b39-e384f1e97701">
<img width="959" alt="image" src="https://github.com/Mohd-Murtaza/Expedia-Project/assets/112779948/59782a33-8bed-475b-9496-6ea355ddd0cb">
<img width="959" alt="image" src="https://github.com/Mohd-Murtaza/Expedia-Project/assets/112779948/406744e7-5613-42cc-b43b-f58356b86255">

**Get The App Page Images**
<img width="959" alt="image" src="https://github.com/Mohd-Murtaza/Expedia-Project/assets/112779948/bb23b0fa-1013-486c-b217-6406b7b7a062">
<img width="959" alt="image" src="https://github.com/Mohd-Murtaza/Expedia-Project/assets/112779948/135f53f5-8c60-4457-a880-16fa7f55aeaa">

**Sign In Page Image**
<img width="959" alt="image" src="https://github.com/Mohd-Murtaza/Expedia-Project/assets/112779948/5c1f9dd8-33f6-4299-9e72-bc30e72e73d8">

**Product Page Images**
<img width="959" alt="image" src="https://github.com/Mohd-Murtaza/Expedia-Project/assets/112779948/b811f5d7-34be-4761-b61d-22a654c71637">
<img width="959" alt="image" src="https://github.com/Mohd-Murtaza/Expedia-Project/assets/112779948/eba75787-0835-4435-84b6-f4dc02427e57">


## Key Features

1. **Home Page**: Displays trending destinations, recent searches, and special offers.
2. **Search Functionality**: Allows users to search for accommodations by location, dates, and number of travelers.
3. **Results Page**: Shows a list of available properties based on search criteria.
4. **Property Details**: Provides detailed information about selected properties.
5. **User Authentication**: Includes sign-in and sign-up functionality.
6. **Responsive Design**: Ensures a seamless experience across various device sizes.

## Technologies Used

- **React**: Frontend library for building user interfaces
- **Vite**: Next-generation frontend tooling for faster development
- **React Router**: For handling navigation within the application
- **CSS**: For styling components
- **Font Awesome**: Icon library for enhanced UI elements
- **JSON Server**: To create a mock API for development purposes
- **Swiper**: For implementing image sliders and carousels
- **React Responsive**: For implementing responsive design features

## Components

- **Navbar**: Navigation component present across all pages
- **Footer**: Footer component with site links and information
- **SearchBar**: Main search component for finding accommodations
- **ImgBanner**: Component for displaying promotional banners
- **Offer**: Component for showing special offers to users
- **RecentSearch**: Displays user's recent search history
- **TrendingDestination**: Showcases popular travel destinations
- **ImgContainer**: Flexible component for displaying image grids

## Pages

- **Home**: Landing page with search functionality and trending destinations
- **GetApp**: Page promoting the Expedia mobile app
- **SignIn**: User authentication page
- **StaysResult**: Displays search results for accommodations

## Setup and Installation

1. Clone the repository: git clone https://github.com/your-username/expedia-clone.git
2. Navigate to the project directory: cd expedia-clone/Expedia
3. Install dependencies: npm install

## Running the Project

1. Start the development server: npm run dev
2. Open your browser and visit `http://localhost:3000` (or the port specified in the console output).

## Mock Server

This project uses JSON Server to simulate API responses:

1. Install JSON Server globally: npm install -g json-server
2. Start the mock server: json-server --watch db.json --port 3001

The mock server runs on `http://localhost:3001`, serving data from `db.json`.

## Styling

The project uses CSS for styling, with separate CSS files for each component and page. The `App.css` file contains global styles, while component-specific styles are kept in their respective CSS files.

## Responsive Design

The application is built with a mobile-first approach, utilizing media queries and flexible layouts to ensure a consistent experience across devices. The `react-responsive` library is used to apply conditional rendering based on screen size.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

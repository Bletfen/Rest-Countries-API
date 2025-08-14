Rest Countries API

This project is a web application built with React and Tailwind CSS that displays a list of countries using data from the Rest Countries API.
It allows users to search for countries, filter them by region, and view detailed information about each country. The application also supports a dark/light mode with theme persistence.

In addition to fetching data from the public API, the project was also set up to work with json-server for development purposes. It can run with a local JSON database, and a loading state is implemented to handle data fetching delays from either source.

Features

Display a list of countries fetched from the Rest Countries API or a local json-server database

Search functionality by country name

Filter countries by region

Detailed country page with:

Official name

Population

Region and subregion

Capital city

National flag

Border countries

Dark and light theme

Loading indicator for data fetching

Fully responsive design for mobile, tablet, and desktop

Technologies Used

React – component-based UI

React Router – client-side routing

Tailwind CSS – styling framework

json-server – primary data source

local-database.json – local database for development

Vite – development and build tool

Installation and Setup

Clone the repository:

git clone https://github.com/Bletfen/Rest-Countries-API.git
cd Rest-Countries-API

Install dependencies:

npm install

(Optional) Start json-server for local development:

npx json-server --watch data.json --port 3001

Run the project in development mode:

npm run dev

Build for production:

    npm run build

Live Demo

You can view the live version of the project here:
[Live Site](https://rest-countries-api-eta-blue.vercel.app/)

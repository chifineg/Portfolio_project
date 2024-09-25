This is my final project for ALX SWE program. For this project, I will be working on a currency converter app. This is a simple web application that is able to convert from one currency to another.

When a user selects a base currency and enters an amount, the app will convert it to the correct amount of the selected destination currency.

For the currency converter web app, the following technologies were used:

1. React (JavaScript Framework)
React is a popular JavaScript library for building user interfaces, particularly single-page applications (SPAs) where efficient rendering is crucial. React allows for the creation of reusable UI components and uses a virtual DOM to improve performance.
The web app uses React to dynamically update the user interface without reloading the page when the user selects currencies or inputs an amount.
React's useState hook was used to manage the state for inputs like the currency amount, selected currencies, and the conversion result.
2. JavaScript (Logic & API Calls)
JavaScript is the core programming language used for building the logic behind the currency conversion functionality.
JavaScript's fetch API was used to make asynchronous API requests to fetch real-time currency exchange rates from the ExchangeRate API.
The app's core logic, such as calculating the conversion amount based on exchange rates, is implemented using JavaScript.
3. CSS (Cascading Style Sheets)
CSS is used to style the app, ensuring a clean and visually appealing interface.
The web app uses modern CSS features like Flexbox to ensure a responsive layout, making the app accessible and user-friendly across different devices.
CSS was also utilized to implement a polished design with button hover effects and input field styling, giving the app a professional look.
4. ExchangeRate API (Third-Party Service)
ExchangeRate API is a third-party service used to fetch live currency conversion rates. The API provides real-time exchange rate data for various global currencies.
The API integration allows the app to convert between different currencies based on real-time data, ensuring accurate results.
The API also supports a wide range of currencies, including major world currencies (USD, EUR, GBP) and African currencies (ZAR, NGN, KES, GHS).
5. HTML5 (React JSX)
Although React primarily uses JSX (JavaScript XML), which is similar to HTML, it is transformed into regular HTML elements for rendering on the browser.
JSX makes it easier to write HTML-like code inside JavaScript, providing a seamless way to structure the app's components.
Basic HTML tags like input, select, div, and button were used within JSX to define the UI.
6. Node.js & npm (Development Environment)
Node.js is a JavaScript runtime that enables the development of the React app on the server side. It powers the tools that allow us to compile and build the project.
npm (Node Package Manager) is used to manage React and its dependencies, along with other libraries required for the project. It's essential for installing React and running the development server.
7. Git & GitHub (Version Control and Collaboration)
Git is used for version control, allowing the project to be developed in stages with commits to track changes.
GitHub is used for hosting the repository, enabling collaboration and code sharing. This also makes it easier to track progress, manage issues, and document the project for future development.
These technologies and tools together create a scalable, modern, and user-friendly currency converter web app, leveraging the power of React for UI management and the ExchangeRate API for real-time data fetching.

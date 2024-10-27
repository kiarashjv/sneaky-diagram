# Energy Flow Sankey Diagram

This project visualizes energy consumption data using an interactive Sankey diagram. It consists of a React frontend and a Flask backend.

## Project Overview

This application fetches energy consumption data from a backend API and displays it in an interactive Sankey diagram. The visualization illustrates:

- Energy sources (e.g., Solar, Nuclear, Wind, Natural Gas)
- Energy flow through sectors (Residential, Commercial, Industrial, Transportation)
- Energy utilization (Rejected Energy, Energy Services)

## Features

- Interactive Sankey diagram using Highcharts
- Real-time data fetching from a Flask backend API
- Detailed tooltips showing energy flow quantities
- Color-coded nodes for easy identification of energy types and sectors

## Getting Started

### Frontend

1. Navigate to the frontend directory:

   ```bash
   cd frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

   Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Backend

1. Navigate to the backend directory:

   ```bash
   cd backend
   ```

2. Install dependencies (it's recommended to use a virtual environment):

   ```bash
   pip install -r requirements.txt
   ```

3. Run the Flask server:

   ```bash
   python app.py
   ```

   The backend will start on [http://127.0.0.1:5000](http://127.0.0.1:5000).

## Available Scripts (Frontend)

In the frontend directory, you can run:

- `npm start`: Runs the app in development mode
- `npm test`: Launches the test runner
- `npm run build`: Builds the app for production

## Technologies Used

- Frontend:

  - React
  - Highcharts
  - Highcharts Sankey Diagram module
  - Highcharts React Official wrapper

- Backend:
  - Flask
  - pandas
  - flask-cors

## Data Processing

The backend processes data from a CSV file (`ExampleLog.csv`) and transforms it into a format suitable for the Sankey diagram. It calculates activity transitions and prepares nodes and links for the frontend visualization.

## Learn More

- [React documentation](https://reactjs.org/)
- [Highcharts](https://www.highcharts.com/)
- [Sankey Diagrams](https://www.highcharts.com/docs/chart-and-series-types/sankey-diagram)
- [Flask](https://flask.palletsprojects.com/)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).

# Task Management Application

A fullstack TypeScript application for managing tasks with an Express backend and React frontend.

## Technical Stack

### Backend
- Express.js with TypeScript
- Zod for input validation
- RESTful API architecture

### Frontend
- React with TypeScript
- React Query for API data fetching and caching
- React Hook Form for form handling
- Zustand for state management
- Zod for schema validation

## Getting Started

### Prerequisites
- Node.js (v14 or later)
- npm (v6 or later)

### Running the Backend
1. Navigate to the backend directory:

- cd backend

2. Install dependencies:

- npm install

3. Build the application:

- npm run build

4. Start the server:

- npm start

Alternatively, for development with hot-reload:

- npm run dev

The backend server will run on http://localhost:3001 .

### Running the Frontend
1. Navigate to the frontend directory:

- cd frontend

2. Install dependencies:

- npm install

3. Start the development server:

- npm start

The frontend application will run on http://localhost:3000 .

## Features
- View a list of all tasks
- Create new tasks with title and description
- Delete existing tasks
- Update task status (pending/done)
- Responsive design
## API Endpoints
Method URL Description GET /tasks Returns the list of tasks POST /tasks Creates a new task DELETE /tasks/:id Deletes a task by its ID PATCH /tasks/:id Updates task status

## Project Structure
The project is organized into two main directories:

- backend/ : Contains the Express.js API
- frontend/ : Contains the React application
Each directory has its own package.json and dependencies.

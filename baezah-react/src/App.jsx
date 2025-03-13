import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ExerciseTable from './components/ExerciseTable';
import './App.css';

function App() {
  return (
    <Router>
      <header>
        <h1>
          Excercise Tracker
        </h1>
        <p>Track your exercises</p>
      </header>
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<ExerciseTable />} />

        </Routes>
      </main>
      <footer>
        <p>&copy; {new Date().getFullYear()} Your Name</p>
      </footer>
    </Router>
  );
}

export default App

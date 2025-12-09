import React, { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import CourseList from "./components/CourseList";

const COURSES = [
  { id: 1, name: "Web Development Fundamentals", category: "Frontend" },
  { id: 2, name: "React Basics", category: "Frontend" },
  { id: 3, name: "Node.js Essentials", category: "Backend" },
  { id: 4, name: "Database Design", category: "Backend" },
  { id: 5, name: "UI/UX Design Principles", category: "Design" }
];

function App() {
  const [search, setSearch] = useState("");
  const [quote, setQuote] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((data) => {
        setQuote(data.content);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const filteredCourses = COURSES.filter((course) =>
    course.name.toLowerCase().includes(search.toLowerCase()) ||
    course.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app">
      <header className="header">
        <h1>Course Finder</h1>
        <p>Find courses by name or category</p>

        <div className="quote-box">
          <h3>Today's Motivation</h3>
          {loading ? <p>Loading quote...</p> : <p>“{quote}”</p>}
        </div>
      </header>

      <main className="main">
        <SearchBar value={search} onChange={setSearch} />
        <CourseList courses={filteredCourses} />
      </main>

      <footer className="footer">
        <p>Web Developer Intern Assignment</p>
      </footer>
    </div>
  );
}

export default App;

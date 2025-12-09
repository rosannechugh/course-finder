import React from "react";

function CourseCard({ course }) {
  return (
    <div className="course-card">
      <h3>{course.name}</h3>
      <span>{course.category}</span>
      <p>
        Learn the fundamentals of {course.category.toLowerCase()} development
        with this beginner-friendly course.
      </p>
      <button>View Course</button>
    </div>
  );
}

export default CourseCard;

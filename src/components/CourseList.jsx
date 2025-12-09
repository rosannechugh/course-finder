import React from "react";
import CourseCard from "./CourseCard";

function CourseList({ courses }) {
  if (courses.length === 0) {
    return <p className="no-results">No courses found</p>;
  }

  return (
    <div className="course-list">
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
}

export default CourseList;

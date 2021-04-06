import React, { useState, useEffect } from "react";
import CourseList from "./CourseList";
import { Link } from "react-router-dom";
import courseStore from "../store/courseStore";
import { loadCourses } from "../actions/courseActions";
import { deleteCourse } from "../actions/courseActions";

function CoursesPage(){
  const [courses, setCourses] = useState(courseStore.getCourses());
  
  useEffect(() => {
    courseStore.addChangeListener(onChange);
    if(courseStore.getCourses().length === 0) loadCourses();
    return () => courseStore.removeChangeListener(onChange); // cleanup on unmount
  },[]);

  function onChange(){
    setCourses(courseStore.getCourses());
  }
    
  return (
      <>
        <h2>Courses</h2>
        <Link className="btn btn-primary" to="/course">ADD COURSES</Link>
        <CourseList courses={courses} deleteCourse={deleteCourse}/>
        
      </>
    );
  }


export default CoursesPage;

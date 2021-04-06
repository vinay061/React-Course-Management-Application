import React, { useEffect } from 'react';
import CourseForm from './CourseForm';
import { useState } from 'react';
import { toast } from 'react-toastify';
import * as courseActions from '../actions/courseActions';
import courseStore from "../store/courseStore";


const ManageCourse = props => {
    const [errors, setErrors] = useState({});
    const [courses, setCourses] = useState(courseStore.getCourses());
    const [course, setCourse] = useState({
        id: null,
        slug: "",
        title: "",
        authorId: null,
        category: ""
    });

    useEffect(() => {
        courseStore.addChangeListener(onChange);
        const slug = props.match.params.slug;
        if(courses.length === 0){
            courseActions.loadCourses();
        }
        else if(slug) {
            setCourse(courseStore.getCoursesBySlug(slug));
        }
        return () => courseStore.removeChangeListener(onChange);
    },[courses.length, props.match.params.slug]);

    function onChange(){
        setCourses(courseStore.getCourses());
    }

    function formisValid() {
        const _errors = {} ;
        if(!course.title) _errors.title = "Title is required";
        if(!course.authorId) _errors.authorId = "Author Id is required";
        if(!course.category) _errors.category = "Category is required";
        setErrors(_errors);
        return Object.keys(_errors).length === 0;
    }

    //third and the best way of declaring
    function handleChange(event){
        const updatedCourse = {...course, [event.target.name] : event.target.value};
        setCourse(updatedCourse);
    }
    
    function handleSubmit(event){
        event.preventDefault();
        if(!formisValid()) return;
        courseActions.saveCourse(course).then( () => {
            props.history.push("/courses");
            toast.success("Course Saved");
        });
    }

  
    return(
        <>
            <h2>Manage Courses</h2>
            <CourseForm 
            errors={errors}
            course={course}
            onChange={handleChange}
            onSubmit={handleSubmit}/>
        </>
    );
};

export default ManageCourse;


/* Alternate ways of declaring

//first way of declaring a function
/* function ManageCourse(props){
    const [course, setCourse] = useState({
        id: null,
        slug: "",
        title: "",
        authorId: null,
        category: ""

    });*/

    /* <Prompt when={true} message="Are you sure you want to leave?" />
            {props.match.params.slug}*/

     //first way of declaring
    /*function handleTitleChange(event){
        const updatedCourse = {...course};
        updatedCourse.title = event.target.value;
        
    }*/

    //second way of declaring
     /*function handleTitleChange(event){
        const updatedCourse = {...course, title:event.target.value};
        setCourse(updatedCourse);

    }

    function handleChange(target){
        setCourse({
            ...course,
            [target.name]: target.value
        });
    }
    //this will save the course to the courseApi server
    function handleSubmit(event){
        event.preventDefault();
        courseApi.saveCourse(course);
    }

*/
import React from 'react';
import AboutPage from './AboutPage';
import HomePage from './HomePage';
import Header from './common/Header';
import CoursesPage from './CoursesPage';
import { Route, Switch, Redirect } from 'react-router-dom';
import NotFoundPage from './common/NotFoundPage';
import ManageCourse from './ManageCourse';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App(){
    return (
        <div className="container-fluid">
            <Header/>
            <ToastContainer autoClose={3000} hideProgressBar />
            <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/courses" component={CoursesPage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/course/:slug" component={ManageCourse} />
            <Route path="/course" component={ManageCourse}/>
            <Redirect from="/about-to" to="/about"/>
            <Route component={NotFoundPage} />
            </Switch>
        </div>
        );
}
    

export default App;
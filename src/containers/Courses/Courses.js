import React, { Component } from "react";
import { NavLink, Route } from "react-router-dom";
import Course from "../Course/Course";
import "./Courses.css";

class Courses extends Component {
  state = {
    courses: [
      { id: 1, title: "Angular - The Complete Guide" },
      { id: 2, title: "Vue - The Complete Guide" },
      { id: 3, title: "PWA - The Complete Guide" },
    ],
  };
  selecteCourseHandler(id) {
    console.log(id);
    //this.props.history.push("/course");
  }

  render() {
    return (
      <div>
        <h1>Amazing Udemy Courses</h1>
        <section className="Courses">
          {this.state.courses.map((course) => {
            return (
              <NavLink
                key={course.id}
                to={{
                  pathname: this.props.match.url + "/" + course.id,
                  search: "?title=" + course.title,
                }}
              >
                <article className="Course" title={course.title}>
                  {course.title}
                </article>
              </NavLink>
            );
          })}
        </section>
        <Route path={this.props.match.url + "/:courseId"} component={Course} />
      </div>
    );
  }
}

export default Courses;

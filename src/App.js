import React, { Component } from "react";
import { Route } from "react-router";
import { NavLink, Switch } from "react-router-dom";
import "./App.css";
import Courses from "./containers/Courses/Courses";
import Users from "./containers/Users/Users";
import UnknowRoutes from "./components/unknowRoutes/unknowsRoutes";

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ul
            style={{
              display: "flex",
              listStyle: "none",
              textDecoration: "none",
            }}
          >
            <li style={{ margin: "20px", textDecoration: "none" }}>
              <NavLink style={{ textDecoration: "none" }} to="/courses">
                Courses
              </NavLink>
            </li>
            <li style={{ margin: "20px", textDecoration: "none" }}>
              <NavLink style={{ textDecoration: "none" }} to="/users">
                Users{" "}
              </NavLink>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/courses" component={Courses} />
          <Route path="/users" component={Users} />
          <Route component={UnknowRoutes} />
          {/**<Route path="/courses/:courseId" component={Course} *>}
          {/**<Route path="/courses/:courseId/:courseTitle" component={Course} /> */}
        </Switch>
      </div>
    );
  }
}

export default App;

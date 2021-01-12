import React, { Component } from "react";

class Course extends Component {
  state = {
    courseTitle: "",
  };
  parseQuery() {
    const query = new URLSearchParams(this.props.location.search);
    for (let param of query.entries()) {
      if (this.state.courseTitle !== param[1]) {
        this.setState({ courseTitle: param[1] });
      }

      console.log(param);
    }
  }
  componentDidMount() {
    //troco ocm did update
    this.parseQuery();
  }

  componentDidUpdate() {
    this.parseQuery();
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <h1>{this.state.courseTitle}</h1>
        <p>You selected the Course with {this.props.match.params.courseId}</p>
      </div>
    );
  }
}

export default Course;

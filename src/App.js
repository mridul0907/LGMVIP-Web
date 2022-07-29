import React, { useState } from "react";
import profile from "./profile.png";
import "./style.css";

function App() {
  const intialState = {
    name: "",
    gender: "Male",
    email: "",
    website: "",
    skills: ["JAVA", "HTML", "CSS"],
    imgSrc: "",
  };
  const [enrolledStudent, setEnrolledStudent] = useState([
    {
      name: "Mridul gupta",
      gender: "Female",
      email: "mridul007@gmail.com",
      website: "www.mridul.com",
      skills: ["JAVA", "HTML"],
      imgSrc: "",
    },
  ]);
  const [studentData, setStudentData] = useState(intialState);

  const handleSubmit = (event, type) => {
    switch (type) {
      case "username":
        setStudentData({ ...studentData, name: event.target.value });
        break;
      case "email":
        setStudentData({ ...studentData, email: event.target.value });
        break;
      case "website":
        setStudentData({ ...studentData, website: event.target.value });
        break;
      case "image":
        setStudentData({ ...studentData, imgSrc: event.target.value });
        break;
      case "radio":
        setStudentData({ ...studentData, gender: event.target.value });
        break;
      case "skill":
        if (!studentData.skills.includes(event.target.value)) {
          studentData.skills.push(event.target.value);
        } else {
          let index = studentData.skills.indexOf(event.target.value);
          studentData.skills.splice(index,1);
        }
        setStudentData({
          ...studentData,
          skills: studentData.skills,
        });

        break;
      default:
        return;
    }
  };

  const enrollStudent = (e) => {
    enrolledStudent.push(studentData);
    setEnrolledStudent(enrolledStudent);
    setStudentData(intialState);
    e.preventDefault();
  };


  return (
    <div className="wrapper">
      <div className="wrapper__header">Student Enrollment Form</div>
      <div className="wrapper__container">
        <div className="form">
          <form>
            <div className="feild">
              <label>Name*</label>
              <input
                onChange={(e) => handleSubmit(e, "username")}
                type="text"
                className="input_feild"
                value={studentData.name}
              />
            </div>
            <div className="feild">
              <label>Email*</label>
              <input
                className="input_feild"
                onChange={(e) => handleSubmit(e, "email")}
                type="text"
                value={studentData.email}
              />
            </div>
            <div className="feild">
              <label>Website*</label>
              <input
                className="input_feild"
                onChange={(e) => handleSubmit(e, "website")}
                type="text"
                value={studentData.website}
              />
            </div>
            <div className="feild">
              <label>Image Link</label>
              <input
                className="input_feild"
                onChange={(e) => handleSubmit(e, "image")}
                type="text"
                value={studentData.imgSrc}
              />
            </div>
            <div
              className="feild"
              style={{ alignItems: "baseline", marginTop: "15px" }}
            >
              <label>Gender*</label>
              <div onChange={(e) => handleSubmit(e, "radio")}>
                <div className="radio_box">
                  <label style={{ cursor: "pointer" }}>
                    <input
                      type="radio"
                      value="Male"
                      name="gender"
                      checked={studentData.gender === "Male"}
                    />
                    Male
                  </label>
                </div>
                <div className="radio_box">
                  <label style={{ cursor: "pointer" }}>
                    <input
                      type="radio"
                      value="Female"
                      name="gender"
                      checked={studentData.gender === "Female"}
                    />
                    Female
                  </label>
                </div>
              </div>
            </div>
            <div className="feild">
              <label>Skills*</label>
              <div
                onChange={(e) => handleSubmit(e, "skill")}
                className="skill_box"
              >
                <label className="skill" style={{ cursor: "pointer" }}>
                  <input
                    type="checkbox"
                    value="JAVA"
                    name="skill"
                    checked={studentData.skills.includes("JAVA")}
                  />
                  JAVA
                </label>
                <label style={{ cursor: "pointer" }}>
                  <input
                    type="checkbox"
                    value="HTML"
                    name="skill"
                    checked={studentData.skills.includes("HTML")}
                  />
                  HTML
                </label>
                <label style={{ cursor: "pointer" }}>
                  <input
                    type="checkbox"
                    value="CSS"
                    name="skill"
                    checked={studentData.skills.includes("CSS")}
                  />
                  CSS
                </label>
              </div>
            </div>
            <div className="button_wrapper">
              <button
                type="button"
                onClick={(e) => enrollStudent(e)}
                className="enroll"
                disabled={
                  !studentData.name ||
                  !studentData.email ||
                  !studentData.gender ||
                  !studentData.website ||
                  !studentData.skills.length
                }
              >
                Enroll Student
              </button>
              <button
                onClick={() => setStudentData(intialState)}
                type="button"
                className="clear"
              >
                Clear
              </button>
            </div>
          </form>
        </div>
        <div className="seperator"></div>
        <div className="student_card_box">
          <p className="header">Enrolled Student</p>
          <div className="cards">
            <div className="cards__header">
              <p className="description">Description</p>
              <p className="image">image</p>
            </div>
            {enrolledStudent.map((item) => {
              return (
                Object.keys(item).length && (
                  <div className="card">
                    <div className="left">
                      <p className="name">{item.name}</p>
                      <p className="gender">{item.gender}</p>
                      <p className="email">{item.email}</p>
                      <a target="_blank" href={item.website} className="website">
                        {item.website}
                      </a>
                      <div className="skills">
                        {item.skills.map((skill) => {
                          return <p className="skill">{skill},</p>;
                        })}
                      </div>
                    </div>
                    <div className="right">
                      <div className="image_box">
                        <img src={profile} alt="" />
                      </div>
                    </div>
                  </div>
                )
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

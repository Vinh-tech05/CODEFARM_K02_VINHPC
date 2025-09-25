import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { students } from "../data";
import Legend from "./Legend";
import OutStandingStudent from "./OutStandingStudent";
import StudentList from "./StudentList";
import PoorStudent from "./PoorStudent";

function App() {
  const outstanding = students.reduce(
    (acc, cur) => (cur.score > acc.score ? cur : acc),
    students[0]
  );
  const poor = students.reduce(
    (acc, cur) => (cur.score < acc.score ? cur : acc),
    students[0]
  );
  console.log(poor);

  return (
    <>
      <div className="app-container">
        <div className="main-content">
          <StudentList students={students} />
        </div>
        <div className="sidebar">
          <div className="featured">
            <OutStandingStudent student={outstanding} />
          </div>
          <div className="poor">
            <PoorStudent student={poor} />
          </div>
          <div className="legend">
            <Legend />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

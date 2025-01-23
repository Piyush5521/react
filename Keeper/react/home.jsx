import React, { useState } from "react";
import "./Home.css";
import Header from "./Header";
import students from "./StudentsData";
import Dropdown from "./Dropdown";
import FilterStudents from "./FilterStudents";

const Home = () => {
  const [option, setOption] = useState("All");
  const [selectedClass, setSelectedClass] = useState(students);

  const handleChange = (e) => {
    setOption(e.target.value);
    FilteringData(e.target.value); // Call FilteringData when the dropdown value changes
  };

  const uniqueClasses = [...new Set(students.map((student) => student.class))];

  const FilteringData = (x) => {
    console.log("Filtering by class:", x);

    const filteredStudents = 
      x === "All" 
        ? students
        : students.filter((course) => course.class === x);
    
    setSelectedClass(filteredStudents);
    setOption(x);  // Update the dropdown option to reflect the selected class
  };

  return (
    <>
      <div className="container">
        <Header />
        <div className="drop_down">
          <label>Select Class</label>
          <Dropdown
            handleChange={handleChange}
            option={option}
            uniqueClasses={uniqueClasses}
          />
        </div>
      </div>
      <br />
      <div className="container1">
        <FilterStudents
          testings={selectedClass}
          FilteringData={FilteringData}
        />  
      </div>
    </>
  );
};

export default Home;

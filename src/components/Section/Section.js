import React from "react";
import "./Section.css";

const Section = ({ users }) => {
  return (
    <div className="students-info">
      <table className="table">
        <thead className="info">
          <td>lastName</td>
          <td>age</td>
          <td>id</td>
        </thead>
        {users.map(item => (
          <thead>
            <td>{item.lastName}</td>
            <td>{item.age}</td>
            <td>{item.id}</td>
          </thead>
        ))}
      </table>
    </div>
  );
};

export default Section;

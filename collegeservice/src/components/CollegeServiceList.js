import React, { useEffect, useState } from "react";

const CollegeServiceList = ({ onEdit }) => {
  const [colleges, setColleges] = useState([]);

  const fetchColleges = () => {
    fetch("http://localhost:8080/college/getAll")
      .then((res) => res.json())
      .then((data) => setColleges(data))
      .catch((err) => console.error("Fetch error:", err));
  };

  useEffect(() => {
    fetchColleges();
  }, []);

  const deleteCollege = (id) => {
    fetch(`http://localhost:8080/college/delete/${id}`, {
      method: "DELETE",
    })
      .then(() => fetchColleges())
      .catch((err) => console.error("Delete error:", err));
  };

  return (
    <div>
      <h2>College List</h2>

      {colleges.length === 0 ? (
        <p>No colleges found.</p>
      ) : (
        <table border="1" cellPadding="10">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Location</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Type</th>
              <th>Students</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {colleges.map((c) => (
              <tr key={c.collegeId}>
                <td>{c.collegeId}</td>
                <td>{c.collegeName}</td>
                <td>{c.collegeLocation}</td>
                <td>{c.collegeEmail}</td>
                <td>{c.collegePhone}</td>
                <td>{c.collegeType}</td>
                <td>{c.studentCount}</td>

                <td>
                  <button onClick={() => onEdit(c)}>Edit</button>
                  <button onClick={() => deleteCollege(c.collegeId)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default CollegeServiceList;

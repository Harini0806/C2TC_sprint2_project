import React, { useEffect, useState } from "react";

const emptyForm = {
  collegeId: "",
  collegeName: "",
  collegeLocation: "",
  collegeEmail: "",
  collegePhone: "",
  collegeType: "",
  studentCount: "",
};

const CollegeServiceForm = ({ editData, refreshList }) => {
  const [form, setForm] = useState(emptyForm);

  useEffect(() => {
    if (editData) {
      setForm(editData);
    } else {
      setForm(emptyForm);
    }
  }, [editData]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const url = editData
      ? "http://localhost:8080/college/update"
      : "http://localhost:8080/college/add";

    const method = editData ? "PUT" : "POST";

    fetch(url, {
      method: method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })
      .then((res) => res.json())
      .then(() => {
        alert(editData ? "Updated Successfully" : "Added Successfully");
        refreshList();
        setForm(emptyForm);
      })
      .catch((err) => console.error("Error:", err));
  };

  return (
    <div>
      <h2>{editData ? "Update College" : "Add College"}</h2>

      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          width: "300px",
        }}
      >
        <input
          type="number"
          name="collegeId"
          placeholder="College ID"
          value={form.collegeId}
          onChange={handleChange}
          required
          disabled={editData}
        />

        <input
          type="text"
          name="collegeName"
          placeholder="College Name"
          value={form.collegeName}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="collegeLocation"
          placeholder="Location"
          value={form.collegeLocation}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="collegeEmail"
          placeholder="Email"
          value={form.collegeEmail}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="collegePhone"
          placeholder="Phone"
          value={form.collegePhone}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="collegeType"
          placeholder="Type"
          value={form.collegeType}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="studentCount"
          placeholder="Student Count"
          value={form.studentCount}
          onChange={handleChange}
          required
        />

        <button type="submit">
          {editData ? "Update" : "Add"}
        </button>
      </form>
    </div>
  );
};

export default CollegeServiceForm;

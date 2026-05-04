function StudentFields() {
  return (
    <>
      <label>Name</label>
      <input type="text" name="name" required />

      <label>Email</label>
      <input type="email" name="email" required />

      <label>Phone</label>
      <input type="tel" name="phone" required />

      <label>Class of Student</label>
      <input type="text" name="class" required />

      <label> Board</label>
      <input type="text" name="board" placeholder="e.g. CBSE, ICSE, etc." required />

      <label>Subjects interested in</label>
      <input type="text" name="subjects" placeholder="e.g. All subjects , Maths , etc." required />

      <label >Address</label>
      <input type="text" name="address" placeholder="Enter your Address" required />

      {/* <label>Current Level</label>
      <select name="level" required>
        <option value="">Select Level</option>
        <option value="beginner">Beginner</option>
        <option value="intermediate">Intermediate</option>
        <option value="advanced">Advanced</option>
      </select> */}

      <label>Any specific requirements</label>
      <textarea name="need" />
    </>
  );
}

export default StudentFields;
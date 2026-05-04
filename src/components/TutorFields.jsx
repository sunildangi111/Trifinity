function TutorFields() {
  return (
    <>
      <label>Name</label>
      <input type="text" name="name" required />

      <label>Email</label>
      <input type="email" name="email" required />

      <label>Phone</label>
      <input type="tel" name="phone" required />

      <label>Gender</label>
      <div className="gender-options">
          <label><input type="radio" name="gender" value="Male" required /> Male</label>
          <label><input type="radio" name="gender" value="Female" required /> Female</label>
          <label><input type="radio" name="gender" value="Other" required /> Prefer not to say</label>
      </div>

      <label>Qualification</label>
      <input type="text" name="qualification" placeholder="e.g. B.Tech, M.Tech" required />

      <label>Experience (Years)</label>
      <input type="number" name="experience" required />

      <label>Location preferred</label>
      <input type="text" name="location_prefered" placeholder="e.g. katraj, kharadi" required />

      {/* <label>Resume</label>
      <input type="file" name="resume" /> */}

      {/* <label>Hourly Rate</label>
      <input type="number" name="rate" required /> */}
    </>
  );
}

export default TutorFields;
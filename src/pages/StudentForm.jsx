import { useState } from "react";
import FormLayout from "../components/FormLayout";
import StudentFields from "../components/StudentFields";
import { supabase } from "../services/supabaseClient";
import "../styles/form.css";

function StudentForm() {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    const { error } = await supabase.from("students").insert([data]);

    if (error) {
      console.log("Insert error:", error);
    } else {
      setShowModal(true);   // ✅ show modal
      e.target.reset();     // clear form
    }

    setLoading(false);
  };

  return (
    <>
      <FormLayout title="Student Registration" onSubmit={handleSubmit}>
        <StudentFields />

        <button type="submit" disabled={loading}>
          {loading ? "Submitting..." : "Submit"}
        </button>
      </FormLayout>

      {/* ✅ Success Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-box">
            <span
              className="modal-close"
              onClick={() => setShowModal(false)}
            >
              &times;
            </span>

            <h2>Form Submitted Successfully!</h2>
            <p>
              Soon Trifinity team will connect with you.
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default StudentForm;
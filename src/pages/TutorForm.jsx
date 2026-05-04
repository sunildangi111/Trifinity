import { useState } from "react";
import FormLayout from "../components/FormLayout";
import TutorFields from "../components/TutorFields";
import { supabase } from "../services/supabaseClient";
import "../styles/form.css";

function TutorForm() {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData(e.target);

      // 🧾 Convert form data (NO resume)
      const data = Object.fromEntries(formData.entries());

      // 💾 Insert into DB
      const { error: insertError } = await supabase
        .from("tutors")
        .insert([data]);

      if (insertError) {
        console.log("Insert error:", insertError);
      } else {
        setShowModal(true);     // ✅ show modal
        e.target.reset();       // clear form

        // 🔁 optional auto close
        // setTimeout(() => setShowModal(false), 5000);
      }
    } catch (err) {
      console.log("Unexpected error:", err);
    }

    setLoading(false);
  };

  return (
    <>
      <FormLayout title="Tutor Registration" onSubmit={handleSubmit}>
        <TutorFields />

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
              Please join the Trifinity Tutors WhatsApp community for further updates:
            </p>

            <a
              href="https://chat.whatsapp.com/C6I3ii18p8TIEMPiGAeS4F"
              target="_blank"
              rel="noreferrer"
              className="whatsapp-link"
            >
              Join WhatsApp Group
            </a>
          </div>
        </div>
      )}
    </>
  );
}

export default TutorForm;
import React, { useState, useEffect } from "react";
import Modal from "./Modal";

const AppWithPopup = ({ children }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    // Check if the user has already acknowledged policies
    const hasAccepted = localStorage.getItem("policyAccepted");
    if (!hasAccepted) {
      setModalOpen(true);
    }
  }, []);

  const handleAccept = () => {
    setModalOpen(false);
    localStorage.setItem("policyAccepted", "true"); // Save acknowledgment
  };

  return (
    <>
      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={handleAccept}
        title="Privacy Policy & Terms of Service"
        content={
          <div>
            <p className="mb-4">
              Welcome to <strong>ArisCreationz</strong>! By using this site, you agree to our{" "}
              <strong>Privacy Policy</strong> and <strong>Terms of Service</strong>.
            </p>
            <p className="mb-4">
              We collect only the information you provide via forms to respond
              to your inquiries. Payments are securely handled through third-party platforms, and no payment information is stored on this site.
            </p>
            <p>
              Please review our policies before proceeding. Thank you for
              trusting ArisCreationz!
            </p>
          </div>
        }
      />

      {/* Main App Content */}
      {!isModalOpen && children}
    </>
  );
};

export default AppWithPopup;

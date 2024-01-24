import React from "react";
import BookingForm from "../BookingForm/BookingForm";
import "./BookingModal.css";

const BookingModal = ({ onClose }) => {
  return (
    <div className="booking-modal-overlay">
      <div className="booking-modal">
        <button className="close-modal-btn" onClick={onClose}>
          &times;
        </button>
        <BookingForm />
      </div>
    </div>
  );
};

export default BookingModal;

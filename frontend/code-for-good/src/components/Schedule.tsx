import React from "react";
import Modal from "react-modal";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const timeSlots = [
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "01:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
  "05:00 PM",
];

interface ScheduleAppointmentProps {
  isOpen: boolean;
  closeModal: () => void;
}

const ScheduleModal: React.FC<ScheduleAppointmentProps> = ({
  isOpen,
  closeModal,
}) => {
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const [selectedTime, setSelectedTime] = React.useState("");

  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
  };

  const handleTimeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTime(event.target.value);
  };

  const handleSubmit = () => {
    if (selectedTime) {
      alert(
        `Scheduled appointment on: ${selectedDate.toLocaleDateString()} at ${selectedTime}`
      );
      closeModal();
    } else {
      alert("Please select a time");
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal} // Close modal on outside click
      contentLabel="Schedule Appointment"
      ariaHideApp={false} // Handle this properly in production
      className="fixed inset-0 flex items-center justify-center z-50 transition-opacity duration-300"
      overlayClassName="fixed inset-0 bg-black bg-opacity-30"
    >
      <div
        className={`bg-white rounded-lg p-6 transition-transform duration-300 transform ${
          isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
      >
        <h2 className="text-lg font-bold mb-4">Schedule Appointment</h2>
        <div>
          <label>Select Date:</label>
          <div className="my-2">
            <Calendar onChange={() => handleDateChange} value={selectedDate} />
          </div>
        </div>
        <div>
          <label>Select Time:</label>
          <select
            value={selectedTime}
            onChange={handleTimeChange}
            className="my-2 border rounded"
          >
            <option value="">Select Time</option>
            {timeSlots.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
        </div>
        <button
          onClick={handleSubmit}
          className="mt-4 bg-teal-500 text-white py-2 px-4 rounded"
        >
          Schedule
        </button>
      </div>
    </Modal>
  );
};

export default ScheduleModal;

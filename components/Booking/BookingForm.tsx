import React, { useState } from "react";
import emailjs from "emailjs-com"; // Import EmailJS

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  interestedServices: string[];
  addOns: string[];
  vehicleInfo: string;
  freePickup: boolean;
  homeAddress: string;
  comments: string;
}

const BookingForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    interestedServices: [],
    addOns: [],
    vehicleInfo: "",
    freePickup: false,
    homeAddress: "",
    comments: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: checked,
    }));
  };

  const handleServiceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData((prevData) => {
      const interestedServices = checked
        ? [...prevData.interestedServices, value]
        : prevData.interestedServices.filter((service) => service !== value);
      return { ...prevData, interestedServices };
    });
  };

  const handleAddOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData((prevData) => {
      const addOns = checked
        ? [...prevData.addOns, value]
        : prevData.addOns.filter((addOn) => addOn !== value);
      return { ...prevData, addOns };
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // Send the form data using EmailJS
    emailjs
    .send(
      "service_cdz4bl6", // Your service ID
      "template_8vh8iuk", // Your template ID
      {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        interestedServices: formData.interestedServices.join(", "),
        addOns: formData.addOns.join(", "),
        vehicleInfo: formData.vehicleInfo,
        freePickup: formData.freePickup ? "Yes" : "No",
        homeAddress: formData.freePickup ? formData.homeAddress : "N/A", // Conditionally include home address
        comments: formData.comments,
      },
      "JIT7wDfN9lboVIXNK" // Your public key
    )
    .then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
        setMessage("Booking submitted successfully!");
        setLoading(false);
  
        // Reset form after successful submission
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          interestedServices: [],
          addOns: [],
          vehicleInfo: "",
          freePickup: false,
          homeAddress: "",
          comments: "",
        });
      },
      (err) => {
        console.log("FAILED...", err);
        setMessage("Booking submission failed. Please try again.");
        setLoading(false);
      }
    );
  
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <h1 className="text-3xl font-medium text-black">Booking Form</h1>

        {/* First Name */}
        <label>
          First Name
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            required
            className="border"
          />
        </label>

        {/* Last Name */}
        <label>
          Last Name
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            required
            className="border"
          />
        </label>

        {/* Email */}
        <label>
          Email
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="border"
          />
        </label>

        {/* Phone */}
        <label>
          Phone
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
            className="border"
          />
        </label>

        {/* Interested Services */}
        <label>
          Interested Services
          <div>
            <label>
              <input
                type="checkbox"
                value="Interior Detailing"
                onChange={handleServiceChange}
              />
              Interior Detailing
            </label>
            <label>
              <input
                type="checkbox"
                value="Exterior Detailing"
                onChange={handleServiceChange}
              />
              Exterior Detailing
            </label>
            <label>
              <input
                type="checkbox"
                value="Complete Detailing"
                onChange={handleServiceChange}
              />
              Complete Detailing
            </label>
          </div>
        </label>

        {/* Add-ons */}
        <label>
          Add-ons
          <div>
            <label>
              <input
                type="checkbox"
                value="Engine Bay Cleaning"
                onChange={handleAddOnChange}
              />
              Engine Bay Cleaning
            </label>
            <label>
              <input
                type="checkbox"
                value="Headlight Restoration"
                onChange={handleAddOnChange}
              />
              Headlight Restoration
            </label>
          </div>
        </label>

        {/* Vehicle Information */}
        <label>
          Vehicle Information (Year/Make/Model/Color)
          <input
            type="text"
            name="vehicleInfo"
            value={formData.vehicleInfo}
            onChange={handleInputChange}
            required
            className="border"
          />
        </label>

        {/* Free Pickup and Drop-off */}
        <label>
          Free Pickup and Drop-off
          <div>
            <label>
              <input
                type="radio"
                name="freePickup"
                value="yes"
                checked={formData.freePickup === true}
                onChange={() => setFormData({ ...formData, freePickup: true })}
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="freePickup"
                value="no"
                checked={formData.freePickup === false}
                onChange={() => setFormData({ ...formData, freePickup: false })}
              />
              No
            </label>
          </div>
        </label>

        {/* Home Address (only show if pickup is selected) */}
        {formData.freePickup && (
          <label>
            Home Address
            <input
              type="text"
              name="homeAddress"
              value={formData.homeAddress}
              onChange={handleInputChange}
              required={formData.freePickup}
              className="border"
            />
          </label>
        )}

        {/* Other Comments */}
        <label>
          Other Comments
          <textarea
            name="comments"
            value={formData.comments}
            onChange={handleInputChange}
            className="border"
          />
        </label>

        {/* Submit Button */}
        <button type="submit" disabled={loading}>
          {loading ? "Submitting..." : "Submit"}
        </button>

        {/* Success/Error Message */}
        {message && <p>{message}</p>}
      </form>
    </div>
  );
};

export default BookingForm;

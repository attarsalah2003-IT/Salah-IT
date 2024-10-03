import React, { useState } from "react";
import emailjs from "emailjs-com"; // Import EmailJS

interface FormData {
  name: string;
  email: string;
  phone: string;
  completionDate: string;
  projectDescription: string;
  agreeToPrivacyPolicy: boolean;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    completionDate: "",
    projectDescription: "",
    agreeToPrivacyPolicy: false,
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // Send the form data using EmailJS
    emailjs
      .send(
        "service_cdz4bl6", // Replace with your Service ID
        "template_6gussyl", // Replace with your Template ID
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          completionDate: formData.completionDate,
          projectDescription: formData.projectDescription,
        },
        "JIT7wDfN9lboVIXNK" // Replace with your Public Key
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setMessage("Form submitted successfully!");
          setLoading(false);

          // Reset form after successful submission
          setFormData({
            name: "",
            email: "",
            phone: "",
            completionDate: "",
            projectDescription: "",
            agreeToPrivacyPolicy: false,
          });
        },
        (err) => {
          console.log("FAILED...", err);
          setMessage("Form submission failed. Please try again.");
          setLoading(false);
        }
      );
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <section className="flex flex-wrap gap-10 items-center">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col self-stretch my-auto min-w-[240px] w-[533px] max-md:max-w-full"
        >
          <div className="flex flex-col max-w-full w-[523px]">
            <h1 className="text-3xl font-medium text-black">Contact Us</h1>
            <p className="mt-4 text-base leading-7 text-black max-md:max-w-full">
              There are many variations of passages of Lorem Ipsum available, but
              the majority have suffered alteration in some form.
            </p>
          </div>
          <div className="flex flex-col items-end mt-8 w-full max-w-[528px] max-md:max-w-full">
            <div className="flex flex-col w-full max-md:max-w-full">
              <div className="flex flex-wrap gap-5 items-start text-sm max-md:max-w-full">
                <div className="flex flex-col w-64 min-w-[240px]">
                  <label
                    htmlFor="name"
                    className="font-medium leading-none text-red-600"
                  >
                    Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Joe Smith"
                    className="flex overflow-hidden gap-2 items-center px-4 py-3 mt-1.5 w-64 max-w-full font-light leading-6 text-black bg-white border-gray-300 border-solid shadow-sm border-[0.91px]"
                    aria-label="Name"
                  />
                </div>
                <div className="flex flex-col w-64 min-w-[240px]">
                  <label
                    htmlFor="email"
                    className="font-medium leading-none text-red-600"
                  >
                    Email Address <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="you@company.com"
                    className="flex overflow-hidden gap-2 items-center px-4 py-3 mt-1.5 w-64 max-w-full font-light leading-6 text-black bg-white border-gray-300 border-solid shadow-sm border-[0.91px]"
                    aria-label="Email Address"
                  />
                </div>
              </div>
              <div className="flex flex-wrap gap-5 items-start mt-3.5 max-md:max-w-full">
                <div className="flex flex-col w-64 min-w-[240px]">
                  <label
                    htmlFor="phone"
                    className="font-medium leading-none text-red-600"
                  >
                    Phone <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    placeholder="123 123 123"
                    className="flex overflow-hidden gap-2 items-center px-4 py-3 mt-1.5 w-64 max-w-full font-light leading-6 text-black bg-white border-gray-300 border-solid shadow-sm border-[0.91px]"
                    aria-label="Phone"
                  />
                </div>
                <div className="flex flex-col w-64 min-w-[240px]">
                  <label
                    htmlFor="completionDate"
                    className="text-sm font-medium leading-none text-black"
                  >
                    Requested Completion Date <span className="text-red-600">*</span>
                  </label>
                  <div className="flex overflow-hidden mt-1.5 w-full bg-white border-gray-300 border-solid shadow-sm border-[0.91px] max-w-[256px]">
                    <input
                      type="date"
                      id="completionDate"
                      name="completionDate"
                      value={formData.completionDate}
                      onChange={handleInputChange}
                      required
                      className="flex flex-1 shrink gap-2 items-center self-start px-4 py-3 text-sm font-light leading-6 text-black basis-0"
                      aria-label="Requested Completion Date"
                    />
                    <div className="flex overflow-hidden justify-between items-center py-3 pr-3 pl-4 h-full">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/dfff085e2d648b46cead597db3154ff108f7a8d13ffbe5e6fc0a889ec36fc393?placeholderIfAbsent=true&apiKey=a9e86b264a2b427cb02fa9112891bf11"
                        className="object-contain self-stretch my-auto aspect-square w-[18px]"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col mt-3.5 w-full text-sm font-medium leading-none text-red-600 min-h-[140px] max-md:max-w-full">
                <label htmlFor="projectDescription">
                  Project Description <span className="text-red-600">*</span>
                </label>
                <textarea
                  id="projectDescription"
                  name="projectDescription"
                  value={formData.projectDescription}
                  onChange={handleInputChange}
                  required
                  className="flex flex-1 gap-2 py-2.5 mt-1.5 w-full bg-white border-gray-300 border-solid shadow-sm border-[0.91px] min-h-[115px] max-md:max-w-full"
                  aria-label="Project Description"
                />
              </div>
              <div className="flex gap-3 items-center mt-3.5 max-w-full text-sm font-medium leading-none text-slate-700 w-[303px]">
                <input
                  type="checkbox"
                  id="agreeToPrivacyPolicy"
                  name="agreeToPrivacyPolicy"
                  checked={formData.agreeToPrivacyPolicy}
                  onChange={handleCheckboxChange}
                  className="shrink-0 self-stretch my-auto bg-white rounded-md border-gray-300 border-solid border-[0.91px] h-[19px] w-[18px]"
                />
                <label
                  htmlFor="agreeToPrivacyPolicy"
                  className="self-stretch my-auto"
                >
                  You agree to our friendly{" "}
                  <a href="#" className="underline">
                    privacy policy
                  </a>
                  .
                </label>
              </div>
            </div>
          </div>
          <div className="flex gap-6 mt-10 max-md:max-w-full">
            <button
              type="submit"
              disabled={loading}
              className="flex justify-center self-stretch gap-2 py-4 px-7 font-semibold text-center text-white border-none shadow-sm bg-red-600 w-64 h-12 disabled:bg-gray-300"
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </div>
          {message && (
            <p className="text-center mt-4 text-red-600">{message}</p>
          )}
        </form>

        <div className="hidden md:block">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/dfff085e2d648b46cead597db3154ff108f7a8d13ffbe5e6fc0a889ec36fc393?placeholderIfAbsent=true&apiKey=a9e86b264a2b427cb02fa9112891bf11"
            alt="contact form image"
            className="h-[300px] w-auto object-contain"
          />
        </div>
      </section>
    </div>
  );
};

export default ContactForm;


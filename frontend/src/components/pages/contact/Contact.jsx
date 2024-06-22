import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "../contact/contact.css";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { MdMarkEmailUnread } from "react-icons/md";
import { SiNordicsemiconductor } from "react-icons/si";
import { toast } from "react-hot-toast";
import axios from "axios"; 

const Contact = () => {
  //frontend form validation using formik and yup
  const validationSchema = () => {
    return Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string().email("Invalid Email").required("Email is required"),
      phone: Yup.string().required("Phone Number is required"),
      subject: Yup.string().required("Subject is required"),
      message: Yup.string().required("Message is required"),
    });
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
    validationSchema: validationSchema(),
    onSubmit: async (values) => {
      try {
        const res = await axios.post(
          `${import.meta.env.VITE_REACT_APP_URL}/api/v1/auth/contact`,
          values
        );
        if (res.data.success) {
          toast.success(res.data.message);
          formik.resetForm();
        }
      } catch (error) {
        if (error.response) {
          toast.error(error.response.data.message);
        } else {
          toast.error("Something went wrong");
        }
      }
    },
  });

  return (
    <div className="contactBg">
      <div className="contact_container">
        <div className="container contact">
          <div className="contact_content">
            <h2>GET IN TOUCH</h2>
            <p className="subPara">
              Feel free to reach out to us anytime. We're eager to discuss
              ideas, collaborate, <br />
              or answer any questions you may have. Let's connect and make great
              things happen together.
            </p>
          </div>
          <div className="address">
            <div className="location">
              <div className="address_image">
                <FaLocationDot className="location_icon" />
                <div className="address_content">
                  <h2>Address</h2>
                  <p className="subPara">
                    Godawari Municipality-11, Chapagaun, Lalitpur Nepal
                  </p>
                </div>
              </div>
            </div>
            <div className="location">
              <div className="address_image">
                <FaPhone className="location_icon" />
                <div className="address_content">
                  <h2>Phone</h2>
                  <p className="subPara">+977-1-5573382</p>
                </div>
              </div>
            </div>
            <div className="location">
              <div className="address_image">
                <SiNordicsemiconductor className="location_icon" />
                <div className="address_content">
                  <h2>P.O.B No.</h2>
                  <p className="subPara">117060</p>
                </div>
              </div>
            </div>
             <div className="location">
              <div className="address_image">
                <MdMarkEmailUnread className="location_icon" />
                <div className="address_content">
                  <h2>Email</h2>
                  <p className="subPara"> mail2icdo@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="locationMessage_container">
            <div className="leftLocation">
              <iframe
                className="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224622.2258702478!2d83.82527999453121!3d28.397455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x49bfc5375227a0ed%3A0x8f0b0709d7e5f7e1!2sIns%20Technology!5e0!3m2!1sen!2snp!4v1715235807527!5m2!1sen!2snp"
              ></iframe>
            </div>
            <div className="rightMessage">
              <form className="contactForm" onSubmit={formik.handleSubmit}>
                <input
                  onChange={formik.handleChange}
                  value={formik.values.name}
                  onBlur={formik.handleBlur}
                  className="input"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name*"
                />
                {formik.touched.name && formik.errors.name && (
                  <p className="error">{formik.errors.name}</p>
                )}
                <input
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  onBlur={formik.handleBlur}
                  className="input"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email*"
                />
                {formik.touched.email && formik.errors.email && (
                  <p className="error">{formik.errors.email}</p>
                )}
                <input
                  onChange={formik.handleChange}
                  value={formik.values.phone}
                  onBlur={formik.handleBlur}
                  className="input"
                  type="number"
                  name="phone"
                  id="phone"
                  placeholder="Phone*"
                />
                {formik.touched.phone && formik.errors.phone && (
                  <p className="error">{formik.errors.phone}</p>
                )}
                <input
                  onChange={formik.handleChange}
                  value={formik.values.subject}
                  onBlur={formik.handleBlur}
                  className="input"
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="Subject*"
                />
                {formik.touched.subject && formik.errors.subject && (
                  <p className="error">{formik.errors.subject}</p>
                )}
                <textarea
                  onChange={formik.handleChange}
                  value={formik.values.message}
                  onBlur={formik.handleBlur}
                  className="textarea"
                  name="message"
                  id="messageTextarea"
                  placeholder="Message*"
                ></textarea>
                {formik.touched.message && formik.errors.message && (
                  <p className="error">{formik.errors.message}</p>
                )}
                <button type="submit" className="sendMsgBtn" id="sendMsgBtn">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

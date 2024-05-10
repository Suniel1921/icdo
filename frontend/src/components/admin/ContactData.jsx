import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import axios from 'axios';
import '../admin/contactData.css'

const ContactData = () => {
    const [contactData, setContactData] = useState([]);

    const getAllContactData = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_REACT_APP_URL}/api/v1/auth/getAllContactData`);
            if (response.data.success) {
                setContactData(response.data.allContactData);
            }
        } catch (error) {
            if (error.response) {
                toast.error(error.response.data.message);
            } else {
                toast.error('Something went wrong');
            }
        }
    };

    useEffect(() => {
        getAllContactData();
    }, []);

    return (
        <div className="contactData">
            <div className="container">
                <div className='contactData_container'>
                    <h2>Contact Data</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Subject</th>
                                <th>Message</th>
                            </tr>
                        </thead>
                        <tbody>
                            {contactData.map((contact) => (
                                <tr key={contact._id}>
                                    <td>{contact.name}</td>
                                    <td>{contact.email}</td>
                                    <td>{contact.phone}</td>
                                    <td>{contact.subject}</td>
                                    <td>{contact.message}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ContactData;

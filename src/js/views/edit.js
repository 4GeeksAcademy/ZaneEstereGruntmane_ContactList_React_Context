import React, { useState, useEffect, useContaxt } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Edit = () => {

    const { store, actions } = useContaxt(Context);
    const [contactData, setContactData] = useState({});
    const navigate = useNavigate()

    const handleSubmitContact = async (el) => {
        el.preventDefault();
        console.log(contactData);
        await actions.newContact(contactData)
        navigate("/")
    }

    const handleInputChange = (el) => {
        const { name, value } = el.target;
        setContactData({ ...contactData, [name]: value });
    };

    return (
        <div className="container">

            <div className="container" key={index}>
                <h1>Add a new contact</h1>

                <form className="list-group-item shadow-sm p-3 mb-5 bg-body-tertiary rounded" onSubmit={el => handleSubmitContact(el)}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputFullName" className="form-label">
                            Full Name
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="exampleInputFullName"
                            placeholder="Enter Full Name"
                            value={contactData.fullName}
                            onChange={el => handleInputChange(el)}
                            name="fullName"
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail" className="form-label">
                            Email
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            id="exampleInputEmail"
                            placeholder="Enter email"
                            value={contactData.email}
                            onChange={el => handleInputChange(el)}
                            name="email"
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInputPhone" className="form-label">
                            Phone
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="exampleInputPhone"
                            placeholder="Enter phone"
                            value={contactData.phone}
                            onChange={el => handleInputChange(el)}
                            name="phone"
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInputAddress" className="form-label">
                            Address
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="exampleInputAddress"
                            placeholder="Enter address"
                            value={contactData.address}
                            onChange={el => handleInputChange(el)}
                            name="address"
                        />
                    </div>

                    <button
                        type="submit"
                        className="mb-3 btn btn-outline-dark border-3 rounded"
                        style={{ width: "40rem" }}
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
};
import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";

export const Contact = () => {
	const { store, actions } = useContext(Context)
	useEffect(() => actions.addContact(), []);

	const [contactData, setContactData] = useState({
		fullName: "",
		email: "",
		phone: "",
		address: "",
	});

	const handleInputChange = (el) => {
		const { name, value } = el.target;
		setContactData({ ...contactData, [name]: value });
	};

	const handleSubmitContact = (contactData) => {
		contactData.preventDefault();

		console.log("Submitted data:", contactData)
	};

	const params = UseParams (); 
	const newContact = store.contacts.find( contact => contact.id === params.contactID )

	return (
		<div className="container">
			{store.contacts.map((newcontact, index) => (
				<div className="container" key={index}>
					<h1>Add a new contact</h1>
					<form className="list-group-item shadow-sm p-3 mb-5 bg-body-tertiary rounded">
						<div className="mb-3">
							<label htmlFor="exampleInputFullName" className="form-label">
								Full Name
							</label>
							<input
								type="text"
								className="form-control"
								id="exampleInputFullName"
								placeholder="Enter Full Name"
								value={newcontact.fullName}
								onChange={handleInputChange}
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
								value={newcontact.email}
								onChange={handleInputChange}
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
								value={newcontact.phone}
								onChange={handleInputChange}
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
								value={newcontact.address}
								onChange={handleInputChange}
								name="address"
							/>
						</div>

						<button
							type="submit"
							className="mb-3 btn btn-outline-dark border-3 rounded"
							style={{ width: "40rem" }}
							onClick={handleSubmitContact}
						>
							Submit
						</button>
					</form>
				</div>
			))}
		</div>
	);
};
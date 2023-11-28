import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";
import "../../styles/contact.css";

export const Contact = () => {
	const { store, actions } = useContext(Context)
	const params = useParams ()

	const currentContact = store.contact.find(contact => contact.id === params.contactID);

	useEffect(() => {
		actions.addContact()
	}, [])

	return (
		<div className="container">
			<h1> Add a new contact</h1>
			store.find
			<form className="list-group-item shadow-sm p-3 mb-5 bg-body-tertiary rounded">
				<div className="mb-3">
					<label htmlFor="exampleInputFullName" className="form-label">Full Name</label>
					<input type="name" className="form-control" id="" placeholder="Enter Full Name" /> {
						currentContact.fullName}
				</div>
				<div className="mb-3">
					<label htmlFor="exampleInputEmail" className="form-label">Email</label>
					<input type="email" className="form-control" id="" placeholder="Enter email" />
					{currentContact.email}
				</div>
				<div className="mb-3">
					<label htmlFor="exampleInputPhone" className="form-label">Phone</label>
					<input type="phone" className="form-control" id="" placeholder="Enter phone" />
					{currentContact.phone}
				</div>
				<div className="mb-3">
					<label htmlFor="exampleInputAddress" className="form-label">Address</label>
					<input type="address" className="form-control" id="" placeholder="Enter address" />
					{currentContact.address}
				</div>

				<button type="submit" className="mb-3 btn btn-outline-dark border-3 rounded" style={{ width: "40rem" }} >Submit</button>
			</form>
			<Link to="/">
				<div> CL Go Home </div></Link>

		</div >

	);
};

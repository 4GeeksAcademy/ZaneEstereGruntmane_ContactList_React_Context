import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/contact.css";

export const Contact = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<h1> Add a new contact</h1>
			<ul className="list-group mt-5">
				{store.contact.map((item, index) => (
					<li key={index} className="list-group-item shadow-sm p-3 mb-5 bg-body-tertiary rounded">
						<form>
							<div className="mb-3">
								<label htmlFor="exampleInputFullName" className="form-label">Full Name</label>
								<input type="name" className="form-control" id="" placeholder="Enter Full Name" />
							</div>
							<div className="mb-3">
								<label htmlFor="exampleInputEmail" className="form-label">Email</label>
								<input type="email" className="form-control" id="" placeholder="Enter email" />
							</div>
							<div className="mb-3">
								<label htmlFor="exampleInputPhone" className="form-label">Phone</label>
								<input type="phone" className="form-control" id="" placeholder="Enter phone" />
							</div>
							<div className="mb-3">
								<label htmlFor="exampleInputAddress" className="form-label">Address</label>
								<input type="address" className="form-control" id="" placeholder="Enter address" />
							</div>

							<button type="submit" className="mb-3 btn btn-outline-dark border-3 rounded" style={{ width: "40rem" }}>Submit</button>
						</form>
					</li>
				))}
			</ul>
			<Link to="/">
				<div> CL Go Home </div></Link>

		</div>

	);
};

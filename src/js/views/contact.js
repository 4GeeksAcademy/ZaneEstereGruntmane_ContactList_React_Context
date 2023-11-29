import React, { useState } from "react";

export const Contact = () => {
	const [contactData, setContactData] = useState({
		fullName: "",
		email: "",
		agendaSlug: "zaneestere",
		address: "",
		phone: "",
	});

	const handleInputChange = (el) => {
		const { name, value } = el.target;
		setContactData({ ...contactData, [name]: value });
	};

	const handleSubmit = (el) => {
		el.preventDefault();
	};

	return (
		<div className="container">
			<h1>Add a new contact</h1>
			<form
				className="list-group-item shadow-sm p-3 mb-5 bg-body-tertiary rounded"
			>
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
						value={contactData.email}
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
						value={contactData.phone}
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
						value={contactData.address}
						onChange={handleInputChange}
						name="address"
					/>
				</div>

				<button
					type="submit"
					className="mb-3 btn btn-outline-dark border-3 rounded"
					style={{ width: "40rem" }}
					onClick={handleSubmit}
				>
					Submit
				</button>
			</form>
		</div>
	);
};

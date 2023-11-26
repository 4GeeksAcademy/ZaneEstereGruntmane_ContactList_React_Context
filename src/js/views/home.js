import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => (
	<div className="container-fluid text-center">
		<div className="cards-wrapper">
			<div className="card-body border border-primary-subtle ms-5 me-5 row g-2 g-lg-3">
				<img
					src={rigoImage}
					className="Foto rounded-circle col-2 col-lg-2"
					alt="..."
				/>
				<div className="contactInfo col-6 col-lg-6"> This is some text within a card body.</div>
				<div className="contactChange-wrapper col-4 col-lg-4 text-center">
					<i className="contactToEdit fa-regular fa-pen-to-square" style={{ color: "#414a6c" }}></i>

					<i className="contactToDelete fa-solid fa-trash-arrow-up" style={{ color: "#414a6c" }}></i>

				</div>

			</div>
		</div>
	</div>
);

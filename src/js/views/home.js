import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => (
	<div className="container-fluid text-center">
		<div className="card-wrapper">
			<div className="card-body border border-primary-subtle ms-5 me-5 row g-2 g-lg-3">
				<img
					src={rigoImage}
					className="photo rounded-circle col-2 col-lg-2"
					alt="..."
				/>
				<div className="cardtInfo col-6 col-lg-6">
					<ol className="list-group">
						<li className="list-group-item d-flex justify-content-between align-items-start border border-0">
							<div className="fw-bold fs-4"> Name
								<div className="address">
									<i className="fa-sharp fa-solid fa-location-pin" style={{ color: "#c5d7f6" }}></i>
								</div>
								<div className="phone">
									<i className="fa-sharp fa-solid fa-phone" style={{ color: "#c5d7f6" }} ></i>
								</div>
								<div className="email">
									<i className="fa-sharp fa-regular fa-envelope" style={{ color: "#c5d7f6" }}  ></i>
								</div>
							</div>
						</li>
					</ol>
				</div>

				<div className="contactChange-wrapper col-4 col-lg-4 align-self-center">
					<i className="contactToEdit fa-regular fa-pen-to-square fa-xl" style={{ color: "#414a6c" }}></i>

					<i className="contactToDelete fa-solid fa-trash-arrow-up fa-xl" style={{ color: "#414a6c" }}></i>

				</div>

			</div >
		</div >
	</div >
);

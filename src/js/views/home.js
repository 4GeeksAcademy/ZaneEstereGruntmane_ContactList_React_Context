import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => (
	<div className="container-fluid text-center">
		<div className="card-wrapper">
			<div className="card-body border border-primary-subtle row ms-5 me-5  g-2 g-lg-2">
				<img
					src={rigoImage}
					className="photo rounded-circle col-2 col-lg-2"
					alt="..."
				/>
				<div className="card-info col-8 col-lg-6">
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

				{/* edit and delete icons which is not behaving yet
				<div className="contact-change col-2 col-lg-4">
                    <i className="contact-to-edit fa-regular fa-pen-to-square"></i>
                    <i className="contact-to-delete fa-regular fa-trash-can"></i>
                </div> */}

			</div>

		</div>
	</div>
);

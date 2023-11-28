import React, { useContext, useEffect } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context)
	useEffect(() => {
		actions.getAgenda()
	}, [])

	return (
		store.contacts.map((el, index) =>
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
									<div className="justify-content-start">
										<div className="fw-bold fs-4"> {el.full_name} </div>
										<div className="address">
											<i className="fa-sharp fa-solid fa-location-pin me-2" style={{ color: "#c5d7f6" }}></i>
											{el.address}
										</div>
										<div className="phone">
											<i className="fa-sharp fa-solid fa-phone me-2" style={{ color: "#c5d7f6" }} ></i>
											{el.phone}
										</div>
										<div className="email">
											<i className="fa-sharp fa-regular fa-envelope me-2" style={{ color: "#c5d7f6" }}  ></i>
											{el.email}
										</div>
									</div>
								</li>
							</ol>

						</div>

						<div className="contact-change col-2 col-lg-4">
							<i className="contact-to-edit fa-regular fa-pen-to-square" style={{ color: "#c5d7f6" }} ></i>
							<i className="contact-to-delete fa-regular fa-trash-can" style={{ color: "#c5d7f6" }} ></i>
						</div>

					</div>

				</div>
			</div>
		));
}

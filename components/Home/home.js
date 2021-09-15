/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
// import dynamic from "next/dynamic";
import Header from "../Header/Header";
import HomeButton from "../HomeButton/HomeButton";
import HeaderLinks from "../HeaderLinks/HeaderLinks";
import Footer from "../Footer/Footer";

import HomePhoto from "../../assets/home-kv-mobile.jpg";
// import HomePhoto from "../../assets/home-faas-mobile.jpg"
import PhoneView from "../../assets/phone-view.png";
import { headerRoutes } from "../../config/routes_ca";

const Home = () => {
	const [drawerOpen, setDrawerOpen] = useState(false);

	return (
		<div>
			<Header
				brand={<HomeButton />}
				pageLinks={
					<HeaderLinks
						routes={headerRoutes}
						onClose={() => setDrawerOpen(false)}
					/>
				}
				drawerOpen={drawerOpen}
				setDrawerOpen={setDrawerOpen}
			/>
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					position: "relative"
				}}
			>
				<picture>
					<img
						style={{ width: "800px", height: "1100px" }}
						src={HomePhoto.src}
						alt="Picture of the author"
					/>
				</picture>
				<picture style={{ position: "absolute", top: "86%" }}>
					<img
						style={{ width: "300px", height: "150px" }}
						src={PhoneView.src}
						alt="Picture of the author"
					/>
				</picture>
			</div>
			<Footer />
		</div>
	);
};

export default Home;

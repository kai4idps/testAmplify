import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// import Image from 'components/Image';
import FURBO_LOGO_DARK_SVG from "../../assets/furbo-logo-dark.svg";
import { useRouter } from "next/router";
import styles from "./homeButtonStyle";

const useStyles = makeStyles(styles);

const HomeButton = () => {
	const classes = useStyles();
	const region = "ca";
	const router = useRouter();

	// const location = useLocation();

	const handleHomeClicked = () => {
		// window.location = location.search
		//     ? `/${region}${location.search}`
		//     : `/${region}`;
		router.push("/");
	};

	return (
		<div role="none" className={classes.iconButton} onClick={handleHomeClicked}>
			<Icon className={classes.icon}>
				<img
					className={classes.icon}
					alt="furbo-logo"
					src={FURBO_LOGO_DARK_SVG.src}
					type="image/svg+xml"
				/>
			</Icon>
		</div>
	);
};

export default HomeButton;

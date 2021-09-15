import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
// import { useTranslation } from 'react-i18next';

import styles from "./shopButtonStyle";

const useStyles = makeStyles(styles);

export default function ShopButton(props) {
	const classes = useStyles();
	const { className } = props;
	const btnClasses = `${classes.button} ${className || null}`;
	// const { t } = useTranslation();
	const language = "ca";
	// const location = useLocation();
	return (
		<div className={classes.root}>
			<Button
				// component={Link}
				to={{
					pathname: `/${language}/products/furbo-dog-camera`
					// search: location.search,
				}}
				className={btnClasses}
			>
				Shop Now
			</Button>
		</div>
	);
}

ShopButton.propTypes = {
	className: PropTypes.object
};

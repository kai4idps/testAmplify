import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";
import SHOP_ICON from "../../assets/shop.svg";
import styles from "./shopIconButtonStyle";

const useStyles = makeStyles(styles);

const ShopIconButton = props => {
	const classes = useStyles();
	const { className } = props;
	const language = "ca";

	const btnClasses = `${classes.button} ${className || null}`;
	// const location = useLocation();
	return (
		<div className={classes.root}>
			<IconButton
				// component={Link}
				to={{
					pathname: `/${language}/products/furbo-dog-camera`
					// search: location.search,
				}}
				className={btnClasses}
			>
				<Icon className={classes.icon}>
					<img
						src={SHOP_ICON.src}
						alt="SHOP_ICON"
						className={classes.image}
						type="image/svg+xml"
					/>
				</Icon>
			</IconButton>
		</div>
	);
};

export default ShopIconButton;

ShopIconButton.propTypes = {
	className: PropTypes.object
};

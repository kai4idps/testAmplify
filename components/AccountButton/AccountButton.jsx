/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
// import { useTranslation } from 'react-i18next';
import { useRouter } from "next/router";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";
import ACCOUNT_ICON from "../../assets/account.svg";
import HOME_ICON from "../../assets/home.svg";
import SIGN_OUT_ICON from "../../assets/sign_out.svg";
// import { clearAllStorages, readStorage, STORAGE_KEY } from 'utils/localStorage';
import styles from "./accountButtonStyle";

const useStyles = makeStyles(styles);

// const localSearchHandler = sq => {
// 	const param = new URLSearchParams(sq);
// 	param.delete("token");
// 	param.delete("step");
// 	return param.toString();
// };
const useClickOutside = (ref, callback) => {
	const handleClick = e => {
		if (ref.current && !ref.current.contains(e.target)) {
			callback();
		}
	};
	useEffect(() => {
		document.addEventListener("click", handleClick, { passive: true });
		return () => {
			document.removeEventListener("click", handleClick, { passive: true });
		};
	});
};

const AccountButton = props => {
	const classes = useStyles();
	const { isAuth, content, className } = props;
	// const { t } = useTranslation();
	const ref = useRef(null);
	const [isDropdown, setIsDropdown] = useState(false);
	const router = useRouter();
	const location = router;
	// const accountId = readStorage(STORAGE_KEY.ACCOUNT_ID);
	// const email = readStorage(STORAGE_KEY.EMAIL);
	const rootClasses = `${classes.root} ${className || null}`;

	const handleCloseDropdown = () => {
		setIsDropdown(false);
	};

	const handleToggleDropdown = () => {
		setIsDropdown(!isDropdown);
	};

	const handleAccountButtonClick = () => {
		if (isAuth) {
			handleToggleDropdown();
		} else {
			handleClickHome();
		}
	};

	const handleClickHome = () => {
		handleToggleDropdown();
		// history.push({
		//     pathname: PAGE_PATHS[PAGE_KEYS.ACCOUNT_INFO],
		//     search: localSearchHandler(location.search),
		// });
	};

	const handleClickSignOut = () => {
		// clearAllStorages('Manual', 'USER_MANUAL_LOGOUT', accountId, email);
		handleToggleDropdown();
		// if (
		//     location.pathname !== PAGE_PATHS[PAGE_KEYS.LOGIN] &&
		//     location.pathname !== PAGE_PATHS[PAGE_KEYS.ACCOUNT_VERIFICATION] &&
		//     location.pathname !==
		//         PAGE_PATHS[PAGE_KEYS.ACCOUNT_VERIFICATION_EXPIRED]
		// ) {
		//     const sq = localSearchHandler(location.search);
		//     window.location = `?${sq}`;
		// }
	};

	useClickOutside(ref, handleCloseDropdown);

	if (!content) {
		return (
			<div
				role="none"
				className={rootClasses}
				onClick={handleAccountButtonClick}
			>
				{content}
			</div>
		);
	}

	return (
		<div ref={ref} className={rootClasses}>
			<IconButton className={classes.button} onClick={handleAccountButtonClick}>
				<Icon className={classes.icon}>
					<img
						loading="lazy"
						src={ACCOUNT_ICON.src}
						alt="ACCOUNT_ICON"
						className={classes.image}
						type="image/svg+xml"
					/>
				</Icon>
			</IconButton>
			{isDropdown && (
				<div className={classes.dropdown}>
					<div
						role="none"
						className={classes.dropdownMenu}
						onClick={handleClickHome}
					>
						<Icon className={classes.dropdownIcon}>
							<img
								loading="lazy"
								src={HOME_ICON.src}
								alt="HOME_ICON"
								className={classes.menuHomeImage}
								type="image/svg+xml"
							/>
						</Icon>
						我的帳號
					</div>
					<hr className={classes.hr} />
					<div
						role="none"
						className={classes.dropdownMenu}
						onClick={handleClickSignOut}
					>
						<Icon className={classes.dropdownIcon}>
							<img
								loading="lazy"
								src={SIGN_OUT_ICON.src}
								alt="SIGN_OUT_ICON"
								className={classes.menuSignOutImage}
								type="image/svg+xml"
							/>
						</Icon>
						登出
					</div>
				</div>
			)}
		</div>
	);
};

AccountButton.propTypes = {
	isAuth: PropTypes.bool,
	content: PropTypes.node,
	className: PropTypes.object
};

export default AccountButton;

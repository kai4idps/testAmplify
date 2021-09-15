import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { makeStyles, withStyles, useTheme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Add from "@material-ui/icons/Add";
import Remove from "@material-ui/icons/Remove";
import dynamic from "next/dynamic";
import {
	aboutLinks,
	supportLinks,
	REGION_INFO,
	socialLinks
} from "../../config/routes_ca";
// import DialogFlag from '../DialogFlag/DialogFlag';
import FooterButton from "./FooterButton";
import EmailInput from "./EmailInput";
import styles from "./footerStyle";

const useStyles = makeStyles(styles);

const AccordionSummary = withStyles({
	root: {
		minHeight: "40px",
		height: "40px",
		padding: "0px",
		"&$expanded": {
			minHeight: "40px",
			height: "40px"
		}
	},
	content: {
		margin: 0,
		padding: "0px",
		"&$expanded": {
			margin: 0
		}
	},
	expanded: {}
})(MuiAccordionSummary);

const AccordionDetails = withStyles({
	root: {
		padding: "0px"
	}
})(MuiAccordionDetails);

const Accordion = withStyles({
	expanded: {
		"&$expanded": {
			margin: 0
		}
	}
})(MuiAccordion);

const date = new Date();

const CUSTOMER_SUPPORT = "Customer Support";
const ABOUT = "About";
const ALL_RIGHTS_RESERVED = "All Rights Reserved";
const VISIT_YOUR_LOCATION = "Visit Your Location";
const STAY_IN_TOUCH_WITH_US = "Stay in touch with us";
const SIGN_UP_FOR_UPDATES_AND_SPECIAL_OFFERS =
	"Sign up for our updates and special offers!";

const CustomAccordion = props => {
	const { title, list } = props;
	const classes = useStyles();
	const [open, setOpen] = useState(false);
	const handleChange = () => {
		setOpen(prev => !prev);
	};
	return (
		<Accordion
			elevation={0}
			className={classes.customAccordion}
			onChange={handleChange}
		>
			<AccordionSummary
				className={classes.customAccordionHeader}
				expandIcon={
					open === true ? (
						<Remove style={{ color: "#ffffff" }} />
					) : (
						<Add style={{ color: "#ffffff" }} />
					)
				}
			>
				{title}
			</AccordionSummary>
			<AccordionDetails className={classes.customAccordionList}>
				{list.map(info => (
					<FooterButton key={info.title} info={info} />
				))}
			</AccordionDetails>
		</Accordion>
	);
};

CustomAccordion.propTypes = {
	title: PropTypes.string.isRequired,
	list: PropTypes.array.isRequired
};

const Footer = props => {
	const classes = useStyles();
	const language = "ca";
	const theme = useTheme();
	const smDown = useMediaQuery(theme.breakpoints.down("sm"), { noSsr: true });
	const DynamicDialogFlag = dynamic(() => import("../DialogFlag/DialogFlag"));
	const [openRegionList, setOpenRegionList] = useState(false);

	const handleRegionEdit = () => {
		setOpenRegionList(!openRegionList);
		// if (!smDown) {
		//     setTimeout(() => {
		//         window.scrollTo({
		//             top:
		//                 document.body.scrollHeight ||
		//                 document.documentElement.scrollHeight,
		//             behavior: 'smooth',
		//         });
		//     }, 300);
		// }
	};

	useEffect(() => {
		let timer =
			openRegionList &&
			!smDown &&
			setTimeout(() => {
				window.scrollTo({
					top:
						document.body.scrollHeight || document.documentElement.scrollHeight,
					behavior: "smooth"
				});
			}, 300);
		return () => {
			clearTimeout(timer);
		};
	}, [openRegionList, smDown]);

	const handleRegionListClose = () => {
		setOpenRegionList(false);
	};

	return (
		<>
			<footer className={classes.root}>
				<Container maxWidth="lg" className={classes.container}>
					<Hidden mdUp>
						<CustomAccordion title={ABOUT} list={aboutLinks} />
						<CustomAccordion title={CUSTOMER_SUPPORT} list={supportLinks} />
						<div className={classes.socialLinkContainer}>
							{socialLinks.map(item => (
								<IconButton
									key={item.name}
									className={classes.iconButton}
									href={item.href}
								>
									{item.icon}
								</IconButton>
							))}
						</div>
					</Hidden>
					<Hidden smDown>
						<Grid container className={classes.gridContainer}>
							<Grid item className={classes.gridItem} md={4}>
								<div className={classes.gridTitle}>{ABOUT}</div>
								<div className={classes.gridItemContainer}>
									{aboutLinks.map(info => (
										<FooterButton key={info.title} info={info} />
									))}
								</div>
							</Grid>
							<Grid item className={classes.gridItem} md={4}>
								<div className={classes.gridTitle}>{CUSTOMER_SUPPORT}</div>
								<div className={classes.gridItemContainer}>
									{supportLinks.map(info => (
										<FooterButton key={info.title} info={info} />
									))}
								</div>
							</Grid>
							<Grid item className={classes.gridItem} md={4}>
								<div className={classes.socialLinkContainer}>
									{socialLinks.map(item => (
										<IconButton
											key={item.name}
											className={classes.iconButton}
											href={item.href}
										>
											{item.icon}
										</IconButton>
									))}
								</div>
								<div className={classes.emailContainer}>
									<div
										style={{
											fontWeight: "bold",
											fontSize: "18px"
										}}
									>
										{STAY_IN_TOUCH_WITH_US}
									</div>
									{SIGN_UP_FOR_UPDATES_AND_SPECIAL_OFFERS}
									<EmailInput />
								</div>
							</Grid>
						</Grid>
					</Hidden>
					<Divider variant="middle" className={classes.divider} />
					<div className={classes.bottomGrid}>
						<Button className={classes.flagButton} onClick={handleRegionEdit}>
							<img
								loading="lazy"
								className={classes.flag}
								src={REGION_INFO[language.toUpperCase()]?.image.src}
								alt={REGION_INFO[language.toUpperCase()]?.code}
								type="image/svg+xml"
							/>
							<div className={classes.flagText}>
								{REGION_INFO[language.toUpperCase()]?.country}
							</div>
						</Button>

						<span className={classes.termsLinkText}>
							{`Sitemap © ${date.getFullYear()}. ${ALL_RIGHTS_RESERVED}`}
						</span>
					</div>
					<Hidden mdUp>
						<DynamicDialogFlag
							openDialog={openRegionList}
							handleCloseDialog={handleRegionListClose}
						/>
					</Hidden>
					<Hidden smDown>
						<div>
							<div className={classes.accordionContainer}>
								<Accordion elevation={0} expanded={openRegionList}>
									<AccordionSummary
										style={{
											display: "none"
										}}
									/>
									<AccordionDetails className={classes.accordionDetails}>
										<div className={classes.accordionTitle}>
											{VISIT_YOUR_LOCATION}
										</div>
										<Grid container className={classes.accordionFlagsContainer}>
											{Object.values(REGION_INFO).map(item => (
												<Grid item md={3} key={item.country}>
													<Button
														className={classes.accordionFlagsButton}
														onClick={() => {}}
													>
														<img
															loading="lazy"
															className={classes.flag}
															src={item.image.src}
															alt={item.code}
															type="image/svg+xml"
														/>
														<div className={classes.accordionFlagsText}>
															{item.country}
														</div>
													</Button>
												</Grid>
											))}
										</Grid>
									</AccordionDetails>
								</Accordion>
							</div>
						</div>
					</Hidden>
				</Container>
			</footer>
		</>
	);
};
export default Footer;

Footer.propTypes = {
	socialLinks: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string,
			link: PropTypes.string,
			icon: PropTypes.node
		}).isRequired
	),
	termsLinks: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string,
			link: PropTypes.string
		}).isRequired
	)
};

import React, { useState } from 'react';
import PropTypes from 'prop-types';
// import { useTranslation } from 'react-i18next';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Link from 'next/link'
import AccountButton from '../AccountButton';
import Button from '@material-ui/core/Button';
import Grow from '@material-ui/core/Grow';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import ExpandMore from '@material-ui/icons/ExpandMore';
// import Image from 'components/Image';
import ACCOUNT_ICON from '../../assets/account.svg';
import DialogFlag from '../DialogFlag';
import { REGION_INFO } from '../../config/routes_ca.js';
import styles from './headerLinksStyle';

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
    // const { t } = useTranslation();
    const [productOpen, setProductOpen] = useState(false);
    const [openRegionList, setOpenRegionList] = useState(false);
    const theme = useTheme();
    const smDown = useMediaQuery(theme.breakpoints.down('sm'));
    const { routes, onClose, isAuth = false } = props;
    // const location = useLocation();
    const language = 'ca';

    const pageOnClick = () => {
        onClose();
    };

    const productOnClick = () => {
        setProductOpen(!productOpen);
    };

    const handleRegionEdit = () => {
        setOpenRegionList(!openRegionList);
    };

    const handleRegionListClose = () => {
        setOpenRegionList(false);
    };

    const classes = useStyles();
    return (
        <>
            <List className={classes.list}>
                <ListItem className={classes.listItem}>
                    <Button
                        className={classes.button}
                        onClick={() => productOnClick()}
                    >
                        Our Products
                        <ExpandMore
                            className={
                                productOpen
                                    ? classes.expandMore
                                    : classes.expandLess
                            }
                        />
                    </Button>
                </ListItem>
                {routes.map((item) => (
                    <>
                        {item.key !== 'FDN' && item.key !== 'PRODUCTS' && (
                            <ListItem
                                className={`${classes.listItem} ${
                                    smDown
                                        ? productOpen
                                            ? classes.moveDown
                                            : classes.moveUp
                                        : null
                                }`}
                                key={item.title}
                            >
                                {item?.href ? (
                                    <Button
                                        className={classes.button}
                                        href={item.href}
                                    >
                                        {item.title}
                                    </Button>
                                ) : (
                                    <> 
                                     <Link href={item.path}>
                                        <Button
                                        className={classes.button}
                                        // component={Link}
                                        to={{
                                            pathname: item.path,
                                            // search: location.search,
                                        }}
                                        startIcon={
                                            smDown
                                                ? item.icon.smDown
                                                : item.icon.mdUp
                                        }
                                    >
                                        {item.title}
                                    </Button>
                                    </Link>
                                     </>
                                )}
                            </ListItem>
                        )}
                    </>
                ))}
                {smDown && (
                    <>
                        <ListItem
                            className={`${classes.listItem} ${
                                smDown
                                    ? productOpen
                                        ? classes.moveDown
                                        : classes.moveUp
                                    : null
                            }`}
                        >
                            <Divider
                                variant="middle"
                                className={classes.drawerDivider}
                            />
                        </ListItem>
                        <ListItem
                            className={`${classes.listItem} ${
                                smDown
                                    ? productOpen
                                        ? classes.moveDown
                                        : classes.moveUp
                                    : null
                            }`}
                        >
                            <AccountButton
                                isAuth={isAuth}
                                content={
                                    <Button className={classes.button}>
                                        <img
                                            loading='lazy'
                                            src={ACCOUNT_ICON.src}
                                            className={classes.image}
                                            type="image/svg+xml"
                                        />
                                        Sign In
                                    </Button>
                                }
                                className={classes.accountButton}
                            />
                        </ListItem>
                        <ListItem
                            className={`${classes.listItem} ${
                                smDown
                                    ? productOpen
                                        ? classes.moveDown
                                        : classes.moveUp
                                    : null
                            }`}
                        >
                            <Button
                                className={classes.button}
                                onClick={handleRegionEdit}
                            >
                                <img
                                    loading='lazy'
                                    className={classes.flag}
                                    src={
                                        REGION_INFO[language.toUpperCase()]
                                            ?.image.src
                                    }
                                    alt={
                                        REGION_INFO[language.toUpperCase()]
                                            ?.code
                                    }
                                    type="image/svg+xml"
                                />
                                <div className={classes.flagText}>
                                    {
                                        REGION_INFO[language.toUpperCase()]
                                            ?.country
                                    }
                                </div>
                            </Button>
                        </ListItem>
                        <DialogFlag
                            openDialog={openRegionList}
                            handleCloseDialog={handleRegionListClose}
                        />
                    </>
                )}
            </List>
            <Grow in={productOpen} className={classes.productList}>
                <List>
                    {routes.map((item) => (
                        <>
                            {(item.key === 'FDN' ||
                                item.key === 'PRODUCTS') && (
                                <>
                                    <ListItem
                                        className={classes.listItem}
                                        // key={t(item.title)}
                                    >
                                        {item?.href ? (
                                            <Button
                                                className={classes.button}
                                                href={item.href}
                                            >
                                                {item.title}
                                            </Button>
                                        ) : (
                                            <>
                                        <Link href={item.path}>
                                            <Button
                                                className={classes.button}
                                                // component={Link}
                                                to={{
                                                    pathname: item.path,
                                                }}
                                                startIcon={
                                                    smDown
                                                        ? item.icon.smDown
                                                        : item.icon.mdUp
                                                }
                                            >
                                                {item.title}
                                            </Button>
                                        </Link>
                                            </>
                                        )}
                                    </ListItem>
                                    {item.key === 'PRODUCTS' && (
                                        <ListItem className={classes.listItem}>
                                            <div className={classes.divider} />
                                        </ListItem>
                                    )}
                                </>
                            )}
                        </>
                    ))}
                </List>
            </Grow>
        </>
    );
}

HeaderLinks.defaultProps = {
    routes: [],
};

HeaderLinks.propTypes = {
    routes: PropTypes.array,
    onClose: PropTypes.func,
    isAuth: PropTypes.bool,
};

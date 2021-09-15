/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import BLACK_TRIANGLE from '../../assets/black_triangle.svg';
import styles from './footerStyle';

const useStyles = makeStyles(styles);

const EmailInput = () => {
    const classes = useStyles();
    return (
        <div className={classes.emailInputRoot}>
            <form className={classes.emailForm}>
                <InputBase className={classes.input} placeholder="Email" />
                <div className={classes.submitButtonContainer}>
                    <IconButton className={classes.submitButton}>
                        <img
                            loading='lazy'
                            className={classes.blackTriangle}
                            src={BLACK_TRIANGLE.src}
                            alt="email"
                            type="image/svg+xml"
                        />
                    </IconButton>
                </div>
            </form>
        </div>
    );
};

export default EmailInput;

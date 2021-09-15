import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import styles from './footerStyle';

const useStyles = makeStyles(styles);

const FooterButton = (props) => {
    const { info } = props;
    const classes = useStyles();
    return (
        <div className={classes.linkButtonContainer}>
            <Button
                className={classes.linkButton}
                href={info?.href}
                component={ 'button'}
                to={
                    info.href
                        ? null
                        : {
                            pathname: `/ca${info.path}`,
                        }
                }
            >
                {info.title}
            </Button>
        </div>
    );
};

export default FooterButton;

FooterButton.propTypes = {
    info: PropTypes.object,
};

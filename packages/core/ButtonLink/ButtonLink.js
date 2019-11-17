import React from "react";
import PropTypes from 'prop-types';

const ButtonLink = props => (
    <Button to={props.path}>
        {props.label}
    </Button>
);

ButtonLink.defaultProps = {
    path: "/",
    label: "ButtonLink"
};

ButtonLink.propTypes = {
    label: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired
};

export default ButtonLink;

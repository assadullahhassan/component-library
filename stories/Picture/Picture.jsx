import React from 'react'
import classNames from "classnames";
import PropTypes from "prop-types";

import "./Picture.css";

export const Picture = ({

    src,
    width,
    height,
    isRounded
}) => {
    return (
     <div className={classNames("picture", {
        "is-rounded": isRounded
     })}>
        <img src={src} style={{ height, maxWidth: width}}/>
    </div>
)}

Picture.propTypes = {
    src: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number,
    isRounded: PropTypes.bool
}

export default Picture
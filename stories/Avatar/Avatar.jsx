import { mapSize } from "./helpers"
import PropTypes from "prop-types";
import { options } from "./constants"
import Picture from "../Picture"
import classNames from "classnames";


import "./Avatar.css"

export const Avatar = ({ size, src}) => {
    return (
        <div className={classNames("avatar",)}>
            <Picture
                src={src}
                width={mapSize(size)}
                height={mapSize(size)}
                isRounded
            />
        </div>
    )
}

Avatar.propTypes = {
    src: PropTypes.string.isRequired,
    size: PropTypes.oneOf(options.sizes)
}

Avatar.defaultProps = {
    size: "md"
}

export default Avatar
import React from "react";
import "./SocialButton.scss";
import SvgIcon from "@material-ui/core/SvgIcon";

const SocialButton = ({ link, icon }) => {
    return (
        <div className="SocialButton" href={link}>
            <SvgIcon component={icon} className="SocialIcon" />
        </div>
    );
};

export default SocialButton;

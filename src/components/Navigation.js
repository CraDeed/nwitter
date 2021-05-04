import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "./Navigation.scss";

const Navigation = ({ userObj }) => {
    return (
        <nav>
            <ul className="ulContainer">
                <li>
                    <Link to="/" style={{ marginRight: 10 }}>
                        <FontAwesomeIcon
                            icon={faTwitter}
                            color={"#04AAFF"}
                            size="2x"
                        />
                    </Link>
                </li>
                <li>
                    <Link to="/profile" className="profileLink">
                        <FontAwesomeIcon
                            icon={faUser}
                            color={"#04AAFF"}
                            size="2x"
                        />
                        <span style={{ marginTop: 10 }}>
                            {" "}
                            {userObj?.displayName?.length
                                ? `${userObj.displayName}'s Profile`
                                : "Profile"}
                        </span>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;

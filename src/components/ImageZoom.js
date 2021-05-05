import React from "react";
import "./ImageZoom.scss";

const ImageZoom = ({ image, onClose }) => {
    return (
        <div className="overlay">
            <header className="topheader">
                <h1>상세 이미지</h1>
                <button onClick={onClose}>X</button>
            </header>
            <div className="imageback">
                <img className="nav" src={image} alt={image} />
            </div>
        </div>
    );
};

export default ImageZoom;

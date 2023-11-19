import React, { useState } from "react";

export default function AnimeCharacterCard(props) {
    const [isFlip, setIsFlip] = useState(false);

    function toggleFlip() {
        setIsFlip(!isFlip);
    }

    return (
        <div className="anime-character-card" onClick={toggleFlip}>
            <div className={`card ${isFlip ? "flip" : ""}`}>
                <div className="card-front">
                    <div className="anime-character-card-image">
                        <img src={props.url} /> 
                    </div>
                </div>

                <div className="card-back">
                    <div className="backcard-data">
                        <p className="character-title">{props.name}</p>
                        <p><span className="character-summary">{props.summary ? props.summary : "Looks like no summary is avaliable"}</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
}
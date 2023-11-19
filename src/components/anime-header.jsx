import React from 'react';
import nicoIcon from '../resources/nico-icon.png';

export default function AnimeHeader() {
    return (
        <div className="my-header">
            <img src={nicoIcon} alt="nico-icon" />
            <h1 className='header-title'>Anime Wall</h1>
        </div>
    )
}
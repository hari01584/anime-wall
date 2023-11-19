import React, { useEffect, useState } from 'react';
import AnimeCharacterCard from './cards/anime-character-card';
import { getCharacterData } from '../api/jikan';

export default function AnimeBody() {
    const [searchText, setSearchText] = useState('');
    const [characters, setCharacters] = useState([]);

    function onSearchTextChange(event) {
        setSearchText(event.target.value);
    }

    function searchButtonClick() {
        console.log(searchText);
    }

    useEffect(() => {
        function characterDataCallback(data) {
            let aboutChar = data.data.about
            let charName = data.data.name
            let charImage = data.data.images.jpg.image_url
            console.log(data)
            console.log(aboutChar)
            setCharacters((characters => 
                [...characters, {about: aboutChar, name: charName, image: charImage}]
            ));
            console.log(characters.length)
        }

        getCharacterData(characterDataCallback);
    }, []);

    return (
        <>
            <div className="search-bar-container">
            <div className="search-bar">
                <input type="text" className="search-input" placeholder="Search..." onChange={onSearchTextChange} value={searchText} />
                <button type="button" className="search-button" onClick={searchButtonClick}>Search</button>
            </div>
            </div>

            <div id="cards-container">
                {
                    characters.map((character, index) => {
                        return (
                            <AnimeCharacterCard key={index} name={character.name} summary={character.about} url={character.image} />
                        )
                    })   
                }
                {/* <AnimeCharacterCard url="https:\/\/cdn.myanimelist.net\/images\/characters\/8\/46778.jpg" />
                <AnimeCharacterCard url="https:\/\/cdn.myanimelist.net\/images\/characters\/12\/214767.jpg" />
                <AnimeCharacterCard url="https:\/\/cdn.myanimelist.net\/images\/characters\/7\/472813.jpg" />
                <AnimeCharacterCard url="https:\/\/cdn.myanimelist.net\/images\/characters\/6\/10646.jpg" />
                <AnimeCharacterCard url="https:\/\/cdn.myanimelist.net\/images\/characters\/13\/285547.jpg" />
                <AnimeCharacterCard url="https:\/\/cdn.myanimelist.net\/images\/characters\/8\/474213.jpg" />
                <AnimeCharacterCard url="https:\/\/cdn.myanimelist.net\/images\/characters\/3\/161505.jpg" /> */}
            </div>
        </>
    )
}
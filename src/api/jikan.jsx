import React from "react";

export async function getCharacterData(func) {
    for (let i = 0; i < 50; i++) {
        const response = await fetch("https://api.jikan.moe/v4/random/characters");
        if (response.status !== 200) {
            break;
        }
        const data = await response.json();
        func(data);
    }
}
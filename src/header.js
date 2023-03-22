import React, { useState, useEffect } from 'react';
/* import './style.css'; */

//Skapar header med sökruta och "sök"-knapp. Funktionen som anropas när en användare klickar på sökknappen skickas med som en "prop".
export default function Header(props) {
  return (
    <section className="header">
      <h1>Klok som en bok</h1>
      <span>
        <input
          type="text"
          placeholder="Sök böcker, författare etc."
          className="searchBar"
          id="searchBar"
        />
        {/*         sök-knapp som anropar vår "search-funktion" i app.js och tar texten som skrivit in i sökrutan via getElementByID funtionen.  */}
        <button
          className="btn"
          onClick={() =>
            props.Search(document.getElementById('searchBar').value)
          }
        >
          Sök
        </button>
      </span>
    </section>
  );
}

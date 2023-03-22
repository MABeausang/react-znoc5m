import React, { useEffect, useState } from 'react';
import BookItem from './BookItem';
import ResultTable from './ResultTable';
import './style.css';
import Header from './header.js';

//funktionen app som är parent element till header, BookItem och ResultTable. 
export default function App() {
  //Statevariabler. 
  const [books, setBooks] = useState([]);
  const [activeBook, setActiveBook] = useState(null);

//Funktion som anropas från resulttable när någon clickar på en rad i vårt table. 
//Denna sätter vår statevariabel active Book vilket signalerar att en statevariabel uppdaterats och sidan skall uppdateras med denna information (i detta fall att visa bokens information som användaren klickat på)
  function displayBook(index) {
    setActiveBook(books[index]);
  }

  //Funktion som initieras när en användare clickar på sök-knappen. Den tar det som användaren skrivit in i sökrutan som input till funktionen och skapar ett api-anrop till openlibrary med denna information som söksträng. API-svaret sparas i variabeln books som en array. 
  function Search(searchwords) {
    fetch('https://openlibrary.org/search.json?title=' + searchwords)
      .then((response) => response.json())
      .then((data) => setBooks(data.docs.slice(0, 30))); // Innehåller alla JSON data

    console.log(searchwords);
  }
//genererar vår HTML kod
  return (
    <div>
      <Header className="header" Search={Search} />
      <BookItem book={activeBook} />
      <ResultTable data={books} displayBook={displayBook} />
    </div>
  );
}

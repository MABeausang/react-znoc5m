import React from 'react';

//Denna funktion skapar alla HTML kod för ett bok-element. Dvs den bok som en användare klickar på i vår resultat-tabell.
export default function Book(props) {
  //if satsen gör att om vi inte ännu har klickat på en bok så kommer ingen information upp på sidan.
  if (!props.book) {
    return <div></div>;
  } else {
    //nedanstående genererar vår "bookItem" på sidan som utgår i från den bok som skickas med som "prop" till Book-komponenten. Vår funktion hämtar informationen ur bok-objectet samt hämtar en bild enligt den sökväg som openLibrary har för book-covers.

    return (
      <section className="bookdetails">
        <h2>{props.book.title}</h2>
        <div className="book--image">
          {props.book.isbn ? (
            <img
              src={`https://covers.openlibrary.org/b/isbn/${props.book.isbn[0]}-M.jpg`}
              alt="no image"
            />
          ) : (
            'no image'
          )}
        </div>
        <dt>Författare</dt>
        <dd>{props.book.author_name.join(', ')}</dd>
        <dt>Utgivningsår</dt>
        <dd> {props.book.first_publish_year}</dd>
        <dt>Förlag</dt>
        <dd>
          {/* Turnery behövs för dessa i de fall då t.ex. en gammal bok helt saknar en publisher eller språk (fick detta fel vid en bok som var från 1700-talet.). .Join() funktionen crashar i dessa fall då join inte kan göras på null-object.  */}
          {props.book.publisher
            ? props.book.publisher.join(', ')
            : 'no publisher'}
        </dd>
        <dt>Språk</dt>
        <dd> {props.book.language && props.book.language.join(', ')}</dd>
        <dt>Ämnen</dt>
        <dd>{props.book.subject && props.book.subject.join(', ')}</dd>
      </section>
    );
  }
}

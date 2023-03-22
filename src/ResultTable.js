import React from 'react';

// ResultTable kan bli en egen komponent. Titta på hur det går till i workshopen som med HP!!
export default function ResultTable(props) {
  return (
    <table>
      <thead>
        <tr>
          <th>Författare</th>
          <th>Titel</th>
          <th>Utgivningsår</th>
        </tr>
      </thead>
      {/*    lägg in en array.map som går igenom vår "props" array och skriver ut table data för varje bok */}
      {/* <td> {props.data.length > 0 ? props.data[0].title : 'no books'}</td> */}
      <tbody>
        {props.data.map((book, index) => {
          return (
            <tr key={index} onClick={() => props.displayBook(index)}>
              <td>{book.author_name[0]}</td>
              <td>{book.title}</td>
              <td>{book.first_publish_year}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

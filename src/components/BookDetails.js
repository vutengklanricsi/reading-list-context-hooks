import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";

const BookDetails = ({ book }) => {
	const {removeBook} = useContext(BookContext)
	
	const handleRemove = () => {
		removeBook(book.id)
	}
	
	return (
    <li onClick={handleRemove}>
      <div className="title">{book.title}</div>
      <div className="author">{book.author}</div>
    </li>
  );
};

export default BookDetails;

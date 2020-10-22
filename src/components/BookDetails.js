import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";

const BookDetails = ({ book }) => {
	const {dispatch} = useContext(BookContext)
	
	const handleRemove = () => {
		dispatch({type: 'REMOVE_BOOK', id: book.id})
	}
	
	return (
    <li onClick={handleRemove}>
      <div className="title">{book.title}</div>
      <div className="author">{book.author}</div>
    </li>
  );
};

export default BookDetails;

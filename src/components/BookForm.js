import React, {useContext, useState} from 'react'
import { BookContext } from '../contexts/BookContext'


const NewBookForm = () => {
	const {addBook} = useContext(BookContext);
	const [title, setTitle] = useState('')
	const [author, setAuthor] = useState('')

	const updateTitle = (e) => {
		setTitle(e.target.value)
	}
	const updateAuthor = (e) => {
		setAuthor(e.target.value)
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		// console.log(title, author)
		addBook(title, author)
		setTitle('')
		setAuthor('')
	}

	return (
		<form onSubmit={handleSubmit}>
			<input type="text" placeholder="book title" value={title} onChange={updateTitle} required/>
			<input type="text" placeholder="book author" value={author} onChange={updateAuthor} required/>
			<input type="submit" value="add book"/>
		</form>
	)
}

export default NewBookForm

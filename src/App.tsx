import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
// import { IPerson, Status, PersonStatus } from './data/interfaces';

const url = 'https://gutendex.com/books/?search=paris';

function App() {
	const [books, setBooks] = useState([]);

	useEffect(() => {
		(async () => {
			setBooks((await axios.get(url)).data.results);
		})();
	}, []);

	return (
		<div className="App">
			<p>There are {books.length} books.</p>
			<ul>
				{books.map((book, index) => {
					return (
						<li key={index}>{book.title} by {book.authors.length === 0 ? '(unknown)' : book.authors[0].name}</li>
				)
			})}
			</ul>
		</div>
	);
}

export default App;

import { useState } from 'react';
import './App.css';
import { IPerson, Status, PersonStatus } from './data/interfaces';

const person: IPerson = {
	firstName: 'Georg',
	lastName: 'Angers',
	age: 34,
	isMember: true,
	scores: [38, 23, 52],
	accessGroups: ['admins', 'backupAdmins'],
	status: 'customer'
};

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="App">
			<p>
				{person.status === 'customer' && (
					<>
				The employee {person.firstName} {person.lastName} is {person.age}{' '}
						years old. Their scores are: {person.scores.join(', ')} and his status is: {person.status}
					</>
				)}
			</p>
		</div>
	);
}

export default App;

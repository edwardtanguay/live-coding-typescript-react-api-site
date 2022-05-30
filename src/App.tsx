import { useState } from 'react';
import './App.css';
import { IPerson, PersonStatus } from './data/interfaces';

const person: IPerson = {
	firstName: 'Georg',
	lastName: 'Angers',
	age: 34,
	isMember: true,
	scores: [38, 23, 52],
	accessGroups: ['admins', 'backupAdmins'],
	status: PersonStatus.Employee
};

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="App">
			<p>
				{person.status === PersonStatus.Employee && (
					<>
				The employee {person.firstName} {person.lastName} is {person.age}{' '}
						years old. Their scores are: {person.scores.join(', ')} and his status is: {PersonStatus[person.status]}
					</>
				)}
			</p>
		</div>
	);
}

export default App;

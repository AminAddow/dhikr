import React from 'react';
import Container from 'react-bootstrap/Container';
import styles from './styles/App.module.css';
import Post from './component/post';

function App() {
	return (
		<div className="App">
			<div className={styles.header}>
				<Container>
					<Post />
				</Container>
			</div>
		</div>
	);
}

export default App;

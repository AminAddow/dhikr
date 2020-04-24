import React from 'react';
import Container from 'react-bootstrap/Container';
import styles from './styles/App.module.css';
import Post from './component/post';
import Footer from './component/footer';


function App() {
    {/* Version output */}
    console.log("v.1.0");
    
    return (
        <div className="App">
            <div className={styles.header}>
            
                <Container>
                    <Post />
                    <Footer />
                </Container>
            </div>
        </div>
    );
}

export default App;

import React from "react";
import Container from "react-bootstrap/Container";
import styles from "./styles/App.module.css";
import Post from "./component/post";
import Footer from "./component/footer";

function App() {
  // Version
  console.log("v.1.1.2");

  return (
    <div className={styles.main}>
      <Container>
        <Post />
        <Footer />
      </Container>
    </div>
  );
}

export default App;

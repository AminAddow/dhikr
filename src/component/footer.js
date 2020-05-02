import React, { Component } from "react";
import styles from "./../styles/App.module.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class footer extends Component {
  render() {
    return (
      <Row className={styles.footer}>
        <Col className={styles.landing_col}>
          <a className={styles.footer_email} href="mailto:amin@techniq.no">
            Feedback
          </a>
        </Col>
      </Row>
    );
  }
}

export default footer;

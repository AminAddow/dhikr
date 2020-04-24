import React, { Component } from 'react';
import styles from './../styles/App.module.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class footer extends Component {
    render() {
        return (
            <Row className={styles.greentext}>
                <Col className={styles.landing}>
                    <a className={styles.atag} href="amin@techniq.com">Feedback</a>
                </Col>
            </Row>
                );
            }
        }
        
        
export default footer;
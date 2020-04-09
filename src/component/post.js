import React, { Component } from 'react';
import firebase from './../firebase';
import styles from './../styles/App.module.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class post extends Component {
    constructor(props) {
        super(props);

        this.state = {
            list: []
        };
    }

    getData = () => {
        // Init connection to firestore
        var db = firebase.firestore();

        // init empty array
        var dhikr = [];

        // Retrieve data from firestore
        db.collection('morning').orderBy("id").get().then((snapshot) => {
            snapshot.forEach((doc) => {
                var id = doc.data().id;
                var source = doc.data().source;
                var text = doc.data().text;
                var times_int = doc.data().times_int;

                // below can be used to retireve read amount in string
                // var times_string = doc.data().times_int;

                // Push retrieved data to state array
                dhikr.push({ id: id, text: text, times_int: times_int });

                console.log(' ');
                console.log(id);
                console.log(text);
                console.log(times_int);

            });
            // Send local array to state
            this.setState({ list: [...this.state.list, ...dhikr] });
        });
    };

    componentDidMount() {
        this.getData();
    }

    render() {
        return (
            <div>
                {
                    this.state.list.map(list => (
                        <>
                            <Row className={styles.parent}>
                                <Col className={styles.out} xs={{ span: 10, offset: 1 }} sm={{ span: 8, offset: 2 }}>
                                    <Row className={styles.in, styles.id}>
                                        <div>{list.id}</div>
                                    </Row>
                                    <Row className={styles.in}>
                                        <p align="right" dir="rtl" key={list.id}>{list.text}</p>
                                    </Row>
                                    <Row className={styles.in, styles.greentext}>
                                        <p>Read {list.times_int} time</p>
                                    </Row>
                                </Col>
                            </Row>
                        </>
                    ))
                }
            </div>
        )
    }
}

export default post;

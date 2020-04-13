import React, { Component } from 'react';
import Buttonjs from "./button";
import Button from 'react-bootstrap/Button';
import firebase from './../firebase';
import styles from './../styles/App.module.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class post extends Component {
    constructor(props) {
        super(props);

        this.state = {
            list_m: [],
            list_e: [],
            show_evening: false,
            show_morning: true 
        };
    }

    getData = () => {
        // Init connection to firestore
        var db = firebase.firestore();

        // init empty array
        var dhikr_m = [];

        // Retrieve morning data from firestore
        db.collection('morning').orderBy("id").get().then((snapshot) => {
            console.log('Morning data: ');
            snapshot.forEach((doc) => {
                var id_m = doc.data().id;
                var source_m = doc.data().source;
                var text_m = doc.data().text;
                var times_int_m = doc.data().times_int;

                // below can be used to retireve read amount in string
                // var times_string = doc.data().times_int;

                // Push retrieved data to state array
                dhikr_m.push({ id: id_m, text: text_m, times_int: times_int_m });

                console.log(id_m, text_m, times_int_m);

            });
            // Send local array to state
            this.setState({ list_m: [...this.state.list_m, ...dhikr_m] });
            console.log("---------------- Morning end!");
        });

        // init empty array
        var dhikr_e = [];


        // Retrieve evening data from firestore
        db.collection('evening').orderBy("id").get().then((snapshot) => {
            console.log('Evening data: ');
            snapshot.forEach((doc) => {
                var id_e = doc.data().id;
                var source_e = doc.data().source;
                var text_e = doc.data().text;
                var times_int_e = doc.data().times_int;

                // below can be used to retireve read amount in string
                // var times_string = doc.data().times_int;

                // Push retrieved data to state array
                dhikr_e.push({ id: id_e, text: text_e, times_int: times_int_e });

                console.log(id_e, text_e, times_int_e);

            });
            // Send local array to state
            this.setState({ list_e: [...this.state.list_e, ...dhikr_e] });
            console.log("---------------- Evening end!");
        });
    };

    componentDidMount() {
        this.getData();
    }

    clickMorning = () => {
        console.log("Clicked Morning!");
        this.setState({
            show_evening: false,
            show_morning: true
        })
    }
        clickEvening = () => {
        console.log("Clicked Evening!");
                this.setState({
            show_evening: true,
            show_morning: false
        })
    }

    render() {

        if (this.state.show_evening == true) {
            var thelist = this.state.list_e
        } else {
            var thelist = this.state.list_m
        }

        return (

            <div>
                <Row>
                    <Col className={styles.first}>
                        <Button onClick={this.clickMorning} active={this.state.show_morning} variant="light-green" size="lg">Morning</Button>
                        <Button onClick={this.clickEvening} active={this.state.show_evening} variant="light-green" size="lg">Evening</Button>
                    </Col>
                </Row>
                {
                    thelist.map(list => (
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
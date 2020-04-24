import React, { Component } from 'react';
import Logo from './../img/logo.png';
import Button from 'react-bootstrap/Button';
import firebase from './../firebase';
import styles from './../styles/App.module.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card'

class post extends Component {
    constructor(props) {
        super(props);

        this.state = {
            list_m: [],
            list_e: [],
            show_evening: false,
            show_morning: true,
            setColor: "light-green",
            setNone: ""
        };
    }

    getData = () => {
        // Init connection to firestore
        var db = firebase.firestore();

        // init empty array
        var dhikr_m = [];

        // Retrieve morning data from firestore
        db.collection('morning').orderBy("id").get().then((snapshot) => {
            // console.log('Morning data: ');
            snapshot.forEach((doc) => {
                var id_m = doc.data().id;
                var source_m = doc.data().source;
                var text_m = doc.data().text;
                var times_int_m = doc.data().times_int;

                // below can be used to retireve read amount in string
                // var times_string = doc.data().times_int;

                // Push retrieved data to state array
                dhikr_m.push({ id: id_m, source: source_m, text: text_m, times_int: times_int_m });

                // console.log(id_m, text_m, times_int_m);

            });
            // Send local array to state
            this.setState({ list_m: [...this.state.list_m, ...dhikr_m] });
            // console.log("---------------- Morning end!");
        });

        // init empty array
        var dhikr_e = [];


        // Retrieve evening data from firestore
        db.collection('evening').orderBy("id").get().then((snapshot) => {
            // console.log('Evening data: ');
            snapshot.forEach((doc) => {
                var id_e = doc.data().id;
                var source_e = doc.data().source;
                var text_e = doc.data().text;
                var times_int_e = doc.data().times_int;

                // below can be used to retireve read amount in string
                // var times_string = doc.data().times_int;

                // Push retrieved data to state array
                dhikr_e.push({ id: id_e, source: source_e, text: text_e, times_int: times_int_e });

                // console.log(id_e, text_e, times_int_e);

            });
            // Send local array to state
            this.setState({ list_e: [...this.state.list_e, ...dhikr_e] });
            // console.log("---------------- Evening end!");
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

        var buttons;
        var thelist;

        if (this.state.show_evening === true) {
            thelist = this.state.list_e
            buttons =
                <>
                    <Button href="#start" className={styles.button} onClick={this.clickMorning} active={this.state.show_morning} variant="" size="lg">Morning</Button>
                    <Button href="#start" className={styles.button} onClick={this.clickEvening} active={this.state.show_evening} variant="light-green" size="lg">Evening</Button>
                </>
        } else {
            thelist = this.state.list_m
            buttons =
                <>
                    <Button href="#start" className={styles.button} onClick={this.clickMorning} active={this.state.show_morning} variant="light-green" size="lg">Morning</Button>
                    <Button href="#start" className={styles.button} onClick={this.clickEvening} active={this.state.show_evening} variant="" size="lg">Evening</Button>
                </>
        }

        return (

            <div>
                <div className={styles.landing_grp}>
                    <Row>
                        <Col className={styles.landing}>
                            <img className={styles.img} src={Logo} alt="Logo" />
                        </Col>
                    </Row>
                    <Col className={styles.landing}>
                        <p>Select time of day: </p>
                    </Col>
                    <Row>
                        <Col className={styles.landing}>
                            {buttons}
                        </Col>
                    </Row>
                </div>
                {
                    thelist.map(list => (
                        <>
                            <Row id="start" className={styles.parent}>
                                <Col className={styles.out} xs={{ span: 10, offset: 1 }} sm={{ span: 8, offset: 2 }}>
                                    <Row className={styles.id}>
                                        <div>{list.id}</div>
                                    </Row>
                                    <Row className={styles.in}>
                                        <p key={list.id} align="right" dir="rtl">{list.text}</p>
                                    </Row>
                                    <Row className={styles.greentext}>
                                        <Col className={styles.bottom_text}>
                                        
                                            <p>Read {list.times_int} {list.times_int > 1 ? "times" : "time" }</p>
                                            <p>{list.source}</p>
                                        </Col>
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
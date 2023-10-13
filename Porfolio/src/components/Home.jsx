import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import banner from '../assets/img/header-img.svg';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import axios from 'axios';
import parse from 'html-react-parser';
import '../css/home.css'

const Home = () => {

    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setISdeleting] = useState(false);
    const toRotate = ["Hola","JUan","EL MR"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100)
    const perid = 500;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => { clearInterval(ticker) }
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updateText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
        setText(updateText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }
        if (!isDeleting && updateText == fullText) {
            setISdeleting(true);
            setDelta(perid);
        } else if (isDeleting && updateText === "") {
            setISdeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(1000);
        }
    }


    return (
        <div className="tagline">
            <section className="banner" id="Home">
                <Container fixed className="tagline">
                    <Row className="align-items-center center">
                        <Col xs={6}>
                            <TrackVisibility>
                                <div>
                                    <br />
                                    <br />

                                    <h1>Hi 👋, I'm {text}</h1>
                                    <h3>I am passionate about programming and video games.</h3>

                                    <br /><span className="wrap"></span>
                                </div>
                            </TrackVisibility>
                        </Col>
                        <Col xs={6}>
                            <TrackVisibility >
                                <div className="animate__animated animate__zoomIn">
                                    <img src={banner} alt="" />
                                </div>
                            </TrackVisibility>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    );
};

export default Home;


import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import logo from '../Images/nsymbol.png';

const HeroContainer = React.memo(() => {

    const handleContact = () => {
        window.location.href = '#contact';
    };

    return (
        <div className="heroImage">
            <Container fluid>
                <div className="text-size-sm flex-left">
                    <img src={logo} alt="logo" height="100" width="100" />
                </div>
                <Row className="welcome flex-column text-size-md flex-center flex-center-align text-center">
                    <div className="hello">Hello, I&#x27;m <span className="text-color">Naveena Dumpala</span></div>
                    <div className="developer">I&#x27;m a Full Stack Java Developer </div>
                    <div className="margin-vertical-sm contactButton">
                        <Button onClick={handleContact} variant="warning" size="lg">Contact me</Button>
                    </div>
                </Row>
            </Container>
        </div>
    );
});

HeroContainer.displayName = 'HeroContainer';

export default HeroContainer;
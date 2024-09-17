import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SubHeading from '../components/SubHeading';
import database from '../Images/db.png';
import jquery from '../Images/jquery.png';
import react from '../Images/react.png';
import angular from '../Images/angular.png';
import java from '../Images/java-logo-1.png';
import aws from '../Images/aws.png';
import spring from '../Images/springboot.png';

const JSAbstractContainer = React.memo(() => {

    return (
        <Container>
            <Row className="flex-center flex-column margin-vertical-sm margin-horizontal-sm">
                <SubHeading heading="FULL STACK DDEVELOPMENT" className="text-size-md text-center" />
                <SubHeading heading="UTILIZING VARIOUS FRAMEWORKS AND TOOLS" className="text-size-md text-center" />
                <SubHeading heading=" " className="text-size-md text-center" />
            </Row>
            <Row className="padding-horizontal-sm text-left">
                <Col xs={12} md={6}>
                    <Row className="flex-column margin-vertical-lg">
                        <SubHeading heading="MOTIVATED TO PRODUCT RESULTS" className="text-size-sm font-weight-md" />
                        <div>As a tenacious software developer, I use continuous iterations to
                            produce results quickly and continuously improve products.</div>
                    </Row>
                    <Row className="flex-column margin-vertical-lg">
                        <SubHeading heading="AN AGILE COLLABORATOR" className="text-size-sm font-weight-md" />
                        <div> I excel at fostering cross-functional teamwork to deliver high-quality software solutions.
                            With a focus on continuous improvement and adaptability, I help teams navigate challenges
                            and drive projects to successful completion.</div>
                    </Row>
                </Col>
                <Col xs={12} md={6} className="display-flex flex-center-align flex-center">
                    <div className="text-center flex-center logos">
                        <img className="abstractLogo" src={java} alt="java logo" height="100" width="100" />
                        <img className="abstractLogo" src={spring} alt="springboot js logo" height="100" width="100" />
                        <img className="abstractLogo" src={jquery} alt="jquery logo" height="100" width="100" />
                        <img className="abstractLogo" src={react} alt="react js logo" height="100" width="100" />
                        <img className="abstractLogo" src={angular} alt="angular js logo" height="100" width="100" />
                        <img className="abstractLogo" src={database} alt="database logo" height="100" width="100" />
                        <img className="abstractLogo" src={aws} alt="aws logo" height="100" width="100" />

                    </div>
                </Col>
            </Row>
        </Container>
    );
});

JSAbstractContainer.displayName = 'JSAbstractContainer';

export default JSAbstractContainer;
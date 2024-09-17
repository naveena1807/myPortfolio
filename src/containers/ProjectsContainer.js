import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import coding from '../Images/coding.png';
import optimization from '../Images/optimization.png';
import microservice from '../Images/microservice.png';

const ProjectsContainer = React.memo(() => {

    return (
        <Container fluid className="heroImage2">
            <div className="margin-vertical-xlg">
                <Row className="cardWrapper margin-vertical-lg flex-center flex-center-align">
                    <Col md={4}>
                        <div className="cards margin-horizontal-md  margin-vertical-lg">
                            <div className="margin-vertical-md">
                                <img src={coding} alt="code icon" height="100" width="100" />
                            </div>
                            <>
                                I enjoy hand coding things from scratch using clean, simple and maintainable code that is easy to read.
                                By focusing on readability and simplicity, I ensure that my code is easy to understand, scalable, and optimized for long-term development.
                            </>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="cards margin-horizontal-md  margin-vertical-lg">
                            <div className="margin-vertical-md">
                                <img src={microservice} alt="design icon" height="100" width="100" />
                            </div>
                            <>
                                I specialize in designing and developing scalable microservices architectures that ensure high performance and reliability.
                                With expertise in Spring Boot, RESTful APIs, and cloud platforms, I build robust, modular solutions that drive business efficiency.
                            </>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="cards margin-horizontal-md  margin-vertical-lg">
                            <div className="margin-vertical-md">
                                <img src={optimization} alt="responsive design icon" height="100" width="100" />
                            </div>
                            <>
                                With a focus on performance optimization, I specialize in analyzing and fine-tuning applications to enhance efficiency and reduce latency.
                                By implementing best practices and profiling tools, I consistently deliver faster, more scalable solutions.
                            </>
                        </div>
                    </Col>
                </Row>
            </div>
        </Container>
    );
});

ProjectsContainer.displayName = 'ProjectsContainer';

export default ProjectsContainer;

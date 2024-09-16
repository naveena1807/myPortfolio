import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SubHeading from '../components/SubHeading';
import PortfolioCard from '../components/PortfolioCard';

const imageClass = ['cardFrontImage1', 'cardFrontImage2', 'cardFrontImage3']

const cardBackFill = ['cardBackFill_1', 'cardBackFill_2', 'cardBackFill_3'];

const cardBackText_1 = `Developed a microservices-based application using Core Java, Java 11, and Angular 14, 
                        optimizing performance and scalability. Integrated AWS cloud services, Docker, and Kubernetes for seamless deployment and orchestration. 
                        Enhanced data processing and messaging with Kafka, improving transaction throughput and reliability.`;

const cardBackText_2 = `Built a portal application using Spring Boot and Angular 6/7, focusing on modular design and microservices for easy maintenance and upgrades. 
                        Managed containerized deployments with Docker and Kubernetes, ensuring consistent and reliable service delivery. 
                        On the front end, I used Angular to create interactive, data-driven applications, significantly improving user experience.`;

const cardBackText_3 = `Contributed to the full SDLC, developing microservices with Spring Boot and deploying them using AWS ECS and ECR, boosting system performance by over 40%. 
                        Developed RESTful APIs and implemented caching strategies to improve response times and resource utilization.
                        Consistently wrote JUnit tests to validate the functionality and integrity of the code and followed TDD approch.`;

const technologies_1 = ['Java', 'SpringBoot', 'AWS', 'Angular', 'Junit', 'Oracle | SQL', 'Kafka'];
const technologies_2 = ['Java/J2EE', 'SpringBoot', 'Angular | React', 'CSS3 | Sass', 'Hibernate', 'SQL | PLSQL'];
const technologies_3 = ['Java', 'Angular', 'Docker', 'Junit', 'Sonarqube', 'SQL', 'AWS'];

const ProjectPortfolioContainer = React.memo(() => {

    return (
        <Container>
            <Row className="flex-center margin-vertical-sm padding-vertical-xlg margin-horizontal-sm">
                <SubHeading heading="PROJECT PORTFOLIO" className="text-size-md text-center" />
            </Row>
            <>
                <Row className="justify-content-md-center">
                    <Col xs={12} xl={4}>
                        <PortfolioCard
                            imageClass={imageClass[0]}
                            cardBackFill={cardBackFill[0]}
                            cardHeading='Banking Industry'
                            cardBackText={cardBackText_1}
                            technologies={technologies_1}
                        />
                    </Col>
                    <Col xs={12} xl={4}>
                        <PortfolioCard
                            imageClass={imageClass[1]}
                            cardBackFill={cardBackFill[1]}
                            cardHeading='Pharmaceutical Sector'
                            cardBackText={cardBackText_2}
                            technologies={technologies_2}
                        />
                    </Col>
                    <Col xs={12} xl={4}>
                        <PortfolioCard
                            imageClass={imageClass[2]}
                            cardBackFill={cardBackFill[2]}
                            cardHeading='Financial services'
                            cardBackText={cardBackText_3}
                            technologies={technologies_3}
                        />
                    </Col>
                </Row>
            </>
        </Container>
    );
});

ProjectPortfolioContainer.displayName = "ProjectPortfolioContainer";

export default ProjectPortfolioContainer;
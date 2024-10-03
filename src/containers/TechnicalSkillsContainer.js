import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SubHeading from '../components/SubHeading';
import PortfolioCard from '../components/PortfolioCard';

const imageClass = ['cardFrontImage1', 'cardFrontImage2', 'cardFrontImage3'];

const cardBackFill = ['cardBackFill_1', 'cardBackFill_2', 'cardBackFill_3'];

const cardBackText_1 = `Skilled in Full Stack development, with extensive experience using technologies such as Java/J2EE, SpringBoot, Hibernate, JavaScript, SQL etc. 
                        Strong ability to lead projects through every stage of the Software Development Lifecycle (SDLC) with Agile methodologies. 
                        My technical acumen is complemented by a solid understanding of cloud services and containerization technologies, enabling me to create comprehensive, efficient, and deployable solutions.`;

const cardBackText_2 = `Have extensive experience integrating cloud services, particularly AWS, to boost application performance, scalability, and reliability. 
                        I am adept at utilizing a range of AWS tools, including EC2, SQS, ECS, etc, to optimize and manage cloud infrastructure. 
                        My expertise ensures that applications benefit from efficient, scalable, and reliable cloud solutions.`;

const cardBackText_3 = `I effectively utilize a diverse array of software tools to streamline development, testing and deployment processes and also to enhance productivity. 
                        My toolkit includes IDEs like IntelliJ IDEA and Eclipse, version control systems such as Git, testing tools like postman, etc. 
                        By leveraging these tools, I ensure efficient code management, smooth project builds, and robust collaboration throughout the development lifecycle.`;

const technologies_1 = ['Java/J2EE', 'SpringBoot', 'Angular | React', 'Junit | Mockito', 'Oracle | SQL | PostgreSQL', 'Hibernate', 'PHP', 'HTML | CSS | JS'];
const technologies_2 = ['AWS', 'Docker | ECS ', 'SQS | SNS', 'Kafka', 'IAM | Roles', 'RDS', 'EC2', 'Lambda', 'Redis'];
const technologies_3 = ['Postman', 'Sonarqube', 'Maven', 'Newrelic', 'ServiceNow', 'GIT', 'JENKINS', 'Rally', 'STS | VS Code | Intellij', 'MS Word | MS Excel'];

const TechnicalSkillsContainer = React.memo(() => {

    return (
        <Container>
            <Row className="flex-center margin-vertical-sm padding-vertical-xlg margin-horizontal-sm">
                <SubHeading heading="TECHNICAL SKILLS" className="text-size-md text-center" />
            </Row>
            <>
                <Row className="justify-content-md-center">
                    <Col xs={12} xl={4}>
                        <PortfolioCard
                            imageClass={imageClass[0]}
                            cardBackFill={cardBackFill[0]}
                            cardHeading='Full Stack Development'
                            cardBackText={cardBackText_1}
                            technologies={technologies_1}
                        />
                    </Col>
                    <Col xs={12} xl={4}>
                        <PortfolioCard
                            imageClass={imageClass[1]}
                            cardBackFill={cardBackFill[1]}
                            cardHeading='Cloud Native Technologies'
                            cardBackText={cardBackText_2}
                            technologies={technologies_2}
                        />
                    </Col>
                    <Col xs={12} xl={4}>
                        <PortfolioCard
                            imageClass={imageClass[2]}
                            cardBackFill={cardBackFill[2]}
                            cardHeading='Developer Tools'
                            cardBackText={cardBackText_3}
                            technologies={technologies_3}
                        />
                    </Col>
                </Row>
            </>
        </Container>
    );
});

TechnicalSkillsContainer.displayName = 'TechnicalSkillsContainer';

export default TechnicalSkillsContainer;
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import linkedin from '../Images/linkedin.png';

const ContactDetailsContainer = React.memo(() => {

    const socialIcons = [

        {
            logo: linkedin,
            alt: 'Linkedin logo',
            url: 'https://www.linkedin.com/in/naveenas205/'
        }
    ];

    const renderSocialIcons = () => {

        const icons = socialIcons.map((data, index) => {

            return (
                <div className="socialIcons" key={index}>
                    <a
                        href={data.url}
                        rel="nofollow noopener noreferrer"
                        target="_blank" key={index}>
                        <img className="socialIcons margin-horizontal-md margin-collapse-left" src={data.logo} alt="" height="50" width="50" />
                    </a>
                </div>
            );
        });

        return (
            <Row className="margin-vertical-sm">
                {icons}
            </Row>
        );
    };

    return (

        <Container fluid className="color-white bgBlack" id="contact">
            <Container className="padding-vertical-xlg">
                <Row className="padding-horizontal-sm">
                    <Col xs={12} md={6} className="margin-vertical-md">
                        <strong className="font-size-md">
                            About Me:
                        </strong>
                        <div className="margin-vertical-md">
                            Accomplished Java Full Stack Developer with 5+ years of experience in designing, developing, and deploying enterprise-level applications.
                            Adept in both front-end and back-end development, utilizing a comprehensive range of technologies including J2EE, spring, Hibernate, AWS, Angular, Python, Kafka, and Docker.
                        </div>
                    </Col>
                    <Col xs={12} md={6} className="margin-vertical-md ">
                        <strong className="font-size-md margin-vertical-md">
                            Let&apos;s Talk:
                        </strong>
                        <div className="diplay-flex flex-column margin-vertical-md text-underline">
                            <div>
                                <a href="tel:+14704865038" rel="nofollow noopener noreferrer" >
                                    +1(470)486-5038
                                </a>
                            </div>
                            <div>
                                <a href="mailto:naveenas205@gmail.com" rel="nofollow noopener noreferrer">naveenas205@gmail.com</a>
                            </div>
                            {renderSocialIcons()}
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
});

ContactDetailsContainer.displayName = 'ContactDetailsContainer';

export default ContactDetailsContainer;
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import linkedin from '../Images/linkedin.png';
import github from '../Images/github.png';

const ContactDetailsContainer = React.memo(() => {

    const socialIcons = [

        /*   {
               logo: linkedin,
               alt: 'Linkedin logo',
               url: 'https://www.linkedin.com'
           },*/
        {
            logo: github,
            alt: 'Github logo',
            url: 'https://github.com/naveena1807/myPortfolio'
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
                            Experienced Java Full Stack Developer with a proven track record of designing, implementing, and maintaining robust, scalable, and high-performance web applications.
                            Demonstrated expertise in Java, Spring Boot, Angular, and other relevant frameworks, coupled with a solid understanding of database management, RESTful API integration and cloud technologies like AWS.
                            Skilled in analyzing user requirements, designing system architectures, and ensuring seamless end-to-end functionality.
                            Proven ability to thrive in fast-paced, dynamic environments while maintaining a focus on delivering high-quality software solutions.
                        </div>
                    </Col>
                    <Col xs={12} md={6} className="margin-vertical-md ">
                        <strong className="font-size-md margin-vertical-md">
                            Let&apos;s Talk:
                        </strong>
                        <div className="diplay-flex flex-column margin-vertical-md text-underline">
                            <div>
                                <a href="tel:+14083453768" rel="nofollow noopener noreferrer" >
                                    +1(408) 345-3768
                                </a>
                            </div>
                            <div>
                                <a href="mailto:naveenas1807@gmail.com" rel="nofollow noopener noreferrer">naveenas1807@gmail.com</a>
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
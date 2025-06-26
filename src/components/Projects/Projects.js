import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import inotebook from "../../Assets/Projects/inotebook.png";
import tcs from "../../Assets/Projects/images 2.png";
import zomatoImage from "../../Assets/Projects/pramati_technologies_logo.png";
import patentProcessingImage from "../../Assets/Projects/patentProcessingImage.png";
import fannieMaeImage from "../../Assets/Projects/Targetinc.png";
import bms from "../../Assets/Projects/bms.png";

function Projects() {
  return (
    <Container fluid className='project-section'>
      <Particle />
      <Container>
        <h1 className='project-heading'>
          My Recent <strong className='purple'>Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={patentProcessingImage}
              isBlog={false}
              title='Patent Processing Modernization'
              ghLink='https://github.com/NithyanandaReddyMarri?tab=repositories'
              description='Led full stack development efforts to modernize patent processing applications used by internal examiners and public users. Specialized in building highly responsive and secure React-based frontends integrated with scalable Spring Boot microservices. Focused on performance optimization, accessibility compliance, and real-time collaboration features across systems.'
            />
          </Col>
          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={fannieMaeImage}
              isBlog={false}
              title='Target – Pickup & delivery platform'
              ghLink='https://github.com/NithyanandaReddyMarri?tab=repositories'
              description='Worked as a Full Stack Java Developer on Target’s pickup & delivery platform, building Angular 14 frontends and Spring Boot APIs with Java 17, Kafka, and PostgreSQL.
Deployed microservices to AWS ECS using Docker and Terraform, secured with OAuth2/JWT, and monitored via Prometheus and Grafana.'
            />
          </Col>
          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={zomatoImage}
              isBlog={false}
              title='Full Stack Enterprise Collaboration Platform'
              ghLink='https://github.com/NithyanandaReddyMarri?tab=repositories'
              description={`Built a full stack enterprise collaboration platform using React, Java, and Spring Boot. Developed responsive UIs, secure REST APIs, and integrated MySQL/Oracle databases. Deployed services with Docker on AWS and automated CI/CD with Jenkins in an Agile setup.`}
            />
          </Col>

          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={tcs}
              isBlog={false}
              ghLink='https://github.com/NithyanandaReddyMarri?tab=repositories'
              title='Kohl’s E-commerce & In-Store Integration Platform'
              description='Contributed as a Full Stack Developer to build a seamless e-commerce and in-store shopping integration platform.
Delivered user-friendly features like personalized recommendations and streamlined checkout.
Optimized backend inventory management for real-time stock synchronization, enhancing customer experience and operational efficiency.'
            />
          </Col>

          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={inotebook}
              isBlog={false}
              title='iNotebook – Cloud-Based Note App'
              ghLink='https://github.com/NithyanandaReddyMarri?tab=repositories'
              description='Developed iNotebook, a full-stack cloud note-taking application using the MERN stack. Built secure REST APIs with Node.js and Express, integrated MongoDB for data persistence, and designed a responsive UI in React with JWT-based authentication and CRUD functionality.'
            />
          </Col>
          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={bms}
              isBlog={false}
              title='BookMyShow Clone – Movie Ticket Booking App'
              ghLink='https://github.com/NithyanandaReddyMarri?tab=repositories'
              description='Developed a full-featured movie ticket booking application inspired by BookMyShow using the MERN stack. Built interactive React frontends with seamless routing and dynamic content rendering. Implemented backend services using Node.js and Express with MongoDB for real-time show listings, seat selection, and booking history. Focused on responsive design, smooth UX, and secure data handling.'
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    company: "United States Patent and Trademark Office",
    title: "Software Developer",
    duration: "Jan 2024 - Present",
    location: "Alexandria, VA",
    highlights: [
      "Built responsive UIs using React 17, TypeScript, and Redux for patent filing and tracking",
      "Implemented WebSocket for real-time patent status updates and examiner collaboration",
      "Integrated D3.js and Chart.js for examiner productivity dashboards",
      "Enhanced accessibility (Section 508/WCAG) and performance via lazy loading and memoization",
      "Built Spring Boot microservices handling patent metadata and document processing",
      "Secured APIs with OAuth2, JWT, and GraphQL for scalable data access",
      "Enabled Kafka-based pipelines for intake processing and legal status tracking",
      "Deployed using Docker, Kubernetes, and Terraform with Jenkins CI/CD",
    ],
    achievements: [
      "Launched patent dashboard used daily by 1,000+ staff",
      "Reduced average application review time by 25%",
    ],
  },
  {
    company: "Target",
    title: "Software Developer",
    duration: "Oct 2022 - July 2023",
    location: "Brooklyn, Minnesota ",
    highlights: [
      "Built Angular 14 components with RxJS, TypeScript, and Google Maps.",
      "Secured routes using JWT and implemented role-based access.",
      "Created REST APIs with Java 17, Spring Boot, and PostgreSQL",
      "Used Redis for caching and Kafka for async event handling",
      "Deployed Docker containers to AWS ECS via Terraform",
      "Set up CI/CD with GitHub Actions; monitored with Prometheus & Grafana",
    ],
    achievements: [
      "Reduced API response times by 40% using Redis caching and query optimization",
      "Decreased order processing delays by 25% by implementing Kafka-based event workflows",
    ],
  },
  {
    company: "Kohl’s ",
    title: "Software Developer",
    duration: "Jan 2021 – Sep 2022",
    location: ", Milwaukee, WI",
    highlights: [
      "Built an integrated e-commerce and in-store shopping platform as a Full Stack Developer",
      "Designed responsive Angular UIs with TypeScript, RxJS, lazy loading, and Angular Forms for smooth UX",
      "Developed RESTful APIs with Spring MVC, Hibernate, and Spring Data for search, auth, and orders",
      "Used Redis caching and RabbitMQ messaging to boost performance and enable async processing",
      "Deployed containerized microservices to AWS EKS; automated infra with CloudFormation",
    ],
    achievements: [
      "Reduced checkout drop-off rate by 20% through optimized frontend UX and lazy loading",
      "Launched analytics dashboard accessed by 700+ retail clients for real-time inventory tracking",
    ],
  },
  {
    company: "Pramati Technologies",
    title: "Software Developer",
    duration: "July 2018 – Dec 2020",
    location: "Hyderabad, India",
    highlights: [
      "Built secure, scalable SPAs using React, Redux, and Hooks integrated with Spring Boot microservices",
      "Developed REST APIs with Java 8+, Spring MVC, and Hibernate; secured with OAuth2 and JWT",
      "Improved UI responsiveness and performance using lazy loading, Webpack, and Axios",
      "Deployed Dockerized services on AWS EC2 and Elastic Beanstalk; automated CI/CD with Jenkins",
    ],
    achievements: [],
  },
];
const cardColors = ["#EDF4FA", "#F5F5F5", "#F7F3ED", "#EEF1F4", "#EAF0F6"];

const ExperienceSection = () => {
  return (
    <section style={styles.section}>
      <h2 style={styles.header}>💼 Experience</h2>

      {experiences.map((exp, idx) => (
        <div
          key={idx}
          style={{
            ...styles.card,
            backgroundColor: cardColors[idx % cardColors.length],
          }}
        >
          <h3 style={styles.title}>{exp.title}</h3>
          <h4 style={styles.company}>
            {exp.company} <span style={styles.location}>({exp.location})</span>
          </h4>
          <p style={styles.duration}>{exp.duration}</p>

          {exp.highlights && exp.highlights.length > 0 && (
            <div>
              <p style={styles.subHeader}>Highlights:</p>
              <ul style={styles.list}>
                {exp.highlights.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {exp.achievements && exp.achievements.length > 0 && (
            <div>
              <p style={styles.subHeader}>Achievements:</p>
              <ul style={styles.list}>
                {exp.achievements.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </section>
  );
};

const styles = {
  section: {
    padding: "2rem",
    backgroundColor: "#f4f6fa",
    fontFamily: "Arial, sans-serif",
  },
  header: {
    fontSize: "2rem",
    color: "#333",
    marginBottom: "1.5rem",
  },
  card: {
    backgroundColor: "#E0F7FA",
    borderRadius: "12px",
    padding: "20px",
    marginBottom: "20px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  },
  title: {
    margin: "0 0 5px",
    color: "#222",
    fontSize: "1.2rem",
    fontWeight: "bold",
  },
  company: {
    margin: "0 0 10px",
    color: "#444",
    fontSize: "1rem",
  },
  location: {
    fontStyle: "italic",
    color: "#777",
    fontSize: "0.9rem",
  },
  duration: {
    color: "#888",
    fontSize: "0.9rem",
    marginBottom: "10px",
  },
  subHeader: {
    fontWeight: "bold",
    marginTop: "10px",
    marginBottom: "5px",
    color: "#333",
  },
  list: {
    paddingLeft: "20px",
    margin: 0,
    color: "#333",
  },
};

export default ExperienceSection;

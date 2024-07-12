import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import recognition from "../../Assets/Projects/face recognition.png";
import completion from "../../Assets/Projects/face completion.png";
//import videotest from "../../Assets/Projects/video intro.mp4";
import videotest1 from "../../Assets/Projects/video ai.mp4";
import nn from "../../Assets/Projects/neural network.png";
import othello from "../../Assets/Projects/othello.mp4";






function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={completion}
              isBlog={false}
              title="Face Completion using Machine Learning"
              description="This project focuses on face completion using L2-regularized least squares (Ridge Regression). The model reconstructs missing facial regions, enhancing image integrity and usability. Utilizing a dataset of 400 facial images split into training and test sets, the method accurately predicts and fills in missing parts, achieving a remarkable 96% accuracy. This demonstrates the effectiveness of L2-regularized least squares in high-quality facial reconstruction, making it a valuable tool for facial recognition applications"
              ghLink="https://github.com/amyne11/face_completion_using_ML"
              //demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              videoSrc={videotest1}
              isBlog={false}
              title="AI for Estimating Autonomous Vehicle Poses"
              description="Welcome to the Features for Estimating Autonomous Vehicle Poses project! This project leverages the power of artificial intelligence and computer vision to estimate the poses of an autonomous vehicle (AV) by matching visual features in a series of images captured during navigation. The project implements a visual odometry algorithm to estimate camera trajectories, a crucial aspect of autonomous navigation."
              ghLink="https://github.com/amyne11/AI_For_estimating_Autonomous_Vehicle_Poses"
              //demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nn}
              isBlog={false}
              title="Air Quality Analysis Using Neural Networks"
              description="The Neural Network for Air Quality Analysis project leverages advanced neural network architectures to predict carbon monoxide levels from sensor data. The project employs various models, including Multi-layer Perceptrons (MLP), to analyze and forecast air quality. It emphasizes handling missing and noisy data, utilizing training algorithms such as SGD and ADAM. Comprehensive experiments and results demonstrate the model's effectiveness in providing accurate air quality predictions, making it a robust tool for environmental monitoring and analysis. "
              ghLink="https://github.com/amyne11/Neural-Network-for-air-quality-analysis"
              //demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              videoSrc={othello}
              isBlog={false}
              title="AI-Powered Reversi Game"
              description="Unleash the power of artificial intelligence with the Reversi Game project! This innovative project showcases an advanced AI agent that masterfully plays the classic board game Reversi (Othello). Utilizing the minimax search algorithm, the AI makes strategic decisions to outmaneuver opponents. Experience the brilliance of AI as it analyzes countless game scenarios, demonstrating superior gameplay and strategic depth, making each match a testament to cutting-edge AI technology."
              ghLink="https://github.com/amyne11/AI_for_reversi_game"
              //demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>
{/*
          <Col md={4} className="project-card">
            <ProjectCard
              //imgPath={suicide}
              //isBlog={false}
              //title="Ai For Social Good"
              //description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              //ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
           </Col>
*/}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={recognition}
              isBlog={false}
              title="Face Recognition with Machine Learning"
              description="This project aims to recognize faces using L2-regularized least squares for classification tasks. The dataset includes 400 images of faces, split into training and test sets. The L2-regularized least squares method, also known as Ridge Regression, is employed to enhance the robustness of the model by penalizing large coefficients, thereby preventing overfitting and improving generalization to unseen data. After training and evaluating the model, the approach demonstrated its effectiveness by achieving an impressive accuracy of 96% on the test set, highlighting its potential for reliable face recognition in practical applications."
              ghLink="https://github.com/amyne11/face_recognition_using_ML"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

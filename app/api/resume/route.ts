import { NextResponse } from "next/server"

export async function GET() {
  // This would typically serve a PDF file
  // For now, we'll return a response that triggers a download

  const resumeContent = `
PAVAN SAI GANTA
Full Stack Developer

Contact Information:
Email: Saiganta3699@gmail.com
Phone: 7095837037
LinkedIn: https://www.linkedin.com/in/pavansaiganta/
GitHub: https://github.com/saiganta2004

PROFILE
Final-year B.Tech student with a passion for web development. Interested in building full stack applications using React, Node.js, and MongoDB. Hands-on with frontend and backend projects, REST APIs, and responsive design. Eager to learn, build real-world apps, and grow as a full stack developer.

SKILLS
Programming:
Frontend: HTML, CSS, JavaScript, React.js, Tailwind CSS, Bootstrap
Backend: Node.js, Express.js, Java
Databases: MySQL, MongoDB
Tools: Git, GitHub, Docker

Others:
Problem Solving, Data Structures & Algorithms, Communication

WORK EXPERIENCE
AI/ML Intern (May 2024 – July 2024)
International Institute of Digital Technologies (IIDT), Virtual
• Completed 8-week virtual internship on AI, ML, and Data Science
• Worked on data preprocessing, model building, and evaluation
• Gained hands-on experience with Python and ML libraries

PROJECTS
Desktop Activity Tracker (April 2025 – May 2025)
Electron.js, Node.js, MySQL, JavaScript
• Built a desktop app to track mouse clicks, keyboard activity, and app usage
• Stored logs in MySQL/SQLite and supported offline usage
• Included a simple UI and a "Clear Log" button for managing activity records

Comment Toxicity Detection (January 2025 – February 2025)
Python, Streamlit, TensorFlow, NLP
• Built a web app to detect toxic comments using a trained deep learning model (Bi-LSTM)
• Used NLP techniques for text preprocessing and tokenization
• Deployed the model with Streamlit for real-time user input and classification

Sign Language Detection (March 2025 – April 2025)
Python, OpenCV, TensorFlow, CNN, Computer Vision
• Developed a real-time system to detect and classify hand signs using Convolutional Neural Networks
• Used OpenCV for hand gesture capture via webcam and preprocessed frames for model input
• Deployed the model in a user-friendly app for live gesture prediction and visual feedback

EDUCATION
Bachelor of Technology in Artificial Intelligence and Machine Learning (2022 – 2026)
Sri Vasavi Engineering College, Tadepalligudem
• GPA: 8.0 | Expected Graduation: Nov 2026

CERTIFICATIONS
Microsoft Certified: Azure AI Fundamentals
• Credential ID: BFB956677ECA597E

NVIDIA Certified: Building LLM Applications With Prompt Engineering
• Credential ID: VWJlvKMdT5GhClnFl3qViw
• Issue Date: May 19, 2025

IIDT – APSCHE Internship: 8-Week Internship on AI-ML-DS
• Credential ID: BBAPSCHEIIDT2024ST102161
• Issue Date: July 24, 2024

LANGUAGES
English: Fluent
Telugu: Native
`

  return new NextResponse(resumeContent, {
    status: 200,
    headers: {
      "Content-Type": "text/plain",
      "Content-Disposition": 'attachment; filename="Pavan_Sai_Ganta_Resume.txt"',
    },
  })
}

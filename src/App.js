import logo from './logo.jpg';
import './App.css';
import profilePhoto from '/';function App() {
  return (
    <div className="App">
      <header className="header">
                <img src={logo} className="App-logo" alt="logo" />
        <h1>Abigail Hepburn</h1>
        <p>Computer Engineering Student | Web Developer | Problem Solver</p>
      </header>

      <main className="main-content">
        <section className="about" id="about">
  <h2>About Me</h2>
  <div className="about-content">
    <p>
      Hi! I'm a freshman studying Computer Engineering at the University of Florida. 
      I'm passionate about creating web applications that solve real-world 
      problems.
    </p>
  </div>
</section>

        <section className="projects" id="projects">
          <h2>Projects</h2>
          <div className="project-item">
            <h3>Support Bot</h3>
            <h5>OpenAI, Python, Gradio 	</h5>
            <p>
              Designed and built a document-aware AI chatbot that answers a user’s questions based on the user's uploaded documents.
Used Gradio to construct the UI. Paired with my RAG pipeline, it allows for the user to upload any .pdf , .docx, or .txt document and extracts the file’s text to check for any similarity between it and the user’s question. 
            </p>
          </div>
          <div className="project-item">
            <h3>Mock Enrollment</h3>
            <h5>SQL, Postgres, Python, Flask, HTML, CSS, JavaScript	</h5>
            <p>
              Built a full-stack enrollment management web application that allows users to create students and courses, enroll students, and view enrollment relationships through a clean web interface.
Developed using Flask, PostgreSQL, and SQL, showcasing skills in backend development, and database design.
Used HTML, CSS, and Javascript to construct a front-end web interface ready for user interaction.
            </p>
            </div>
            <div className="project-item">
            <h3>NutriTrack</h3>
            <h5>Python, HTML, CSS, Flask</h5>
            <p>
              Participated in the Open Source Hackathon where my team and I created a web app focused on promoting healthy nutritional intake.
Outputs included quantitative and qualitative data such as 34 possible pieces of advice based on the user’s body measurement inputs, and the numerical difference between their intake and the recommended one.
Leveraged Python to store the necessary data, including the nutritional/health advice, the BMI calculation procedure for both males and females, and the recommended intake for the 7 featured macronutrients. Utilized HTML & CSS to build our web pages.

            </p>
          </div>
        </section>

        <section className="experience" id="experience">
          <h2>Experience</h2>
          <div className="experience-item">
            <h3>Code Tutor/Camp Lead</h3>
            <p className="company">Code Ninjas</p>
            <p>
              Created 80+ coding activities and projects using Scratch, Microsoft MakeCode, and Snap Circuits for a group of 40+ campers from ages 5-9 and guided them to completion. Provided one-on-one support to 100+ Kindergarten-8th grade students, guiding them through coding lessons on platforms such as Code Spark Academy, Unity and Blockly.
            </p>
          </div>
          <div className="experience-item">
            <h3>Researcher</h3>
            <p className="company">UF Data Studio</p>
            <p>Conducted research on LLM-based synthetic prediction generation using Python, producing structured datasets stored in CSV format.
Designed and evaluated prompting strategies (few-shot, zero-shot, chain-of-thought) to generate multi-domain prediction data (finance, health, policy, weather, sports).
Executed Python data pipelines with the NaviGator Toolkit to generate 10–15 batches of synthetic data per week.</p>
          </div>
        </section>
        <section className="involvement" id="involvement">
          <h2>Involvement</h2>
          <div className="involvement-item">
            <h3>Trailblazer, NSBE</h3>
            <p>Freshman leadership program under the University of Florida NSBE Chapter, an engineering organization focused on developing and uplifting black engineers.
Allows me to gain skills from technical and professional workshops, and also collaborate on a group project using what I learned.
            </p>
          </div>
          <div className="involvement-item">
            <h3>Corporate Mentee, WiCSE</h3>
            <p>Mentee under the Corporate Mentorship Program, which gives me the ability to connect with and learn from engineers who work in the industry. I also attended various technical workshops on skills such as python, git, arduino, and more.
            </p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <footer className="footer">
  <div className="social-links">
    <a 
      href="https://linkedin.com/in/abigail-hepburn" 
      target="_blank" 
      rel="noopener noreferrer"
      className="social-link"
    >
      LinkedIn
    </a>
    <a 
      href="https://github.com/abbyhepburn/" 
      target="_blank" 
      rel="noopener noreferrer"
      className="social-link"
    >
      GitHub
    </a>
    <a 
      href="mailto:abigailzhepburn@gmail.com"
      className="social-link"
    >
      Email
    </a>
  </div>
  <p>&copy; 2026 Abigail Hepburn. All rights reserved.</p>
</footer>
        <p>&copy; 2026 Abigail Hepburn. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;

import './App.css'

function App() {
  const name = "Hari" ;
  const profession = "Software Developer";
  const projects = [
    {
      name: "java",
      description: "This is a Java project. I completed this project in 2020.",
      link: "jsk"
    },
    {
      name: "Python",
      description: "This is a Python project. I completed this project in 2021.",
      link: "jsk"
    },
    {
      name: "JavaScript",
      description: "This is a JavaScript project. I completed this project in 2021.",
      link: "jsk"
    },
    {
      name: "java",
      description: "This is a Java project. I completed this project in 2020.",
      link: "jsk"
    },
    {
      name: "Python",
      description: "This is a Python project. I completed this project in 2021.",
      link: "jsk"
    },
    {
      name: "JavaScript",
      description: "This is a JavaScript project. I completed this project in 2021.",
      link: "jsk"
    }
  ];

  return (
    <div className='app'>
      <header>
        <h1>{name}</h1>
        <p>{profession}</p>
        <nav className='nav'>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
        
      </header>
      {/* {about section} */}
      <section id = "about" className='about-section'> 
        <h2 >About</h2>
        <p>
          My name is {name}. I am a software developer. I have completed my graduation in computer science and my profession is {profession} I have 2 years of experience in software development.
        </p>
      </section>
    {/* {projects section} */}
    <section id='projects' className='projects-section'>
      <h2 id="projects">Projects</h2>
      <div className='projects-list'>
        {projects.map((project, index) => (<div key={index} className='project-item'>
          <h3>{project.name}+{index}</h3>
          <p>{project.description}</p>
    
      </div>))};
      </div>
    </section>
    {/* {contact section} */}
    <section id='contact' className='contact-section'>
      <h2>Contact  {name}</h2>
      <p>Email:<a href="mailto:hariprasad.punna22@gmail.com">hariprasad.punna22@gmail.com</a></p>

      </section> 
      {/* {footer} */}
      <footer className='footer'>
        <p>&copy; 2021 {name}</p> 
      </footer>
    </div>
  )
}

export default App

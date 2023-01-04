import React from 'react';
import {Link} from 'react-router-dom';
// import About from './About'
import './theStyleSheet.css';

function LandingPage() {  

  return (
    <div>
<head>
  <title>My Portfolio</title>
</head>
<body className='body'>
  <header className='header'>
    <h1 className='header h1'>My Portfolio</h1>
  </header>
  <nav className='nav'>
     <ul>    
      <li className='nav li'><Link to='/about'>About</Link></li>
      <li className='nav li'><a className='nav a' href="#projects">Projects</a></li>
      <li className='nav li'><a className='nav a' href="#contact">Contact</a></li>
    </ul>
  </nav>
  <main className='main'>
    <section className='section'> {/* <id="about"> */}
      <h2 className='section h2'>About</h2>
      <p>Hello there! I'm an artist and a programmer by the name of Makanjuola Timilehin. I love to use my technical talents to realize my artistic visions because I have a passion for both problem-solving and creation
     I use Programming languages including Java, C++, Python, JavaScript, HTML, CSS and React are all ones in which I am fluent. I enjoy designing, painting, and drawing in my free time, as well as experimenting with new gadgets and learning about the newest developments in the digital world

      </p>
    </section>
    <section id="projects">
      <h2 className='section h2'>Projects</h2><br></br>
      <h3 className='section h3'>Software Projects </h3>
      <p>my projects include this website and my other Python projects found on my github profile. the link is below </p>
      <p><a href='https://github.com/Timelaying'>Timelaying</a></p>


      <h3 className='section h3'>Art Projects </h3>
      <p>Most of my art works cn be found on my fiverr profile <a href='https://www.fiverr.com/timelaying'>@Timelaying</a></p>
    </section>
    <section id="contact">
      <h2>Contact</h2>
      <p>You can contact me at:</p>
      <ul>
        <li>Email: makanjuola.timi@gmail.com</li>
      </ul>
    </section>
  </main>
  <footer className='footer'>
    <p>Copyright {new Date().getFullYear()} all right reserved Makanjuola Timilehin</p>
  </footer>
</body>
    
    </div>
  )
}

export default LandingPage

//how to get current year in html?




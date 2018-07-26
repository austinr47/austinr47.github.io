import React, { Component } from 'react';
import '../App.css';
import scrollToComponent from 'react-scroll-to-component';
import Waypoint from 'react-waypoint';
import { Link } from 'react-router-dom';
import pict from '../portfolio image.jpg'
import pict2 from '../2018-02-07-16-06-localhost_3000.png'
import pict3 from '../Startup-Creative-Computer-Notebooks-Start-up-593327.jpg'
import waypoint from '../Screen Shot 2018-02-27 at 12.27.04 PM.png'
import ClassyClosets from '../Classy CLosets .png'

class App extends Component {
    constructor() {
        super() 
        this.state = {
            about: false,
            skills: false,
            projects: false,
            contact: false,
        }
        this.showSection=this.showSection.bind(this)
        this.hideSection=this.hideSection.bind(this)
    }

    showSection(value) {
        if(value === 'about') {
            this.setState({
                about: true,
                skills: false,
                projects: false,
                contact: false,
            })
        } else if(value === 'projects') {
            this.setState({
                about: false,
                skills: false,
                projects: true,
                contact: false,
            })
        }else if(value === 'skills') {
            this.setState({
                about: false,
                skills: true,
                projects: false,
                contact: false,
            })
        }
    }

    hideSection(value) {
        if(value === 'about') {
            this.setState({
                about: false,
                skills: true,
                projects: false,
                contact: false,
            })
        } 
    }


  render() {

    return (
      <div className="home-main">
        <div id="about" className='home-left'>
          <div className='header'>
            <img src={pict} alt="Austin" className='header-picture'/>
            <section>
              <section className='header-name-1'>Austin Randall</section>
              <section className='header-name-2'>Web Developer</section>
            </section>
          </div>
                <section className='about' ref={(section) => { this.About = section; }}>
                        <div className="home-header">
                            <img alt='header' src={pict3}/>
                        </div>
                      <div className='div-later'>
                        <div className="home-about">
                            <div className='home-about-title'>
                            About Austin
                            </div>
                            <Waypoint onEnter={() => {this.showSection('about')}} onLeave={() => {this.hideSection('about')}}/>
                            <p className='home-about-content'>
                            I am an Web Developer with full-stack JavaScript experience specializing in the React framework in association with Node, PostgreSQL and HTML/CSS. I am a determined and hard-working developer with a passion fo learning and improving my code. I approach my work with a visceral desire and unwavering determination to help my team succeed.
                            </p>
                        </div>
                      </div>
                </section>
                <div className='div-later'>
            <div id="skills" className="home-skills">
                    <section className='about' ref={(section) => { this.Skills = section; }}>
                        <div className='home-skills-title'>Skills
                        </div>
                        <p className='home-skills-paragraph'>
                        As a graduate of DevMountain, I have demonstrated proficiency with the following skills through assessments and through creating both personal and group projects using the following technologies:
                        </p>
                        <div className='home-skills-list'>
                            <div>
                                <ul><i className="devicon-react-original"></i>React | Redux</ul>
                                <ul><i className="devicon-javascript-plain colored"></i>JavaScript (ES6)</ul>
                                <ul><i className="devicon-nodejs-plain colored"></i>NodeJS</ul>
                                <ul><i className="devicon-express-original colored"></i>Express</ul>
                            </div>
                            <div>
                                {/* <ul>RESTful APIs</ul> */}
                                <ul><i className="devicon-postgresql-plain colored"></i>PostgreSQL</ul>
                                <ul><i className="devicon-html5-plain colored"></i>HTML5 / CSS</ul>
                                <ul><i className="fa fa-cogs fa-2x" aria-hidden="true"></i>NPM</ul>
                                {/* <ul>Massive</ul> */}
                                <ul><i className="devicon-github-plain colored"></i>Git | GitHub</ul>
                            </div>
                        </div>
                        <Waypoint onEnter={() => {this.showSection('skills')}} onLeave={() => {this.hideSection('a')}}/>
                    </section>
            </div>
            </div>
            <div className='div-later'>
            <div id="projects" className="home-projects">
                    <section className='about' ref={(section) => { this.Projects = section; }}>
                        <div className='home-projects-title'>
                        Projects
                        </div>
                        <div className="home-projects-content-main">
                          <div className='home-projects-content'>
                              <div className='home-projects-content-1'>
                                  <div className='home-projects-picture'>
                                  <a href='http://classykitchenandbath.com/' rel="noopener noreferrer" target="_blank" className='home-projects-picture'><img src={ClassyClosets} alt='classykitchenandbath.com'/></a>
                                  </div>
                                  <div className='home-projects-description'>
                                  <div className='home-projects-description-title'>Classy Closets</div>
                                  <div className='home-projects-description-awarded'></div>
                                  <div className='home-projects-description-from'>(Classy Closets - May 2018)</div>
                                  <div className='home-projects-description-text'>Full Stack, responsive site built with ReactJS, NodeJS, Local API, and Express. Used to display samples of products and installations with descriptions and ability to email for a free consultation.</div>
                                  </div>
                              </div>
                          </div>
                          <Waypoint onEnter={() => {this.showSection('projects')}} onLeave={() => {this.hideSection('contact')}}/>
                          <div className='home-projects-content'>
                              <div className='home-projects-content-1'>
                                  <div className='home-projects-picture'>
                                  <a href='http://myflash-study.com/#/' rel="noopener noreferrer" target="_blank" className='home-projects-picture'><img src='https://raw.githubusercontent.com/austinr47/main-personal-project/master/src/assets/account.png' alt='example'/></a>
                                  </div>
                                  <div className='home-projects-description'>
                                  <div className='home-projects-description-title'>FlashStudy Web Application</div>
                                  <div className='home-projects-description-awarded'>★ Awarded: "Best solution for a business" Personal Project</div>
                                  <div className='home-projects-description-from'>(DevMountain - January 2018)</div>
                                  <div className='home-projects-description-text'>Full-stack, responsive website built in two weeks using React with Redux, JavaScript, CSS, NodeJS, PostgreSQL, ChartJS, Digital Ocean for hosting, and more.</div>
                                  </div>
                              </div>
                          </div>
                          <div className='home-projects-content'>
                              <div className='home-projects-content-1'>
                                  <div className='home-projects-picture'>
                                  <img className='home-projects-picture-3' src={waypoint} alt='example'/>
                                  </div>
                                  <div className='home-projects-description'>
                                  <div className='home-projects-description-title'>InvitationHomes Demo Site</div>
                                  <div className='home-projects-description-awarded'>{/*★*/}</div>
                                  <div className='home-projects-description-from'>(DevMountain - Feburary 2018)</div>
                                  <div className='home-projects-description-text'>This was a group project to demonstrate teamwork and collaboration. We planned using Adobe XD and Trello. This project was created built in two weeks using React, JavaScript, CSS, NodeJS, PostgreSQL, TransitionCss, Digital Ocean for hosting, Auth0 and more.</div>
                                  </div>
                              </div>
                          </div>
                          <div className='home-projects-content'>
                              <div className='home-projects-content-1'>
                                  <div className='home-projects-picture'>
                                  <Link to="/react-minis" className='home-projects-picture'><img src={pict2} alt='example'/></Link>
                                  </div>
                                  <div className='home-projects-description'>
                                  <div className='home-projects-description-title'>React Mini Projects</div>
                                  <div className='home-projects-description-awarded'></div>
                                  <div className='home-projects-description-from'>(DevMountain - January 2018)</div>
                                  <div className='home-projects-description-text'>These are just a few small React exercises that I have created. Including: a calculator, a To-Do list, and a weather app. They are all mobile responsive and use various technologies.  </div>
                                  </div>
                              </div>
                          </div>
                        </div>
                    </section>
                    <section className='about' ref={(section) => { this.Contact = section; }}>
                        <div id="contact" className="home-contact">
                        </div>
                    </section>
            </div>
            </div>
        </div>
        <div className='home-right-1'>
        </div>
        <div className='home-right'>
          <div className='menu-picture-1'>
            <img src={pict} alt="Austin" className='menu-picture'/>
          </div>
          <div>
            <div className='menu-name'>Austin Randall</div>
            <div className='menu-title'>Web Developer</div>
          </div>
          <div className='menu-sections'>
            <a onClick={() => scrollToComponent(this.About, { offset: 0, align: 'top', duration: 750})} className={this.state.about ? 'menu-about showSection' : 'menu-about'}>About</a>
            <a onClick={() => scrollToComponent(this.Skills, { offset: 0, align: 'top', duration: 750})} className={this.state.skills ? 'menu-about showSection' : 'menu-about'}>Skills</a>
            <a onClick={() => scrollToComponent(this.Projects, { offset: 0, align: 'top', duration: 750})} className={this.state.projects ? 'menu-about showSection' : 'menu-about'}>Projects</a>
          </div>
          <div className='social-icons'>
            <a href='https://github.com/austinr47'><i className='fab fa-github fa-2x'></i></a>
            <a href='https://www.linkedin.com/in/austin-randall/'><i className="fab fa-linkedin fa-2x"></i></a>
            <a href='https://www.facebook.com/austinallie.randall'><i className="fab fa-facebook fa-2x"></i></a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

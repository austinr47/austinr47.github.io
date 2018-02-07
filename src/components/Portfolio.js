import React, { Component } from 'react';
import '../App.css';
import scrollToComponent from 'react-scroll-to-component';
import Waypoint from 'react-waypoint';
import { Link } from 'react-router-dom';

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
                <section className='about' ref={(section) => { this.About = section; }}>
                        <div className="home-header">
                            <img alt='header' src='http://maxpixel.freegreatpicture.com/static/photo/2x/Startup-Creative-Computer-Notebooks-Start-up-593327.jpg'/>
                        </div>
                        <div className="home-about">
                            <div className='home-about-title'>
                            About Austin
                            </div>
                            <Waypoint onEnter={() => {this.showSection('about')}} onLeave={() => {this.hideSection('about')}}/>
                            <p className='home-about-content'>
                            I am a determined and hard-working developer who loves coding because the learning never ends. I approach my work with a visceral desire and unwavering determination to help my team succeed. By doing so, I find great satisfaction in the process of failing forward together.
                            </p>
                        </div>
                </section>
            <div id="skills" className="home-skills">
                    <section className='about' ref={(section) => { this.Skills = section; }}>
                        <div className='home-skills-title'>Skills
                        </div>
                        <p className='home-skills-paragraph'>
                        As a graduate of DevMountain, I have demonstrated proficiency with the following skills through assessments and through creating both personal and group projects using the following technologies:
                        </p>
                        <div className='home-skills-list'>
                            <div>
                                <ul>React | Redux</ul>
                                <ul>JavaScript (ES6)</ul>
                                <ul>NodeJS</ul>
                                <ul>Express</ul>
                                <ul>PostgreSQL</ul>
                            </div>
                            <div>
                                <ul>RESTful APIs</ul>
                                <ul>HTML5 / CSS</ul>
                                <ul>NPM</ul>
                                <ul>Massive</ul>
                                <ul>Git | GitHub</ul>
                            </div>
                        </div>
                        <Waypoint onEnter={() => {this.showSection('skills')}} onLeave={() => {this.hideSection('a')}}/>
                    </section>
            </div>
            <div id="projects" className="home-projects">
                    <section className='about' ref={(section) => { this.Projects = section; }}>
                        <div className='home-projects-title'>
                        Projects
                        </div>
                        <div className="home-projects-content-main">
                            <div className='home-projects-content'>
                                <div className='home-projects-content-1'>
                                    <div className='home-projects-picture'>
                                    <a href='http://myflash-study.com/#/' rel="noopener noreferrer" target="_blank" className='home-projects-picture'><img src='https://raw.githubusercontent.com/austinr47/main-personal-project/master/src/assets/account.png' alt='example'/></a>
                                    </div>
                                    <div className='home-projects-description'>
                                    <div className='home-projects-description-title'>FlashStudy Web Application</div>
                                    <div className='home-projects-description-awarded'>★ Awarded: "Best solution for a business" Personal Project</div>
                                    <div className='home-projects-description-from'>(DevMountain - January 2018)</div>
                                    <div className='home-projects-description-text'>Function, full-stack, responsive website built in two weeks using React with Redux, JavaScript, CSS, NodeJS, PostgreSQL, ChartJS, Digital Ocean for hosting, and more.</div>
                                    </div>
                                </div>
                            </div>
                            <Waypoint onEnter={() => {this.showSection('projects')}} onLeave={() => {this.hideSection('contact')}}/>
                            <div className='home-projects-content'>
                                <div className='home-projects-content-1'>
                                    <div className='home-projects-picture'>
                                    <img className='home-projects-picture' src='https://raw.githubusercontent.com/austinr47/main-personal-project/master/src/assets/account.png' alt='example'/>
                                    </div>
                                    <div className='home-projects-description'>
                                    <div className='home-projects-description-title'>Group Project</div>
                                    <div className='home-projects-description-awarded'>★</div>
                                    <div className='home-projects-description-from'>(DevMountain - Feburary 2018)</div>
                                    <div className='home-projects-description-text'>Detailed project description will go here</div>
                                    </div>
                                </div>
                            </div>
                            <div className='home-projects-content'>
                                <div className='home-projects-content-1'>
                                    <div className='home-projects-picture'>
                                    <Link to="/react-minis" className='home-projects-picture'><img src='https://raw.githubusercontent.com/austinr47/main-personal-project/master/src/assets/account.png' alt='example'/></Link>
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
        <div className='home-right-1'>
        </div>
        <div className='home-right'>
          <div className='menu-picture-1'>
            <img src="data:image/jpeg;base64,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" alt="Austin" className='menu-picture'/>
          </div>
          <div className='menu-name'>Austin Randall</div>
          <div className='menu-title'>Web Developer</div>
          <div className='menu-sections'>
            <a onClick={() => scrollToComponent(this.About, { offset: 0, align: 'top', duration: 750})} className={this.state.about ? 'menu-about showSection' : 'menu-about'}>About</a>
            <a onClick={() => scrollToComponent(this.Skills, { offset: 0, align: 'top', duration: 750})} className={this.state.skills ? 'menu-about showSection' : 'menu-about'}>Skills</a>
            <a onClick={() => scrollToComponent(this.Projects, { offset: 0, align: 'top', duration: 750})} className={this.state.projects ? 'menu-about showSection' : 'menu-about'}>Projects</a>
            <a onClick={() => scrollToComponent(this.Contact, { offset: 0, align: 'top', duration: 750})} className={this.state.contact ? 'menu-about showSection' : 'menu-about'}>Contact</a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

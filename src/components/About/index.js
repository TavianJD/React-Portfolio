import React from 'react';
import image from "../../assets/images/photo-op.jpg";
// import { Col } from 'react-bootstrap';

function About() {
    return(
        <section className="title">
      
      <div className="row justify-content-center" id="about-container">       
      <center><img src={image} className="my-image" alt="tavian-profile"/></center>
      <p class="name">Tavian James Dawson</p>
      <p class="job">Full Stack Web Developer</p>
        <p>
        Hey my name is Tavian Dawson and welcome to my Coding Portfolio! When I think of myself I think of a very caring and easy-going guy and super goofy at times. This is my first time getting involved in technology, but I've always been interested in it. Before I got into this class I was just on a gap year not knowing what I should be doing and this course came up and I am glad I took the opportunity! My favorite things to do include skateboarding, skiing, video games, hanging out with friends, but most importantly traveling!. I haven't got to do much traveling in my life, but every trip is amazing and always catching myself wishing I didn't have to go back home.
        <br></br>
        <br></br>
        I have always wanted to expand my education beyond high school, I just never knew exactly what that looked like. I want to challenge myself and show to myself that I can do anything I put my mind to even if that means struggling and frustrating myself it's all apart of the process!  
        <br></br>
         </p>
      

      </div>
    </section> 
    )
}

export default About;
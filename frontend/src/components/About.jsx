import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid">
            Welcome to SS, where culinary excellence meets warm hospitality! 
            From our humble beginnings to becoming a beloved fixture in the 
            community, Zeesh is guided by a commitment to quality, innovation, 
            and hospitality. Our dedication to sourcing the freshest local 
            ingredients ensures each dish is a delightful experience. Step 
            into our inviting and elegant ambiance, where versatile spaces 
            cater to a variety of occasions. Our attentive staff strives to 
            exceed expectations, ensuring every visit is exceptional. 
            Join us for a culinary journey like no other, where every meal is 
            a masterpiece and every moment is savored with joy. Welcome to SS!
            </p>
            <Link to={"/"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

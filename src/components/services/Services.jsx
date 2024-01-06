import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on Building a Scalable
          <br /> and Optimized Application.
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/room.png" alt="" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Live</motion.b> Learn
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Practice</motion.b>{" "}
            Master.
          </h1>
          <button>WHAT I DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Tools/Languages</h2>
          <p>
            Proficient in a wide range of programming languages and development
            tools including Javscript, TypeScript and more, to
            build scalable and optimized applications.
            
            </p>
            <p>
            MERN stack, 
            Graph QL, Next JS, Redux, Context API ,Sanity, Firebase, 
            GSAP, Sass, Stripe, React Native ,Three Fiber
          </p>
          
          
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Cloud & Databases</h2>
          <p>
            Experienced with cloud services such as AWS and Azure, 
            </p>
              <p> Database
            management using MongoDB, Postgres, and MySQL.
          </p>
          
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>DevOps & Software</h2>
          <p>
            Competent in DevOps practices with tools like Linux/Ubuntu Server,
            DNS , Apache Server ,Docker and platforms like Netlify, </p>
              <p> Enthusiastic 
            in software such as Figma,Adobe Photoshop,After
            effects,Blender,Unity,Unreal Engine,Illustrator and CorelDraw.
          </p>
          
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Additional Information</h2>
          <ul>
            <li>National Gold Medalist - Delhi Horse Show 2011, 2013</li>
            <li>Dada Saheb Phalke Award 2013 in Filmmaking</li>
          </ul>
          
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;

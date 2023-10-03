import React from "react";
import { motion } from "framer-motion";
import Button from "../components/button/button";
import Icon from "../components/icon/icon";

const About = ({ summary, link, desc, socials }) => {
  
  return (
    <section id="about" className="h-full flex flex-col xl:flex-row justify-between items-stretch gap-8 px-8 md:px-24 py-16 lg:py-32">

      <div className="w-full lg:w-1/4 h-fit lg:sticky xl:top-24">
        <Button type="text" style="outlined" shape="rounded" link={`mailto:${link}`}>Contact Me</Button>
      </div>

      <div className="w-full lg:w-3/4 space-y-8 xl:space-y-10">

        <motion.h3 
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{duration: 1}}
          viewport={{ once: true }}
          className="font-primary text-3xl md:text-5xl lg:text-7xl font-bold">
            {summary}
        </motion.h3>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{duration: 1.2, delay: 0.1 }}
          viewport={{ once: true }}
          className="font-secondary text-base">
            {desc}
        </motion.p>

        <div className="flex gap-x-4">
          {
            socials.map((social, index)=> {
              return (
                <Button 
                type="icon" style="outlined" shape="rounded" link={social.socialUrl} key={index}>
                  <Icon name={social.socialName}/>
                </Button>
              )
            })
          }
        </div>

      </div>

    </section>
  );
};

export default About;

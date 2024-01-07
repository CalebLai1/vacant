import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const About = () => {
  const [ref] = useInView({
    threshold: 0.5,
  });
  return (
    <section className='section' id='about' ref={ref}>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
          
          
          <motion.div
            variants={fadeIn('left', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1'
          >
            <h2 className='h2 text-accent'>Founders.</h2>
            <h3 className='h3 mb-4'>
            As high school students, Jaydon and Caleb wanted a free website that had all the necessary tools for education without paywalls or ads. We aimed at optimizing our peers' learning experiences, by providing a user-friendly platform for educational enhancement.
            </h3>
            
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

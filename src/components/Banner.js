import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const Banner = () => {
  return (
    <section
      className='min-h-[85vh] lg:min-h-[78vh] flex items-center'
      id='home'
    >
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
          {/* text */}
          <div className='flex-1 text-center font-montserrat lg:text-left'>
            <motion.h1
              variants={fadeIn('up', 0.3)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='text-[100px] font-extrabold leading-[0.8] lg:text-[200px]'
            > 
              Vacant
            </motion.h1>
            <motion.div
              variants={fadeIn('up', 0.4)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='mb-6 text-[36px] lg:text-[60px] font-montserrat font-semibold uppercase leading-[1]'
            >
              <span className='text-white mr-4'>Vacant Is a Tool For</span>
              <TypeAnimation
                sequence={[
                  'Note-Taking',
                  2000,
                  'To-Do Lists',
                  2000,
                  'Flashcards',
                  2000,
                  'Pomodoro Timer',
                  2000,
                  'Citation and Bibliography Generator',
                  2000,
                  'Quiz Tools',
                  2000,
                ]}
                speed={50}
                className='text-accent'
                wrapper='span'
                repeat={Infinity}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;

import React from 'react';
// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../variants';

const Contact = () => {
  return (
    <section className='py-16 lg:section' id='contact'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          {/* text */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 flex justify-start items-center'
          >
            <div>
              <h4 className='text-xl uppercase text-accent font-medium mb-2 tracking-wide'>
                Get in touch
              </h4>
              <h2 className='text-[45px] lg:text-[px] leading-none mb-12'>
                Want more <br /> tools send us <br/> a message!
              </h2>
            </div>
          </motion.div>
          {/* form */}
          <motion.div
            variants={fadeIn('left', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-12 p-6 items-start'
          >
            <p className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all text-5xl'>
              Caleb Lai  caleb.lai@vhhscougars.org
            </p>
            <p className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all text-5xl'>
              Jaydon Chua  jaydon.chua@vhhscougars.org
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

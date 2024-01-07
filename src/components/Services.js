import React from 'react';
import { UilArrowUpRight } from '@iconscout/react-unicons';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <section className='section' id='services'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          {/* text */}
          <h2 className='h2 text-accent mb-12' style={{ marginRight: '20px' }}>Our Services</h2>
          
          {/* services */}
          <motion.div
            variants={fadeIn('left', 0.7)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.5 }}
            className='flex-1'
          >
            {/* service list */}
            <div>
              {/* Note-Taking Service */}
              <div className='border-b border-white/20 h-[146px] mb-[38px] flex'>
                <div className='max-w-[476px]'>
                  <h3 className='text-[20px] tracking-wider font-semibold mb-6'>
                    Note-Taking
                  </h3>
                  <a className='leading-tight'>
                    Don't want to pay for paper or carry it around use digital notes
                  </a>
                </div>
                <div className='flex flex-col flex-1 items-end'>
                  <Link
                    to='/TotallyAllServices'
                    className='btn w-9 h-9 mb-[42px] flex justify-center items-center'
                  >
                    <UilArrowUpRight />
                  </Link>
                  <Link to='/TotallyAllServices' className='text-gradient text-sm'>
                    Learn more
                  </Link>
                </div>
              </div>
              {/* To-Do Lists Service */}
              <div className='border-b border-white/20 h-[146px] mb-[38px] flex'>
                <div className='max-w-[476px]'>
                  <h3 className='text-[20px] tracking-wider font-semibold mb-6'>
                    To-Do Lists
                  </h3>
                  <a className='leading-tight'>
                    Always forgetting what's due use To do lists
                  </a>
                </div>
                <div className='flex flex-col flex-1 items-end'>
                  <Link
                    to='/TotallyAllServices'
                    className='btn w-9 h-9 mb-[42px] flex justify-center items-center'
                  >
                    <UilArrowUpRight />
                  </Link>
                  <Link to='/TotallyAllServices' className='text-gradient text-sm'>
                    Learn more
                  </Link>
                </div>
              </div>
              {/* Flashcards Service */}
              <div className='border-b border-white/20 h-[146px] mb-[38px] flex'>
                <div className='max-w-[476px]'>
                  <h3 className='text-[20px] tracking-wider font-semibold mb-6'>
                    Flashcards
                  </h3>
                  <a className='leading-tight'>
                    Can't get through paywalls for digital flashcards use ours
                  </a>
                </div>
                <div className='flex flex-col flex-1 items-end'>
                  <Link
                    to='/TotallyAllServices'
                    className='btn w-9 h-9 mb-[42px] flex justify-center items-center'
                  >
                    <UilArrowUpRight />
                  </Link>
                  <Link to='/TotallyAllServices' className='text-gradient text-sm'>
                    Learn more
                  </Link>
                </div>
              </div>
              {/* Quiz Tools Service */}
              <div className='border-b border-white/20 h-[146px] mb-[38px] flex'>
                <div className='max-w-[476px]'>
                  <h3 className='text-[20px] tracking-wider font-semibold mb-6'>
                    Quiz Tools
                  </h3>
                  <a className='leading-tight'>
                    Want to study before that big test Quiz yourself
                  </a>
                </div>
                <div className='flex flex-col flex-1 items-end'>
                  <Link
                    to='/TotallyAllServices'
                    className='btn w-9 h-9 mb-[42px] flex justify-center items-center'
                  >
                    <UilArrowUpRight />
                  </Link>
                  <Link to='/TotallyAllServices' className='text-gradient text-sm'>
                    Learn more
                  </Link>
                </div>
              </div>
              {/* Pomodoro Timer Service */}
              <div className='border-b border-white/20 h-[146px] mb-[38px] flex'>
                <div className='max-w-[476px]'>
                  <h3 className='text-[20px] tracking-wider font-semibold mb-6'>
                    Pomodoro Timer
                  </h3>
                  <a className='leading-tight'>
                    Want to efficiently learn try a Pomodoro Timer
                  </a>
                </div>
                <div className='flex flex-col flex-1 items-end'>
                  <Link
                    to='/TotallyAllServices'
                    className='btn w-9 h-9 mb-[42px] flex justify-center items-center'
                  >
                    <UilArrowUpRight />
                  </Link>
                  <Link to='/TotallyAllServices' className='text-gradient text-sm'>
                    Learn more
                  </Link>
                </div>
              </div>
              {/* Citation and Bibliography Generator Service */}
              <div className='border-b border-white/20 h-[146px] mb-[38px] flex'>
                <div className='max-w-[476px]'>
                  <h3 className='text-[20px] tracking-wider font-semibold mb-6'>
                    Citation and Bibliography Generator
                  </h3>
                  <a className='leading-tight'>
                    Paywalled and Ad filled Citation generators no more
                  </a>
                </div>
                <div className='flex flex-col flex-1 items-end'>
                  <Link
                    to='/TotallyAllServices'
                    className='btn w-9 h-9 mb-[42px] flex justify-center items-center'
                  >
                    <UilArrowUpRight />
                  </Link>
                  <Link to='/TotallyAllServices' className='text-gradient text-sm'>
                    Learn more
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;

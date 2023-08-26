import React from 'react';
import {
  BiLogoLinkedin,
  BiLogoGithub,
  BiLogoInstagram,
  BiLogoTwitter
} from 'react-icons/bi';

const Footer = () => {

  return (
    <div className='max-w-[1440px] mx-auto py-16 px-4 grid lg:grid-cols-2 gap-8 text-gray-300 justify-between border-t-2 border-[#dadada63]'>
      <div className='max-w-[360px]'>
        <h1 className='w-full text-3xl font-bold   text-[#13426ca6]'>Hanife Erkalan</h1>
        <p className='py-4'>I'm a passionate Front-End web developer having an experience of web applications with React.js & Next.js with TypeScript. I'm here to help you create beautifully formatted websites.</p>
        <div className='flex justify-between md:w-[50%] my-6'>
          <a href='https://www.linkedin.com/in/hanifeerkalan/'><BiLogoLinkedin size={30}  />
            </a>  
          <a href='https://www.linkedin.com/in/hanifeerkalan/'> <BiLogoInstagram size={30} />
            </a> 
           <a href='https://twitter.com/erklnh'><BiLogoTwitter size={30} />
            </a> 
          <a href='https://github.com/eliferkln'> <BiLogoGithub size={30} />
            </a>  
        </div>
      </div>
      
      <div className='lg:col-span-1 flex flex-col items-center  mt-6 '>

      <div className='flex flex-col sm:flex-row items-center '>
            <input
              className='p-3 flex w-60 rounded-md text-[#dadada63] border-2 border-[#dadada63]'
              type='email'
              placeholder='Email'
            />
            <button className='bg-[#13426ca6] hover:bg-[#dadada63] hover:text-[#13426ca6]  text-white rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3 '>
           Contact Me!
            </button>
          </div>
          <p >
            Contact me for mail{' '}
            <span className='text-[#13426ca6] px-2'>Privacy Policy.</span>
          </p>
      </div>
      
    </div>
  );
};

export default Footer;

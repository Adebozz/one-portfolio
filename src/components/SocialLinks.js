import React from 'react';
import {FaGithub, FaLinkedin} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/bs';
import { BsFillPersonLinesFill } from 'react-icons/bs';
const SocialLinks = () => {

    const links = [
        {
            id:1,
            child: (
                <>
                LinkedIn <FaLinkedin size={30}/>
                </>
            ),
            href: 'https//linkedin.com',
            style: 'rounded-tr-md'
        },
        {
            id:2,
            child: (
                <>
                Github <FaGithub size={30}/>
                </>
            ),
            href: 'https//github.com/Adebozz',
            
        },
        {
            id:3,
            child: (
                <>
                Mail <HiOutlineMail size={30}/>
                </>
            ),
            href: 'ademolaadeigbe03@gmail.com',
        },
        {
            id:4,
            child: (
                <>
                Resume <BsFillPersonLinesFill size={30}/>
                </>
            ),
            href: '',
            style: 'rounded-br-md',
            download: true,
        }
    ]
  return (
    <div className='flex flex-col top-[35%] left-0 fixed'>
      <ul>
        <li className='flex justify-between items-center w-40 h-14 
        px-4 ml-[-100px] hover:ml-[-10px] hoer:rounded-md
        duration-300 bg-gray-500'>
            <a 
            href=''
            className='flex justify-between items-center w-full
            text-white'
            >
            <>
            LinkedIn <FaLinkedin size={30}/>
            
            </>
            </a>
            </li>
      </ul>
    </div>
)
}

export default SocialLinks

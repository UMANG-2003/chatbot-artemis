"use client"
import { faChevronDown, faCircle, faFile, faSmile, faUpLong } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import gsap from 'gsap'
import { useEffect } from 'react';
import React from 'react'

function Chatbot() {
    {
        useEffect(() => {
            gsap.fromTo("#dot1", {y: 0,opacity:0}, {y: -3,opacity:1, duration: 1, delay: 0.5, repeat: -1, yoyo: true });
            gsap.fromTo("#dot2", {y: 0,opacity:0}, {y: -3,opacity:1, duration: 1, delay: 1, repeat: -1, yoyo: true });
            gsap.fromTo("#dot3", {y: 0,opacity:0}, {y: -3,opacity:1, duration: 1, delay: 1.8, repeat: -1, yoyo: true });
          }, []);
    }
  return <> 
        <div className='chatbot shadow-2xl shadow-gray-700 border-2 border-gray-600 mx-auto bg-gray-700 w-72 h-[70vh] my-10 rounded-lg shadow-md relative z-0'>
            <div className="chatbot-header bg-indigo-700 flex justify-between p-2 rounded-t-lg">
                <div className='flex gap-2 items-center'>
                <img className='h-7' src="/chatbot logo.png" alt="" />
                <span className='font-bold text-xs'>ARTEMIS</span>
                </div>
                <button><FontAwesomeIcon icon={faChevronDown}></FontAwesomeIcon></button>
            </div>

            <div className="chatbot-body my-1 p-2 h-fit text-sm">
                <div className='flex gap-2  my-2'>
                <img className='h-5 mb-[10px] rounded-full' src="/chatbot logo.png" alt="" />
                <div className='bot-message block float-left border-2 border-gray-500 bg-slate-200 w-44 p-1 text-gray-700 text-xs px-2 font-semibold rounded-lg'>
                Hey there 👋
                <br />
                How i can help you today
                </div>
                </div>

                <div className='flex justify-end  my-2'>
                <div className='bot-message block my-1 border-2 border-gray-500 bg-slate-200 w-44 text-gray-700 text-xs px-2 py-1 font-semibold rounded-lg'>
                    <div className='float-right'>
                       Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa, velit?
                    </div>
                </div>
                </div>

               
                <div className="think flex my-2 gap-2">
                <img className='h-5 mb-[10px] rounded-full' src="/chatbot logo.png" alt="" />
                <div className='bg-slate-200  text-gray-700 w-12 h-6 border-2 border-gray-500 rounded-full rounded-bl-none flex gap-1 px-2'>
                    <span><FontAwesomeIcon icon={faCircle} className='text-[6px]'id="dot1"></FontAwesomeIcon></span>
                    <span><FontAwesomeIcon icon={faCircle} className='text-[6px]'id='dot2'></FontAwesomeIcon></span>
                    <span><FontAwesomeIcon icon={faCircle} className='text-[6px]'id='dot3'></FontAwesomeIcon></span>
                </div>
                </div>
            </div>

            <div className='user mx-[10px] absolute bottom-4'>
                <form action="#" className='flex p-2 justify-between border-2 rounded-full bg-gray-800'>
                    <input placeholder='ask anything.....' className='message-input bg-transparent w-44 rounded-full px-2 text-xs' id=""></input>
                    <div className='chat-btn flex gap-1'>
                        <button className=' p-1 rounded-full text-xs'><FontAwesomeIcon icon={faSmile}></FontAwesomeIcon></button>
                        <button className=' p-1 rounded-full text-xs'><FontAwesomeIcon icon={faFile}></FontAwesomeIcon></button>
                        <button className='border-2 px-2 border-green-300 rounded-full text-xs'><FontAwesomeIcon icon={faUpLong}></FontAwesomeIcon></button>  
                    </div>
                </form>
            </div>
        </div>
  </>
}

export default Chatbot
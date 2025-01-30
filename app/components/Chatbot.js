import { faArrowDownAZ, faChevronDown, faCircleArrowDown, faFile, faSmile, faSortDown, faUpLong } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Chatbot() {
  return <> 
        <div className='chatbot mx-auto bg-gray-700 w-72 h-[70vh] my-10 rounded-lg shadow-md relative'>
            <div className="chatbot-header bg-indigo-700 flex justify-between p-2 rounded-t-lg">
                <div className='flex gap-2 items-center'>
                <img className='h-7' src="/chatbot logo.png" alt="" />
                <span className='font-bold text-xs'>ARTEMIS</span>
                </div>
                <button><FontAwesomeIcon icon={faChevronDown}></FontAwesomeIcon></button>
            </div>

            <div className="chatbot-body my-3 p-2 h-fit text-sm">
                <img className='h-5 mb-[10px]' src="/chatbot logo.png" alt="" />
                <div>Hey there 👋</div>
                <div>How i can help you today</div>
                <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, aspernatur!</div>
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
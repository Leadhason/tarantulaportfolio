import React from 'react'
import { socials } from '#constants'
import WindowWrapper from '#hoc/WindowWrapper.jsx'
import { WindowControls } from '#components'

const Contact = () => {
  return (
    <>
        <div id="window-header">
            <WindowControls target="contact" />
            <h2>Contact Me</h2>
        </div>

        <div className="p-5 space-y-5">
            <img src="/images/adrian.jpg" alt="Adrian's profile photo" className="w-20 rounded-full" />
            <h3 className=''>Let's Connect</h3>
            <p className=''>Got an idea? A bug to squash? or just wanna talk tech? I'm in.</p>
            <p className='italic text-sm font-medium'>adrian@tarantula.co</p>

            <ul>{socials.map(({id, bg, link, icon, text}) => (
                <li key={id} style={{ backgroundColor: bg }}>
                    <a href={link} target='_blank' rel="noopener noreferrer" title={text}>
                        <img src={icon} alt={text} className="size-5"/>
                        <p className=''>{text}</p>
                    </a>
                </li>
            ))}</ul>
        </div>
    </>
  )
}

const ContactWindow = WindowWrapper(Contact, "contact");

export default ContactWindow
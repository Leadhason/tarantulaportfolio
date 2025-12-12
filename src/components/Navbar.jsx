import React from 'react'
import dayjs from 'dayjs'

import { navLinks, navIcons } from '#constants'
import useWindowStore from '#store/window.js'

const Navbar = () => {
    const { openWindow } = useWindowStore();

  return (
    <nav>
        <div>
            <img src="/images/logo.svg" alt="logo" />
            <p className="font-bold">Tarantula</p>
        </div>

        <ul>
            {navLinks.map(({id, name, type}) => (
                <li key={id} onClick={() => openWindow(type)}>
                    <p>{name}</p>
                </li>
            ))}
        </ul>

        <ul>
            {navIcons.map(({id, img}) => (
                <li key={id}>
                    <img src={img} className="icon-hover" alt={`icon-${id}`} />
                </li>
            ))}
        </ul>

        <time>{dayjs().format('ddd MMM D h:mm A')}</time>
    </nav>
  )
}

export default Navbar
import React from 'react'
import {DiGithubAlt} from 'react-icons/di'
import { Link } from 'react-router-dom'
import headerStyles from './header.module.css'

const Header = () => {
  return (
    <div className={headerStyles.flex}>
        <Link className={headerStyles.link} to='/'>
          <h1>Hello redux toolkit!</h1>
        </Link>
        <Link className={`${headerStyles.link} ${headerStyles.about}`} to='/about'>
          <p>About this project</p>
        </Link>
        <a className={headerStyles.githubLink}  href="https://github.com/Lnkeyd" rel="noopener noreferrer" target="_blank" >
          <DiGithubAlt className={headerStyles.github}/>
        </a>
      </div>
  )
}

export default Header
import React, { useContext } from 'react'
import {Context} from "../../main"
import {Link} from "react-router-dom"
import { FaGithub , FaLinkedin} from "react-icons/fa"
import { SiLeetcode } from "react-icons/si";
import { RiInstagramFill} from "react-icons/ri"
function Footer() {
  const {isAuthorized}  = useContext(Context)
  return (
    <footer className= {isAuthorized ? "footerShow" : "footerHide"}>
<div>&copy; All Rights Reserved by Abhishek.</div>
<div>
  <Link to={'https://github.com/prathameshkamble979'} target='github'><FaGithub></FaGithub></Link>
  <Link to={'https://leetcode.com/u/Prathameshk06/'} target='leetcode'><SiLeetcode></SiLeetcode></Link>
  <Link to={'www.linkedin.com/in/prathamesh-kamble06'} target='linkedin'><FaLinkedin></FaLinkedin></Link>
  <Link to={'https://www.instagram.com/curious.prathamesh?igsh=MmFlMXJ1OWR3OGxs'} target='instagram'><RiInstagramFill></RiInstagramFill></Link>
</div>
      
    </footer>
  )
}

export default Footer

import './Contact.css';
import { contactDetails } from './constants';
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaSquarePhone } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import React from 'react';

function Contact() {
  return (
    <div id='contact-container'>
      <section>
        <div id='contact'>
          <div>{contactDetails.contact}</div>
        </div>
      </section>

      <section>
        <div id='contactDetails'>
          <div id='resume-container'>
            <div
            ><button>Download CV</button></div>
          </div>

          <div id='details-container'>
            <div id='place'><span><IoLocationSharp /></span>{contactDetails.place}</div>
            <div id='mailId'><span><MdEmail /></span>{contactDetails.mailId}</div>
            <div id='phoneNo'><span><FaSquarePhone /></span>{contactDetails.phoneNo}</div>
            <div id='gitLink'><span><FaGithub /></span><a href='https://github.com/arul-jose/'>{contactDetails.gitLink}</a></div>
            <div id='linkedin'><span><FaLinkedin /></span><a href='https://in.linkedin.com/'>{contactDetails.linkedin}</a></div>
          </div>

        </div>
      </section>
    </div>
  )
}

export default Contact

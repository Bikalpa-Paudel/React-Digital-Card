import React from "react"
import {AiFillGithub, AiFillTwitterSquare, AiFillLinkedin, AiFillInstagram} from "react-icons/ai"
import "./Social.css"

export default function Social(){
    return (
        <>
            <section className="social">
                <a href="https://github.com/Bikalpa-Paudel" className="github"><AiFillGithub className="icons"/></a>
                <a href="https://twitter.com/Bikalpa003" className="twitter"><AiFillTwitterSquare className="icons"/></a>
                <a href="https://www.instagram.com/bikalpa_paudel_/" className="Instagram"><AiFillInstagram className="icons"/></a>
                <a href="https://www.linkedin.com/in/codewith-bikalpa-19b34323a/" className="Linkedin"><AiFillLinkedin className="icons" /></a>
            </section>
        </>
    )
}
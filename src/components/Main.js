import myPhoto from "./myPhoto.jpg"
import "./Main.css"

export default function Main(){
    return (
        <>
            <img src={myPhoto} className="myPhoto"/>
            <div className="name">Bikalpa Paudel</div>
            <div className="work">Frontend Developer</div>
            <div className="website">bikalpa.com</div>
            <div className="email"><a href="https://mail.google.com/mail/u/0/#sent?compose=PNRMKgLrCFvdRJNhDrxbLPwFsjMTCmkLQxjfkTGfZGXlkScVXLkFGpBbjjJQmJSZHRvxxXrTZHlVZGV" className="email-text">Email</a></div>
        </>
    )
}
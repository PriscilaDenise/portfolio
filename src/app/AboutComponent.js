import video from "../assets/Bungee video.mp4"
function AboutComponent(){
    return(
    <> 
        <section id="about">
        <div className="container">
            <h2>About Me</h2>
            <p>Passionate about the ever-evolving technologies. I am on a journey of continuous learning and innovation.</p>
            <h3>My Technical Skills</h3>
            <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Python</li>
            <li>SQL</li>
            </ul>
        </div>

        <div className="hobby">
                <h3>My Hobby</h3>
                <p>I love the thrill from such addrenaline filled activities. </p>
                <video src={video} controls width="560" height="315"></video>
        </div>

        </section>
    </>
    );
}

export default AboutComponent;
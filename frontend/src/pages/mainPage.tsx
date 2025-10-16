import {AboutMe} from "../components/aboutMe.tsx"
import {Projects} from "../components/projects.tsx"
import myImage from "../assets/IMG_4223.jpeg"
import "../css/image.css";

export function MainPage() {
    return (
        <div>
            <header>
                <h1>My CV</h1>
                <img src={myImage}  alt="My image"/>
            </header>
            
            <main>
                <AboutMe/>
                <Projects/>
            </main>

            <footer>
                <p>© 2025 Jesper Svoldgaard</p>
            </footer>
        </div>
    )
}






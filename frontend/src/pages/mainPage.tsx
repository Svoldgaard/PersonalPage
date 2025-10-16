import {AboutMe} from "../components/aboutMe.tsx"


export function MainPage() {
    return (
        <div>
            <header>
                <h1>My CV</h1>
                <nav>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </nav>
            </header>

            <main>
                <AboutMe/>
            </main>

            <footer>
                <p>© 2025 Jesper Svoldgaard</p>
            </footer>
        </div>
    )
}






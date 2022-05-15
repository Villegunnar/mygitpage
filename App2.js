import * as React from "react"
import { Routes, Route, Link } from "react-router-dom";
import './App.css';


function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/mygitpage" element={<Home />} />
                <Route path="/mygitpage/about" element={<About />} />
                <Route path="/mygitpage/privacy" element={<Privacy />} />
            </Routes>s
        </div>
    );
}

function Home() {
    return (
        <>





            <nav>
                <ul className='my-list'>
                    <li>Home</li>
                    <li><Link to="/mygitpage/about">About</Link></li>
                    <li><Link to="/mygitpage/privacy">Privacy</Link></li>
                </ul>
            </nav>
            <main>
                <h2>Welcome to the homepage</h2>
                <p>You will get more information later</p>

            </main>
            <section></section>
            <footer></footer>
        </>
    );
}

function About() {
    return (
        <>
            <nav>
                <ul className='my-list'>
                    <li><Link to="/mygitpage">Home</Link></li>
                    <li>About</li>
                    <li><Link to="/mygitpage/privacy">Privacy</Link></li>
                </ul>
            </nav>
            <main>
                <h2>Welcome to read more information about me</h2>
                <p>You will get more information later</p>

            </main>
            <section></section>
            <footer></footer>
        </>
    );
}

function Privacy() {
    return (
        <>
            <nav>
                <ul className='my-list'>
                    <li><Link to="/mygitpage">Home</Link></li>
                    <li><Link to="/mygitpage/about">About</Link></li>
                    <li>Privacy</li>

                </ul>
            </nav>
            <main>
                <h2>Welcome to the privacy page</h2>
                <p>You will get more information later</p>

            </main>
            <section></section>
            <footer></footer>
        </>
    );
}

export default App;

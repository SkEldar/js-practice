import React from 'react';
import {render} from 'react-dom';
import "./css/style.css";
import logo from './img/logo.png';
import Skills from './Skills';
import Gallery from './Gallery';
import Footer from './Footer';

function Header() {
    return(
    <div>
        <header className="header">
            <div className="container">
                <img src={logo} alt="logo" />
                <div class="offer">
                     <h1>Я УЧУ HTML5/CSS3</h1>
                    <p>И мне это дается легко!</p>
                 </div>
            </div>
            </header>
            <Skills />
            <Gallery />
            <Footer />
        </div>
    );
};

render(<Header/>,document.getElementById('root'));

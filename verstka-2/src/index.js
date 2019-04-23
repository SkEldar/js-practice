import React from 'react';
import {render} from 'react-dom';
import "./css/style.css";
import Skills from './Skills';
import Gallery from './Gallery';
import Footer from './Footer';
import Header from './Header';

function Header() {
    return(
    <div>
            <Header />
            <Skills />
            <Gallery />
            <Footer />
        </div>
    );
};

render(<Header/>,document.getElementById('root'));

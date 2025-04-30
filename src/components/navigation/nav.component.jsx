import { useState } from "react";
import { Link } from 'react-router-dom';

import logo from '../../assets/images/Slogo2.png';

import './navigation.styles.scss';
import ThemeToggle from '../ThemeToggle';

const Navigation = () => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = (newTheme) => {
        setTheme(newTheme);
    };
    return (
        <div className="bg-white header-mobile">
            <nav className="container topnav">
                <ul>
                    <li>
                        <Link to="/" className="no-pad">
                            <img src={logo} alt="Shoaib Ahmed" />
                        </Link>
                    </li>
                </ul>
                <ul className="flex-all-center">
                    <li><Link className="active" to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <ThemeToggle toggleTheme={toggleTheme} isDarkMode={theme === 'dark'} />
                </ul>
            </nav>
        </div>
    )
}

export default Navigation;
import { useHref } from 'react-router-dom';
import './Nav.css';

export default function Nav(props) {
    let homeRoute = useHref("/");

    const handleOnClick = function() {
        window.location.href = homeRoute;
    };

    return ( 
        <div className="navContainer">
            <nav id="topNav">
                <button type="button" onClick={handleOnClick}>Home</button>
                <h1>Learning React with Projects - {props.app}</h1>
            </nav>
            {props.component}
        </div>
    );
}
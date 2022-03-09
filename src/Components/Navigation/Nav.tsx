import './Nav.css';

export default function Nav(props) {
    const handleOnClick = function() {
        window.history.back();
    };

    return ( 
        <div className="navContainer">
            <nav id="topNav">
                <button type="button" onClick={handleOnClick}>back</button>
                <h1>Learning React with Projects - {props.app}</h1>
            </nav>
            {props.component}
        </div>
    );
}
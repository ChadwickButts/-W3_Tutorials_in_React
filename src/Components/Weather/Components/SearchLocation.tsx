// import { SearchBarPropTypes } from '../Helpers/Types';


function SearchLocation(props) {
    let userInput: string = '';

    const handleEnterPress = (event) => {
        if (event.key === "Enter" || (event.keyCode === 13 && userInput !== "")) {
            handleSearchClick();
        }
    }

    const handleSearchChange = (event) => {
        userInput = event.target.value;       
    }
 
     const handleSearchClick = () => {
        props.onSearchClick(userInput);
     }

     return(
        <div id="searchFieldContainer">
            <input id="searchField" type="text" placeholder="Search City or Zip Code" onChange={handleSearchChange} onKeyUp={handleEnterPress}></input>
            <button id="searchBtn" type="button" onClick={handleSearchClick} >
                <span className="material-icons md-18">search</span>
            </button>
        </div>
    );
}

export default SearchLocation;
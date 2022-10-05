import React, {useState} from "react";


const Searchbar = (props) => {
    const {onSearch} = props;
    const [search, setSearch] = useState("ditto")
    const onChangeHandler = (e) => {
            setSearch(e.target.value)
    }
    const onButtonHandler = () => {
        onSearch(search)
        console.log("Pokemon: ", search)
        
    }
    return (
        <div className="searchbar-container">
            <div className="searchbar">
                <input placeholder="Buscar Pokemon" onChange={onChangeHandler} />
            </div>
            <div className="searchbar-btn">
                <button onClick={onButtonHandler}>Buscar</button>
            </div>
        </div>
    )
}

export default Searchbar
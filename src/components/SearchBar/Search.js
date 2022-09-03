import React from "react";

export default function Search(props) {
    const {setSearchTerm} = props

    const changeHandler = event => {
        setSearchTerm(event.target.value);
    };

    return (
        <input
            type="text"
            placeholder="Search"
            onChange={changeHandler}
        />
    )
}

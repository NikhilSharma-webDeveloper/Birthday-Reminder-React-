import React, { useState } from "react";
import data from "../birthdayList";
import { Title } from "./title";
import { Items } from "./items";


export const Container = () => {

    const [list, setlist] = useState(data)
    return (<div id="container">
        <div id="innerContainer">
            <Title size={list.length}></Title>
            <Items list={list}></Items>
            <button id="button" onClick={() => setlist([])}>Clear All</button>
        </div>
    </div >);
}
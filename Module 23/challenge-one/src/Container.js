import Card from "./Card";
import './Container.css';
import { useState } from "react";

function Container(){

    const [data, setData] = useState([
        {bgColor:"pink", heading:"Individual", content:"Esse ea esse tempor eu do pariatur aliqua amet consectetur tempor occaecat ex.", key:1},
        {bgColor:"aquamarine", heading:"Couple", content:"Esse ea esse tempor eu do pariatur aliqua amet consectetur tempor occaecat ex.", key:2},
        {bgColor:"cyan", heading:"Teen", content:"Esse ea esse tempor eu do pariatur aliqua amet consectetur tempor occaecat ex.", key:3},
        {bgColor:"yellow", heading:"Old", content:"Esse ea esse tempor eu do pariatur aliqua amet consectetur tempor occaecat ex.", key:4}
    ]);

    const content = data.map((each=>(
        <Card key={each.key} bgColor={each.bgColor} heading={each.heading} content={each.content}/>
    )))

    return(
        <section id="cardContainer">
            {content}
        </section>
    )
}

export default Container;
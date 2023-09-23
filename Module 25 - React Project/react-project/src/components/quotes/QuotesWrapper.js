import { useEffect, useState } from "react";
import Quote from "./Quote";

import './../../styles/quotes.css';

function QuotesWrapper(){

    const [allQuotes, setAllQuotes] = useState([]);
    
    useEffect(
        ()=>{
            fetch("https://type.fit/api/quotes")
                .then((response)=> {
                return response.json();
                })
                .then(data=> {
                setAllQuotes(data);
            }).then(()=>{
                console.log(allQuotes)
            })
                
            }
    , []);


    const content = allQuotes.map((quote)=>
        <Quote quoteContent={quote.text} authorName={quote.author}/>
    );

    return (
        console.log(allQuotes),
        <section id="allQuotes">
            {content}
        </section>
    );
}

export default QuotesWrapper;
function Quote(props){
    return(
        <div className="quote">
            <p>{props.quoteContent}</p>
            <p><em>- {props.authorName}</em></p>
        </div>
    );
}

export default Quote;
function Service(props){
    return(
        <div className='service'>
            <img src={props.iconName}/>
            <h1>{props.serviceTitle}</h1>
            <hr/>
            <p>{props.serviceDescription}</p>
            <button>{props.buttonText}</button>
        </div>
    );
}

export default Service;
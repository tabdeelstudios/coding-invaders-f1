import { useRef } from "react";

function UncontrolledForm(){
    const usernameRef = useRef(null);
    const emailRef = useRef(null);
    const phoneRef = useRef(null);

    function handleSubmit(e){
        e.preventDefault();

        //validation

        console.log(`Email : ${emailRef.current.value}, Phone : ${phoneRef.current.value}, Username : ${usernameRef.current.value}`)
    }

    return(
        <form onSubmit={handleSubmit}>
            <input name="email" type="email" ref={emailRef}/>
            <input name="username" type="text" ref={usernameRef}/>
            <input name="phone" type="text" ref={phoneRef}/>
            <input type='submit'/>
        </form>
    );
}

export default UncontrolledForm;
import {useState} from 'react';

function MyForm(){
    const [formData, setFormData] = useState({email:"", username:"", phone:""});
    const [inputError, setInputError] = useState(null);

    const handleChange = (e)=>{
        const {name, value} = e.target;
        
        setFormData((prevFormData)=>({...prevFormData, [name]:value}));

        if(name==="username"){
            if(formData.username.length<6){
                setInputError("Username is less than 6 characters");
            } else {
                setInputError(null);
            }
        }
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(!inputError){
            alert(`Form submitted! ${formData.email}, ${formData.username}, ${formData.phone}`);
        }
        
    }

    return (
    <form onSubmit={handleSubmit}>
        <input name="email" type="email" value={formData.email} onChange={handleChange} />
        
        <input name="username" type="text" value={formData.username} onChange={handleChange} />
        {inputError && <div style={{color:'red'}}>{inputError}</div>}

        <input name="phone" type="text" value={formData.phone} onChange={handleChange} />
        <input type='submit'/>
    </form>
    );
}

export default MyForm;
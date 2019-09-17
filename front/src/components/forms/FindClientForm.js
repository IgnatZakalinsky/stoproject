import React, {useState,useEffect} from 'react';


const FindClientForm = (props) => {

    let [firstName, changeFirstName] = useState('')
    let [lastName, changeLastName] = useState('')


    let findClient = (e) =>{
        e.preventDefault();
        props.getClients(firstName, lastName)
    }


    return (
        <>
            <form>
                <label for="firstName">firstName</label>
                <input type='text' id='firstName' value={firstName} onChange={(e)=>changeFirstName(e.currentTarget.value)}/>
                <label htmlFor="secondName">secondName</label>
                <input type='text' id='secondName'  value={lastName} onChange={(e)=>changeLastName(e.currentTarget.value)}/>
                <button onClick={findClient}>Find</button>
            </form>
        </>
    )
}


export default FindClientForm
import React from 'react';


const FindClientForm = (props) => {
    return (
        <>
            <form>
                <label for="firstName">firstName</label>
                <input type='text' id='firstName'/>
                <label htmlFor="secondName">secondName</label>
                <input type='text' id='secondName'/>
                <button onClick={()=>props.findClient()}>Find</button>
            </form>
        </>
    )
}


export default FindClientForm
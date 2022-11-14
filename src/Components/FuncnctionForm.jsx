import React, {useState} from 'react';
import '../style.css'
const FuncnctionForm = (props) => {
    const [user, setUser]= useState({
        person: [
        {userName: "Emma", email: "emma@email.com", password: '6scrom6'}, 
        {userName: "Philip", email: "Philip@email.com", password: '6scrom6'}, 
        {userName: "Jones", email: "Jones@email.com", password: '6scrom6'},
    ], 
        userName: "",
        email: ""
    })

    let handleChange = (e) =>{
        e.preventDefault()
        setUser(
            {
                ...user,
                [e.target.name]: e.target.value

            }
        )
        console.log(user.userName);
    }                                
    return (
        <div className='container'>
           <form onSubmit={(e) => {setUser({user: [...user, newUser],
            userName: "",
            email:'', password:''})}}>
                <h1><label >Name</label></h1>
                <br />
                <input 
                    type="text"
                    value={user.userName} 
                    name = "userName"
                    onChange= {handleChange}
                />
                <br />
                <h1><label >Email</label></h1>
                <br />
                <input 
                    type="email"
                    value={user.email} 
                    name = "email"
                    onChange= {handleChange}
                />
                <br />
                <h1><label >Password</label></h1>
                <br />
                <input 
                    type="password"
                    value={user.password} 
                    name = "password"
                    onChange= {handleChange}
                />
                <br />
                <input type="submit" />
           </form>
            <h1>{user.person.map((item)=>{
                            return (
                                <>
                                    <h1>{item.userName}</h1>
                                    <h1>{item.email}</h1>
                                </>
                )})}
            </h1>
        </div>
    );
}

export default FuncnctionForm;

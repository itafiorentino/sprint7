import { useState } from "react"

function Signup() {
    const [formData, setFormData] = useState({
        email: '', // required
        password: '', // required
        username: '' // optional
    })

    const [user, setUser] = useState('')


    function handleSubmit(e) {
        e.preventDefault()
        fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(data => {setUser(data.user.username); console.log(data)})
    }


    function handleChange(e) {
        setFormData({...formData, [e.target.name] : e.target.value})
    }

    return (
        <div className="flex flex-col items-center min-w-fit min-h-screen bg-black font-mono text-white">
            <div className="flex flex-col items-center m-20">
            
           {user===formData.username && user!='' ? <h1 className="m-10 hover:text-yellow-300">{user}, you are logged in!</h1> : <h1></h1>}
            
            <h1 className="m-10 hover:text-yellow-300">Signup Form</h1>
            <form className='login-form' onSubmit={e => handleSubmit(e)}>
                <input type='text' placeholder='Username' className="m-5 p-3 text-stone-700 placeholder-gray-400" value={formData.username} name='username' onChange={e => handleChange(e)} ></input>
                <input type='text' placeholder='Email' className="m-5 p-3 text-stone-700 placeholder-gray-400" value={formData.email} name='email' onChange={e => handleChange(e)} ></input>
                <input type='password' placeholder='Password' className="m-5 p-3 text-stone-700 placeholder-gray-400" value={formData.password} name='password' onChange={e => handleChange(e)} ></input>
                <div className="flex w-full justify-center my-10">
                <button className='login-btn p-3 border border-stone-500  bg-black hover:bg-yellow-300 active:bg-black' type='submit'>Sign Up</button>
                </div>
            </form>
            </div>
        </div>
    )
}

export default Signup
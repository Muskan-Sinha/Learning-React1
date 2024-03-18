import { useState } from "react"
import {Link} from "react-router-dom"
const FormPage = (props) => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()
        props.fun(email, password)
        setEmail("")
        setPassword("")
    }
    return (
        <div className="flex h-screen justify-center items-center">
            <form className="border border-4 rounded-md border-slate-700">
                <div className="m-2 p-2 flex gap-2 ">
                    <p className="bg-slate-700 text-white p-2 px-4 rounded-md font-semibold">Email:</p>
                    <input type="text" className="border border-slate-700 border-2 rounded-md w-full" placeholder=" Enter your Email here" onChange={(e)=>{
                        setEmail(e.target.value) 
                    }} />
                </div>
                <div className="m-2 p-2 flex gap-2 ">
                    <p className="bg-slate-700 text-white p-2 px-4 rounded-md font-semibold">Password:</p>
                    <input type="text" className="border border-slate-700 border-2 rounded-md" placeholder=" Enter Password" onChange={(e)=>{
                        setPassword(e.target.value)
                    }} />
                </div>
                <div className="flex justify-center m-2">
                <button type="submit" onClick={handleSubmit} className="bg-slate-700 text-white  p-2 px-8 rounded-md text-xl font-bold">{props.btn}</button>
                </div>
                    <Link to={props.btn==="SignUp"?"/login":"/signup"}>
               <p className="flex justify-center m-2 cursor-pointer text-blue-600">{props.message}</p>
                    </Link>
            </form>
        </div>
    )
}
export default FormPage
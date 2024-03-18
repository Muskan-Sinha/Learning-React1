import {Link} from "react-router-dom"
const Home = () => {
    
    return (
        <div className="p-10">
           <Link to={"/login"}><button type="submit" className="bg-slate-700 text-white m-5 p-2 px-8 rounded-md text-xl font-bold">Login</button></Link>
           <Link to={"/signup"}><button type="submit" className="bg-slate-700 text-white  p-2 px-8 rounded-md text-xl font-bold">SignUp</button></Link>
        </div>
    )
}

export default Home
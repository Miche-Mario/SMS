import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom";
import { LoginUser, reset} from '../features/auth/authSlice'
import Logo from '../assets/evilogo.png'

const Login = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword ] = useState(""); 

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if(user || isSuccess) {
      navigate("/dashboard");
    }
    dispatch(reset());
  }, [user, isSuccess, dispatch, navigate]); 

  const Auth = (e) => {
    e.preventDefault();
    dispatch(LoginUser({username, password}));
  }
  return (
    <div className="h-screen flex">
          <div className="hidden lg:flex w-full lg:w-1/2 login_img_section
          justify-around items-center">
            <div 
                  className=" 
                  bg-black 
                  opacity-20 
                  inset-0 
                  z-0"
                  >

                  </div>
            <div className="w-full mx-auto px-20 flex-col items-center space-y-6">
            <div className="flex justify-center lg:justify-start mt-6 -ml-6">
                <img src={Logo} className=' w-[400px]'  alt='logo'/>
              </div>
              <h1 className="text-white font-bold text-4xl font-sans">EVLI SMS </h1>
              <p className="text-white mt-1">Registration and Accounts</p>
             
            </div>
          </div>

          <div className="flex w-full lg:w-1/2 justify-center items-center bg-white space-y-8">
            <div className="w-full px-8 md:px-32 lg:px-24">
            <form onSubmit={Auth} className="bg-white rounded-md shadow-2xl p-5">
              <h1 className="text-gray-800 font-bold text-2xl mb-1">Hello Again!</h1>
              <p className="text-sm font-normal text-gray-600 mb-8">Welcome Back</p>
              <div className="flex items-center border-2 mb-8 py-2 px-3 rounded-2xl">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                </svg>
                <input id="username" className=" pl-2 w-full outline-none border-none" 
                  type="username"
                  name="username"
                  placeholder="Username"
                  value={username}
                  onChange= { (e) => setUsername(e.target.value)} 
                
                />
              </div>
              <div className="flex items-center border-2 mb-6 py-2 px-3 rounded-2xl ">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                <input className="pl-2 w-full outline-none border-none" 
                  type="password" 
                  name="password" 
                  id="password" 
                  placeholder="***********" 
                  value={password}
                  onChange= {(e) => setPassword(e.target.value)}
                />
                
              </div>
              {
                  isError &&
                  <p className='text-red text-sm text-center'>{message}</p>
                }
              <button 
                type="submit" 
                className="block w-full bg-blue-600 mt-5 py-2 rounded-2xl hover:bg-indigo-700 hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2"
              
                >
                 { isLoading ? "Loading..." :  "Login"}
              </button>
              <div className="flex justify-between mt-4">
                <span className="text-sm ml-2 hover:text-blue-500 cursor-pointer hover:-translate-y-1 duration-500 transition-all">Forgot Password ?</span>

                <a href="#" className="text-sm ml-2 hover:text-blue-500 cursor-pointer hover:-translate-y-1 duration-500 transition-all">Don't have an account yet?</a>
              </div>
              
            </form>
            </div>
            
          </div>
      </div>
  )
}

export default Login
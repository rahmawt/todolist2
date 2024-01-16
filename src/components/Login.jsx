import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
// import {useNavigate} from "react-router-dom";
import { LoginUser, reset} from '../features/authSlice';
import Layout from '../pages/Layout';
import { Link } from 'react-router-dom';


const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();
    // const navigate = useNavigate();
    // const {user, isError, isSuccess, isLoading, message } = useSelector((state)=> state.auth);

    const Auth = (e) =>{
        e.prevenDefault();
        dispatch(LoginUser({email, password}));
    };

    // useEffect(()=>{
    //     if(user || isSuccess){
    //         navigate("/dashboard");
    //     }
    //     dispatch(reset());
    // },[user, isSuccess, dispatch, navigate]);

//{ isError &&  <p className='has-text-centered'>{message}</p>}
//{ isLoading ? 'Loading...' : 'Login' }

  return (
    <section className="hero hash-background-grey-light is-fullheight is-fullwidth">
      <div className="hero-body">
        <div className="container">
            <div className="columns is-centered">
                <div className="column is-4-desktop">
                    <form onSubmit={Auth} className="box">
                        
                        <h1 className='tittle is-2'>Sign In</h1>
                        <div className="field mt-5">
                            <label className="label">
                                Email or Username
                            </label>
                            <div className="controls">
                                <input type="text" className="input" 
                                value={email} 
                                onChange={(e)=>setEmail(e.target.value)} 
                                placeholder='Username'/>
                            </div>
                        </div>

                        <div className="field mt-5">
                            <label className="label">
                                Password
                            </label>
                            <div className="controls">
                                <input type="password" className="input" 
                                value={password} 
                                onChange={(e)=>setPassword(e.target.value)} 
                                placeholder='******'/>
                            </div>
                        </div>
                        <div className="field mt-5">
                            <Link to="/dashboard" type='submit' className="button is-success is-fullwidth">
                               Login
                            </Link>
                        </div>
                        <div className="field mt-5">
                            <p>Have an account</p>
                            <Link to="/register" type='submit' className="button is-success is-fullwidth">
                               Register
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Login;
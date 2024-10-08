import React, { useRef, useState } from 'react'
import Header from './Header'
import { Validate } from '../utils/validate';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase';
import { signInWithEmailAndPassword } from "firebase/auth";
import { updateProfile } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { USER_AVTAR } from '../utils/constants';


const Login = () => {
    const [isSignIn, setIssignIn] = useState(true);
    const [errormessage, setErrormessage] = useState();
    const dispatch = useDispatch();

    const toogleSignUpForm = () => {
        setIssignIn(!isSignIn);

    }
    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);
    // const fullname = useRef(null);

    const handleClick = () => {
        console.log(email.current.value, password.current.value);
        const message = Validate(email.current.value, password.current.value);
        setErrormessage(message);
        // if (message) return;

        if (!isSignIn) {
            //logic sign up
            createUserWithEmailAndPassword(
                auth,
                email.current.value,
                password.current.value
            )
                .then((userCredential) => {
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: name.current.value, photoURL: USER_AVTAR
                    }).then(() => {
                        const { uid: uid, email: email, displayName: displayName, photoURL: photoURL } = auth.currentUser;
                        dispatch(
                            addUser({
                                uid: uid, email: email, displayName: displayName, photoURL: photoURL,
                            })
                        );

                    }).catch((error) => {
                        setErrormessage(error.message);
                    });
                    console.log(user);


                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrormessage(errorCode + "-" + errorMessage);
                });
        }
        else {
            //logic sign in

            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                });

        }
    }
    return (
        <div>
            <Header />
            <div className='absolute'>
                <img className='w-full' src='https://assets.nflxext.com/ffe/siteui/vlv3/4d2c5849-b306-4884-9036-6211f7ee0178/web/IN-en-20240930-TRIFECTA-perspective_1e1ca6cd-9e2d-4e9d-9e4b-ba0c2d3a0e31_large.jpg' alt='background' />
            </div>
            <div className='px-96 p py-72'>
                <form onSubmit={(e) => { e.preventDefault() }} className='p-12 bg-black relative bg-opacity-60 w-4/12 h-5/6 mx-96 -m-20 justify-self-auto'>
                    <h1 className='text-white m-4 text-bold text-2xl'>{isSignIn ? "Sign In" : "Sign Up"}</h1>
                    {!isSignIn && <input type='text' placeholder='Full Name' className='bg-gray-500 text-white m-4 rounded-sm w-56 h-8 p-4'></input>}

                    <input ref={email} type='text' placeholder='Email' className='bg-gray-500 text-white m-4 rounded-sm w-56 h-8 p-4'></input>
                    <input ref={password} type='password' placeholder='Password' className='bg-gray-500 text-white m-4 rounded-sm w-56 h-8 p-4 '></input>

                    <p className='text-lg text-red-600 pl-0 m-6'>{errormessage}</p>
                    {/* {!isSignIn && <p className='text-lg text-red-600 pl-0 m-6'>{errormessage}</p>} */}


                    <button className='bg-red-600 text-white m-4 rounded-sm w-56 h-8 p-0 text-lg' onClick={handleClick}>{isSignIn ? "Sign In" : "Sign Up"}</button>
                    <span className='m-6'><p className='text-gray-500 m-6 text-xs '>{isSignIn ? "New to Netflix" : "Already registered?"} <span className='text-white text-sm hover:cursor-pointer' onClick={toogleSignUpForm}>{isSignIn ? "Sign Up" : "Sign In"}</span></p></span>

                    <h4 className='text-gray-400 text-sm m-1'>This page is protected by Google reCAPTCHA to ensure you're not a bot.</h4>
                </form>


            </div>

        </div>
    )
}

export default Login
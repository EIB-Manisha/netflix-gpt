import React from 'react'
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router';
import {  onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase'
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'
import { useEffect } from 'react';
import { NETFLIX_LOGO,USER_AVTAR } from '../utils/constants';



const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();


    const handleSignOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            navigate("/error");
            // An error happened.
        });
    }
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth, (user) => {
          if (user) {
           
            const {uid, email, displayname,photoURL} = user;
            dispatch(addUser({uid:1,email:email,displayname:displayname,photoURL:photoURL}));
            navigate("/browse");
    
          } else {
            dispatch(removeUser());
            navigate("/");
          }
        });

        //Unsubscribe when component unmounts. 
        return ()=>unsubscribe();
      },[]);
    return (
        <div className='relative'>
            <div className='absolute pl-6 pt-10 bg-gradient-to-b from-black z-10 w-screen flex'>

                <img className='w-45 h-20 ' src={NETFLIX_LOGO} alt='logo' />
                <img onClick={handleSignOut} className='w-12 h-12 m-1 -mx-0 absolute right-12' src={USER_AVTAR} alt='signOutLogo' />

            </div>

        </div>
    )
}

export default Header
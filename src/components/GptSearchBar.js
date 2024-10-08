import React from 'react'
import lang from '../utils/languageConstants';
import { useSelector } from 'react-redux';

const GptSearchBar = () => {
    const langKey = useSelector((store)=>store.config.lang);
  return (
    <div className='pt-[7%] flex justify-center'>
        <form className='w-1/2 bg-black grid grid-cols-12'>
        
        
            <input className='p-4 m-4 col-span-9' type='text' placeholder={lang[langKey].getSearchPlaeholder}/>
            <button className='col-span-3 m-4 py-2p px-4 bg-red-500 text-white rounded-md'>{lang[langKey].search}</button>
        </form>


    </div>
  );
};

export default GptSearchBar;
import React from 'react'

const VideoTitle = ({ title, overview }) => {
    return (
        <div className='w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black'>
            <h1 className='text-3xl font-bold'>{title}</h1>
            <p className='text-lg w-1/4 py-6'>{overview}</p>
            <div className='flex'>
                <button className='bg-gray-600 text-white text-lg p-2 px-12  border-black border-2 fa-solid fa-play flex bg-opacity-50 rounded-md hover:bg-opacity-80' ><svg class="h-8 w-8 text-white" viewBox="0 0 24 24" fill="white" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">  <polygon points="5 3 19 12 5 21 5 3" /></svg>Play</button>
                <button className='bg-white text-black text-lg p-2 px-9  border-black border-2 flex rounded-md hover:bg-opacity-80'><svg class="h-8 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>More Info</button>
            </div>
        </div>
    )
}

export default VideoTitle
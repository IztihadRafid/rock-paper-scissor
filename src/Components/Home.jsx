import React from 'react';
import Navbar from './Navbar';
import Player1 from './Player1';
import Player2 from './Player2';

const Home = () => {
    return (
        <div className='bg-[#7B3F00]'>
            <Navbar></Navbar>
            <div className='w-full grid grid-cols-2 mx-auto '>
                {/* player 1 */}
                <div className='w-1/2 mx-auto'>
                    <Player1></Player1>
                </div>

                <div className='w-1/2 mx-auto'>
                    {/* computer */}
                    <Player2></Player2>
                </div>
            </div>
        </div>
    );
};

export default Home;
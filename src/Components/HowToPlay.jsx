import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const HowToPlay = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='max-w-7xl mx-auto bg-[#7B3F00] mt-10'>
            <div className="card glass ">

                <div className="card-body my-10">
                    <h2 className="card-title text-5xl text-center mb-5">How To play</h2>
                    <h3 className='text-3xl text-center mb-5'>1. Decide on your moves</h3>
                    <p className='text-2xl text-center mb-5'>
                        Each player picks one of the following:<br></br>

                        Rock (👊)
                        Paper (✋)
                        Scissors (✌️)
                    </p>
                    <h3 className='text-3xl text-center mb-5'>  2. Compare the moves</h3>
                    <p className='text-2xl text-center mb-5'>Rock vs. Scissors → Rock wins (Rock smashes Scissors).
                        Paper vs. Rock → Paper wins (Paper covers Rock).
                        Scissors vs. Paper → Scissors wins (Scissors cut Paper).</p>
                    <h3 className='text-3xl text-center mb-5'> 3. Handle ties</h3>
                    <p className='text-2xl text-center mb-5'>If both players choose the same move, it’s a draw (no winner).</p>

                    <h3 className='text-3xl text-center mb-5'>  4. Play rounds</h3>
                    <p className='text-2xl text-center mb-5'> Play 1 or more rounds and track the score. Whoever wins the most rounds is the overall winner! 🎉</p>
                    <div className="card-actions justify-center">
                        <Link to="/" className="btn btn-block bg-[#7B3F00] text-white">Go Back</Link>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default HowToPlay;
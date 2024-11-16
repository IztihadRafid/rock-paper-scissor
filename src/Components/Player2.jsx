import React from 'react';
import scissor from "../../src/assets/images/scissors.png"
import paper from "../../src/assets/images/paper.png"
import rock from "../../src/assets/images/rock.png"
const Player2 = () => {
    return (
        <div className=''>
            <div className='mt-8 mb-10'><img className='w-[400px]' src={scissor} alt="" /></div>
            <div className='mt-8 mb-10'><img className='w-[400px]' src={paper} alt="" /></div>
            <div className='mt-8 mb-10'><img className='w-[400px]' src={rock} alt="" /></div>
        </div>
    );
};

export default Player2;
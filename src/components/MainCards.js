import React from 'react';
import './MainCards.css';
const MainCards = () => {
    return (
        <>
            <div className='col-sm-1'>
            </div>
            <div className='col-sm-5'>
                <div className='explore'>
                    <span className='explore-txt'>Explore</span>
                    <div className='explore-1'>
                      <span>Notify/Friend Only</span>
                    </div>
                </div>
            </div>
            <div className='col-sm-5'>
                <div className='games'>
                    <span className='games-txt'>Games</span>
                    <div className='games-1'>

                    </div>
                    <div className='games-2'>
                        <sapn>Leaderboard</sapn>
                    </div>
                </div>

            </div>
            <div className='col-sm-1'>
            </div>
        </>
    )
}

export default MainCards
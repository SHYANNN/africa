import React from 'react'
import './accounts.css'
import home3 from '../../assets/home-3.png'
import tick from '../../assets/tick.svg'
const Accounts = () => {
  return (
    <div className="accounts container">
        <div className="dedication-container max">
            <div className="accounts-l">
                <div className="home-3">
                    <img src={home3} alt="" />
                </div> 
            </div>
            <div className="accounts-r">
                <div className="small-a">
                    DEDICATED ACCOUNTS
                </div>
                <div className="big-a">
                Dedicated accounts for your company's subsidiaries.
                </div>
                <div className="benefits">
                    <div className="benefit">
                        <span><img src={tick} alt="" /></span>
                        <span>No paperwork</span>
                    </div>
                    <div className="benefit">
                        <span><img src={tick} alt="" /></span>
                        <span>Instant settlement</span>
                    </div>
                    <div className="benefit">
                        <span><img src={tick} alt="" /></span>
                        <span>No delays</span>
                    </div>
                </div>
                <div className="buttons-a">
                    <a href="" className="btn blue ">Get Started</a>
                    <a href="" className="btn white">Learn More</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Accounts
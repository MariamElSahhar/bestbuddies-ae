import React from 'react'
import '../styles/home.css'
import { Outlet, Link } from 'react-router-dom'

const ProgramsSection = () => {
  return (
    <section className="programs">
        <div className="section-header">
            <h1 className="take-action">Our Pillars</h1>
        </div>
        <div className='section-content'>
            <div className="program">
                <div className="program-friendships section-item">
                    <h2>One-to-One Friendships</h2>
                    <img src="/assets/images/BB-Friendship-Pillar.webp" alt="two friends"></img>
                    <p>Builds friendships between people with and without IDD, improving quality of life and social inclusion.</p>
                    <button><Link to="/friendship">Learn more</Link></button>
                </div>
            </div>
            <div className="program">
                <div className="program-employment section-item">
                    <h2>Integrated Employment</h2>
                    <img src="/assets/images/BB-Jobs-Pillar1.webp" alt="two friends"></img>
                    <p>Secures jobs for people with IDD, allowing them to earn an income, pay taxes, and support themselves.</p>
                    <button><Link to="./employment">Learn more</Link></button>
                </div>
            </div>
            <div className="program">
                <div className="program-leadership section-item">
                    <h2>Leadership Building</h2>
                    <img src="/assets/images/BB-Leadership-Pillar.webp" alt="two friends"></img>
                    <p>Educates and empowers people with and without IDD, to be leaders, public speakers and advocates.</p>
                    <button><Link to="/leadership">Learn more</Link></button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ProgramsSection

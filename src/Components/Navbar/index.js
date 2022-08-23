import React from 'react'
import './style.css'

const Navbar = () => {
  return (
    <div className='container'>
      <section className="vertical">
        <h1 className='vh'>Prerna Patil</h1>
        <ul>
          <li className='list'>DASHBOARD</li>
          <li className='list'>POSTS</li>
          <li className='list'>COMMENTS</li>
          <li className='list'>STATS</li>
          <li>SETTING</li>
        </ul>
        <li className='last'>LOG OUT</li>
      </section>
      <section className="horizontal">
        <div className="heading">
          <h1 className="hh">DASHBOARD</h1>
        </div>
        <div className="search">
          <i className="fa-solid fa-magnifying-glass"></i>
          <button className='post'><i className="fa-solid fa-plus"></i> NEW POST</button>
          {/* <img src="" alt="Profile" /> */}
        </div>
      </section>
    </div>
  )
}

export default Navbar
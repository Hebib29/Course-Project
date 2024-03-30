import React from 'react'
import '../Styles/cards.css'
const Cards = () => {
  return (
    <div className="card-box">
  <h3>My Wallets</h3>
  <div className="card-container">
    <header>
      <span className="logo">
        <img src="images/logo.png" alt="" />
        <h5>Magio. <span>Universal Bank</span></h5>
      </span>
      <img src="images/chip.png" alt="" className="chip" />
    </header>
    <div className="card-details">
      <div className="name-number">
        <h6>Card Number</h6>
        <h5 className="number">5495 7381 3759 2321</h5>
      </div>
    </div>
  </div>

  <div className="card-container-2">
    <header>
      <span className="logo">
        <h5>Magio <span>Commercial Bank</span></h5>
      </span>
      <img src="images/logo.png" alt="" />
    </header>
    <div className="card-details">
      <div className="name-number">
        <img src="images/chip.png" alt="" className="chip" />
        <h5 className="number">8595248****</h5>
        <span>09/25</span>
      </div>
    </div>
  </div>

  <div className="card-container-3">
    <header>
      <div className="header-top">
        <p>Your Balance</p>
        <h3>$5240.00</h3>
      </div>
      <div className="header-right">
        <span className="text-1"> <i className="bi bi-arrow-up"></i>23.65%</span>
        <span className="text-2"> <i className="bi bi-arrow-down"></i>10.40%</span>
      </div>
    </header>
    <div className="line"></div>
    <div className="content-main">
      <div className="bottom-content">
        <span>Currency</span>
        <h4>USD/US Dollar</h4>
      </div>
      <div className="content-right">
        <span>Status</span>
        <h5>Active</h5>
      </div>
    </div>
  </div>
</div>

  )
}

export default Cards
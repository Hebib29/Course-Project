import React from 'react'
import '../Styles/Loginsidebar.css';
const Loginsidebar = () => {
  return (
    <div className="Container-content">
  <div className="Text-content">
    <div className="text-box">
      <h2>Account İnformation</h2>
      <span>Update your account information</span>
    </div>
    
    <div className="Form-box">
      <form>
        <div className="Form-1">
          <label>
            First Name
            <br />
            <input type="text" placeholder="Mahfuzul Islam" />
          </label>

          <label>
            Last
            <br />
            <input type="text" placeholder="Nabil" />
          </label>
        </div>

        <div className="Form-2">
          <label>
            Date of birth
            <br />
            <input type="number" placeholder="27/09/1998" />
          </label>

          <label>
            Mobile Number
            <br />
            <input type="number" placeholder="+123 456 7890" />
          </label>
        </div>

        <div className="Form-3">
          <label>
            Email
            <br />
            <input type="email" placeholder="helloihut@gmail.com" className="input-box" />
          </label>
        </div>

        <div className="Form-4">
          <label>
            New Password
            <br />
            <input type="password" placeholder="******" />
          </label>

          <label>
            Confirm Password
            <br />
            <input type="password" placeholder="******" />
          </label>
        </div>
      </form>
    </div>
    <button className='button-up'>Update</button>
  </div>
</div>

  )
}

export default Loginsidebar
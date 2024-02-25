

// import React from 'react'
// import UserNavbar from '../../components/Navbar/CheckoutNavbar'
// import {Link} from 'react-router-dom'

// const Dashboard = () => {
//   return (
//     <div>
//       <UserNavbar/>

//       <div className="div">
//         <ul>
//           <Link to='/user-profile'><li>Profile</li></Link>
//           <Link to='/user-orders'> <li>Orders</li></Link>
//         </ul>
//       </div>
//     </div>
//   )
// }

// export default Dashboard

import React, { useState } from 'react';
 import UserNavbar from '../../../components/Navbar/CheckoutNavbar.js'
import Profile from '../profile/Profile.js'; // Import the Profile component
import Orders from '../Order/Order.js'; // Import the Orders component
import style from './style.css'
import { useUserAuth } from '../../../Context/UserAuthContext';


const UserDashboard = () => {
  // State to track which tab is active
  const [activeTab, setActiveTab] = useState('profile');
  const{auth}=useUserAuth()

  // Function to switch between tabs
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
       <UserNavbar/>
       <div className="dashboard-main-container">
       <div className='dashboard-btn-container'>
        {/* Tab buttons */}
        <button className={`${activeTab=='profile' ? 'active-btn':'dashboard-btn '}`} onClick={() => handleTabChange('profile')}>Profile</button>
        <button className={`${activeTab=='orders' ? 'active-btn':'dashboard-btn '}`} onClick={() => handleTabChange('orders')}>Orders</button>
      </div>
      <div className='activeTab-container'>
        {/* Conditional rendering based on active tab */}
        {activeTab === 'profile' && <Profile />}
        {activeTab === 'orders' && <Orders />}
      </div>
       </div>
      {/* <h1 style={{margin:'0px auto'}}>Welcome {auth.user.username}</h1> */}
     
    </div>
  );
};

export default UserDashboard;

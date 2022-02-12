// import React, { useState } from 'react';
// import Tab from '../Tabs/Tab';

// const BookingsTabs = (props) => {

//     const [filter, setFilter] = useState(Object.keys(tabMap[0]));
//     const tabMap = {
//         Upcoming: (props.bookings) => !props.bookings.cancelled && props.bookings.completed,
//         Completed: (props.bookings) => props.bookings.completed,
//         Cancelled: (props.bookings) => props.bookings.cancelled,
//     };

//     const tabNames = Object.keys(tabMap);
//     const bookingsList = props.bookings
//         .filter(tabMap[filter])
//         .map('booking to booking element with props & key');

// const tabs = tabMap.map(label => (
//     <Tab label={label} key={label} isPressed={label === filter} setFilter={setFilter}/>
// ));
// return <>
//     <div className="tabs">
//         <Tab label={label} key={label}/>
//             <ul className="tabs-nav">

//                 {tabMap((label) => (
//                     <li className={activeTab === label ? "active tab" : 'tab'} onClick={handleTab} key={label}>
//                         {label}
//                     </li>
//                 ))}
//             </ul>
//             <div className="tab-content">
//                 {activeTab !=null? "display content" : null}
//             </div>
//         </div></>;
// };

// export default BookingsTab;

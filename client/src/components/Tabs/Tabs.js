import React, { useState } from "react";
import Tab from "./Tab";

// const labels = ['Upcoming', 'Completed', 'Cancelled'] // These will be the props to put in the tabs
// const labels = ['Upcoming', 'Completed', 'Cancelled']
// add a for loop to know which one is active - i to assign index to labels

const Tabs = (props) => {

    const [activeTab, setActiveTab] = useState(props.labels[0])

    const handleTab = (label) => {
        setActiveTab(label)
    }

    return (
        <div className="tabs">
            <ul className="tabs-nav">

                {props.labels.map((label) => (
                    <li className={activeTab === label ? "active tab" : 'tab'} onClick={handleTab} key={label}>
                        {label}
                    </li>
                ))}
            </ul>
            <div className="tab-content">
                {activeTab !=null? "display content" : null}
            </div>
        </div>
    )
}

export default Tabs;

// I want to make this a reusable component
// import React, { useState } from "react";
// import Tab from "./Tab";

// // const labels = ['Upcoming', 'Completed', 'Cancelled'] // These will be the props to put in the tabs
// // const labels = ['Upcoming', 'Completed', 'Cancelled']
// // add a for loop to know which one is active - i to assign index to labels

// const Tabs = (props) => {

//     const [activeTab, setActiveTab] = useState(props.labels[0])


//     return (
//         <div className="tabs">
//             <ul className="tabs-nav">
//                 // tell me how many times to return the tab component in the
//                 list
//                 {props.labels.map((label) => (
//                     <li className={activeTab === label ? "active tab" : 'tab'} isActive={activeTab === label? setActiveTab(label):null} key={label}>
//                         label
//                     </li>
//                 ))}
//             </ul>
//             <div classname="tab-content">
//                 {activeTab !=null? "display content" : null}
//             </div>
//         </div>
//     )
// }

// export default Tabs;
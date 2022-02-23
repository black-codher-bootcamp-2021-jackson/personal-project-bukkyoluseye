import React, { useState } from 'react';
import InputField from '../InputField';
import SendMessage from './SendMessage';
import Tab from '../Tabs/Tab';
import MessagesRow from './MessagesRow';
import NewMessage from '../../assets/SVGR/NewMessage';

const MessagesScreen = () => {
    // This is for the tab filtering
    const tabMap = {
        Active: (message) => message.status === 'active',
        Archived: (message) => message.status === 'archived',
    };

    const tabNames = Object.keys(tabMap);

    const [filter, setFilter] = useState(tabNames[0]);

    const tabs = tabNames.map((label) => (
        <Tab
            key={label}
            label={`${label} Chats`}
            isPressed={label === filter}
            setFilter={setFilter}
        />
    ));

    return (
        <div className="messages-screen">
            <div className="messages-list">
                <div className="messages-page-title">
                    <h1 >Messages</h1>
                    <NewMessage className="new-message" />
                </div>
                <div>
                    <InputField
                        variant="search"
                        placeholder="Search for messages"
                    />
                </div>
                <ul className="tabs-nav">{tabs}</ul>
                <MessagesRow />
            </div>
            <div className="chat">
                <SendMessage />
            </div>
        </div>
    );
};

export default MessagesScreen;

import React, { useState } from 'react';
import Calendar from 'react-calendar';

const CalendarView = () => {
    const [date, setDate] = useState(new Date());
    return (
        <>
            <div>
                <Calendar onChange={setDate} value={date} />
            </div>
        </>
    );
};

export default CalendarView;

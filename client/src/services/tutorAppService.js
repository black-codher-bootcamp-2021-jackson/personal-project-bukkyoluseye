// You can create all the fetches to your own APIs and externals APIs here
// This example fetch is specifically for our Profile API and is why the file is called profileService.js
import axios from 'axios';

const getAllTutorProfiles = async () => {
    const response = await axios.get(`/api/tutorprofile`);

    return response.data || [];
};

const getAllBookings = async () => {
    const response = await axios.get(`/api/bookings`, {
        headers: {
            'x-access-token': localStorage.getItem('token'),
        },
    });

    return response.data || [];
};

const getAllStudentProfiles = async () => {
    const response = await axios.get(`/api/studentprofile`);

    return response.data || [];
};

// All of the endpoints in this file can be exported below
export { getAllTutorProfiles };
export { getAllBookings };
export { getAllStudentProfiles };

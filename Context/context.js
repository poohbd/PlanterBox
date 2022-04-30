import React from 'react';

export default React.createContext({
    UserID: [],
    UserName: [],
    // Schedules: [],
    replaceNewUser : (userid) => {},
    replaceUserName : (username) => {},
    // replaceSchedule : () => {}
});
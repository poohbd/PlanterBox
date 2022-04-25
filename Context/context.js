import React from 'react';

export default React.createContext({
    UserID: [],
    UserName: [],
    replaceNewUser : (userid) => {},
    replaceUserName : (username) => {}
});
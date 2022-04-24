import React from 'react';
import Context from './context';
export default class GlobalState extends React.Component{
state = {
  UserID: [],
  UserName: [],
}

replaceNewUser = (userid) => {
    const UID = [userid];
    this.setState({UserID: UID});
};
replaceUserName = (username) => {
    const UN = [username];
    this.setState({UserName: UN});
};
render(){
    return (
     <Context.Provider 
      value={{
          UserID: this.state.UserID,
          UserName: this.state.UserName,
          replaceNewUser: this.replaceNewUser,
          replaceUserName: this.replaceUserName
      }}
     >
      {this.props.children}
     </Context.Provider>
    );
   }
}
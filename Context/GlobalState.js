import React from 'react';
import Context from './context';
export default class GlobalState extends React.Component{
state = {
  UserID: [],
}

replaceNewUser = (userid) => {
    const UID = [userid];
    this.setState({UserID: UID});
};

render(){
    return (
     <Context.Provider 
      value={{
          UserID: this.state.UserID,
          replaceNewUser: this.replaceNewUser
      }}
     >
      {this.props.children}
     </Context.Provider>
    );
   }
}
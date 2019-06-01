import React from 'react';
import './App.css';
// import {productReducer} from "./redux/reducers/product";
// import {userReducer} from "./redux/reducers/user";
import {connect} from "react-redux";
import {updateUser} from './redux/actions'


function App(props) {
  console.log(props)
  return (
    <div className="App">
      <p>{props.users.user}</p>
      <button onClick={()=>props.updateUser('Edward New')}>action displatch</button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  // props: state

  products: state.productReducer,
  users: state.userReducer
})

// 액션을 디스패치하는  callback function 을  props 로 매핑
const mapActionToProps = (dispatch) =>({
  updateUser: (name)=> dispatch(updateUser(name))
})

export default connect(mapStateToProps, mapActionToProps)(App);

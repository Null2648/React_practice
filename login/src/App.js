import React, { Component } from 'react';

import Login from './components/Login';
import Mypage from './components/Mypage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {      // 상태 관리
      isLogin: false,	// 로그인 여부       
      userData: null,   // 유저 데이터
    };
    this.loginHandler = this.loginHandler.bind(this);
    this.logoutHandler = this.logoutHandler.bind(this);
    this.setUserInfo = this.setUserInfo.bind(this);
  }

  loginHandler() {    // 로그인 성공 시 로그인 상태 true로 변경
    this.setState({
      isLogin: true,
    });
  }

  setUserInfo(object) {    // 로그인 성공 시 user data 수정
    this.setState({ userData: object });
  }

  logoutHandler() {	   // 로그아웃 성공 시 로그인 상태 false로 변경
    this.setState({
      isLogin: false,
    });
  }

  render() {
    const { isLogin } = this.state;
    return (
      <div className='App'>
        {isLogin ? (        // 로그인 여부에 따라 렌더링할 페이지가 달라짐
          <Mypage
            logoutHandler={this.logoutHandler}
            userData={this.state.userData}
          />
        ) : (
            <Login
              loginHandler={this.loginHandler}
              setUserInfo={this.setUserInfo}
            />
          )}
      </div>
    );
  }
}

export default App;
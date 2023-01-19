import React, { Component } from 'react';
import { GoogleLogin } from 'react-google-login';
import {
    KakaoOAuthToken,
    KakaoProfile,
    getProfile as getKakaoProfile,
    login,
    logout,
    unlink
  } from '@react-native-seoul/kakao-login';
import styled from 'styled-components';
import { createBrowserHistory } from "react-router-dom";
const history = createBrowserHistory();

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            provider: '',
        }
    }
    // Google Login
    responseGoogle = (res) => {
        this.setState({
            id: res.googleId,
            name: res.profileObj.name,
            provider: 'google'
        });
        this.doSignUp();
    }
    // Kakao Login
    responseKakao = (res) => {
        this.setState({
            id: res.profile.id,
            name: res.profile.properties.nickname,
            provider: 'kakao'
        });
        this.doSignUp();
    }

    // Login Fail
    responseFail = (err) => {
        console.error(err);
    }
    
    doSignUp = () => {
            const { id, name, provider } = this.state;

            window.sessionStorage.setItem('id', id);
            window.sessionStorage.setItem('name', name);
            window.sessionStorage.setItem('provider', provider);
            this.props.onLogin();
            this.props.history.push('/');
    }

    render() {
        return (
            <Container>
                <GoogleLogin
                    clientId={process.env.REACT_APP_Google}
                    buttonText="Google"
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseFail}
                />
                <KakaoButton
                    jsKey={process.env.REACT_APP_Kakao}
                    buttonText="Kakao"
                    onSuccess={this.responseKakao}
                    onFailure={this.responseFail}
                    getProfile="true"
                />
            </Container>
        );
    }
}

const Container = styled.div`
    display: flex;
    flex-flow: column wrap;
`

const KakaoButton = styled(login)`
    padding: 0;
    width: 190px;
    height: 44px;
    line-height: 44px;
    color: #783c00;
    background-color: #FFEB00;
    border: 1px solid transparent;
    border-radius: 3px;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
`

export default history(Login);
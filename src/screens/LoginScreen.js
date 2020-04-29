import React, { Component } from "react";
import styled from "styled-components";
import { loginFacebook } from "../service/facebook";
import { login } from "../service/news";
import {
	Container,
	Background,
	InputContainer,
	Input,
	Icon,
	ButtonContainer,
	TextColor,
	TextContainer,
	showToast,
} from "../components/StyledComponent";

const Logo = styled.Image`
	width: 350px;
	height: 150px;
	border-radius: 20px;
	margin-bottom: 20px;
`

const OrContainer = styled.View`
	flex-direction: row;
	justify-content: center;
	align-items: center;
`;

const Line = styled.View`
	background-color: #d8d8d8;
	height: 2;
	width: 80;
`;

const OrText = styled.Text`
	margin: 20px;
	color: white;
	font-weight: 500;
`;

export default class LoginScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: null,
			password: null,
		};
	}
	handleLogin = () => {
		showToast(null, "Loading..");
		const { email, password } = this.state;
		try {
			login(email, password);
		} catch (error) {
			showToast(error);
		}
	};

	handleCreateAccount = () => {
		this.props.navigation.navigate("Register");
	};

	render() {
		return (
			<Container>
				<Background source={require("../../assets/login-background.jpg")} />
				<Logo source={require("../../assets/logo.png")} />
				<InputContainer>
					<Icon size={22} source={require("../../assets/icons/email.png")} />
					<Input
						placeholder='Email'
						keyboardType='email-address'
						underlineColorAndroid='transparent'
						onChangeText={(email) => this.setState({ email })}
					/>
				</InputContainer>
				<InputContainer marginBottom={50}>
					<Icon size={22} source={require("../../assets/icons/password.png")} />
					<Input
						placeholder='Password'
						secureTextEntry={true}
						underlineColorAndroid='transparent'
						onChangeText={(password) => this.setState({ password })}
					/>
				</InputContainer>
				<ButtonContainer onPress={this.handleLogin}>
					<TextColor>SIGN IN</TextColor>
				</ButtonContainer>
				<OrContainer>
					<Line />
					<OrText>OR</OrText>
					<Line />
				</OrContainer>
				<ButtonContainer background='white' onPress={loginFacebook}>
					<TextColor color='#3360FF'>CONTINUE WITH FACEBOOK</TextColor>
				</ButtonContainer>
				<TextContainer onPress={this.handleCreateAccount}>
					<TextColor>CREATE AN ACCOUNT</TextColor>
				</TextContainer>
			</Container>
		);
	}
}

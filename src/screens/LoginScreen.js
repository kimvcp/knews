import React, { Component } from "react";
import styled from "styled-components";
import { loginFacebook } from "../service/facebook";
import auth from "@react-native-firebase/auth";
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
} from "../components/util";

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
			auth()
				.signInWithEmailAndPassword(email, password)
				.catch((error) => {
					showToast(error);
				});
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
					<TextColor color='blue'>CONTINUE WITH FACEBOOK</TextColor>
				</ButtonContainer>
				<TextContainer onPress={this.handleCreateAccount}>
					<TextColor>CREATE AN ACCOUNT</TextColor>
				</TextContainer>
			</Container>
		);
	}
}

import React, { Component } from "react";
import styled from "styled-components";
import {loginFacebook} from "../service/facebook"

const Container = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;
`;

const Background = styled.Image`
	width: 100%;
	height: 100%;
	position: absolute;
	z-index: 0;
`;

const InputContainer = styled.View`
	height: 45;
	width: 70%;
	border-bottom-color: #f5fcff;
	background-color: #ffffff;
	border-radius: 30px;
	border-bottom-width: 1;
	margin-bottom: ${(props) => props.marginBottom || 20}px;
	flex-direction: row;
	align-items: center;
`;

const Input = styled.TextInput`
	height: 45;
	margin-left: 16px;
	border-bottom-color: #ffffff;
	flex: 1;
`;

const Icon = styled.Image`
	width: ${(props) => props.size}px;
	height: ${(props) => props.size}px;
	margin-left: 15px;
	justify-content: center;
`;

const ButtonContainer = styled.TouchableHighlight`
	height: 45;
	width: 70%;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	border-radius: 30px;
	background-color: ${(props) => props.background};
`;

const TextColor = styled.Text`
	color: ${(props) => props.color || "white"};
`;

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

const TextContainer = styled.TouchableOpacity`
	margin-top: 70px;
	margin-horizontal: 25px;
`;

const Row = styled.View`
	flex-direction: row;
`;

export default class LoginScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			password: "",
		};
	}
	handleLogin = () => {
		this.props.navigation.navigate("Home");
	};

	handleFacebookLogin = async () => {
		const response = await loginFacebook();
		if (response) {
			this.props.navigation.navigate("Home", {
				facebookData: response.json(),
			});
			alert(`Logged in!, Hi ${response.json().name}!`);
		}
	};

	handleForgotDetails = () => {};

	handleCreateAccount = () => {};

	render() {
		return (
			<Container>
				<Background source={require("../../assets/background.jpg")} />
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
					<Icon size={20} source={require("../../assets/icons/password.png")} />
					<Input
						placeholder='Password'
						secureTextEntry={true}
						underlineColorAndroid='transparent'
						onChangeText={(password) => this.setState({ password })}
					/>
				</InputContainer>

				<ButtonContainer background='#2087f2' onPress={this.handleLogin}>
					<TextColor>SIGN IN</TextColor>
				</ButtonContainer>
				<OrContainer>
					<Line />
					<OrText>OR</OrText>
					<Line />
				</OrContainer>
				<ButtonContainer background='white' onPress={this.handleFacebookLogin}>
					<TextColor color='blue'>CONTINUE WITH FACEBOOK</TextColor>
				</ButtonContainer>
				<Row>
					<TextContainer onPress={this.handleForgotDetails}>
						<TextColor>FORGOT DETAILS?</TextColor>
					</TextContainer>

					<TextContainer onPress={this.handleCreateAccount}>
						<TextColor>CREATE ACCOUNT</TextColor>
					</TextContainer>
				</Row>
			</Container>
		);
	}
}

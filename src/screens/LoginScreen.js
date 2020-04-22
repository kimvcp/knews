import React, { Component } from "react";
import styled from "styled-components";
import { loginFacebook } from "../service/facebook";
import auth from "@react-native-firebase/auth";
import { Toast } from "native-base";

export const Container = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;
`;

export const Background = styled.Image`
	width: 100%;
	height: 100%;
	position: absolute;
	z-index: 0;
`;

export const InputContainer = styled.View`
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

export const Input = styled.TextInput`
	height: 45;
	margin-left: 16px;
	border-bottom-color: #ffffff;
	flex: 1;
`;

export const Icon = styled.Image`
	width: ${(props) => props.size}px;
	height: ${(props) => props.size}px;
	margin-left: 15px;
	justify-content: center;
`;

export const ButtonContainer = styled.TouchableHighlight`
	height: 45;
	width: 70%;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	border-radius: 30px;
	background-color: ${(props) => props.background || "white"};
`;

export const TextColor = styled.Text`
	color: ${(props) => props.color || "white"};
`;

export const TextContainer = styled.TouchableOpacity`
	margin-top: 70px;
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

export const showToast = (error, message) => {
	Toast.show({
		text: error ? error.message : message,
		buttonText: "Okay",
		position: "bottom",
		buttonTextStyle: { color: "white" },
		buttonStyle: { backgroundColor: "#344955" },
	});
};

export default class LoginScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: null,
			password: null,
		};
	}
	handleLogin = () => {
		const { email, password } = this.state;
		try {
			auth()
				.signInWithEmailAndPassword(email, password)
				.then(() => {
					this.props.navigation.navigate("Tab");
				})
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

				<ButtonContainer background='#344955' onPress={this.handleLogin}>
					<TextColor color='#F9AA33'>SIGN IN</TextColor>
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

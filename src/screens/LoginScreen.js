import React, { Component } from "react";
import { Text, View } from "react-native";
import styled from "styled-components";

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
	margin-bottom: 20px;
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

const SignInContainer = styled.TouchableHighlight`
	height: 45;
	width: 70%;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	margin-top: 50px;
	border-radius: 30px;
	background-color: #2087f2;
`;

const SignInText = styled.Text`
	color: white;
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

const DetailText = styled.Text`
	color: white;
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
				<InputContainer>
					<Icon size={20} source={require("../../assets/icons/password.png")} />
					<Input
						placeholder='Password'
						secureTextEntry={true}
						underlineColorAndroid='transparent'
						onChangeText={(password) => this.setState({ password })}
					/>
				</InputContainer>

				<SignInContainer onPress={this.handleLogin}>
					<SignInText>SIGN IN</SignInText>
				</SignInContainer>
				<OrContainer>
					<Line />
					<OrText>OR</OrText>
					<Line />
				</OrContainer>
				<Row>
					<TextContainer onPress={this.handleForgotDetails}>
						<DetailText>FORGOT DETAILS??</DetailText>
					</TextContainer>

					<TextContainer onPress={this.handleCreateAccount}>
						<DetailText>CREATE ACCOUNT</DetailText>
					</TextContainer>
				</Row>
			</Container>
		);
	}
}

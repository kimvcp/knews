import React, { Component } from "react";
import { Text } from "react-native";
import styled from "styled-components";

const Container = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;
	background-color: #dcdcdc;
`;

const InputContainer = styled.View`
	border-bottom-color: #f5fcff;
	background-color: #ffffff;
	border-radius: 30px;
	border-bottom-width: 1;
	width: 250;
	height: 45;
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
	width: 30;
	height: 30;
	margin-left: 15px;
	justify-content: center;
`;

const SignInContainer = styled.TouchableHighlight`
	height: 45;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	margin-top: 50px;
	width: 250;
	border-radius: 30px;
	background-color: #00b5ec;
`;

const SignInText = styled.Text`
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

	handleForgotDetails = () => {};

	handleCreateAccount = () => {};

	render() {
		return (
			<Container>
				<InputContainer>
					<Icon
						source={{
							uri: "https://png.icons8.com/message/ultraviolet/50/3498db",
						}}
					/>
					<Input
						placeholder='Email'
						keyboardType='email-address'
						underlineColorAndroid='transparent'
						onChangeText={(email) => this.setState({ email })}
					/>
				</InputContainer>
				<InputContainer>
					<Icon
						source={{
							uri: "https://png.icons8.com/key-2/ultraviolet/50/3498db",
						}}
					/>
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
				<Row>
					<TextContainer onPress={this.handleForgotDetails}>
						<Text>FORGOT DETAILS??</Text>
					</TextContainer>

					<TextContainer onPress={this.handleCreateAccount}>
						<Text>CREATE ACCOUNT</Text>
					</TextContainer>
				</Row>
			</Container>
		);
	}
}

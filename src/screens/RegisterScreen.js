import React, { Component } from "react";
import {
	Container,
	InputContainer,
	Icon,
	Input,
	Background,
	ButtonContainer,
	TextContainer,
	TextColor,
	showToast,
} from "./LoginScreen";
import auth from "@react-native-firebase/auth";

export default class RegisterScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: null,
			email: null,
			password: null,
		};
	}

	handleRegister = () => {
		const { email, password } = this.state;
		try {
			auth()
				.createUserWithEmailAndPassword(email, password)
				.then(() => {
					this.props.navigation.navigate("Login");
				})
				.catch((error) => {
					showToast(error);
				});
		} catch (error) {
			showToast(error);
		}
	};

	handleHaveAccount = () => {
		this.props.navigation.navigate("Login");
	};

	render() {
		return (
			<Container>
				<Background source={require("../../assets/register-background.jpg")} />
				<InputContainer>
					<Icon size={22} source={require("../../assets/icons/user.png")} />
					<Input
						placeholder='Full name'
						keyboardType='default'
						underlineColorAndroid='transparent'
						onChangeText={(name) => this.setState({ name })}
					/>
				</InputContainer>

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

				<ButtonContainer background='#344955' onPress={this.handleRegister}>
					<TextColor color='#F9AA33'>REGISTER</TextColor>
				</ButtonContainer>
				<TextContainer onPress={this.handleHaveAccount}>
					<TextColor>HAVE AN ACCOUNT?</TextColor>
				</TextContainer>
			</Container>
		);
	}
}

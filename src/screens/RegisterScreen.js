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
		if (email && password) {
			auth()
				.createUserWithEmailAndPassword(email, password)
				.then(() => {
					alert("User account created & signed in!");
					this.props.navigation.navigate("Login");
				})
				.catch((error) => {
					if (error.code === "auth/email-already-in-use") {
						alert("That email address is already in use!");
					}

					if (error.code === "auth/invalid-email") {
						alert("That email address is invalid!");
					}

					console.error(error);
				});
		} else {
			alert("The field cannot be empty");
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

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
} from "../components/StyledComponent";
import { register } from "../service/news";

export default class RegisterScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: null,
			email: null,
			password: null,
			confirmPassword: null,
		};
	}

	handleRegister = () => {
		const { name, email, password, confirmPassword } = this.state;
		if (password === confirmPassword) {
			try {
				showToast(null, "Loading..");
				register(name, email, password);
			} catch (error) {
				showToast(error);
			}
		} else {
			showToast(null, "Password and Confirm Password are not matching");
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
						placeholder='Name'
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

				<InputContainer>
					<Icon size={22} source={require("../../assets/icons/password.png")} />
					<Input
						placeholder='Password'
						secureTextEntry={true}
						underlineColorAndroid='transparent'
						onChangeText={(password) => this.setState({ password })}
					/>
				</InputContainer>

				<InputContainer marginBottom={50}>
					<Icon size={22} source={require("../../assets/icons/password.png")} />
					<Input
						placeholder='Confirm Password'
						secureTextEntry={true}
						underlineColorAndroid='transparent'
						onChangeText={(confirmPassword) =>
							this.setState({ confirmPassword })
						}
					/>
				</InputContainer>

				<ButtonContainer onPress={this.handleRegister}>
					<TextColor>REGISTER</TextColor>
				</ButtonContainer>
				<TextContainer onPress={this.handleHaveAccount}>
					<TextColor color='white'>HAVE AN ACCOUNT?</TextColor>
				</TextContainer>
			</Container>
		);
	}
}

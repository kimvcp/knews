import React, { Component } from "react";
import { Modal } from "react-native";
import {
	Container,
	Header,
	Content,
	Body,
	Left,
	Right,
	Title,
	Button,
} from "native-base";
import {
	ButtonContainer,
	TextColor,
	Icon,
	InputContainer,
	Input,
	showToast,
} from "./Util";
import { View } from "react-native";

export default class ProfilePanel extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: null,
			password: null,
			confirmPassword: null,
		};
	}

	handleSubmit = () => {
		const { name, password, confirmPassword } = this.state;
		this.props.onSubmit(name, password, confirmPassword);
	};

	render() {
		const { showModal } = this.props;
		return (
			<Modal
				animationType='slide'
				transparent
				visible={showModal}
				onRequestClose={this.handleClose}>
				<Container
					style={{
						backgroundColor: "#fff",
						marginTop: 50,
						marginBottom: 100,
						marginHorizontal: 20,
						shadowColor: "#000",
						shadowOffset: {
							width: 0,
							height: 4,
						},
						shadowOpacity: 0.3,
						shadowRadius: 4.65,
						elevation: 8,
					}}>
					<Header
						style={{
							backgroundColor: "#232f34",
							paddingLeft: 15,
						}}>
						<Left>
							<Button onPress={this.props.onClose} transparent>
								<Icon
									size={15}
									source={require("../../assets/icons/close.png")}
								/>
							</Button>
						</Left>
						<Body>
							<Title children='Edit Profile' style={{ color: "white" }} />
						</Body>
						<Right />
					</Header>
					<View>
						<InputContainer>
							<Icon size={22} source={require("../../assets/icons/user.png")} />
							<Input
								placeholder='New Userame'
								keyboardType='default'
								underlineColorAndroid='transparent'
								onChangeText={(name) => this.setState({ name })}
							/>
						</InputContainer>
						<InputContainer>
							<Icon
								size={22}
								source={require("../../assets/icons/password.png")}
							/>
							<Input
								placeholder='New Password'
								secureTextEntry={true}
								underlineColorAndroid='transparent'
								onChangeText={(password) => this.setState({ password })}
							/>
						</InputContainer>

						<InputContainer marginBottom={50}>
							<Icon
								size={22}
								source={require("../../assets/icons/password.png")}
							/>
							<Input
								placeholder='Confirm Password'
								secureTextEntry={true}
								underlineColorAndroid='transparent'
								onChangeText={(confirmPassword) =>
									this.setState({ confirmPassword })
								}
							/>
						</InputContainer>
						<ButtonContainer onPress={this.handleSubmit}>
							<TextColor>SUBMIT</TextColor>
						</ButtonContainer>
					</View>
				</Container>
			</Modal>
		);
	}
}

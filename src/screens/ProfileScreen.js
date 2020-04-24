import React, { Component } from "react";
import { Text } from "native-base";
import auth from "@react-native-firebase/auth";
import { getUser, logout, updateInfo } from "../service/news";
import {
	Container,
	ButtonContainer,
	TextColor,
	showToast,
} from "../components/Util";

export default class ProfileScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: null,
			email: null,
		};
	}

	componentDidMount = async () => {
		const user = await getUser();
		this.setState({ name: user.displayName, email: user.email });
	};

	onProfileUpdated = () => {
		showToast(null, "Profile has been updated");
	};

	handleUpdateInfo = () => {
		showToast(null, "Loading..");
		const { name, password } = this.state;
		try {
			updateInfo("kimvcp", "Letmein@2542", onProfileUpdated);
		} catch (error) {
			showToast(error);
		}
	};

	render() {
		const { name, email } = this.state;
		return (
			<Container>
				<Text>Name: {name}</Text>
				<Text>Email: {email}</Text>
				<ButtonContainer onPress={this.handleUpdateInfo}>
					<TextColor>Update</TextColor>
				</ButtonContainer>
				<ButtonContainer onPress={logout}>
					<TextColor>SIGN OUT</TextColor>
				</ButtonContainer>
			</Container>
		);
	}
}

import React, { Component } from "react";
import { Text } from "native-base";
import auth from "@react-native-firebase/auth";
import { getUser } from "../service/news";
import {
	Container,
	ButtonContainer,
	TextColor,
	showToast,
} from "../components/util";

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

	handleLogout = () => {
		auth()
			.signOut()
			.catch((error) => {
				showToast(error);
			});
	};

	render() {
		const { name, email } = this.state;
		return (
			<Container>
				<Text>Name: {name}</Text>
				<Text>Email: {email}</Text>
				<ButtonContainer onPress={this.handleLogout}>
					<TextColor>SIGN OUT</TextColor>
				</ButtonContainer>
			</Container>
		);
	}
}

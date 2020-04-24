import React, { Component } from "react";
import { Text } from "native-base";
import auth from "@react-native-firebase/auth";
import { getUser, logout } from "../service/news";
import {
	Container,
	ButtonContainer,
	TextColor,
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

	render() {
		const { name, email } = this.state;
		return (
			<Container>
				<Text>Name: {name}</Text>
				<Text>Email: {email}</Text>
				<ButtonContainer onPress={logout}>
					<TextColor>SIGN OUT</TextColor>
				</ButtonContainer>
			</Container>
		);
	}
}

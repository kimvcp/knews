import React, { Component } from "react";
import { Container, Text, Content, Button } from "native-base";
import auth from "@react-native-firebase/auth";
import { showToast } from "./LoginScreen";

export default class ProfileScreen extends Component {
	constructor(props) {
		super(props);
	}

	handleLogout = () => {
		auth()
			.signOut()
			.catch((error) => {
				showToast(error);
			});
	};

	render() {
		return (
			<Container>
				<Content>
					<Button onPress={this.handleLogout}>
						<Text>SIGN OUT</Text>
					</Button>
				</Content>
			</Container>
		);
	}
}

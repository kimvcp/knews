import React, { Component } from "react";
import { Container, Text, Content, Button } from "native-base";
import auth from "@react-native-firebase/auth";

export default class ProfileScreen extends Component {
	constructor(props) {
		super(props);
	}

	handleLogout = () => {
		auth()
			.signOut()
			.then(() => this.props.navigation.navigate("Login"))
			.catch((error) => {
				if (error.code === "auth/no-current-user") {
					alert("No user currently signed in");
				}
				console.log(error);
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

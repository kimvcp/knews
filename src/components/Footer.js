import React, { Component } from "react";
import { Footer, FooterTab, Button, Text } from "native-base";

export default class FooterSection extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<Footer>
				<FooterTab>
					<Button
						active
						onPress={() => {
							this.props.navigation.navigate("Saved");
						}}>
						<Text>Saved</Text>
					</Button>
					<Button
						onPress={() => {
							this.props.navigation.navigate("Home");
						}}>
						<Text>Home</Text>
					</Button>
					<Button
						onPress={() => {
							// this.props.navigation.navigate("Profile");
						}}>
						<Text>Profile</Text>
					</Button>
				</FooterTab>
			</Footer>
		);
	}
}

import React, { Component } from "react";
import { Container, Text } from "native-base";

export default class SavedScreen extends Component {
	render() {
		return (
			<Container>
				<Text>This is the saved screen</Text>
				<Footer/>
			</Container>
		);
	}
}
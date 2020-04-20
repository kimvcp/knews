import React, { Component } from "react";
import { Container, Text } from "native-base";
import FooterSection from "../components/Footer";

export default class SavedScreen extends Component {
	render() {
		return (
			<Container>
				<Text>This is the saved screen</Text>
				<FooterSection/>
			</Container>
		);
	}
}
import React, { Component } from "react";
import { Header, Left, Body, Right, Title } from "native-base";

export default class HeaderTitle extends Component {
	render() {
		return (
			<Header style={{ backgroundColor: "#4A6572" }}>
				<Left />
				<Body>
					<Title style={{ color: "white" }}>KNEWS</Title>
				</Body>
				<Right />
			</Header>
		);
	}
}

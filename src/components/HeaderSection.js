import React, { Component } from "react";
import { Header, Left, Body, Right, Title } from "native-base";

export default class HeaderSection extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<Header style={{ backgroundColor: "#4A6572" }}>
				<Left />
				<Body>
					<Title style={{ color: "white" }}>
						{this.props.title || "KNEWS"}
					</Title>
				</Body>
				<Right />
			</Header>
		);
	}
}

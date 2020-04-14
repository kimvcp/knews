import React, { Component } from "react";
import { Header, Left, Body, Right, Title } from "native-base";

export default class HeaderTitle extends Component {
	render() {
		return (
			<Header>
				<Left />
				<Body>
					<Title>KNEWS</Title>
				</Body>
				<Right />
			</Header>
		);
	}
}

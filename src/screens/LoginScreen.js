import React, { Component } from "react";
import { View, Text } from "react-native";
import styled from "styled-components";

const Button = styled.TouchableOpacity`
	background: #3a6ce7;
	justify-content: center;
	align-items: center;
	border-radius: 20px;
	padding: 20px 40px;
`;

const Container = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;
`;

const LoginText = styled.Text`
	color: white;
`;

export default class LoginScreen extends Component {
	render() {
		return (
			<Container>
				<Button
					onPress={() => {
						this.props.navigation.navigate("Home");
					}}>
					<LoginText>Login</LoginText>
				</Button>
			</Container>
		);
	}
}

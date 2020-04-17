import React from "react";
import { Container, Text } from "native-base";
import { createStackNavigator, createAppContainer } from "react-navigation";
import TabScreen from "./src/screens/TabScreen";
import LoginScreen from "./src/screens/LoginScreen";

export default class App extends React.Component {
	render() {
		const MainNavigator = createStackNavigator(
			{
				Home: { screen: TabScreen },
				Login: { screen: LoginScreen },
			},
			{
				header: { visible: false },
				headerMode: "none",
				initialRouteName: "Login",
				defaultNavigationOptions: {
					gesturesEnabled: false,
					swipeEnabled: false,
				},
			}
		);

		const AppContainer = createAppContainer(MainNavigator);

		return (
			<Container>
				<AppContainer />
			</Container>
		);
	}
}

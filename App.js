import React from "react";
import { Container } from "native-base";
import { createStackNavigator, createAppContainer } from "react-navigation";
import TabScreen from "./src/screens/TabScreen";
import LoginScreen from "./src/screens/LoginScreen";
import RegisterScreen from "./src/screens/RegisterScreen";

export default class App extends React.Component {
	render() {
		const MainNavigator = createStackNavigator(
			{
				Tab: { screen: TabScreen },
				Login: { screen: LoginScreen },
				Register: { screen: RegisterScreen },			
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

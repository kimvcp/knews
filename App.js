import React from "react";
import { Container } from "native-base";
import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from "./src/screens/HomeScreen";
import LoginScreen from "./src/screens/LoginScreen";
import RegisterScreen from "./src/screens/RegisterScreen";
import SavedScreen from "./src/screens/SavedScreen";

export default class App extends React.Component {
	render() {
		const MainNavigator = createStackNavigator(
			{
				Home: { screen: HomeScreen },
				Login: { screen: LoginScreen },
				Register: { screen: RegisterScreen },
				Saved: { screen: SavedScreen },
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

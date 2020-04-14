import React from "react";
import { AppLoading } from "expo";
import { Container, Text } from "native-base";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { createStackNavigator, createAppContainer } from "react-navigation";
import TabScreen from "./src/screens/TabScreen";
import LoginScreen from "./src/screens/LoginScreen";

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isReady: false,
		};
	}
	async componentDidMount() {
		await Font.loadAsync({
			Roboto: require("native-base/Fonts/Roboto.ttf"),
			Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
			...Ionicons.font,
		});
		this.setState({ isReady: true });
	}

	render() {
		if (!this.state.isReady) {
			return <AppLoading />;
		}

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

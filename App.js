import React from "react";
import { Root } from "native-base";
import { createStackNavigator, createAppContainer } from "react-navigation";
import TabScreen from "./src/screens/TabScreen";
import LoginScreen from "./src/screens/LoginScreen";
import RegisterScreen from "./src/screens/RegisterScreen";
import auth from "@react-native-firebase/auth";
import ProfileScreen from "./src/screens/ProfileScreen";

export default class App extends React.Component {
	constructor(props) {
		super(props);
		// Set an initializing state whilst Firebase connects
		this.state = {
			initializing: true,
			user: "",
		};
	}

	componentDidMount() {
		const subscriber = auth().onAuthStateChanged(this.onAuthStateChanged);
		return subscriber; // unsubscribe on unmounts
	}

	// Handle user state changes
	onAuthStateChanged = (user) => {
		const { initializing } = this.state;
		this.setState({ user });
		if (initializing) this.setState({ initializing: false });
	};

	render() {
		const { initializing, user } = this.state;
		const MainNavigator = createStackNavigator(
			{
				Tab: { screen: TabScreen },
				Login: { screen: LoginScreen },
				Register: { screen: RegisterScreen },
				Profile: { screen: ProfileScreen },
			},
			{
				header: { visible: false },
				headerMode: "none",
				initialRouteName: !user ? "Login" : "Tab",
				defaultNavigationOptions: {
					gesturesEnabled: false,
					swipeEnabled: false,
				},
			}
		);

		const AppContainer = createAppContainer(MainNavigator);

		if (initializing) return null;

		return (
			<Root>
				<AppContainer />
			</Root>
		);
	}
}

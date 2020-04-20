import React, { Component } from "react";
import { Container, Tab, Tabs } from "native-base";
import SavedScreen from "./SavedScreen";
import HomeScreen from "./HomeScreen";
import ProfileScreen from "./ProfileScreen";

export default class TabScreen extends Component {
	render() {
		return (
			<Container>
				<Tabs tabBarPosition='bottom' initialPage={1}>
					<Tab heading='SAVED'>
						<SavedScreen />
					</Tab>
					<Tab heading='HOME'>
						<HomeScreen />
					</Tab>
					<Tab heading='PROFILE'>
						<ProfileScreen />
					</Tab>
				</Tabs>
			</Container>
		);
	}
}

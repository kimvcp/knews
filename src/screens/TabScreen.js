import React, { Component } from "react";
import { Container, Tab, Tabs } from "native-base";
import SavedScreen from "./SavedScreen";
import HeaderTitle from "../components/Header";
import HomeScreen from "./HomeScreen";

export default class TabScreen extends Component {
	render() {
		return (
			<Container>
				<HeaderTitle />
				<Tabs>
					<Tab
						// tabStyle={{ backgroundColor: "" }}
						// activeTabStyle={{ backgroundColor: "" }}
						// textStyle={{ color: "" }}
						// activeTextStyle={{ color: "" }}
						heading='Saved'>
						<SavedScreen />
					</Tab>
					<Tab
						// tabStyle={{ backgroundColor: "" }}
						// activeTabStyle={{ backgroundColor: "" }}
						// textStyle={{ color: "" }}
						// activeTextStyle={{ color: "" }}
						heading='Home'>
						<HomeScreen />
					</Tab>
					<Tab
						// tabStyle={{ backgroundColor: "" }}
						// activeTabStyle={{ backgroundColor: "" }}
						// textStyle={{ color: "" }}
						// activeTextStyle={{ color: "" }}
						heading='Saved'>
						<SavedScreen />
					</Tab>
				</Tabs>
			</Container>
		);
	}
}

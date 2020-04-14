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
				<Tabs tabBarUnderlineStyle={{ backgroundColor: "black" }}>
					<Tab
						tabStyle={{ backgroundColor: "black" }}
						activeTabStyle={{ backgroundColor: "white" }}
						textStyle={{ color: "white" }}
						activeTextStyle={{ color: "black" }}
						heading='Saved'>
						<SavedScreen />
					</Tab>
					<Tab
						tabStyle={{ backgroundColor: "black" }}
						activeTabStyle={{ backgroundColor: "white" }}
						textStyle={{ color: "white" }}
						activeTextStyle={{ color: "black" }}
						heading='Home'>
						<HomeScreen />
					</Tab>
					<Tab
						tabStyle={{ backgroundColor: "black" }}
						activeTabStyle={{ backgroundColor: "white" }}
						textStyle={{ color: "white" }}
						activeTextStyle={{ color: "black" }}
						heading='Saved'>
						<SavedScreen />
					</Tab>
				</Tabs>
			</Container>
		);
	}
}

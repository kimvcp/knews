import React, { Component } from "react";
import { Container, Tab, Tabs, View } from "native-base";
import SavedScreen from "./SavedScreen";
import HomeScreen from "./HomeScreen";
import ProfileScreen from "./ProfileScreen";
import HeaderSection from "../components/HeaderSection";

export default class TabScreen extends Component {
	render() {
		return (
			<Container style={{ backgroundColor: "#4A6572" }}>
				<HeaderSection />
				<Tabs
					style={{ marginBottom: 30 }}
					tabBarPosition='bottom'
					initialPage={1}
					tabBarUnderlineStyle={{
						backgroundColor: "#F9AA33",
					}}>
					<Tab
						tabStyle={{ backgroundColor: "#4A6572"}}
						activeTabStyle={{ backgroundColor: "#344955" }}
						textStyle={{ color: "white", fontWeight: "500" }}
						activeTextStyle={{ color: "#F9AA33", fontWeight: "700" }}
						heading='SAVED'>
						<SavedScreen />
					</Tab>
					<Tab
						tabStyle={{ backgroundColor: "#4A6572"}}
						activeTabStyle={{ backgroundColor: "#344955" }}
						textStyle={{ color: "white", fontWeight: "500" }}
						activeTextStyle={{ color: "#F9AA33", fontWeight: "700" }}
						heading='HOME'>
						<HomeScreen />
					</Tab>
					<Tab
						tabStyle={{ backgroundColor: "#4A6572"}}
						activeTabStyle={{ backgroundColor: "#344955" }}
						textStyle={{ color: "white", fontWeight: "500" }}
						activeTextStyle={{ color: "#F9AA33", fontWeight: "700" }}
						heading='PROFILE'>
						<ProfileScreen />
					</Tab>
				</Tabs>
			</Container>
		);
	}
}

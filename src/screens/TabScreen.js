import React, { Component } from "react";
import { Container, Tab, Tabs, View } from "native-base";
import SavedScreen from "./SavedScreen";
import HomeScreen from "./HomeScreen";
import ProfileScreen from "./ProfileScreen";
import HeaderSection from "../components/HeaderSection";

export default class TabScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: 1,
		};
	}

	render() {
		const { value } = this.state;
		let title = null;
		switch (value) {
			case 0:
				title = "SAVED NEWS";
				break;
			case 1:
				title = "TODAY NEWS";
				break;
			case 2:
				title = "PROFILE";
				break;
			default:
				title = "KNEWS";
		}
		handleTabChange = (tabValue) => {
			this.setState({ value: tabValue.i });
		};

		return (
			<Container style={{ backgroundColor: "#4A6572" }}>
				<HeaderSection title={title} />
				<Tabs
					onChangeTab={handleTabChange}
					style={{ marginBottom: 30 }}
					tabBarPosition='bottom'
					initialPage={1}
					tabBarUnderlineStyle={{
						backgroundColor: "#F9AA33",
					}}>
					<Tab
						tabStyle={{ backgroundColor: "#4A6572" }}
						activeTabStyle={{ backgroundColor: "#344955" }}
						textStyle={{ color: "white", fontWeight: "500" }}
						activeTextStyle={{ color: "#F9AA33", fontWeight: "700" }}
						heading='SAVED'>
						<SavedScreen value={value} />
					</Tab>
					<Tab
						tabStyle={{ backgroundColor: "#4A6572" }}
						activeTabStyle={{ backgroundColor: "#344955" }}
						textStyle={{ color: "white", fontWeight: "500" }}
						activeTextStyle={{ color: "#F9AA33", fontWeight: "700" }}
						heading='HOME'>
						<HomeScreen />
					</Tab>
					<Tab
						tabStyle={{ backgroundColor: "#4A6572" }}
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

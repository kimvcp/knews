import React, { Component } from "react";
import { Container, Tab, Tabs } from "native-base";
import HeaderTitle from "../components/Header";
import TabItem from "../components/TabItem";

export default class TabScreen extends Component {
	render() {
		return (
			<Container>
				<HeaderTitle />
				<Tabs tabBarUnderlineStyle={{backgroundColor:'white'}}>
					<Tab
						tabStyle={{ backgroundColor: "#009387" }}
						activeTabStyle={{ backgroundColor: "#009387" }}
						textStyle={{ color: "white" }}
						activeTextStyle={{ color: "white" }}
						heading='General'>
						<TabItem category='general' countryCode='us' />
					</Tab>
					<Tab
						tabStyle={{ backgroundColor: "#009387" }}
						activeTabStyle={{ backgroundColor: "#009387" }}
						textStyle={{ color: "white" }}
						activeTextStyle={{ color: "white" }}
						heading='Business'>
						<TabItem category='business' countryCode='us' />
					</Tab>
					<Tab
						tabStyle={{ backgroundColor: "#009387" }}
						activeTabStyle={{ backgroundColor: "#009387" }}
						textStyle={{ color: "white" }}
						activeTextStyle={{ color: "white" }}
						heading='Technology'>
						<TabItem category='technology' countryCode='us' />
					</Tab>
				</Tabs>
			</Container>
		);
	}
}

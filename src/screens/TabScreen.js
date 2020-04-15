import React, { Component } from "react";
import { Container, Tab, Tabs } from "native-base";
import HeaderTitle from "../components/Header";
import TabItem from "../components/TabItem";

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
						heading='General'>
						<TabItem category="general" />
					</Tab>
					<Tab
						// tabStyle={{ backgroundColor: "" }}
						// activeTabStyle={{ backgroundColor: "" }}
						// textStyle={{ color: "" }}
						// activeTextStyle={{ color: "" }}
						heading='Business'>
						<TabItem category="business"/>
					</Tab>
					<Tab
						// tabStyle={{ backgroundColor: "" }}
						// activeTabStyle={{ backgroundColor: "" }}
						// textStyle={{ color: "" }}
						// activeTextStyle={{ color: "" }}
						heading='Technology'>
						<TabItem category="technology" />
					</Tab>
				</Tabs>
			</Container>
		);
	}
}

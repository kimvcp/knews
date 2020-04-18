import React, { Component } from "react";
import { Container, Tab, Tabs } from "native-base";
import HeaderTitle from "../components/Header";
import TabItem from "../components/TabItem";

export default class TabScreen extends Component {
	render() {
		return (
			<Container>
				<HeaderTitle />
				<Tabs tabBarUnderlineStyle={{backgroundColor:'#F9AA33'}}>
					<Tab
						tabStyle={{ backgroundColor: "#4A6572" }}
						activeTabStyle={{ backgroundColor: "#344955" }}
						textStyle={{ color: "white",fontWeight: "500"  }}
						activeTextStyle={{ color: "#c", fontWeight: "700" }}
						heading='General'>
						<TabItem category='general' countryCode='us' />
					</Tab>
					<Tab
						tabStyle={{ backgroundColor: "#4A6572" }}
						activeTabStyle={{ backgroundColor: "#344955" }}
						textStyle={{ color: "white", fontWeight: "500" }}
						activeTextStyle={{ color: "#F9AA33", fontWeight: "700"  }}
						heading='Business'>
						<TabItem category='business' countryCode='us' />
					</Tab>
					<Tab
						tabStyle={{ backgroundColor: "#4A6572" }}
						activeTabStyle={{ backgroundColor: "#344955" }}
						textStyle={{ color: "white" ,fontWeight: "500" }}
						activeTextStyle={{ color: "#F9AA33", fontWeight: "700"  }}
						heading='Technology'>
						<TabItem category='technology' countryCode='us' />
					</Tab>
				</Tabs>
			</Container>
		);
	}
}

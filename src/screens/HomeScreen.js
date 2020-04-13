import React, { Component } from "react";
import { Container, Header, Content, Tab, Tabs } from "native-base";
import SavedScreen from "./SavedScreen";

export default class HomeScreen extends Component {
	render() {
		return (
			<Container>
				<Header hasTabs />
				<Tabs>
					<Tab heading='Tab1'>
						<SavedScreen />
					</Tab>
					<Tab heading='Tab2'>
						<SavedScreen />
					</Tab>
					<Tab heading='Tab3'>
						<SavedScreen />
					</Tab>
				</Tabs>
			</Container>
		);
	}
}

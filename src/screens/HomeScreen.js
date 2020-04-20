import React, { Component } from "react";
import {
	Container,
	Tab,
	Tabs,
	Footer,
	Button,
	Text,
	Content,
	ActionSheet,
	Picker,
	Form,
} from "native-base";
import HeaderTitle from "../components/Header";
import NewsContainer from "../components/NewsContainer";

const CATEGORIES = [
	"business",
	"entertainment",
	"general",
	"health",
	"science",
	"sports",
	"technology",
	"Cancel",
];
const CANCEL_INDEX = 7;

export default class HomeScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			category: "",
			countryCode: "",
		};
	}

	onValueChange(value) {
		this.setState({
			category: value,
		});
	}

	render() {
		return (
			<Container>
				<HeaderTitle />
				<Content padder>
					<Form>
						<Picker
							note
							mode='dropdown'
							style={{ width: 120 }}
							selectedValue={this.state.category}
							onValueChange={this.onValueChange.bind(this)}>
							<Picker.Item label='Wallet' value='key0' />
							<Picker.Item label='ATM Card' value='key1' />
							<Picker.Item label='Debit Card' value='key2' />
							<Picker.Item label='Credit Card' value='key3' />
							<Picker.Item label='Net Banking' value='key4' />
						</Picker>
					</Form>
					<NewsContainer category='technology' countryCode='us' />
					<Footer />
				</Content>
			</Container>
		);
	}
}

{
	/* <Tabs tabBarUnderlineStyle={{ backgroundColor: "#F9AA33" }}>
					<Tab
						tabStyle={{ backgroundColor: "#4A6572" }}
						activeTabStyle={{ backgroundColor: "#344955" }}
						textStyle={{ color: "white", fontWeight: "500" }}
						activeTextStyle={{ color: "#c", fontWeight: "700" }}
						heading='General'>
						<NewsContainer category='general' countryCode='us' />
					</Tab>
					<Tab
						tabStyle={{ backgroundColor: "#4A6572" }}
						activeTabStyle={{ backgroundColor: "#344955" }}
						textStyle={{ color: "white", fontWeight: "500" }}
						activeTextStyle={{ color: "#F9AA33", fontWeight: "700" }}
						heading='Business'>
						<NewsContainer category='business' countryCode='us' />
					</Tab>
					<Tab
						tabStyle={{ backgroundColor: "#4A6572" }}
						activeTabStyle={{ backgroundColor: "#344955" }}
						textStyle={{ color: "white", fontWeight: "500" }}
						activeTextStyle={{ color: "#F9AA33", fontWeight: "700" }}
						heading='Technology'>
						<NewsContainer category='technology' countryCode='us' />
					</Tab>
				</Tabs> */
}

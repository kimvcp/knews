import React, { Component } from "react";
import { Container, Content, Picker, View } from "native-base";
import { CATEGORIES, COUNTRY_CODE} from "../config"
import HeaderTitle from "../components/Header";
import NewsContainer from "../components/NewsContainer";
import FooterSection from "../components/Footer";

export default class HomeScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			category: "general",
			countryCode: "us",
		};
	}

	onCategoryChange = (value) => {
		this.setState({
			category: value,
		});
	};

	onCountryCodeChange = (value) => {
		this.setState({
			countryCode: value,
		});
	};

	renderPickerItems = (pickerItems) =>
		pickerItems.map((item, index) => {
			return <Picker.Item label={item.toUpperCase()} value={item} />;
		});

	render() {
		return (
			<Container>
				<HeaderTitle />
				<Content padder>
					<View
						style={{
							flex: 1,
							flexDirection: "row",
							justifyContent: "space-around",
						}}>
						<Picker
							note={false}
							mode='dropdown'
							style={{ width: undefined }}
							selectedValue={this.state.category}
							onValueChange={this.onCategoryChange}>
							{this.renderPickerItems(CATEGORIES)}
						</Picker>
						<Picker
							note={false}
							mode='dropdown'
							style={{ width: undefined }}
							selectedValue={this.state.countryCode}
							onValueChange={this.onCountryCodeChange}>
							{this.renderPickerItems(COUNTRY_CODE)}
						</Picker>
					</View>
					<NewsContainer
						category={this.state.category}
						countryCode={this.state.countryCode}
					/>
				</Content>
				<FooterSection />
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

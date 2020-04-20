import React, { Component } from "react";
import { Container, Content, Picker, View } from "native-base";
import { CATEGORIES, COUNTRY_CODE } from "../config";
import HeaderTitle from "../components/Header";
import NewsContainer from "../components/NewsContainer";
import FooterSection from "../components/Footer";
const countries = require("country-data").countries;

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

	renderCountryItems = () =>
		COUNTRY_CODE.map((country, index) => {
			return (
				<Picker.Item
					label={countries[country.toUpperCase()].name}
					value={country}
				/>
			);
		});

	renderCategoryItems = () =>
		CATEGORIES.map((category, index) => {
			return <Picker.Item label={category.toUpperCase()} value={category} />;
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
							selectedValue={this.state.category}
							onValueChange={this.onCategoryChange}>
							{this.renderCategoryItems()}
						</Picker>
						<Picker
							note={false}
							mode='dropdown'
							selectedValue={this.state.countryCode}
							onValueChange={this.onCountryCodeChange}>
							{this.renderCountryItems()}
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

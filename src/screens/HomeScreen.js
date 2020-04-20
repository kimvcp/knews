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

	renderCountryItems = () =>
		COUNTRY_CODE.map((country) => {
			return (
				<Picker.Item
					label={countries[country.toUpperCase()].name}
					value={country}
				/>
			);
		});

	renderCategoryItems = () =>
		CATEGORIES.map((category) => {
			return <Picker.Item label={category.toUpperCase()} value={category} />;
		});

	render() {
		return (
			<Container>
				<HeaderTitle />
				<Content>
					<View
						style={{
							flex: 1,
							flexDirection: "row",
							justifyContent: "space-around",
							backgroundColor: "#344955",
						}}>
						<Picker
							note={false}
							mode='dropdown'
							textStyle={{ color: "#F9AA33" }}
							selectedValue={this.state.category}
							onValueChange={(value) => {
								this.setState({
									category: value,
								});
							}}>
							{this.renderCategoryItems()}
						</Picker>
						<Picker
							note={false}
							mode='dropdown'
							textStyle={{ color: "#F9AA33" }}
							selectedValue={this.state.countryCode}
							onValueChange={(value) => {
								this.setState({
									countryCode: value,
								});
							}}>
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

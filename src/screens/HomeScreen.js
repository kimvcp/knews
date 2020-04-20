import React, { Component } from "react";
import {
	Container,
	Content,
	Picker,
} from "native-base";
import { CATEGORIES, COUNTRY_CODE } from "../config";
import HeaderSection from "../components/HeaderSection";
import NewsContainer from "../components/NewsContainer";
const countries = require("country-data").countries;
import styled from "styled-components";

const PickerContainer = styled.View`
	flex: 1;
	flex-direction: row;
	justify-content: space-around;
	background-color: #344955;
	border-radius: 10px;
	margin-top: 15px;
	margin-horizontal: 15px;
`;

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
				<HeaderSection />
				<Content>
					<PickerContainer>
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
					</PickerContainer>
					<NewsContainer
						category={this.state.category}
						countryCode={this.state.countryCode}
					/>
				</Content>
			</Container>
		);
	}
}

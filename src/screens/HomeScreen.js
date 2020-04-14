import React, { Component } from "react";
import { Container, Content, List } from "native-base";
import NewsItem from "../components/NewsItem";
import { getArticles } from "../../service/news";
import { View, ActivityIndicator, Text } from "react-native";
import styled from "styled-components";

const LoadingText = styled.Text`
	margin-top: 10px;
`;

export default class HomeScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoading: true,
			articles: null,
		};
	}

	componentDidMount() {
		getArticles().then(
			(articles) => {
				this.setState({
					isLoading: false,
					articles: articles,
				});
			},
			(error) => {
				alert("Error: ", error);
			}
		);
	}

	render() {
		const { isLoading, articles } = this.state;
		console.log("ALKJ:FDS",articles)
		let newsLists = isLoading ? (
			<View>
				<ActivityIndicator animating={isLoading} />
				<LoadingText>Please Wait..</LoadingText>
			</View>
		) : (
			<List
				dataArray={articles}
				renderRow={(article) => {
					return <NewsItem data={article} />;
				}}
			/>
		);
		return (
			<Container>
				<Content>{newsLists}</Content>
			</Container>
		);
	}
}

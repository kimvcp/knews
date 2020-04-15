import React, { Component } from "react";
import { Container, Content, List } from "native-base";
import NewsItem from "./NewsItem";
import { getArticles } from "../../service/news";
import { View, ActivityIndicator, Text } from "react-native";
import styled from "styled-components";
import Modal from "./Modal";

const LoadingText = styled.Text`
	margin-top: 10px;
`;

export default class TabItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoading: true,
			articles: null,
			setModalVisible: false,
			modalArticleData: {},
		};
	}

	handleViewPressed = (articleData) => {
		this.setState({ setModalVisible: true, modalArticleData: articleData });
	};

	handleModalClose = () => {
		this.setState({ setModalVisible: false, modalArticleData: {} });
	};

	componentDidMount() {
		const { category } = this.props;
		getArticles(category).then(
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
		const {
			isLoading,
			articles,
			setModalVisible,
			modalArticleData,
		} = this.state;
		let newsLists = isLoading ? (
			<View>
				<ActivityIndicator animating={isLoading} />
				<LoadingText>Please Wait..</LoadingText>
			</View>
		) : (
			<List
				dataArray={articles}
				renderRow={(article) => {
					return <NewsItem onPress={this.handleViewPressed} data={article} />;
				}}
			/>
		);
		return (
			<Container>
				<Content>{newsLists}</Content>
				<Modal
					showModal={setModalVisible}
					articleData={modalArticleData}
					onClose={this.handleModalClose}
				/>
			</Container>
		);
	}
}

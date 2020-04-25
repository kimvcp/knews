import React, { Component } from "react";
import { Container, Content, Text, View } from "native-base";
import { LoadingContainer, Loading } from "../components/NewsContainer";
import { getSavedArticles, deleteArticle } from "../service/news";
import Panel from "../components/NewsPanel";
import SavedNewsItem from "../components/SavedNewsItem";

export default class SavedScreen extends Component {
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

	handleDeletePressed = (articleData) => {
		deleteArticle(articleData, this.callGetSavedArticles);
	};

	handleModalClose = () => {
		this.setState({ setModalVisible: false, modalArticleData: {} });
	};

	callGetSavedArticles = () => {
		this.setState({ isLoading: true });
		getSavedArticles((articles) =>
			this.setState({
				articles,
				isLoading: false,
			})
		);
	};

	componentDidMount() {
		this.callGetSavedArticles();
	}

	// Call when changing tab
	componentWillReceiveProps() {
		this.callGetSavedArticles();
	}

	render() {
		const {
			isLoading,
			articles,
			setModalVisible,
			modalArticleData,
		} = this.state;

		let renderSavedArticleLists = isLoading ? (
			<LoadingContainer>
				<Loading source={require("../../assets/loading.gif")} />
			</LoadingContainer>
		) : articles.length > 0 ? (
			articles.map((article) => (
				<SavedNewsItem
					onViewPress={this.handleViewPressed}
					onDeletePress={this.handleDeletePressed}
					data={article}
				/>
			))
		) : (
			<View style={{ alignItems: "center" }}>
				<Text>There is no saved article</Text>
			</View>
		);
		return (
			<Container style={{ padding: 20 }}>
				<Content>{renderSavedArticleLists}</Content>
				<Panel
					showModal={setModalVisible}
					articleData={modalArticleData}
					onClose={this.handleModalClose}
				/>
			</Container>
		);
	}
}

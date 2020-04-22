import React, { Component } from "react";
import { Container, Content, List } from "native-base";
import NewsItem from "./NewsItem";
import { getArticles, saveArticle } from "../service/news";
import styled from "styled-components";
import Panel from "./Panel";

const LoadingContainer = styled.View`
	flex: 1;
	align-items: center;
	justify-content: center;
	margin-top: 50px;
`;

const Loading = styled.Image`
	width: 100px;
	height: 100px;
`;

export default class NewsContainer extends Component {
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

	handleSavePressed = (articleData) => {
		saveArticle(articleData);
	}

	handleModalClose = () => {
		this.setState({ setModalVisible: false, modalArticleData: {} });
	};

	callGetArticles = (category, countryCode) => {
		this.setState({ isLoading: true });
		getArticles(category, countryCode).then(
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
	};

	componentDidMount() {
		const { category, countryCode } = this.props;
		this.callGetArticles(category, countryCode);
	}

	componentWillReceiveProps(nextProps) {
		const { category, countryCode } = this.props;
		if (
			nextProps.category !== category ||
			nextProps.countryCode !== countryCode
		) {
			this.callGetArticles(nextProps.category, nextProps.countryCode);
		}
	}

	render() {
		const {
			isLoading,
			articles,
			setModalVisible,
			modalArticleData,
		} = this.state;
		let newsLists = isLoading ? (
			<LoadingContainer>
				<Loading source={require("../../assets/loading.gif")} />
			</LoadingContainer>
		) : (
			<List
				dataArray={articles}
				renderRow={(article) => {
					return <NewsItem onViewPress={this.handleViewPressed} onSavePress={this.handleSavePressed} data={article} />;
				}}
			/>
		);
		return (
			<Container>
				<Content>{newsLists}</Content>
				<Panel
					showModal={setModalVisible}
					articleData={modalArticleData}
					onClose={this.handleModalClose}
				/>
			</Container>
		);
	}
}

import React, { Component } from "react";
import { Container, Content, List } from "native-base";
import NewsCards from "./NewsCards";
import { getArticles } from "../service/news";
import styled from "styled-components";
import Modal from "./Modal";

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
		const { category, countryCode } = this.props;
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
				<Loading source={require("../../assets/loading.gif")}/>
			</LoadingContainer>
		) : (
			<List
				dataArray={articles}
				renderRow={(article) => {
					return <NewsCards onPress={this.handleViewPressed} data={article} />;
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

import React, { Component } from "react";
import {
	Container,
	Left,
	Thumbnail,
	Content,
	Card,
	CardItem,
	Text,
	Body,
	View,
} from "native-base";
import { LoadingContainer, Loading } from "../components/NewsContainer";
import NewsItem from "../components/NewsItem";
import { getSavedArticles } from "../service/news";
import TimeAgo from "../components/Time";
import Panel from "../components/Panel";
import { TouchableOpacity } from "react-native-gesture-handler";

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

	componentDidMount() {
		this.setState({ isLoading: true });
		getSavedArticles((articles) =>
			this.setState({
				articles,
				isLoading: false,
			})
		);
	}

	handleModalClose = () => {
		this.setState({ setModalVisible: false, modalArticleData: {} });
	};

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
		) : articles ? (
			articles.map((article) => (
				<TouchableOpacity
					onPress={() =>
						this.setState({
							setModalVisible: true,
							modalArticleData: article,
						})
					}>
					<Card>
						<CardItem>
							<Left>
								<Thumbnail
									square
									source={{
										uri:
											article.urlToImage != null
												? article.urlToImage
												: "https://retohercules.com/images/question-mark-clipart-transparent-background-2.png",
									}}
								/>
							</Left>

							<Body>
								<CardItem header>
									<Text numberOfLines={2}>{article.title}</Text>
								</CardItem>
								<Text numberOfLines={2}>{article.description}</Text>
							</Body>
						</CardItem>

						<CardItem footer>
							<Text note>{article.source.name}</Text>
							<TimeAgo time={article.publishedAt} />
						</CardItem>
					</Card>
				</TouchableOpacity>
			))
		) : (
			<Text>There is no saved articles</Text>
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

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
// import { Container } from "../components/util";
import { LoadingContainer, Loading } from "../components/NewsContainer";
import NewsItem from "../components/NewsItem";
import { getSavedArticles } from "../service/news";
import TimeAgo from "../components/Time";

export default class SavedScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoading: true,
			articles: null,
		};
	}

	componentDidMount() {
		this.setState({ isLoading: true });
		getSavedArticles((articles) =>
			this.setState({ articles, isLoading: false })
		);
	}

	render() {
		const { isLoading, articles } = this.state;

		let renderSavedArticleLists = isLoading ? (
			<LoadingContainer>
				<Loading source={require("../../assets/loading.gif")} />
			</LoadingContainer>
		) : (
			articles.map((article) => (
				<View style={{ flex: 1 }}>
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
				</View>
			))
		);
		return (
			<Container>
				<Content>{renderSavedArticleLists}</Content>
			</Container>
		);
	}
}

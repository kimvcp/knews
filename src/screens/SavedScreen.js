import React, { Component } from "react";
import { Container, Content, List } from "native-base";
import NewsItem from "../components/NewsItem";

export default class SavedScreen extends Component {
	render() {
		return (
			<Container>
				<Content>
					<List>
						<NewsItem />
						<NewsItem />
						<NewsItem />
						<NewsItem />
						<NewsItem />
						<NewsItem />
					</List>
				</Content>
			</Container>
		);
	}
}

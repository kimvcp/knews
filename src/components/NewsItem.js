import React, { Component } from "react";
import {
	ListItem,
	Thumbnail,
	Text,
	Left,
	Body,
	Right,
	Button,
} from "native-base";

export default class NewsItem extends Component {
	render() {
		return (
			<ListItem thumbnail>
				<Left>
					<Thumbnail square source={{ uri: "Image URL" }} />
				</Left>
				<Body>
					<Text>Title</Text>
					<Text note numberOfLines={2}>
						Its time to build a difference . .
					</Text>
				</Body>
				<Right>
					<Button transparent>
						<Text>View</Text>
					</Button>
				</Right>
			</ListItem>
		);
	}
}

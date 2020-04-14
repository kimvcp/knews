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
	constructor(props) {
		super(props);
	}
	render() {
		const { urlToImage, title, description } = this.props.data;
		return (
			<ListItem thumbnail>
				<Left>
					<Thumbnail
						square
						source={{
							uri:
								urlToImage != null
									? urlToImage
									: "https://retohercules.com/images/question-mark-clipart-transparent-background-2.png",
						}}
					/>
				</Left>
				<Body>
					<Text numberOfLines={2}>{title}</Text>
					<Text note numberOfLines={2}>
						{description}
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

import React, { Component } from "react";
import {
	ListItem,
	Left,
	Right,
	Thumbnail,
	Body,
	View,
	Text,
	Button,
} from "native-base";
import TimeAgo from "./Time";

export default class NewsItem extends Component {
	constructor(props) {
		super(props);
	}

	handleViewPressed = () => {
		const { url, title } = this.props.data;
		this.props.onPress({ url, title });
	};

	render() {
		const {
			urlToImage,
			title,
			description,
			source,
			publishedAt,
		} = this.props.data;
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
					<View
						style={{
							flex: 1,
							flexDirection: "row",
							marginTop: 8,
							marginLeft: 0,
						}}>
						<Text note>{source.name}</Text>
						<TimeAgo time={publishedAt} />
					</View>
				</Body>
				<Right>
					<Button transparent onPress={this.handleViewPressed}>
						<Text>View</Text>
					</Button>
				</Right>
			</ListItem>
		);
	}
}

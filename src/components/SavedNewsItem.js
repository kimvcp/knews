import React, { Component } from "react";
import { Left, Thumbnail, Body, Text, Card, CardItem } from "native-base";
import { TouchableOpacity } from "react-native";
import TimeAgo from "./Time";

export default class SavedNewsItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			buttonText: "Save",
		};
	}

	handleViewPressed = () => {
		const { url, title } = this.props.data;
		this.props.onViewPress({ url, title });
	};

	render() {
		const {
			urlToImage,
			title,
			description,
			source,
			publishedAt,
		} = this.props.data;

		const { buttonText } = this.state;

		return (
			<TouchableOpacity onPress={this.handleViewPressed}>
				<Card>
					<CardItem>
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
							<CardItem header>
								<Text numberOfLines={2}>{title}</Text>
							</CardItem>
							<Text numberOfLines={2}>{description}</Text>
						</Body>
					</CardItem>

					<CardItem footer>
						<Text note>{source.name}</Text>
						<TimeAgo time={publishedAt} />
					</CardItem>
				</Card>
			</TouchableOpacity>
		);
	}
}

import React, { Component } from "react";
import {
	View,
	Thumbnail,
	Body,
	Text,
	Card,
	CardItem,
	Button,
} from "native-base";
import { Alert } from "react-native";
import { TouchableOpacity } from "react-native";
import TimeAgo from "./Time";

export default class SavedNewsItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			buttonText: "Delete",
		};
	}

	handleViewPressed = () => {
		const { url, title } = this.props.data;
		this.props.onViewPress({ url, title });
	};

	handleDeletePressed = () => {
		Alert.alert(
			"Are you sure you want to delete?",
			"You won't be able to undo the changes.",
			[
				{
					text: "Cancel",
					style: "cancel",
				},
				{
					text: "Confirm",
					onPress: () => {
						this.setState({ buttonText: "Loading.." });
						this.props.onDeletePress(this.props.data);
					},
				},
			],
			{ cancelable: false }
		);
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
						<Thumbnail
							square
							source={{
								uri:
									urlToImage != null
										? urlToImage
										: "https://retohercules.com/images/question-mark-clipart-transparent-background-2.png",
							}}
						/>
						<Body style={{ marginLeft: 20 }}>
							<Text numberOfLines={2}>{title}</Text>
							<Text note numberOfLines={2}>
								{description}
							</Text>
							<View
								style={{
									flex: 1,
									flexDirection: "row",
									alignItems: "center",
									marginTop: 8,
									marginLeft: 0,
								}}>
								<Text note>{source.name}</Text>
								<TimeAgo time={publishedAt} />
								<Button
									style={{ height: 30 }}
									light
									rounded
									onPress={this.handleDeletePressed}>
									<Text style={{ fontSize: 14, color: "red" }}>
										{buttonText}
									</Text>
								</Button>
							</View>
						</Body>
					</CardItem>
				</Card>
			</TouchableOpacity>
		);
	}
}

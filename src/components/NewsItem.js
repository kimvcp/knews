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
									: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.stickpng.com%2Fimg%2Ficons-logos-emojis%2Fquestion-marks%2Fred-yellow-question-mark&psig=AOvVaw340U_m7L2lNEHr881zg3n0&ust=1586966677689000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMD48Nyl6OgCFQAAAAAdAAAAABAD",
						}}
					/>
				</Left>
				<Body>
					<Text>{title}</Text>
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

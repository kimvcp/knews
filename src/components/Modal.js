import React, { Component } from "react";
import { Dimensions, Modal, Share } from "react-native";
import {
	Container,
	Header,
	Content,
	Body,
	Left,
	Right,
	Title,
	Button,
} from "native-base";
import { WebView } from "react-native-webview";

const webViewHeight = Dimensions.get("window").height - 56;

export default class ModalComponent extends Component {
	constructor(props) {
		super(props);
	}

	handleClose = () => {
		return this.props.onClose();
	};

	handleShare = () => {
		const { url, title } = this.props.articleData;
		message = `${title}\n\nRead More at ${url}\n\nThis article is shared via KNEWS Application`;
		return Share.share(
			{ title, message, url: message },
			{ dialogTitle: `Share ${title}` }
		);
	};

	render() {
		const { showModal, articleData } = this.props;
		if (articleData.url != undefined) {
			return (
				<Modal
					animationType='slide'
					transparent
					visible={showModal}
					onRequestClose={this.handleClose}>
					<Container
						style={{ marginTop: 50, marginHorizontal: 15, marginBottom: 0, backgroundColor: "#fff", borderRadius:"100px" }}>
						<Header style={{ backgroundColor: "#009387" }}>
							<Left>
								<Button onPress={this.handleClose} transparent>
								</Button>
							</Left>
							<Body>
								<Title
									children={articleData.title}
									style={{ color: "white" }}
								/>
							</Body>
							<Right>
								<Button onPress={this.handleShare} transparent>
								</Button>
							</Right>
						</Header>
						<Content contentContainerStyle={{ height: webViewHeight }}>
							<WebView
								source={{ uri: articleData.url }}
								style={{ flex: 1 }}
								onError={this.handleClose}
								startInLoadingState // display loading
								scalesPageToFit
							/>
						</Content>
					</Container>
				</Modal>
			);
		} else {
			return null;
		}
	}
}

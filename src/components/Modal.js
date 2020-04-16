import React, { Component } from "react";
import { Dimensions, Modal, Share, View, Text } from "react-native";
import {
	Container,
	Header,
	Content,
	Body,
	Left,
	Right,
	Title,
	Icon,
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
		if (url && title) {
			message = `${title}\n\nRead More at ${url}\n\nThis article is shared via KNEWS Application`;
			return Share.share(
				{ title, message, url: message },
				{ dialogTitle: `Share ${title}` }
			);
		} else {
			alert("This article cannot be exported");
		}
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
						style={{
							marginTop: 50,
							marginHorizontal: 15,
							marginBottom: 0,
							backgroundColor: "#fff",
						}}>
						<Header
							style={{
								backgroundColor: "#009387",
								borderRadius: 20,
								marginBottom: 10,
							}}>
							<Left>
								<Button onPress={this.handleClose} transparent>
									<Text>Back</Text>
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
									<Text>Send</Text>
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

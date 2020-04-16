import React, { Component } from "react";
import { Dimensions, Modal, Share, Image, Text } from "react-native";
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
import styled from "styled-components";
const webViewHeight = Dimensions.get("window").height - 56;

const Icon = styled.Image`
	width: ${(props) => props.size || 20}px;
	height: ${(props) => props.size || 20}px;
`;

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
						style={{ margin: 15, marginBottom: 0, backgroundColor: "#fff" }}>
						<Header
							style={{
								backgroundColor: "#232f34",
								paddingLeft: 15,
							}}>
							<Left>
								<Button onPress={this.handleClose} transparent>
									<Icon size={15} source={require("../../assets/close.png")} />
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
									<Icon size={27} source={require("../../assets/share.png")} />
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

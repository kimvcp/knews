import React, { Component } from "react";
import { Text, Header, Right, Button } from "native-base";
import { getUser, logout, updateInfo } from "../service/news";
import {
	Container,
	ButtonContainer,
	TextColor,
	showToast,
} from "../components/StyledComponent";
import ProfilePanel from "../components/ProfilePanel";

export default class ProfileScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: null,
			email: null,
			setModalVisible: false,
		};
	}

	componentDidMount = async () => {
		const user = await getUser();
		this.setState({ name: user.displayName, email: user.email });
	};

	onProfileUpdated = (newName, newPassword) => {
		this.setState({
			setModalVisible: false,
			name: newName,
			password: newPassword,
		});
		showToast(null, "Profile has been updated");
	};

	handleModalClose = () => {
		this.setState({ setModalVisible: false });
	};

	handleUpdateInfo = (newName, newPassword, confirmPassword) => {
		if (newPassword === confirmPassword) {
			showToast(null, "Loading..");
			try {
				updateInfo(newName, newPassword, () =>
					this.onProfileUpdated(newName, newPassword)
				);
			} catch (error) {
				showToast(error);
			}
		} else {
			showToast(null, "Password and Confirm Password are not matching");
		}
	};

	render() {
		const { name, email, setModalVisible } = this.state;
		return (
			<Container>
				<Header>
					<Right>
						<Button onPress={() => this.setState({ setModalVisible: true })}>
							<Text>Edit</Text>
						</Button>
					</Right>
				</Header>
				<Text>Name: {name}</Text>
				<Text>Email: {email}</Text>
				<ButtonContainer onPress={logout}>
					<TextColor>SIGN OUT</TextColor>
				</ButtonContainer>
				<ProfilePanel
					showModal={setModalVisible}
					onClose={this.handleModalClose}
					onSubmit={this.handleUpdateInfo}
				/>
			</Container>
		);
	}
}

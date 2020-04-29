import React, { Component } from "react";
import { getUser, logout, updateInfo } from "../service/news";
import { TextColor, showToast } from "../components/StyledComponent";
import ProfilePanel from "../components/ProfilePanel";
import styled from "styled-components";

const Container = styled.View`
	flex: 1;
	align-items: center;
`;

const ButtonContainer = styled.TouchableHighlight`
	height: 45;
	width: 70%;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	border-radius: 30px;
	background-color: ${(props) => props.background || "#344955"};
	margin-horizontal: 10px;
	margin-top: ${(props) => props.marginTop || "15"}px;
`;

const LabelContainer = styled.View`
	margin-top: 30px;
	align-items: flex-start;
`;

const Label = styled.Text`
	margin-top: 20px;
	font-size: 16px;
	font-weight: 400;
`;

const UserImage = styled.Image`
	width: ${(props) => props.size}px;
	height: ${(props) => props.size}px;
	margin-top: 50px;
`;

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
				<UserImage size={200} source={require("../../assets/default-user.png")} />
				<LabelContainer>
					<Label>
						NAME:{"    "}
						{name}
					</Label>
					<Label>
						EMAIL:{"    "}
						{email}
					</Label>
				</LabelContainer>
				<ButtonContainer
					marginTop={50}
					onPress={() => this.setState({ setModalVisible: true })}>
					<TextColor>EDIT</TextColor>
				</ButtonContainer>
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

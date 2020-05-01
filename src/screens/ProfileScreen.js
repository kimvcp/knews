import React, { Component } from "react";
import { getUser, logout, updateInfo } from "../service/news";
import { TextColor, showToast } from "../components/StyledComponent";
import ProfilePanel from "../components/ProfilePanel";
import styled from "styled-components";
import LinearGradient from "react-native-linear-gradient";

const FormContainer = styled.View`
	margin-top: 30px;
	padding-top: 20px;
	padding-horizontal: 50px;
	padding-bottom: 30px;
	border-radius: 30px;
	background-color: white;
`;

const ButtonContainer = styled.TouchableHighlight`
	height: 45;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	border-radius: 30px;
	background-color: ${(props) => props.background || "#344955"};
	margin-horizontal: 10px;
	margin-top: ${(props) => props.marginTop || "20"}px;
`;

const LabelContainer = styled.View`
	align-items: flex-start;
	flex-direction: row;
`;

const Label = styled.Text`
	font-size: 16px;
	font-weight: ${(props) => props.fontWeight || "bold"};
	margin-top: ${(props) => props.marginTop || "20"}px;
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
			updateInfo(newName, newPassword, () =>
				this.onProfileUpdated(newName, newPassword)
			);
		} else {
			showToast(null, "Password and Confirm Password are not matching");
		}
	};

	render() {
		const { name, email, setModalVisible } = this.state;
		return (
			<LinearGradient
				colors={["#FFF", "#C4C4C4"]}
				style={{ flex: 1, alignItems: "center" }}>
				<UserImage
					size={200}
					source={require("../../assets/default-user.png")}
				/>
				<FormContainer>
					<LabelContainer>
						<Label>NAME:{"    "}</Label>
						<Label fontWeight='400'>{name}</Label>
					</LabelContainer>
					<LabelContainer>
						<Label>EMAIL:{"    "}</Label>
						<Label fontWeight='400'>{email}</Label>
					</LabelContainer>
					<ButtonContainer
						marginTop={50}
						onPress={() => this.setState({ setModalVisible: true })}>
						<TextColor>EDIT</TextColor>
					</ButtonContainer>
					<ButtonContainer background={"#B22222"} onPress={logout}>
						<TextColor color={"#F0F0F0"}>SIGN OUT</TextColor>
					</ButtonContainer>
				</FormContainer>
				<ProfilePanel
					showModal={setModalVisible}
					onClose={this.handleModalClose}
					onSubmit={this.handleUpdateInfo}
				/>
			</LinearGradient>
		);
	}
}

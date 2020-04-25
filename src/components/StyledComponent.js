import styled from "styled-components";
import { Toast } from "native-base";

export const Container = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;
`;

export const Background = styled.Image`
	width: 100%;
	height: 100%;
	position: absolute;
	z-index: 0;
`;

export const InputContainer = styled.View`
	height: 45;
	width: 70%;
	border-bottom-color: #f5fcff;
	background-color: #ffffff;
	border-radius: 30px;
	border-bottom-width: 1;
	margin-bottom: ${(props) => props.marginBottom || 20}px;
	flex-direction: row;
	align-items: center;
`;

export const Input = styled.TextInput`
	height: 45;
	margin-left: 16px;
	border-bottom-color: #ffffff;
	flex: 1;
`;

export const Icon = styled.Image`
	width: ${(props) => props.size}px;
	height: ${(props) => props.size}px;
	margin-left: 15px;
	justify-content: center;
`;

export const ButtonContainer = styled.TouchableHighlight`
	height: 45;
	width: 70%;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	border-radius: 30px;
	background-color: ${(props) => props.background || "#344955"};
`;

export const TextColor = styled.Text`
	color: ${(props) => props.color || "#F9AA33"};
`;

export const TextContainer = styled.TouchableOpacity`
	margin-top: 70px;
`;

export const showToast = (error, message) => {
	Toast.show({
		text: error ? error.message : message,
		buttonText: "Okay",
		position: "bottom",
		buttonTextStyle: { color: "white" },
		buttonStyle: { backgroundColor: "#344955" },
	});
};

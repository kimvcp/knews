import { facebook_app_id } from "../config";
import * as Facebook from "expo-facebook";

export const loginFacebook = async () => {
	try {
		const { type, token } = await Facebook.logInWithReadPermissionsAsync(
			facebook_app_id,
			{
				permissions: ["public_profile"],
			}
		);
		if (type === "success") {
			const response = await fetch(
				`https://graph.facebook.com/me?access_token=${token}`
			);
			return response;
		} else {
			alert("Something is wrong !");
		}
	} catch ({ message }) {
		alert(`Facebook Login Error: ${message}`);
	}
};

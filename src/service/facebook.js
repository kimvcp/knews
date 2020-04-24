import { facebook_app_id } from "../config";
import * as Facebook from "expo-facebook";
import auth from "@react-native-firebase/auth";
import { showToast } from "../components/Util";

export const loginFacebook = async () => {
	try {
		const { type, token } = await Facebook.logInWithReadPermissionsAsync(
			facebook_app_id,
			{
				permissions: ["public_profile"],
			}
		);
		if (type === "success") {
			await fetch(`https://graph.facebook.com/me?access_token=${token}`);
			showToast(null, "Loading..");
			// Sign-in the user with the credential
			const facebookCredential = auth.FacebookAuthProvider.credential(token);
			return auth().signInWithCredential(facebookCredential);
		} else {
			showToast(null, "Something is wrong !");
		}
	} catch ({ message }) {
		showToast(null, `Facebook Login Error: ${message}`);
	}
};

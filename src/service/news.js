import { articles_url, api_key } from "../config";
import firestore from "@react-native-firebase/firestore";
import { showToast } from "../components/StyledComponent";
import auth from "@react-native-firebase/auth";

export const getUser = () => {
	return auth().currentUser;
};

export const login = (email, password) => {
	auth()
		.signInWithEmailAndPassword(email, password)
		.catch((error) => {
			showToast(error);
		});
};

export const register = (name, email, password) => {
	auth()
		.createUserWithEmailAndPassword(email, password)
		.then((userCredentials) => {
			if (userCredentials.user)
				userCredentials.user.updateProfile({ displayName: name });
		})
		.catch((error) => {
			showToast(error);
		});
};

export const logout = () => {
	auth()
		.signOut()
		.catch((error) => {
			showToast(error);
		});
};

export const updateInfo = async (newName, newPassword, onUpdateCompleted) => {
	const user = getUser();
	const profile = {
		displayName: newName,
	};
	await user
		.updatePassword(newPassword)
		.then(async () => {
			await user.updateProfile(profile);
			onUpdateCompleted();
		})
		.catch((error) => showToast(error));
};

export const getArticles = async (
	category = "general",
	country_code = "us"
) => {
	try {
		let articles = await fetch(
			`${articles_url}?country=${country_code}&category=${category}`,
			{
				headers: {
					"X-API-KEY": api_key,
				},
			}
		);
		let result = await articles.json();
		articles = null;
		return result.articles;
	} catch (error) {
		throw error;
	}
};

export const getSavedArticles = async (onRetrieveComplete) => {
	const articles = [];
	const user = await getUser();
	if (user) {
		const snapshot = await firestore()
			.collection("Articles")
			.orderBy("createdAt")
			.get();

		snapshot.forEach((documentSnapshot) => {
			if (documentSnapshot.data().userId === user.uid)
				articles.push({
					...documentSnapshot.data(),
					...{ id: documentSnapshot.ref.id },
				});
		});
		onRetrieveComplete(articles);
	}
	return articles;
};

export const saveArticle = (article, onSaveComplete) => {
	const user = getUser();
	if (user) {
		try {
			firestore()
				.collection("Articles")
				.add({
					userId: user.uid,
					title: article.title,
					description: article.description,
					source: article.source,
					publishedAt: article.publishedAt,
					urlToImage: article.urlToImage,
					url: article.url,
					createdAt: firestore.FieldValue.serverTimestamp(),
				})
				.then(() => {
					onSaveComplete();
					showToast(null, "Your article has been saved");
				});
		} catch (error) {
			showToast(error);
		}
	}
};

export function deleteArticle(article, onDeleteComplete) {
	firestore()
		.collection("Articles")
		.doc(article.id)
		.delete()
		.then(() => {
			onDeleteComplete();
			showToast(null, "Your article has been deleted");
		})
		.catch((error) => showToast(error));
}

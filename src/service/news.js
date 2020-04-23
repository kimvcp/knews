import { articles_url, api_key } from "../config";
import firestore from "@react-native-firebase/firestore";
import { showToast } from "../components/util";
import auth from "@react-native-firebase/auth";

export const getUser = () => {
	return auth().currentUser;
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
				articles.push(documentSnapshot.data());
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

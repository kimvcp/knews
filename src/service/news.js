import { articles_url, api_key } from "../config";
import firestore from "@react-native-firebase/firestore";
import { showToast } from "../screens/LoginScreen";

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

export const saveArticle = (article, onSaveComplete) => {
	try {
		firestore()
			.collection("Articles")
			.add({
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
};

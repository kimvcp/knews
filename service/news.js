import {
	articles_url,
	api_key,
	country_code,
} from "../src/config/rest_config";
import axios from "axios";

export const getArticles = async (category='general') => {
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

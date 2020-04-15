import React, { Component } from "react";
import { Text } from "native-base";
import moment from "moment";

export default class Time extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { time } = this.props;
		const timeAgo = moment(time || moment.now()).fromNow();
		return (
			<Text note style={{ marginHorizontal: 10 }}>
				{timeAgo}
			</Text>
		);
	}
}

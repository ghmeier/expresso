import React, { Component } from 'react';

import MessageContent from './MessageContent';

class MessageContentList extends Component {

	render() {
		return (
			<div className="fl w-60 pa4 pa4-ns">
				{this.props.contents && this.props.contents.map((content) =>
					<MessageContent deleteContent={this.props.deleteContent} key={content.id} item={content} />
				)}
				{(!this.props.fetchingContents && this.props.contents.length === 0) && (
					<p>No Content</p>
				)}
				{(this.props.fetchingContents) && (
					<p>Loading...</p>
				)}
			</div>
		)
	}

}


export default MessageContentList;
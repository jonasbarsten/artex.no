import React, {Component} from 'react';

import Quill from 'quill';

export default class Test extends Component {
	componentDidMount() {
		
		this.quill = new Quill('#quill-container', {
			modules: {
				toolbar: [
					['bold', 'italic', 'underline', 'strike'],
					['link', 'blockquote'],
					[{ 'color': [] }, { 'background': [] }],
					[{ 'align': [] }],
					[{ list: 'ordered' }, { list: 'bullet' }]
				]
			},
			placeholder: 'Your motivation ...',
			theme: 'snow'
		});

		this.quill.clipboard.dangerouslyPasteHTML(<p>hello</p>);

	}

	render() {
		return (
			<div id="quill-container">
			</div>
		);
	}
}
import { Component, createRef, RefObject } from 'react'
import sanitizeHtml from 'sanitize-html'
import ContentEditable from 'react-contenteditable'

interface Props {
	html: string
	onChange: (html: string) => void
}

interface State {
	html: string
}

export class NoteContentEditable extends Component<Props, State> {
	contentEditable: RefObject<HTMLDivElement>
	constructor(props: Props) {
		super(props)

		this.state = {
			html: props.html,
		}

		this.contentEditable = createRef()
	}

	componentDidUpdate(prevProps: Props, prevState: State) {
		const htmlChanged = this.props.html !== this.state.html
		if (htmlChanged) {
			this.props.onChange(this.state.html)
		}
	}

	handleChange = (event: any) => {
		console.log(event.target.value)

		const clean = sanitizeHtml(event.target.value, {
			allowedTags: ['div', 'br'],
		})
		this.setState({
			html: clean,
		})
	}

	render() {
		return (
			<div className='relative'>
				{this.state.html.length === 0 && (
					<p className='absolute left-0 text-slate-400'>Type something</p>
				)}
				<ContentEditable
					className='relative z-10 focus:outline-none'
					innerRef={this.contentEditable}
					html={this.state.html}
					onChange={this.handleChange}
				/>
			</div>
		)
	}
}

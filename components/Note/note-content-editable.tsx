import { Component, createRef, RefObject } from 'react'
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
		this.setState({
			html: event.target.value,
		})
	}

	render() {
		return (
			<ContentEditable
				innerRef={this.contentEditable}
				html={this.state.html}
				onChange={this.handleChange}
			/>
		)
	}
}

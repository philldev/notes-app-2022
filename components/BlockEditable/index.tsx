import { Component, createRef, ReactNode, RefObject } from 'react'
import ContentEditable from 'react-contenteditable'
import { generateId } from '../../utils'
import { Block } from '../NoteTabEditable'

interface Props {
	block: Block
	position: number
	addBlock(block: Block): void
	onFocus(block: Block): void
	onBlur(block: Block): void
	updateBlock(block: Block): void
	deleteBlock(block: Block): void
}
interface State {
	html: string
	tag: string
}

export default class BlockEditable extends Component<Props, State> {
	contentEditable: RefObject<HTMLDivElement>
	constructor(props: any) {
		super(props)
		this.state = {
			html: this.props.block.html,
			tag: this.props.block.tag,
		}
		this.contentEditable = createRef()
	}

	handleChange = (e: any) => {
		this.setState({ html: e.target.value })
	}

	componentDidUpdate(prevProps: Props, prevState: State) {
		const htmlChanged = this.props.block.html !== this.state.html
		const tagChanged = this.props.block.tag !== this.state.tag
		if (tagChanged || htmlChanged) {
			this.props.updateBlock({
				id: this.props.block.id,
				html: this.state.html,
				tag: this.state.tag,
			})
		}
	}

	handleKeyDown = (e: any) => {
		if (e.key === 'Enter') {
			e.preventDefault()
			this.props.addBlock({
				tag: 'p',
				html: '',
				id: generateId(),
			})
		} else if (e.key === 'Backspace') {
			if (this.state.html === '') {
				e.preventDefault()
				this.props.deleteBlock(this.props.block)
			}
		}
	}
	handleFocus = () => {
		this.props.onFocus(this.props.block)
	}
	handleBlur = () => {
		this.props.onBlur(this.props.block)
	}

	render(): ReactNode {
		return (
			<ContentEditable
				innerRef={this.contentEditable}
				html={this.state.html}
				onFocus={this.handleFocus}
				onBlur={this.handleBlur}
				onChange={this.handleChange}
				onKeyDown={this.handleKeyDown}
				data-position={this.props.position}
			/>
		)
	}
}

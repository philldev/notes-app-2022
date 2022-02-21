import { useEffect, useState } from 'react'
import { generateId, setCaretToEnd } from '../../utils'
import { usePrevious } from '../../utils/hooks'
import BlockEditable from '../BlockEditable'

export type Block = {
	tag: string
	html: string
	id: string
}

const initialBlock = {
	tag: 'p',
	html: 'test',
	id: generateId(),
}

const NoteTabEditable = () => {
	const [blocks, setBlocks] = useState<Block[]>([initialBlock])
	const [currentBlockId, setCurrentBlockId] = useState<string | null>(null)
	const handleAddBlock = (block: Block) => {
		setBlocks([...blocks, block])
	}
	const handleFocusedBlock = (block: Block) => {
		setCurrentBlockId(block.id)
	}
	const handleBluredBlock = (block: Block) => {
		if (currentBlockId && currentBlockId === block.id) setCurrentBlockId(null)
	}
	const handleUpdateBlock = (block: Block) => {
		setBlocks(blocks.map((b) => (b.id === block.id ? block : b)))
	}
	const handleDeleteBlock = (block: Block) => {
		console.log('delete block', block)

		setBlocks(blocks.filter((b) => b.id !== block.id))
	}
	const addNewBlock = () => {
		handleAddBlock({
			tag: 'p',
			html: '',
			id: generateId(),
		})
	}

	console.log(blocks)

	const prevBlocks = usePrevious(blocks)

	useEffect(() => {
		if (
			prevBlocks &&
			prevBlocks.length + 1 === blocks.length &&
			currentBlockId
		) {
			const nextBlockPosition =
				blocks.map((b) => b.id).indexOf(currentBlockId) + 1 + 1
			const nextBlock = document.querySelector(
				`[data-position="${nextBlockPosition}"]`
			) as HTMLElement | null

			if (nextBlock) {
				nextBlock.focus()
			}
		}
		if (
			prevBlocks &&
			prevBlocks.length - 1 === blocks.length &&
			currentBlockId
		) {
			const prevBlockPosition = prevBlocks
				.map((b) => b.id)
				.indexOf(currentBlockId)
			console.log(prevBlockPosition)

			const prevBlock = document.querySelector(
				`[data-position="${prevBlockPosition}"]`
			) as HTMLElement | null

			if (prevBlock) {
				setCaretToEnd(prevBlock)
			}
		}
	}, [blocks, currentBlockId, prevBlocks])

	return (
		<div className='flex-1 h-full p-4'>
			{blocks.length === 0 && <div onClick={addNewBlock}>Type Something</div>}
			{blocks.map((block) => {
				const position = blocks.map((b) => b.id).indexOf(block.id) + 1
				return (
					<BlockEditable
						position={position}
						key={block.id}
						block={block}
						addBlock={handleAddBlock}
						updateBlock={handleUpdateBlock}
						deleteBlock={handleDeleteBlock}
						onFocus={handleFocusedBlock}
						onBlur={handleBluredBlock}
					/>
				)
			})}
		</div>
	)
}

export default NoteTabEditable

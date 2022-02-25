import { useState } from 'react'
import { generateId } from '../../utils'
import { NoteContentEditable } from './note-content-editable'

interface Note {
	id: string
	title: string
	content: string
}

const Note = () => {
	const [note, setNote] = useState<Note>({
		id: generateId(),
		title: '',
		content: '',
	})
	return (
		<div className='flex-1 p-4'>
			<div className='mb-4'>
				<input
					value={note.title}
					onChange={(event) =>
						setNote({
							...note,
							title: event.target.value,
						})
					}
					className='w-full h-full text-2xl font-bold bg-slate-100 focus:outline-none'
					placeholder='Title'
				/>
			</div>
			<div>
				<NoteContentEditable
					html={note.content}
					onChange={(html) => {
						setNote({
							...note,
							content: html,
						})
					}}
				/>
			</div>
		</div>
	)
}

export default Note

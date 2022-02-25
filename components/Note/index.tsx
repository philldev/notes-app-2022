import { NoteContentEditable } from './note-content-editable'

const Note = () => {
	return (
		<div className='flex-1 p-4'>
			<div className='mb-4'>
				<input
					className='w-full h-full text-2xl font-bold bg-slate-100 focus:outline-none'
					placeholder='Title'
				/>
			</div>
			<div>
				<NoteContentEditable html='' onChange={() => {}} />
			</div>
		</div>
	)
}

export default Note

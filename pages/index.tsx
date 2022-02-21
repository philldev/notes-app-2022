import { RefObject, useCallback, useEffect, useRef, useState } from 'react'
import ContentEditable from 'react-contenteditable'
import { AiOutlineFolderAdd } from 'react-icons/ai'
import NoteTabEditable from '../components/NoteTabEditable'
import { generateId } from '../utils'
import { useRefCallback } from '../utils/hooks'

// notes folder name example
const folders = [
	{
		name: 'notes',
	},
	{
		name: 'todos',
	},
	{
		name: 'projects',
	},
	{
		name: 'work',
	},
]

const Home = () => {
	return (
		<div className='w-screen h-screen overflow-hidden font-light bg-slate-100 text-slate-900'>
			<Sidebar />
			<Main />
		</div>
	)
}

const notes = [
	{
		title: 'Hello World',
	},
	{
		title: 'Hello World',
	},
	{
		title: 'Hello World',
	},
]

const Main = () => {
	return (
		<div className='ml-56 w-auto h-full'>
			<div className='w-full h-full flex'>
				<div className='w-64 h-full border-r border-gray-300 bg-slate-50'>
					<div className='flex flex-col p-4 space-y-2'>
						{notes.map((note, index) => (
							<button
								key={index}
								className='px-4 py-2 w-full space-y-1 flex flex-col text-left bg-gray-100 rounded-md'
							>
								<span className='text-sm'>{note.title}</span>
								<span className='text-xs text-gray-400'>12/12/2022</span>
							</button>
						))}
					</div>
				</div>
				<NoteTabEditable />
			</div>
		</div>
	)
}

const Sidebar = () => {
	return (
		<div className='w-56 fixed inset-y-0 left-0 h-full border-r border-gray-300 bg-slate-50'>
			<div className='flex flex-col space-y-4 py-5 h-full'>
				<div className='font-bold px-4'>NOTES APP</div>
				<Divider />
				<FolderList />
				<Divider />
				<div>
					<div className='flex flex-col px-4'>
						<button className='text-xs font-bold px-2 h-8 bg-transparent border-gray-400  rounded-md w-full flex items-center justify-center border'>
							LOG OUT
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

const FolderList = () => {
	return (
		<div className='px-4 space-y-2 flex-1'>
			<button className='flex items-center justify-between px-4 py-2 w-full h-8 rounded-md bg-transparent border-gray-200 border hover:bg-opacity-90 cursor-pointer'>
				<span className='text-xs font-bold'>+ NEW FOLDER</span>
			</button>
			{folders.map((folder, index) => (
				<button
					key={index}
					className='flex items-center justify-between px-4 py-2 w-full h-8 rounded-md bg-gray-100 hover:bg-opacity-90 cursor-pointer'
				>
					<div className='text-sm'>{folder.name}</div>
				</button>
			))}
		</div>
	)
}

const Divider = () => {
	return (
		<div className='px-4'>
			<hr className='border-t border-gray-300' />
		</div>
	)
}

export default Home

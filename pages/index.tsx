import Note from '../components/Note'

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
		<div className='w-auto h-full ml-56'>
			<div className='flex w-full h-full'>
				<div className='w-64 h-full border-r border-gray-300 bg-slate-50'>
					<div className='flex flex-col p-4 space-y-2'>
						{notes.map((note, index) => (
							<button
								key={index}
								className='flex flex-col w-full px-4 py-2 space-y-1 text-left bg-gray-100 rounded-md'
							>
								<span className='text-sm'>{note.title}</span>
								<span className='text-xs text-gray-400'>12/12/2022</span>
							</button>
						))}
					</div>
				</div>
				<Note />
			</div>
		</div>
	)
}

const Sidebar = () => {
	return (
		<div className='fixed inset-y-0 left-0 w-56 h-full border-r border-gray-300 bg-slate-50'>
			<div className='flex flex-col h-full py-5 space-y-4'>
				<div className='px-4 font-bold'>NOTES APP</div>
				<Divider />
				<FolderList />
				<Divider />
				<div>
					<div className='flex flex-col px-4'>
						<button className='flex items-center justify-center w-full h-8 px-2 text-xs font-bold bg-transparent border border-gray-400 rounded-md'>
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
		<div className='flex-1 px-4 space-y-2'>
			<button className='flex items-center justify-between w-full h-8 px-4 py-2 bg-transparent border border-gray-200 rounded-md cursor-pointer hover:bg-opacity-90'>
				<span className='text-xs font-bold'>+ NEW FOLDER</span>
			</button>
			{folders.map((folder, index) => (
				<button
					key={index}
					className='flex items-center justify-between w-full h-8 px-4 py-2 bg-gray-100 rounded-md cursor-pointer hover:bg-opacity-90'
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

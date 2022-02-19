import { AiOutlineFolderAdd } from 'react-icons/ai'

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
		<div className='w-screen h-screen overflow-hidden font-light'>
			<div className='w-72 fixed inset-y-0 left-0 h-full border-r border-gray-300'>
				<div className='flex flex-col space-y-4 py-5 h-full'>
					<div className='font-bold px-4'>NOTES APP</div>
					<div className='px-4'>
						<hr className='border-t border-gray-300' />
					</div>
					<div className='px-4 space-y-2 flex-1'>
						<div className='flex items-center font-bold text-gray-600 space-x-4'>
							<span className='text-sm'>Folders</span>
						</div>

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
					<div className='px-4'>
						<hr className='border-t border-gray-300' />
					</div>
					<div>
						<div className='flex flex-col px-4'>
							<button className='text-xs font-bold px-2 h-8 bg-transparent border-gray-400  rounded-md w-full flex items-center justify-center border'>
								LOG OUT
							</button>
						</div>
					</div>
				</div>
			</div>
			<div className='ml-70 h-full'></div>
		</div>
	)
}

export default Home

import React from 'react'
import TableData from './TableData'

export default function RepoInfoTable() {
	const dummyData = [
		{
			repoName: 'First Repo',
			creationDate: '12.03',
			lastUpdate: 3,
			size: 13,
			starCount: 3,
		},
		{
			repoName: 'Second Repo',
			creationDate: '04.03',
			lastUpdate: 5,
			size: 103,
			starCount: 13,
		},
		{
			repoName: 'Third Repo',
			creationDate: '04.03',
			lastUpdate: 5,
			size: 103,
			starCount: 13,
		},
		{
			repoName: 'Fourth Repo',
			creationDate: '04.03',
			lastUpdate: 5,
			size: 103,
			starCount: 13,
		},
		{
			repoName: 'Fifth Repo',
			creationDate: '04.03',
			lastUpdate: 5,
			size: 103,
			starCount: 13,
		},
		{
			repoName: 'Sixth Repo',
			creationDate: '04.03',
			lastUpdate: 5,
			size: 103,
			starCount: 13,
		},
		{
			repoName: 'Seventh Repo',
			creationDate: '04.03',
			lastUpdate: 5,
			size: 103,
			starCount: 13,
		},
	]

	return (
		<div className="table w-full">
			<div className="table-caption text-center">Repo info table</div>
			<div className="table-header-group">
				<div className="table-row">
					<div className="table-cell hover:underline cursor-pointer">
						Repo Name
					</div>
					<div className="table-cell hover:underline cursor-pointer">
						Creation Date
					</div>
					<div className="table-cell hover:underline cursor-pointer">
						Last Update
					</div>
					<div className="table-cell hover:underline cursor-pointer">
						Size, MB
					</div>
					<div className="table-cell hover:underline cursor-pointer">
						Star Count
					</div>
					<div className="table-cell">
						Star/Unstar
					</div>
				</div>
			</div>

			<TableData data={dummyData}/>	
			

		</div>
	)

}
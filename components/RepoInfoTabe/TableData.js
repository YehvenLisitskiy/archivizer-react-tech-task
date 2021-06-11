import React from 'react'
import Link from 'next/dist/client/link'

export default function TableData(props) {
	return (
		
		<div className="table-row-group">
			{
				props.data.map(repoInfo => {
					return (<div className="table-row" key={repoInfo.repoName}>
					<div className="table-cell">
						<Link href="/"><a className="hover:underline">{repoInfo.repoName}</a></Link>
						
					</div>
					<div className="table-cell">
						{repoInfo.creationDate}
					</div>
					<div className="table-cell">
						{repoInfo.lastUpdate}
					</div>
					<div className="table-cell">
						{repoInfo.size}
					</div>
					<div className="table-cell">
						{repoInfo.starCount}
					</div>
					<div className="table-cell">
						<button className="hover:underline">Star/Unstar</button>
					</div>
				</div>)
				})
			}
		</div>
	)

}
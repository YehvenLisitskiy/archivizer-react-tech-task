import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { Query } from 'react-apollo'
import gql from 'graphql-tag'

const GET_CURRENT_USER = gql`
  {
    viewer {
      login
      name
      repositories(first: 10) {
        edges {
          node {
            name
          }
        }
      }
    }
  }
`



export const UserInfo = props => (
	<Query query={GET_CURRENT_USER}>
		{
			({ loading, error, data }) => {
				if (loading) return <h4>Loading</h4>
				if (error) console.log(error)
				console.log(data)

				const {
					viewer,
					viewer: {
					  repositories: { edges }
					}
				} = data

				return (
					<div className="w-1/6">
						<Image 
							className="rounded-full w-full"
							src={props.userImageSrc}
							alt="User avatar"
							width="300"
							height="300"
						/>
						<div className="text-center">{viewer.name}</div>
						<div className="text-center">{viewer.login}</div>
						<Link href="/create-new-repo"><a className="mx-auto block text-center hover:underline">Create new repository</a></Link>
					</div>
				)
					
			}
		}
		
      	</Query>
) 

	 

	
	
  
	
	
	
      
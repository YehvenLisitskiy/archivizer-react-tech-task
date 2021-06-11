import Head from 'next/head'
import RepoInfoTable from '../components/RepoInfoTabe/RepoInfoTable'
import { UserInfo } from '../components/UserInfo'


// Repos list page

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
       
        <div className="flex justify-between">
          <UserInfo 
            userImageSrc="/assets/photo_2020-04-04_15-55-50.jpg"
          />
          <div className="w-5/6 pl-10">
            <h1 className="text-center mb-10">
              Github GraphQL API Client
            </h1>
            <RepoInfoTable />
          </div>
        </div>
      
      
      </main>
    </div>
  )
}

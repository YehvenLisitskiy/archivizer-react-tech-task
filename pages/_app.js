import '../styles/index.css'
import { ApolloProvider } from "react-apollo"
import { ApolloClient, InMemoryCache } from 'apollo-boost'
import { HttpLink } from 'apollo-link-http'
import { setContext } from "apollo-link-context";


const httpLink = new HttpLink({ uri: 'https://api.github.com/graphql'})

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      // authorization: `Bearer ${
      //   process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN
      // }`
      
      authorization: `Bearer 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`
    }
  }
})

const link = authLink.concat(httpLink)

const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache()
})

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <div className="container mx-auto my-6">
        <Component {...pageProps} />
      </div>
    </ApolloProvider>
  )
}

export default MyApp
 
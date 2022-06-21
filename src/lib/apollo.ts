import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4o5o3ao0o9d01z729m02eae/master",
  cache: new InMemoryCache(),
});

import router from "./router";
import { createApp, provide,h} from "vue"; //p h graphql
import { DefaultApolloClient } from '@vue/apollo-composable'//app
import { ApolloClient, InMemoryCache } from '@apollo/client/core' //appol
import App from "./App.vue";
import "./index.css";


const cache = new InMemoryCache()

const apolloClient = new ApolloClient({
  cache,
  uri: 'https://countries.trevorblades.com',
})

const app = createApp({
  setup () {
    provide(DefaultApolloClient, apolloClient)
  },

  render: () => h(App),
})

app.use(router).mount('#app');


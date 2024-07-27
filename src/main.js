import { createApp } from 'vue';
import App from './App.vue';
import routes from './routes'

//create App Vue
const app = createApp(App);

//gunakan "router" di Vue dengan plugin "use"
app.use(routes);

app.mount('#app');
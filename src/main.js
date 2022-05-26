import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import ViewUIPlus from 'view-ui-plus'
import 'view-ui-plus/dist/styles/viewuiplus.css'
import ShowAnswerBtn from './components/ShowAnswerBtn.vue'

const app = createApp(App)
window.$app = app
app.component('ShowAnswerBtn', ShowAnswerBtn)
app.use(router)
  .use(ViewUIPlus)
  .mount('#app')

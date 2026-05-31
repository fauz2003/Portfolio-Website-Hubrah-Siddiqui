import { createApp } from 'vue'
import App from './App.vue'
import './styles/global.css'

// Marks that JS is active so [data-reveal] elements can start hidden and be
// animated in. If JS never runs, content stays fully visible (progressive
// enhancement — see global.css).
document.documentElement.classList.add('js')

createApp(App).mount('#app')

import { render } from 'preact'
import App from './app'
import '../public/css/index.css'

render(<App />, document.querySelector('#app') as HTMLElement)
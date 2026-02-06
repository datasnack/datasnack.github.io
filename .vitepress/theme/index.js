import DefaultTheme from 'vitepress/theme'
import './custom.css'
import FigureImage from '../components/FigureImage.vue'
import News from '../layouts/News.vue'

import MyLayout from './MyLayout.vue'
//export default DefaultTheme
export default {
  extends: DefaultTheme,
  // override the Layout with a wrapper component that
  // injects the slots
  Layout: MyLayout,
  enhanceApp({ app }) {
    //app.component('news', News),
    app.component('FigureImage', FigureImage)
  }
}

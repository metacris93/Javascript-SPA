import Home  from '../pages/Home'
import Character from '../pages/Character'

export default {
    '/': Home,
    '/:id': Character,
    'contact': 'Contact'
}
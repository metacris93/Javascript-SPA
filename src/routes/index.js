import Header from '../templates/Header'
import Error404 from '../pages/Error404'
import getHash from '../utils/getHash'
import resolveRoutes from '../utils/resolveRoutes'
import routes from './routes'
import changeTheme from '../utils/changeTheme'

const router = async () => {
    const header = null || document.getElementById('header')
    const content = null || document.getElementById('content')
    header.innerHTML = await Header()
    document.getElementById('theme').addEventListener('click', await changeTheme)
    let hash = getHash()
    let route = await resolveRoutes(hash)
    let render = routes[route] ? routes[route] : Error404
    content.innerHTML = await render()
}
export default router
const Header = () => {
    const view = `
        <div class="Header-main">
            <div class="Header-logo">
                <h1>
                    <a href="/">Rick And Morty</a>
                </h1>
            </div>
            <div class="Header-theme">
                <label class="switch">
                    <input id="theme" type="checkbox" checked>
                    <span class="slider round"></span>
                </label>
            </div>
            <div class="Header-nav">
                <a href="#/about/">About</a>
            </div>
        </div>
    `
    return view
}
export default Header
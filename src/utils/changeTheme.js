const changeTheme = async (evt) => {
    if (evt.target.checked)
    {
        document.documentElement.style.setProperty('--main-background-color', '#f4f4f4');
        document.documentElement.style.setProperty('--main-color', '#3c484e');
        document.documentElement.style.setProperty('--header-color', '#15302C');
        document.documentElement.style.setProperty('--link-color', '#026C86');
        document.documentElement.style.setProperty('--box-shadow-1', '#390000');
        document.documentElement.style.setProperty('--box-shadow-2', '#391b21');
    }
    else
    {
        document.documentElement.style.setProperty('--main-background-color', '#000000');
        document.documentElement.style.setProperty('--main-color', '#ffffff');
        document.documentElement.style.setProperty('--header-color', '#ffffff');
        document.documentElement.style.setProperty('--link-color', '#ffffff');
        document.documentElement.style.setProperty('--box-shadow-1', '#f3eed3');
        document.documentElement.style.setProperty('--box-shadow-2', '#cfccd3');
    }
}
export default changeTheme
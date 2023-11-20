import style from "./Header.module.css"
function Header() {
    return (
        <div className={style.header}>
        <h1 className={style.headerText}> My Personal Finances</h1>
        
        </div>
    )
}

export default Header;
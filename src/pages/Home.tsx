import Revenues from "../components/ Revenues"
import Balance from "../components/Balance"
import Expenses from "../components/Expenses"
import LateralMenu from "../components/LateralMenu"
import Transactions from "../components/Transactions"
import style from "./Home.module.css"
function Home() {
    return(
        <>
        <LateralMenu />
        <Transactions />
        
        
        <div className={style.content}>
        <Revenues />
        <Expenses />
        <Balance />
            
        </div>
        </>
    )
}

export default Home
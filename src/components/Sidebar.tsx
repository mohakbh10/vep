import home from '../assets/dashboard svgs/home.svg'
import arrow from '../assets/dashboard svgs/arrow.svg'
import wallet from '../assets/dashboard svgs/wallet.svg'
import account from '../assets/dashboard svgs/account.svg'
import alert from '../assets/dashboard svgs/alert.svg'
import logo from '../assets/dashboard svgs/logo.svg'
import logout from '../assets/dashboard svgs/logout.svg'

const Sidebar = () => {
    return (
        <div className="flex flex-col items-center py-4 w-[100px] h-screen shadow-lg">
            <div className='mb-12'>
                <img src={logo} alt="Logo" />
            </div>
            <button className="sidebar-button">
                <img src={home} alt="Home"/>
            </button>

            <button className="sidebar-button">
                <img src={arrow} alt="Arrow"/>
            </button>

            <button className="sidebar-button">
                <img src={wallet} alt="Wallet"/>
            </button>

            <button className="sidebar-button">
                <img src={account} alt="Person"/>
            </button>

            <button className="sidebar-button">
                <img src={alert} alt="Alert"/>
            </button>

            <button className="sidebar-button">
                <img src={logout} alt="Logout"/>
            </button>
        </div>
    )
}

export default Sidebar

import home from '../assets/dashboard svgs/home.svg'
import arrow from '../assets/dashboard svgs/arrow.svg'
import wallet from '../assets/dashboard svgs/wallet.svg'
import account from '../assets/dashboard svgs/account.svg'
import alert from '../assets/dashboard svgs/alert.svg'
import logo from '../assets/dashboard svgs/logo.svg'

const Sidebar = () => {
    return (
        <div>
            <div className='absolute top-[24px] left-[34px] w-[31.3px] h-[59px] z-10'>
                <img src={logo} alt="Logo" />
            </div>
            <div className="absolute top-0 left-0 w-[100px] h-[1024px] bg-white shadow-lg">
            <button className="absolute top-[160px] left-[34px] w-[32px] h-[32px]">
                <img src={home} alt="Home"/>
            </button>

            <button className="absolute top-[256px] left-[34px] w-[32px] h-[32px]">
                <img src={arrow} alt="Arrow"/>
            </button>

            <button className="absolute top-[352px] left-[34px] w-[32px] h-[32px]">
                <img src={wallet} alt="Wallet"/>
            </button>

            <button className="absolute top-[448px] left-[34px] w-[32px] h-[32px]">
                <img src={account} alt="Person"/>
            </button>

            <button className="absolute top-[544px] left-[34px] w-[32px] h-[32px]">
                <img src={alert} alt="Alert"/>
            </button>
            </div>
        </div>
    )
}

export default Sidebar

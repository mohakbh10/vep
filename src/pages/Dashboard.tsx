/**import BalCard from '../components/BalCard'
import ActionButtons from '../components/ActionButtons'
import Sidebar from '../components/Sidebar'
import UserProfile from '../components/UserProfile'

const Dashboard = () => {
    return (
        <div>
            <Sidebar />
            <UserProfile/>
            <ActionButtons/>
            <BalCard/>
        </div>
    )
}

export default Dashboard **/
import React from 'react';
import Sidebar from '../components/Sidebar';
import UserProfile from '../components/UserProfile';
import ActionButtons from '../components/ActionButtons';
import SmallCard from '../components/SmallCard';
import bankacc from '../assets/dashboard svgs/bankacc.svg';
import card from '../assets/dashboard svgs/card.svg';
import walleticon from '../assets/dashboard svgs/walleticon.svg';
import transactions from '../assets/dashboard svgs/transactions.svg'
import BalCard from '../components/BalCard';
import makeitrain from '../assets/dashboard svgs/Make It Rain IoT.svg'

const Dashboard: React.FC = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className='flex flex-col'>
        <Sidebar/>
      </div>

      {/* Main Content */}
      <div className="flex flex-col flex-1">
        {/* Header */}
        <header className="bg-white h-16 flex items-center px-7 my-10 justify-between">
          <UserProfile/>    
          <ActionButtons/>    
        </header>

        <main className="flex flex-wrap gap-6 p-6">
          {/* Top Section */}
          <div className="flex flex-wrap justify-around w-full">
            {/* Balance Card */}
            <div className="flex-shrink-0 pr-10">
              <BalCard />
            </div>

            {/* Small Cards Section */}
            <div className="grid grid-cols-2 gap-6 pl-10">
              <SmallCard
                icon={<img src={walleticon} alt="Wallet Icon" />}
                title="Wallet"
                subtitle="USD wallet"
              />
              <SmallCard
                icon={<img src={transactions} alt="Transactions Icon" />}
                title="Transactions"
                subtitle="209 transactions"
              />
              <SmallCard
                icon={<img src={bankacc} alt="Bank Accounts Icon" />}
                title="Banks Accounts"
                subtitle="03 Bank accounts"
              />
              <SmallCard
                icon={<img src={card} alt="Cards Icon" />}
                title="Cards"
                subtitle="03 cards"
              />
            </div>

          </div>

          <div className="flex items-center justify-between px-20 py-10">
            {/* Left Section */}
            <div className="flex flex-col space-y-6 max-w-400">
              {/* Text Content */}
              <p className="text-gray-500 font-raleway font-normal text-sm">
                No transactions yet!!!
              </p>
              <p className="text-gray-700 font-raleway font-normal text-lg leading-relaxed max-w-md py-2">
                Start making payments through Vep and now you can send Invoice also.
              </p>

              {/* Action Buttons */}
              <ActionButtons reverse={true}/>
            </div>

            {/* Right Section */}
            <div className="flex ml-20">
              <img src={makeitrain} alt="Illustration" className="w-[545px] h-auto" />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;


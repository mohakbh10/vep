import ActionButtons from '../components/ActionButtons'
import Sidebar from '../components/Sidebar'
import UserProfile from '../components/UserProfile'

const Dashboard = () => {
    return (
        <div>
            <Sidebar />
            <UserProfile/>
            <ActionButtons/>
        </div>
    )
}

export default Dashboard

import pfp from '../assets/dashboard svgs/pfp.svg'

const UserProfile = () => {
    return (
        <div className="absolute top-[56px] left-[185px] flex items-center space-x-4 w-[249px] h-[60px]">
            {/* Profile Image */}
            <div className="w-[60px] h-[60px] rounded-full bg-gray-400">
            <img 
                src={pfp}
                alt="Profile Picture" 
                className="w-full h-full object-cover"
            />
            </div>
    
            {/* Name and Username */}
            <div>
            <p className="text-[24px] text-gray-800 font-raleway font-normal leading-[28px] py-1">
                Hello, Abhijeet!
            </p>
            <p className="text-[16px] text-gray-80 font-raleway font-extralight leading-[19px]">
                @abhijeeeeeeet
            </p>
            </div>
        </div>
    );
};

export default UserProfile

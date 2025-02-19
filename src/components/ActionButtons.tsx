
const ActionButtons = () => {
    return (
        <div className="flex gap-6 absolute top-14 right-10">
            {/* Send Invoice Button */}
            <button className="flex items-center gap-2 w-[190px] h-[48px] bg-white text-[#BF13BF] border border-[#BF13BF] font-raleway font-semibold size-1 rounded-[15px] px-4">
                <img src="src/assets/dashboard svgs/Fluent Receipt 20 Filled.svg" alt="reciept" className="px-2" />
                Send Invoice
            </button>

            {/* Transfer Button */}
            <button className="flex items-center gap-2 w-[190px] h-[48px] bg-[#BF13BF] text-white font-raleway font-semibold size-1 rounded-[15px] px-4">
                <img src="src/assets/dashboard svgs/Fluent Send Icon.svg" alt="send" className="px-3" />

                Transfer
            </button>
        </div>
    );
};

export default ActionButtons;

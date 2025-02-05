import { useState } from 'react';

const RadioGroup = () => {
    const [selectedOption, setSelectedOption] = useState<string>('Individual');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedOption(e.target.value);
    };

    return (
        <div className="font-raleway mt-4">
            <fieldset className="flex gap-6">
                <div className="flex items-center p-4 border-2 bg-gray-100 rounded-lg">
                    <input
                        type="radio"
                        name="userType"
                        value="Individual"
                        id="Individual"
                        className="w-4 h-4 border-2 border-gray-400 bg-gray-200 checked:bg-gray-400 checked:border-gray-400"
                        checked={selectedOption === 'Individual'}
                        onChange={handleChange}
                    />
                    <label
                        htmlFor="Individual"
                        className="ml-2 text-gray-700 text-sm cursor-pointer"
                    >
                        Individual
                    </label>
                </div>
                <div className="flex items-center p-4 border-2  bg-gray-100 rounded-lg">
                    <input
                        type="radio"
                        name="userType"
                        value="Business"
                        id="Business"
                        className="w-4 h-4 border-2 border-gray-400 bg-gray-200 checked:bg-gray-400 checked:border-gray-400"
                        checked={selectedOption === 'Business'}
                        onChange={handleChange}
                    />
                    <label
                        htmlFor="Business"
                        className="ml-2 text-gray-700 text-sm cursor-pointer"
                    >
                        Business
                    </label>
                </div>
            </fieldset>
        </div>
    );
};

export default RadioGroup;
import { useState } from "react";
import NewIncidentHeader from "../reusable-components/NewIncidentHeader";
import { useNavigate } from 'react-router-dom'
import NewIncidentData from "../db/NewIncidentData";
const StepFour = () => {
    const [incidentAddress, setIncidentAddress] = useState("");
    const [damageDetails, setDamageDetails] = useState("");
    NewIncidentData.location = incidentAddress;

    const searchIcon = (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none" viewBox="0 0 24 24"
            strokeWidth={1.5} stroke="currentColor"
            className="w-4 h-4 text-mid-gray-text"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
        </svg>
    );
    let Navigate = useNavigate()
    const handleClick = () => {
        Navigate("/Location")
    }


    return (
<>
            <NewIncidentHeader title={'Home - Incidents - New Incident'} heading={'New Incident'} progress={100} ButtonTitle={'Finished'} ButtonFun={handleClick} />
        
        <div className="p-6 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-4 text-dark-gray-text">Where’s the incident?</h2>
            <p className="text-sm mb-4 font-[400] text-mid-gray-text max-w-[400px]">
                Enter a GPS, address, or pin point on the map. Try to be as accurate as possible.
            </p>

            {/* Map Container */}
            <div className="relative w-full h-[400px]  mb-4 rounded overflow-hidden">
                <img
                    src="/map.png"
                    alt="Map placeholder"
                    className="w-full h-full object-cover"
                />

                {/* Input 1: Incident Address */}
                <div className="absolute top-4 left-4 w-[260px]">
                    <div className="relative">
                        <input
                            type="text"
                            value={incidentAddress}
                            onChange={(e) => setIncidentAddress(e.target.value)}
                            placeholder="Incident address or GPS"
                            className="pl-9 pr-3 py-3 w-full rounded-md border border-light-border bg-white text-base text-gray-800 shadow-md placeholder:text-mid-gray-text focus:outline-none focus:ring-1 focus:ring-light-border font-[400]"
                        />
                        <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                            {searchIcon}
                        </div>
                    </div>
                </div>

                {/* Input 2: Damage Details */}
                <div className="absolute top-20 left-4 w-[260px]">
                    <div className="relative">
                        <input
                            type="text"
                            value={damageDetails}
                            onChange={(e) => setDamageDetails(e.target.value)}
                            placeholder="Damage details"
                            className="pl-9 pr-3 py-3 w-full rounded-md border border-light-border bg-white text-base text-gray-800 shadow-md placeholder:text-mid-gray-text focus:outline-none focus:ring-1 focus:ring-light-border font-[400]"
                        />
                        <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                            {searchIcon}
                        </div>
                    </div>
                </div>
            </div>


        </div>
</>
    );
};

export default StepFour;

import { useState } from "react";
import NewIncidentHeader from "../reusable-components/NewIncidentHeader";
import { useNavigate } from 'react-router-dom'
import NewIncidentData from "../db/NewIncidentData";

const StepThree = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

console.log(NewIncidentData);
    let Navigate = useNavigate()
    const handleClick = () => {

        Navigate("/Incidents/StepFour")

    }
    NewIncidentData.title = title;
    NewIncidentData.des = description ;
    return (
        <>
            <NewIncidentHeader title={'Home - Incidents - New Incident'} heading={'New Incident'} ButtonTitle={'Next Step'} progress={60} ButtonFun={handleClick} />

            <div className="p-6 max-w-2xl mx-auto mt-10 ">
                <h2 className="text-2xl font-bold text-dark-gray-text mb-1">Let’s give the incident a title?</h2>
                <p className="text-gray-500 mb-4 font-medium">
                    Make a title that will easily identify the incident.
                </p>
                <input
                    type="text"
                    placeholder="Add title here"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full border border-gray-300 p-3 rounded mb-6 bg-gray-100"
                />

                <h2 className="text-2xl font-bold mb-1 text-dark-gray-text">
                    Describe what happened during the incident?
                </h2>
                <p className="text-gray-500 mb-4 font-medium ">
                    Share some information about the incident. The when, where, how.
                </p>
                <textarea
                    placeholder="Type here"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full border border-gray-300 p-3 rounded  bg-gray-100 mb-10"
                    rows={5}
                ></textarea>
            </div>
        </>
    );
}

export default StepThree;
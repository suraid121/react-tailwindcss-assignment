import NewIncidentHeader from "../reusable-components/NewIncidentHeader";
import { useState } from "react";
import IncidentType from "../db/IncidentType";
import { useNavigate } from 'react-router-dom'
import NewIncidentData from "../db/NewIncidentData";
const  StepTwo = ()=> {
      let Navigate = useNavigate()
    const handleClick = () => {
        Navigate("/Incidents/StepThree")
    }

  const [selected, setSelected] = useState("");
  NewIncidentData.src = selected.src;
  return (
<>
    <NewIncidentHeader title={'Home - Incidents - New Incident'} heading={'New Incident'}  ButtonTitle={'Next Step'}  progress={30} ButtonFun={handleClick} />
    <div className="lg:px-40 mt-10 mb-10 px-8">
      <h2 className="text-2xl font-bold mb-4">
        Which of these best describes the incident?
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {IncidentType.map((data, i) => (
          <button
            key={i}
            onClick={() => setSelected(data)}
            className={`flex items-center justify-start gap-2 p-5  border-gray-300 border-2 cursor-pointer rounded-md transition-all  font-medium duration-300 ${selected.text === data.text
              ? "bg-orange-500 text-white"
              : "bg-[#F4F4F4] text-[#707079]"
              } `}
          >
            <img src={data.src} className="invert-100" alt={data.src} />
            <span>{data.text}</span>
          </button>
        ))}
      </div>
    </div>
</>
  );
}

export default StepTwo;
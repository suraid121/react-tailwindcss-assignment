import Button from "./Button";
import { useNavigate } from "react-router-dom";
const NewIncidentHeader = ({ title, heading, progress , ButtonFun , ButtonTitle}) => {
  let a = (progress + '%')
      let Navigate = useNavigate()
    const handleClick = () => {
        Navigate("/Incidents")
    }
  return (
    <section className="flex md:flex-row flex-col flex-wrap items-baseline  md:items-center justify-between gap-6 px-6 py-10 bg-soft-gray-nav-bg  ">


      <div className="flex items-center gap-4 min-w-[250px]">
        <button onClick={handleClick} className="bg-light-gray-bg p-3 rounded-full  border-1 border-gray-300 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="w-6 h-6 text-cross-icon"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="flex flex-col">
          <span className=" text-mid-gray-text">{title}</span>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-dark-gray-text">
            {heading}
          </h3>
        </div>
      </div>

      <section
        style={{
          width: '50vw',
          height: '6px',
          backgroundColor: '#E5E7EB',
          borderRadius: '200px',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            width: a,
            height: '100%',
            backgroundColor: '#F26922',
            borderRadius: '200px',
            transition: 'width 0.3s ease-in-out',
          }}
        ></div>
      </section>



      <div className="flex items-center gap-3 min-w-[200px] justify-end">
        <Button
          title="Back"
          className="bg-light-gray-bg text-mid-gray-text border hover:text-white border-light-border "
          ButtonFun={ ()=> window.history.back()}
        />
        <Button title={ButtonTitle} ButtonFun={ButtonFun} />
      </div>
    </section>
  );
};

export default NewIncidentHeader;

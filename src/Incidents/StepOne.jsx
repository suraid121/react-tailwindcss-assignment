import NewIncidentQuestion from "../db/NewIncidentQuestion";
import Button from "../reusable-components/Button";

const StepOne = () => {
    const steps = [1, 2, 3];
    return (
        <>
            <section className="space-y-6 max-w-lg mx-auto flex flex-col items-center py-15 ">
                <h3 className="text-dark-gray-text font-bold text-3xl">Let’s get started</h3>
                <p className="text-mid-gray-text max-w-[420px] font-light  text-justify">Lorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit gene</p>

                <div className="md:flex items-center justify-center  w-full max-w-md hidden   mx-auto">
                    {steps.map((step, index) => (
                        <div key={index} className={`flex items-center ${index < steps.length - 1 ? "flex-1" : ""}`}>
                            <div className="w-6 h-6 bg-gray-300 rounded-full z-10"></div>
                            {index < steps.length - 1 && (
                                <div className="flex-1 h-1 bg-gray-300 -ml-3"></div>
                            )}
                        </div>
                    ))}
                </div>
                <div>

                </div>
                <div className="flex gap-5 items-center md:flex-row flex-col md:items-start">
                    {
                        NewIncidentQuestion.map((data, i) => (
                            <div key={i} className="bg-[#F4F4F5]  border-1 border-[#E4E4E7] rounded-md px-5 py-6 w-full md:w-[235px] h-[270px] ">
                                <img src={data.src} alt={data.src} />
                                <h4 className="font-bold text-dark-gray-text text-2xl mt-8">{data.title}</h4>
                                <p className="font-[400] text-mid-gray-text mt-8">{data.description}</p>
                            </div>
                        ))
                    }
                </div>
                <Button title={'Get Started'} className={'mt-18'} ></Button>
            </section>
        </>
    )
};
export default StepOne;
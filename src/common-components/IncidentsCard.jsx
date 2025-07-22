import IncidentsData from "../db/IncidentsData";

const IncidentsCard = () => {
    return (
        <section className="flex flex-wrap gap-6 space-y-3 lg:px-20 lg:pt-15 lg:pb-40">
            {IncidentsData.map((data, i) => (
                <div
                    key={i}
                    className="relative w-[280px] max-w-[340px] h-[400px] p-3 grow flex flex-col space-y-2 bg-white shadow rounded-xl mx-auto  xl:mx-1 "
                >
                    <div className="relative">
                        {/* Image */}
                        <img
                            src={data.src}
                            alt={data.title}
                            className="w-full h-auto rounded-lg object-cover"
                        />


                        <div className="absolute top-4 right-4 flex items-center gap-2 bg-white text-deep-dark text-sm font-semibold px-3 py-1 rounded-full shadow-sm">
                            <img
                                src="/blizzard-card.svg"
                                alt="icon"
                                className="w-4 h-4 object-cover"
                            />
                            <span>Blizzard</span>
                        </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl text-dark-gray-text font-semibold">{data.title}</h3>
                    <p className="text-mid-gray-text font-normal">{data.place}</p>
                    <h3 className="text-xl text-dark-gray-text font-medium">{data.price}</h3>
                </div>
            ))}
        </section>
    );
};

export default IncidentsCard;

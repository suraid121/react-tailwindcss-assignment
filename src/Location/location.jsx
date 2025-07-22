import Header from '../reusable-components/Header';
import ActDocCard from '../reusable-components/ActDocCard';
import NewIncidentData from '../db/NewIncidentData';
const Location = () => {
    let Time = new Date();
    let month = Time.getMonth() + 1;
    let year = Time.getFullYear();
    let date = Time.getDate();
    
    
    const LocationData = [
        {
            src: '/building-1.svg',
            title: 'Whitechapel Rd.',
            place: 'Tulare County, Los Angles, CA 23415',
            price: '$1,456,654.00'
        },
        {
            src: '/building-2.svg',
            title: 'Whitechapel Rd.',
            place: 'Tulare County, Los Angles, CA 23415',
            price: '$1,456,654.00'
        },
        {
            src: '/building-1.svg',
            title: 'Whitechapel Rd.',
            place: 'Tulare County, Los Angles, CA 23415',
            price: '$1,456,654.00'
        },
        {
            src: '/building-1.svg',
            title: 'Whitechapel Rd.',
            place: 'Tulare County, Los Angles, CA 23415',
            price: '$1,456,654.00'
        }

    ]
        
    let title = <p>{year}-{month}-{date} {NewIncidentData.title} </p>
    let Heading = <div className='flex items-center gap-2'>
        <img src={NewIncidentData.src} alt={NewIncidentData.src} />
        {title}
    </div>
    return (
        <>
            <Header Title={title } Heading={Heading} ButtonTitle={'+ New Location'} className={'w-40 font-bold'} ButtonFun={ ()=> alert('This is not available at this time')} />

            <section>
                <div className="flex justify-between flex-col-reverse lg:flex-row">
                    <div className="flex flex-col gap-6 px-8 lg:px-20 py-10">
                        <div className='flex flex-col gap-10 border-b-2 pb-10 w-full lg:w-[600px] border-b-light-border'>
                            <div className="flex gap-4">
                                <img src="/location-two.svg" alt="location" />
                                <div>
                                    <p className="text-mid-gray-text text-sm font-medium">Location</p>
                                    <p className="text-dark-gray-text text-2xl font-bold">{NewIncidentData.location}</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <img src="/cost.svg" alt="location" />
                                <div>
                                    <p className="text-mid-gray-text text-sm font-medium">Approx. Cost:</p>
                                    <p className="text-dark-gray-text text-2xl font-bold">$60,607,456.00</p>
                                </div>
                            </div>
                        </div>
                        <div className='border-b-2 pb-10 pt-4 w-full lg:w-[600px] border-b-light-border'>
                            <p className='text-dark-gray-text text-sm font-bold mb-3'>Description</p>
                            <span className='text-base text-mid-gray-text text-wrap font-[400]'>{NewIncidentData.des}</span>
                        </div>
                        <div className='border-b-2 pb-20 pt-4 w-full lg:w-[600px] border-b-light-border'>
                            <div className='flex items-center justify-between'>
                                <p className='text-dark-gray-text text-sm font-bold mb-3'>Location</p>
                                <p className='text-mid-gray-text text-sm font-medium underline underline-offset-2 decoration-mid-gray-text mb-3'>See All</p>
                            </div>
                            <div className='flex flex-wrap gap-4'>
                                {LocationData.map((data, i) => (
                                    <div
                                        key={i}
                                        className="relative w-[180px] max-w-[240px] h-[280px] p-3 grow flex flex-col gap-1 bg-white  "
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
                                                    src="/building-logo.svg"
                                                    alt="icon"
                                                    className="w-4 h-4 object-cover"
                                                />
                                                <span>Blizzard</span>
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <h3 className="text-xl text-dark-gray-text font-bold">{data.title}</h3>
                                        <p className="text-mid-gray-text text-sm font-medium">{data.place}</p>
                                        <h3 className="text-md text-dark-gray-text font-medium">{data.price}</h3>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>


                    <div className='flex flex-col gap-2 px-10 mx-auto py-10'>
                        <p className="text-sm text-mid-gray-text font-medium">Incident Map</p>
                        <img src="/incident-map.svg" alt="incident-map" className='w-auto h-auto object-cover ' />
                        <p className="text-sm text-mid-gray-text font-medium">Start 19.1232, -118.233 End 19.3245, -119.2323</p>
                    </div>
                </div>
            </section>
            <section className=' px-8 lg:px-20 pb-30'>
                <div className='border-b-2 pb-10 space-y-4 pt-4 w-full lg:w-[600px] border-b-light-border '>
                    <div className='flex items-center justify-between'>
                        <p className='text-dark-gray-text text-sm font-bold mb-3'>Activities</p>
                        <p className='text-dark-gray-text text-sm font-medium underline underline-offset-2 decoration-dark-gray-text mb-3 cursor-pointer ' onClick={()=> alert('This is not available at this time')} >See All</p>
                    </div>
                    {Array.from(Array(2).keys()).map((el) => (
                        <ActDocCard key={el} title={'Activity name'} />
                    ))}
                </div>
                <div className=' pb-10 space-y-4 pt-4 w-full lg:w-[600px] '>
                    <div className='flex items-center justify-between'>
                        <p className='text-dark-gray-text text-sm font-bold mb-3'>Documents</p>
                        <p className='text-dark-gray-text text-sm font-medium underline underline-offset-2 cursor-pointer decoration-dark-gray-text mb-3' onClick={()=> alert('This is not available at this time')} >See All</p>
                    </div>
                    {Array.from(Array(2).keys()).map((el) => (
                        <ActDocCard key={el} title={'Document  name'} />
                    ))}
                </div>
            </section>
        </>
    )
};

export default Location;
const ActDocCard = ({heading , title }) => {
    return (
        <>

            <div className=' w-full lg:w-[600px] flex gap-3 items-center  bg-[#f4f4f4] py-4 px-4 rounded-xl'>
                <img src="/building-1.svg" alt="building" className='w-18 h-18 rounded-2xl object-cover' />
                <div className='flex items-start gap-1 flex-col'>
                    <h3 className="text-base text-dark-gray-text font-bold">{title}</h3>
                    <p className="text-mid-gray-text text-sm font-medium">Location name 16.12212, -122.1424</p>
                    <h3 className="text-base text-dark-gray-text font-bold">$1,456,654.00</h3>
                </div>
            </div>
        </>
    )
};

export default ActDocCard;
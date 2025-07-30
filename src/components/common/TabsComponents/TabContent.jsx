import loc from '../../../assets/image/loc.png'
const TabContent = ({tabItem, activeTab}) => {
    return (
        <div className="relative ">
            <div className="w-full">
                <img className="w-full" src={tabItem[activeTab].image} alt="" />
            </div>
            <div className="absolute bottom-3 left-1/2 rounded-3xl -translate-x-1/2  w-[96%] bg-white p-5">
                <div className="flex items-center gap-5">
                    <div className='w-16'>
                        <img className=' w-full' src={loc} alt="" />
                    </div>
                    <p className='max-w-md'>{tabItem[activeTab].address}</p>
                </div>
            </div>
        </div>
    );
};

export default TabContent;
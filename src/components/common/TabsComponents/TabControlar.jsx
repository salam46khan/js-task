import { Button } from "react-scroll";

const TabControlar = ({tabItem, activeTab, setActiveTab}) => {
    return (
        <div className="flex justify-center flex-wrap gap-5">
            {
                tabItem.map((item, index) => (
                <button 
                className={`flex flex-col rounded-2xl  p-2 w-28 h-24  justify-center items-center cursor-pointer ${activeTab === index && 'border bg-[#B0DD1D20] border-[#B0DD1D]'}`}
                key={item.id}
                onClick={()=>setActiveTab(index)}
                >
                    <img className="h-8" src={item.icon} alt="" />
                    <p className="uppercase mt-3 text-[14px] font-bold">{item.city}</p>
                </button>
            ))
            }
        </div>
    );
};

export default TabControlar;
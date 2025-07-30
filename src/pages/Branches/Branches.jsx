import { useState } from "react";
import FormContent from "../../components/common/form/FormContent";
import TabContent from "../../components/common/TabsComponents/TabContent";
import TabControlar from "../../components/common/TabsComponents/TabControlar";

const Branches = () => {

    const [activeTab, setActiveTab] = useState(0);

    const branch = [
        {
            id:1,
            city: "Coimbatore",
            icon: "https://i.ibb.co/WvrTSsd5/addr-1.png",
            address: " (2nd Floor), Pattalamma Temple Rd, Basavangudi, Bangalore, 560004",
            image: 'https://i.ibb.co/FqLK0fTB/map.png'
        },
        {
            id:2,
            city: "chennai",
            icon: "https://i.ibb.co/FbjmtNvN/addr-2.png",
            address: " (2nd Floor), Rain Forest Rd, Chennai, 560004",
            image: 'https://i.ibb.co/FqLK0fTB/map.png'
        },
        {
            id:3,
            city: "hyderabad",
            icon: "https://i.ibb.co/qM97zLsQ/addr-3.png",
            address: " (5nd Floor), Padma Temple Rd, Basavangudi, Hyderabad, 56000",
            image: 'https://i.ibb.co/FqLK0fTB/map.png'
        },
        {
            id:4,
            city: "goa",
            icon: "https://i.ibb.co/23B8MHXZ/addr-4.png",
            address: " (2nd Floor), Pattalamma Temple Rd, Madras, Goa, 560004",
            image: 'https://i.ibb.co/FqLK0fTB/map.png'
        },
        {
            id:5,
            city: "Kochi",
            icon: "https://i.ibb.co/HLhcBPr6/addr-5.png",
            address: " (2nd Floor), Pattalamma Temple Rd, Basavangudi, Bangalore, 560004",
            image: 'https://i.ibb.co/FqLK0fTB/map.png'
        },
        {
            id:6,
            city: "Mumbai",
            icon: "https://i.ibb.co/dwXbmSCQ/addr-6.png",
            address: " (1nd Floor), Bijoy Shoroni Rd, Basavangudi, Mumbai, 560004",
            image: 'https://i.ibb.co/FqLK0fTB/map.png'
        }
    ]
    return (
        <div className='container relative border rounded-3xl border-[#0003]'>
            <div className='flex justify-center relative -translate-y-1/2'>
                <p className='text-center bg-[#B0DD1D] rounded-full py-3 px-8'>Our Branches</p>
            </div>
            <div className='p-2'>
                <div>
                    <TabControlar tabItem={branch} activeTab={activeTab} setActiveTab={setActiveTab} />
                </div>
                <div className="p-2 flex gap-5 mt-5 flex-col md:flex-row">
                    <div className="w-full md:w-2/5">
                        <FormContent />
                    </div>
                    <div className="w-full md:w-3/5">
                        <TabContent tabItem={branch} activeTab={activeTab}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Branches;
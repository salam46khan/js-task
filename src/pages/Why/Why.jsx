
import WhyCard from '../../components/common/WhyCard/WhyCard';
const Why = () => {
    const why = [
        {
            id:1,
            title: "Unmatched Durability with Corrosion-Free Technology",
            text: "Our JF-270 barbed wire features a robust 270 GSM zinc coating, ensuring superior resistance against rust and corrosion. Paired with stainless steel binding wire, our fencing solutions are designed to withstand harsh environmental conditions, offering longevity and reliability.",
            image: 'https://i.ibb.co/d4QKyPgM/why-1.png'
        },
        {
            id: 2,
            title: "Customer-Centric Approach",
            text: "At JF Products, customer satisfaction is paramount. We pride ourselves on delivering timely services, maintaining transparent communication, and ensuring a seamless purchasing experience. Our commitment to excellence is reflected in the positive feedback from our valued clients.",
            image: 'https://i.ibb.co/PvDmz00r/why-2.png'
        },
        {
            id: 3,
            title: "Innovative and Diverse Product Range",
            text: "We offer a wide array of fencing solutions, including Polyhex Mesh, Australian Trellis, and GI Poultry Mesh, catering to various needs from agricultural to residential applications. Our products combine functionality with aesthetic appeal, ensuring both security and style.",
            image: 'https://i.ibb.co/xSVgYhBg/why-3.png'
        }
    ]
    return (
        <div className="container p-3 py-10">
            <div className="text-center">
                <h1 className="text-4xl md:text-[42px] font-medium">Why Us</h1>
                <p className="w-full max-w-2xl mx-auto">
                    We specialize in delivering durable and innovative fencing solutions built to last. With a focus on quality and trust, we help secure spaces across industries and communities.
                </p>
            </div>
            <div className="flex flex-col md:flex-row mt-10 gap-8 md:flex-wrap lg:flex-nowrap items-center md:items-stretch justify-center">

                {
                    why.map(item => <WhyCard key={item.id} why={item}/>)
                }
            </div>
        </div>
    );
};

export default Why;
import { Link } from "react-scroll";
import MyButton from "../MyButton/MyButton";

const Productcard = ({product}) => {
    return (
        <div className="bg-[#F2F4F6] p-2.5 rounded-2xl w-full max-w-[305px] ">
            <div className="h-[220px] rounded-3xl overflow-hidden">
                <img className="h-full w-full object-cover" src={product.image} alt="" />
            </div>
            <div className="p-3">
                <p className="font-semibold py-2">{product.title}</p>
                <p className="text-sm text-[#4e4e4e] pb-8">{product.price}</p>
                <Link to="" className="bg-[#B0DD1D] rounded-full py-2.5 px-8">
                    Shop Now
                </Link>
            </div>
        </div>
    );
};

export default Productcard;
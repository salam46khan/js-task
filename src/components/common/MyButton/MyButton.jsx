import './MyButton.css'
const MyButton = ({btnText}) => {
    return (
        <button className="my-btn py-2.5 md:py-4 px-8">
            <span>{btnText}</span>
        </button>
    );
};

export default MyButton;
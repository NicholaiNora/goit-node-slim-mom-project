import closeButton from "../../assets/closeButton.svg";

const Modal = () => {
  return (
    <div className="bg-[rgba(33,33,33,0.12)] absolute top-0 left-0 w-screen h-screen">
      <div className="w-[672px] p-[62px_82px_82px] bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <button className="absolute top-5 right-5 cursor-pointer">
          <img src={closeButton} />
        </button>
        <h2 className="mb-5 text-[#212121] text-center font-[verdana] text-2xl font-bold">
          Your recommended daily calorie intake is
        </h2>
        <div className="w-72 m-auto">
          <p className="pb-8 border-b-[1px] mb-3 text-[#264061] text-center font-[verdana] text-5xl font-bold">
            2800 <span className="text-sm">ккал</span>
          </p>
          <p className="mb-5 text-[#212121] font-[verdana] text-sm font-bold">
            Foods you should not eat
          </p>
          <ol className="h-28 mb-10 flex flex-col justify-between list-decimal list-inside text-[#9B9FAA] font-[verdana] text-sm font-normal">
            <li>Floor products</li>
            <li>Milk</li>
            <li>Red Meat</li>
            <li>Smoked meats</li>
          </ol>
        </div>
        <button type="submit" className="btn m-auto">
          Start losing weight
        </button>
      </div>
    </div>
  );
};

export default Modal;

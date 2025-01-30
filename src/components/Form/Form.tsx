import Input from "./Input";
import Radio from "./Radio";

const Form = () => {
  const bloodTypes = ["A", "B", "AB", "O"];
  return (
    <div className="w-[608px]">
      <h1 className="mb-16 h-[85px] text-[#212121] font-[verdana] text-[34px] font-bold">
        Calculate your daily calorie intake right now
      </h1>
      <form className="">
        <div className="grid grid-cols-[240px_240px] grid-rows-[40px_40px_40px] gap-x-8 gap-y-10">
          <Input id="height" placeholder="Height" />
          <Input className="row-start-2" id="age" placeholder="Age" />
          <Input
            className="row-start-3"
            id="currentWeight"
            placeholder="Current Weight"
          />  
          <Input id="desiredWeight" placeholder="Desired Weight" />
          <div className="w-60 border-b-[1px] pb-5">
            <p className="text-[#9B9FAA] font-[verdana] tracking-wider text-[14px] font-bold">
              Blood Type *
            </p>
            <ul className="flex gap-7 items-center mt-6">
              {bloodTypes.map((bloodType) => (
                <li key={bloodType}>
                  <Radio id={`type${bloodType}`}>{bloodType}</Radio>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <button type="submit" className="btn mt-14 ml-80">Start losing weight</button>
      </form>
    </div>
  );
};

export default Form;

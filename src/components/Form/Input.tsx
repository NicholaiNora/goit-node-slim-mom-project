type InputProps = {
  id: string;
  placeholder: string;
  className?: string;
};

const Input = ({ id, placeholder, className }: InputProps) => {
  return (
    <>
      <input
        className={`${className} w-60 bg-transparent border-b-[1px] pb-5 outline-none text-[#212121] font-[verdana] tracking-wider placeholder:text-[#9B9FAA] text-[14px] font-bold`}
        type="text"
        id={id}
        name={id}
        placeholder={`${placeholder} *`}
      />
    </>
  );
};

export default Input;

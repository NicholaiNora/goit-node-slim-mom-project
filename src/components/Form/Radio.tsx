type RadioProps = {
  id: string;
  children: string;
};

const Radio = ({ id, children }: RadioProps) => (
  <label className="flex items-center gap-2">
    <input
      type="radio"
      id={id}
      name="bloodType"
      className="
    w-4 h-4 accent-amber-600 
  "
    />
    <span className="text-[#FC842D] font-[verdana] text-[14px] font-bold">
      {children}
    </span>
  </label>
);
export default Radio;

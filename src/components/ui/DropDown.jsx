import { Images } from "../ExplorePage/Images";

export default function DropDown({selectedState, handleChange}) {
  
  return (
    <div className="flex flex-col mb-10">
      <select
        className="w-[25rem] m-auto text-lg px-6 py-2 rounded-lg bg-white" onChange={handleChange}
        defaultValue={selectedState}
        name="state"
        id="state"
      >
        <option value="" disabled>
          Select State
        </option>
        {Images.map((image, index) => {
          return (
            <option key={index} value={image.state}>
              {image.state}
            </option>
          );
        })}
      </select>
    </div>
  );
}

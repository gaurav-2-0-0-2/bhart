export default function ArtCard({ image, artName, state, handleClick}) {
  return (
    <div onClick={handleClick} className="cursor-pointer art-card bg-[#FFFFF0] p-4 flex flex-col gap-3">
      <img
        className="w-[25rem] h-[25rem] object-cover"
        src={image}
        alt={image}
      />
      <div>
        <p className="font-semibold">
          {artName}
        </p>
        <p className="text-sm">
          From <b>{state}</b>
        </p>
      </div>
    </div>
  );
}

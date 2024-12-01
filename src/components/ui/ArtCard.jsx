export default function ArtCard({ link, image, artName, state }) {
  return (
    <div className="art-card p-5 flex flex-col gap-1">
      <img className="w-[25rem] h-[25rem] object-cover"  src={image} alt={image} />
      <div>
        <a href={`${link}`} className="font-semibold">{artName}</a>
        <p className="text-sm">
          From <b>{state}</b>
        </p>
      </div>
    </div>
  );
}

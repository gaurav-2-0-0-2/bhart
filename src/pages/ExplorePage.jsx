import { useState } from "react";
import ArtCard from "../components/ui/ArtCard";
import { Images } from "../components/ExplorePage/Images";
import DropDown from "../components/ui/DropDown";

export default function ExplorePage() {
  const [selectedState, setSelectedState] = useState("");
  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
  };

  const filteredImages = selectedState ? Images.filter(
    (image) => image.state === selectedState,
  ) : Images;

  return (
    <div>
      <DropDown
        selectedState={selectedState}
        handleChange={handleStateChange}
      />
      <div className="flex justify-center">
        <div className="flex flex-wrap m-auto gap-2">
          {filteredImages.length > 0 ? (
            filteredImages.map((image, index) => {
              return (
                <ArtCard
                  key={index}
                  image={image.image_src}
                  artName={image.artName}
                  state={image.state}
                  link={image.link}
                />
              );
            })
          ) : (
            <p>No images available</p>
          )}
        </div>
      </div>
    </div>
  );
}
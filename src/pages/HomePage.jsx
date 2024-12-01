import { MdExplore } from "react-icons/md";

export default function HomePage() { 
  return (
    <div className="flex flex-col gap-6">
      <h1 className="mt-[1rem] text-4xl md:text-6xl mx-auto font-bold">Home Of Folk Indian Arts</h1>
      <div className="bg-[#472D30] mt-10 py-3 px-10 m-auto rounded-md flex text-white font-bold items-center gap-2">
        <MdExplore/> 
        <a className=" " href="/explore">Explore</a>
      </div>
      <p className="text-3xl mt-[2rem] text-justify" >
      India, with its rich cultural diversity, is truly the home of folk Indian arts, where every region showcases its unique artistic traditions deeply rooted in its history, religion, and lifestyle. These folk art forms, passed down through generations, embody the soul of the country’s rural and tribal communities. From the intricate <b>Pattachitra</b> paintings of <b>Odisha</b> to the <b>Warli</b> art of <b>Maharashtra</b>, and the vibrant <b>Madhubani</b> paintings of <b>Bihar</b>, Indian folk arts are diverse and vibrant. Each state, tribe, and village brings its own distinctive style, often utilizing locally available materials like clay, wood, and fabric. These art forms not only serve as a means of storytelling and cultural preservation but also reflect the deep connection between the people and their environment. Folk Indian arts are not just decorative but hold spiritual and social significance, making them an essential part of India's cultural heritage.
      </p> 
    </div>
  )
}

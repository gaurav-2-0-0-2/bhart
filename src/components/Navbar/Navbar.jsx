import { FaGithub } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className="px-4 py-2 flex justify-between bg-[#F7B32B] items-center">
      <a href={"/"}>
        <img width='100' height='100' src={'/logo.svg'} alt={'logo'}/>
      </a> 
      <FaGithub size={30}/>
    </div>
  );
}

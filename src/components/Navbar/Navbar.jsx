import { FaGithub } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className="px-4 py-2 flex justify-between bg-[#FFFFF0] items-center">
      <a href={"/"}>
        <img width='100' height='100' src={'/logo.svg'} alt={'logo'}/>
      </a> 
      <a href={"https://github.com/gaurav-2-0-0-2/bhart"}>
        <FaGithub size={30}/>
      </a> 
    </div>
  );
}

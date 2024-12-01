import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="h-[10rem] bg-[#723D46] text-white  flex">
      {/*links*/}
      <a href={"https://github.com/gaurav-2-0-0-2/bhart"}>
        <FaGithub />
      </a> 
    </div>
  );
}

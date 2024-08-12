import Image from "next/image";

export default function Home() {
  return (
    <div className="container">
    <div className="mx-auto px-[9.375rem] z-10 relative">
    <div className="profile">
      <nav className="flex justify-between p-4 gap-5 items-center text-white">
        <div className="logo text-[2rem]">DREAM</div>
        <ul className="nav flex justify-center gap-5">
          <li className="text-[1rem]">Home</li>
          <li className="text-[1rem]">About</li>
          <li className="text-[1rem]">Skill</li>
          <li className="text-[1rem]">Contact</li>
          <li className="text-[1rem]">Experience</li>
        </ul>
      </nav>
      </div>
    </div>
    <svg className="bgs w-full absolute top-[-18rem] right-[-7rem] z-0" viewBox="0 0 1426 789" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1386.13 613.842C1165.63 647.342 991 817.5 664 784.5C488.5 760 0.13489 525.791 0.13489 235.842C0.13489 -54.1077 -21.8381 4.94752 495.1 4.94752C1012.04 4.94752 1583 147.5 1386.13 613.842Z" fill="#A91D3A"/>
</svg>

    </div>
  );
}

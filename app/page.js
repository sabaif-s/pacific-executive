import Image from "next/image";
import Home from "@/components/Home";
import HomeSecondSection from "@/components/HomeSecond";
import HomeThirdSection from "@/components/HomeThirdSection";
import OurTeam from "@/components/OurTeam";

export default function Page() {
  return (
    <div className="flex flex-col">
    <div className="w-full h-screen relative" >
    <Home/>
    </div>
    <HomeSecondSection/>
    <HomeThirdSection/>
    <OurTeam/>
     </div>
  );
}


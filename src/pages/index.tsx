import { Nunito } from "next/font/google";
import Section1 from "@/components/home/section1";
import Section2 from "@/components/home/section2";
import Section3 from "@/components/home/section3";

const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito",
});

export default function HomePage() {
  return (
    <div className={`${nunito.variable} font-nunito min-h-screen w-full overflow-x-hidden p-2`}>

      <Section1 />
      <Section2 />
      {/* <Section3 /> */}
  
    </div>
  );
}

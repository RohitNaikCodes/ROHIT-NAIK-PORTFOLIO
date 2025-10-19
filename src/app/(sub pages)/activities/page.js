import Image from "next/image";
import bg from "../../../../public/background/about-background.png";
import Activities from "@/components/activities";

export const metadata = {
  title: "Extracurricular Activities",
};

export default function ActivitiesPage() {
  return (
    <>
      <Image
        src={bg}
        priority
        sizes="100vw"
        alt="Activities page background"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50"
      />

      <div className="relative w-full min-h-screen">
        <div className="absolute w-full top-8 sm:top-16 px-4">
          <h1 className="font-bold text-4xl sm:text-5xl lg:text-6xl text-accent text-center mb-4">
            Extracurricular Activities
          </h1>
          <p className="text-foreground text-center text-lg mb-12">
            Programs, competitions, and events I have participated in
          </p>
          <Activities />
        </div>
      </div>
    </>
  );
}
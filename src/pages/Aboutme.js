import Navigation from "../components/Navigation";
import "./aboutme.css";

const Aboutme = () => {
  return (
    <>
      <div className="h-screen w-screen bg-slate-500">
        <Navigation />

        <div className="container mx-auto grid grid-rows pt-5 h-5/6 w-5/6 sm:flex sm:pt-20">
          <img
            className="myself rounded-lgn mx-auto shadow-lg  rounded-md border-black shadow-black"
            src="image.png"
            alt="myself"
          />
          <div className="w-1/2 sm:py-24">
            <h1 className="font-bold text-md text-white  sm:text-3xl ">
              I'm Manas,a BTech first year student who just loves to code.
            </h1>
            <p className="font-bold text-sm text-white mt-6 sm:text-xl">
              Strated with python in school then I shifted to Java and currently
              learnig MERN stack.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutme;

import useScrollAnimation from '../hooks/useScrollAnimation';
import myImage from "../assets/my_image.png";

function Home() {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section
      id="home"
      ref={ref}
      className={`pt-[100px] bg-[#2b2c2c] transition-all duration-700 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
    >
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 items-center">
        <div className="pt-[65px]">
          <h2 className="text-white text-[50px] font-bold">I'm Naing Lynn Aung</h2>
          <h4 className="text-[#cccccc] text-[17px] mt-2">Web Developer</h4>
          <div className="mt-[50px] h-[70px]">
            <a
              href="#contact"
              className="w-[230px] h-full flex justify-center items-center text-[20px] font-semibold bg-yellow-500 text-white rounded hover:bg-yellow-600 transition-all duration-300"
            >
              Hire Me
            </a>
          </div>
        </div>
        <div className="pt-5 md:pt-0">
          <img src={myImage} alt="Naing Lynn Aung" className="w-full rounded-md shadow-lg" />
        </div>
      </div>
    </section>

  );
}

export default Home;
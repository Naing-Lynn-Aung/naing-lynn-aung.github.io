import useScrollAnimation from '../hooks/useScrollAnimation';
import myCv from "../assets/NaingLynnAung.pdf";

function About() {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section
      id="about"
      ref={ref}
      className={`py-[100px] bg-[#303030] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
    >
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <h3 className="text-[#cccccc] text-[32px] md:text-[50px] font-bold relative
          before:absolute before:bottom-[-10px] before:left-0 before:h-[4px] before:w-1/2 before:bg-yellow-400">
          About Me
        </h3>
        <div>
          <p className="text-[#cccccc] text-[17px] mb-4">
            I am a passionate Ruby on Rails developer with a strong focus on creating efficient and reliable web applications. Since starting my web development journey in July 2022, I have advanced from Junior to Senior Developer through continuous learning and problem-solving. As a 5th-year student of electronic and communication engineering at the Technological University in Maubin, Ayeyarwady, my academic background has strengthened my problem-solving and technical skills. Although I could not graduate due to the challenges of COVID-19, I continue to pursue learning opportunities to enhance my expertise.
          </p>
          <p className="text-[#cccccc] text-[17px] mb-4">
            I thrive in collaborative environments, value open communication, and enjoy mentoring junior developers. My goal is to deliver high-quality software solutions and drive innovation. Let's connect and achieve excellence together!
          </p>
          <a href={myCv} download className="w-[230px] h-[70px] border border-yellow-400 text-yellow-400 text-[20px] font-semibold flex justify-center items-center rounded hover:bg-yellow-400 hover:text-white transition-all duration-300">
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
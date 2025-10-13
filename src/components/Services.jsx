import useScrollAnimation from '../hooks/useScrollAnimation';

function Services() {
  const [ref, isVisible] = useScrollAnimation();
  const services = [
    {
      title: "Backend Development",
      desc: "Experienced in Ruby on Rails and MERN stack for building secure and scalable backend systems with authentication and API integrations.",
    },
    {
      title: "Frontend Development",
      desc: "Proficient React for creating responsive, user-friendly interfaces with smooth animations.",
    },
    {
      title: "Debugging & Maintenance",
      desc: "Strong focus on fixing bugs, optimizing code, and ensuring stability across web applications.",
    },
  ];

  return (
    <section
      id="services"
      ref={ref}
      className={`py-[100px] bg-[#2b2c2c] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
    >
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h3 className="text-[#cccccc] text-[32px] md:text-[50px] font-bold text-center mb-8 relative
          before:absolute before:bottom-[-10px] before:left-1/2 before:translate-x-[-50%]
          before:h-[4px] before:w-[80px] md:before:w-[100px] before:bg-yellow-400">
          Services
        </h3>
        <p className="text-[#cccccc] text-[17px] mt-8 max-w-3xl mx-auto">
          I'm a web developer specializing in Ruby on Rails and MERN stack, offering custom solutions to help you build and maintain efficient, scalable web applications. Whether you need a complete web app or a simple solution, I can bring your ideas to life.
        </p>
        <div className="grid md:grid-cols-3 gap-8 mt-5">
          {services.map((service, index) => (
            <div key={index} className="bg-[#2b2c2c] p-6 rounded-lg border border-[#444] hover:border-yellow-400 transition-all duration-300 hover:scale-[1.02]">
              <h4 className="text-white text-xl font-semibold mb-2">{service.title}</h4>
              <p className="text-[#cccccc] mb-4">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;

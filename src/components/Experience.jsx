import useScrollAnimation from '../hooks/useScrollAnimation';

const experiences = [
  {
    role: 'Senior Web Developer',
    company: 'Previous Role',
    year: '2024 April - 2024 Sep',
    desc: 'Maintaining and improving web applications using Ruby on Rails and Vue.js. Focused on bug fixing, code optimization, and adding small features.',
  },
  {
    role: 'Junior Web Developer',
    company: 'Previous Role',
    year: '2022 July - 2024 March',
    desc: 'Worked on backend features, authentication systems with Devise, and integrated third-party APIs to enhance platform capabilities.',
  },
];

function Experiences() {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section
      id="experiences"
      ref={ref}
      className={`py-[100px] bg-[#303030] transition-all duration-700 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-[#cccccc] text-[32px] md:text-[50px] font-bold text-center mb-8 relative
          before:absolute before:bottom-[-10px] before:left-1/2 before:translate-x-[-50%]
          before:h-[4px] before:w-[80px] md:before:w-[100px] before:bg-yellow-400">
          Work Experiences
        </h3>
        <p className="text-[#cccccc] text-[17px] text-center max-w-3xl mx-auto mb-12">
          Experienced in web design and development, I have contributed to various projects that enhance user experience and functionality. My work focuses on creating visually appealing designs and building efficient, responsive websites.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-[#2b2c2c]/70 backdrop-blur-md p-6 rounded-lg border border-[#444] hover:scale-[1.02] transition-transform duration-300 hover:border-yellow-400 ">
              <h4 className="text-xl font-bold text-white">{exp.role}</h4>
              <p className="text-sm text-yellow-400">{exp.company} • {exp.year}</p>
              <p className="text-[#cccccc] mt-2">{exp.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experiences;
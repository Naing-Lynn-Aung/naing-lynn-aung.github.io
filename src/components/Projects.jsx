import useScrollAnimation from '../hooks/useScrollAnimation';

function Projects() {
  const [ref, isVisible] = useScrollAnimation();
  const projects = [
    {
      title: 'AI Image Generator',
      tech: 'Node.js, Tailwind, Hugging Face API',
      desc: 'A web app that lets users generate images using free AI APIs. Includes upload preview, prompt refinement, and download flow.',
      link: 'https://ai-image-generate-tan.vercel.app',
    },
    {
      title: 'Web UiExpert Showcase',
      tech: 'HTML, CSS, JavaScript, Bootstrap',
      desc: 'A responsive UI/UX showcase site featuring service sections, blog previews, and animated SVG elements. Focused on layout, color harmony, and user interaction.',
      link: 'https://nainglynnaung9925.github.io/My-Project',
    },
  ];

  return (
    <section
      id="projects"
      ref={ref}
      className={`py-[100px] bg-[#303030] transition-all duration-700 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-[#cccccc] text-[32px] md:text-[50px] font-bold text-center mb-8 relative
          before:absolute before:bottom-[-10px] before:left-1/2 before:translate-x-[-50%]
          before:h-[4px] before:w-[80px] md:before:w-[100px] before:bg-yellow-400">
          Projects
        </h3>
        <p className="text-[#cccccc] text-[17px] text-center max-w-3xl mx-auto mb-12">
          Here are some of the projects I've built to solve real-world problems and explore new technologies.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-[#2b2c2c] p-6 rounded-lg border border-[#444] hover:border-yellow-400
              transition-all duration-300 hover:scale-[1.02]">
              <h4 className="text-white text-xl font-semibold mb-2">{project.title}</h4>
              <p className="text-yellow-400 text-sm mb-2">{project.tech}</p>
              <p className="text-[#cccccc] mb-4">{project.desc}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-yellow-400 hover:text-white border border-yellow-400 px-4 py-2 rounded transition-all duration-300"
              >
                View Demo
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
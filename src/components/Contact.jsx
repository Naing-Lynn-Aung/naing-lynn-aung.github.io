import { FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { FiPhone } from 'react-icons/fi';
import useScrollAnimation from '../hooks/useScrollAnimation';

function Contact() {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section
      id="contact"
      ref={ref}
      className={`py-[100px] bg-[#1a1a1a] text-[#cccccc] min-h-screen flex items-center justify-center transition-all duration-700 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
    >
      <div className="max-w-6xl w-full px-6 text-center">
        <h3 className="text-[#cccccc] text-[32px] md:text-[50px] font-bold text-center mb-8 relative
          before:absolute before:bottom-[-10px] before:left-1/2 before:translate-x-[-50%]
          before:h-[4px] before:w-[80px] md:before:w-[100px] before:bg-yellow-400">
          Contact Me
        </h3>
        <p className="text-[#999999] text-lg mb-10">
          I'm always open to new opportunities, collaborations, or just a friendly hello. Reach out, connect, or explore my work!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 text-left">
          {/* Contact Info */}
          <div className="md:col-span-4 space-y-6">
            <h3 className="text-white text-2xl font-semibold mb-4">Contact Info</h3>
            <p className="text-[#999999] mb-2 flex">
              <FaMapMarkerAlt className="text-[#6c757d] w-5 h-5" />
              <span className='pl-3'>Chiang Mai, Thailand</span>
            </p>
            <p className="text-[#999999] mb-2 flex">
              <MdEmail className="text-[#6c757d] w-5 h-5" />
              <a href="mailto:nainglynnaung25799@gmail.com" className="hover:text-yellow-400 transition pl-3">nainglynnaung25799@gmail.com</a>
            </p>
            <p className="text-[#999999] mb-6 flex">
              <FiPhone className="text-[#6c757d] w-5 h-5" />
              <span className='pl-3'>+66 950 020 420</span>
            </p>

            <h5 className="text-white mb-2">Follow Me</h5>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/in/nainglynnaung" target="_blank" rel="noopener noreferrer" className="text-[#cccccc] hover:text-yellow-400 transition">
                <FaLinkedin className="text-[#cccccc] w-7 h-7" />
              </a>
              <a href="https://github.com/Naing-Lynn-Aung" target="_blank" rel="noopener noreferrer" className="text-[#cccccc] hover:text-yellow-400 transition">
                <FaGithub className="text-[#cccccc] w-7 h-7" />
              </a>
            </div>
          </div>

          {/* Message */}
          <div className='md:col-span-8'>
            <h3 className="text-white text-2xl font-semibold mb-4">Let's Talk</h3>
            <p className="text-[#6c757d] text-[17px] leading-relaxed">
              I believe that great things happen when people connect and collaborate. Whether you're looking for a passionate developer to join your project, seeking guidance on web technologies, or simply want to say hello, I'm excited to hear from you.
              <br /><br />
              Over the years, I've worked on a variety of projects ranging from web development to software solutions. I enjoy solving challenging problems, exploring new technologies, and building solutions that make a difference.
              <br /><br />
              Don't hesitate to reach out! You can contact me directly via email, connect with me on LinkedIn, or check out my GitHub for examples of my work. Let's create something amazing together.
              <br /> <br />
              Thank you for visiting my portfolio, and I look forward to connecting with you soon.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
import { useEffect } from 'react';

function ScrollHandler() {
  useEffect(() => {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');

    const setActiveLink = (id) => {
      navLinks.forEach((link) => link.classList.remove('text-yellow-400', 'before:w-[65%]'));
      const activeLink = document.querySelector(`.nav-link[href="#${id}"]`);
      if (activeLink) activeLink.classList.add('text-yellow-400', 'before:w-[65%]');
    };

    const onScroll = () => {
      const top = window.scrollY;
      sections.forEach((sec) => {
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');
        if (top >= offset && top < offset + height) {
          setActiveLink(id);
        }
      });
    };
    setActiveLink('home');

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return null;
}

export default ScrollHandler;
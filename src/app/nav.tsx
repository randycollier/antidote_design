import Link from 'next/link';
const Nav = () => {

    return (<nav className="nav" aria-label="Primary">
        <div className="nav__inner">
          <a className="brand" href="#">
            <span className="brand__logo" aria-hidden="true"></span>
            <span className="brand__text">Antidote Design</span>
          </a>
      
          <div className="nav__links" role="menubar" aria-label="Primary">
            <Link href="/flashcards">Flashcards</Link>
            {/* <a role="menuitem" href="#work">Work</a>
            <a role="menuitem" href="#services">Services</a>
            <a role="menuitem" href="#about">About</a>
            <a role="menuitem" href="#blog">Blog</a> */}
          </div>
      
       
          <input type="checkbox" id="menu-toggle" aria-hidden="true" />
          <label htmlFor="menu-toggle" className="hamburger" aria-label="Toggle navigation" aria-controls="mobile-menu" aria-expanded="false">
            <span aria-hidden="true"></span>
          </label>
      
      
          <div id="mobile-menu" className="menu" role="dialog" aria-modal="false" aria-label="Mobile">
            <div className="menu__panel">
              <a href="#work">Work</a>
              <a href="#services">Services</a>
              <a href="#about">About</a>
              <a href="#blog">Blog</a>
              <a className="btn btn--accent" href="#contact">Start a Project</a>
            </div>
          </div>
      
      
          <a className="btn btn--accent" href="#contact">Start a Project</a>
        </div>
      </nav>
      );
};

export default Nav;
import type { MetaFunction } from '@remix-run/node';
import { Link } from '@remix-run/react';

export const meta: MetaFunction = () => {
  return [
    { title: 'Carlos Mertens | Software Engineer' },
    {
      name: 'description',
      content:
        "I'm dedicated to harnessing the power of JavaScript to build innovative and impactful digital solutions.",
    },
  ];
};

const text = {
  h1: {
    name: 'carlos mertens',
    title: 'software engineer',
  },
  nav: {
    link_to_about: 'about',
    link_to_skills: 'skills',
    link_to_experience: 'experience',
    link_to_education: 'education',
    link_to_projects: 'projects',
  },
  section: {
    about: {
      title: 'about',
      paragraph:
        "I'm a passionate JavaScript developer with a strong knack for turning ideas into dynamic web applications. Whether it's crafting intuitive user interfaces or architecting server-side logic, I'm dedicated to harnessing the power of JavaScript to build innovative and impactful digital solutions.",
    },
  },
};

export default function Index() {
  return (
    <div className='grid gap-16 my-0 mx-auto max-w-7xl'>
      <Link to='#' className='scroll-up'>
        <i className='fa-solid fa-circle-up'></i>
      </Link>
      <header className='header'>
        <div className='header__intro'>
          <h1
            data-aos='fade-down-right'
            className='tracking-wider uppercase text-center'>
            {text.h1.name}
            <span>{text.h1.title}</span>
          </h1>
        </div>

        <nav className='header__nav'>
          <ul>
            <li className='header__nav_link'>
              <Link to='#about-section'>
                <i className='fa-solid fa-arrow-right'></i>
                {text.nav.link_to_about}
              </Link>
            </li>
            <li className='header__nav_link'>
              <Link to='#skills-section'>
                <i className='fa-solid fa-arrow-right'></i>
                {text.nav.link_to_skills}
              </Link>
            </li>
            <li className='header__nav_link'>
              <Link to='#experience-section'>
                <i className='fa-solid fa-arrow-right'></i>
                {text.nav.link_to_experience}
              </Link>
            </li>
            <li className='header__nav_link'>
              <Link to='#education-section'>
                <i className='fa-solid fa-arrow-right'></i>
                {text.nav.link_to_education}
              </Link>
            </li>
            <li className='header__nav_link'>
              <Link to='#projects-section'>
                <i className='fa-solid fa-arrow-right'></i>
                {text.nav.link_to_projects}
              </Link>
            </li>
          </ul>
        </nav>

        <ul className='header__contacts'>
          <li>
            <a
              href='https://github.com/carlosmertens'
              target='_blank'
              rel='noopener noreferrer'
              title='Go to my GitHub profile...'>
              <i className='fa-brands fa-github'></i>
            </a>
          </li>
          <li>
            <a
              href='https://www.linkedin.com/in/carlosmertens/'
              target='_blank'
              rel='noopener noreferrer'
              title='Go to my LindeIn profile...'>
              <i className='fa-brands fa-linkedin'></i>
            </a>
          </li>
          <li>
            <a
              href='mailto:mertenscarlos@yahoo.com'
              title='Send me an email...'>
              <i className='fa-solid fa-envelope'></i>
            </a>
          </li>
          <li>
            <a
              href='assets/my-CV.pdf'
              download
              title='Download my CV (Resume)...'>
              <i className='fa-solid fa-file-pdf'></i>
            </a>
          </li>
        </ul>
      </header>
      <div className='lg-left'>
        <main className='main'>
          <section id='about-section'>
            <h2 className='tracking-wider uppercase text-center'>
              {text.section.about.title}
            </h2>
            <div>
              <figure>
                <img
                  src='assets/images/carlos.jpeg'
                  alt='Carlos Mertens profile'
                  className='about__img'
                />
              </figure>

              <p className='about__paragraph'>{text.section.about.paragraph}</p>
            </div>
          </section>

          <section id='skills-section'>
            <h2 className='tracking-wider uppercase text-center'>Skills</h2>
            <div className='section__content'>
              <div className='card'>
                <h3 className='text-center'>Soft skills</h3>
                <ul className='badge__list'>
                  <li className='badge'>Team Work</li>
                  <li className='badge'>problem solving</li>
                  <li className='badge'>Customer satisfaction</li>
                  <li className='badge'>Positive Attitude</li>
                  <li className='badge'>Motivator</li>
                </ul>
              </div>

              <div className='card'>
                <h3 className='text-center'>Tech Skills</h3>
                <ul className='badge__list'>
                  <li className='badge'>HTML5</li>
                  <li className='badge'>CSS3</li>
                  <li className='badge'>JavaScript</li>
                  <li className='badge'>React js</li>
                  <li className='badge'>TypeScript</li>
                  <li className='badge'>Node js</li>
                  <li className='badge'>Express js</li>
                  <li className='badge'>Git</li>
                </ul>
              </div>

              <div className='card'>
                <h3 className='text-center'>Languages</h3>
                <ul className='badge__list'>
                  <li className='badge'>Spanish</li>
                  <li className='badge'>English</li>
                  <li className='badge'>German</li>
                </ul>
              </div>
            </div>
          </section>

          <section id='experience-section'>
            <h2 className='tracking-wider uppercase text-center'>Experience</h2>
            <div className='section__content'>
              <a
                href='http://carmasuss.com'
                target='_blank'
                rel='noopener noreferrer'
                className='card__link'>
                <div className='card'>
                  <h3 className='text-center'>CarMa s&uuml;&#223;</h3>
                  <p className='card__date'>
                    <time dateTime='2023-06'>June 2023</time> - Current
                  </p>
                  <ul className='card__list'>
                    <li>
                      <i className='fa-solid fa-check'></i>Co-founder
                    </li>
                    <li>
                      <i className='fa-solid fa-check'></i>Develop website
                    </li>
                    <li>
                      <i className='fa-solid fa-check'></i>Maintain website
                    </li>
                    <li>
                      <i className='fa-solid fa-check'></i>Create content
                    </li>
                    <li>
                      <i className='fa-solid fa-check'></i>Balance the books
                    </li>
                  </ul>
                  <ul className='badge__list'>
                    <li className='badge'>react js</li>
                    <li className='badge'>next js</li>
                  </ul>
                </div>
              </a>

              <a
                href='http://daxparts.com'
                target='_blank'
                rel='noopener noreferrer'
                className='card__link'>
                <div className='card'>
                  <h3 className='text-center'>Dax Parts</h3>
                  <p className='card__date'>
                    <time dateTime='2020-01'>January 2020</time> -
                    <time dateTime='2022-12'>December 2022</time>
                  </p>
                  <ul className='card__list'>
                    <li>
                      <i className='fa-solid fa-check'></i>Project developer
                    </li>
                    <li>
                      <i className='fa-solid fa-check'></i>Develop responsive
                      design
                    </li>
                    <li>
                      <i className='fa-solid fa-check'></i>Coordinate deployment
                    </li>
                    <li>
                      <i className='fa-solid fa-check'></i>Assist server
                    </li>
                    <li>
                      <i className='fa-solid fa-check'></i>Assist SEO
                    </li>
                  </ul>
                  <ul className='badge__list'>
                    <li className='badge'>react js</li>
                    <li className='badge'>next js</li>
                    <li className='badge'>Redux</li>
                    <li className='badge'>Tailwind css</li>
                    <li className='badge'>team work</li>
                    <li className='badge'>problem solving</li>
                  </ul>
                </div>
              </a>

              <a
                href='http://booking.com'
                target='_blank'
                rel='noopener noreferrer'
                className='card__link'>
                <div className='card'>
                  <h3 className='text-center'>Booking.com</h3>
                  <p className='card__date'>
                    <time dateTime='2014-05'>May 2014</time> -
                    <time dateTime='2023-04'>April 2023</time>
                  </p>
                  <ul className='card__list'>
                    <li>
                      <i className='fa-solid fa-check'></i>Handle customer
                      issues
                    </li>
                    <li>
                      <i className='fa-solid fa-check'></i>Monitor performance
                    </li>
                    <li>
                      <i className='fa-solid fa-check'></i>Seasonal Supervisor
                    </li>
                  </ul>
                  <ul className='badge__list'>
                    <li className='badge'>team work</li>
                    <li className='badge'>problem solving</li>
                    <li className='badge'>Customer satisfaction</li>
                    <li className='badge'>Positive Attitude</li>
                    <li className='badge'>Motivator</li>
                  </ul>
                </div>
              </a>
            </div>
          </section>

          <section id='education-section'>
            <h2 className='tracking-wider uppercase text-center'>Education</h2>
            <div className='section__content'>
              <a
                href='https://digitalcareerinstitute.org/'
                target='_blank'
                rel='noopener noreferrer'
                className='card__link'>
                <div className='card'>
                  <h3 className='text-center'>DCI</h3>
                  <p className='card__subtitle'>Fullstack web developer</p>
                  <p className='card__date'>
                    <time dateTime='2023-05'>May 2023</time> - Current
                  </p>
                  <ul className='card__list'>
                    <li>
                      <i className='fa-solid fa-check'></i>Semantic HTML
                    </li>
                    <li>
                      <i className='fa-solid fa-check'></i>Advance CSS
                    </li>
                    <li>
                      <i className='fa-solid fa-check'></i>Master javascript
                    </li>
                    <li>
                      <i className='fa-solid fa-check'></i>react js
                    </li>
                    <li>
                      <i className='fa-solid fa-check'></i>Node js
                    </li>
                    <li>
                      <i className='fa-solid fa-check'></i>Express js
                    </li>
                    <li>
                      <i className='fa-solid fa-check'></i>Mongo DB
                    </li>
                  </ul>
                  <div className='divider'></div>
                  <p className='card__description'>
                    We believe: You are constantly learning in life and it’s
                    never too late to start over – regardless of your
                    experience, background or age.
                  </p>
                </div>
              </a>

              <a
                href='https://www.udacity.com/'
                target='_blank'
                rel='noopener noreferrer'
                className='card__link'>
                <div className='card'>
                  <h3 className='text-center'>Udacity</h3>
                  <p className='card__subtitle'>
                    Machine Learning engineer nanodegre
                  </p>
                  <p className='card__date'>
                    <time dateTime='2018'>2018</time> -
                    <time dateTime='2019'>2019</time>
                  </p>
                  <ul className='card__list'>
                    <li>
                      <i className='fa-solid fa-check'></i>Supervided
                    </li>
                    <li>
                      <i className='fa-solid fa-check'></i>Unsupervised
                    </li>
                    <li>
                      <i className='fa-solid fa-check'></i>Reinforcement
                    </li>
                    <li>
                      <i className='fa-solid fa-check'></i>Deep learning
                      algorithms
                    </li>
                  </ul>
                  <div className='divider'></div>
                  <p className='card__description'>
                    Master real, in-demand tech skills from home with Udacity’s
                    100% online learning platform. Stay ahead of the curve and
                    get the skills you’ll need for the jobs of the future.
                  </p>
                </div>
              </a>

              <a
                href='https://www.udacity.com/'
                target='_blank'
                rel='noopener noreferrer'
                className='card__link'>
                <div className='card'>
                  <h3 className='text-center'>Udacity</h3>
                  <p className='card__subtitle'>
                    AI programming with Python nanodegree
                  </p>
                  <p className='card__date'>
                    <time dateTime='2018'>2018</time> -
                    <time dateTime='2019'>2019</time>
                  </p>
                  <div className='divider'></div>
                  <ul className='card__list'>
                    <li>
                      <i className='fa-solid fa-check'></i>Python programming
                    </li>
                    <li>
                      <i className='fa-solid fa-check'></i>NumPy
                    </li>
                    <li>
                      <i className='fa-solid fa-check'></i>Pandas
                    </li>
                    <li>
                      <i className='fa-solid fa-check'></i>Anaconda
                    </li>
                    <li>
                      <i className='fa-solid fa-check'></i>Matplotlib
                    </li>
                    <li>
                      <i className='fa-solid fa-check'></i>Neural Networks
                    </li>
                  </ul>
                  <p className='card__description'>
                    Master real, in-demand tech skills from home with Udacity’s
                    100% online learning platform. Stay ahead of the curve and
                    get the skills you’ll need for the jobs of the future.
                  </p>
                </div>
              </a>

              <a
                href='https://www.open.ac.uk/'
                target='_blank'
                rel='noopener noreferrer'
                className='card__link'>
                <div className='card'>
                  <h3 className='text-center'>The Open University</h3>
                  <p className='card__subtitle'>
                    Certificate of higher education in computing and IT
                  </p>
                  <p className='card__date'>
                    <time dateTime='2016'>2016</time> -
                    <time dateTime='2017'>2017</time>
                  </p>
                  <ul className='card__list'>
                    <li>
                      <i className='fa-solid fa-check'></i>Computer hardware
                    </li>
                    <li>
                      <i className='fa-solid fa-check'></i>Computer architecture
                    </li>
                    <li>
                      <i className='fa-solid fa-check'></i>Basic microsoft
                      network
                    </li>
                    <li>
                      <i className='fa-solid fa-check'></i>Basic robotics
                    </li>
                    <li>
                      <i className='fa-solid fa-check'></i>Programing principles
                    </li>
                    <li>
                      <i className='fa-solid fa-check'></i>Advance mathematics
                    </li>
                  </ul>
                  <p className='card__description'>
                    The Open University offers flexible part-time study,
                    supported distance and open learning for undergraduate and
                    postgraduate courses and qualifications.
                  </p>
                </div>
              </a>
            </div>
          </section>

          <section id='projects-section'>
            <h2 className='tracking-wider uppercase text-center'>Projects</h2>
            <div className='section__content'>
              <div className='card' data-aos='flip-left'>
                <img
                  src='assets/images/carma.png'
                  alt='CarMa suss landing page'
                  className='card__img'
                />

                <ul className='card__external-links'>
                  <li>
                    <a
                      href='https://github.com/carlosmertens/carma'
                      target='_blank'
                      rel='noopener noreferrer'>
                      Source code
                      <i className='fa-solid fa-arrow-up-right-from-square'></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href='https://www.carmasuss.com/'
                      target='_blank'
                      rel='noopener noreferrer'>
                      Website
                      <i className='fa-solid fa-arrow-up-right-from-square'></i>
                    </a>
                  </li>
                </ul>
                <div className='divider'></div>
                <p className='card__description'>
                  Indulge your taste buds with a delightful South American treat
                  in the heart of Berlin! Our freshly baked alfajores are an
                  exquisite blend of soft, buttery cookies sandwiched together
                  with a luscious dulce de leche filling. These
                  melt-in-your-mouth delights are crafted with the finest
                  ingredients - they will transport you straight to the sunny
                  flavors of South America!
                </p>
              </div>

              <div className='card' data-aos='fade-down-right'>
                <img
                  src='assets/images/daxparts.png'
                  alt='Dax Parts landing page'
                  className='card__img'
                />

                <ul className='card__external-links'>
                  <li>
                    <a
                      href='https://github.com/carlosmertens/'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='isDisabled'>
                      Source code<i className='fa-solid fa-lock'></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href='https://daxparts.com/'
                      target='_blank'
                      rel='noopener noreferrer'>
                      Website
                      <i className='fa-solid fa-arrow-up-right-from-square'></i>
                    </a>
                  </li>
                </ul>
                <div className='divider'></div>
                <p className='card__description'>
                  We are a company dedicated in facilitating the purchase of
                  spare parts for all types of machinery to our customers in
                  developing countries. With humble beginnings in Bolivia today
                  our services reach divers countries and industries.
                </p>
              </div>

              <div className='card' data-aos='fade-right'>
                <img
                  src='assets/images/diazno.png'
                  alt='Diazno landing page'
                  className='card__img'
                />

                <ul className='card__external-links'>
                  <li>
                    <a
                      href='https://github.com/carlosmertens/Diazno2'
                      target='_blank'
                      rel='noopener noreferrer'>
                      Source code
                      <i className='fa-solid fa-arrow-up-right-from-square'></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href='https://diazno2-carlosmertens.vercel.app/'
                      target='_blank'
                      rel='noopener noreferrer'>
                      Website
                      <i className='fa-solid fa-arrow-up-right-from-square'></i>
                    </a>
                  </li>
                </ul>
                <div className='divider'></div>
                <p className='card__description'>
                  &quotDIAZNO, the Berlin based singer-songwriter and producer,
                  is carving a niche for himself with an audacious sound
                  blending everything from pop to folk, soul, rock and reggae.
                  Born and raised in Lagos, Nigeria, the multi-instrumentalist
                  grew up playing in church and studying classNameical music but
                  since moving to Berlin in 2016 has redefined his music.&quot
                </p>
              </div>
            </div>
          </section>
        </main>
        <footer>
          <h3>Copyright &copy; 2023 by Carlos Mertens</h3>
        </footer>
      </div>
    </div>
  );
}

import type { MetaFunction } from '@remix-run/node';
import { NavLink } from '@remix-run/react';
import { seo, text, skills } from '../data/content.json';
import { Badge } from '~/components/Badge';
import { Section } from '~/layouts/Section';
import { Card } from '~/layouts/Card';

export const meta: MetaFunction = () => {
  return [
    { title: seo.description.title },
    {
      name: seo.description.name,
      content: seo.description.content,
    },
  ];
};

export default function Index() {
  return (
    <div className='grid my-0 mx-auto max-w-7xl px-8'>
      <header className='h-screen flex flex-col justify-between pt-24 pb-2'>
        <div className='flex flex-col'>
          <h1
            data-aos='fade-down-right'
            className='tracking-wider uppercase text-center text-6xl drop-shadow-header'>
            {text.h1.name}
            <span className='block text-2xl font-thin italic mt-3 mb-8'>
              {text.h1.title}
            </span>
          </h1>
        </div>

        <nav>
          <ul className='flex flex-col gap-2 text-2xl'>
            <li className='uppercase transition-all duration-300 ease-out hover:text-secondary hover:translate-x-4'>
              <NavLink to='#about'>
                <i className='ri-arrow-right-line mr-2'></i>
                {text.nav.link_to_about}
              </NavLink>
            </li>
            <li className='uppercase transition-all duration-300 ease-out hover:text-secondary hover:translate-x-4'>
              <NavLink to='#skills'>
                <i className='ri-arrow-right-line mr-2'></i>
                {text.nav.link_to_skills}
              </NavLink>
            </li>
            <li className='uppercase transition-all duration-300 ease-out hover:text-secondary hover:translate-x-4'>
              <NavLink to='#experience'>
                <i className='ri-arrow-right-line mr-2'></i>
                {text.nav.link_to_experience}
              </NavLink>
            </li>
            <li className='uppercase transition-all duration-300 ease-out hover:text-secondary hover:translate-x-4'>
              <NavLink to='#education'>
                <i className='ri-arrow-right-line mr-2'></i>
                {text.nav.link_to_education}
              </NavLink>
            </li>
            <li className='uppercase transition-all duration-300 ease-out hover:text-secondary hover:translate-x-4'>
              <NavLink to='#projects'>
                <i className='ri-arrow-right-line mr-2'></i>
                {text.nav.link_to_projects}
              </NavLink>
            </li>
          </ul>
        </nav>

        <ul className='flex justify-around'>
          <li>
            <a
              href='https://github.com/carlosmertens'
              target='_blank'
              rel='noopener noreferrer'
              title='Go to my GitHub profile...'>
              <i className='ri-github-fill text-4xl transition-all duration-300 ease-out hover:text-secondary hover:scale-125'></i>
            </a>
          </li>
          <li>
            <a
              href='https://www.linkedin.com/in/carlosmertens/'
              target='_blank'
              rel='noopener noreferrer'
              title='Go to my LindeIn profile...'>
              <i className='ri-linkedin-box-fill text-4xl transition-all duration-300 ease-out hover:text-secondary scale-150'></i>
            </a>
          </li>
          <li>
            <a
              href='mailto:mertenscarlos@yahoo.com'
              title='Send me an email...'>
              <i className='ri-mail-send-fill text-4xl transition-all duration-300 ease-out hover:text-secondary hover:scale-150'></i>
            </a>
          </li>
          <li>
            <a
              href='/public/cv_mertens_2024.pdf'
              download
              title='Download my CV (Resume)...'>
              <i className='ri-file-download-fill text-4xl transition-all duration-300 ease-out hover:text-secondary scale-150'></i>
            </a>
          </li>
        </ul>
      </header>

      <div className='lg-left'>
        <main className='my-8 grid gap-y-12'>
          <Section id='about' title={text.section.about.title}>
            <div className=''>
              <figure>
                <img
                  src='/img/carlos.jpeg'
                  alt='Carlos Mertens profile'
                  className='rounded-full float-left h-36 mr-4'
                />
              </figure>

              <p className='text-center leading-normal'>
                {text.section.about.paragraph}
              </p>
            </div>
          </Section>

          <Section id='skills' title='skills'>
            <div className='flex flex-col items-center gap-8'>
              {skills.map((skill, i) => (
                <Card title={skill.name} key={i}>
                  <ul className='flex flex-wrap gap-4 justify-center mt-8'>
                    {skill.list.map((item, i) => (
                      <li key={i}>
                        <Badge text={item} />
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </Section>

          <Section id='experience' title='experience'>
            <div className='flex flex-col items-center gap-8'>
              <a
                href='http://carmasuss.com'
                target='_blank'
                rel='noopener noreferrer'
                className='card__link'>
                <div className='bg-glass shadow-2xl rounded-xl p-6 max-w-96 min-w-72 transition-all duration-300 ease-out'>
                  <h3 className='flex justify-center text-secondary'>
                    <span>CarMa s&uuml;&#223;</span>
                    <span>
                      <i className='ri-external-link-fill'></i>
                    </span>
                  </h3>
                  <p className='card__date'>
                    <time dateTime='2023-06'>June 2023</time> - Current
                  </p>
                  <ul className='card__list'>
                    <li>
                      <i className='ri-check-fill'></i>Co-founder
                    </li>
                    <li>
                      <i className='ri-check-fill'></i>Develop website
                    </li>
                    <li>
                      <i className='ri-check-fill'></i>Maintain website
                    </li>
                    <li>
                      <i className='ri-check-fill'></i>Create content
                    </li>
                    <li>
                      <i className='ri-check-fill'></i>Balance the books
                    </li>
                  </ul>
                  <ul className='flex flex-wrap gap-4 justify-center mt-8'>
                    <li>
                      <Badge text='reactjs' />
                    </li>
                    <li>
                      <Badge text='next js' />
                    </li>
                  </ul>
                </div>
              </a>

              <a
                href='http://daxparts.com'
                target='_blank'
                rel='noopener noreferrer'
                className='card__link'>
                <div className='bg-glass shadow-2xl rounded-xl p-6 max-w-96 min-w-72 transition-all duration-300 ease-out'>
                  <h3 className='flex justify-center text-secondary'>
                    <span>Dax Parts</span>
                    <span>
                      <i className='ri-external-link-fill'></i>
                    </span>
                  </h3>
                  <p className='card__date'>
                    <time dateTime='2020-01'>January 2020</time> -
                    <time dateTime='2022-12'>December 2022</time>
                  </p>
                  <ul className='card__list'>
                    <li>
                      <i className='ri-check-fill'></i>Project developer
                    </li>
                    <li>
                      <i className='ri-check-fill'></i>Develop responsive design
                    </li>
                    <li>
                      <i className='ri-check-fill'></i>Coordinate deployment
                    </li>
                    <li>
                      <i className='ri-check-fill'></i>Assist server
                    </li>
                    <li>
                      <i className='ri-check-fill'></i>Assist SEO
                    </li>
                  </ul>
                  <ul className='flex flex-wrap gap-4 justify-center mt-8'>
                    <li>
                      <Badge text='react js' />
                    </li>
                    <li>
                      <Badge text='next js' />
                    </li>
                    <li>
                      <Badge text='redux' />
                    </li>
                    <li>
                      <Badge text='tailwindcss' />
                    </li>
                    <li>
                      <Badge text='team work' />
                    </li>
                    <li>
                      <Badge text='problem solving' />
                    </li>
                  </ul>
                </div>
              </a>

              <a
                href='http://booking.com'
                target='_blank'
                rel='noopener noreferrer'
                className='card__link'>
                <div className='bg-glass shadow-2xl rounded-xl p-6 max-w-96 transition-all duration-300 ease-out'>
                  <h3 className='flex justify-center text-secondary'>
                    <span>Booking.com</span>
                    <span>
                      <i className='ri-external-link-fill'></i>
                    </span>
                  </h3>
                  <p className='card__date'>
                    <time dateTime='2014-05'>May 2014</time> -
                    <time dateTime='2023-04'>April 2023</time>
                  </p>
                  <ul className='card__list'>
                    <li>
                      <i className='ri-check-fill'></i>Handle customer issues
                    </li>
                    <li>
                      <i className='ri-check-fill'></i>Monitor performance
                    </li>
                    <li>
                      <i className='ri-check-fill'></i>Seasonal Supervisor
                    </li>
                  </ul>
                  <ul className='flex flex-wrap gap-4 justify-center mt-8'>
                    <li>
                      <Badge text='team work' />
                    </li>
                    <li>
                      <Badge text='problem solving' />
                    </li>
                    <li>
                      <Badge text='customer satisfaction' />
                    </li>
                    <li>
                      <Badge text='positive attitude' />
                    </li>
                    <li>
                      <Badge text='motivator' />
                    </li>
                  </ul>
                </div>
              </a>
            </div>
          </Section>

          <Section id='education' title='education'>
            <div className='flex flex-col items-center gap-8'>
              <a
                href='https://digitalcareerinstitute.org/'
                target='_blank'
                rel='noopener noreferrer'
                className='card__link'>
                <div className='bg-glass shadow-2xl rounded-xl p-6 max-w-96 transition-all duration-300 ease-out'>
                  <h3 className='flex justify-center text-secondary'>
                    <span>DCI</span>
                    <span>
                      <i className='ri-external-link-fill'></i>
                    </span>
                  </h3>
                  <p className='card__subtitle'>Fullstack web developer</p>
                  <p className='card__date'>
                    <time dateTime='2023-05'>May 2023</time> - Current
                  </p>
                  <ul className='card__list'>
                    <li>
                      <i className='ri-check-fill'></i>Semantic HTML
                    </li>
                    <li>
                      <i className='ri-check-fill'></i>Advance CSS
                    </li>
                    <li>
                      <i className='ri-check-fill'></i>Master javascript
                    </li>
                    <li>
                      <i className='ri-check-fill'></i>react js
                    </li>
                    <li>
                      <i className='ri-check-fill'></i>Node js
                    </li>
                    <li>
                      <i className='ri-check-fill'></i>Express js
                    </li>
                    <li>
                      <i className='ri-check-fill'></i>Mongo DB
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
                <div className='bg-glass shadow-2xl rounded-xl p-6 max-w-96 transition-all duration-300 ease-out'>
                  <h3 className='flex justify-center text-secondary'>
                    <span>Udacity</span>
                    <span>
                      <i className='ri-external-link-fill'></i>
                    </span>
                  </h3>
                  <p className='card__subtitle'>
                    Machine Learning engineer nanodegre
                  </p>
                  <p className='card__date'>
                    <time dateTime='2018'>2018</time> -
                    <time dateTime='2019'>2019</time>
                  </p>
                  <ul className='card__list'>
                    <li>
                      <i className='ri-check-fill'></i>Supervided
                    </li>
                    <li>
                      <i className='ri-check-fill'></i>Unsupervised
                    </li>
                    <li>
                      <i className='ri-check-fill'></i>Reinforcement
                    </li>
                    <li>
                      <i className='ri-check-fill'></i>Deep learning algorithms
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
                <div className='bg-glass shadow-2xl rounded-xl p-6 max-w-96 transition-all duration-300 ease-out'>
                  <h3 className='flex justify-center text-secondary'>
                    <span>Udacity</span>
                    <span>
                      <i className='ri-external-link-fill'></i>
                    </span>
                  </h3>
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
                      <i className='ri-check-fill'></i>Python programming
                    </li>
                    <li>
                      <i className='ri-check-fill'></i>NumPy
                    </li>
                    <li>
                      <i className='ri-check-fill'></i>Pandas
                    </li>
                    <li>
                      <i className='ri-check-fill'></i>Anaconda
                    </li>
                    <li>
                      <i className='ri-check-fill'></i>Matplotlib
                    </li>
                    <li>
                      <i className='ri-check-fill'></i>Neural Networks
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
                <div className='bg-glass shadow-2xl rounded-xl p-6 max-w-96 transition-all duration-300 ease-out'>
                  <h3 className='flex justify-center text-secondary'>
                    <span>The Open University</span>
                    <span>
                      <i className='ri-external-link-fill'></i>
                    </span>
                  </h3>
                  <p className='card__subtitle'>
                    Certificate of higher education in computing and IT
                  </p>
                  <p className='card__date'>
                    <time dateTime='2016'>2016</time> -
                    <time dateTime='2017'>2017</time>
                  </p>
                  <ul className='card__list'>
                    <li>
                      <i className='ri-check-fill'></i>Computer hardware
                    </li>
                    <li>
                      <i className='ri-check-fill'></i>Computer architecture
                    </li>
                    <li>
                      <i className='ri-check-fill'></i>Basic microsoft network
                    </li>
                    <li>
                      <i className='ri-check-fill'></i>Basic robotics
                    </li>
                    <li>
                      <i className='ri-check-fill'></i>Programing principles
                    </li>
                    <li>
                      <i className='ri-check-fill'></i>Advance mathematics
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
          </Section>

          <Section id='projects' title='projects'>
            <div className='flex flex-col items-center gap-16'>
              <div
                className='bg-glass shadow-2xl rounded-xl p-6 max-w-96 transition-all duration-300 ease-out'
                data-aos='flip-left'>
                <img
                  src='/img/carma.png'
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
                      <i className='ri-external-link-fill'></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href='https://www.carmasuss.com/'
                      target='_blank'
                      rel='noopener noreferrer'>
                      Website
                      <i className='ri-external-link-fill'></i>
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

              <div
                className='bg-glass shadow-2xl rounded-xl p-6 max-w-96 transition-all duration-300 ease-out'
                data-aos='fade-down-right'>
                <img
                  src='/img/daxparts.png'
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
                      Source code
                      <i className='ri-git-repository-private-fill'></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href='https://daxparts.com/'
                      target='_blank'
                      rel='noopener noreferrer'>
                      Website
                      <i className='ri-external-link-fill'></i>
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

              <div
                className='bg-glass shadow-2xl rounded-xl p-6 max-w-96 transition-all duration-300 ease-out'
                data-aos='fade-right'>
                <img
                  src='/img/diazno.png'
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
                      <i className='ri-external-link-fill'></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href='https://diazno2-carlosmertens.vercel.app/'
                      target='_blank'
                      rel='noopener noreferrer'>
                      Website
                      <i className='ri-external-link-fill'></i>
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
          </Section>
        </main>
        <footer className='py-12'>
          <h3 className='text-center text-secondary'>
            Copyright &copy; {new Date().getFullYear()} by Carlos Mertens
          </h3>
        </footer>
      </div>
    </div>
  );
}

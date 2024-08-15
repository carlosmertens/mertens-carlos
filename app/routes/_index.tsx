import type { MetaFunction } from '@remix-run/node';
import { NavLink } from '@remix-run/react';
import data from '../data/content.json';
import { Badge } from '~/components/Badge';
import { Section } from '~/layouts/Section';
import { Card } from '~/layouts/Card';

export const meta: MetaFunction = () => {
  return [
    { title: data.seo.description.title },
    {
      name: data.seo.description.name,
      content: data.seo.description.content,
    },
  ];
};

export default function Index() {
  return (
    <div className='grid md:grid-cols-2 md:gap-x-8 my-0 mx-auto max-w-7xl px-8'>
      <header className='h-svh flex flex-col justify-between pt-24 pb-2 md:pb-6 md:sticky md:top-0'>
        <div className='flex flex-col'>
          <h1
            data-aos='fade-down-right'
            className='tracking-wider uppercase text-center text-6xl drop-shadow-header'>
            {data.text.h1.name}
            <span className='block text-2xl font-thin italic mt-3 mb-8'>
              {data.text.h1.title}
            </span>
          </h1>
        </div>

        <nav>
          <ul className='flex flex-col gap-2 text-2xl'>
            <li className='uppercase transition-all duration-300 ease-out hover:text-secondary hover:translate-x-4'>
              <NavLink to='#about'>
                <i className='ri-arrow-right-line mr-2'></i>
                {data.text.nav.link_to_about}
              </NavLink>
            </li>
            <li className='uppercase transition-all duration-300 ease-out hover:text-secondary hover:translate-x-4'>
              <NavLink to='#skills'>
                <i className='ri-arrow-right-line mr-2'></i>
                {data.text.nav.link_to_skills}
              </NavLink>
            </li>
            <li className='uppercase transition-all duration-300 ease-out hover:text-secondary hover:translate-x-4'>
              <NavLink to='#experience'>
                <i className='ri-arrow-right-line mr-2'></i>
                {data.text.nav.link_to_experience}
              </NavLink>
            </li>
            <li className='uppercase transition-all duration-300 ease-out hover:text-secondary hover:translate-x-4'>
              <NavLink to='#education'>
                <i className='ri-arrow-right-line mr-2'></i>
                {data.text.nav.link_to_education}
              </NavLink>
            </li>
            <li className='uppercase transition-all duration-300 ease-out hover:text-secondary hover:translate-x-4'>
              <NavLink to='#projects'>
                <i className='ri-arrow-right-line mr-2'></i>
                {data.text.nav.link_to_projects}
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

      <div className='md:mt-4'>
        <main className='my-8 grid gap-y-12'>
          <Section id='about' title={data.text.section.about.title}>
            <article>
              <figure>
                <img
                  src='/img/carlos.jpeg'
                  alt='Carlos Mertens profile'
                  className='rounded-full float-left h-36 mr-4'
                />
              </figure>

              <p className='text-center leading-normal'>
                {data.text.section.about.paragraph}
              </p>
            </article>
          </Section>

          <Section id='skills' title='skills'>
            {data.skills.map((skill, i) => (
              <Card title={skill.name} key={i}>
                <ul className='flex flex-wrap gap-x-3 gap-y-5 justify-center mt-6'>
                  {skill.tags.map((tag, i) => (
                    <li key={i}>
                      <Badge text={tag} />
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </Section>

          <Section id='experience' title='experience'>
            {data.experience.map((item, i) => (
              <a
                key={i}
                href={item.url}
                target='_blank'
                rel='noopener noreferrer'>
                <Card title={item.name} isLink={true}>
                  <p className='text-center text-xs italic capitalize mt-1 mb-2'>
                    <time>{item.dateStart}</time> - <time>{item.dateEnd}</time>
                  </p>
                  <ul className='leading-5 px-4'>
                    {item.tasks.map((task, i) => (
                      <li key={i}>
                        <i className='ri-check-fill'></i>
                        <span className='ml-2'>{task}</span>
                      </li>
                    ))}
                  </ul>
                  <ul className='flex flex-wrap gap-x-3 gap-y-5 justify-center mt-6'>
                    {item.tags.map((tag, i) => (
                      <li key={i}>
                        <Badge text={tag} />
                      </li>
                    ))}
                  </ul>
                </Card>
              </a>
            ))}
          </Section>

          <Section id='education' title='education'>
            {data.education.map((item, i) => (
              <a
                key={i}
                href={item.url}
                target='_blank'
                rel='noopener noreferrer'>
                <Card title={item.name} isLink={true}>
                  <p className='text-center text-xs italic capitalize mt-1 mb-2'>
                    <time>{item.dateStart}</time> - <time>{item.dateEnd}</time>
                  </p>
                  <p className='text-sm'>{item.description}</p>
                  <h4 className='text-center text-lg text-secondary md:text-primary capitalize mt-6'>
                    {item.title}
                  </h4>

                  <ul className='flex flex-wrap gap-x-3 gap-y-5 justify-center mt-6'>
                    {item.tags.map((tag, i) => (
                      <li key={i}>
                        <Badge text={tag} />
                      </li>
                    ))}
                  </ul>
                  <div className='divider'></div>
                </Card>
              </a>
            ))}
          </Section>

          <Section id='projects' title='projects'>
            {data.projects.map((item, i) => (
              <Card key={i} data-aos='flip-left'>
                <img
                  src={item.imgPath}
                  alt={item.imgAlt}
                  className='w-full rounded-t-md'
                />

                <ul className='mt-4 flex flex-col gap-y-2'>
                  {item.links.map((link, i) => (
                    <li key={i}>
                      <a
                        className='text-secondary underline'
                        href={link.url}
                        target='_blank'
                        rel='noopener noreferrer'>
                        <span className='mr-2'>{link.name}</span>
                        <i className='ri-external-link-fill'></i>
                      </a>
                    </li>
                  ))}
                </ul>
                <div className='w-2/4 my-6 mx-auto h-0.5 bg-primary'></div>
                <p className='text-sm'>{item.description}</p>
              </Card>
            ))}
          </Section>
        </main>
        <footer className='py-12 md:py-6'>
          <h3 className='text-center text-secondary md:text-dark'>
            Copyright &copy; {new Date().getFullYear()} by Carlos Mertens
          </h3>
        </footer>
      </div>
    </div>
  );
}

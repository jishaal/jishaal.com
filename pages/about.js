import Image from 'next/image'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import { PageSeo } from '@/components/SEO'

export default function About() {
  return (
    <>
      <PageSeo
        title="About"
        description={`About me - ${siteMetadata.author}`}
        url={`${siteMetadata.siteUrl}/about`}
      />
      <div className="divide-y">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            About
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center pt-8 space-x-2">
            <img src={siteMetadata.image} alt="avatar" className="w-48 h-48 rounded-full" />
            <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">
              {siteMetadata.author}
            </h3>
            <div className="text-gray-500 dark:text-gray-400">Frontend Engineer Lead</div>
            <div className="text-gray-500 dark:text-gray-400">Parrot Analytics</div>
            <div className="flex pt-6 space-x-3">
              <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} />
              <SocialIcon kind="github" href={siteMetadata.github} />
              <SocialIcon kind="facebook" href={siteMetadata.facebook} />
              <SocialIcon kind="youtube" href={siteMetadata.youtube} />
              <SocialIcon kind="linkedin" href={siteMetadata.linkedin} />
              <SocialIcon kind="twitter" href={siteMetadata.twitter} />
            </div>
          </div>
          <div className="pt-8 pb-8 prose dark:prose-dark max-w-none xl:col-span-2">
            {/* <Image
              src="/static/images/me.jpg"
              alt="Picture of the author"
              width={727}
              height={585}
            /> */}
            <p>
              I'm a Frontend Engineer with 8+ years in the industry. I work with modern frontend
              technologies such as React, Redux, Node.js and TypeScript.
            </p>
            <p>
              The web has fascinated me since I was a child, having created and deployed my first
              website in my teens during the early 2000s. Since then, technologies that help power
              today's websites has changed dramatically allowing us to create seamless experiences
              and solve problems in ways deemed impossible just a few years ago.
            </p>
            <h3>Career</h3>
            <ul className="list-disc">
              <li>
                <em>Jan 2021 - Present:</em> Frontend Engineer Lead @ Parrot Analytics
              </li>
              <li>
                <em>Jan 2019 - Jan 2021:</em> Senior Frontend Developer + People Lead @ Xero
              </li>
              <li>
                <em>Feb 2018 - Jan 2019:</em> Senior Frontend Developer @ Xero
              </li>
              <li>
                <em>Oct 2015 - Jan 2018:</em> Frontend Developer @ Xero
              </li>
              <li>
                <em>Sept 2014 - Aug 2015:</em> Graduate Developer @ Xero
              </li>
              <li>
                <em>Jun 2013 - Aug 2014:</em> Interaction Developer @ Infinity - Brand, Digital and
                Strategy
              </li>
            </ul>
            <h3>Location</h3>
            <p>I currently live in the beautiful city of Auckland, New Zealand</p>
          </div>
        </div>
      </div>
    </>
  )
}

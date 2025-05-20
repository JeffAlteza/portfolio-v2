import Image from "next/image"
import DownloadLink from "../components/ButtonLink"
import NavBar from "../components/Navbar"
import { AccordionWorkExperience } from "../components/AccordionWorkExperience"
import ProjectList from "../components/ProjectList"
import Contact from "../components/Contact"

export default function Home() {
  return (
    <main className="min-h-screen px-8">
      {/* Navigation */}
      <NavBar />

      {/* Hero Section */}
      <section className="max-w-5xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between" id="home">
        {/* Left Content */}
        <div className="md:w-3/5">
          <h1 className="text-5xl font-bold mb-2 text-gray-700">
            Hi I&apos;m <span className="text-black">Jeffrey!</span>
          </h1>
          <h2 className="text-2xl text-gray-600 mb-4">Backend Software Engineer</h2>
          <p className="text-gray-600 mb-8 max-w-2xl indent-8">
            I&apos;m a backend enthusiast who loves turning complex ideas into clean, scalable solutions. I bring energy, precision, and a sprinkle of fun to every line of code.
          </p>
          <div className="flex space-x-3">
            <DownloadLink
              link="https://drive.google.com/file/d/1wv7ablYHFVYWthHZE1QboPh6ku5IjlQ3/view?usp=drive_link"
              label="Resume"
            />
            <DownloadLink
              link="https://github.com/JeffAlteza"
              label="Github"
            />
          </div>
        </div>

        {/* Right Image */}
        <div className="md:w-2/5 flex justify-center py-4">
          <div className="relative w-[600px] h-[600px] group">
            <Image
              src="/jeff_3D.png"
              alt="Jeffrey 3d avatar"
              fill
              className="object-contain transition-opacity duration-700 ease-in-out group-hover:opacity-0"
              priority
            />
            <Image
              src="/jeff.png"
              alt="Jeffrey Image"
              fill
              className="object-contain opacity-0 transition-opacity duration-700 ease-in-out group-hover:opacity-100"
              priority
            />
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 md:px-0 mb-12" id="about">
        <h2 className="text-2xl text-gray-800 font-bold mb-2">About Me</h2>
        <p className="text-gray-600 mb-6 indent-8 text-justify">
          Hey there! I’m someone who genuinely enjoys making backend systems run smoothly and efficiently. Whether it’s structuring databases, crafting APIs, or solving tricky bugs, I approach each task with curiosity, care, and a bit of fun. I believe great software comes from happy teams, open minds, and thoughtful code—and I try to bring that energy into everything I build.
        </p>

        <h2 className="text-2xl text-gray-800 font-bold mb-2">Work Experience</h2>
        <div className="px-8">
          <AccordionWorkExperience />
        </div>
      </section >

      <section className="max-w-5xl mx-auto px-4 md:px-0 mb-12" id="projects">
        <h2 className="text-2xl text-gray-800 font-bold mb-2">Projects</h2>
        <ProjectList/>
      </section>
      
      <section className="max-w-5xl mx-auto px-4 md:px-0 mb-12" id="contact">
        <h2 className="text-2xl text-gray-800 font-bold mb-2">Get in touch!</h2>
        <Contact/>
      </section>
    </main>
  )
}

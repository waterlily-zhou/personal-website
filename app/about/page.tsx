export default function About() {
  return (
    <div className="min-h-screen relative">
      <div className="max-w-3xl mx-auto px-4 pt-32">
        <h1 className="text-3xl font-light mb-8">About Me</h1>
        
        <div className="space-y-6 text-gray-300">
          <p>
            I'm a full-stack developer specializing in Web3 technologies. With a passion for 
            creating elegant and functional applications, I focus on delivering solutions that 
            combine technical excellence with exceptional user experience.
          </p>

          <p>
            My approach to development is holistic – I believe in building systems that are not 
            just technically sound, but also intuitive and accessible. I have extensive experience 
            working with modern web technologies and am constantly exploring new tools and 
            frameworks to enhance my development capabilities.
          </p>

          <h2 className="text-xl font-light mt-12 mb-4">Experience</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-white">Senior Full-Stack Developer</h3>
              <p className="text-gray-400">2020 - Present</p>
              <ul className="list-disc list-inside mt-2 space-y-2">
                <li>Developed and maintained scalable web applications</li>
                <li>Led technical architecture decisions for major projects</li>
                <li>Mentored junior developers and conducted code reviews</li>
              </ul>
            </div>

            <div>
              <h3 className="text-white">Full-Stack Developer</h3>
              <p className="text-gray-400">2018 - 2020</p>
              <ul className="list-disc list-inside mt-2 space-y-2">
                <li>Built responsive web applications using React and Node.js</li>
                <li>Implemented RESTful APIs and database architectures</li>
                <li>Collaborated with design teams to create intuitive UIs</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
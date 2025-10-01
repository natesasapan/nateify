'use client'
import { useState } from "react";
import React, { Fragment } from 'react';
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import { MobileHeader } from "./components/Header.js";

export default function Home() {  
  // Work States
  const [nowPlaying, setNowPlaying] = useState(false);
  const [networkOpen, setNetworkOpen] = useState(false);
  const [techOpen, setTechOpen] = useState(false);
  const [researchOpen, setResearchOpen] = useState(false);
  const [studentOpen, setStudentOpen] = useState(false);

  const [networkIndex, setNetworkIndex] = useState(0);  
  
  // Project States
  const [projectIndex, setProjectIndex] = useState(-1);

  // About Open State
  const [aboutOpen, setAboutOpen] = useState(false);

  // Work Data
  const workData = [
    {title: 'Network Engineer Intern', imgSrc:'/ag.png', company: 'Ansan Group LLC', dateStarted: 'May 2024', dateFinished: 'July 2024', time: '2:24', duty1: 'Updated network documentation and asset inventory for 50+ devices, improving team efficiency and reducing troubleshooting time by 80%', duty2: 'Resolved Level 1 network connectivity issues via ticketing system, achieving average resolution time of 15 minutes', duty3: 'Conducted WiFi coverage analysis across facilities, identifying dead zones and recommending access point placement'},
    {title: 'Technology Student Assistant', imgSrc:'/uga.png', company: 'UGA Science Learning Center', dateStarted: 'June 2022', dateFinished: 'July 2025', time: '3:11', duty1: 'Provide on-site technical consulting during live classroom sessions - assess issues quickly, communicate solutions to faculty, and implement fixes without disrupting ongoing activities', duty2: 'Integrated streamlined troubleshooting methodology that reduced resolution time by 67% (45 to 15 minutes), improving client satisfaction and operational efficiency', duty3: 'Oversaw lost and found operations, including item intake, documentation, storage, and customer communication'},
    {title: 'Research Lab Assistant', imgSrc:'/biochem.png', company: 'Adams Biochemisty & Microbiology Lab', dateStarted: 'Feb 2024', dateFinished: 'Sep 2024', time: '1:45', duty1: 'Designed and implemented database optimization solution reducing equipment location from 20+ minutes to under 2 minutes, improving lab productivity for 15+ researchers', duty2: 'Created Python scripts to automate gene data processing, saving research teams 15 hours of manual work per week', duty3: 'Reorganized laboratory space to maximize equipment accessibility and minimize workflow disruptions'},
    {title: 'Student - Computer Science', imgSrc:'/uga.png', company: 'University of Georgia', dateStarted: 'August 2020', dateFinished: 'May 2025', time: '5:04', duty1: 'GPA 3.5/4.0', duty2: 'Dean\'s List (4x) Presidential Scholar (1x) ', duty3: 'Studied at Vrije Universiteit in Amsterdam, NL from Fall 2023 - Feb 2024'}
  ];

  // Project Data
  const projectData = [
    {
      title: 'DreamHaven',
      category: 'EP',
      imgSrc: '/dreamhaven.png',
      year: '2024',
      description: '1st place in HPC-UGA Hackathon',
      duty1: 'Built a fully functional web app in 48 hours using Python, Streamlit, and ECL, beating 127 competing teams to win 1st place in the HPC-UGA Hackathon',
      duty2: 'Designed responsive UI/UX that handled 150+ test users during judging phase, showcasing scalability and performance optimization',
      duty3: 'Pitched final product to panel of industry judges, securing victory through clear technical presentation and live product demonstration',
      gitLink: 'https://github.com/Soham231/DreamHaven'
    },
    {
      title: 'TailorThat!',
      category: 'Single', 
      imgSrc: '/tailorthat.png',
      year: '2024',
      description: 'Web application with React and TailwindCSS for resume customization',
      duty1: 'Architected a Next.js web application with React and TailwindCSS for resume customization, demonstrating experience with modern frontend frameworks',
      duty2: 'Led development of a user-centric interface that processes and analyzes document data in real-time, showcasing programming skills in data structures and object-oriented principles',
      duty3: 'Integrated third-party REST APIs to retrieve and process data, demonstrating proficiency in API integration and data handling',
      gitLink: 'https://github.com/natesasapan/tailor-that'
    },
    {
      title: 'Gorilla Cars',
      category: 'Album',
      imgSrc: '/gorilla.png', 
      year: '2024',
      description: 'Full-stack React website with user authentication using MongoDB Atlas',
      duty1: 'Led 4-person team developing full-stack React website with user authentication using MongoDB Atlas and JWT tokens',
      duty2: 'Implemented responsive multi-page design, database integration, and secure user authentication and authorization',
      duty3: 'Added react router, middleware, and organizational structure to facilitate merging of frontend and backend components',
      gitLink: 'https://github.com/natesasapan/gorilla-cars'

    },
    {
      title: 'CineBook', 
      category: 'Album',
      imgSrc: '/cinebook.png',
      year: '2025',
      description: 'Cinema booking platform using Next.js with responsive design',
      duty1: 'Collaborated with 4-person development team to build cinema booking platform using Next.js, coordinating daily standups and sprint planning to keep project on track for semester deadline',
      duty2: 'Designed responsive movie database interface with search functionality and user ratings, achieving 95% mobile compatibility score on cross-device testing',
      duty3: 'Established Git workflow standards including branch protection rules and mandatory code reviews, reducing merge conflicts by 83% across team',
      gitLink: 'https://github.com/tsdaniels/cinema-ebooking'
    },
    {
      title: 'SpotifyMultitool',
      category: 'Single',
      imgSrc: '/stats.png',
      year: '2024',
      description: 'Spotify API integration tool with HTTP requests and JSON parsing',
      duty1: 'Demonstrated proficiency in handling HTTP requests and parsing JSON responses using the \'requests\' library for seamless Spotify API integration',
      duty2: 'Structured the code for modularity, making it easy to extend and customize for future use cases and additional Spotify API endpoints',
      duty3: 'Implemented comprehensive error handling and user input validation to ensure robust application performance',
      gitLink: 'https://github.com/natesasapan/SpotifyMultitool'
    },
    {
      title: 'World Quiz',
      category: 'EP', 
      imgSrc: '/worldquiz.png',
      year: '2025',
      description: 'Android mobile application using Java and Android Studio',
      duty1: 'Collaborated in a two-person team to develop a full-featured Android mobile application using Java and Android Studio for educational quiz gameplay',
      duty2: 'Implemented responsive UI with multiple fragments to enable seamless navigation and content display across different screen sizes',
      duty3: 'Designed and integrated SQLite database to store user data locally, including CRUD operations for persistent data management and user progress tracking',
      gitLink: 'https://github.com/natesasapan/WorldQuiz'
    }
  ];

  const getActiveWorkItem = () => {
    if (networkOpen) return workData[0];
    if (techOpen) return workData[1]; 
    if (researchOpen) return workData[2];
    if (studentOpen) return workData[3];
    return null;
  };

  const activeItem = getActiveWorkItem();

  const getActiveProjectItem = () => {
    return projectData[projectIndex];
  };

  const projectItem = getActiveProjectItem();

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Web Layout */}
      <div className="hidden md:block">
        <Header/>
        <main className="flex flex-row bg-black p-2 gap-2 h-[calc(100vh-140px)]">
          <div className='flex flex-col gap-5 items-center rounded-lg bg-[#121212] text-white w-16 hidden 2xl:flex'>
            <img src="/P.png" className="w-10 h-10 opacity-80 hover:opacity-100 mt-4 mb-4"></img>
            {projectData.map((row, index) => (
                  <React.Fragment key={index}>
                  <div className="relative group">
                    <div className="hover:ring-10 ho hover:ring-[#1f1f1f] rounded">
                      <img key={`${index}-src`} src={row.imgSrc} className="rounded-lg w-12 h-12 cursor-pointer "></img>
                    </div>
                    <div key={`${index}-title`} className="absolute left-full top-1/2 transform -translate-y-1/2 ml-4 px-3 py-1 bg-[#1f1f1f] text-white text-m rounded opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 pointer-events-none whitespace-nowrap">
                      <div className="font-semibold">
                        {row.title}
                      </div>
                      <div className="text-sm text-gray-400">
                        {row.category} • nsasapan
                      </div>
                    </div>
                  </div>
                  </React.Fragment>
                ))}      
          </div>
          <div className="flex-1 bg-gradient-to-b from-[#1700b4] via-[#121212] rounded-lg overflow-y-auto">
            <div className="m-6 flex-col">
              <div className="flex flex-1">
                <img src="/nate.jpg" className="w-58 h-58 rounded-lg"></img>
                <div className="flex flex-col m-6 pt-8">
                  <h1 className="text-sm font-inter">Software Developer</h1>
                  <h1 className="font-black tracking-tight font-inter text-[50px] xl:text-[85px]">Nate Sasapan</h1>
                  <div className="flex items-center text-sm">
                    <img src="/kittycat.png" className="w-8 h-8"></img>
                      <div className="relative group">
                        <a href="https://open.spotify.com/user/nsasapan">
                          <h1 className="font-bold p-1 cursor-pointer hover:underline">nsasapan</h1>
                        </a>
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 py-1 bg-[#1f1f1f] text-white text-sm rounded opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 pointer-events-none whitespace-nowrap">
                          Check out my Spotify!
                        </div>
                      </div>
                    <h1 className="text-gray-300">• University of Georgia Alumni • B.S. Computer Science</h1>
                  </div>
                </div>
              </div>
              <div className="flex pt-3 gap-5 items-center">
                <img src="/greenPlay.png" className="w-15 h-15 hover:scale-110 cursor-pointer"></img>
                <img src="/preview.png" className="w-10 h-10 hover:scale-110 cursor-pointer h-full"></img>
                <img src="/shuffle.png" className="w-8 h-8 hover:scale-110 cursor-pointer h-full"></img>

                <div className="relative group inline-block">
                  <a href="/resume">
                    <img src="/download.png" className="w-7 h-7 hover:scale-110 opacity-80 hover:opacity-100 cursor-pointer h-full"></img>                </a>
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-4 px-3 py-1 bg-[#1f1f1f] text-white text-sm rounded opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 pointer-events-none whitespace-nowrap">
                    Download my resume!
                  </div>
                </div>
                <div className="relative group inline-block">
                  <a href="https://www.linkedin.com/in/nate-sasapan-901115255/">
                    <img src="/friend.png" className="w-7 h-7 hover:scale-110 opacity-80 hover:opacity-100 cursor-pointer h-full"></img>
                  </a>
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-4 px-3 py-1 bg-[#1f1f1f] text-white text-sm rounded opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 pointer-events-none whitespace-nowrap">
                    Add me on Linkedin!
                  </div>
                </div>
                <img src="/options.png" className="w-7 h-7 hover:scale-110 opacity-80 hover:opacity-100 cursor-pointer h-full"></img>
              </div>
              <div className="grid grid-cols-[1fr_18fr_12fr_12fr_1fr] gap-0 text-gray-400 pt-5">
                {/* Header */}
                <div className="pb-1 mb-5 ps-5 border-b border-gray-700 text-[14px]">#</div>
                <div className="pb-1 mb-5 ps-2 border-b border-gray-700 text-[14px]">Title</div>
                <div className="pb-1 mb-5 border-b border-gray-700 text-[14px]">Date Started</div>
                <div className="pb-1 mb-5 border-b border-gray-700 text-[14px]">Date Finished</div>
                <div className="pb-1 mb-5 border-b border-gray-700 ps-1">
                  <img src="/clock.png" className="w-4 h-4"></img>
                </div>

                
                {/* Data rows */}
                {workData.map((row, index) => (
                  <React.Fragment key={index}>
                    <div key={`${index}-number`} className="ps-5 pb-3 pt-3 pe-3 font-mono">{index + 1}</div>
                    <div key={`${index}-title`} className="pb-3 pt-1 ps-2">
                      <div className="flex gap-3">
                        <img src={row.imgSrc} className="w-10 h-10 rounded"></img>
                        <div className="flex-1 min-w-0">
                          <h3 
                            onClick={() => {
                            if ((index === 0 && !networkOpen) || 
                                (index === 1 && !techOpen) || 
                                (index === 2 && !researchOpen) || 
                                (index === 3 && !studentOpen)) {
                              
                              setNetworkOpen(index === 0);
                              setTechOpen(index === 1);
                              setResearchOpen(index === 2);
                              setStudentOpen(index === 3);
                            }
                            setNowPlaying(true);
                          }} 
                          className="text-m text-white truncate hover:underline cursor-pointer">{row.title}</h3>
                          <p className="text-gray-500 text-[14px] truncate hover:underline cursor-pointer">{row.company}</p>
                        </div>
                      </div>
                    </div>
                    <div key={`${index}-dateStarted`} className="pb-3 pt-3 text-gray-400 text-[14px]">{row.dateStarted}</div>
                    <div key={`${index}-dateFinished`} className="pb-3 pt-3 text-gray-400 text-[14px]">{row.dateFinished}</div>
                    <div key={`${index}-time`} className="pb-3 pt-3 text-gray-400 text-[14px]">{row.time}</div>
                  </React.Fragment>
                ))}            
                
              </div>
              <h1 className="pt-8 font-inter font-bold text-[24px]"> Projects </h1>
              <div className="flex pt-3 gap-3">
                {projectData.map((row, index) => (
                  <React.Fragment key={index}>
                    <div className={`flex flex-col gap-2 ${index === projectIndex ? 'bg-[#1f1f1f] p-4 rounded-xl' : 'mt-5'} rounded pb-10 cursor-pointer`}
                      onClick={() => {
                        if (projectIndex === index) {
                          setProjectIndex(-1);
                        }
                        else {
                          setProjectIndex(index);
                        }
                      }} 
                    >
                      
                      <img 
                        key={`${index}-src`} src={row.imgSrc} 
                        className={`rounded-lg ${index === projectIndex ? 'w-75 h-75' : 'w-45 h-45'} cursor-pointer transition-all duration-300`}>
                      </img>
                      <div>
                        <h1 
                          key={`${index}-src`} 
                          className={`text-white ${index === projectIndex ? 'text-[20px]' : 'text-[16px]'} transition-all duration-300 font-inter `}>{row.title}</h1>
                        <h2 key={`${index}-album-yr`}className="text-gray-400 text-[14px] font-inter ">{row.category} • {row.year}</h2>
                      </div>
                    </div>
                  </React.Fragment>
                ))}  

              </div>

              <div className="mt-10">
                {projectItem ? (
                  <>
                    <div className="text-gray-200 bg-[#1f1f1f] rounded-xl p-3 mb-5">
                      <a href={projectItem.gitLink}>
                        <h1 className="text-blue-400 hover:underline text-[20px]">GitHub - {projectItem.title}</h1>
                      </a>
                      <hr className="mt-2 mb-2"></hr>
                      <ul className="text-gray-200 list-disc list-inside rounded-xl">
                        <li>{projectItem.duty1}</li>
                        <li>{projectItem.duty2}</li>
                        <li>{projectItem.duty3}</li>
                      </ul>
                    </div>
                  </>
                ) : (
                  <>
                  </>
              )} 
              </div>

              <h1 className="pt-8 font-inter font-bold text-[24px]"> About </h1>
              <div className="flex items-center">
                <div></div>
                <img src="/nate2.png" className={`mt-5 me-5 rounded-xl h-auto ${nowPlaying ? 'w-140' : 'w-210'}`}></img>
                <div className={`text-white space-y-4 leading-relaxed mt-5 font-inter overflow-hidden ${nowPlaying ? 'h-100 overflow-y-auto' : ''}`}>
                  <p className="text-3xl font-bold">
                    Hello!
                  </p>
                  <p className="text-lg">
                    My name is Nate, and I&aposm a spring 2025 computer science graduate from the University of Georgia.
                  </p>
                  <p>
                    When I first began my studies at the University of Georgia, I initially envisioned myself as a software engineer. I wanted to create programs and applications for people to solve complex problems. But as I progressed through my degree, I discovered something unexpected:
                  </p>
                  <p className="italic text-gray-300">
                    My favorite moments weren&apos;t debugging code or optimizing algorithms - they were helping my teammates understand our API system, presenting technical projects to judges at Hackathon, or seeing relief on professors&apos; faces after fixing classroom technology in real-time.
                  </p>
                  <p className="font-medium">
                    I realized that my true passion lies in using technology to solve people&apos;s problems and helping others to understand solutions at a more technical level.
                  </p>
                  <p>
                    As I continue my search for work, I am focused on honing my current skills and learning new ones in the process.
                  </p>
                  <p className="text-green-400 font-semibold">
                    I&apos;m eager to join your company and start contributing!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={`flex flex-col gap-4 group items-center rounded-lg bg-[#121212] text-white ${
            nowPlaying ? 'w-9/40 items-start pl-4 pe-4 overflow-y-auto' : 'hidden'
          } overflow-hidden`}>
            <div className="flex items-center pt-4">
              <button
                onClick={() => {
                  setNowPlaying(!nowPlaying);
                  setNetworkOpen(!networkOpen);
                  setTechOpen(!techOpen);
                  setResearchOpen(!researchOpen);
                  setStudentOpen(!studentOpen);
                  }
                }
                className="opacity-0 -translate-x-7 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                >
              <img src="/close.png" className="w-6 h-6 opacity-80 hover:opacity-100"></img>
            </button>
            <h1 className="font-bold ps-2 text-lg -translate-x-8 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">Now Playing</h1>
            </div>
            {activeItem ? (
              <>
                <img src={activeItem.imgSrc} alt={activeItem.title} className="rounded-xl"/>
                <div>
                  <h1 className="font-bold text-2xl">{activeItem.title}</h1>
                  <h1 className="text-gray-400 text-lg">{activeItem.company}</h1>
                </div>
                  <ul className="text-gray-200 list-disc list-inside bg-[#1f1f1f] rounded-xl p-3 mb-5 ring-7 ring-[#1f1f1f] list-outside">
                    <li>{activeItem.duty1}</li>
                    <br></br>
                    <li>{activeItem.duty2}</li>
                    <br></br>
                    <li>{activeItem.duty3}</li>
                  </ul>
              </>
            ) : (
              <>
                <img src="/default.png" alt="" />
                <h1 className="font-bold text-2xl">Nothing Selected</h1>
              </>
            )}
            <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-[#121212] to-transparent pointer-events-none rounded-b-lg"></div>
          </div>
        </main>
        <Footer/>
      </div>

      {/* Mobile Layout */}
      <div className="block md:hidden">
        <MobileHeader/>
        <main className="bg-[#1f1f1f] p-4" style={{
          background: 'linear-gradient(to bottom, #1700b4 0px, #121212 300px, #121212 100%)'
        }}>
          
          {/* Album Cover */}
          <div className="flex flex-col items-center">
            {/* 6-7 loooooool                   ⬇ */}
            <img src="/nate.jpg" className="w-67 h-67 rounded mb-2"/>
          </div>

          {/* Album Details */}
          <div>
            <h1 className="text-[20px] font-bold font-inter tracking-tight mt-1">Nate Sasapan</h1>

            {/* Album Pic and username */}
            <div className="flex items-center gap-1">
              <img className="w-6 h-6" src="/kittycat.png"></img>
              <h1 className="text-[12px] font-bold font-inter">nsasapan</h1>
            </div>
            
            {/* Save count and Length */}
            <div className="flex items-center mt-1">
              <h1 className="text-[12px] opacity-60">🌐 8 saves · 25h 42m</h1>
            </div>

            {/* Buttons */}
            <div className="grid grid-cols-[2fr_1fr]">

              {/* Left Section */}
              <div className="flex pt-3 gap-5 items-center">
                  <img src="/preview.png" className="w-8 h-auto"></img>
                  <a href="/resume">
                    <img src="/download.png" className="w-4 h-4 hover:scale-110 opacity-80 hover:opacity-100 cursor-pointer h-full"></img>                
                  </a>
                  <a href="https://www.linkedin.com/in/nate-sasapan-901115255/">
                    <img src="/friend.png" className="w-4 h-4 hover:scale-110 opacity-80 hover:opacity-100 cursor-pointer h-full"></img>
                  </a>
                <img src="/options.png" className="w-4 h-4 hover:scale-110 opacity-80 hover:opacity-100 cursor-pointer"></img>
              </div>

              {/* Right Section */}
              <div className="flex justify-end items-center gap-4 ">
                <img src="/shuffle.png" className="w-6 h-6 hover:scale-110 opacity-80 cursor-pointer"></img>
                <img src="/greenPlay.png" className="w-12 h-12 hover:scale-110 cursor-pointer"></img>
              </div>
            </div>
            
          </div>

          {/* Work Experience as expandable song cards */}
          <hr className="mt-4 mb-3 opacity-60"></hr>
            <h2 className="text-m font-bold text-white me-2">Experience </h2>
            <h3 className="text-white text-[10px] opacity-60 mb-4">(click me!)</h3>
          {workData.map((job, index) => (
            <div key={index} className={`rounded p-1 cursor-pointer transition-all duration-100 ${projectIndex  === index ? 'bg-[#1f1f1f]' : 'bg-[#121212]'}`}>
              <div 
                className="flex gap-2 mb-2 items-center"
                  onClick={() => {
                    if (projectIndex === index) {
                      setProjectIndex(-1);
                    } else {
                      setProjectIndex(index);
                    }
                  }} 
                >
                <img src={job.imgSrc} className="w-10 h-10 rounded"></img>
                <div className="flex flex-col justify-center items-start">
                  <h1 className="text-[14px]">{job.title}</h1>
                  <h1 className="text-[11px] opacity-60">{job.company}</h1>
                </div>
                <img src="/options.png" className="ml-auto w-5 h-5"></img>
              </div>
              <div className={`${projectIndex === index ? '' : 'hidden'}`}>
                <h1 className="text-xs opacity-80 pt-2">
                  {job.dateStarted} - {job.dateFinished}
                </h1>
                <ul className="text-gray-300 text-sm space-y-2 list-disc list-outside p-2 pl-4">
                  <li>{job.duty1}</li>
                  <li>{job.duty2}</li>
                  <li>{job.duty3}</li>
                </ul>
              </div>
            </div>
          ))}

          {/* Projects */}
          <h2 className="text-m font-bold text-white mb-4 mt-4">Projects</h2>
          {projectData.map((project, index) => (
            <div key={index} className="bg-[#1f1f1f] rounded-lg p-4 mb-4">
              <img src={project.imgSrc} className="w-full rounded-lg mb-3"/>
              <h3 className="text-white font-bold text-lg">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-2">
                {project.category} • {project.year}
              </p>
              <p className="text-gray-300 text-sm mb-3">{project.description}</p>
              <a href={project.gitLink} className="text-blue-400 text-sm">
                View on GitHub →
              </a>
            </div>
          ))}

          {/* About */}
          <h2 className="text-m font-bold text-white mt-4">About</h2>
          <div className="bg-[#1f1f1f] rounded pt-4 pe-4 ps-4 pb-2 mt-2">
            <div className="text-white font-inter">
              <img src="/nate2.png" className=" rounded w-auto h-auto"></img>
              
              {/* Hide Overflow */}
              <div className={`flex flex-col pt-4 gap-2 ${aboutOpen === true ? 'h-auto' : 'h-22' } overflow-hidden transition-all duration-300`}>
                <h1>Hello!</h1>
                <h1 className="text-[12px]">My name is Nate, and I&apos;m a spring 2025 computer science graduate from the University of Georgia.</h1>
                <p className="text-[12px]">
                  When I first began my studies at the University of Georgia, I envisioned myself as a software engineer creating programs and applications to solve complex problems. As I progressed through my degree, that vision only strengthened.
                </p>
                <p className="italic text-gray-300 text-[12px]">
                  What I discovered was that the most rewarding aspects of engineering weren&apos;t just writing code - they were moments like architecting our team&apos;s API system, presenting technical projects to judges at Hackathons, and implementing real-time solutions to classroom technology challenges.
                </p>
                <p className="font-medium text-[12px]">
                  I realized that my passion lies in building robust technical solutions while bridging the gap between complex systems and the people who use them.
                </p>
                <p className="text-[12px]">
                  As I continue my search for a software engineering role, I am focused on deepening my technical expertise and expanding my skill set across the full development lifecycle.
                </p>
                <p className="text-green-400 font-semibold text-[12px]">
                  I&apos;m eager to join your engineering team and start contributing!
                </p>
  
              </div>

              {/* Open/Close button */}
              <h1 className="opacity-80 text-right text-[10px] pt-2" onClick={() => setAboutOpen(!aboutOpen)}>{aboutOpen ? 'see less' : 'see more'}</h1>
          </div>
        </div>

        {/* Mobile Footer */}
        {/* Subject to change */}
        <div className="flex mt-10 justify-center">
          <h1 className="text-center text-sm">created by nate sasapan · 2025 · next.js</h1>
        </div>

        </main>
      </div>
      
    </div>
  );}

import { useState, useRef } from 'react';
import { motion, useInView } from "framer-motion";
import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import ImageSlider from './components/ImageSlider';
import ProjectBox from './components/Projects/ProjectBox';

import img from './assets/profilePic.jpeg';
import personality from './assets/personalityImg.jpeg';
import poison from './assets/poisonWater.jpeg';
import androidMalware from './assets/androidMalware.jpeg';
import blockchain from './assets/blockchain.jpeg';


// to host on mobile --> npm run dev -- --host

const App = () => {

	const ref = useRef(null);
	const ref2 = useRef(null);
	const ref3 = useRef(null);
	const isInView = useInView(ref, { once: true });
	const isInView2 = useInView(ref2, { once: true });
	const isInView3 = useInView(ref3, { once: true });
	const animate = {
		left: 0,
		opacity: 1
	}
	const initialR = {
		left: `100%`,
		opacity: 0
	}
	const initialL = {
		left: `-100%`,
		opacity: 0
	}

	const programmingSkills = [
		{ id: 0, name: `C/C++`, progress: `80` },
		{ id: 1, name: `Python`, progress: `60` },
		{ id: 2, name: `HTML/CSS`, progress: `60` },
		{ id: 3, name: `JavaScript`, progress: `60` },
		{ id: 4, name: `Assembly Language`, progress: `55` },
		{ id: 5, name: `MATLAB`, progress: `45` }
	]
	const databaseSkills = [
		{ id: 0, name: `SQL`, progress: `80` },
		{ id: 1, name: `My SQL`, progress: `40` },
	]
	const skills = [
		{ id: 0, name: `Operating Systems`, progress: `50` },
		{ id: 1, name: `Networking & Computer Security`, progress: `30` },
		{ id: 2, name: `Data Science`, progress: `40` },
		{ id: 3, name: `ML & AI`, progress: `65` },
		{ id: 4, name: `Web Dev`, progress: `60` },
	]
	const softSkills = [
		{ id: 0, name: `Leadership Skills`, progress: `80` },
		{ id: 1, name: `Team Player`, progress: `90` },
	]


	// const projects = [
	// 	{ id: 0, name: `PERSONALITY PREDICTOR`, languages: ' Python ML AI Numpy Keras Pytorch ', desc: ` Developed a personality prediction model by using the social media post of users. Used data mining techniques and natural language processing techniques such as lemmatization to process the raw data and trained certain algorithms such as KNN, SVM, random forest, etc., and then tested them to find the accuracy of the model.` },
	// 	{ id: 1, name: 'EFFECTIVENESS OF POISONED WATER ', languages: ' Python  ML AI Numpy  Keras   Pytorch  ', desc: ' Researched and implemented machine learning algorithms to detect poisoned water by differentiating it from clean water. Utilized two labels and four training settings. Verified accuracy by incorporating Gaussian and white noise etc, retraining the model, and obtaining promising results. Technologies used: pytorch, numpy, pandas, data mining' },
	// 	{ id: 2, name: `BLOCKCHAIN’S INTEGRATION USING IOT AND CLOUD COMPUTING `, languages: `Solidity Smart Contracts  Decentralization IOT cloud computing digital forensics`, desc: `Blockchain combines computer tech, encryption, smart contracts, consensus, and P2P networks for transparent, reliable, and private interactions. This research analyzes blockchain architecture, consensus methods, and ecosystem to clarify its potential impact across industries, shaping its future.` },
	// 	{ id: 3, name: 'ANDROID MALWARE DETECTOR ', languages: `API ML Algorithm  Python permissions`, desc: `This study focuses on the Android mobile operating system's vulnerability to malicious applications due to its open-source nature. The research proposes an innovative method using machine learning to identify malicious Android apps by analyzing permissions and API calls. This static analysis approach demonstrates effectiveness in distinguishing malware from benign apps. The increasing popularity of Android has led to a surge in malware distribution, posing threats like phishing, banking trojans, and more. The research aims to address the growing challenge of Android malware detection.` }
	// ]

	const projects = [
		{ id: 0, name: `PERSONALITY PREDICTOR`, link: `${personality}`, languages: ' Python ML AI Numpy Keras Pytorch ', desc: ` Developed a personality prediction model by using the social media post of users. Used data mining techniques and natural language processing techniques such as lemmatization to process the raw data and trained certain algorithms such as KNN, SVM, random forest, etc., and then tested them to find the accuracy of the model.` },
		{ id: 1, name: 'EFFECTIVENESS OF POISONED WATER ', link: `${poison}`, languages: ' Python  ML AI Numpy  Keras   Pytorch  ', desc: ' Researched and implemented machine learning algorithms to detect poisoned water by differentiating it from clean water. Utilized two labels and four training settings. Verified accuracy by incorporating Gaussian and white noise etc, retraining the model, and obtaining promising results. Technologies used: pytorch, numpy, pandas, data mining' },
		{ id: 2, name: `BLOCKCHAIN’S INTEGRATION USING IOT AND CLOUD COMPUTING `, link: `${blockchain}`, languages: `Solidity Smart Contracts  Decentralization IOT cloud computing digital forensics`, desc: `Blockchain combines computer tech, encryption, smart contracts, consensus, and P2P networks for transparent, reliable, and private interactions. This research analyzes blockchain architecture, consensus methods, and ecosystem to clarify its potential impact across industries, shaping its future.` },
		{ id: 3, name: 'ANDROID MALWARE DETECTOR ', link: `${androidMalware}`, languages: `API ML Algorithm  Python permissions`, desc: `This study focuses on the Android mobile operating system's vulnerability to malicious applications due to its open-source nature. The research proposes an innovative method using machine learning to identify malicious Android apps by analyzing permissions and API calls. This static analysis approach demonstrates effectiveness in distinguishing malware from benign apps. The increasing popularity of Android has led to a surge in malware distribution, posing threats like phishing, banking trojans, and more. The research aims to address the growing challenge of Android malware detection.` }
	]


	// const router = createBrowserRouter(
	// 	createRoutesFromElements(
	// 		<Route path='/' element={<Projects projects={projects} />}>
	// 			{
	// 				projects.map((data, index) => {
	// 					return (
	// 						<Route key={index}
	// 							path={`/${data.id}`}
	// 						element={<InfoBox languages={data.languages} name={data.name} info={data.desc} />}
	// 						/>
	// 					)
	// 				})
	// 			}
	// 		</Route>
	// 	)
	// )


	return (
		<>
			<Navbar item1="About" link1='#about' link2='#skills' item2='Skills' item3='Projects' link3='#projects' item4='Contacts' link4='#contacts' />
			<Intro name='Monkey D Luffy' link='https://www.youtube.com/watch?v=xvFZjo5PgG0' buttonTag='LinkedIn' rotateList={['Programmer', 'Researcher', 'MMA Fighter']} />
			<div className="flex relative w-full h-full bg-black flex-col bg-opacity-30">
				<section className='flex flex-col relative w-full sm:w-5/6 sm:left-1/2 sm:-translate-x-1/2' id='about'>
					<motion.div ref={ref} initial={initialR} animate={isInView ? animate : initialR} transition={{ duration: 0.8 }} className={`heading flex relative w-10/12 text-5xl py-8 sm:pt-8 justify-end`}>
						<span className="w-fit"> ABOUT </span>
					</motion.div>
					<About
						info1={`I am SomeOne, and in my life it is all about Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, veritatis quaerat! Sapiente, sequi qui quod odio enim ut beatae, quo veniam eum explicabo iure cupiditate neque dolorum distinctio debitis maxime.`}
						info2={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, veritatis quaerat! Sapiente, sequi qui quod odio enim ut beatae, quo veniam eum explicabo iure cupiditate neque dolorum distinctio debitis maxime.`}
						info3={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, veritatis quaerat! Sapiente, sequi qui quod odio enim ut beatae, quo veniam eum explicabo iure cupiditate neque dolorum distinctio debitis maxime.`}
						img={img}
					/>
				</section>

				<section className={`skillBox`} id='skills'>
					<motion.div ref={ref2} initial={initialL} animate={isInView2 ? animate : initialL} transition={{ duration: 0.8 }} className='headingL flex relative col-span-2 w-10/12 text-5xl pt-8 justify-start '>
						<span className='w-fit'>SKILLS</span>
					</motion.div>
					<Skills heading='Programming Skills' list={programmingSkills} color='cyan' bgcolor='black' height='5px' />
					<Skills heading='Database Skills' list={databaseSkills} color='cyan' bgcolor='black' height='5px' />
					<Skills heading='Other Skills' list={skills} color='cyan' bgcolor='black' height='5px' />
					<Skills heading='Soft Skills' list={softSkills} color='cyan' bgcolor='black' height='5px' />
				</section>

				{/* <Experience /> */}

				<section className=' flex relative flex-col left-1/2 -translate-x-1/2 w-[65%] h-auto p-8 justify-center items-center' id='projects'>
					<motion.div ref={ref3} initial={initialR} animate={isInView3 ? animate : initialR} transition={{ duration: 0.8 }} className={`heading flex relative w-10/12 text-5xl py-8 sm:pt-8 justify-end`}>
						<span className="w-fit"> PROJECTS </span>
					</motion.div>
					<ImageSlider slides={projects} />
				</section>
				<section id='contacts'>
					<Contact />
				</section>
			</div>
			<div className="flex w-5/6 justify-center items-center relative left-1/2 -translate-x-1/2 mb-40">
				<ProjectBox projects={projects} />
			</div>
		</>
	)
}

export default App;

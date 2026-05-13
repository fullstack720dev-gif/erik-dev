'use client';

import { motion } from 'framer-motion';
import { Code2, Briefcase, GraduationCap, Award, Users, Globe } from 'lucide-react';
import { ScrollAnimation } from '@/components/ScrollAnimation';

const About = () => {
	const achievements = [
		{
			icon: <Code2 className="w-6 h-6" />,
			title: "50+ Projects",
			description: "Delivered web, mobile, SaaS, and automation products for clients across different industries."
		},
		{
			icon: <Briefcase className="w-6 h-6" />,
			title: "10+ Years Experience",
			description: "Built production software using modern frontend, backend, mobile, cloud, and AI technologies."
		},
		{
			icon: <Code2 className="w-6 h-6" />,
			title: "AI Product Builder",
			description: "Integrated LLMs, chatbots, workflow automation, RAG systems, and AI-powered business tools."
		}
	];

	const interests = [
		"AI-Powered Applications",
		"Web Development",
		"Mobile App Development",
		"SaaS Platforms",
		"API & Backend Engineering",
		"Cloud Architecture",
		"Automation Workflows",
		"Product UI/UX",
		"Startup MVP Development"
	];

	return (
		<div className="min-h-screen pt-20 px-4 max-w-4xl mx-auto pb-20">
			<ScrollAnimation>
				<motion.h2 className="text-4xl font-bold mb-8 gradient-text">
					About Me
				</motion.h2>
			</ScrollAnimation>

			<div className="grid md:grid-cols-2 gap-8">
				<ScrollAnimation>
					<div className="aspect-square overflow-hidden rounded-2xl">
						<img
							src="/profile/hero.png"
							alt="Prometheus"
							className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
						/>
					</div>
				</ScrollAnimation>

				<ScrollAnimation className="space-y-6">
					<div className="space-y-4">
						<p className="text-gray-300 leading-relaxed">
							Hi, I’m Prometheus, a senior software engineer specializing in AI-driven full-stack development, web applications, and mobile apps.
						</p>
						<p className="text-gray-300 leading-relaxed">
							I help founders, startups, and growing teams design, build, and scale production-ready software. My work covers everything from frontend interfaces and backend APIs to mobile apps, cloud infrastructure, AI integrations, automation workflows, and third-party service integrations.
						</p>
						<p className="text-gray-300 leading-relaxed">
							Over the years, I’ve worked across modern JavaScript, TypeScript, Python, React, Next.js, Node.js, React Native, Flutter, AWS, and AI/LLM technologies. I focus on writing clean, maintainable code, building smooth user experiences, and delivering products that are practical, scalable, and easy to improve over time.
						</p>
						<p className="text-gray-300 leading-relaxed">
							My strongest value is combining engineering execution with product thinking. I don’t just write code - I help clients choose the right technical direction, reduce complexity, and ship features that users actually need.
						</p>
					</div>

					<ScrollAnimation>
						<div className="pt-4">
							<h3 className="text-2xl font-semibold mb-4 gradient-text">Quick Facts</h3>
							<ul className="list-none space-y-3">
								{[ "Senior Full-Stack, Web & Mobile Engineer", "Specialized in AI-powered applications and automation", "Experienced with startups, SaaS products, marketplaces, and mobile platforms", "Strong background in React, Next.js, Node.js, Python, React Native, Flutter, and AWS", "Comfortable working independently or with remote product teams", "Focused on clean architecture, fast delivery, and long-term maintainability"].map((fact, index) => (
									<motion.li
										key={fact}
										className="flex items-center space-x-2 text-gray-300"
									>
										<span className="w-2 h-2 bg-white rounded-full" />
										<span>{fact}</span>
									</motion.li>
								))}
							</ul>
						</div>
					</ScrollAnimation>

					<ScrollAnimation>
						<div className="flex justify-start space-x-4">
							{/* <a
								href="/files/cv_pdf/Niladri_Chatterjee(CV).pdf"
								target="_blank"
								rel="noopener noreferrer"
								className="px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-100 transition-colors"
							>
								Download CV
							</a> */}
							<a
								href="/skills"
								className="px-6 py-3 bg-white/10 text-white rounded-full font-medium hover:bg-white/20 transition-colors"
							>
								My Skills
							</a>
						</div>
					</ScrollAnimation>
				</ScrollAnimation>
			</div>

			<ScrollAnimation>
				<div className="mt-16">
					<h3 className="text-2xl font-semibold mb-8 gradient-text">Achievements</h3>
					<div className="grid md:grid-cols-3 gap-6">
						{achievements.map((achievement, index) => (
							<ScrollAnimation key={achievement.title}>
								<div className="bg-white/5 p-6 rounded-xl backdrop-blur-sm">
									<div className="text-white mb-4">{achievement.icon}</div>
									<h4 className="text-xl font-semibold mb-2">{achievement.title}</h4>
									<p className="text-gray-400">{achievement.description}</p>
								</div>
							</ScrollAnimation>
						))}
					</div>
				</div>
			</ScrollAnimation>

			<ScrollAnimation>
				<div className="mt-16">
					<h3 className="text-2xl font-semibold mb-8 gradient-text">Areas of Interest</h3>
					<div className="grid grid-cols-2 md:grid-cols-3 gap-4">
						{interests.map((interest, index) => (
							<ScrollAnimation key={interest}>
								<div className="bg-white/5 p-4 rounded-xl backdrop-blur-sm flex items-center gap-3">
									<Globe className="w-5 h-5 text-gray-400" />
									<span className="text-gray-300">{interest}</span>
								</div>
							</ScrollAnimation>
						))}
					</div>
				</div>
			</ScrollAnimation>
		</div>
	);
};

export default About;
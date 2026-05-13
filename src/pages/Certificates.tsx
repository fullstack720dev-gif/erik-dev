'use client';

import { motion } from 'framer-motion';
import { Award, Calendar, ExternalLink } from 'lucide-react';
import { ScrollAnimation } from '@/components/ScrollAnimation';

const certificates = [
	{
		title: "AWS Certified Developer – Associate",
		issuer: "Amazon Web Services",
		date: "22th April 2025",
		link: "",
		description: "Validates practical skills in developing, testing, deploying, and debugging cloud-based applications on AWS. Strongly aligned with my backend, serverless, API, monitoring, and production deployment experience. AWS describes this certification as focused on developer-role skills for AWS Cloud-based applications.",
		skills: ["AWS", "Lambda", "API Gateway", "CloudWatch", "Serverless", "Backend Development"]
	},
	{
		title: "Generative AI for Software Developers",
		issuer: "DeepLearning.AI / Coursera",
		date: "20th March 2025",
		link: "",
		description: "Covers practical use of generative AI in software development, including prompting, code generation, testing, documentation, and workflow improvement. This fits my AI-driven engineering focus and experience building AI-assisted product features.",
		skills: ["Generative AI", "Prompt Engineering", "LLMs", "AI Development", "Software Engineering"]
	},
	{
		title: "ChatGPT Prompt Engineering for Developers",
		issuer: "DeepLearning.AI",
		date: "26th February 2025",
		link: "",
		description: "Focuses on prompt engineering best practices, using LLMs for summarization, transformation, inference, and building AI-powered applications with the OpenAI API. This is directly aligned with my OpenAI API, AI chatbot, and AI automation work.",
		skills: ["OpenAI API", "Prompt Engineering", "LLM Apps", "AI Chatbots", "Automation"]
	},
	{
		title: "Meta React Native Specialization",
		issuer: "Meta / Coursera",
		date: "18th February 2025",
		link: "",
		description: "Covers cross-platform mobile development for iOS and Android using React Native, with a focus on reliable, scalable, and user-friendly mobile applications. This supports my mobile experience with React Native, app workflows, notifications, and production mobile delivery.",
		skills: ["React Native", "Mobile Development", "iOS", "Android", "Cross-Platform Apps"]
	},
	{
		title: "Meta React Specialization",
		issuer: "Meta / Coursera",
		date: "18th Fabruary 2025",
		link: "",
		description: "Covers modern React development, reusable components, data flow, user interaction, and building scalable frontend applications. This matches my frontend experience with React, Next.js, TypeScript, dashboards, portals, and SaaS user interfaces.",
		skills: ["React.js", "Frontend Development", "Component Architecture", "UI Development", 'JavaScript']
	},
	{
		title: "Docker Foundations Professional Certificate",
		issuer: "Docker / LinkedIn Learning",
		date: "10 Oct 2023",
		link: "",
		description: "Covers container fundamentals and practical Docker workflows for application packaging, deployment, and environment management. Docker’s training page lists a Docker Foundations Professional Certificate through LinkedIn Learning.",
		skills: ["Docker", "Containers", "DevOps", "Deployment", "CI/CD"]
	},
	{
		title: "JavaScript Skills Certification",
		issuer: "HackerRank",
		date: "10 Jul 2023",
		link: "",
		description: "Validates core JavaScript programming skills, including functions, events, scope, inheritance, error handling, and browser/server-side development concepts. HackerRank describes its skills certifications as standardized assessments for proving coding skills.",
		skills: ["JavaScript", "Frontend Development", "Node.js", "Problem Solving", "Web Development"]
	},
	{
		title: "Problem Solving Certification",
		issuer: "HackerRank",
		date: "10 Jul 2023",
		link: "",
		description: "Validates algorithmic thinking, coding ability, and structured problem-solving skills. This supports my software engineering background across backend systems, APIs, real-time workflows, and scalable product development.",
		skills: ["Algorithms", "Data Structures", "Problem Solving", "Coding", "Software Engineering"]
	}
];

const Certificates = () => {
	return (
		<div className="min-h-screen pt-20 px-4 max-w-6xl mx-auto pb-20">
			<ScrollAnimation>
				<motion.div
					className="flex items-center gap-3 mb-12"
					initial={{ opacity: 0, x: -20 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.8 }}
				>
					<Award className="w-8 h-8" />
					<h2 className="text-4xl font-bold gradient-text">Certificates</h2>
				</motion.div>
			</ScrollAnimation>

			<div className="grid md:grid-cols-2 gap-6">
				{certificates.map((cert, index) => (
					<ScrollAnimation key={cert.title}>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: index * 0.1 }}
							className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm hover:bg-gray-800/70 transition-all group border border-white/5"
						>
							<h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
							<div className="text-gray-400 space-y-2">
								<div className="flex items-center justify-between">
									<span className="text-lg">{cert.issuer}</span>
									<div className="flex items-center gap-2">
										<Calendar className="w-4 h-4" />
										<span>{cert.date}</span>
									</div>
								</div>
								<p className="text-gray-300 line-clamp-2">{cert.description}</p>
								<div className="flex flex-wrap gap-2 mt-4">
									{cert.skills.map((skill) => (
										<span
											key={skill}
											className="px-2 py-1 text-sm bg-white/10 rounded-full"
										>
											{skill}
										</span>
									))}
								</div>
								{/* <motion.a
									href={cert.link}
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 mt-4 group-hover:translate-x-2 transition-transform"
									whileHover={{ scale: 1.05 }}
								>
									View Certificate
									<ExternalLink className="w-4 h-4" />
								</motion.a> */}
							</div>
						</motion.div>
					</ScrollAnimation>
				))}
			</div>
		</div>
	);
};

export default Certificates;
'use client';

import { motion } from 'framer-motion';
import { Briefcase, MapPin, Building2, ExternalLink, ArrowRight } from 'lucide-react';
import { ScrollAnimation } from '@/components/ScrollAnimation';

const experiences = [
	{
		title: "Lead Software Engineer",
		company: "AnchorStack Tech / Fischer Software",
		location: "Remote / Chicago, IL",
		period: "Jan 2022 – Apr 2026",
		type: "Contract",
		image: "/experience/anchor.png",
		certificateUrl: "",
		description: [
			"Led end-to-end development of an AI-powered field service SaaS platform across web, mobile, backend, payments, cloud deployment, and production support.",
			"Built customer portal, admin dashboard, React Native mobile workflows, scheduling engine, Stripe payments, notifications, reporting, and AI-assisted support features."
		]
	},
	{
		title: "Senior Software Engineer",
		company: "Rula / Path Mental Health",
		location: "Remote / New York, NY",
		period: "Sep 2019 – Nov 2021",
		type: "Full-time",
		image: "/experience/rula.png",
		certificateUrl: "",
		description: [
			"Built patient-provider matching, onboarding, scheduling, telehealth, intake forms, secure uploads, reminders, and internal operations workflows.",
			"Improved healthcare platform reliability with Redis caching, PostgreSQL indexing, paginated APIs, Twilio/SendGrid retries, CI/CD, monitoring, and production support."
		]
	},
	{
		title: "Software Engineer II",
		company: "DoorDash",
		location: "Hybrid / New York, NY",
		period: "Sep 2016 – Jul 2019",
		type: "Full-time",
		image: "/experience/doosh.png",
		certificateUrl: "",
		description: [
			"Built customer-facing order tracking and post-checkout experiences across mobile and web, improving live order visibility, ETA updates, and delivery-status accuracy.",
			"Designed backend APIs for order, merchant, Dasher, ETA, cancellation, refund, and delivery states with real-time updates, caching, feature flags, monitoring, and tests."
		]
	},
	{
		title: "Software Engineering Intern",
		company: "Google",
		location: "New York, NY",
		period: "Jun 2016 – Aug 2016",
		type: "Internship",
		image: "/experience/google.png",
		certificateUrl: "",
		description: [
			"Built internal Google Play release-health dashboard features to monitor staged rollouts, crash/ANR metrics, app versions, and device-level release issues.",
			"Developed backend aggregation logic and dashboard views for rollout status, release-quality signals, Android device breakdowns, and previous-version comparisons."
		]
	},
];

const Experience = () => {
	return (
		<div className="min-h-screen pt-16 sm:pt-20 px-4 max-w-5xl mx-auto pb-16 sm:pb-20">
			<ScrollAnimation>
				<h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 gradient-text flex items-center gap-3">
					<Briefcase className="w-7 h-7 sm:w-8 sm:h-8" />
					Professional Experience
				</h2>
			</ScrollAnimation>

			<div className="space-y-8 sm:space-y-12">
				{experiences.map((exp, index) => (
					<ScrollAnimation key={exp.title}>
						<div className="group relative bg-gray-800/50 rounded-xl sm:rounded-2xl overflow-hidden backdrop-blur-sm hover:bg-gray-800/70 transition-all border border-white/5">
							<div className="grid grid-cols-1 md:grid-cols-[1fr,300px]">
								<div className="p-6 sm:p-8">
									<div className="flex items-center gap-3 mb-4 sm:mb-6">
										<div className="p-2 sm:p-3 bg-white/10 rounded-lg sm:rounded-xl group-hover:bg-white/20 transition-colors">
											<Building2 className="w-6 h-6 sm:w-7 sm:h-7" />
										</div>
										<div>
											<h3 className="text-xl sm:text-2xl font-bold mb-1">{exp.title}</h3>
											<p className="text-gray-400 text-base sm:text-lg">{exp.company}</p>
										</div>
									</div>

									<div className="flex flex-wrap items-center gap-2 text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
										<MapPin className="w-4 h-4" />
										<span>{exp.location}</span>
										<span>•</span>
										<span>{exp.period}</span>
									</div>

									<ul className="space-y-3 sm:space-y-4">
										{exp.description.map((item, i) => (
											<li
												key={i}
												className="flex items-start gap-3 text-gray-300 text-sm sm:text-base"
											>
												<ArrowRight className="w-5 h-5 mt-0.5 text-gray-400 flex-shrink-0" />
												<span className="leading-relaxed">{item}</span>
											</li>
										))}
									</ul>

									{/* <motion.a
										href={exp.certificateUrl}
										target="_blank"
										rel="noopener noreferrer"
										className="md:hidden mt-6 inline-flex items-center gap-2 px-6 py-2.5 text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg transition-all duration-300 text-sm font-medium"
										whileHover={{ scale: 1.02 }}
									>
										View Certificate
										<ExternalLink className="w-4 h-4" />
									</motion.a> */}
								</div>

								<div className="relative hidden md:block">
									<div className="absolute inset-0 group-hover:scale-105 transition-transform duration-500">
										<img
											src={exp.image}
											alt={exp.company}
											className="w-full h-full object-cover"
										/>
										<div className="absolute inset-0 bg-gradient-to-r from-gray-800/80 to-transparent group-hover:scale-105 transition-transform duration-500" />
									</div>
									<div className="relative h-full flex items-center justify-center">
										{/* <motion.a
											href={exp.certificateUrl}
											target="_blank"
											rel="noopener noreferrer"
											className="px-8 py-3 text-white font-bold bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-xl flex items-center gap-2 transition-all duration-300 hover:scale-105 border border-white/10 hover:border-white/20"
											whileHover={{ y: -5 }}
										>
											View Certificate
											<ExternalLink className="w-4 h-4" />
										</motion.a> */}
									</div>
								</div>
							</div>
						</div>
					</ScrollAnimation>
				))}
			</div>
		</div>
	);
};

export default Experience;
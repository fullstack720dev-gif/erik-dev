'use client';

import { motion } from 'framer-motion';
import {
	Code2, Layout, Server, Database, MessageSquare, Lightbulb, Users, Brain,
	Cloud, Terminal, Wrench,
	BrainCircuit,
	Sparkles,
	Bot,
	MessageCircleCode,
	SearchCheck,
	LayoutDashboard,
	Atom,
	LayoutTemplate,
	FileCode2,
	Wind,
	Smartphone,
	PanelsTopLeft,
	MonitorSmartphone,
	ServerCog,
	Route,
	Zap,
	Cable,
	Layers,
	Leaf,
	RadioTower,
	Container,
	GitBranch,
	Workflow,
	CreditCard,
	PhoneCall,
	Mail,
	CalendarDays,
	ShieldCheck,
	TestTube2,
	FlaskConical,
	Activity,
	Network,
	Handshake,
} from 'lucide-react';
import { ScrollAnimation } from '@/components/ScrollAnimation';
import {
	CppLogo, PythonLogo, JavaScriptLogo, HTML5Logo,
	CSSLogo, ReactLogo, TypeScriptLogo, NodeLogo, MySQLLogo,
	MongoDBLogo, VSCodeLogo, GitLogo, TailwindLogo, ShadCNLogo, NextjsLogo,
	VirtualBoxLogo, VercelLogo
} from '@/components/TechLogos';

const skills = [
	{
		category: 'AI & LLM Engineering',
		icon: <BrainCircuit className="w-6 h-6" />,
		items: [
			{ name: 'OpenAI API', icon: <Sparkles /> },
			{ name: 'LLM Integration', icon: <Bot /> },
			{ name: 'AI Chatbots', icon: <MessageCircleCode /> },
			{ name: 'RAG Systems', icon: <SearchCheck /> }
		]
	},
	{
		category: 'Front-End Development',
		icon: <LayoutDashboard className="w-6 h-6" />,
		items: [
			{ name: 'React.js', icon: <Atom /> },
			{ name: 'Next.js', icon: <LayoutTemplate /> },
			{ name: 'TypeScript', icon: <FileCode2 /> },
			{ name: 'Tailwind CSS', icon: <Wind /> }
		]
	},
	{
		category: 'Mobile Development',
		icon: <Smartphone className="w-6 h-6" />,
		items: [
			{ name: 'React Native', icon: <Smartphone /> },
			{ name: 'Flutter', icon: <PanelsTopLeft /> },
			{ name: 'Kotlin', icon: <Code2 /> },
			{ name: 'iOS / Android', icon: <MonitorSmartphone /> }
		]
	},
	{
		category: 'Back-End Development',
		icon: <Server className="w-6 h-6" />,
		items: [
			{ name: 'Node.js', icon: <ServerCog /> },
			{ name: 'Express.js', icon: <Route /> },
			{ name: 'FastAPI', icon: <Zap className="w-4 h-4" /> },
			{ name: 'GraphQL APIs', icon: <Cable className="w-4 h-4" /> }
		]
	},
	{
		category: 'Database & Messaging',
		icon: <Database />,
		items: [
			{ name: 'PostgreSQL', icon: <Database /> },
			{ name: 'Redis', icon: <Layers /> },
			{ name: 'MongoDB', icon: <Leaf /> },
			{ name: 'Kafka', icon: <RadioTower /> }
		]
	},
	{
		category: 'Cloud & DevOps',
		icon: <Cloud className="w-6 h-6" />,
		items: [
			{ name: 'AWS', icon: <Cloud /> },
			{ name: 'Docker', icon: <Container /> },
			{ name: 'GitHub Actions', icon: <GitBranch /> },
			{ name: 'CI/CD', icon: <Workflow /> }
		]
	},
	{
		category: 'Payments & Integrations',
		icon: <CreditCard className="w-6 h-6" />,
		items: [
			{ name: 'Stripe', icon: <CreditCard className="w-4 h-4" /> },
			{ name: 'Twilio', icon: <PhoneCall className="w-4 h-4" /> },
			{ name: 'SendGrid', icon: <Mail className="w-4 h-4" /> },
			{ name: 'Calendar APIs', icon: <CalendarDays className="w-4 h-4" /> }
		]
	},
	{
		category: 'Testing & Reliability',
		icon: <ShieldCheck className="w-6 h-6" />,
		items: [
			{ name: 'Jest', icon: <TestTube2 className="w-4 h-4" /> },
			{ name: 'API Testing', icon: <FlaskConical className="w-4 h-4" /> },
			{ name: 'Datadog', icon: <Activity className="w-4 h-4" /> },
			{ name: 'Monitoring', icon: <Activity className="w-4 h-4" /> }
		]
	},
	{
		category: 'Engineering Leadership',
		icon: <Users className="w-6 h-6" />,
		items: [
			{ name: 'Architecture', icon: <Network className="w-4 h-4" /> },
			{ name: 'Product Ownership', icon: <Network className="w-4 h-4" /> },
			{ name: 'Code Review', icon: <Code2 className="w-4 h-4" /> },
			{ name: 'Monitoring', icon: <Handshake className="w-4 h-4" /> }
		]
	}
];

const Skills = () => {
	return (
		<div className="min-h-screen pt-20 px-4 max-w-6xl mx-auto pb-20">
			<ScrollAnimation>
				<h2 className="text-4xl font-bold mb-4 gradient-text">Technical Skills</h2>
			</ScrollAnimation>

			<ScrollAnimation>
				<p className="text-gray-400 mb-12 max-w-2xl">
					A comprehensive overview of my technical expertise and tools I work with
				</p>
			</ScrollAnimation>

			<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
				{skills.map((skillGroup, index) => (
					<ScrollAnimation key={skillGroup.category}>
						<div className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm hover:bg-gray-800/70 transition-all border border-white/5">
							<div className="flex items-center space-x-3 mb-6">
								<div className="p-2 bg-white/10 rounded-lg">
									{skillGroup.icon}
								</div>
								<h3 className="text-lg font-semibold">{skillGroup.category}</h3>
							</div>
							<div className="grid grid-cols-2 gap-4">
								{skillGroup.items.map((skill, skillIndex) => (
									<div
										key={skill.name}
										className="bg-gray-700/50 px-4 py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-white/10 transition-all group"
									>
										<div className="text-gray-400 group-hover:text-white transition-colors">
											{skill.icon}
										</div>
										<span className="text-gray-400 group-hover:text-white transition-colors text-sm">
											{skill.name}
										</span>
									</div>
								))}
							</div>
						</div>
					</ScrollAnimation>
				))}
			</div>
		</div>
	);
};

export default Skills;
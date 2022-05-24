let raw = `
personal assistant,  language comprehension, natural language, AI
self-driving, automation, retail
privacy, data collection, data sharing, security
AI, image recognition, contextual awareness, self-driving, autonomy
AI collaboration, Manufacturing, design, optimisation
AI collaboration, design, composition, Art, music
Neuro-linguistic programming, AI, language comprehension, AI collaboration, Law,  natural language
Neuro-linguistic programming, AI, language comprehension, AI collaboration, Law,  natural language
image recognition, contextual awareness, Extended Reality, Virtual Reality, tool, safety, Hazard Identification
Ai, image recognition, contextual awareness, AI collaboration
AI collaboration, AI, chatbot, fraud detection, analysis, insurance, customer care
AI collaboration, AI, language comprehension, natural language, coaching, education, presentations
voice-to-text, AI,  language comprehension, natural language, coaching, education, AI collaboration
personal assistant,  language comprehension, natural language, AI, smart speakers,  smart outlets
data processing, computer vision, LIDAR, real-time information
data processing, design, Engineering, software, testing
Edge computing, AI, image recognition, image processing, security, privacy
Machine Learning, blockchain, data-sharing, Discovery, decentralisation, security
virtual environments, simulation, automation, self-driving, navigation
inspection, 3D mapping, robot, autonomy, computer vision, 
self-driving, automation, agriculture, farming
self-driving, automation, retail,  5G, IOT
Autonomy, AI, troubleshooting, performance optimization
Automation, AI, self-driving, Automotive
AI, retail
Self-driving, automation, AI
Automation, data processing, retail, personalisation
5G, VR, AR, simulation
IoT, 5G, retail
AI, image recognition, Data proccessing
Autonomy, AI, self-driving, agriculture, farming
Autonomy, AI, self-driving, agriculture, farming
AI, natural language, language comprehension, robot
AI, AR, VR, 3D Priniting, codeless
Homomorphic encryption, machine learning, edge computing, security`;

raw = raw.replace(/\n/g, ",");
raw = raw.split(",");
raw = raw.map(tag => {
    tag = tag.trim();
    tag = tag.replace("  ", " ");
    return tag;
});
raw = raw.filter(Boolean);
raw = Array.from(new Set(raw));


let r1 = [
    'personal assistant',
    'language comprehension',
    'natural language',
    'AI',
    'self-driving',
    'automation',
    'retail',
    'privacy',
    'data collection',
    'data sharing',
    'security',
    'image recognition',
    'contextual awareness',
    'autonomy',
    'AI collaboration',
    'Manufacturing',
    'design',
    'optimisation',
    'composition',
    'Art',
    'music',
    'Neuro-linguistic programming',
    'Law',
    'Extended Reality',
    'Virtual Reality',
    'tool',
    'safety',
    'Hazard Identification',
    'chatbot',
    'fraud detection',
    'analysis',
    'insurance',
    'customer care',
    'coaching',
    'education',
    'presentations',
    'Voice-To-Text',
    'smart speakers',
    'smart outlets',
    'data processing',
    'computer vision',
    'LIDAR',
    'Real-time Information',
    'Engineering',
    'software',
    'testing',
    'Edge Computing',
    'image processing',
    'Machine Learning',
    'blockchain',
    'Discovery',
    'decentralisation',
    'virtual environments',
    'simulation',
    'navigation',
    'inspection',
    '3D mapping',
    'robot',
    'agriculture',
    'farming',
    '5G',
    'IOT',
    'Autonomy',
    'troubleshooting',
    'Automation',
    'Automotive',
    'Self-driving',
    'personalisation',
    'VR',
    'AR',
    'IoT',
    'Data processing',
    '3D Printing',
    'codeless',
    'Homomorphic encryption',
    'machine learning',
    'edge computing'
];

r1 = r1.map((tag) => {
    return tag.split(" ").map((element) => {
        return element.charAt(0).toUpperCase() + element.substring(1);
    }).join(" ");
}).sort();

r1 = Array.from(new Set(r1));


console.log(r1);


let tags = [
    '3D Mapping',
    '3D Printing',
    '5G',
    'AI',
    'AI Collaboration',
    'AR',
    'Agriculture',
    'Analysis',
    'Art',
    'Automation',
    'Automotive',
    'Autonomy',
    'Blockchain',
    'Chatbot',
    'Coaching',
    'Codeless',
    'Composition',
    'Computer Vision',
    'Contextual Awareness',
    'Customer Care',
    'Data Collection',
    'Data Processing',
    'Data Sharing',
    'Decentralisation',
    'Design',
    'Discovery',
    'Edge Computing',
    'Education',
    'Engineering',
    'Extended Reality',
    'Farming',
    'Fraud Detection',
    'Hazard Identification',
    'Homomorphic Encryption',
    'IOT',
    'Image Processing',
    'Image Recognition',
    'Inspection',
    'Insurance',
    'IoT',
    'LIDAR',
    'Language Comprehension',
    'Law',
    'Machine Learning',
    'Manufacturing',
    'Music',
    'Natural Language',
    'Navigation',
    'Neuro-linguistic Programming',
    'Optimisation',
    'Personal Assistant',
    'Personalisation',
    'Presentations',
    'Privacy',
    'Real-time Information',
    'Retail',
    'Robot',
    'Safety',
    'Security',
    'Self-driving',
    'Simulation',
    'Smart Outlets',
    'Smart Speakers',
    'Software',
    'Testing',
    'Tool',
    'Troubleshooting',
    'VR',
    'Virtual Environments',
    'Virtual Reality',
    'Voice-To-Text'
];

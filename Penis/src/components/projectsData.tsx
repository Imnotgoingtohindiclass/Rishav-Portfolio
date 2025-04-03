const projectsData = [
    {
        id: 'seibersecc',
        title: 'Seibersecc CTF Competition',
        shortDescription: 'Participated in Seibersecc 2024, my first CTF competition, hosted by HCI.',
        fullDescription: `
        This was my first Capture The Flag competition where I had to solve various cybersecurity challenges.
        The competition included web exploitation, cryptography, reverse engineering, and forensics challenges.

        Working with a team of four, we managed to place in the top 10 out of 50 participating teams. My main
        contribution was solving the web security and cryptography challenges.
        `,
        technologies: ['Python', 'JavaScript', 'Cryptography', 'Wireshark', 'Burp Suite'],
        challenges: [
        'Decoding obfuscated JavaScript code',
        'Exploiting SQL injection vulnerabilities',
        'Breaking weak encryption algorithms',
        'Analyzing network traffic for hidden information'
        ],
        outcomes: [
        'Enhanced practical cybersecurity skills',
        'Improved problem-solving under time pressure',
        'Strengthened team collaboration',
        'Learned new exploitation techniques'
        ],
        modelType: 'cube',
        color: '#5686f5',
        images: [
        'https://ext.same-assets.com/1108925775/3482053257.jpeg'
        ]
    },
    {
        id: 'capstone',
        title: 'Medical ML Diagnosis Tool',
        shortDescription: 'Machine Learning Model to distinguish lung infection from lung inflammation in cancer patients.',
        fullDescription: `
        For my capstone project, I developed a machine learning model that helps doctors distinguish between
        lung infections and lung inflammation in cancer patients - a critical distinction that affects treatment decisions.

        The model uses convolutional neural networks to analyze CT scan images and identify patterns that are
        distinctive to each condition. Working with medical professionals, we curated a dataset of anonymized
        patient scans to train and validate the model.
        `,
        technologies: ['Python', 'TensorFlow', 'Keras', 'OpenCV', 'scikit-learn', 'Flask'],
        challenges: [
        'Acquiring and processing medical image data',
        'Building a model with high accuracy and low false positives',
        'Creating an interpretable AI that doctors could trust',
        'Balancing sensitivity and specificity for clinical use'
        ],
        outcomes: [
        '92% accuracy in distinguishing conditions',
        'Developed user-friendly interface for medical staff',
        'Model interpretation features to explain decisions',
        'Potential to reduce unnecessary antibiotic prescriptions'
        ],
        modelType: 'sphere',
        images: []
    },
    {
        id: 'webdev',
        title: 'E-Learning Platform',
        shortDescription: 'Created a responsive e-learning platform with advanced interactive features.',
        fullDescription: `
        Designed and developed a comprehensive e-learning platform that allows educators to create
        interactive courses with quizzes, assignments, and discussion forums. The platform supports
        video lectures, real-time collaboration, and detailed analytics to track student progress.

        The system features a responsive design that works across all devices and includes accessibility
        features to ensure education is available to all users regardless of disabilities.
        `,
        technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'WebRTC', 'Socket.io', 'AWS'],
        challenges: [
        'Building real-time collaboration features',
        'Implementing secure assessment mechanisms',
        'Optimizing video streaming for varied connection speeds',
        'Creating an intuitive course creation interface'
        ],
        outcomes: [
        'Platform adopted by three educational institutions',
        'Support for 1000+ concurrent users',
        'Comprehensive analytics for student performance tracking',
        'Accessible design meeting WCAG 2.1 AA standards'
        ],
        color: '#4CAF50',
        images: []
    },
    {
        id: 'dataanalysis',
        title: 'Retail Analytics Dashboard',
        shortDescription: 'Data visualization tool for retail business intelligence.',
        fullDescription: `
        Developed a comprehensive analytics dashboard for a retail chain that integrates data from
        multiple sources including point-of-sale systems, inventory management, customer loyalty programs,
        and online store interactions.

        The dashboard provides real-time insights on sales performance, inventory levels, customer behavior,
        and predictive analytics for demand forecasting. It helps store managers make data-driven decisions
        to optimize operations and improve customer experience.
        `,
        technologies: ['Python', 'Pandas', 'D3.js', 'React', 'PostgreSQL', 'Docker', 'Tableau'],
        challenges: [
        'Integrating heterogeneous data sources',
        'Creating intuitive visualizations for complex data',
        'Implementing efficient data processing for real-time updates',
        'Designing predictive models for inventory management'
        ],
        outcomes: [
        '20% improvement in inventory turnover',
        'Reduced stockouts by 35%',
        'Increased staff efficiency through data-driven task prioritization',
        'Better resource allocation based on peak shopping times'
        ],
        color: '#FFC107',
        images: []
    },
    {
        id: 'airesearch',
        title: 'AI Research',
        shortDescription: 'Conducted research on artificial intelligence algorithms and their applications.',
        fullDescription: `
        Conducted research on artificial intelligence algorithms and their applications in solving real-world problems.
        Explored topics such as natural language processing, computer vision, and reinforcement learning.
        `,
        technologies: ['Python', 'Pandas', 'TensorFlow', 'PyTorch', 'OpenAI Gym'],
        challenges: [
        'Integrating heterogeneous data sources',
        'Creating intuitive visualizations for complex data',
        'Implementing efficient data processing for real-time updates',
        'Designing predictive models for inventory management'
        ],
        outcomes: [
        'Penis',
        'Vagina',
        'Penis',
        'vagina'
        ],
        color: '#FFC107',
        images: []
    }
];

export default projectsData;
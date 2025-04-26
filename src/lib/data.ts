import { ProjectProps } from "src/components/ui/project-card.tsx";
import { ArticleProps } from "src/components/ui/article-card.tsx";

export const achievements = [
  {
    title: "Top 3, National STEM Olympiad",
    issuer: "Singapore Science Centre",
    year: "2023",
  },
  {
    title: "Best IoT Hack - HackinSG",
    issuer: "Hackathon (Singapore)",
    year: "2022",
  },
  {
    title: "Dean’s List",
    issuer: "School of Science and Technology, Singapore",
    year: "2023",
  },
];

// Static abstract SVG patterns
const getPatternSvg = (index: number) => {
  const patterns = [
    'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&h=400&q=80',
    'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=800&h=400&q=80',
    'https://images.unsplash.com/photo-1517420879524-86d64ac2f339?auto=format&fit=crop&w=800&h=400&q=80',
    'https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=800&h=400&q=80',
    'https://images.unsplash.com/photo-1581092921461-7d65ca45393a?auto=format&fit=crop&w=800&h=400&q=80',
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&h=400&q=80'
  ];
  
  return patterns[index % patterns.length];
};

export const projectsData: ProjectProps[] = [
  {
    title: "ReBL Detection using AI",
    description: "Analysed the effetiveness of AI in detecting Ring-enhancng Brain Lesions using medical imaging.",
    fullDescription: "ReBL Detection using AI is a research project focused on the application of artificial intelligence in the detection of Ring-enhancing Brain Lesions (ReBL) in medical imaging. The project involved the development of a machine learning model trained on a large dataset of MRI scans to identify and classify ReBLs, which are often indicative of serious neurological conditions.",
    category: "Engineering",
    image: getPatternSvg(0),
    technologies: ["Python", "OpenCV", "TensorFlow", "Pillow", "Machine Learning"],
    durationHours: 320,
    challenges: "One of the main challenges was balancing the need for comprehensive threat detection with system performance. Initial implementations produced too many false positives and consumed excessive computational resources. We had to optimize our detection algorithms and implement a prioritization system for alerts to ensure security teams could focus on the most critical threats first.",
    outcomes: "The finished framework successfully detects 95% of common network intrusion attempts with a false positive rate of less than 5%. The project significantly improved my understanding of network security protocols, machine learning applications in cybersecurity, and large-scale data processing pipelines. The visualization components I developed are now being used as a template for other security dashboards.",
    links: {
      demo: "https://github.com",
      code: "https://github.com",
    },
  },
  {
    title: "Porfolio Creation",
    description: "Helped create mutiple portfolios for students aspiring to matriculate into tertiary institutions.",
    fullDescription: "Quantum Dashboard is a data analytics platform that processes streaming data in real-time and presents insights through interactive visualizations. The dashboard uses modern web technologies to deliver a responsive and intuitive user experience, enabling users to explore complex datasets through customizable charts, graphs, and data tables.",
    category: "Web Dev",
    image: getPatternSvg(1),
    technologies: ["React", "Next.js", "Astro", "Tailwindcss", "Git"],
    durationHours: 240,
    challenges: "Creating a system that could handle large volumes of streaming data while maintaining responsive visualizations was the greatest challenge. We had to implement efficient data aggregation and caching strategies to prevent the UI from becoming unresponsive. Browser memory management became critical as some users would keep the dashboard open for extended periods.",
    outcomes: "The completed dashboard successfully handles data streams of up to 10,000 events per second with minimal latency. This project deepened my expertise in real-time data visualization, state management in complex React applications, and WebSocket communication protocols. I also gained valuable experience in optimizing JavaScript performance for data-intensive web applications.",
    links: {
      demo: "https://github.com",
      code: "https://github.com",
    },
  },
  {
    title: "Disaster Management Bot",
    description: "Remotely operated robot which assists in debris clearance post disaster for disaster management.",
    fullDescription: "NeoSense is an IoT environmental monitoring system with custom-designed PCBs and wireless connectivity. The system includes sensors for temperature, humidity, air quality, and light levels, all integrated into a compact, energy-efficient device. Data is transmitted wirelessly to a cloud platform where it can be analyzed and visualized.",
    category: "Electronics",
    image: getPatternSvg(2),
    technologies: ["Arduino", "PCB Design", "ESP32", "MQTT", "Low-Power Design"],
    durationHours: 180,
    challenges: "Power management was our biggest hurdle, as we wanted the sensors to operate for months on battery power. We had to carefully optimize the power consumption of each component and implement sophisticated sleep modes. Additionally, ensuring reliable wireless connectivity in various environments required extensive testing and protocol adjustments.",
    outcomes: "The final product achieves a battery life of 6+ months on a single charge while sampling environmental data every 5 minutes. The project significantly improved my skills in PCB design, embedded systems programming, and low-power electronic design. I gained practical experience in the complete product development cycle from concept to prototype to finished product.",
    links: {
      documentation: "https://github.com",
      code: "https://github.com",
    },
  },
  {
    title: "CryptoBreak CTF",
    description: "Custom CTF challenge platform with progressive difficulty levels and automated scoring.",
    fullDescription: "CryptoBreak CTF is a Capture The Flag competition platform focused on cryptography and security challenges. The platform features a progressive difficulty system that adapts to the user's skill level, automated scoring, and detailed solutions for learning purposes. Challenges cover various aspects of cryptography from classical ciphers to modern encryption schemes.",
    category: "Cybersecurity",
    image: getPatternSvg(3),
    technologies: ["Docker", "Go", "JavaScript", "Cryptography", "WebAssembly"],
    durationHours: 210,
    challenges: "Creating challenging but solvable cryptography puzzles that would be educational required careful balance. We also faced technical challenges in building a secure environment where users could test their solutions without being able to bypass the intended challenge mechanics or access other participants' solutions.",
    outcomes: "The platform has successfully hosted three online CTF competitions with over 500 participants. Designing this system deepened my understanding of cryptographic principles and secure system design. I also improved my skills in developing containerized applications and learned techniques for creating isolated execution environments for user-submitted code.",
    links: {
      challenges: "https://github.com",
      code: "https://github.com",
    },
  },
  {
    title: "PrecisionBot",
    description: "Autonomous robot with computer vision for precision tasks in constrained environments.",
    fullDescription: "PrecisionBot is an autonomous robotic system designed for performing precision tasks in constrained environments. It uses computer vision with deep learning algorithms to identify objects, navigate spaces, and perform intricate operations. The robot was designed for applications in research laboratories where precision and reliability are critical.",
    category: "Engineering",
    image: getPatternSvg(4),
    technologies: ["ROS", "Computer Vision", "C++", "Python", "3D Printing"],
    durationHours: 420,
    challenges: "Achieving the required precision (sub-millimeter) was the greatest challenge, especially with varying lighting conditions affecting the computer vision system. We also struggled with the mechanical design iterations to ensure the robot could operate in tight spaces while maintaining stability during precise movements.",
    outcomes: "The final robot achieves positioning accuracy of ±0.2mm and can successfully complete complex manipulation tasks autonomously. This project significantly advanced my knowledge of robotic operating systems, computer vision algorithms, and mechanical design principles. I also gained experience in interdisciplinary collaboration as we worked with domain experts to define the robot's requirements.",
    links: {
      video: "https://github.com",
      paper: "https://github.com",
    },
  },
  {
    title: "CodeCollab",
    description: "Real-time collaborative code editor with syntax highlighting and version control.",
    fullDescription: "CodeCollab is a web-based collaborative code editor that allows multiple developers to work on the same codebase simultaneously. It features real-time synchronization, syntax highlighting for multiple languages, integrated version control, and an intuitive interface. The platform is designed to streamline pair programming and code reviews.",
    category: "Web Dev",
    image: getPatternSvg(5),
    technologies: ["Vue.js", "Firebase", "WebSockets", "Monaco Editor", "TypeScript"],
    durationHours: 280,
    challenges: "Implementing conflict resolution for simultaneous edits was particularly challenging. We needed to design a system that would maintain code integrity while providing a smooth user experience without constant merge conflicts. Additionally, ensuring low latency for real-time collaboration across different geographic locations required careful optimization of the synchronization protocols.",
    outcomes: "The platform successfully supports collaboration between up to 20 simultaneous editors with minimal latency. Through this project, I gained expertise in real-time synchronization algorithms, Operational Transformation techniques, and state management in complex web applications. I also improved my skills in designing intuitive user interfaces for developer tools.",
    links: {
      demo: "https://github.com",
      code: "https://github.com",
    },
  },
];

export const technicalSkills = [
  {
    name: "Programming",
    level: "Advanced",
    percentage: 95,
  },
  {
    name: "Data Science",
    level: "Advanced",
    percentage: 87,
  },
  {
    name: "Web Development",
    level: "Intermediate",
    percentage: 83,
  },
  {
    name: "Hardware and Embedded Systems",
    level: "Proficient",
    percentage: 73,
  },
  {
    name: "Machine Learning",
    level: "Proficient",
    percentage: 72,
  },
];

export const toolsAndLanguages = [
  { name: "Python", icon: "code" },
  { name: "Git", icon: "code" },
  { name: "React", icon: "code" },
  { name: "OpenCV", icon: "code" },
  { name: "Matplotlib", icon: "code" },
  { name: "TensorFlow", icon: "code" },
  { name: "NumPy", icon: "code" },
  { name: "Raspberry Pi", icon: "code" },
  { name: "Arduino", icon: "cpu" },
];


export const articlesData: ArticleProps[] = [
  {
    title: 'Solution for Super Secure System"',
    description: "An analysis and walkthrough of the solution for the challenge 'Super Secure System' from the SSTCTF 20225.",
    category: "Cybersecurity",
    source: "Published on Github",
    link: "https://github.com/Imnotgoingtohindiclass/SSTCTF_WriteUp-ballroom_homosapiens/",
    content: `<h2 id="what-cipher-">what cipher?</h2>
<h3 id="challenge-">Challenge:</h3>
<h4 id="my-friend-sent-me-this-flag-i-wonder-what-it-means-vinegar-t1wzy3vl_15_ffu_wp-x3y_oy3i4m_4wxo0gex_w0-s_ey3_uliznyy3-">my friend sent me this flag, I wonder what it means? vinegar{t1wzy3vl_15_ffu_wp+x3y_oy3i4m_4wxo0gex_w0+s_ey3_uliznyy3}</h4>
<p><strong>Difficulty: Easy</strong></p>
<h3 id="flag-format-is-xsstctf-redacted-">flag format is xsstctf{REDACTED}</h3>
<h2 id="solution-">Solution:</h2>
<p>The first clue to solving this challenge is that the encrypted text starts with vinegar. Vinegar is a sour-tasting liquid made through the fermentation of ethanol by acetic acid bacteria. It is commonly used in cooking, cleaning, and food preservation. Not very useful in terms of cybersecurity and capture-the-flags. But from experience, we know that there is an encryption method which sounds similar to vinegar, called vigenere. </p>
<p>Here is a breakdown of how a vigenere cipher works:</p>
<p>Say we are given a plaintext that we want to send to our ally which has to be encrypted quickly.</p>
<pre><code><span class="hljs-attribute">ATTACKATDAWN</span>
</code></pre><p>In order to encrypt this, we need an encryption key. The length of the encryption key has to be equal to the length of the ciphertext. Let's say we pick the key <code>LEMON</code>. Since <code>ATTACKATDAWN</code> has 12 characters, while <code>LEMON</code> has 5 characters, we can repeat the key until it is equal to the length of the ciphertext, thus getting a key of:</p>
<pre><code><span class="hljs-attribute">LEMONLEMONLE</span>
</code></pre><p>Each letter in the plaintext is shifted forward in the alphabet based on the corresponding letter in the key.</p>
<h4 id="formula-"><strong>Formula:</strong></h4>
<p>For each letter at position <code>i</code>, encryption is performed as:</p>
<pre><code><span class="hljs-attr">C_i</span> = (P_i + K_i) mod <span class="hljs-number">26</span>
</code></pre><p>where:</p>
<ul>
<li><code>C_i</code> = Ciphertext letter at position <code>i</code></li>
<li><code>P_i</code> = Plaintext letter at position <code>i</code> (converted to a number: A=0, B=1, ..., Z=25)</li>
<li><code>K_i</code> = Key letter at position <code>i</code> (converted similarly)</li>
<li><code>mod 26</code> ensures values wrap around within the alphabet</li>
</ul>
<table>
<thead>
<tr>
<th>Plaintext</th>
<th>A</th>
<th>T</th>
<th>T</th>
<th>A</th>
<th>C</th>
<th>K</th>
<th>A</th>
<th>T</th>
<th>D</th>
<th>A</th>
<th>W</th>
<th>N</th>
</tr>
</thead>
<tbody>
<tr>
<td>Key</td>
<td>L</td>
<td>E</td>
<td>M</td>
<td>O</td>
<td>N</td>
<td>L</td>
<td>E</td>
<td>M</td>
<td>O</td>
<td>N</td>
<td>L</td>
<td>E</td>
</tr>
<tr>
<td>Shift</td>
<td>+11</td>
<td>+4</td>
<td>+12</td>
<td>+14</td>
<td>+13</td>
<td>+11</td>
<td>+4</td>
<td>+12</td>
<td>+14</td>
<td>+13</td>
<td>+11</td>
<td>+4</td>
</tr>
<tr>
<td>Ciphertext</td>
<td>L</td>
<td>X</td>
<td>F</td>
<td>O</td>
<td>P</td>
<td>V</td>
<td>E</td>
<td>F</td>
<td>R</td>
<td>N</td>
<td>H</td>
<td>R</td>
</tr>
</tbody>
</table>
<p>So, the final ciphertext is:</p>
<pre><code><span class="hljs-attribute">LXFOPVEFRNHR</span>
</code></pre><p>To decrypt, the process is reversed by shifting <strong>backward</strong> using the key.</p>
<h4 id="formula-"><strong>Formula:</strong></h4>
<pre><code><span class="hljs-attr">P_i</span> = (C_i - K_i) mod <span class="hljs-number">26</span>
</code></pre><p>where:</p>
<ul>
<li><code>P_i</code> = Decrypted plaintext letter at position <code>i</code></li>
<li><code>C_i</code> = Ciphertext letter at position <code>i</code></li>
<li><code>K_i</code> = Key letter at position <code>i</code></li>
</ul>
<p>Using the same example, we reverse the shifts and retrieve the original plaintext: <strong>"ATTACKATDAWN"</strong>.</p>
<p>Knowing how a vigenere cipher works allows us to reverse the key, and thus find the plaintext encoded to vinegar{t1wzy3vl_15_ffu_wp+x3y_oy3i4m_4wxo0gex_w0+s_ey3_uliznyy3}. Since we know that xsstctf is encoded to vinegar, we can figure out that the first 7 characters of the key is <code>YQVLEHM</code>.</p>
<p>Without any extra clues, it is impossible to figure out the rest of the key. But what we know from vigenere ciphers, is that if the length of the key is not equal to the length of the ciphertext, so it is not too far fetched to think that maybe this 7 character key <code>YQVLEHM</code> was repeated. </p>
<p>Testing this theory, by decoding vinegar{t1wzy3vl_15_ffu_wp+x3y_oy3i4m_4wxo0gex_w0+s_ey3_uliznyy3} with YQVLEHM using <a href="https://www.dcode.fr/vigenere-cipher">dCode</a>.
This gives us the flag xsstctf{v1gen3re_15_the_be+t3r_ca3s4r_4lth0ugh_b0+h_ar3_insecur3}</p>
<p><strong><span style="font-size: 1.1em; color: var(--accent);">flag: xsstctf{v1gen3re_15_the_be+t3r_ca3s4r_4lth0ugh_b0+h_ar3_insecur3}</span></strong></p>
`
  },
  {
    title: "Performance Optimization in Modern Web Applications",
    description: "Techniques and strategies for improving web application performance, focusing on React and Next.js optimizations.",
    category: "Web Development",
    source: "Medium - 5K+ reads",
    link: "https://github.com",
    content: `<h2>Understanding Web Performance</h2>
<p>
  Web performance optimization has become increasingly critical as applications grow in complexity.
  Slow-loading applications directly impact user engagement, conversion rates, and even search engine rankings.
  In this article, we'll explore modern techniques for optimizing React and Next.js applications.
</p>

<h2>Core Web Vitals: A Performance Framework</h2>
<p>
  Google's Core Web Vitals provide a structured approach to measuring web performance:
</p>
<ul>
  <li><strong>Largest Contentful Paint (LCP):</strong> Measures loading performance</li>
  <li><strong>First Input Delay (FID):</strong> Measures interactivity</li>
  <li><strong>Cumulative Layout Shift (CLS):</strong> Measures visual stability</li>
</ul>

<h2>JavaScript Optimization Techniques</h2>

<h3>1. Code Splitting</h3>
<p>
  Code splitting allows you to break your application into smaller chunks that can be loaded on demand.
  This technique can significantly improve initial load times by only loading the code necessary
  for the current view.
</p>

<h3>2. Memoization</h3>
<p>
  Using React's memoization features can prevent unnecessary re-renders and expensive recalculations,
  resulting in smoother user experiences, especially in data-heavy applications.
</p>

<h2>Conclusion</h2>
<p>
  Performance optimization is not a one-time task but an ongoing process. By implementing these techniques
  and continuously monitoring your application, you can provide users with a fast, responsive experience
  that keeps them engaged and coming back. Remember that each millisecond counts in today's competitive
  web landscape.
</p>`
  },
  {
    title: "Energy-Efficient IoT Protocols for Smart Buildings",
    description: "Research paper examining low-power communication protocols for IoT devices in smart building environments.",
    category: "Research",
    source: "IEEE Conference Publication",
    link: "https://github.com",
    content: `<h2>Abstract</h2>
<p>
  This research paper presents a comparative analysis of low-power communication protocols for Internet of Things (IoT)
  devices deployed in smart building environments. We evaluate the energy consumption patterns, data throughput,
  reliability, and security aspects of leading protocols including Zigbee, BLE, LoRaWAN, and Thread. Our findings
  indicate that protocol selection significantly impacts system longevity and performance, with hybrid approaches
  showing particular promise for complex building management systems.
</p>

<h2>1. Introduction</h2>
<p>
  Smart buildings leverage IoT devices for monitoring and controlling various systems including HVAC, lighting,
  security, and occupancy. The communication protocols that connect these devices play a critical role in determining
  the overall system's energy efficiency, scalability, and reliability. With battery-powered sensors becoming
  increasingly common, minimizing energy consumption while maintaining adequate performance presents a significant
  challenge.
</p>

<h2>2. Methodology</h2>
<p>
  Our experimental setup consisted of a testbed deployed across three floors of a commercial office building.
  We installed 127 sensor nodes measuring temperature, humidity, occupancy, and light levels.
  Each floor was equipped with different protocol gateways:
</p>

<ul>
  <li>Floor 1: Zigbee (IEEE 802.15.4)</li>
  <li>Floor 2: Bluetooth Low Energy (BLE)</li>
  <li>Floor 3: LoRaWAN</li>
</ul>

<h2>3. Results</h2>

<h3>3.1 Energy Consumption Profiles</h3>
<p>
  LoRaWAN demonstrated the lowest sleep current, making it ideal for devices that transmit infrequently.
  However, its transmission current was significantly higher than other protocols, reflecting the power
  needed for long-range communication.
</p>

<h2>5. Conclusion</h2>
<p>
  This study demonstrates that protocol selection can significantly impact the energy efficiency and overall
  performance of IoT systems in smart buildings. Our data suggests that LoRaWAN offers the best energy efficiency
  for low-frequency sensing applications, while BLE provides an optimal balance for interaction-heavy scenarios.
</p>`
  },
  {
    title: "Building Your First CTF Challenge",
    description: "Comprehensive guide on creating, testing, and deploying cybersecurity challenges for Capture The Flag competitions.",
    category: "Tutorial",
    source: "HackTheBox Blog",
    link: "https://github.com",
    content: `<h2>Introduction to CTF Challenges</h2>
<p>
  Capture The Flag (CTF) competitions have become a cornerstone of cybersecurity education and skill development.
  Creating effective challenges requires careful planning, technical knowledge, and an understanding of educational
  principles. This tutorial will guide you through the process of creating your first CTF challenge, from conception
  to deployment.
</p>

<h2>1. Understanding Challenge Types</h2>
<p>
  Before creating your challenge, it's important to understand the common categories:
</p>
<ul>
  <li><strong>Web Security:</strong> Vulnerabilities in web applications (XSS, SQLi, CSRF)</li>
  <li><strong>Cryptography:</strong> Breaking or implementing cryptographic algorithms</li>
  <li><strong>Binary Exploitation:</strong> Buffer overflows, ROP chains, and other memory corruption issues</li>
  <li><strong>Reverse Engineering:</strong> Analyzing compiled code to understand its functionality</li>
  <li><strong>Forensics:</strong> Analyzing digital artifacts to discover evidence</li>
  <li><strong>OSINT:</strong> Using open-source intelligence to discover information</li>
</ul>

<h2>2. Designing Your Challenge</h2>
<p>
  Let's start by designing a simple web security challenge that teaches participants about SQL injection:
</p>
<h3>Challenge Concept</h3>
<ul>
  <li><strong>Name:</strong> "Secret Admin Panel"</li>
  <li><strong>Difficulty:</strong> Beginner</li>
  <li><strong>Description:</strong> A company's internal tool has a login page. Find a way to bypass the authentication and access the admin section to find the flag.</li>
  <li><strong>Learning Objective:</strong> Understand basic SQL injection and authentication bypass techniques</li>
</ul>

<h2>8. Best Practices for CTF Challenge Creation</h2>
<p>
  When creating challenges, remember these best practices:
</p>
<ul>
  <li><strong>Educational Value:</strong> Challenges should teach specific security concepts</li>
  <li><strong>Real-world Relevance:</strong> Base challenges on actual vulnerabilities when possible</li>
  <li><strong>Progressive Difficulty:</strong> Create challenges with varying difficulty levels</li>
  <li><strong>Avoid Guessing Games:</strong> Participants should solve through skill, not luck</li>
  <li><strong>Clear Indicators:</strong> Make it obvious when a participant has found the solution</li>
</ul>

<h2>Conclusion</h2>
<p>
  Creating CTF challenges is both an art and a science. As you become more experienced, you'll
  develop a sense for balancing difficulty, educational value, and engagement. Remember that
  the ultimate goal is to help participants learn and improve their cybersecurity skills.
</p>`
  },
];

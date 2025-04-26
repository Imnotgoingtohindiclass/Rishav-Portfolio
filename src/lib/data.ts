import { ProjectProps } from "src/components/ui/project-card.tsx";
import { ArticleProps } from "src/components/ui/article-card.tsx";

export const achievements = [
  {
    title: "Bronze Award, National Cybersecurity Olympiad",
    issuer: "National Cybersecurity Olympiad (Singapore)",
    year: "2025",
  },
  {
    title: "Best Article, RVMUN 2025 (Press Corps)",
    issuer: "River Valley Model United Nations",
    year: "2025",
  },
  {
    title: "Second Place, SST CTF",
    issuer: "School of Science and Technology, Singapore",
    year: "2025",
  },
  {
    title: "Gold Award, Australian Mathematics Competition",
    issuer: "Australian Mathematics Trust",
    year: "2022, 2023, 2024",
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
    title: "RefrigeReminder",
    description: "IoT device + app to remind users of food expiry and reduce waste.",
    fullDescription: "The RefrigeReminder project by Team Angus Cheezburgur (Caydran, Coen, Martin, and Rishav) aimed to solve the problem of food being forgotten and expiring in refrigerators. It’s an IoT device paired with a mobile app, allowing users to log food items and expiry dates. It detects fridge openings and sends reminders, emphasizing simplicity, reliability, accessibility, and reusability.",
    category: "Engineering",
    image: getPatternSvg(0),
    technologies: ["Arduino", "IoT", "Mobile App Development"],
    durationHours: 100,
    challenges: "Making the system reliable without it becoming annoying AF 💀. Also keeping it simple for boomers who don't vibe with tech lol.",
    outcomes: "Helped users reduce food waste, stay aware of expiry dates, and manage fridge contents more effectively!",
    links: {
      documentation: "https://github.com",
    },
  },
  {
    title: "Autonomous Life Buoy",
    description: "Prototyped a life buoy that auto-detects and saves drowning people using heat sensors.",
    fullDescription: "Designed a prototype of a smart life buoy that detects when someone falls overboard using heat sensors and automatically launches to save them. It navigates itself to the drowning victim and is winched back afterward.",
    category: "Engineering",
    image: getPatternSvg(1),
    technologies: ["Sensors", "Arduino", "Prototype Engineering"],
    durationHours: 120,
    challenges: "Getting accurate heat detection without false alarms 🔥🚫 and making it stable in water 🌊.",
    outcomes: "Created a concept that could literally save lives, making rescue faster and more reliable 💪.",
    links: {
      documentation: "https://github.com",
    },
  },
  {
    title: "Tsunagu Research Project",
    description: "Researched plant-based pH indicators as safer alternatives for food industry.",
    fullDescription: "Explored the use of natural pH indicators (butterfly pea flower and red cabbage) to replace synthetic, toxic pH indicators in the food industry. Found that natural extracts could predict pH changes effectively while being safe if ingested.",
    category: "Research",
    image: getPatternSvg(2),
    technologies: ["Plant Chemistry", "Food Science", "Spectroscopy"],
    durationHours: 90,
    challenges: "Variability in plant samples 🌱 and inconsistent absorbance readings 🥴.",
    outcomes: "Demonstrated that butterfly pea flower is sensitive enough for small pH changes and proposed future improvements for industrial use 🔬.",
    links: {
      documentation: "https://github.com",
    },
  },
  {
    title: "Illustratum",
    description: "Showed how binaural beats work through sound generation and graphs.",
    fullDescription: "Created a website that generated two sound waves with slightly different frequencies to demonstrate the pitching effect of binaural beats. Visualized the superposition of sound waves using Desmos graphs.",
    category: "Other",
    image: getPatternSvg(3),
    technologies: ["Web Audio API", "Desmos Graphs", "JavaScript"],
    durationHours: 50,
    challenges: "Making the audio sound not like a mosquito in my ear 😭 and syncing frequencies correctly 🎧.",
    outcomes: "Made an interactive tool to visualize and hear how binaural beats work. Super vibey 🔥.",
    links: {
      demo: "https://github.com",
    },
  },
  {
    title: "Colorectal Cancer Detection using CNN",
    description: "Developed AI model to detect colorectal cancer from medical images.",
    fullDescription: "Built a Convolutional Neural Network (CNN) using Python to detect colorectal cancer from histology images. Trained and evaluated the model for accuracy and reliability in identifying cancerous samples.",
    category: "Other",
    image: getPatternSvg(4),
    technologies: ["Python", "TensorFlow", "CNNs", "Medical Imaging"],
    durationHours: 200,
    challenges: "Balancing model complexity vs overfitting 🤓, and working with messy-ass medical datasets 🧠.",
    outcomes: "Achieved reliable detection rates and deepened understanding of AI in healthcare applications 💉🤖.",
    links: {
      code: "https://github.com",
    },
  },
  {
    title: "Smart Ball Launcher",
    description: "Prototyped a ball launcher for football training drills.",
    fullDescription: "Designed a ball launcher that assists football players and goalkeepers in passing, shooting, and receiving drills. Focused on mechanical consistency and safety.",
    category: "Engineering",
    image: getPatternSvg(5),
    technologies: ["Arduino", "Mechanical Design", "Motors"],
    durationHours: 90,
    challenges: "Making it shoot straight and not launch balls into orbit 🚀⚽.",
    outcomes: "Created a functional prototype to automate football training drills 🥅🏃‍♂️.",
    links: {
      documentation: "https://github.com",
    },
  },
  {
    title: "Smart Home Lighting System",
    description: "Arduino system for automatic lighting and cooling control based on environment.",
    fullDescription: "Developed a smart home system using Arduino that uses light-dependent resistors and temperature sensors to control lighting and cooling automatically.",
    category: "Engineering",
    image: getPatternSvg(6),
    technologies: ["Arduino", "Sensors", "Smart Home Tech"],
    durationHours: 80,
    challenges: "Accurately detecting light levels without it being a drama queen 💡🥵.",
    outcomes: "Prototype improved home energy efficiency while being super aesthetic and functional ✨.",
    links: {
      code: "https://github.com",
    },
  },
  {
    title: "Electronic Muscle Stimulator",
    description: "Created a muscle stimulator for elderly people using pure hardware.",
    fullDescription: "Built an electronic muscle stimulator with no programmable components, using varying frequencies to stimulate muscles safely for 30-second intervals, aimed at elderly therapy.",
    category: "Electronics",
    image: getPatternSvg(7),
    technologies: ["Circuit Design", "Analog Electronics"],
    durationHours: 110,
    challenges: "Designing a safe but effective stimulator without frying someone 😬⚡.",
    outcomes: "Delivered a working stimulator to aid in elderly rehabilitation and mobility improvement ❤️.",
    links: {
      documentation: "https://github.com",
    },
  },
  {
    title: "Tech Divide Research",
    description: "Studied how technological gaps cause miscommunication between generations.",
    fullDescription: "Conducted primary and secondary research into how technological divides impact communication between generations. Proposed individual and organizational solutions to bridge the gap.",
    category: "Research",
    image: getPatternSvg(8),
    technologies: ["Survey Analysis", "Secondary Research"],
    durationHours: 60,
    challenges: "Boomers not wanting to learn tech... like pls grandma 😭📱.",
    outcomes: "Proposed workshops, individual coaching, and workforce integration to help reduce the tech divide ✨.",
    links: {
      documentation: "https://github.com",
    },
  },
  {
    title: "Post-Disaster Management Robot",
    description: "Created a robot for remote debris clearance after disasters.",
    fullDescription: "Designed a remotely operated robot to clear debris in disaster zones, allowing rescuers to work without putting themselves at risk.",
    category: "Robotics",
    image: getPatternSvg(9),
    technologies: ["Arduino", "Wireless Comms", "Mechanical Design"],
    durationHours: 160,
    challenges: "Maintaining control over rough terrain without flipping over like a turtle 🐢.",
    outcomes: "Enhanced post-disaster safety through remote operations 🔥🚧.",
    links: {
      documentation: "https://github.com",
    },
  },
  {
    title: "E-Math PT: Degree vs Employment Study",
    description: "Statistical study on how degree choice affects employment prospects.",
    fullDescription: "Investigated the impact of degree choices on employment outcomes in Singapore using statistical methods like ANOVA, chi-square tests, and regression analysis.",
    category: "Research",
    image: getPatternSvg(10),
    technologies: ["Python", "Pandas", "Statistics"],
    durationHours: 70,
    challenges: "Scrubbing dirty-ass survey data 📊🧹.",
    outcomes: "Found degree field matters wayyy more than school flex 🏫💀. Slayed the stats game 📈.",
    links: {
      documentation: "https://github.com",
    },
  },
  {
    title: "IDP Integrated Design Challenge",
    description: "Created an autonomous robot that scans QR codes, line-traces, and handles objects.",
    fullDescription: "Built a self-trained AI model for an autonomous robot that line-traces, picks up objects using computer vision, and performs inventory checks remotely using sensors and CV.",
    category: "Robotics",
    image: getPatternSvg(11),
    technologies: ["Python", "OpenCV", "Arduino", "ML", "Sensors"],
    durationHours: 250,
    challenges: "Training our own CV models was literal hell 🔥👿 and QR codes being annoying af.",
    outcomes: "Completed full prototype for competition. Major flex 👏.",
    links: {
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

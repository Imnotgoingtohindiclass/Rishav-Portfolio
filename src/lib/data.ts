import { ProjectProps } from "src/components/ui/project-card";
import { ArticleProps } from "src/components/ui/article-card";

export type SongData = {
  isPlaying: boolean;
  title?: string;
  artist?: string;
  album?: string;
  albumImageUrl?: string;
  songProgress?: number
  songUrl?: string;
};

export const achievements = [
  {
    title: "Silver Award, International Cybersecurity Olympiad",
    issuer: "National University of Singapore, NUS",
    year: "2025",
    certificate: "/ICO2025_COA_Silver_11.png"
  },
  {
    title: "Bronze Award, National Cybersecurity Olympiad",
    issuer: "National University of Singapore, NUS",
    year: "2025",
    certificate: "/NCO2025_COA_Bronze_19.jpg"
  },
  {
    title: "Best Article, RVMUN 2025 (Press Corps)",
    issuer: "River Valley High School, RVHS",
    year: "2025",
    certificate: "/best_article.jpg"
  },
  {
    title: "Gold Award, Australian Mathematics Competition",
    issuer: "Australian Mathematics Trust, AMT",
    year: "2022, 2023, 2024",
    certificate: ""
  },
  {
    title: "Silver Award, School of Science and Technology Capture the Flag 2025",
    issuer: "Computing+ Department, SST",
    year: "2025",
    certificate: "/SSTCTFRishavGanguly.jpg"
  },
  // {
  //   title: "Distinction, Illustratum",
  //   issuer: "National University of Singapore, NUS",
  //   year: "2023",
  //   certificate: "/illustratum.jpg"
  // },
  {
    title: "Honorable Mention, Singapore Physics League (SPhL)",
    issuer: "Institute of Physics Singapore, ISP",
    year: "2024",
    certificate: "/SPHLcert_page-0001 (1).jpg"
  }
];
export interface sports {
  title: string;
  duration: string;
  description: string;
}

export const sports: sports[] = [
  {
    title: "Taichung Cup Handball Championship",
    duration: "2024",
    description: "Represented Singapore in the Taichung Cup Handball Championship, showcasing teamwork and sportsmanship."
  },
  {
    title: "National Development Team Member",
    duration: "2024",
    description: "Selected as a member of the National Development Team, contributing to the growth and development of handball in Singapore."
  },
  {
    title: "Silver Medal, Pesta Sukan Handball",
    duration: "2024",
    description: "Achieved a Silver Medal in the Pesta Sukan Handball tournament, demonstrating skill and dedication."
  },
  {
    title: "Bronze Medal, National Youth Handball League (NYHL)",
    duration: "2025",
    description: "Achieved a Silver Medal in the Pesta Sukan Handball tournament, demonstrating skill and dedication."
  }
];

export const projectsData: ProjectProps[] = [
  {
    title: "Honeypot",
    description: "Designed a custom honeypot to study real-world cyberattacks and analyze threat behavior.",
    fullDescription: "Driven by a fascination with defensive security, I independently designed, built, and deployed a low-interaction honeypot to capture and analyse real-world cyberattacks. I Dockerised vulnerable services like SSH and Telnet to create an alluring target, implementing a robust logging pipeline to capture every interaction. By monitoring network traffic and analysing attacker payloads in real-time, I gained a frontline perspective on threat actor TTPs (Tactics, Techniques, and Procedures).",
    category: "Cybersecurity",
    image: "",
    technologies: ["Python", "Docker", "Networking", "Cybersecurity"],
    durationHours: 150,
    challenges: "The core challenge was making the honeypot convincing enough to attract meaningful interactions beyond simple automated scans, while simultaneously ensuring it was completely sandboxed from my network. This required a deep dive into network segmentation and container security. Deciphering obfuscated commands and correlating seemingly random IP addresses into coordinated campaigns was a significant analytical hurdle.",
    outcomes: "This project transformed my understanding of security from theoretical to practical. I developed a threat-intelligence mindset, learning to anticipate attacker moves. It sharpened my skills in network forensics, log analysis, and building secure, isolated environments, providing a rich dataset of insights that can't be learned from a textbook.",
    links: {
      code: "https://github.com",
    },
  },
  {
    title: "Colorectal Cancer Detection using CNN",
    description: "Built a deep learning model to detect colorectal cancer from histological images.",
    fullDescription: "With the goal of applying AI to a critical medical need, I developed a Convolutional Neural Network (CNN) from the ground up to classify colorectal cancer in histological images. I managed the entire machine learning pipeline, from sourcing and preprocessing a large dataset of medical images to designing and training the model using TensorFlow. A key focus was on creating an interpretable model, ensuring that its predictions could be understood and trusted in a clinical context.",
    category: "AI/ML",
    image: "",
    technologies: ["Python", "TensorFlow", "CNN", "Medical Imaging"],
    durationHours: 100,
    challenges: "The primary technical challenge was the inherent class imbalance in medical datasets, which risked creating a model biased towards negative diagnoses. I overcame this by implementing advanced data augmentation techniques and experimenting with weighted loss functions. Mitigating overfitting to ensure the model could generalize to new, unseen images required rigorous cross-validation and hyperparameter tuning.",
    outcomes: "The resulting model achieved high classification accuracy, demonstrating the potential of AI to augment diagnostic workflows and improve patient outcomes. This project solidified my passion for AI in healthcare and provided invaluable, hands-on experience in building, validating, and optimizing deep learning models for mission-critical applications.",
    links: {
      // code: "https://github.com",
    },
  },
  {
    title: "IDP Integrated Design Challenge",
    description: "Designed and built an autonomous robot capable of navigation, object manipulation, and QR code scanning.",
    fullDescription: "As a key member of the design team, I spearheaded the development of a fully autonomous robot for a competitive engineering challenge. My role focused on architecting the software, integrating computer vision for object recognition and line tracing, and programming the robotic actuators for precise object manipulation. The system was designed to navigate a complex course, identify and interact with objects, and scan QR codes to receive new instructions, all without human intervention.",
    category: "Robotics",
    image: "",
    technologies: ["Python", "OpenCV", "Arduino", "ML", "Sensors"],
    durationHours: 70,
    challenges: "The greatest challenge was the seamless integration of disparate subsystems—the vision module, the navigation algorithm, and the physical actuators—into one cohesive, real-time system. Ensuring the robot could make split-second decisions under the unpredictable conditions of a live competition required countless hours of testing, debugging, and iterative refinement of both the code and the hardware.",
    outcomes: "We successfully delivered a robust prototype that performed flawlessly during the final demonstration. This project was a masterclass in interdisciplinary engineering, strengthening my ability to bridge the gap between software and hardware. It honed my skills in collaborative problem-solving, system architecture, and delivering a functional product under pressure.",
    links: {
      code: "https://github.com",
    },
  },
  {
    title: "AI to assist the detection of ReBL",
    description: "Currently researching and developing an AI model to assist in the detection of Ring-enhancing Brain Lesions (ReBL).",
    fullDescription: "Currently researching and developing an AI model to assist in the detection of Ring-enhancing Brain Lesions (ReBL). This project involves collecting and annotating a dataset of medical images, training a deep learning model to identify ReBLs, and evaluating its performance against existing diagnostic methods. The goal is to create a tool that can aid radiologists in making more accurate and timely diagnoses.",
    category: "AI/ML",
    image: "",
    technologies: ["Python", "TensorFlow", "Keras", "Medical Imaging"],
    durationHours: "Ongoing",
    challenges: "The primary challenge is the need for a large, high-quality annotated dataset of medical images to train the AI model effectively. Additionally, ensuring the model's accuracy and reliability in real-world clinical settings is crucial.",
    outcomes: "",
    links: {
      documentation: "https://github.com",
    },
  },
  {
    title: "Post-Disaster Management Robot",
    description: "Developed a remotely operated robot for debris removal in disaster environments.",
    fullDescription: "Motivated by the need to enhance first responder safety, I designed and constructed a teleoperated robot for post-disaster reconnaissance and debris clearing. The platform was built for stability and power, capable of traversing hazardous terrain. I focused on creating an intuitive remote control system with a reliable, low-latency wireless video feed to allow operators to navigate dangerous environments from a safe distance.",
    category: "Robotics",
    image: "",
    technologies: ["Arduino", "Wireless Comms", "Mechanical Design"],
    durationHours: 28,
    challenges: "Engineering a chassis and drivetrain that could maintain stability and traction on uneven, rubble-strewn ground was the primary mechanical obstacle. Electrically, achieving a clear and stable video feed amidst interference, while ensuring the control commands remained responsive, required careful selection and implementation of wireless communication modules.",
    outcomes: "The final proof-of-concept successfully demonstrated its ability to navigate and manipulate objects in a simulated disaster zone. This project affirmed my passion for building technology with a direct humanitarian impact and provided a powerful lesson in designing rugged, reliable systems for mission-critical applications.",
    links: {
      documentation: "https://github.com",
    },
  },
  {
    title: "LeBron Quotes API",
    description: "Developed a web crawler and REST API to aggregate and serve quotes from LeBron James.",
    fullDescription: "This personal project was a full-stack exercise in data acquisition and delivery. I built a web crawler using Python and Selenium to systematically scrape quotes from BrainyQuote, handling dynamic page elements and pagination. The extracted data was then cleaned, structured, and served through a RESTful API built with FastAPI. Finally, I deployed the entire application on Render, making the data publicly accessible.",
    category: "Other",
    image: "",
    technologies: ["Python", "Selenium", "Render", "FastAPI"],
    durationHours: 5,
    challenges: "The main challenge lay in engineering the scraper to be resilient to changes in the target website's structure. Parsing the messy, real-world HTML to accurately isolate and clean the desired text required careful use of selectors and data validation. Setting up the deployment pipeline on Render to be automated and efficient was another key learning curve.",
    outcomes: "I successfully created a reliable, end-to-end data pipeline, from raw web data to a structured, consumable API. This project was a fantastic practical lesson in web scraping, API design principles (using FastAPI), and cloud deployment, solidifying my skills in building and maintaining a live web service.",
    links: {
      documentation: "https://github.com/Imnotgoingtohindiclass/Lebron_Api",
    },
  },
  {
    title: "Autonomous Life Buoy",
    description: "Prototyped a smart life buoy capable of detecting and assisting individuals in distress.",
    fullDescription: "This project was an exploration in creating life-saving technology. I developed a prototype of a smart life buoy that could autonomously detect a person in the water using heat sensors. Once a target was identified, the buoy's propulsion system would activate to navigate towards the individual. The system was designed to be a rapidly-deployable first response tool in man-overboard situations.",
    category: "Engineering",
    image: "",
    technologies: ["Sensors", "Arduino", "Prototype Engineering"],
    durationHours: 10,
    challenges: "Waterproofing the electronics and ensuring the propulsion system could overcome currents were significant hardware challenges. On the software side, the main difficulty was calibrating the heat sensors to accurately detect a human signature while filtering out false positives from the environment, ensuring the device was both reliable and safe.",
    outcomes: "The resulting proof-of-concept successfully demonstrated autonomous detection and navigation in a controlled water environment. This project was a powerful exercise in rapid prototyping and creative problem-solving, reinforcing my interest in building smart devices that can operate in challenging, real-world conditions to enhance human safety.",
    links: {
      documentation: "",
    },
  },
  {
    title: "Electronic Muscle Stimulator",
    description: "Engineered a non-programmable muscle stimulation device for rehabilitation therapy.",
    fullDescription: "Focusing on the needs of elderly individuals undergoing physical therapy, I designed and built an electronic muscle stimulator from scratch. The device generates controlled, low-frequency electrical pulses to trigger muscle contractions, aiding in rehabilitation and preventing atrophy. The entire circuit was designed using analog components, with a priority on safety, reliability, and ease of use for non-technical users.",
    category: "Electronics",
    image: "",
    technologies: ["Circuit Design", "Analog Electronics"],
    durationHours: 100,
    challenges: "The most critical challenge was designing the output stage of the circuit to deliver therapeutically effective stimulation while adhering to strict safety limits to prevent any harm to the user. This involved a delicate balance of voltage, current, and frequency, requiring meticulous calculations, simulations, and testing with oscilloscopes to verify the waveform.",
    outcomes: "I produced a fully functional, safe, and reliable device that met all design specifications. This deep dive into analog electronics was incredibly rewarding, teaching me the fundamentals of circuit design, component selection, and PCB layout for a medical-related application. It was a testament to the power of electronics to directly aid human well-being.",
    links: {
      documentation: "",
    },
  },
  {
    title: "RefrigeReminder",
    description: "Developed an IoT system and mobile application to reduce food waste through smart reminders.",
    fullDescription: "As part of a team effort to tackle household food waste, I helped develop 'RefrigeReminder,' an IoT system that intelligently tracks food items. The system used sensors to detect when the fridge was opened and closed, syncing with a mobile app that cataloged contents and expiry dates. The goal was to send timely notifications to users, encouraging them to use food before it spoiled.",
    category: "Engineering",
    image: "",
    technologies: ["Arduino", "IoT", "Mobile App Development"],
    durationHours: 50,
    challenges: "From a technical standpoint, ensuring low-power, reliable communication between the IoT device in the fridge and the user's home network was a key hurdle. From a user-experience perspective, the challenge was to make the reminders helpful, not annoying. We spent significant time designing the notification logic to be smart and context-aware.",
    outcomes: "Our team delivered a functional end-to-end prototype that successfully demonstrated the concept. The project was a great lesson in user-centered design and collaborative development. It showed me how a simple, well-designed IoT solution can empower people to make more sustainable choices in their daily lives.",
    links: {
      documentation: "https://github.com",
    },
  },
  {
    title: "Smart Ball Launcher",
    description: "Engineered an automated ball launcher for sports training applications.",
    fullDescription: "This project combined my interests in mechanical engineering and sports. I designed and built a fully automated ball launcher for football training. The machine was engineered to deliver footballs at variable speeds and trajectories, allowing athletes to practice receiving passes and shots without a human partner. The system integrated motors, a mechanical feeding system, and an Arduino-based controller.",
    category: "Engineering",
    image: "",
    technologies: ["Arduino", "Mechanical Design", "Motors"],
    durationHours: 90,
    challenges: "The primary engineering challenge was perfecting the launch mechanism. Achieving consistent, repeatable launches required precise calibration of the flywheel motors and the ball-feeding system. Iteratively designing, 3D printing, and testing different components to find the optimal shape and material for grip and release was a time-consuming but critical process.",
    outcomes: "The final prototype was a robust machine capable of delivering consistent, powerful launches, proving its value as a training aid. This project was a fantastic hands-on experience in electromechanical design, from initial concept and CAD modeling to fabrication and programming. It taught me the importance of iterative design and rigorous testing in building reliable machinery.",
    links: {
      documentation: "https://github.com",
    },
  },
  {
    title: "Smart Home Lighting System",
    description: "Developed an automated home system to optimize lighting and cooling based on environmental conditions.",
    fullDescription: "With a focus on energy efficiency, I built a smart home automation system using an Arduino. The system utilized a network of light-dependent resistors (LDRs) and temperature sensors to gather real-time environmental data. Based on this input, it autonomously controlled the home's lighting and a cooling fan, turning them on only when needed and adjusting their intensity to match conditions.",
    category: "Engineering",
    image: "",
    technologies: ["Arduino", "Sensors", "Smart Home Tech"],
    durationHours: 80,
    challenges: "Calibrating the sensors to respond appropriately to nuanced environmental changes was the main challenge. I had to write logic that prevented the system from rapidly flickering lights in response to temporary shadows or making unnecessary adjustments. This involved implementing thresholds, smoothing algorithms, and hysteresis to ensure stable and intelligent operation.",
    outcomes: "The working prototype successfully demonstrated a marked improvement in energy efficiency in a simulated room environment. This project was a practical introduction to the principles of IoT and home automation, teaching me how to use sensor data to create responsive, intelligent systems that can enhance comfort while reducing environmental impact.",
    links: {
      code: "https://github.com",
    },
  },
  {
    title: "Tsunagu Research Project",
    description: "Investigated plant-based pH indicators as safer alternatives for food industry applications.",
    fullDescription: "This research project explored the potential of natural, plant-based extracts to replace synthetic pH indicators in the food industry. I conducted a systematic investigation into indicators derived from butterfly pea flowers and red cabbage, preparing extracts and testing their sensitivity and color-fastness across a range of pH levels. The goal was to find a viable, safer, and more sustainable alternative for food safety testing.",
    category: "Research",
    image: "",
    technologies: ["Plant Chemistry", "Food Science", "Spectroscopy"],
    durationHours: 90,
    challenges: "The core scientific challenge was achieving consistency. Natural products have inherent variability, so I had to develop a rigorous extraction and standardization protocol to ensure my results were repeatable. Overcoming the gradual degradation of the natural pigments and accurately measuring color changes using spectroscopy required meticulous lab technique.",
    outcomes: "My research successfully demonstrated that butterfly pea extract, in particular, is a highly effective and viable natural pH indicator. I produced a comprehensive report with recommendations for its adoption in certain food industry applications. The project was a deep dive into the scientific method, from hypothesis and experimentation to data analysis and conclusion.",
    links: {
      documentation: "https://github.com",
    },
  },
  {
    title: "E-Math PT: Degree vs Employment Study",
    description: "Performed a statistical analysis on the correlation between degree choice and employment outcomes.",
    fullDescription: "This project was a data-driven investigation into a critical question: how much does a university degree choice affect employment outcomes in Singapore? Using a large survey dataset, I applied a suite of statistical techniques, including ANOVA, chi-square tests, and regression modeling with Python and Pandas, to identify statistically significant correlations between academic disciplines and post-graduation employability.",
    category: "Research",
    image: "",
    technologies: ["Python", "Pandas", "Statistics"],
    durationHours: 70,
    challenges: "The raw survey data was noisy and incomplete. A significant portion of the project was dedicated to data cleaning, imputation of missing values, and feature engineering to prepare the dataset for rigorous analysis. Ensuring that my conclusions were statistically sound and not just artifacts of the data required careful validation of assumptions for each statistical test I performed.",
    outcomes: "The analysis yielded clear, evidence-based insights, highlighting specific degree specializations that had a strong positive correlation with employment rates. This project significantly strengthened my practical data analysis skills, from data wrangling to advanced statistical modeling, and taught me how to extract a compelling narrative from a complex dataset.",
    links: {
      documentation: "https://github.com",
    },
  },
  {
    title: "Tech Divide Research",
    description: "Studied the impact of technological gaps on intergenerational communication.",
    fullDescription: "This research project examined the social friction caused by the 'tech divide' between younger and older generations. My work involved a mixed-methods approach, combining primary survey data with secondary literature analysis to understand the root causes of miscommunication. The ultimate goal was to move beyond identifying the problem to proposing concrete, actionable solutions.",
    category: "Research",
    image: "",
    technologies: ["Survey Analysis", "Secondary Research"],
    durationHours: 60,
    challenges: "The primary challenge was designing a survey that would elicit honest and insightful responses from two very different demographic groups. Crafting neutral, unbiased questions and encouraging participation from less tech-savvy individuals required careful thought and outreach. Synthesizing qualitative feedback with quantitative data was another complex analytical task.",
    outcomes: "I produced a research paper that not only detailed the problem but also proposed a set of practical recommendations, such as community-led training programs and mentorship initiatives. This project taught me the value of qualitative research and how to approach a complex social problem with an analytical yet empathetic mindset, aiming for solutions that bridge gaps rather than just describe them.",
    links: {
      documentation: "https://github.com",
    },
  },
  {
    title: "Illustratum",
    description: "Created an interactive website to demonstrate and visualize binaural beats.",
    fullDescription: "As a fusion of my interests in audio phenomena and web development, I created 'Illustratum,' an educational website that allows users to experience and visualize binaural beats. I used the Web Audio API in JavaScript to generate two pure sine waves with a slight frequency difference. These were paired with a Desmos graph visualization embedded in the site to show the resulting waveform in real-time.",
    category: "Other",
    image: "",
    technologies: ["Web Audio API", "Desmos Graphs", "JavaScript"],
    durationHours: 50,
    challenges: "The main technical hurdle was synchronizing the audio generation with the visual graph. Ensuring the Web Audio API's output was accurately and smoothly rendered by the Desmos API required careful event handling and state management. Creating an intuitive UI that allowed users to easily manipulate frequencies and understand the resulting effect was also a key design challenge.",
    outcomes: "The result is an engaging and interactive educational tool that makes a complex psychoacoustic concept accessible to anyone with a web browser. This project was a fantastic exercise in front-end development and API integration, teaching me how to combine different web technologies to create a rich, multi-sensory user experience.",
    links: {
      demo: "https://github.com",
    },
  },
];

export const technicalSkills = [
  {
    name: "Programming",
    level: "Proficient",
    percentage: 75,
    explanation: "Comfortable across Python, C++, and Bash for scripting, automation, tooling, and low-level systems work. Familiar with algorithm design patterns, debugging, and performance optimisation in interpreted and compiled languages."
  },
  {
    name: "Systems",
    level: "Proficient",
    percentage: 70,
    explanation: "Daily Linux use (I use Arch, btw), self-hosting, Docker, remote server management, and CLI-based workflows. Confident setting up servers, managing services, and maintaining efficient development environments."
  },
  {
    name: "Cybersecurity",
    level: "Intermediate",
    percentage: 65,
    explanation: "Hands-on experience with CTFs, web exploitation, forensics, and cryptography. Skilled in building and solving challenges, focusing on binary exploitation, OSINT, and custom challenge development."
  },
  {
    name: "Hardware Systems",
    level: "Intermediate",
    percentage: 60,
    explanation: "Experience with robotics, embedded systems, and hardware integration using Raspberry Pi, Arduino, and custom circuits. Comfortable with motor control, sensor integration, and firmware tinkering."
  },
  {
    name: "Data Science",
    level: "Novice",
    percentage: 40,
    explanation: "Foundational knowledge of machine learning and AI using PyTorch. Familiar with building small-scale models for prediction tasks and exploring areas like computer vision and data analysis."
  }
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
  { name: "Arduino", icon: "code" },
];

export const articlesData: ArticleProps[] = [
  {
    title: 'Solution for Super Secure System',
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
    title: "Solution for CyberCard NCO Challenge",
    description: "Writeup of the CyberCard CTF challenge, focusing on AES and HMAC vulnerabilities.",
    category: "Cybersecurity",
    source: "Unpublished",
    link: "",
    content: `<h2>CyberCard CTF Challenge Writeup</h2>

<h3>Introduction to the Challenge</h3>
<p>
    The "CyberCard" challenge provides participants with a pseudo-credit card system where you can either generate a test card or submit a card for validation. The goal is to submit a valid card with a balance of exactly <strong>13371337</strong> dollars to obtain the flag. 
</p>

<h3>Key Technologies Explained</h3>

<h4>AES (Advanced Encryption Standard)</h4>
<p>
    AES is a symmetric encryption algorithm widely used across the globe to secure data. In this challenge, AES is used in GCM (Galois/Counter Mode), which provides both confidentiality (encryption) and integrity (authentication) — although here, as we will soon laugh about, the integrity is handled elsewhere (and poorly).
</p>

<h4>HMAC (Hash-based Message Authentication Code)</h4>
<p>
    HMAC is a mechanism to verify both the data integrity and authenticity of a message, typically using a cryptographic hash function like SHA-256. In CyberCard, the ciphertext is protected with an HMAC using a key derived from the number 1337. Ironically, the true number here is 1337 ways to break it.
</p>

<h3>Identifying the Loophole</h3>
<p>
    Observant players would notice several critical flaws:
    <ul>
        <li>The AES key is random for the session but the nonce (normally random and unique) is <strong>fixed as the key itself</strong>. This is a massive cryptographic mistake because it allows predictability.</li>
        <li>The system relies <em>only</em> on the HMAC for authentication, not on AES-GCM's internal authentication tag.</li>
        <li>The HMAC key is <strong>known and constant</strong> — it's simply 1337 padded to 16 bytes, which is obviously insecure.</li>
    </ul>
</p>
<p>
    Because of these missteps, if you get a ciphertext and its corresponding plaintext, you can forge a valid new ciphertext for a modified plaintext of the <strong>same length</strong> and produce a valid HMAC tag yourself.
</p>

<h3>How the Exploit Was Forged</h3>
<p>
    First, we generated a valid card using option 1. This gave us:
    <ul>
        <li>The original plaintext (name and balance).</li>
        <li>The original ciphertext and HMAC tag.</li>
    </ul>
    Now, since the HMAC key is known and the encryption is length-preserving, we could work some cryptographic wizardry:
</p>

<h3>Understanding the Exploit Script</h3>

<h4>Step 1: Extract Original Ciphertext</h4>
<p>
    The script slices off the HMAC tag from the received hex string. Since the tag length is 32 bytes, it simply cuts the last 64 hex characters.
</p>

<h4>Step 2: Reconstruct Original Plaintext</h4>
<p>
    The plaintext is recreated using the printed name and balance. This needs to be <strong>exactly</strong> what was used originally.
</p>

<h4>Step 3: Create Target Plaintext</h4>
<p>
    To reach the "13371337" balance, the script crafts a new plaintext. The trick is that the new plaintext must be the <strong>same length</strong> as the original, otherwise the XOR trickery would not align.
</p>
<p>
    It even intelligently adjusts the name length by trimming characters to fit if necessary. A short name, but a long flag-winning smile.
</p>

<h4>Step 4: Forge Target Ciphertext</h4>
<p>
    Now comes the magic: 
    <code>C2 = C1 XOR P1 XOR P2</code> 
    This works because of the nature of stream cipher-like modes (like AES-GCM encryption without auth). XORing the original ciphertext with the original plaintext removes the effect of the plaintext, and applying the target plaintext effectively "re-encrypts" it correctly.
</p>

<h4>Step 5: Forge Target HMAC</h4>
<p>
    Because the HMAC key is known, we simply generate a new HMAC of the new ciphertext. No dark arts needed.
</p>

<h4>Step 6: Combine and Submit</h4>
<p>
    The final forged card is the forged ciphertext concatenated with the forged tag. Submit this hex string into the program under option 2, and voilà, you win the flag.
</p>

<h3>Detailed Explanation of Challenge Code</h3>

<h4>Card Generation and Encryption</h4>
<code>
aes_key = get_random_bytes(16)
hmac_key = (1337).to_bytes(16, byteorder='big')
</code>
<p>Here, the AES key is random but the HMAC key is fixed. Immediate danger signs for any pentester worth their salt.</p>

<code>
cipher = AES.new(aes_key, AES.MODE_GCM, nonce=aes_key)
card_ct = cipher.encrypt(card_pt)
</code>
<p>Using the AES key as the nonce is catastrophic. Nonces should never be predictable or reused, but here it's literally the key reused as a nonce.</p>

<code>
hmac = HMAC.new(hmac_key, digestmod=SHA256)
tag = hmac.update(card_ct).hexdigest()
</code>
<p>Separate HMAC protects the ciphertext — but with a fixed, known key. It's like putting a lock on your bike but taping the key next to it.</p>

<h4>Card Validation</h4>
<code>
card = bytes.fromhex(card)
ct, tag = card[:-TAG_LEN], card[-TAG_LEN:]
</code>
<p>During validation, the HMAC is verified by recomputing it. No verification of AES-GCM's built-in authentication happens at all.</p>

<code>
cipher = AES.new(aes_key, AES.MODE_GCM, nonce=aes_key)
pt = cipher.decrypt(ct).decode()
</code>
<p>Decrypts the ciphertext. Since the nonce is the same as the key, predictability leaks all over the place.</p>

<h3>Detailed Walkthrough of the Exploit Script</h3>

<h4>Setup Values</h4>
<code>
original_name = "Jane Soh"
original_bal = "227"
original_card_hex = "..."
hmac_key = (1337).to_bytes(16, byteorder='big')
</code>
<p>Inputs from the printed card and the known HMAC key.</p>

<h4>Extracting Ciphertext</h4>
<code>
original_ct_hex = original_card_hex[:-TAG_LEN_BYTES * 2]
C1 = bytes.fromhex(original_ct_hex)
</code>
<p>Separates ciphertext from HMAC tag.</p>

<h4>Creating New Plaintext</h4>
<code>
target_name = "A" * (len(original_name) - 5)
P2 = (target_name + '\n' + "13371337").encode()
</code>
<p>Adjusts name length to keep everything perfectly aligned for XOR operations.</p>

<h4>Forging Ciphertext</h4>
<code>
C2 = bytes(c ^ p1 ^ p2 for c, p1, p2 in zip(C1, P1, P2))
</code>
<p>Applies XOR to transform the ciphertext into one encrypting our target plaintext.</p>

<h4>Generating New HMAC</h4>
<code>
hmac_calc = HMAC.new(hmac_key, digestmod=SHA256)
hmac_calc.update(C2)
T2 = hmac_calc.digest()
</code>
<p>New ciphertext needs a new valid HMAC, generated using the same fixed key.</p>

<h4>Building Final Card</h4>
<code>
exploit_card_hex = C2.hex() + T2.hex()
</code>
<p>Simply combine and ready to submit.</p>

<h3>Conclusion</h3>
<p>
    This challenge teaches important lessons: why random nonces matter, why relying on separate HMACs (with guessable keys!) is dangerous, and why cryptography is a "no half-measures" field. As they say, cryptography is like coding — you get it wrong, and suddenly your life savings are buying someone else a yacht.
</p>
`
  },
  {
    title: "House of Commons propose devolution plan amid conservative opposition",
    description: "Press article discussing the House of Commons' proposal for devolution in the UK, highlighting the opposition from conservative members, written for RVMUN 2025, Associated Press.",
    category: "MUN",
    source: "Unpublished",
    link: "",
    content: `
    <html>
      <body class="c10 doc-content">
        <p class="c1">
          <span class="c6">
            BY Tan Yu Kai James and Rishav Ganguly
          </span>
        </p>
        <p class="c1"><span class="c4">
          Updated 10:23 GMT+8, 19 March</span>
        </p>
        <p class="c1">
          <span>UNITED NATIONS </span><span>(AP) &mdash; </span>
          <span class="c2">Prime Minister Keir Starmer defended his government&rsquo;s English Devolution Bill, insisting that regional governments need greater autonomy to ensure economic growth and political stability. His comments come amid opposition from Conservative lawmakers, who argue that increased devolution could weaken national cohesion and create governance challenges.</span>
        </p>
        <p class="c1">
          <span class="c2">
            The push for English devolution is not new. The debate over regional autonomy has been a recurring issue in British politics for decades. The Local Government Act of 1972 restructured England&rsquo;s administrative divisions, but power remained largely centralized in Westminster. The late 1990s saw a shift toward devolution with the creation of the Scottish Parliament, Welsh Senedd, and Northern Ireland Assembly under Prime Minister Tony Blair. However, England&mdash;despite hosting the majority of the UK&rsquo;s population&mdash;never received a similar level of regional autonomy.
          </span>
        </p>
        <p class="c1">
          <span class="c2">
            Successive governments have introduced measures to empower local administrations, including metro mayors and regional combined authorities. However, critics argue that these efforts have been piecemeal and insufficient. Starmer&rsquo;s English Devolution Bill aims to create a more structured framework, granting more decision-making power to regional governments while maintaining oversight from Westminster. &ldquo;Devolution will strengthen, not weaken governance,&rdquo; states Starmer in an interview.
          </span>
        </p>
        <p class="c1">
          <span>
            Starmer also rejected concerns that his plan would undermine parliamentary sovereignty, instead pointing to the Regional Development Board as a safeguard against fragmentation. &ldquo;With the government providing the initial funding, the Regional Development Board will act as a middleman between devolved agencies and Westminster,&rdquo; Starmer said. &ldquo;This ensures that both needs are met and a compromise is reached as soon as possible.&rdquo;
          </span>
        </p>
        <p class="c1">
          <span class="c2">
            He further explained that funding distribution would be regulated through structured negotiations, using the BU formula as a &ldquo;fail-safe&rdquo; to ensure economic stability across regions. The formula, he said, would prevent financial mismanagement while allowing local governments to address regional economic disparities.
          </span>
        </p>
        <p class="c1">
          <span class="c2">
            The Conservative Party has pushed back against Starmer&rsquo;s proposal, arguing that excessive devolution could create inconsistencies in law enforcement, taxation, and economic policies across different regions.
          </span>
        </p>
        <p class="c1">
          <span class="c2">
            Chris Philp, the Shadow Home Secretary, made it clear that his party opposes further decentralization.</span></p><p class="c1"><span class="c2">&ldquo;Local government power should not be increased and should be limited,&rdquo; he said.
          </span>
        </p>
        <p class="c1">
          <span class="c2">
            Philp&rsquo;s statement reflects a broader Conservative concern that regional authorities might overstep their boundaries, leading to inefficiencies and a loss of central oversight.
          </span>
        </p>
        <p class="c1">
          <span class="c2">
            Robert Jenrick, the Shadow Justice Secretary, refused to comment on the bill. However, his past statements suggest skepticism toward large-scale devolution, particularly when it comes to legal matters and maintaining uniform judicial standards across the country.
          </span>
        </p>
        <p class="c1">
          <span class="c2">
            The debate over English devolution is shaping up to be a defining issue in Starmer&rsquo;s administration. While Labour argues that stronger regional governments will lead to economic and political stability, the Conservatives warn of inefficiencies, increased bureaucracy, and a weakened central government.
          </span>
        </p>
        <p class="c1">
          <span>
            With both sides holding firm, the bill&rsquo;s fate remains uncertain. However, as public demand for more regional autonomy grows, the question of how much power should be transferred from Westminster to local authorities is unlikely to disappear anytime soon.
          </span>
        </p>
      </body>
    </html>`
  }
];

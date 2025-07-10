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
export interface RepresentationRole {
  title: string;
  organization: string;
  duration: string;
  description: string;
}

export const representationRoles: RepresentationRole[] = [
  {
    title: "International Delegate, Taichung Cup Handball Championship",
    organization: "Handball Federation Singapore, HFS",
    duration: "2024",
    description: "Represented Singapore in the Taichung Cup Handball Championship, showcasing teamwork and sportsmanship."
  },
  {
    title: "Aeromodelling Expert (Level 3)",
    organization: "Singapore Youth Flying Club, SYFC",
    duration: "2022 - 2024",
    description: "Completed progressive training from Level 1 to Level 3 in aeromodelling, showcasing advanced understanding in aircraft design, flight principles, and simulation.",
  },
  {
    title: "Upper Sec House Committee Member",
    organization: "Student Leadership Board (House)",
    duration: "2024",
    description: "Served as part of the Upper Sec House Committee, contributing to house events and promoting school spirit through leadership and coordination.",
  },
    {
    title: "Leadership Module Graduate",
    organization: "School of Science and Technology, Singapore, SST",
    duration: "2023",
    description: "Completed two school-recognized leadership development modules including OEE training on group dynamics and outdoor education expeditions.",
  },
  // {
  //   title: "SYFC Inter-School Aeromodelling Competitor",
  //   organization: "Singapore Youth Flying Club, SYFC",
  //   duration: "2022 - 2024",
  //   description: "Represented school in multiple SYFC inter-school competitions including Launch Glider and Flight Simulation events.",
  // },
  // {
  //   title: "SYFC Top Gun Programme Participant",
  //   organization: "Singapore Youth Flying Club, SYFC",
  //   duration: "2024",
  //   description: "Completed the elite Top Gun programme, enhancing practical aeronautical knowledge and team collaboration in advanced projects.",
  // },
];

export const projectsData: ProjectProps[] = [
  {
    title: "Honeypot",
    description: "Designed a custom honeypot to study real-world cyberattacks and analyze threat behavior.",
    fullDescription: "Independently developed and deployed a honeypot system to simulate vulnerable services and attract cyber threats. Configured Dockerized services, implemented robust logging mechanisms, and monitored network traffic in real time. This initiative provided valuable insights into attacker methodologies, intrusion patterns, and effective defensive measures.",
    category: "Cybersecurity",
    image: "",
    technologies: ["Python", "Docker", "Networking", "Cybersecurity"],
    durationHours: 150,
    challenges: "Creating a realistic and appealing environment for attackers without compromising operational security required extensive research and meticulous planning.",
    outcomes: "Enhanced my proficiency in proactive defense, data analysis, and incident response strategies.",
    links: {
      code: "https://github.com",
    },
  },
  {
    title: "Colorectal Cancer Detection using CNN",
    description: "Built a deep learning model to detect colorectal cancer from histological images.",
    fullDescription: "Developed a Convolutional Neural Network (CNN) using TensorFlow to classify medical images and identify cancerous tissue. Managed the full pipeline, including data preprocessing, augmentation, architecture design, hyperparameter tuning, and evaluation. Focused on balancing model accuracy and interpretability to ensure reliable clinical application.",
    category: "AI/ML",
    image: "",
    technologies: ["Python", "TensorFlow", "CNN", "Medical Imaging"],
    durationHours: "Ongoing",
    challenges: "Handling data variability and mitigating overfitting required rigorous experimentation and validation.",
    outcomes: "Achieved strong classification performance and gained practical experience in applying AI to healthcare challenges.",
    links: {
      // code: "https://github.com",
    },
  },
  {
    title: "IDP Integrated Design Challenge",
    description: "Designed and built an autonomous robot capable of navigation, object manipulation, and QR code scanning.",
    fullDescription: "Led the development of an autonomous robotics solution for a school project. The system integrated custom computer vision models using Convolutional Neural Networks for object recognition, line-tracing algorithms, and robotic actuators for object manipulation. Oversaw both hardware assembly and software development to deliver a functional prototype.",
    category: "Robotics",
    image: "",
    technologies: ["Python", "OpenCV", "Arduino", "ML", "Sensors"],
    durationHours: 70,
    challenges: "Integrating multiple subsystems and achieving reliable performance under competition conditions demanded extensive testing and iterative refinement.",
    outcomes: "Successfully completed and demonstrated the prototype, strengthening my skills in interdisciplinary engineering and team collaboration.",
    links: {
      code: "https://github.com",
    },
  },
  {
    title: "Post-Disaster Management Robot",
    description: "Developed a remotely operated robot for debris removal in disaster environments.",
    fullDescription: "Designed and built a robotic platform capable of navigating hazardous environments to clear debris, supporting first responders in post-disaster scenarios. Focused on mechanical stability, wireless communication, and ease of control under unpredictable conditions.",
    category: "Robotics",
    image: "",
    technologies: ["Arduino", "Wireless Comms", "Mechanical Design"],
    durationHours: 28,
    challenges: "Ensuring stable operation over uneven terrain while maintaining precise remote control required careful mechanical and electrical design.",
    outcomes: "Delivered a proof-of-concept robot that enhances safety and operational efficiency in emergency response efforts.",
    links: {
      documentation: "https://github.com",
    },
  },
  {
    title: "LeBron Quotes API",
    description: "Developed a web crawler and REST API to aggregate and serve quotes from LeBron James.",
    fullDescription: "Built a Python-based web crawler using Selenium and WebDriver to scrape quotes from BrainyQuote. Processed HTML content to extract relevant data and exposed it through a FastAPI-based RESTful API. Deployed the solution on Render, enabling easy programmatic access to curated content.",
    category: "Other",
    image: "",
    technologies: ["Python", "Selenium", "Render"],
    durationHours: 5,
    challenges: "Accurately filtering dynamic webpage content and structuring it into clean, consumable JSON data.",
    outcomes: "Deepened my understanding of web scraping, data processing, and API deployment pipelines.",
    links: {
      documentation: "https://github.com/Imnotgoingtohindiclass/Lebron_Api",
    },
  },
  {
    title: "Autonomous Life Buoy",
    description: "Prototyped a smart life buoy capable of detecting and assisting individuals in distress.",
    fullDescription: "Developed a functional prototype of an intelligent life buoy equipped with heat sensors for human detection. The system autonomously navigates toward a person overboard and can be retrieved after rescue. Emphasized safety, stability, and responsiveness in challenging aquatic conditions.",
    category: "Engineering",
    image: "",
    technologies: ["Sensors", "Arduino", "Prototype Engineering"],
    durationHours: 10,
    challenges: "Achieving accurate detection while minimizing false positives and ensuring operational stability in water.",
    outcomes: "Created an innovative proof of concept aimed at improving maritime safety and emergency response times.",
    links: {
      documentation: "",
    },
  },
  {
    title: "Electronic Muscle Stimulator",
    description: "Engineered a non-programmable muscle stimulation device for rehabilitation therapy.",
    fullDescription: "Designed and constructed an electronic muscle stimulator that generates controlled electrical pulses to aid muscle activation and recovery, particularly for elderly users. Developed the entire circuit using analog electronics, ensuring both safety and therapeutic effectiveness.",
    category: "Electronics",
    image: "",
    technologies: ["Circuit Design", "Analog Electronics"],
    durationHours: 100,
    challenges: "Balancing effective stimulation intensity with strict safety standards and user comfort.",
    outcomes: "Delivered a reliable and user-friendly device that supports rehabilitation and mobility improvement.",
    links: {
      documentation: "",
    },
  },
  {
    title: "RefrigeReminder",
    description: "Developed an IoT system and mobile application to reduce food waste through smart reminders.",
    fullDescription: "Collaborated with a team to design an IoT-enabled solution that tracks stored food items and expiry dates. The system detects fridge openings and sends automated notifications to users, promoting timely consumption. Focused on creating an accessible, user-centric experience suitable for all demographics.",
    category: "Engineering",
    image: "",
    technologies: ["Arduino", "IoT", "Mobile App Development"],
    durationHours: 50,
    challenges: "Balancing system reliability with user convenience and avoiding excessive notifications.",
    outcomes: "Developed a functional prototype that empowers households to reduce waste and improve food management practices.",
    links: {
      documentation: "https://github.com",
    },
  },
  {
    title: "Smart Ball Launcher",
    description: "Engineered an automated ball launcher for sports training applications.",
    fullDescription: "Designed and prototyped a mechanical system capable of launching footballs with consistent speed and trajectory. Integrated motor control and safety mechanisms to facilitate targeted passing and shooting drills for athletes.",
    category: "Engineering",
    image: "",
    technologies: ["Arduino", "Mechanical Design", "Motors"],
    durationHours: 90,
    challenges: "Calibrating the launch mechanism to achieve consistent performance without compromising safety.",
    outcomes: "Created a robust prototype that streamlines training and enhances skill development in football practice.",
    links: {
      documentation: "https://github.com",
    },
  },
  {
    title: "Smart Home Lighting System",
    description: "Developed an automated home system to optimize lighting and cooling based on environmental conditions.",
    fullDescription: "Built an Arduino-powered smart home solution that uses light-dependent resistors and temperature sensors to regulate lighting and cooling systems autonomously. Focused on improving energy efficiency and enhancing user comfort.",
    category: "Engineering",
    image: "",
    technologies: ["Arduino", "Sensors", "Smart Home Tech"],
    durationHours: 80,
    challenges: "Ensuring accurate sensor calibration to maintain consistent performance in varying conditions.",
    outcomes: "Delivered a working prototype that demonstrates practical applications of IoT and automation in residential settings.",
    links: {
      code: "https://github.com",
    },
  },
  {
    title: "Tsunagu Research Project",
    description: "Investigated plant-based pH indicators as safer alternatives for food industry applications.",
    fullDescription: "Conducted research exploring the feasibility of natural pH indicators, such as butterfly pea flower and red cabbage extracts, to replace synthetic indicators in food safety monitoring. Evaluated sensitivity, accuracy, and usability in laboratory settings.",
    category: "Research",
    image: "",
    technologies: ["Plant Chemistry", "Food Science", "Spectroscopy"],
    durationHours: 90,
    challenges: "Addressing variability in natural sample composition and achieving consistent absorbance readings.",
    outcomes: "Demonstrated the viability of plant-derived indicators and proposed recommendations for industrial adoption.",
    links: {
      documentation: "https://github.com",
    },
  },
  {
    title: "E-Math PT: Degree vs Employment Study",
    description: "Performed a statistical analysis on the correlation between degree choice and employment outcomes.",
    fullDescription: "Analyzed survey data to examine how different academic disciplines impact employability in Singapore. Applied advanced statistical techniques, including ANOVA, chi-square testing, and regression modeling, to derive actionable insights.",
    category: "Research",
    image: "",
    technologies: ["Python", "Pandas", "Statistics"],
    durationHours: 70,
    challenges: "Cleaning and validating extensive survey datasets while ensuring statistical rigor.",
    outcomes: "Provided evidence-based findings highlighting the significant influence of degree specialization on career prospects.",
    links: {
      documentation: "https://github.com",
    },
  },
  {
    title: "Tech Divide Research",
    description: "Studied the impact of technological gaps on intergenerational communication.",
    fullDescription: "Researched how differences in technology adoption contribute to miscommunication between generations. Combined primary survey data and secondary literature to identify underlying causes and develop targeted solutions.",
    category: "Research",
    image: "",
    technologies: ["Survey Analysis", "Secondary Research"],
    durationHours: 60,
    challenges: "Encouraging participation and honest feedback from diverse demographic groups.",
    outcomes: "Developed a set of recommendations, including training programs and community initiatives, to bridge the technology divide.",
    links: {
      documentation: "https://github.com",
    },
  },
  {
    title: "Illustratum",
    description: "Created an interactive website to demonstrate and visualize binaural beats.",
    fullDescription: "Developed a web application that generates two sound waves with slightly different frequencies to illustrate the phenomenon of binaural beats. Integrated JavaScript-based audio synthesis with Desmos visualizations to provide an educational and interactive experience.",
    category: "Other",
    image: "",
    technologies: ["Web Audio API", "Desmos Graphs", "JavaScript"],
    durationHours: 50,
    challenges: "Ensuring accurate audio rendering and synchronizing graphical representations.",
    outcomes: "Produced an engaging educational tool that helps users explore psychoacoustic principles in an accessible format.",
    links: {
      demo: "https://github.com",
    },
  },
];

export const technicalSkills = [
  {
    name: "Programming",
    level: "Proficient",
    percentage: 79,
    explanation: "Proficient experience in Python. Built a few full-stack applications, including web apps and IoT systems. Strong understanding of algorithms, data structures, and software design patterns."
  },
  {
    name: "Data Science",
    level: "Proficient",
    percentage: 77,
    explanation: "Proficient in data analysis, visualization, and statistical modeling. Experience with pandas, NumPy, and Matplotlib. Completed projects in data-driven decision making and predictive analytics."
  },
  {
    name: "Hardware and Embedded Systems",
    level: "Intermediate",
    percentage: 63,
    explanation: "Hands-on experience with Arduino, Raspberry Pi, and various sensors. Developed IoT devices and embedded systems for real-world applications"
  },
  {
    name: "Machine Learning",
    level: "Intermediate",
    percentage: 62,
    explanation: "Practical experience with TensorFlow and OpenCV. Developed computer vision models and implemented machine learning algorithms for some applications"
  },
    {
    name: "Cybersecurity",
    level: "Novice",
    percentage: 55,
    explanation: "Im bad at ts"
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

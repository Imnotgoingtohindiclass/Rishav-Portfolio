import { ProjectProps } from "src/components/ui/project-card.tsx";
import { ArticleProps } from "src/components/ui/article-card.tsx";

export const achievements = [
  {
    title: "Bronze Award, National Cybersecurity Olympiad",
    issuer: "National Cybersecurity Olympiad (Singapore)",
    year: "2025",
    certificate: "/public/NCO2025_COA_Bronze_19.jpg"
  },
  {
    title: "Best Article, RVMUN 2025 (Press Corps)",
    issuer: "River Valley Model United Nations",
    year: "2025",
    certificate: "public/Item-2_SUTD-Camp_Presentation.jpg"
  },
  {
    title: "Second Place, SST CTF",
    issuer: "School of Science and Technology, Singapore",
    year: "2025",
    certificate: "public/Item-4_Jakarta-Trip24_Sigmas-Ahoy.jpg"
  },
  {
    title: "Gold Award, Australian Mathematics Competition",
    issuer: "Australian Mathematics Trust",
    year: "2022, 2023, 2024",
    certificate: "public/Item-5_Taiwan-Trip24.jpg"
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
    fullDescription: "The RefrigeReminder project by Team Angus Cheezburgur (Caydran, Coen, Martin, and Rishav) aimed to solve the problem of food being forgotten and expiring in refrigerators. It's an IoT device paired with a mobile app, allowing users to log food items and expiry dates. It detects fridge openings and sends reminders, emphasizing simplicity, reliability, accessibility, and reusability.",
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
];

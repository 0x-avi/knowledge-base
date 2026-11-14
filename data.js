// Your Zettelkasten. Add a note by appending to NOTES.
// content: lines starting with "• " render as bullets.
// tags: names from TAGS. source: a key from SOURCES (optional).
// links: titles of related notes (optional) — shown as clickable links.

const SOURCES = {
  iife: { name: "MDN — IIFE", url: "https://developer.mozilla.org/en-US/docs/Glossary/IIFE", type: "Website" },
  hfaudio: { name: "HF Audio Course — Ch.1: Audio Data", url: "https://huggingface.co/learn/audio-course/chapter1/audio_data", type: "Website" },
  understand: { name: "Why You Don't Understand Others", url: "https://medium.com/@jjbartholomew/why-you-dont-understand-others-it-s-because-you-re-not-actually-trying-d65d71a023af", type: "Article" },
  sqlite: { name: "Should I Use SQLite?", url: "https://blog.wesleyac.com/posts/consider-sqlite", type: "Article" },
  stm: { name: "Short-term memory implementation", url: "https://oneuptime.com/blog/post/2026-01-30-short-term-memory/view#core-components-of-short-term-memory", type: "Article" },
  openenv: { name: "OpenEnv Course — Module 1", url: "https://github.com/raun/openenv-course/blob/main/module-1/README.md", type: "Website" },
};

const TAGS = [
  "AI", "AUDIO", "LLM", "RL", "Diffusion", "GANs", "GPU/CUDA",
  "Skill-Learning", "Psychology",
  "python", "Javascript", "Programming", "low-level", "SQL", "Postgres",
  "Docker", "YAML", "Next.js", "web dev", "Godot",
];

const NOTES = [
  { title: "Little Endian", tags: ["low-level"], content:
`• Storing bytes from least-to-most significant
• eg: 0x12345678 becomes 0x78 0x56 0x34 0x12 & 0x78563412 becomes 0x12, 0x34, 0x56, 0x78` },

  { title: "Offset in program files", tags: ["low-level"], content:
`• A way to identify which byte of a file we are talking about, eg: all files start from 0x0, and the second byte would be offset by 1 thus it would be 0x1` },

  { title: "Transactions in Postgres", tags: ["Postgres", "SQL"], content:
`• Transaction is a set of db operations that either all get run, or none of them get executed` },

  { title: "Factory class/function", tags: ["Programming"], content:
`• Creates something and returns it for you` },

  { title: "Mixin", tags: ["Programming"], content:
`• A small class that adds functionality to another class but is never used individually itself` },

  { title: "Dependency Injection", tags: ["Programming"], content:
`• Instead of instantiating everything inside the class, the dependencies are provided to the class from elsewhere
• It is essentially separation of concerns where the class just focuses on calling` },

  { title: "YAML anchors for re-using and defining code blocks", tags: ["Docker", "YAML"], content:
`• &app_env defines (names) a block of key-value pairs so it can be reused.
• *app_env references that block wherever you want to reuse it.
• <<: merges the referenced block into the current section, allowing you to add or override other keys alongside it.
In short: & = define, * = reuse, <<: = merge.` },

  { title: "_unhandled_input in Godot is better to use if you have UI elements", tags: ["Godot"], content:
`• When using the normal _input func it will steal the focus and not let you click the UI elements` },

  { title: "IIFE (Immediately Invoked Function Expression)", tags: ["Javascript"], source: "iife", content:
`• Automatically called right after func def (anonymously defined func with () beside the definition to instantly call it)` },

  { title: "Best Way to Learn Efficiently", tags: ["Skill-Learning"], content:
`• Have an expert copy of the same thing, an original or some point of comparison done by an expert of what you are trying to learn, then compare your own work to it to find what can be better.
• Make sure you have the prerequisite skills to learn the thing, eg you can't draw an anime body without being able to draw individual parts first.
• Write out steps to fix the thing that is wrong so you know exactly what to do
• Remember if you quit when you suck, you will always suck`,
    links: ["To learn anything follow this", "Always focus on the bottleneck"] },

  { title: "Always focus on the bottleneck", tags: ["Skill-Learning"], content:
`• Focus on what is making your work look the worst, and stick to improving it, rather than going on doing what you are already good at. Good work has every aspect done well, not just some of them.` },

  { title: "How to reflect on your work", tags: ["Skill-Learning"], content:
`• Social media is a good indicator, high traffic probably means something is done right or better
• After you complete your work give some time before you start seeing what you can improve, maybe even visit some old work. Don't do it immediately or you will experience gestaltzerfall`,
    links: ["To learn anything follow this"] },

  { title: "Do the thing you actually want to get good at", tags: ["Skill-Learning"], content:
`• eg: wanna learn to draw anime? Draw anime characters, not environments or shapes. Wanna get good at designing websites? Design websites, not mobile UIs etc` },

  { title: "To learn anything follow this", tags: ["Skill-Learning"], content:
`• DO → REFLECT → LEARN → REPEAT` },

  { title: "[ ] vs ( ) routes in Next.js", tags: ["Next.js", "web dev"], content:
`• [ ] - used to define dynamic routes, eg multi page forms
• ( ) - used for grouping routes, is invisible in the actual url, but allows creating a different layout.tsx for each` },

  { title: "Prefetching Next.js", tags: ["Next.js", "web dev"], content:
`• Process of loading a route before user visits it
• <Link> tag is auto prefetched when in user viewport
• Static route is fully prefetched
• Dynamic route is prefetched partially only if loading.tsx is present, otherwise skipped` },

  { title: "Can only use Next Export for static websites", tags: ["Next.js", "web dev"], content:
`These will fail:
• Websites having dynamic routes
• Websites that make any calls to servers after initial build` },

  { title: "What is Sampling and Sampling rate?", tags: ["AUDIO", "AI"], source: "hfaudio", content:
`• Sampling is simply the process of measuring the value of the continuous signal at fixed intervals; after sampling we get a discrete waveform since it is finite and at fixed intervals
• Sampling rate or sampling frequency is the amount of samples taken per second, measured in Hertz (Hz).` },

  { title: "The sampling rate is defined by the highest seen frequency", tags: ["AUDIO", "AI"], source: "hfaudio", content:
`• This is called the Nyquist limit, which is exactly half the sampling rate. eg human speech has an audible range of 8 kHz at max, therefore 16 kHz is able to capture human speech perfectly. Higher sampling rate is not necessary and just increases computation cost. Using an insufficient sample rate, eg 8 kHz, will cause the audio to sound muffled`,
    links: ["Standards for sampling rates"] },

  { title: "Standards for sampling rates", tags: ["AUDIO", "AI"], source: "hfaudio", content:
`• Standard CD quality is 44.1 kHz, high quality audio is 192 kHz, models that train on human speech use 16 kHz` },

  { title: "The temporal depth changes with sampling rate", tags: ["AUDIO", "AI"], source: "hfaudio", content:
`• Because sampling rate determines how often we sample, transformers treat these examples as sequences, i.e. a 5-second sound at a sampling rate of 16,000 Hz will be represented as a series of 80,000 values, so different temporal depths or different sampling rates are very difficult to adapt to. Thus we must make the sampling rate consistent across the dataset; this is called resampling.`,
    links: ["The process of making sample rates match is called resampling"] },

  { title: "All samples in a dataset should have the same sampling rate", tags: ["AUDIO", "AI"], source: "hfaudio", content:
`• Also, for pre-trained models the sampling rate should match the pre-training dataset.`,
    links: ["The process of making sample rates match is called resampling"] },

  { title: "The process of making sample rates match is called resampling", tags: ["AUDIO", "AI"], source: "hfaudio", content: `` },

  { title: "Audio formats mostly differ in compression methods", tags: ["AUDIO", "AI"], source: "hfaudio", content:
`File formats such as .wav (Waveform Audio File), .flac (Free Lossless Audio Codec) and .mp3 (MPEG-1 Audio Layer 3) mainly differ in how they compress the digital representation of the audio signal.` },

  { title: "time.monotonic() vs time.time()", tags: ["python"], content:
`• time.time() uses system time and can be affected by stuff like daylight savings or leap seconds
• time.monotonic() can never go back and uses a local counter; it's not linked to the unix timestamp` },

  { title: "__post_init__ is a special @dataclass function", tags: ["python"], content:
`• It can use __init__ values to calculate new derived values` },

  { title: "HDRIs source", tags: ["Godot"], content:
`• https://polyhaven.com/` },

  { title: "If your game scene looks bad", tags: ["Godot"], content:
`• Are the assets alright?
• Is the lighting good?
• Is the environment set up well?
• Are the shaders correct?
• Are the VFX correct?`,
    links: ["Always focus on the bottleneck"] },

  { title: "Moving in Scene in Godot", tags: ["Godot"], content:
`• MB = Orbiting object
• Shift + MB = Pan around object
• Scroll = Zoom in / Zoom out
• F = Focus on node
• Shift + F = Freelook mode` },

  { title: "Press Ctrl+A or the + icon to add a new node to the scene", tags: ["Godot"], content: ``,
    links: ["Every component is a node in Godot"] },

  { title: "Every component is a node in Godot", tags: ["Godot"], content: `` },

  { title: "The best mentality", tags: ["Psychology"], content:
`• It's easy to be rude and angry when hurt; it's harder to listen, solve and move forward. Always choose to be calm no matter what.
• Let people cool down before you try and talk to them; people need to be in their senses for you to actually get through
• Don't chase people who constantly de-value your company; there will be someone who appreciates it.
• Never act emotionally, don't be anxious, think stuff through thoroughly first, always choose to be happy; life keeps going on and one day it won't even matter
• Don't take action when anxious, and don't take action without actual proof something is wrong`,
    links: ["Dealing with people"] },

  { title: "Dealing with people", tags: ["Psychology"], content:
`• If someone is angry, let them be angry, don't react; two fires always fuel each other towards an endless loop.
• If someone responds with anger or disrespect when you point something out, it's most probably because they feel guilty and don't have an answer
• Always think before you speak
• Never make pain for yourself with your thoughts, but never ignore the pain others cause you`,
    links: ["Understanding people better"] },

  { title: "Understanding people better", tags: ["Psychology"], source: "understand", content:
`• If you don't understand what reason a person did something for, ask them why. Never assume anyone has the same psychology as you` },

  { title: "SQLite is SQL as a library", tags: ["SQL"], source: "sqlite", content:
`• Rather than running SQLite in a different process/server, we embed the db directly into our program and store all the data in a single file through the library` },

  { title: "Token limit management strategies for short-term memory", tags: ["LLM", "AI"], source: "stm", content:
`• FIFO (naive but inefficient, no importance)
• Importance-based pruning (costlier but preserves key information)
• Sliding window (good recent context maintenance)
• Compression (reduces tokens used)`,
    links: ["Adding a recency score along with importance pruning improves conversation quality", "Always leave a margin of 5–10K tokens when implementing short-term memory"] },

  { title: "Adding a recency score along with importance pruning improves conversation quality", tags: ["LLM", "AI"], source: "stm", content: `` },

  { title: "Always leave a margin of 5–10K tokens when implementing short-term memory", tags: ["LLM", "AI"], source: "stm", content:
`• Prevents context overflow` },

  { title: "The Reinforcement Learning Loop", tags: ["RL", "AI"], source: "openenv", content:
`• Observe → Act → Reward → Repeat` },

  { title: "OpenEnv uses WebSockets under the hood for all env functions", tags: ["RL", "AI"], source: "openenv", content: `` },

];



import { Module } from '../types';

export const CURRICULUM: Module[] = [
  // --- PHASE 1: THE FUNDAMENTALS (LEARN THE TOOL) ---
  {
    id: 'mod_environment',
    title: 'Module 1: The Command Center',
    description: 'Mastering the Builder Interface & Controls.',
    icon: 'Layout',
    lessons: [
      {
        id: 'less_nav_hub',
        title: 'The Navigation Hub',
        duration: '6 min',
        xpReward: 100,
        resources: [
           { title: "Official Google AI Studio Documentation", url: "https://ai.google.dev/gemini-api/docs" },
           { title: "Google AI Quickstart Guide", url: "https://ai.google.dev/gemini-api/docs/quickstart" }
        ],
        content: `
          <h3>Getting Around the Studio</h3>
          <p>The Google AI Studio dashboard is your cockpit. It might look simple, but each tab represents a different stage of the development lifecycle.</p>
          
          <div class="space-y-6 my-6">
            <div class="p-4 bg-slate-50 border border-slate-200 rounded-lg">
              <strong class="text-slate-800 block mb-2 text-lg">🏠 Home: The Launchpad</strong>
              <p class="text-sm text-slate-600 mb-2">This is where you start. It highlights the newest models (like "Try Gemini 3") and capabilities ("Veo").</p>
              <p class="text-sm text-slate-600"><strong>Pro Tip:</strong> Don't ignore the "Get Started" code snippets here. They are the quickest way to verify your API key is working in a Python script before you build a full app.</p>
            </div>

            <div class="p-4 bg-blue-50 border border-blue-100 rounded-lg">
              <strong class="text-blue-800 block mb-2 text-lg">🎮 Playground: The Laboratory</strong>
              <p class="text-sm text-slate-600 mb-2">This is where 90% of your time is spent. It is a "stateless" sandbox. You experiment, you break things, and you test prompts.</p>
              <p class="text-sm text-blue-700 italic"><strong>Analogy:</strong> Think of the Playground as a sketchpad. You draw ideas here, but you frame them in the "Build" tab.</p>
            </div>

            <div class="p-4 bg-purple-50 border border-purple-100 rounded-lg">
              <strong class="text-purple-800 block mb-2 text-lg">🛠️ Build: The Archive</strong>
              <p class="text-sm text-slate-600 mb-2">When you click "Save" in the Playground, your prompt moves here. This is your library of saved prompts, tuned models, and chat history.</p>
              <p class="text-sm text-slate-600"><strong>Why use it?</strong> AI Studio doesn't auto-save like Google Docs. If you close the tab in Playground, it's gone. Always save working prompts to "Build".</p>
            </div>

            <div class="p-4 bg-green-50 border border-green-100 rounded-lg">
              <strong class="text-green-800 block mb-2 text-lg">📊 Dashboard: The Accountant</strong>
              <p class="text-sm text-slate-600">This tracks your API usage. It tells you two critical things:</p>
              <ul class="list-disc pl-5 mt-2 text-sm text-slate-600">
                 <li><strong>RPM (Requests Per Minute):</strong> How fast you are hitting the server.</li>
                 <li><strong>TPM (Tokens Per Minute):</strong> How much data you are sending.</li>
              </ul>
            </div>
          </div>

          <div class="mt-8 pt-6 border-t border-slate-200">
            <h4 class="text-slate-900 font-bold mb-2">🎓 Analysis: The Developer Lifecycle</h4>
            <p class="text-sm text-slate-700 leading-relaxed">
              Google didn't arrange these tabs randomly. They represent the <strong>Lifecycle of Software</strong>.
              You <em>Discover</em> capability in Home, you <em>Experiment</em> in Playground, you <em>Solidify</em> in Build, and you <em>Scale</em> in Dashboard.
              <br/><br/>
              <strong>The Conclusion:</strong> Beginners stay in the "Playground" forever. Professionals move quickly to "Build" (saving their work) and obsess over "Dashboard" (optimizing costs). If you aren't saving prompts to "Build," you aren't building a product; you're just chatting.
            </p>
          </div>
        `
      },
      {
        id: 'less_cockpit',
        title: 'The Builder Cockpit',
        duration: '8 min',
        xpReward: 150,
        resources: [
           { title: "Get API Key", url: "https://aistudio.google.com/app/apikey" },
           { title: "Prompt Gallery Examples", url: "https://ai.google.dev/gemini-api/prompts" }
        ],
        content: `
          <h3>Inside the Playground</h3>
          <p>Once you click "Playground", you enter the main interface. It is divided into three distinct zones.</p>
          
          <div class="space-y-6 my-6">
            <div class="p-4 bg-slate-50 border border-slate-200 rounded-lg">
              <strong class="text-slate-800 block mb-2">1. The Header (Utility Belt)</strong>
              <p class="text-sm text-slate-600">Top of the screen. The most important button here is <strong>Get Code (< >)</strong>.</p>
              <div class="mt-3 p-3 bg-white border border-slate-200 rounded text-sm text-slate-700">
                 <strong>The "Get Code" Magic:</strong><br/>
                 You just spent 20 minutes prompting the AI to behave like a French Chef. Click "Get Code". AI Studio instantly generates a Python or JavaScript file containing your exact settings, system instructions, and history. You can copy-paste this directly into your app.
              </div>
            </div>

            <div class="p-4 bg-slate-50 border border-slate-200 rounded-lg">
              <strong class="text-slate-800 block mb-2">2. The Left Pane (History & Context)</strong>
              <p class="text-sm text-slate-600">This shows your recent chats. Use the <strong>(+)</strong> button to start fresh.</p>
              <p class="text-sm text-slate-600 mt-2"><strong>Investigation:</strong> Why start fresh? Because AI has a "Context Window". If a chat gets too long, the AI gets confused. Starting a new chat clears the "RAM" and gives you a smarter model.</p>
            </div>

            <div class="p-4 bg-slate-50 border border-slate-200 rounded-lg">
              <strong class="text-slate-800 block mb-2">3. The Right Pane (The Engine Room)</strong>
              <p class="text-sm text-slate-600">This contains the "Knobs and Dials":</p>
              <ul class="list-disc pl-5 space-y-2 text-sm text-slate-600 mt-2">
                <li><strong>Model:</strong> The brain size (Flash vs Pro).</li>
                <li><strong>Temperature:</strong> The creativity slider.</li>
                <li><strong>Safety:</strong> The content filters.</li>
              </ul>
              <p class="text-sm text-slate-600 mt-2"><strong>Trap:</strong> These settings reset when you start a new chat unless you save them as a template!</p>
            </div>
          </div>

          <div class="mt-8 pt-6 border-t border-slate-200">
            <h4 class="text-slate-900 font-bold mb-2">🎓 Analysis: Separation of Concerns</h4>
            <p class="text-sm text-slate-700 leading-relaxed">
              The interface physically separates <strong>Content</strong> (Center/Left) from <strong>Configuration</strong> (Right). This teaches us that the <em>Prompt</em> is not the only variable.
              <br/><br/>
              <strong>The Conclusion:</strong> You can have a perfect prompt, but if your Temperature (Config) is wrong, the output will fail. You must treat the "Right Pane" settings as part of your source code. When you share a prompt, you must also share the settings used to generate it.
            </p>
          </div>
        `
      },
      {
        id: 'less_input_bar',
        title: 'The Input Bar',
        duration: '5 min',
        xpReward: 150,
        resources: [
           { title: "Multimodal Prompting Guide", url: "https://ai.google.dev/gemini-api/docs/prompting-strategies" },
           { title: "Video Prompting", url: "https://ai.google.dev/gemini-api/docs/prompting_with_media" }
        ],
        content: `
          <h3>The Control Stick</h3>
          <p>The bottom input bar is where you communicate. But it's not just a text box. It's a <strong>Multimodal Interface</strong>.</p>

          <div class="space-y-6 my-6">
            <div class="p-4 bg-purple-50 border border-purple-100 rounded-xl">
              <div class="flex items-center gap-2 mb-2">
                 <span class="text-2xl font-bold text-purple-600">＋</span>
                 <strong class="text-purple-800">The Plus Sign (Multimodal)</strong>
              </div>
              <p class="text-sm text-slate-700">This allows you to feed the AI things other than text.</p>
              
              <div class="mt-3 grid gap-2">
                 <div class="bg-white p-2 rounded border border-purple-100">
                    <strong class="text-xs text-purple-700 uppercase block">Strategy: The UI Clone</strong>
                    <p class="text-xs text-slate-600">Take a screenshot of a website you like. Click (+), upload the image, and type: <em>"Write the React/Tailwind code to recreate this design exactly."</em> The AI will "see" the image and write the code.</p>
                 </div>
                 <div class="bg-white p-2 rounded border border-purple-100">
                    <strong class="text-xs text-purple-700 uppercase block">Strategy: The Data Analyst</strong>
                    <p class="text-xs text-slate-600">Upload a 50-page PDF or a CSV file. Ask: <em>"Summarize the Q3 financial results from this document."</em> Gemini Pro handles massive files effortlessly.</p>
                 </div>
              </div>
            </div>

            <div class="p-4 bg-blue-50 border border-blue-100 rounded-xl flex gap-4">
              <div class="text-2xl">🎤</div>
              <div>
                <strong class="text-blue-800 block">The Microphone</strong>
                <p class="text-sm text-slate-700">Don't type your spec. <strong>Speak it.</strong> Humans speak 3x faster than they type. Ramble about your app idea for 2 minutes, then hit send. The AI will parse your rambling into a structured plan.</p>
              </div>
            </div>
          </div>

          <div class="mt-8 pt-6 border-t border-slate-200">
            <h4 class="text-slate-900 font-bold mb-2">🎓 Analysis: Context Velocity</h4>
            <p class="text-sm text-slate-700 leading-relaxed">
              Writing a 1,000-word description of a website takes 30 minutes. Taking a screenshot takes 1 second.
              <br/><br/>
              <strong>The Conclusion:</strong> The "Plus Sign" is a time machine. It compresses hours of descriptive typing into a single file upload. The most efficient prompt engineers write <em>less</em> and show <em>more</em>. If you find yourself describing a visual layout in text, you are doing it wrong. Screenshot it.
            </p>
          </div>
        `
      },
      {
        id: 'less_gallery',
        title: 'The Gallery (Recipe Book)',
        duration: '7 min',
        xpReward: 100,
        resources: [
           { title: "Browse the Prompt Gallery", url: "https://ai.google.dev/gemini-api/prompts" }
        ],
        content: `
          <h3>Don't Reinvent the Wheel</h3>
          <p>The <strong>Gallery</strong> ("Showcase") is a library of pre-engineered prompts. Think of it as a Recipe Book.</p>
          
          <div class="space-y-6 my-6">
            <div class="p-4 bg-pink-50 border border-pink-100 rounded-xl">
              <strong class="text-pink-700 block mb-2 text-lg">The "Variable" Syntax</strong>
              <p class="text-sm text-slate-600 mb-2">When you open a Gallery prompt, you will often see text like this:</p>
              <code class="block bg-white p-2 rounded text-xs font-mono text-pink-600 border border-pink-200 mb-2">
                 Write a product description for {{PRODUCT_NAME}} targeting {{AUDIENCE}}.
              </code>
              <p class="text-sm text-slate-600">Those double curly braces <code>{{...}}</code> are <strong>Variables</strong>.</p>
              <p class="text-sm text-slate-600 mt-2"><strong>Why is this powerful?</strong> You can construct a perfect prompt once, and then just swap out the variables to generate infinite content. This is how "AI Wrapper" apps are built.</p>
            </div>

            <div class="p-4 bg-indigo-50 border border-indigo-100 rounded-xl">
              <strong class="text-indigo-700 block mb-2 text-lg">Investigation: The "Marketing" Card</strong>
              <p class="text-sm text-slate-600">Open the "Marketing Copy" card in the gallery. Notice the System Instructions. They likely say something like: <em>"You are an expert copywriter. Use persuasive, punchy language."</em></p>
              <p class="text-sm text-slate-600 mt-2"><strong>Lesson:</strong> The magic isn't just the prompt; it's the <strong>Persona</strong> defined in the system instructions.</p>
            </div>
          </div>

          <div class="mt-8 pt-6 border-t border-slate-200">
            <h4 class="text-slate-900 font-bold mb-2">🎓 Analysis: Programmatic Thinking</h4>
            <p class="text-sm text-slate-700 leading-relaxed">
              The Gallery teaches us to treat prompts as <strong>Functions</strong>, not conversations. A function takes an input (<code>{{PRODUCT}}</code>) and returns an output.
              <br/><br/>
              <strong>The Conclusion:</strong> Stop writing one-off prompts. Start building reusable "Prompt Templates" with variables. This is the first step toward building software instead of just using a chatbot.
            </p>
          </div>
        `
      },
      {
        id: 'less_time_travel',
        title: 'Time Travel (Checkpoints)',
        duration: '6 min',
        xpReward: 150,
        resources: [
           { title: "Iterative Prompting Guide", url: "https://ai.google.dev/gemini-api/docs/prompting_intro" }
        ],
        content: `
          <h3>Fixing Mistakes in the 4th Dimension</h3>
          <p>Prompting is iterative. You try something, it fails, you try again. AI Studio has built-in <strong>Time Travel</strong>.</p>
          
          <div class="space-y-6 my-6">
            <div class="p-4 bg-orange-50 border border-orange-100 rounded-lg">
              <strong class="text-orange-800 block mb-2">The "Edit & Run" Strategy</strong>
              <p class="text-sm text-slate-600">You asked the AI to write a poem. It wrote a bad one.</p>
              <p class="text-sm text-slate-600 mt-2"><strong>The Wrong Way:</strong> Type "No, make it rhyming" in a new message.</p>
              <p class="text-sm text-slate-600 mt-1"><strong>The Right Way:</strong> Hover over your <em>original</em> message. Click the pencil icon. Change your prompt to "Write a rhyming poem". Click "Run".</p>
              <p class="text-sm text-slate-600 mt-2">This <strong>Rewrites History</strong>. The bad poem never happened. This keeps your context window clean and focused.</p>
            </div>

            <div class="p-4 bg-teal-50 border border-teal-100 rounded-lg">
              <strong class="text-teal-800 block mb-2">View Diff</strong>
              <p class="text-sm text-slate-600">When refining code, the AI might change only one line in a 500-line file. It's hard to spot.</p>
              <p class="text-sm text-slate-600 mt-2">The "View Diff" button highlights changes: <span class="text-red-500 font-bold">Red</span> is deleted, <span class="text-green-500 font-bold">Green</span> is added. Use this to verify the AI isn't deleting important logic by accident.</p>
            </div>
          </div>

          <div class="mt-8 pt-6 border-t border-slate-200">
            <h4 class="text-slate-900 font-bold mb-2">🎓 Analysis: Non-Linear Development</h4>
            <p class="text-sm text-slate-700 leading-relaxed">
              Traditional conversation is linear (Start -> End). AI development is a tree structure. You branch off, test an idea, realize it failed, and prune the branch by editing the original message.
              <br/><br/>
              <strong>The Conclusion:</strong> A clean chat history yields smarter answers. By editing previous prompts instead of arguing with the AI in new messages, you prevent "Context Poisoning" (where the AI gets confused by its own previous mistakes).
            </p>
          </div>
        `
      }
    ]
  },
  {
    id: 'mod_gemini_basics',
    title: 'Module 2: The AI Brain',
    description: 'Models, Tokens & Context.',
    icon: 'Cpu',
    lessons: [
      {
        id: 'less_flash_vs_pro',
        title: 'Flash vs. Pro vs. 3',
        duration: '8 min',
        xpReward: 200,
        resources: [
           { title: "Gemini Models Overview", url: "https://ai.google.dev/gemini-api/docs/models/gemini" }
        ],
        content: `
          <h3>Picking the Right Brain</h3>
          <p>You wouldn't use a Ferrari to haul lumber, and you wouldn't use a dump truck to race. Models are tools.</p>

          <div class="grid gap-6 my-6">
            <div class="p-4 bg-indigo-50 border border-indigo-100 rounded-xl">
              <div class="flex justify-between items-center mb-2">
                <strong class="text-indigo-700 text-lg">Gemini 3 (Experimental)</strong>
                <span class="text-xs bg-indigo-200 text-indigo-800 px-2 py-1 rounded-full">The Futurist</span>
              </div>
              <p class="text-sm text-slate-700"><strong>Use Case:</strong> "Agentic" tasks. Complex reasoning chains.</p>
              <p class="text-sm text-slate-700 mt-2">Gemini 3 is often smarter at logic puzzles or planning a multi-step vacation. However, "Experimental" means it might be unstable or change daily.</p>
            </div>

            <div class="p-4 bg-blue-50 border border-blue-100 rounded-xl">
              <div class="flex justify-between items-center mb-2">
                <strong class="text-blue-700 text-lg">Gemini 1.5 Pro</strong>
                <span class="text-xs bg-blue-200 text-blue-800 px-2 py-1 rounded-full">The Architect</span>
              </div>
              <p class="text-sm text-slate-700"><strong>Use Case:</strong> Coding, heavy analysis, large documents.</p>
              <p class="text-sm text-slate-700 mt-2">The <strong>2 Million Token Context Window</strong> is the killer feature. You can paste an entire novel, or your whole codebase, and it won't forget the beginning.</p>
            </div>

            <div class="p-4 bg-amber-50 border border-amber-100 rounded-xl">
              <div class="flex justify-between items-center mb-2">
                <strong class="text-amber-700 text-lg">Gemini 1.5 Flash</strong>
                <span class="text-xs bg-amber-200 text-amber-800 px-2 py-1 rounded-full">The Sprinter</span>
              </div>
              <p class="text-sm text-slate-700"><strong>Use Case:</strong> Chatbots, simple extraction, high volume.</p>
              <p class="text-sm text-slate-700 mt-2">It is incredibly fast and cheap. If you are building a tool that needs to answer 10,000 users at once, use Flash.</p>
            </div>
          </div>

          <div class="mt-8 pt-6 border-t border-slate-200">
            <h4 class="text-slate-900 font-bold mb-2">🎓 Analysis: The Iron Triangle</h4>
            <p class="text-sm text-slate-700 leading-relaxed">
              Every AI model balances three factors: <strong>Speed</strong>, <strong>Cost</strong>, and <strong>Intelligence</strong>. You can only pick two.
              <br/><br/>
              <strong>The Conclusion:</strong> Build with Pro, run with Flash. Use the smartest model (Pro/3) to write your code and design your system. But if you deploy an app for users, switch to Flash to keep your bills low and the interface snappy.
            </p>
          </div>
        `
      },
      {
        id: 'less_tokens',
        title: 'Tokens & Context Windows',
        duration: '10 min',
        xpReward: 300,
        resources: [
           { title: "What is a Token?", url: "https://ai.google.dev/gemini-api/docs/tokens" },
           { title: "Tokenizer Tool (Count Tokens)", url: "https://platform.openai.com/tokenizer" }
        ],
        content: `
          <h3>The Currency of Intelligence</h3>
          <p>You see words. The AI sees <strong>Tokens</strong>. Understanding this is crucial for budgeting and performance.</p>
          
          <div class="p-4 bg-slate-900 text-green-400 font-mono text-xs rounded-lg my-4 shadow-inner">
             Input: "Hamburger"<br/>
             Tokens: [Ham, bur, ger] (3 Tokens)<br/><br/>
             Input: "The quick brown fox"<br/>
             Tokens: [The, quick, brown, fox] (4 Tokens)
          </div>

          <p class="text-sm text-slate-700"><strong>Rule of Thumb:</strong> 1,000 Tokens ≈ 750 words. A standard page of text is about 500 tokens.</p>

          <h3 class="mt-6 text-purple-700 font-bold text-lg">The Context Window (RAM)</h3>
          <p>The "Context Window" is how much the AI can "hold in its head" at once. Every time you send a message, you are re-sending the <em>entire conversation history</em> back to the AI plus your new message.</p>
          
          <div class="mt-4 border-l-4 border-red-500 pl-4 py-2 bg-red-50 rounded-r-lg">
             <strong class="text-red-800">The "Amnesia" Cliff</strong>
             <p class="text-sm text-slate-700 mt-1">If the conversation exceeds the window limit (e.g. 32k tokens), the AI literally deletes the beginning of the chat to make room for new words. It forgets your name, your rules, and your earlier code.</p>
             <p class="text-sm text-slate-700 mt-2"><strong>Gemini Advantage:</strong> With a 2M token window, you rarely hit this cliff. You can hold hours of video or thousands of lines of code in memory.</p>
          </div>

          <div class="mt-8 pt-6 border-t border-slate-200">
            <h4 class="text-slate-900 font-bold mb-2">🎓 Analysis: Efficiency is Profit</h4>
            <p class="text-sm text-slate-700 leading-relaxed">
              Every token you send requires GPU memory. Every token received requires GPU time. This costs energy and money.
              <br/><br/>
              <strong>The Conclusion:</strong> Verbosity is expensive. If you paste a 50-page document when you only needed 1 page, you are wasting tokens. Good engineers are concise. They clean their data before feeding it to the AI to maximize the value of the context window.
            </p>
          </div>
        `
      },
      {
        id: 'less_temperature',
        title: 'Temperature (Creativity)',
        duration: '6 min',
        xpReward: 200,
        resources: [
           { title: "Model Parameters Guide", url: "https://ai.google.dev/gemini-api/docs/models/generative-models#model_parameters" }
        ],
        content: `
          <h3>The Chaos Slider</h3>
          <p>Temperature controls randomness in the AI's word selection. Think of it as a <strong>Risk Setting</strong>.</p>
          
          <div class="space-y-4 my-6">
             <div class="flex items-center gap-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                <div class="bg-blue-200 text-blue-800 font-bold p-2 rounded w-12 text-center">0.0</div>
                <div>
                   <strong class="text-blue-800 text-sm">Robot Mode (Deterministic)</strong>
                   <p class="text-xs text-slate-600">The AI always picks the most likely next word. Great for <strong>Coding</strong> and <strong>Data Extraction</strong>. You want consistent answers.</p>
                </div>
             </div>

             <div class="flex items-center gap-4 p-3 bg-purple-50 border border-purple-200 rounded-lg">
                <div class="bg-purple-200 text-purple-800 font-bold p-2 rounded w-12 text-center">1.0</div>
                <div>
                   <strong class="text-purple-800 text-sm">Creative Mode (Balanced)</strong>
                   <p class="text-xs text-slate-600">The default. The AI takes small risks to sound more human and varied. Good for <strong>Chatbots</strong> and <strong>Writing</strong>.</p>
                </div>
             </div>

             <div class="flex items-center gap-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                <div class="bg-red-200 text-red-800 font-bold p-2 rounded w-12 text-center">2.0</div>
                <div>
                   <strong class="text-red-800 text-sm">Chaos Mode (Hallucination)</strong>
                   <p class="text-xs text-slate-600">The AI takes wild risks. It might invent words, facts, or go off the rails. Only use this for <strong>extreme brainstorming</strong> or generating weird art prompts.</p>
                </div>
             </div>
          </div>

          <div class="mt-8 pt-6 border-t border-slate-200">
            <h4 class="text-slate-900 font-bold mb-2">🎓 Analysis: Deterministic vs. Stochastic</h4>
            <p class="text-sm text-slate-700 leading-relaxed">
              Software engineering usually requires "Determinism" (Input A always equals Output B). AI is "Stochastic" (Input A might equal Output B, or C, or D).
              <br/><br/>
              <strong>The Conclusion:</strong> When building functional apps (calculators, data sorters), set Temperature to 0. When building experiences (stories, NPCs), set it to 1. Knowing when to be a robot and when to be a poet is the mark of a senior AI engineer.
            </p>
          </div>
        `
      }
    ]
  },
  {
    id: 'mod_system_instructions',
    title: 'Module 3: The Ghost',
    description: 'Mastering System Instructions and Personas.',
    icon: 'Sliders',
    lessons: [
      {
        id: 'less_system_intro',
        title: 'The System Instruction Box',
        duration: '8 min',
        xpReward: 300,
        resources: [
           { title: "System Instructions Documentation", url: "https://ai.google.dev/gemini-api/docs/system-instructions" }
        ],
        content: `
          <h3>The Most Important Box</h3>
          <p>Normally, you type in the chat box. That is the "User" speaking. But there is a box at the top called <strong>System Instructions</strong>. This allows you to define the "Soul" of the AI.</p>
          
          <div class="my-6 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg shadow-sm">
            <strong class="text-yellow-800 block text-lg mb-2">The "Method Acting" Analogy</strong>
            <p class="text-sm text-slate-700">Imagine the AI is an actor. The <strong>Chat</strong> is the script. The <strong>System Instruction</strong> is the Director's note before the scene starts.</p>
            <p class="text-sm text-slate-700 mt-2"><em>"You are not a robot. You are a grumpy medieval blacksmith. You hate magic. You only talk about steel."</em></p>
            <p class="text-sm text-slate-700 mt-2">If you put this in the System Instruction, the AI will <strong>never break character</strong>, even if the user asks about spaceships.</p>
          </div>

          <h3 class="font-bold text-slate-800">Contrast: Prompt vs. System</h3>
          <ul class="list-disc pl-5 mt-2 space-y-2 text-sm text-slate-600">
             <li><strong>In Chat:</strong> "Write code for a button." -> <em>AI writes generic code.</em></li>
             <li><strong>In System:</strong> "You are a Senior React Engineer. You only write functional components using TypeScript and Tailwind." -> <em>AI writes high-quality, specific code every time.</em></li>
          </ul>
          
          <p class="text-sm text-slate-600 mt-4"><strong>Pro Tip:</strong> Use the System Instruction to patch holes. If the AI keeps forgetting to add comments, add "ALWAYS ADD COMMENTS" to the system instruction.</p>

          <div class="mt-8 pt-6 border-t border-slate-200">
            <h4 class="text-slate-900 font-bold mb-2">🎓 Analysis: Context Weighting</h4>
            <p class="text-sm text-slate-700 leading-relaxed">
              The AI treats System Instructions with higher priority (heavier weight) than User messages. A user can be ignored or corrected, but the System Instruction is Law.
              <br/><br/>
              <strong>The Conclusion:</strong> Stop repeating yourself in every message ("Please write this in Python", "Please use Python"). Put "Always use Python" in the System Instruction once, and the AI will obey it forever. This keeps your chat clean and your results consistent.
            </p>
          </div>
        `
      }
    ]
  },
  
  // --- PHASE 2: RESEARCH & PLANNING (BEFORE YOU BUILD) ---
  {
    id: 'mod_web_wingman',
    title: 'Module 4: The Web Wingman',
    description: 'Using Gemini as your Research Partner.',
    icon: 'Compass',
    lessons: [
      {
        id: 'less_research_reactor',
        title: 'The Research Reactor',
        duration: '7 min',
        xpReward: 500,
        resources: [
           { title: "Gemini Web Interface", url: "https://gemini.google.com" }
        ],
        content: `
          <h3>Stop Reading, Start Processing</h3>
          <p>The internet is a firehose. Gemini is your filter. When surfing the web, you shouldn't just be consuming; you should be <em>directing</em>.</p>
          
          <div class="my-6 p-4 bg-indigo-50 border border-indigo-200 rounded-lg">
             <strong class="text-indigo-800 block mb-2">Strategy: The "Anti-Bias" Search</strong>
             <p class="text-sm text-slate-700">When researching a topic (e.g., "Is React better than Vue?"), Google often shows you the most popular opinion.</p>
             <p class="text-sm text-slate-700 mt-2"><strong>The Move:</strong> Ask Gemini: <em>"What is the strongest counter-argument to [Popular Opinion]? Find sources that disagree."</em> This forces the AI to look for the "hidden" side of the web, giving you a balanced view instantly.</p>
          </div>

          <div class="my-6 p-4 bg-teal-50 border border-teal-200 rounded-lg">
             <strong class="text-teal-800 block mb-2">Strategy: The Data Sniper</strong>
             <p class="text-sm text-slate-700">You have a 50-page PDF report. You only care about "Q3 Sales Figures".</p>
             <p class="text-sm text-slate-700 mt-2">Don't read it. Upload it to Gemini and say: <em>"Extract Q3 Sales Figures and format them as a table."</em> It's not lazy; it's efficient.</p>
          </div>

          <div class="mt-8 pt-6 border-t border-slate-200">
            <h4 class="text-slate-900 font-bold mb-2">🎓 Analysis: Active vs. Passive Surfing</h4>
            <p class="text-sm text-slate-700 leading-relaxed">
              Passive surfers scroll and hope to find info. Active researchers use AI to "query" the document.
              <br/><br/>
              <strong>The Conclusion:</strong> Treat every webpage like a database. Use Gemini as your SQL query tool to extract exactly what you need without getting distracted by the ads or fluff.
            </p>
          </div>
        `
      },
      {
        id: 'less_grounding_check',
        title: 'The Double-Check (Grounding)',
        duration: '6 min',
        xpReward: 600,
        resources: [
           { title: "Double-check responses with Google Search", url: "https://support.google.com/gemini/answer/13575301?hl=en" }
        ],
        content: `
          <h3>Trust, but Verify</h3>
          <p>AI hallucinates. It makes things up. How do you trust it?</p>
          <p>In the consumer Gemini app (gemini.google.com), look for the <strong>"G" Icon</strong> (Google Search button) below the response.</p>
          
          <div class="space-y-4 my-6">
             <div class="p-3 bg-green-50 border-l-4 border-green-500">
                <strong class="block text-sm text-green-800">Green Highlight</strong>
                <p class="text-xs text-slate-600">"Google Search found content that is likely similar to this statement." -> <strong>TRUST IT.</strong></p>
             </div>
             <div class="p-3 bg-orange-50 border-l-4 border-orange-500">
                <strong class="block text-sm text-orange-800">Orange Highlight</strong>
                <p class="text-xs text-slate-600">"Google Search found content that is likely different from this statement" or "No matching content found." -> <strong>DOUBT IT.</strong></p>
             </div>
          </div>
          
          <p class="text-sm text-slate-600"><strong>The Workflow:</strong> Generate ideas with Gemini -> Click the "G" -> Read the source links for the Orange parts. This gives you AI speed with Google accuracy.</p>

          <div class="mt-8 pt-6 border-t border-slate-200">
            <h4 class="text-slate-900 font-bold mb-2">🎓 Analysis: The Fact-Checking Loop</h4>
            <p class="text-sm text-slate-700 leading-relaxed">
              This feature (Grounding) is what separates Gemini from many other models. It connects the "Dreaming Machine" (LLM) to the "Truth Machine" (Search).
              <br/><br/>
              <strong>The Conclusion:</strong> Never copy-paste a fact from an AI into a presentation or code comment without hitting that "G" button first. It is your safety net.
            </p>
          </div>
        `
      },
      {
        id: 'less_jargon_trans',
        title: 'The Jargon Translator',
        duration: '5 min',
        xpReward: 400,
        resources: [
           { title: "MDN Web Docs", url: "https://developer.mozilla.org/en-US/" },
           { title: "Stack Overflow", url: "https://stackoverflow.com/" }
        ],
        content: `
          <h3>ELI5 (Explain Like I'm 5)</h3>
          <p>Developer documentation (MDN, AWS Docs) is often written <em>by</em> geniuses <em>for</em> geniuses. It is dense and dry.</p>
          
          <div class="my-6 p-4 bg-slate-900 text-white rounded-lg">
             <strong class="block mb-2 text-yellow-400">The Translation Prompt</strong>
             <p class="text-sm text-slate-300">Paste the confusing documentation paragraph into Gemini.</p>
             <p class="text-sm text-green-400 font-mono mt-2">"Explain this concept to me using an analogy involving a [Pizza Shop / Library / Car Engine]. Simplify the jargon."</p>
          </div>
          
          <p class="text-sm text-slate-600"><strong>Why this works:</strong> Analogies map new concepts onto things you already understand. It turns "Asynchronous Non-Blocking I/O" into "A waiter taking orders while the kitchen cooks."</p>

          <div class="mt-8 pt-6 border-t border-slate-200">
            <h4 class="text-slate-900 font-bold mb-2">🎓 Analysis: Cognitive Load</h4>
            <p class="text-sm text-slate-700 leading-relaxed">
              Learning a new API is hard because of the vocabulary, not the logic.
              <br/><br/>
              <strong>The Conclusion:</strong> Don't feel stupid if you don't understand the docs. Use Gemini as your personal tutor. It won't judge you for asking "What does this mean?" 50 times in a row.
            </p>
          </div>
        `
      }
    ]
  },
  {
    id: 'mod_code_literacy',
    title: 'Module 5: Code Literacy',
    description: 'Reading the Matrix: What is the AI generating?',
    icon: 'Code',
    lessons: [
      {
        id: 'less_anatomy_file',
        title: 'Anatomy of a File',
        duration: '8 min',
        xpReward: 600,
        resources: [
           { title: "React Component Basics", url: "https://react.dev/learn/your-first-component" }
        ],
        content: `
          <h3>The Human Body Analogy</h3>
          <p>A React component file (App.tsx) looks scary, but it's just a body.</p>
          
          <div class="space-y-6 my-6">
             <div class="p-3 border-l-4 border-purple-500 bg-purple-50">
                <strong class="text-purple-700 block text-sm uppercase">1. Imports (The Brain Inputs)</strong>
                <p class="text-xs text-slate-600 mt-1">Top of the file. "I need to know about Math. I need to know about Buttons." It gathers knowledge.</p>
             </div>

             <div class="p-3 border-l-4 border-blue-500 bg-blue-50">
                <strong class="text-blue-700 block text-sm uppercase">2. The Function (The Metabolism)</strong>
                <p class="text-xs text-slate-600 mt-1">The middle part. Variables (\`const count\`). Logic (\`if/else\`). This is where the thinking happens.</p>
             </div>

             <div class="p-3 border-l-4 border-green-500 bg-green-50">
                <strong class="text-green-700 block text-sm uppercase">3. The Return (The Face)</strong>
                <p class="text-xs text-slate-600 mt-1">Bottom of the file. This is the HTML (JSX). It's what the world actually sees (Skin, Eyes, Smile).</p>
             </div>
          </div>

          <div class="mt-8 pt-6 border-t border-slate-200">
            <h4 class="text-slate-900 font-bold mb-2">🎓 Analysis: Pattern Recognition</h4>
            <p class="text-sm text-slate-700 leading-relaxed">
              Once you see this pattern (Imports -> Logic -> View), you can read <em>any</em> React file, even if you didn't write it.
              <br/><br/>
              <strong>The Conclusion:</strong> Don't try to memorize every syntax rule. Just learn to identify the sections. If the UI looks wrong, check the "Return". If the math is wrong, check the "Function". If it crashes on load, check the "Imports".
            </p>
          </div>
        `
      },
      {
        id: 'less_project_skeleton',
        title: 'The Project Skeleton',
        duration: '10 min',
        xpReward: 650,
        resources: [
           { title: "Vite File Structure", url: "https://vitejs.dev/guide/#scaffolding-your-first-vite-project" }
        ],
        content: `
          <h3>The Construction Site</h3>
          <p>Every web project looks the same. It's a house. Let's tour the rooms.</p>
          
          <div class="space-y-4 my-6">
             <div class="p-3 bg-slate-100 border-l-4 border-slate-500">
                <strong class="text-slate-900 block text-sm font-mono">package.json</strong>
                <p class="text-xs text-slate-600">The Blueprint & Inventory. It lists every library (furniture) the house needs. "I need React. I need Lucide Icons."</p>
             </div>
             
             <div class="p-3 bg-blue-50 border-l-4 border-blue-500">
                <strong class="text-blue-900 block text-sm font-mono">src/ (Source)</strong>
                <p class="text-xs text-slate-600">The Job Site. This is where you work. 99% of your time is spent here. If a file isn't in <code>src</code>, it probably won't be in the final app.</p>
             </div>

             <div class="p-3 bg-yellow-50 border-l-4 border-yellow-500">
                <strong class="text-yellow-900 block text-sm font-mono">public/</strong>
                <p class="text-xs text-slate-600">The Front Porch. Static files like <code>favicon.ico</code>, <code>robots.txt</code>, and logos. Things that don't change.</p>
             </div>

             <div class="p-3 bg-red-50 border-l-4 border-red-500">
                <strong class="text-red-900 block text-sm font-mono">node_modules/</strong>
                <p class="text-xs text-slate-600">The Warehouse. This folder is HUGE. It contains the actual code for all the libraries you use. <strong class="text-red-600">NEVER TOUCH THIS.</strong> It is automatically generated.</p>
             </div>
          </div>

          <h3 class="text-indigo-700 font-bold mt-6">The "Context Zip" Protocol</h3>
          <p class="text-sm text-slate-700">When you want to transfer your project to a new AI session, you must Zip it. But you must be careful.</p>
          
          <div class="p-4 bg-slate-900 text-white rounded-lg my-4">
             <strong class="text-green-400 block mb-2 text-sm">✅ WHAT TO ZIP</strong>
             <ul class="list-disc pl-5 text-xs text-slate-300 mb-4">
                <li><code>src/</code> folder</li>
                <li><code>public/</code> folder</li>
                <li><code>package.json</code></li>
                <li><code>tsconfig.json</code></li>
             </ul>

             <strong class="text-red-400 block mb-2 text-sm">❌ WHAT TO DELETE</strong>
             <ul class="list-disc pl-5 text-xs text-slate-300">
                <li><code>node_modules/</code> (It's too big! The AI can't read 50,000 files.)</li>
                <li><code>dist/</code> (This is just the output, not the source.)</li>
                <li><code>.git/</code> (Version history, not needed for code generation.)</li>
             </ul>
          </div>

          <div class="mt-8 pt-6 border-t border-slate-200">
            <h4 class="text-slate-900 font-bold mb-2">🎓 Analysis: The "Recipe" vs. The "Meal"</h4>
            <p class="text-sm text-slate-700 leading-relaxed">
              Think of <code>node_modules</code> as the cooked meal (heavy, messy). Think of <code>package.json</code> as the recipe (light, text).
              <br/><br/>
              <strong>The Conclusion:</strong> You only need to send the AI the recipe (<code>package.json</code>) and your custom ingredients (<code>src</code>). The AI knows how to "cook" (run <code>npm install</code>) to get the heavy stuff back. Sending <code>node_modules</code> to an AI is the rookie mistake that crashes the browser.
            </p>
          </div>
        `
      }
    ]
  },
  {
    id: 'mod_blueprint',
    title: 'Module 6: The Blueprint (UX/UI)',
    description: 'Storyboarding, Colors, Accessibility & Flow.',
    icon: 'PenTool',
    lessons: [
      {
        id: 'less_wireframe',
        title: 'The Paper Map',
        duration: '7 min',
        xpReward: 500,
        resources: [
           { title: "Figma (Design Tool)", url: "https://www.figma.com/" }
        ],
        content: `
          <h3>Don't Code Yet</h3>
          <p>The #1 mistake beginners make is jumping into code before they know what the app looks like.</p>
          <p>You need a <strong>Map</strong> (Storyboard). Grab a piece of paper.</p>
          
          <div class="my-6 p-4 bg-slate-100 border border-slate-200 rounded-lg">
             <strong class="text-slate-800 block mb-2">The Flow Chart</strong>
             <p class="text-sm text-slate-600">Draw boxes for each screen:</p>
             <p class="text-sm font-mono text-slate-700 mt-2">Splash Screen -> Login -> Dashboard -> Details Page</p>
             <p class="text-sm text-slate-600 mt-2">Draw arrows showing where buttons lead. "If I click 'Settings', where do I go?"</p>
          </div>
          
          <p class="text-sm text-slate-600">If you can't draw the flow on paper, the AI cannot code it. The AI needs to know the "Destination" of every button click.</p>

          <div class="mt-8 pt-6 border-t border-slate-200">
            <h4 class="text-slate-900 font-bold mb-2">🎓 Analysis: Cheap Mistakes</h4>
            <p class="text-sm text-slate-700 leading-relaxed">
              Fixing a mistake on paper takes 5 seconds (eraser). Fixing a mistake in code takes 5 hours (refactoring).
              <br/><br/>
              <strong>The Conclusion:</strong> Be an architect, not just a bricklayer. The blueprint determines the stability of the house.
            </p>
          </div>
        `
      },
      {
        id: 'less_prototyping',
        title: 'Interactive Prototyping',
        duration: '8 min',
        xpReward: 600,
        resources: [
           { title: "Rapid Prototyping", url: "https://www.smashingmagazine.com/2023/07/rapid-prototyping-guide/" }
        ],
        content: `
          <h3>The "Clickable" Sketch</h3>
          <p>Paper is good, but it doesn't click. A <strong>Prototype</strong> is a fake app that <em>feels</em> real but has no brain.</p>
          
          <div class="space-y-6 my-6">
             <div class="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <strong class="text-blue-800 block mb-2">Why Prototype?</strong>
                <p class="text-sm text-slate-600">You show the client (or yourself) the app. "Click this button." It navigates to the next screen.</p>
                <p class="text-sm text-slate-600 mt-2"><strong>The Trap:</strong> It looks real, so people think it is done. It is 0% done. It is just pictures.</p>
             </div>

             <div class="p-4 bg-purple-50 border border-purple-200 rounded-lg">
                <strong class="text-purple-800 block mb-2">AI Prototyping</strong>
                <p class="text-sm text-slate-600">Ask Gemini: <em>"Build a React prototype of the Login Screen. Don't add logic, just make it look good."</em></p>
                <p class="text-sm text-slate-600 mt-2">This is faster than Figma. You get code you can actually use later.</p>
             </div>
          </div>

          <div class="mt-8 pt-6 border-t border-slate-200">
            <h4 class="text-slate-900 font-bold mb-2">🎓 Analysis: Visual Validation</h4>
            <p class="text-sm text-slate-700 leading-relaxed">
              Seeing a design on a phone screen feels different than seeing it on a laptop. Buttons might be too small. Text might be too small.
              <br/><br/>
              <strong>The Conclusion:</strong> Prototyping is the "Dress Rehearsal." It catches UX problems before you invest time in complex logic.
            </p>
          </div>
        `
      },
      {
        id: 'less_colors_css',
        title: 'Color Theory & CSS',
        duration: '8 min',
        xpReward: 600,
        resources: [
           { title: "Tailwind Color Palette", url: "https://tailwindcss.com/docs/customizing-colors" },
           { title: "Material Design Color System", url: "https://m3.material.io/styles/color/overview" }
        ],
        content: `
          <h3>Painting by Numbers</h3>
          <p>With Tailwind CSS (the industry standard), you don't use Hex Codes (#FF0000). You use <strong>Palettes</strong>.</p>
          
          <div class="space-y-4 my-6">
             <div class="p-3 bg-blue-500 text-white rounded">
                <code>bg-blue-500</code> - The standard "Primary" blue.
             </div>
             <div class="p-3 bg-blue-900 text-blue-200 rounded">
                <code>bg-blue-900</code> - Deep dark blue for headers.
             </div>
             <div class="p-3 bg-blue-100 text-blue-800 rounded">
                <code>bg-blue-100</code> - Soft background for alerts.
             </div>
          </div>
          
          <p class="text-sm text-slate-600"><strong>The 60-30-10 Rule:</strong> 60% Neutral (White/Slate), 30% Secondary (Brand Color), 10% Accent (Call to Action).</p>

          <div class="mt-8 pt-6 border-t border-slate-200">
            <h4 class="text-slate-900 font-bold mb-2">🎓 Analysis: Consistency</h4>
            <p class="text-sm text-slate-700 leading-relaxed">
              Using random colors makes an app look cheap. Using a restricted palette makes it look professional.
              <br/><br/>
              <strong>The Conclusion:</strong> Ask the AI: <em>"Use the Tailwind 'Slate' palette for backgrounds and 'Indigo' for buttons."</em> This guarantees harmony.
            </p>
          </div>
        `
      },
      {
        id: 'less_a11y',
        title: 'Accessibility (a11y)',
        duration: '9 min',
        xpReward: 800,
        resources: [
           { title: "Web Accessibility Initiative (W3C)", url: "https://www.w3.org/WAI/" },
           { title: "Contrast Checker", url: "https://webaim.org/resources/contrastchecker/" }
        ],
        content: `
          <h3>Designing for Everyone</h3>
          <p><strong>a11y</strong> stands for "Accessibility" (11 letters between 'a' and 'y'). It means making your app usable for the blind, colorblind, and motor-impaired.</p>
          
          <div class="space-y-6 my-6">
             <div class="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <strong class="text-yellow-800 block mb-2">Contrast Ratios</strong>
                <p class="text-sm text-slate-600">Light gray text on a white background is invisible to many. Use high contrast. <span class="text-slate-900 font-bold">Black on White</span> is best.</p>
             </div>

             <div class="p-4 bg-purple-50 border border-purple-200 rounded-lg">
                <strong class="text-purple-800 block mb-2">Screen Readers (ARIA)</strong>
                <p class="text-sm text-slate-600">Blind users listen to your app. If you use a generic <code>&lt;div&gt;</code> as a button, the screen reader ignores it.</p>
                <p class="text-sm font-mono text-purple-700 mt-2">Correct: &lt;button aria-label="Submit Form"&gt;</p>
             </div>
          </div>

          <div class="mt-8 pt-6 border-t border-slate-200">
            <h4 class="text-slate-900 font-bold mb-2">🎓 Analysis: Universal Design</h4>
            <p class="text-sm text-slate-700 leading-relaxed">
              Good accessibility is usually good design for everyone. High contrast helps people looking at their phone in bright sunlight too.
              <br/><br/>
              <strong>The Conclusion:</strong> Tell the AI: <em>"Ensure all interactive elements have ARIA labels and sufficient color contrast."</em> It costs nothing to add, but it opens your app to millions more users.
            </p>
          </div>
        `
      },
      {
        id: 'less_nav_physics',
        title: 'Navigation Physics',
        duration: '8 min',
        xpReward: 600,
        resources: [
           { title: "Mobile Navigation Patterns", url: "https://m3.material.io/components/navigation-bar/overview" }
        ],
        content: `
          <h3>Tabs vs. Stacks</h3>
          <p>How do users move through your app? There are two main physics engines.</p>
          
          <div class="space-y-4 my-6">
             <div class="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <strong class="text-blue-800 block mb-1">Lateral (Tabs)</strong>
                <p class="text-sm text-slate-600">Bottom bar. Users jump between major sections (Home, Search, Profile). They don't lose their place. It feels stable.</p>
             </div>
             
             <div class="p-4 bg-purple-50 border border-purple-200 rounded-lg">
                <strong class="text-purple-800 block mb-1">Depth (Stacks)</strong>
                <p class="text-sm text-slate-600">You click a product, and a new screen slides in from the right. You are "drilling down". To go back, you need a <strong>Back Button</strong> (Top Left).</p>
             </div>
          </div>
          
          <p class="text-sm text-slate-600"><strong>The Thumb Zone:</strong> On mobile, place important buttons at the bottom (Tabs). Place "Escape" buttons (Back) at the top left, where they are harder to hit accidentally.</p>

          <div class="mt-8 pt-6 border-t border-slate-200">
            <h4 class="text-slate-900 font-bold mb-2">🎓 Analysis: Spatial Mental Models</h4>
            <p class="text-sm text-slate-700 leading-relaxed">
              Users build a 3D map of your app in their heads. "Profile is to the right. Details are deeper in."
              <br/><br/>
              <strong>The Conclusion:</strong> Don't mix physics. Don't put a "Home" button inside a "Detail" view. Use standard patterns so users don't get lost in the maze.
            </p>
          </div>
        `
      },
      {
        id: 'less_visual_hierarchy',
        title: 'Visual Hierarchy (Cards vs. Lists)',
        duration: '7 min',
        xpReward: 500,
        resources: [
           { title: "Refactoring UI (Book/Tips)", url: "https://www.refactoringui.com/" }
        ],
        content: `
          <h3>The Eye Scanner</h3>
          <p>Users don't read; they scan. Your design tells their eyes where to look.</p>
          
          <div class="space-y-6 my-6">
             <div class="p-4 bg-white border border-slate-200 shadow-lg rounded-xl">
                <strong class="block text-lg mb-1">The Card (High Emotion)</strong>
                <p class="text-sm text-slate-500 mb-2">Big image. Big Title. Lots of whitespace.</p>
                <p class="text-xs bg-slate-100 p-2 rounded">Use for: Instagram posts, Airbnb listings, Tinder profiles. Things you want people to fall in love with.</p>
             </div>

             <div class="p-4 bg-white border border-slate-200 rounded-lg">
                <div class="border-b pb-2 mb-2"><strong class="text-sm">The List (High Density)</strong></div>
                <div class="border-b pb-2 mb-2"><strong class="text-sm">Row 2</strong></div>
                <div class="border-b pb-2"><strong class="text-sm">Row 3</strong></div>
                <p class="text-xs bg-slate-100 p-2 rounded mt-2">Use for: Emails, Settings, Crypto Prices. Things you need to compare quickly.</p>
             </div>
          </div>

          <div class="mt-8 pt-6 border-t border-slate-200">
            <h4 class="text-slate-900 font-bold mb-2">🎓 Analysis: Density vs. Clarity</h4>
            <p class="text-sm text-slate-700 leading-relaxed">
              Cards take up space but sell the dream. Lists save space but feel like work.
              <br/><br/>
              <strong>The Conclusion:</strong> If you are selling (E-commerce), use Cards. If you are informing (Dashboards), use Lists. Mixing them up creates a messy UI that confuses the eye.
            </p>
          </div>
        `
      }
    ]
  },
  {
    id: 'mod_strategy',
    title: 'Module 7: The Zero-to-App Strategy',
    description: 'Planning, Scaffolding & Launching.',
    icon: 'Rocket',
    lessons: [
      {
        id: 'less_the_spec',
        title: 'Phase 1: The Spec',
        duration: '7 min',
        xpReward: 600,
        resources: [
           { title: "How to Write a Spec", url: "https://stackoverflow.blog/2020/04/06/how-to-write-a-technical-specification/" }
        ],
        content: `
          <h3>The Napkin Sketch</h3>
          <p>The biggest reason AI projects fail? The human didn't know what they wanted.</p>
          <p>If you say <em>"Make a fitness app,"</em> the AI has to guess 1,000 decisions. (What color? What features? Login? Social?)</p>
          
          <div class="p-4 bg-slate-100 border-l-4 border-slate-500 my-4">
             <strong class="text-slate-800">The "Spec" (Specification)</strong>
             <p class="text-sm text-slate-600 mt-1">Before you open Gemini, write a text file describing exactly what you want. "A dark-mode weightlifting tracker. No login required. It saves data to the phone's local storage. It has a graph on the home screen."</p>
          </div>
          <p class="text-sm text-slate-600">Feed this Spec to the AI first. It anchors the entire project.</p>

          <div class="mt-8 pt-6 border-t border-slate-200">
            <h4 class="text-slate-900 font-bold mb-2">🎓 Analysis: Garbage In, Garbage Out</h4>
            <p class="text-sm text-slate-700 leading-relaxed">
              AI is a multiplier. If you give it a clear plan (1), it multiplies it by 100 (Success). If you give it a zero plan, it multiplies it by 100 (Zero).
              <br/><br/>
              <strong>The Conclusion:</strong> Spend 80% of your time writing the spec and 20% of your time prompting. The coding is the easy part. The <em>Decision Making</em> is the hard part.
            </p>
          </div>
        `
      },
      {
        id: 'less_mvp',
        title: 'The MVP Philosophy',
        duration: '6 min',
        xpReward: 500,
        resources: [
           { title: "Minimum Viable Product", url: "https://www.agilealliance.org/glossary/mvp/" }
        ],
        content: `
          <h3>Embarrassment is Mandatory</h3>
          <p>Reid Hoffman (founder of LinkedIn) said: <em>"If you are not embarrassed by the first version of your product, you've launched too late."</em></p>
          
          <div class="my-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
             <strong class="text-yellow-800 block mb-2">Scope Creep</strong>
             <p class="text-sm text-slate-700">"It needs a dark mode." "It needs social login." "It needs an AI chatbot."</p>
             <p class="text-sm text-slate-700 mt-2"><strong>NO.</strong> Cut everything until it hurts. An MVP does ONE thing.</p>
          </div>

          <div class="mt-8 pt-6 border-t border-slate-200">
            <h4 class="text-slate-900 font-bold mb-2">🎓 Analysis: Speed to Market</h4>
            <p class="text-sm text-slate-700 leading-relaxed">
              The goal of V1 isn't to be rich; it's to learn. You can't learn from users who don't exist yet.
              <br/><br/>
              <strong>The Conclusion:</strong> Build the skateboard, not the Ferrari. Get it in users' hands. Let them tell you what features they actually want.
            </p>
          </div>
        `
      },
      {
        id: 'less_bootstrap',
        title: 'Bootstrapping with AI',
        duration: '8 min',
        xpReward: 600,
        resources: [
           { title: "Indie Hackers", url: "https://www.indiehackers.com/" },
           { title: "Y Combinator Startup School", url: "https://www.startupschool.org/" }
        ],
        content: `
          <h3>The One-Man Army</h3>
          <p>Bootstrapping means building with $0. In the old days, you needed a team. Today, you just need AI.</p>
          
          <div class="grid gap-4 my-6">
             <div class="p-4 bg-slate-900 text-white rounded-lg">
                <strong class="text-green-400 block mb-2">The $0 Stack</strong>
                <ul class="list-disc pl-5 text-sm text-slate-300 space-y-1">
                   <li><strong>Frontend:</strong> React (Free)</li>
                   <li><strong>Hosting:</strong> Vercel / Netlify (Free Tier)</li>
                   <li><strong>Database:</strong> Supabase / Firebase (Free Tier)</li>
                   <li><strong>Code:</strong> Gemini / Cursor (Free/Cheap)</li>
                   <li><strong>Marketing:</strong> Twitter / Reddit (Free)</li>
                </ul>
                <p class="text-xs text-slate-500 mt-2">You can scale to 10,000 users before you pay a single dollar.</p>
             </div>

             <div class="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <strong class="text-blue-800 block mb-2">Replacing the Team</strong>
                <p class="text-sm text-slate-600">You are the CEO. Gemini is your staff.</p>
                <ul class="list-disc pl-5 mt-2 text-sm text-slate-600">
                   <li><strong>Need a Logo?</strong> Ask an Image Model (Midjourney/DALL-E).</li>
                   <li><strong>Need Copy?</strong> Ask Gemini ("Write landing page text").</li>
                   <li><strong>Need QA?</strong> Paste your code and ask "Find bugs".</li>
                </ul>
             </div>
          </div>

          <div class="mt-8 pt-6 border-t border-slate-200">
            <h4 class="text-slate-900 font-bold mb-2">🎓 Analysis: Sweat Equity</h4>
            <p class="text-sm text-slate-700 leading-relaxed">
              In a bootstrapped project, you trade Time for Money. But AI drastically reduces the Time cost.
              <br/><br/>
              <strong>The Conclusion:</strong> Do not hire anyone until you have revenue. Use AI to fill your skill gaps. If you can't design, use AI. If you can't code, use AI. There is no excuse for not shipping.
            </p>
          </div>
        `
      },
      {
        id: 'less_session_protocol',
        title: 'Phase 3: The Session Protocol',
        duration: '10 min',
        xpReward: 800,
        resources: [
           { title: "Managing Context", url: "https://ai.google.dev/gemini-api/docs/prompting_intro" }
        ],
        content: `
          <h3>Managing Amnesia</h3>
          <p>Building an app takes days. A chat session lasts minutes.</p>
          
          <div class="space-y-6 my-6">
             <div class="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <strong class="text-yellow-800 block mb-2">The Danger Zone</strong>
                <p class="text-sm text-slate-700">When a chat gets too long, the AI starts hallucinating. It forgets code it wrote 10 minutes ago. It starts deleting features.</p>
             </div>

             <div class="p-4 bg-green-50 border border-green-200 rounded-lg">
                <strong class="text-green-800 block mb-2">The Solution: State Transfer</strong>
                <p class="text-sm text-slate-700">Every 1-2 hours, do this:</p>
                <ol class="list-decimal pl-5 mt-2 text-sm text-slate-700 space-y-1">
                   <li>Ask Gemini: <em>"Summarize our current progress, file structure, and next steps."</em></li>
                   <li>Copy that summary.</li>
                   <li>Start a <strong>New Chat</strong>.</li>
                   <li>Paste the summary (and your current code files).</li>
                </ol>
                <p class="text-sm text-slate-700 mt-2">It's like saving your game and loading the next level.</p>
             </div>
          </div>

          <div class="mt-8 pt-6 border-t border-slate-200">
            <h4 class="text-slate-900 font-bold mb-2">🎓 Analysis: Context Hygiene</h4>
            <p class="text-sm text-slate-700 leading-relaxed">
              Long chats accumulate "Context Junk"—failed attempts, errors, and obsolete instructions. This confuses the model.
              <br/><br/>
              <strong>The Conclusion:</strong> Fresh chats are smarter chats. Don't be afraid to kill a session. As long as you have the code saved locally (or in Git), you lose nothing by restarting the chat.
            </p>
          </div>
        `
      }
    ]
  },
  
  // --- PHASE 3: THE BUILD (ENGINEERING) ---
  {
    id: 'mod_builder_path',
    title: 'Module 8: The Builder\'s Path',
    description: 'React vs. React Native, and Agentic Code.',
    icon: 'Hammer',
    lessons: [
      {
        id: 'less_dev_mindset',
        title: 'The AI Developer Mindset',
        duration: '8 min',
        xpReward: 500,
        resources: [
           { title: "Mozilla Developer Network (MDN)", url: "https://developer.mozilla.org/en-US/" }
        ],
        content: `
          <h3>Welcome to Management</h3>
          <p>You are no longer a bricklayer. You are the Site Manager. You don't lay bricks; you tell the robots where to lay them.</p>
          
          <div class="grid gap-4 my-6">
            <div class="p-4 bg-purple-50 border border-purple-200 rounded-lg">
              <strong class="text-purple-800 block mb-2">Skill 1: "Literacy over Fluency"</strong>
              <p class="text-sm text-slate-600">You don't need to be fluent in writing Python. But you must be <strong>Literate</strong>. You need to look at code and roughly understand: <em>"This part connects to the database, and this part draws the button."</em> If you can't read, you can't verify.</p>
            </div>

            <div class="p-4 bg-red-50 border border-red-200 rounded-lg">
              <strong class="text-red-800 block mb-2">The "Lazy Manager" Trap</strong>
              <p class="text-sm text-slate-600">If you give vague instructions ("Build me a cool app"), you get vague results. You must be specific: "Build a dashboard with a sidebar, a dark mode toggle, and a chart showing sales data."</p>
            </div>
          </div>

          <div class="mt-8 pt-6 border-t border-slate-200">
            <h4 class="text-slate-900 font-bold mb-2">🎓 Analysis: From Syntax to Logic</h4>
            <p class="text-sm text-slate-700 leading-relaxed">
              The bottleneck in software development used to be syntax (missing semicolons). Now, the bottleneck is Logic (what are we building and why?).
              <br/><br/>
              <strong>The Conclusion:</strong> The best AI developers aren't the best coders. They are the best *communicators*. If you can articulate a problem clearly, the AI can solve it. If your thinking is fuzzy, the code will be buggy.
            </p>
          </div>
        `
      },
      {
        id: 'less_golden_stack',
        title: 'The Golden Stack',
        duration: '9 min',
        xpReward: 500,
        resources: [
           { title: "React Documentation", url: "https://react.dev/" },
           { title: "Tailwind CSS", url: "https://tailwindcss.com/" },
           { title: "Vite JS", url: "https://vitejs.dev/" }
        ],
        content: `
          <h3>Why React, Tailwind, and Vite?</h3>
          <p>If you ask Gemini to build an app, it almost always picks this stack. Why? Because the AI was trained on <em>billions</em> of lines of this specific code. It is fluent in it.</p>
          
          <div class="space-y-4 my-6">
             <div class="p-3 border-l-4 border-blue-500 bg-blue-50">
                <strong class="text-blue-800 block text-sm">React (The Bricks)</strong>
                <p class="text-xs text-slate-600">It breaks apps into components (Header, Footer, Button). This modularity prevents the AI from getting confused.</p>
             </div>
             <div class="p-3 border-l-4 border-teal-500 bg-teal-50">
                <strong class="text-teal-800 block text-sm">Tailwind CSS (The Paint)</strong>
                <p class="text-xs text-slate-600">Instead of separate CSS files, styling is done inline: <code>class="text-red-500 font-bold"</code>. This is much easier for an AI to write and maintain than searching through multiple files.</p>
             </div>
             <div class="p-3 border-l-4 border-yellow-500 bg-yellow-50">
                <strong class="text-yellow-800 block text-sm">Vite (The Engine)</strong>
                <p class="text-xs text-slate-600">It starts your server instantly. Old tools (Create React App) took minutes. Vite takes milliseconds.</p>
             </div>
          </div>

          <h3 class="mt-6 text-indigo-700 font-bold">React vs. React Native</h3>
          <p class="text-sm text-slate-600"><strong>React</strong> builds websites (HTML). <strong>React Native</strong> builds apps (iOS/Android). They look 90% the same in code, but they render differently. If you want a Play Store app, ask for React Native (Expo).</p>

          <div class="mt-8 pt-6 border-t border-slate-200">
            <h4 class="text-slate-900 font-bold mb-2">🎓 Analysis: Standardization</h4>
            <p class="text-sm text-slate-700 leading-relaxed">
              Deviating from the "Golden Stack" (e.g., using Svelte or Vue) makes the AI dumber, simply because it has less training data on those tools.
              <br/><br/>
              <strong>The Conclusion:</strong> When building with AI, stick to the most popular tools. You aren't just choosing a technology; you are choosing the AI's "native language." React/Tailwind is the English of the AI coding world.
            </p>
          </div>
        `
      }
    ]
  },
  {
    id: 'mod_engine_room',
    title: 'Module 9: The Engine Room',
    description: 'Infrastructure, Databases & Tools.',
    icon: 'Server',
    lessons: [
      {
        id: 'less_anatomy',
        title: 'Anatomy of an App',
        duration: '7 min',
        xpReward: 600,
        resources: [
           { title: "Supabase (Backend as a Service)", url: "https://supabase.com/" },
           { title: "Firebase (Google Backend)", url: "https://firebase.google.com/" }
        ],
        content: `
          <h3>The Restaurant Analogy</h3>
          <p>Beginners often confuse Frontend and Backend. Let's visualize a restaurant.</p>
          
          <div class="space-y-6 my-6">
            <div class="p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <strong class="text-blue-800 block mb-2">Frontend (The Dining Room)</strong>
              <p class="text-sm text-slate-600">This is what the customer sees. The tables, the menu, the decor. It runs in the user's browser (React/Vite). It looks nice, but it can't cook food.</p>
            </div>

            <div class="p-4 bg-orange-50 border border-orange-200 rounded-lg">
              <strong class="text-orange-800 block mb-2">Backend (The Kitchen)</strong>
              <p class="text-sm text-slate-600">This is hidden. It holds the raw ingredients (Database) and has chefs (Server Logic) who cook the meals (Process Data). It runs on a server (Node.js/Python).</p>
            </div>

            <div class="p-4 bg-slate-50 border border-slate-200 rounded-lg">
              <strong class="text-slate-800 block mb-2">API (The Waiter)</strong>
              <p class="text-sm text-slate-600">The customer (Frontend) cannot walk into the kitchen. They tell the Waiter (API) what they want. The Waiter takes the order to the Kitchen, gets the food, and brings it back.</p>
            </div>
          </div>

          <div class="mt-8 pt-6 border-t border-slate-200">
            <h4 class="text-slate-900 font-bold mb-2">🎓 Analysis: Decoupled Architecture</h4>
            <p class="text-sm text-slate-700 leading-relaxed">
              This separation is what allows apps to scale. You can renovate the Dining Room (update the UI) without closing the Kitchen (Backend). You can hire more Chefs (add servers) without changing the menu.
              <br/><br/>
              <strong>The Conclusion:</strong> AI Studio usually helps you build the Frontend. But real apps need a Backend (like Supabase or Firebase). Don't try to cram database logic into your Frontend code; it's like trying to cook a steak at the customer's table.
            </p>
          </div>
        `
      }
    ]
  },
  {
    id: 'mod_terminal_workflow',
    title: 'Module 10: The Terminal & Workflow',
    description: 'Commands, Git & The AI Feedback Loop.',
    icon: 'Terminal',
    lessons: [
      {
        id: 'less_dual_terminal',
        title: 'The Dual Terminal Strategy',
        duration: '6 min',
        xpReward: 700,
        resources: [
           { title: "Command Line Basics", url: "https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line" }
        ],
        content: `
          <h3>The Cockpit Setup</h3>
          <p>New developers freeze when they run a server. "I can't type commands anymore!"</p>
          <p>When you run <code>npm run dev</code>, the terminal is busy keeping your website alive. It's like driving a car—you can't open the hood while driving.</p>
          
          <div class="my-6 p-4 bg-slate-900 text-white rounded-lg">
             <strong class="block mb-2 text-green-400">Terminal 1: The Engine</strong>
             <p class="text-xs text-slate-400 mb-4">Runs the server. It spits out logs. You ignore it mostly. Leave it open.</p>
             
             <strong class="block mb-2 text-blue-400">Terminal 2: The Mechanic</strong>
             <p class="text-xs text-slate-400">This is where you work. You install new parts (<code>npm install</code>). You save your progress (<code>git commit</code>). You create files (<code>touch file.ts</code>).</p>
          </div>
          <p class="text-sm text-slate-700">Always keep two terminals open. It changes everything.</p>

          <div class="mt-8 pt-6 border-t border-slate-200">
            <h4 class="text-slate-900 font-bold mb-2">🎓 Analysis: Parallel Processing</h4>
            <p class="text-sm text-slate-700 leading-relaxed">
              Professional developers never work in a single window. They have one eye on the "Logs" (Terminal 1) and one hand on the "Tools" (Terminal 2).
              <br/><br/>
              <strong>The Conclusion:</strong> If you are constantly stopping your server to type a command, you are breaking your flow state. Open a second tab. It costs nothing.
            </p>
          </div>
        `
      },
      {
        id: 'less_error_loop',
        title: 'The Feedback Loop',
        duration: '7 min',
        xpReward: 500,
        resources: [
           { title: "How to Debug", url: "https://developer.chrome.com/docs/devtools/javascript" }
        ],
        content: `
          <h3>The Detective Mindset</h3>
          <p>Red text in the terminal scares people. It shouldn't. It's a clue.</p>
          <p>When code fails, the terminal usually says something like: <code>Error: 'Button' is not defined at line 42.</code></p>
          
          <div class="p-4 bg-red-50 border border-red-200 rounded-lg my-4">
             <strong class="text-red-800 text-sm">The "Lazy" Fix</strong>
             <p class="text-sm text-slate-700 mt-2">Don't try to read the error yourself. <strong>Copy the entire red block.</strong> Paste it into Gemini.</p>
             <p class="text-sm text-slate-700 mt-2">Gemini is the Detective. It sees "Line 42" and knows exactly what went wrong. It will give you the fix instantly.</p>
          </div>

          <div class="mt-8 pt-6 border-t border-slate-200">
            <h4 class="text-slate-900 font-bold mb-2">🎓 Analysis: Error-Driven Development</h4>
            <p class="text-sm text-slate-700 leading-relaxed">
              In AI coding, errors are not failures; they are prompt inputs. You write code, run it, get an error, feed the error to AI, and get better code.
              <br/><br/>
              <strong>The Conclusion:</strong> The faster you can copy-paste an error message, the faster you will build. Don't stress about the red text. It's just the computer telling you exactly what to ask the AI next.
            </p>
          </div>
        `
      }
    ]
  },
  {
    id: 'mod_ecosystem',
    title: 'Module 11: The Ecosystem',
    description: 'Python, Drive, and Memory.',
    icon: 'Network',
    lessons: [
      {
        id: 'less_python_starter',
        title: 'The Python Starter',
        duration: '8 min',
        xpReward: 300,
        resources: [
           { title: "Google GenAI Python SDK", url: "https://pypi.org/project/google-generativeai/" },
           { title: "Python Quickstart", url: "https://ai.google.dev/gemini-api/docs/get-started/python" }
        ],
        content: `
          <h3>Breaking the Glass</h3>
          <p>Right now, you are using the AI in a browser. But the real power comes when you use it in <strong>Code</strong>.</p>
          <p>On the Dashboard, Google gives you this snippet. Let's decode it line-by-line.</p>
          
          <div class="bg-slate-900 text-blue-300 p-4 rounded-lg font-mono text-xs my-4 overflow-x-auto shadow-lg">
            <span class="text-purple-400">import</span> google.generativeai <span class="text-purple-400">as</span> genai<br/>
            <span class="text-slate-500"># 1. Load the tools</span><br/><br/>
            genai.configure(api_key=<span class="text-green-400">"YOUR_KEY"</span>)<br/>
            <span class="text-slate-500"># 2. Login with your password (API Key)</span><br/><br/>
            model = genai.GenerativeModel(<span class="text-green-400">"gemini-1.5-flash"</span>)<br/>
            <span class="text-slate-500"># 3. Choose the brain</span><br/><br/>
            response = model.generate_content(<span class="text-green-400">"Hello!"</span>)<br/>
            <span class="text-slate-500"># 4. Send the message</span><br/><br/>
            <span class="text-yellow-400">print</span>(response.text)<br/>
            <span class="text-slate-500"># 5. Read the answer</span>
          </div>

          <p class="text-sm text-slate-600"><strong>Why do this?</strong> Once you have this script, you can connect it to anything.</p>
          <ul class="list-disc pl-5 mt-2 space-y-1 text-sm text-slate-600">
             <li>Connect it to your email to auto-reply.</li>
             <li>Connect it to a spreadsheet to analyze data.</li>
             <li>Connect it to a robot to make it talk.</li>
          </ul>

          <div class="mt-8 pt-6 border-t border-slate-200">
            <h4 class="text-slate-900 font-bold mb-2">🎓 Analysis: From Toy to Tool</h4>
            <p class="text-sm text-slate-700 leading-relaxed">
              The web interface is a "Toy" (Manual Input). The API is a "Tool" (Automated Input).
              <br/><br/>
              <strong>The Conclusion:</strong> The true value of AI isn't chatting with it; it's integrating it into loops where it works while you sleep. The moment you move from the web UI to Python, you graduate from "User" to "Engineer".
            </p>
          </div>
        `
      },
      {
        id: 'less_github_sync',
        title: 'Saving to GitHub',
        duration: '6 min',
        xpReward: 300,
        resources: [
           { title: "GitHub Docs: Getting Started", url: "https://docs.github.com/en/get-started" }
        ],
        content: `
          <h3>The Time Capsule</h3>
          <p>The "Save to GitHub" button in AI Studio isn't just a save button. It creates a permanent record in the world's most popular code repository.</p>
          
          <div class="my-6 p-4 bg-slate-50 border border-slate-200 rounded-lg">
             <strong class="text-slate-800 block text-sm mb-2">Why not just save to Drive?</strong>
             <p class="text-sm text-slate-600">GitHub tracks <strong>Versions</strong> (Diffs). If you save a prompt today, change it tomorrow, and realize the new one is worse, GitHub lets you "rewind time" to yesterday's version.</p>
             <p class="text-sm text-slate-600 mt-2"><strong>Collaboration:</strong> If you save to GitHub, you can share the link with a friend. They can download your prompt, improve it, and send the improvements back to you.</p>
          </div>

          <div class="mt-8 pt-6 border-t border-slate-200">
            <h4 class="text-slate-900 font-bold mb-2">🎓 Analysis: Prompt Engineering as Code</h4>
            <p class="text-sm text-slate-700 leading-relaxed">
              Prompts are software. They have bugs, they have versions, and they need maintenance.
              <br/><br/>
              <strong>The Conclusion:</strong> Treating prompts like ephemeral chat logs is a mistake. Treating them like source code (stored in Git) allows you to track performance over time and rollback when an "upgrade" actually makes the AI dumber.
            </p>
          </div>
        `
      },
      {
        id: 'less_drive_ops',
        title: 'Google Drive Operations',
        duration: '10 min',
        xpReward: 400,
        resources: [
           { title: "Drive API Documentation", url: "https://developers.google.com/drive/api" },
           { title: "AI Studio: File API", url: "https://ai.google.dev/gemini-api/docs/prompting_with_media" }
        ],
        content: `
          <h3>The Developer's Warehouse</h3>
          <p>For a developer, Google Drive is your <strong>Asset Warehouse</strong>. You can mount it directly into Gemini.</p>
          
          <div class="my-6 space-y-6">
             <div class="p-4 bg-green-50 border border-green-200 rounded-lg">
                <strong class="text-green-800 block text-lg mb-2">Strategy: RAG (Retrieval Augmented Generation)</strong>
                <p class="text-sm text-slate-700">This is a fancy term for "Letting the AI read your private files."</p>
                <p class="text-sm text-slate-700 mt-2">1. Create a folder in Drive named <code>PROJECT_OMEGA</code>.</p>
                <p class="text-sm text-slate-700">2. Dump 20 PDFs, detailed specs, brand logos, and Excel sheets into it.</p>
                <p class="text-sm text-slate-700">3. In AI Studio, click <strong>(+) -> Drive -> Project Omega</strong>.</p>
                <p class="text-sm text-slate-700 mt-2">Now Gemini knows everything in that folder. You can ask: <em>"Based on the budget in the Excel sheet, can we afford the marketing plan in the PDF?"</em></p>
             </div>

             <div class="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <strong class="text-blue-800 block text-lg mb-2">Housekeeping Rules</strong>
                <p class="text-sm text-slate-600">AI behaves better with organized data. Don't dump files in the root folder.</p>
                <ul class="list-decimal pl-5 mt-2 text-sm text-slate-600 space-y-1">
                   <li><strong>Structure:</strong> <code>/Assets</code> (Images), <code>/Docs</code> (Text), <code>/Data</code> (CSV/JSON).</li>
                   <li><strong>Naming:</strong> Use clear names: <code>2025-Q3-Report.pdf</code> is better than <code>scan001.pdf</code>. The AI reads the filename as a clue!</li>
                   <li><strong>Archive:</strong> Move old files to <code>_OLD</code> so the AI doesn't get confused by outdated info.</li>
                </ul>
             </div>
          </div>

          <div class="mt-8 pt-6 border-t border-slate-200">
            <h4 class="text-slate-900 font-bold mb-2">🎓 Analysis: Context Injection</h4>
            <p class="text-sm text-slate-700 leading-relaxed">
              LLMs are trained on the public internet (up to a certain date). They do not know <em>your</em> business secrets. Drive integration solves the "Knowledge Gap."
              <br/><br/>
              <strong>The Conclusion:</strong> You don't need to train a new model to make it smart about your business. You just need to organize your Drive. A well-organized file system is the easiest way to give an AI a "PhD" in your specific project.
            </p>
          </div>
        `
      }
    ]
  },
  {
    id: 'mod_break_wall',
    title: 'Module 12: Breaking Through The Wall',
    description: 'Handling Lazy AI, Cutoffs & Refactoring.',
    icon: 'LifeBuoy',
    lessons: [
      {
        id: 'less_lazy_ai',
        title: 'The "Lazy" Coder',
        duration: '7 min',
        xpReward: 600,
        resources: [
           { title: "Optimizing Prompts for Code", url: "https://ai.google.dev/gemini-api/docs/prompting-strategies#be-specific" }
        ],
        content: `
          <h3>The Intern Analogy</h3>
          <p>Think of LLMs as a brilliant but lazy intern. If the file is 500 lines long, they don't want to type it all out.</p>
          <p>They will give you: <code>// ... rest of code remains the same</code>.</p>
          
          <div class="my-6 p-4 bg-red-50 border border-red-200 rounded-lg">
             <strong class="text-red-800 block mb-2">Why this is dangerous</strong>
             <p class="text-sm text-slate-700">If you copy-paste that "..." into your file, you just deleted 90% of your app. Your app crashes. You panic.</p>
             <p class="text-sm text-slate-700 mt-2"><strong>The Fix:</strong> Scold the intern. Add to your prompt: <em>"Do not be lazy. Write the full file. No placeholders."</em></p>
          </div>

          <div class="mt-8 pt-6 border-t border-slate-200">
            <h4 class="text-slate-900 font-bold mb-2">🎓 Analysis: Token Conservation</h4>
            <p class="text-sm text-slate-700 leading-relaxed">
              The AI isn't actually "lazy" in a human sense. It is programmed to save tokens (compute cost). It thinks it is helping you by being concise.
              <br/><br/>
              <strong>The Conclusion:</strong> You must explicitly override this default behavior. In the System Instruction, define a rule: "Verbosity is required for code output."
            </p>
          </div>
        `
      },
      {
        id: 'less_loop_death',
        title: 'The Loop of Death',
        duration: '8 min',
        xpReward: 700,
        resources: [
           { title: "Debugging AI Hallucinations", url: "https://ai.google.dev/gemini-api/docs/safety-guidance" }
        ],
        content: `
          <h3>Context Poisoning</h3>
          <p>Have you ever argued with someone who just wouldn't listen? AI gets like that.</p>
          <p>If you try to fix a bug, and the AI gives you a fix that causes a <em>new</em> bug, and then you fix that, and the <em>old</em> bug comes back...</p>
          
          <div class="p-4 bg-slate-900 text-white rounded-lg my-4 text-center">
             <strong class="text-xl text-red-500 animate-pulse block mb-2">STOP.</strong>
             <p class="text-sm opacity-80">You are in the Loop of Death.</p>
          </div>
          
          <p class="text-sm text-slate-700">The chat history is now full of "wrong" code. The AI is confused by its own previous mistakes. It is "poisoned".</p>
          <p class="text-sm text-slate-700 mt-2"><strong>The Only Way Out:</strong> Abandon ship. Start a new chat. Paste the current file. Ask for the fix fresh. 99% of the time, this solves it.</p>

          <div class="mt-8 pt-6 border-t border-slate-200">
            <h4 class="text-slate-900 font-bold mb-2">🎓 Analysis: Sunk Cost Fallacy</h4>
            <p class="text-sm text-slate-700 leading-relaxed">
              We humans hate giving up. We think "one more prompt will fix it." But in AI, the probability of a correct answer drops with every failed attempt in the same context window.
              <br/><br/>
              <strong>The Conclusion:</strong> Be ruthless. If the AI fails twice on the same bug, reset. A fresh context is a smarter brain.
            </p>
          </div>
        `
      }
    ]
  },

  // --- PHASE 4: ADVANCED AI (THE POLISH) ---
  {
    id: 'mod_supercharge',
    title: 'Module 13: Supercharge Capabilities',
    description: 'Explaining the Card Carousel (Veo, Nano, etc.).',
    icon: 'Zap',
    lessons: [
      {
        id: 'less_gemini_3',
        title: 'Try Gemini 3 (Reasoning)',
        duration: '6 min',
        xpReward: 200,
        resources: [
           { title: "Gemini 1.5 Pro Technical Report", url: "https://storage.googleapis.com/deepmind-media/gemini/gemini_v1_5_report.pdf" }
        ],
        content: `
          <h3>The Brain Upgrade</h3>
          <p>The <strong>Try Gemini 3</strong> card isn't just a version number bump. It often includes "Reasoning" capabilities.</p>
          <p>Standard LLMs are like autocomplete—they guess the next word. Gemini 3 (and models like OpenAI o1) are designed to "think" before they speak.</p>
          <div class="bg-indigo-50 border border-indigo-200 p-4 rounded-lg my-4">
             <strong class="text-indigo-800 text-sm">When to use it?</strong>
             <ul class="list-disc pl-5 mt-2 text-sm text-indigo-900">
                <li>Math problems.</li>
                <li>Complex logic puzzles.</li>
                <li>Planning a travel itinerary with strict constraints.</li>
                <li>Agentic flows (e.g. "Plan a week of meals, create the grocery list, and calculate the cost").</li>
             </ul>
          </div>

          <div class="mt-8 pt-6 border-t border-slate-200">
            <h4 class="text-slate-900 font-bold mb-2">🎓 Analysis: Chain of Thought</h4>
            <p class="text-sm text-slate-700 leading-relaxed">
              Standard models fail at math because they try to guess the answer instantly. Reasoning models generate internal "thought steps" (A -> B -> C) before outputting the final result.
              <br/><br/>
              <strong>The Conclusion:</strong> Use Gemini 3 when <em>Accuracy</em> is more important than <em>Speed</em>. It is slower because it is thinking. If you need instant chat, stick to Flash. If you need a correct diagnosis, wait for the reasoning model.
            </p>
          </div>
        `
      },
      {
        id: 'less_veo',
        title: 'Veo 3.1 (Video Production)',
        duration: '7 min',
        xpReward: 250,
        resources: [
           { title: "Google Veo Announcement", url: "https://deepmind.google/technologies/veo/" }
        ],
        content: `
          <h3>The Hollywood Button</h3>
          <p><strong>Veo</strong> generates video from text. But to get good results, you need to think like a Director.</p>
          
          <div class="space-y-4 my-6">
             <div class="p-4 bg-slate-900 text-white rounded-lg">
                <strong class="block mb-2">Prompting for Veo</strong>
                <p class="text-sm opacity-80">Don't just say "A cat."</p>
                <p class="text-sm mt-2 font-mono text-green-400">"Cinematic wide shot, 35mm film grain, golden hour lighting. A cyberpunk cat wearing neon goggles sitting on a rainy rooftop. Blade Runner aesthetic."</p>
             </div>
             <p class="text-sm text-slate-600"><strong>Keywords to use:</strong> Lighting (Soft, Harsh, Neon), Camera Angle (Drone, Close-up, Low-angle), Style (Anime, Photorealistic, Claymation).</p>
          </div>

          <div class="mt-8 pt-6 border-t border-slate-200">
            <h4 class="text-slate-900 font-bold mb-2">🎓 Analysis: The Director's Role</h4>
            <p class="text-sm text-slate-700 leading-relaxed">
              AI doesn't replace the artist; it replaces the camera crew. You still need to define the vision, the mood, and the shot.
              <br/><br/>
              <strong>The Conclusion:</strong> The barrier to entry for video production has dropped to zero, but the barrier for <em>Taste</em> remains high. Veo creates the footage, but your vocabulary creates the art. Learn film terminology (DOF, Pan, Tilt) to control the machine.
            </p>
          </div>
        `
      },
      {
        id: 'less_nano_banana',
        title: 'Nano Banana Pro (Privacy)',
        duration: '6 min',
        xpReward: 250,
        resources: [
           { title: "Android AI on Edge (Nano)", url: "https://developer.android.com/ai/aicore" }
        ],
        content: `
          <h3>The On-Device Revolution</h3>
          <p><strong>Gemini Nano</strong> (sometimes codenamed Banana) is designed to run <em>on your phone</em>, not in the cloud.</p>
          
          <div class="my-6 p-4 bg-green-50 border border-green-200 rounded-lg">
             <strong class="text-green-800 text-lg block mb-2">Why smaller is better</strong>
             <ul class="list-disc pl-5 text-sm text-green-900 space-y-2">
                <li><strong>Privacy:</strong> The data never leaves your device. Perfect for healthcare or banking apps.</li>
                <li><strong>Offline:</strong> It works in an airplane mode.</li>
                <li><strong>Cost:</strong> It costs $0 to run because it uses the user's battery, not Google's servers.</li>
             </ul>
          </div>
          <p class="text-sm text-slate-600">Use this for simple tasks like "Suggest Reply" in a chat app or "Summarize this SMS".</p>

          <div class="mt-8 pt-6 border-t border-slate-200">
            <h4 class="text-slate-900 font-bold mb-2">🎓 Analysis: Edge Computing</h4>
            <p class="text-sm text-slate-700 leading-relaxed">
              Cloud AI is smart but expensive and insecure. Edge AI (Nano) is dumb but free and private.
              <br/><br/>
              <strong>The Conclusion:</strong> The future is "Hybrid AI". Your app should use Nano for 90% of tasks (spelling, simple summaries) and call the Cloud (Gemini Pro) only for the 10% of tasks that require deep intelligence. This architecture saves money and protects user privacy.
            </p>
          </div>
        `
      }
    ]
  },
  {
    id: 'mod_safety',
    title: 'Module 14: The Safety Net',
    description: 'Understanding Filters & Blocking.',
    icon: 'Shield',
    lessons: [
      {
        id: 'less_safety_settings',
        title: 'Blocking Bad Vibes',
        duration: '7 min',
        xpReward: 300,
        resources: [
           { title: "Safety Settings API Docs", url: "https://ai.google.dev/gemini-api/docs/safety-settings" }
        ],
        content: `
          <h3>Adjusting the Filters</h3>
          <p>Gemini has built-in guardrails to prevent it from generating Hate Speech, Harassment, Explicit content, and Dangerous content.</p>
          
          <div class="my-6 p-4 bg-orange-50 border border-orange-200 rounded-lg">
             <strong class="text-orange-800 block mb-2">The "Video Game Villain" Problem</strong>
             <p class="text-sm text-slate-700">Imagine you are writing a script for a video game. You ask Gemini to write dialogue for the villain, "The Dark Lord".</p>
             <p class="text-sm text-slate-700 mt-2"><em>User: "Write a threat from the Dark Lord to the hero."</em></p>
             <p class="text-sm text-slate-700 mt-1"><em>AI: "I cannot generate harmful content."</em></p>
             <p class="text-sm text-slate-700 mt-2"><strong>The Fix:</strong> You must go to Safety Settings and lower the <strong>Harassment</strong> filter to "Block Few" or "Block None". You are not harassing a real person; you are writing fiction. The AI needs permission to be "mean" in character.</p>
          </div>

          <div class="mt-8 pt-6 border-t border-slate-200">
            <h4 class="text-slate-900 font-bold mb-2">🎓 Analysis: The Alignment Tax</h4>
            <p class="text-sm text-slate-700 leading-relaxed">
              Safety filters are necessary for public chatbots but can be obstacles for creative writing. 
              <br/><br/>
              <strong>The Conclusion:</strong> Don't be afraid to lower the shields when you are in a controlled environment (like writing fiction). Just remember that if you are deploying a chatbot to the public, you <em>must</em> raise the shields back up, or your users will find a way to make your bot say something offensive.
            </p>
          </div>
        `
      }
    ]
  },
  {
    id: 'mod_deep_config',
    title: 'Module 15: Deep Config',
    description: 'Top-K, Top-P, and Stop Sequences.',
    icon: 'SlidersHorizontal',
    lessons: [
      {
        id: 'less_top_k_p',
        title: 'Top-K & Top-P Explained',
        duration: '9 min',
        xpReward: 400,
        resources: [
           { title: "Temperature & Sampling Docs", url: "https://ai.google.dev/gemini-api/docs/models/generative-models#model_parameters" }
        ],
        content: `
          <h3>The Autocomplete Visualization</h3>
          <p>Imagine the AI has typed "The cat sat on the...". It now has to pick the next word.</p>
          <p>It creates a ranked list of probabilities:</p>
          <ul class="list-decimal pl-5 text-sm font-mono text-slate-600 mb-4 bg-slate-50 p-4 rounded">
             <li>Mat (50%)</li>
             <li>Rug (30%)</li>
             <li>Floor (15%)</li>
             <li>Moon (0.001%)</li>
          </ul>

          <div class="space-y-6 my-6">
            <div class="p-4 bg-indigo-50 border border-indigo-100 rounded-lg">
              <strong class="text-indigo-800 block mb-2">Top-K (The Shortlist)</strong>
              <p class="text-sm text-slate-600"><strong>Top-K = 3</strong> means "Only look at the top 3 words (Mat, Rug, Floor). Ignore everything else."</p>
              <p class="text-sm text-slate-600 mt-1">This prevents the AI from picking weird, low-probability words like "Moon". It keeps the text focused.</p>
            </div>

            <div class="p-4 bg-purple-50 border border-purple-100 rounded-lg">
              <strong class="text-purple-800 block mb-2">Top-P (The Probability Bucket)</strong>
              <p class="text-sm text-slate-600"><strong>Top-P = 0.8</strong> means "Add words from the top of the list until their combined probability hits 80%."</p>
              <p class="text-sm text-slate-600 mt-1">Mat (50%) + Rug (30%) = 80%. Stop there. Even if "Floor" was a good option, it gets cut.</p>
            </div>
          </div>
          <p class="text-sm text-slate-600"><strong>Summary:</strong> Lower these settings for coding (precision). Raise them for poetry (surprise).</p>

          <div class="mt-8 pt-6 border-t border-slate-200">
            <h4 class="text-slate-900 font-bold mb-2">🎓 Analysis: Tail Truncation</h4>
            <p class="text-sm text-slate-700 leading-relaxed">
              Language models are statistical engines. Without Top-K/P, they occasionally dive into the "Long Tail" of probability, resulting in nonsense or hallucinations.
              <br/><br/>
              <strong>The Conclusion:</strong> Most users never touch these. But if you find your AI is being "too boring" or "too random," don't just change the prompt. Change the probability threshold. You are tuning the engine's willingness to gamble.
            </p>
          </div>
        `
      },
      {
        id: 'less_stop_sequences',
        title: 'Stop Sequences',
        duration: '5 min',
        xpReward: 300,
        resources: [
           { title: "Controlling Output Length", url: "https://ai.google.dev/gemini-api/docs/tokens#stop-sequences" }
        ],
        content: `
          <h3>The Emergency Brake</h3>
          <p>A <strong>Stop Sequence</strong> is a specific text string that tells the AI: "If you are about to type this, STOP immediately."</p>
          
          <div class="p-4 bg-slate-100 border border-slate-200 rounded-lg my-6">
             <strong class="text-slate-800 text-sm block mb-2">Scenario: The Chatbot</strong>
             <p class="text-sm text-slate-700">You are building a chatbot where the user talks to "Alice".</p>
             <div class="font-mono text-xs mt-2 bg-white p-2 rounded">
                User: Hi.<br/>
                Alice: Hello there!<br/>
                User: How are you?<br/>
                Alice: I am good.<br/>
                User: Cool.<br/>
                Alice: ...
             </div>
             <p class="text-sm text-slate-700 mt-2">Sometimes the AI gets confused and tries to generate the <em>User's</em> next line too! It mimics the whole script.</p>
             <p class="text-sm text-slate-700 mt-2"><strong>The Fix:</strong> Set "User:" as a Stop Sequence. The moment the AI tries to type "User:", it freezes. This forces it to wait for the real human to type.</p>
          </div>

          <div class="mt-8 pt-6 border-t border-slate-200">
            <h4 class="text-slate-900 font-bold mb-2">🎓 Analysis: Controlling the Flow</h4>
            <p class="text-sm text-slate-700 leading-relaxed">
              Stop sequences are the "cut" command in a movie scene. They prevent the AI from overacting or stealing someone else's lines.
              <br/><br/>
              <strong>The Conclusion:</strong> In any structured output (Chatbots, JSON generation, Code generation), Stop Sequences are mandatory. They ensure the AI stays in its lane and hands control back to the system at the exact right moment.
            </p>
          </div>
        `
      }
    ]
  },
  {
    id: 'mod_enterprise',
    title: 'Module 16: Enterprise Tools',
    description: 'Caching, Tuning, and Billing.',
    icon: 'Briefcase',
    lessons: [
      {
        id: 'less_caching',
        title: 'Context Caching',
        duration: '7 min',
        xpReward: 500,
        resources: [
           { title: "Context Caching Guide", url: "https://ai.google.dev/gemini-api/docs/caching" }
        ],
        content: `
          <h3>The "Lawyer" Analogy</h3>
          <p>Imagine you hire a lawyer to analyze a 1,000-page contract. You pay them by the hour.</p>
          
          <div class="space-y-4 my-6">
             <div class="p-4 bg-red-50 border border-red-100 rounded-lg">
                <strong class="text-red-800 block mb-1">Without Caching</strong>
                <p class="text-sm text-slate-600">Every time you ask a question ("Is there a loophole?"), the lawyer has to re-read the entire 1,000 pages from scratch. You pay for 10 hours of reading every single time.</p>
             </div>

             <div class="p-4 bg-green-50 border border-green-100 rounded-lg">
                <strong class="text-green-800 block mb-1">With Caching</strong>
                <p class="text-sm text-slate-600">You pay the lawyer to read it <strong>once</strong> and memorize it. Now, when you ask a question, they answer instantly from memory. You pay 10 hours once, and then 5 minutes per question.</p>
             </div>
          </div>
          <p class="text-sm text-slate-600"><strong>Technical Reality:</strong> If you are building a "Chat with my PDF" app, use Caching. Upload the PDF once, get a token ID, and reference that ID. It saves massive amounts of money and time.</p>

          <div class="mt-8 pt-6 border-t border-slate-200">
            <h4 class="text-slate-900 font-bold mb-2">🎓 Analysis: Economic Scaling</h4>
            <p class="text-sm text-slate-700 leading-relaxed">
              Context Caching changes the economics of AI. It makes "Big Data" queries affordable.
              <br/><br/>
              <strong>The Conclusion:</strong> If your prompt is static and huge (e.g., a company handbook, a codebase, a legal library), Cache it. If you don't, you are literally burning money re-sending the same data over the wire for every single user query.
            </p>
          </div>
        `
      },
      {
        id: 'less_tuning',
        title: 'The Tuner (Fine-Tuning)',
        duration: '8 min',
        xpReward: 600,
        resources: [
           { title: "Model Tuning Documentation", url: "https://ai.google.dev/gemini-api/docs/model-tuning" }
        ],
        content: `
          <h3>Training vs. Prompting</h3>
          <p>Prompting is "asking". Fine-Tuning is "teaching".</p>
          
          <div class="my-6 space-y-4">
             <p class="text-sm text-slate-600"><strong>When to use Tuning:</strong> When you need a specific format or tone that is too hard to explain in a prompt.</p>
             
             <div class="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <strong class="text-blue-800 block text-sm mb-2">Scenario: The Medical Coder</strong>
                <p class="text-sm text-slate-700">You want an AI to convert doctor's notes into insurance codes (ICD-10).</p>
                <p class="text-sm text-slate-700 mt-2"><em>Input: "Patient has a broken nose."</em></p>
                <p class="text-sm text-slate-700"><em>Output: "S02.2"</em></p>
                <p class="text-sm text-slate-700 mt-2">Writing instructions for every disease is impossible. Instead, you create a dataset of 5,000 examples (Note -> Code) and "Tune" the model. It learns the pattern perfectly without needing instructions.</p>
             </div>
          </div>

          <div class="mt-8 pt-6 border-t border-slate-200">
            <h4 class="text-slate-900 font-bold mb-2">🎓 Analysis: Few-Shot vs Fine-Tuning</h4>
            <p class="text-sm text-slate-700 leading-relaxed">
              Fine-tuning is expensive and hard to maintain. Prompting (giving a few examples) is cheap and easy.
              <br/><br/>
              <strong>The Conclusion:</strong> Always try "Few-Shot Prompting" first. Give the AI 10 examples in the chat. Only switch to Fine-Tuning if 10 examples aren't enough and you need 1,000 examples to get the quality you need.
            </p>
          </div>
        `
      }
    ]
  },

  // --- PHASE 5: BUSINESS & LAUNCH (THE MONEY) ---
  {
    id: 'mod_security',
    title: 'Module 17: Fortification',
    description: 'Authentication, Hardening & Safety.',
    icon: 'Lock',
    lessons: [
      {
        id: 'less_auth_gate',
        title: 'The Gatekeeper (Auth)',
        duration: '9 min',
        xpReward: 800,
        resources: [
           { title: "OAuth 2.0 Explained", url: "https://oauth.net/2/" }
        ],
        content: `
          <h3>Don't Build Your Own Door</h3>
          <p>The most dangerous thing a new developer can do is write their own login system.</p>
          
          <div class="my-6 p-4 bg-red-50 border border-red-200 rounded-lg">
             <strong class="text-red-800 block mb-2">Why Passwords Suck</strong>
             <p class="text-sm text-slate-700">If you store passwords, you have to encrypt them (Hash/Salt). If you screw up the math, hackers steal everyone's password. Users also forget them constantly, forcing you to build "Forgot Password" email flows.</p>
          </div>

          <div class="my-6 p-4 bg-green-50 border border-green-200 rounded-lg">
             <strong class="text-green-800 block mb-2">The Hero: SSO (Single Sign-On)</strong>
             <p class="text-sm text-slate-700">"Sign in with Google" or "Sign in with Apple".</p>
             <p class="text-sm text-slate-700 mt-2">You don't store passwords. Google handles the security. The user clicks one button. Conversion rates go up 20%.</p>
          </div>

          <div class="mt-8 pt-6 border-t border-slate-200">
            <h4 class="text-slate-900 font-bold mb-2">🎓 Analysis: Outsourcing Risk</h4>
            <p class="text-sm text-slate-700 leading-relaxed">
              Security is the one area where you should be lazy. Let the trillion-dollar companies (Google/Apple) handle the identity verification.
              <br/><br/>
              <strong>The Conclusion:</strong> Use Supabase Auth or Firebase Auth. Check the "Google Login" box. Never touch a raw password.
            </p>
          </div>
        `
      },
      {
        id: 'less_hardening',
        title: 'Hardening Your App',
        duration: '10 min',
        xpReward: 900,
        resources: [
           { title: "OWASP Top 10 Security Risks", url: "https://owasp.org/www-project-top-ten/" }
        ],
        content: `
          <h3>Defense Against the Dark Arts</h3>
          <p>Once your app is online, bots will attack it. Not "if", but "when".</p>
          
          <div class="space-y-6 my-6">
             <div class="p-4 bg-slate-900 text-green-400 font-mono text-xs rounded-lg">
                <strong>1. Input Sanitization (The SQL Filter)</strong><br/>
                If a user types <code>'; DROP TABLE users; --</code> into your search bar, they might delete your database.
                <br/><br/>
                <em>Fix:</em> Never trust user input. Use libraries that "sanitize" text before sending it to the database.
             </div>

             <div class="p-4 bg-slate-900 text-blue-400 font-mono text-xs rounded-lg">
                <strong>2. Rate Limiting (The Speed Bump)</strong><br/>
                A bot can try to login 1,000 times a second. This crashes your server (DDoS).
                <br/><br/>
                <em>Fix:</em> Set a rule: "Max 5 requests per minute per IP address." This blocks the bots but lets humans through.
             </div>

             <div class="p-4 bg-slate-900 text-yellow-400 font-mono text-xs rounded-lg">
                <strong>3. Environment Variables (The Vault)</strong><br/>
                Never commit your API Keys to GitHub. Hackers scan GitHub for keys every second.
                <br/><br/>
                <em>Fix:</em> Put keys in a <code>.env</code> file and add that file to <code>.gitignore</code>.
             </div>
          </div>

          <div class="mt-8 pt-6 border-t border-slate-200">
            <h4 class="text-slate-900 font-bold mb-2">🎓 Analysis: The Zero Trust Model</h4>
            <p class="text-sm text-slate-700 leading-relaxed">
              Assume every user is a hacker. Assume every input is a virus.
              <br/><br/>
              <strong>The Conclusion:</strong> Security isn't a feature; it's a mindset. Hardening your app doesn't make it cooler, but it ensures it's still there when you wake up tomorrow morning.
            </p>
          </div>
        `
      }
    ]
  },
  {
    id: 'mod_legal',
    title: 'Module 18: The Rule of Law',
    description: 'Compliance, Copyright & Store Policies.',
    icon: 'Scale',
    lessons: [
      {
        id: 'less_play_policy',
        title: 'Play Store Constitution',
        duration: '9 min',
        xpReward: 800,
        resources: [
           { title: "Google Play Developer Policy Center", url: "https://play.google.com/about/developer-content-policy/" }
        ],
        content: `
          <h3>The Law of the Land</h3>
          <p>When you publish to Google Play, you are a guest in their house. You must follow their rules or get evicted (banned).</p>
          
          <div class="space-y-6 my-6">
             <div class="p-4 bg-red-50 border border-red-200 rounded-lg">
                <strong class="text-red-800 block mb-2">Restricted Content</strong>
                <p class="text-sm text-slate-700"><strong>Gambling:</strong> If users pay real money for a chance to win real money, you need a government gambling license. Period.</p>
                <p class="text-sm text-slate-700 mt-2"><strong>Adult Content:</strong> Strictly forbidden. No nudity, no suggestive content.</p>
                <p class="text-sm text-slate-700 mt-2"><strong>Violence:</strong> Realistic violence against humans or animals is often restricted.</p>
             </div>

             <div class="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <strong class="text-blue-800 block mb-2">The "Real Money" Trap</strong>
                <p class="text-sm text-slate-600">Be careful with "Cash Out" apps. If you let users earn money, you face massive scrutiny for money laundering and fraud.</p>
             </div>
          </div>

          <div class="mt-8 pt-6 border-t border-slate-200">
            <h4 class="text-slate-900 font-bold mb-2">🎓 Analysis: Policy Before Code</h4>
            <p class="text-sm text-slate-700 leading-relaxed">
              Don't build an app that is illegal to publish. Read the "Developer Program Policies" <em>before</em> you start coding.
              <br/><br/>
              <strong>The Conclusion:</strong> If your app idea feels "grey area" (e.g., a poker app, a crypto giveaway), assume it will be rejected unless you have a lawyer.
            </p>
          </div>
        `
      },
      {
        id: 'less_legal_basics',
        title: 'Copyright, DMCA & AMOE',
        duration: '10 min',
        xpReward: 900,
        resources: [
           { title: "Creative Commons (Free Assets)", url: "https://creativecommons.org/" }
        ],
        content: `
          <h3>Intellectual Property 101</h3>
          <p>Just because it's on the internet doesn't mean you can use it.</p>
          
          <div class="space-y-6 my-6">
             <div class="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <strong class="text-yellow-800 block mb-2">DMCA (Copyright)</strong>
                <p class="text-sm text-slate-700">Do not use Mickey Mouse, Mario, or Harry Potter in your app. Disney <em>will</em> find you. Your app will be taken down.</p>
                <p class="text-sm text-slate-700 mt-2"><strong>Fix:</strong> Create original characters or use "Public Domain" assets.</p>
             </div>

             <div class="p-4 bg-purple-50 border border-purple-200 rounded-lg">
                <strong class="text-purple-800 block mb-2">AMOE (Alternate Means of Entry)</strong>
                <p class="text-sm text-slate-700">If you run a sweepstakes/raffle inside your app:</p>
                <ul class="list-disc pl-5 mt-2 text-sm text-slate-700">
                   <li><strong>Gambling:</strong> Consideration (Money) + Chance + Prize. (Illegal without license).</li>
                   <li><strong>Sweepstakes:</strong> Chance + Prize - Consideration. (Legal).</li>
                </ul>
                <p class="text-sm text-slate-700 mt-2">To make it legal, you must offer a "Free" way to enter (AMOE), like mailing a postcard. If you require payment to enter, it's gambling.</p>
             </div>
          </div>

          <div class="mt-8 pt-6 border-t border-slate-200">
            <h4 class="text-slate-900 font-bold mb-2">🎓 Analysis: Compliance is Survival</h4>
            <p class="text-sm text-slate-700 leading-relaxed">
              Legal issues don't just get your app deleted; they can get you sued.
              <br/><br/>
              <strong>The Conclusion:</strong> Never copy-paste images from Google Images. Use Unsplash or generate your own AI assets. And never run a paid raffle without consulting a lawyer.
            </p>
          </div>
        `
      },
      {
        id: 'less_i18n',
        title: 'Going Global (i18n)',
        duration: '8 min',
        xpReward: 600,
        resources: [
           { title: "React i18next Documentation", url: "https://react.i18next.com/" }
        ],
        content: `
          <h3>Beyond English</h3>
          <p>95% of the world doesn't speak English as their first language. If you hardcode text like <code>&lt;button&gt;Submit&lt;/button&gt;</code>, you lock out the world.</p>
          
          <div class="my-6 p-4 bg-indigo-50 border border-indigo-200 rounded-lg">
             <strong class="text-indigo-800 block mb-2">Internationalization (i18n)</strong>
             <p class="text-sm text-slate-700">Instead of hardcoding text, you use <strong>Keys</strong>.</p>
             <p class="text-xs font-mono text-slate-600 mt-2 bg-white p-2 rounded">
                // en.json<br/>
                "submit_btn": "Submit"<br/><br/>
                // es.json<br/>
                "submit_btn": "Enviar"<br/><br/>
                // Code<br/>
                &lt;button&gt;{t('submit_btn')}&lt;/button&gt;
             </p>
          </div>
          
          <p class="text-sm text-slate-600"><strong>Note:</strong> We included a language selector UI in this app to show you <em>where</em> it goes, but implementing the full logic requires a library like <code>i18next</code>.</p>

          <div class="mt-8 pt-6 border-t border-slate-200">
            <h4 class="text-slate-900 font-bold mb-2">🎓 Analysis: Market Expansion</h4>
            <p class="text-sm text-slate-700 leading-relaxed">
              Translating your app is the cheapest way to double your user base.
              <br/><br/>
              <strong>The Conclusion:</strong> Even if you only launch in English, build your app with "Keys" from day one. It is much harder to refactor later.
            </p>
          </div>
        `
      }
    ]
  },
  {
    id: 'mod_safety_first',
    title: 'Module 19: Digital Street Smarts',
    description: 'Social Engineering, Scams & Defense.',
    icon: 'ShieldAlert',
    lessons: [
      {
        id: 'less_social_engineering',
        title: 'The Human Hack',
        duration: '8 min',
        xpReward: 600,
        resources: [
           { title: "FBI Internet Crime Complaint Center (IC3)", url: "https://www.ic3.gov/" },
           { title: "Have I Been Pwned?", url: "https://haveibeenpwned.com/" }
        ],
        content: `
          <h3>Hacking Humans, Not Computers</h3>
          <p>Why spend 100 hours trying to crack an encrypted password when you can just ask the user for it?</p>
          <p><strong>Social Engineering</strong> is the art of manipulating people into giving up confidential information. It relies on psychology, not code.</p>
          
          <div class="space-y-6 my-6">
             <div class="p-4 bg-red-50 border border-red-200 rounded-lg">
                <strong class="text-red-800 block mb-2">1. Urgency ("ACT NOW!")</strong>
                <p class="text-sm text-slate-700">"Your account will be suspended in 10 minutes unless you verify!"</p>
                <p class="text-sm text-slate-700 mt-1">Fear shuts down critical thinking. Scammers want you to panic and click without checking the URL.</p>
             </div>

             <div class="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <strong class="text-yellow-800 block mb-2">2. Authority ("I am the CEO")</strong>
                <p class="text-sm text-slate-700">"Hi, this is [CEO Name]. I'm in a meeting and need you to buy gift cards immediately."</p>
                <p class="text-sm text-slate-700 mt-1">People are trained to obey authority figures. Verify the request through a secondary channel (like Slack) before acting.</p>
             </div>
          </div>

          <div class="mt-8 pt-6 border-t border-slate-200">
            <h4 class="text-slate-900 font-bold mb-2">🎓 Analysis: The Pause Protocol</h4>
            <p class="text-sm text-slate-700 leading-relaxed">
              If a message makes you feel strong emotion (fear, excitement, curiosity), <strong>PAUSE</strong>.
              <br/><br/>
              <strong>The Conclusion:</strong> Legitimate security alerts are rarely "instant panic" situations. If the message demands speed, it is likely a trap.
            </p>
          </div>
        `
      },
      {
        id: 'less_scam_vectors',
        title: 'Attack Vectors (Phishing, Smishing, DMs)',
        duration: '9 min',
        xpReward: 700,
        resources: [
           { title: "Google Safe Browsing", url: "https://safebrowsing.google.com/" }
        ],
        content: `
          <h3>Where the Attacks Come From</h3>
          <p>Scammers don't just use email anymore. They are on every platform.</p>
          
          <div class="space-y-4 my-6">
             <div class="p-3 bg-blue-50 border-l-4 border-blue-500">
                <strong class="block text-sm text-blue-800">Email (Phishing)</strong>
                <p class="text-xs text-slate-600">Fake invoices, fake Google Doc links, fake "Password Reset" buttons. Always check the sender address (e.g., <code>support@g0ogle.com</code>).</p>
             </div>
             <div class="p-3 bg-green-50 border-l-4 border-green-500">
                <strong class="block text-sm text-green-800">SMS (Smishing)</strong>
                <p class="text-xs text-slate-600">"USPS: Your package is delayed. Click here." Smartphones make it hard to check URLs. Treat all SMS links as hostile.</p>
             </div>
             <div class="p-3 bg-purple-50 border-l-4 border-purple-500">
                <strong class="block text-sm text-purple-800">DMs (The "Collab")</strong>
                <p class="text-xs text-slate-600">"Hey dev! I want to hire you/sponsor you. Download my game/tool to test it."</p>
                <p class="text-xs text-red-500 font-bold mt-1">NEVER download executables (.exe, .scr, .zip) from strangers in Discord/Twitter DMs. It is malware designed to steal your browser cookies and wallets.</p>
             </div>
          </div>

          <div class="mt-8 pt-6 border-t border-slate-200">
            <h4 class="text-slate-900 font-bold mb-2">🎓 Analysis: The Supply Chain Attack</h4>
            <p class="text-sm text-slate-700 leading-relaxed">
              As a developer, YOU are a high-value target. If hackers compromise your machine, they can inject malicious code into the apps you build for your users.
              <br/><br/>
              <strong>The Conclusion:</strong> Treat your dev machine like a vault. Do not install random software "just to test". Use a Virtual Machine (VM) for testing untrusted code.
            </p>
          </div>
        `
      },
      {
        id: 'less_url_trap',
        title: 'The URL Trap (Typosquatting)',
        duration: '7 min',
        xpReward: 600,
        resources: [
           { title: "IDN Homograph Attacks", url: "https://en.wikipedia.org/wiki/IDN_homograph_attack" }
        ],
        content: `
          <h3>Read the Address Carefully</h3>
          <p>You think you are on <code>google.com</code>, but are you?</p>
          
          <div class="my-6 space-y-4">
             <div class="p-4 bg-slate-900 text-white rounded-lg font-mono text-sm">
                <p class="text-green-400">google.com <span class="text-slate-500">// Safe</span></p>
                <p class="text-red-400">g0ogle.com <span class="text-slate-500">// Typo (Zero instead of O)</span></p>
                <p class="text-red-400">googIe.com <span class="text-slate-500">// Typo (Capital 'i' instead of 'l')</span></p>
                <p class="text-red-400">gоogle.com <span class="text-slate-500">// Homoglyph (Cyrillic 'o')</span></p>
             </div>
             
             <p class="text-sm text-slate-600"><strong>Homoglyphs</strong> are terrifying. Scammers use characters from other alphabets (Cyrillic, Greek) that look <em>identical</em> to Latin letters but are treated as different websites by the browser.</p>
          </div>

          <p class="text-sm text-slate-600"><strong>The Link Rot Danger:</strong> Sometimes, legitimate domains expire. Scammers buy them. An old link on a blog from 2018 might now lead to a malware site.</p>

          <div class="mt-8 pt-6 border-t border-slate-200">
            <h4 class="text-slate-900 font-bold mb-2">🎓 Analysis: The Password Manager Defense</h4>
            <p class="text-sm text-slate-700 leading-relaxed">
              Your eyes can be tricked. Your Password Manager cannot.
              <br/><br/>
              <strong>The Conclusion:</strong> If your Password Manager refuses to autofill your password, <strong>STOP</strong>. It means the domain does not match, even if it looks perfect to you. Trust the software, not your eyes.
            </p>
          </div>
        `
      },
      {
        id: 'less_incident_response',
        title: 'Incident Response',
        duration: '8 min',
        xpReward: 800,
        resources: [
           { title: "Federal Trade Commission: Report Fraud", url: "https://reportfraud.ftc.gov/" }
        ],
        content: `
          <h3>What to do when you get scammed</h3>
          <p>It happens to the best of us. Speed is key.</p>
          
          <div class="space-y-6 my-6">
             <div class="p-4 bg-red-50 border border-red-200 rounded-lg">
                <strong class="text-red-800 block mb-2">Immediate Actions</strong>
                <ol class="list-decimal pl-5 text-sm text-slate-700 space-y-1">
                   <li><strong>Disconnect:</strong> Turn off Wi-Fi/Ethernet if you ran a file.</li>
                   <li><strong>Rotate Credentials:</strong> Change passwords from a <em>different, clean device</em> (like your phone).</li>
                   <li><strong>Kill Sessions:</strong> Go to "Security Settings" on Google/Facebook and click "Log Out All Devices".</li>
                   <li><strong>Freeze Finance:</strong> Call your bank or lock your crypto wallet.</li>
                </ol>
             </div>

             <div class="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <strong class="text-blue-800 block mb-2">Reporting (The Civic Duty)</strong>
                <p class="text-sm text-slate-700">Don't just hide in shame. Report it so others don't get hit.</p>
                <ul class="list-disc pl-5 mt-2 text-sm text-slate-700 space-y-1">
                   <li><strong>IC3.gov:</strong> FBI Internet Crime Complaint Center.</li>
                   <li><strong>Google Safe Browsing:</strong> Report the phishing URL so Chrome blocks it for everyone.</li>
                   <li><strong>abuse@domain.com:</strong> Email the registrar of the scam site to get it taken down.</li>
                </ul>
             </div>
          </div>

          <div class="mt-8 pt-6 border-t border-slate-200">
            <h4 class="text-slate-900 font-bold mb-2">🎓 Analysis: Resilience</h4>
            <p class="text-sm text-slate-700 leading-relaxed">
              Security is not about being invulnerable; it's about recovery speed.
              <br/><br/>
              <strong>The Conclusion:</strong> Have a plan. Know where your "Freeze Card" button is. Know your bank's phone number. When adrenaline hits, you won't be able to think clearly, so follow your pre-made checklist.
            </p>
          </div>
        `
      }
    ]
  },
  {
    id: 'mod_monetization',
    title: 'Module 20: Monetization Mastery',
    description: 'Ads, SaaS, Stripe & Making Money.',
    icon: 'DollarSign',
    lessons: [
      {
        id: 'less_revenue_models',
        title: 'The Revenue Menu',
        duration: '10 min',
        xpReward: 650,
        resources: [
           { title: "Stripe Docs", url: "https://stripe.com/docs" },
           { title: "RevenueCat (IAP)", url: "https://www.revenuecat.com/docs" }
        ],
        content: `
          <h3>The Two Economies</h3>
          <p>There are only two ways to make money online: The <strong>Attention Economy</strong> and the <strong>Value Economy</strong>.</p>
          
          <div class="grid gap-6 my-6">
            <div class="p-4 bg-green-50 border border-green-200 rounded-xl">
              <strong class="text-green-800 block mb-2 text-lg">1. Attention (AdMob)</strong>
              <p class="text-sm text-slate-600"><strong>Model:</strong> Free App + Ads.</p>
              <p class="text-sm text-slate-600 mt-2">Users pay with their time. You get paid per 1,000 views (CPM). This is a volume game. You need thousands of users to make real money.</p>
              <p class="text-xs text-green-700 font-mono mt-2">Math: 10,000 users * 3 ads/day = 30,000 views ≈ $30/day.</p>
            </div>

            <div class="p-4 bg-blue-50 border border-blue-200 rounded-xl">
              <strong class="text-blue-800 block mb-2 text-lg">2. Value (SaaS / Stripe)</strong>
              <p class="text-sm text-slate-600"><strong>Model:</strong> Paid Subscription.</p>
              <p class="text-sm text-slate-600 mt-2">Users pay with cash because you solve a painful problem. You only need a few hundred users to make a living.</p>
              <p class="text-xs text-blue-700 font-mono mt-2">Math: 100 users * $10/mo = $1,000/mo.</p>
            </div>
          </div>

          <div class="mt-8 pt-6 border-t border-slate-200">
            <h4 class="text-slate-900 font-bold mb-2">🎓 Analysis: Time vs. Money</h4>
            <p class="text-sm text-slate-700 leading-relaxed">
              If your app is for entertainment (Games, Memes), use Ads. People won't pay for it. If your app saves time or makes money (Productivity, Business Tools), use Subscriptions.
              <br/><br/>
              <strong>The Conclusion:</strong> Choose your business model before you write a single line of code. It determines your design. Ad apps need "retention" loops. SaaS apps need "utility" features. You cannot swap them later.
            </p>
          </div>
        `
      },
      {
        id: 'less_admob_setup',
        title: 'AdMob Setup Guide',
        duration: '8 min',
        xpReward: 700,
        resources: [
           { title: "AdMob Policy Center", url: "https://support.google.com/admob/answer/6128543?hl=en" },
           { title: "React Native AdMob", url: "https://docs.page/refewey/react-native-admob" }
        ],
        content: `
          <h3>The Trap of "Invalid Traffic"</h3>
          <p>Setting up AdMob is easy. Keeping your account is hard.</p>
          
          <div class="my-6 p-4 bg-red-50 border border-red-200 rounded-lg">
             <strong class="text-red-800 block mb-2 text-lg">The #1 Mistake</strong>
             <p class="text-sm text-slate-700"><strong>Never, ever, ever click your own ads.</strong></p>
             <p class="text-sm text-slate-700 mt-2">Google knows everything. They know your IP, your device ID, your location. If they see you clicking your own banners to test them, they will ban your account for life. No appeal.</p>
             <p class="text-sm text-slate-700 mt-2"><strong>Solution:</strong> Always use "Test IDs" (dummy ad codes provided by Google) during development. Only switch to real IDs when you publish to the store.</p>
          </div>

          <div class="mt-8 pt-6 border-t border-slate-200">
            <h4 class="text-slate-900 font-bold mb-2">🎓 Analysis: The Platform Risk</h4>
            <p class="text-sm text-slate-700 leading-relaxed">
              When you rely on AdMob, Google is your boss. They can fire you (ban you) at any time without explanation.
              <br/><br/>
              <strong>The Conclusion:</strong> Treat AdMob as a starting point, not the end game. Build an email list or a direct connection with your users so you aren't 100% dependent on an algorithm for your paycheck.
            </p>
          </div>
        `
      }
    ]
  },
  {
    id: 'mod_web3',
    title: 'Module 21: The Web3 Frontier',
    description: 'Blockchain, Crypto & Smart Contracts.',
    icon: 'Blocks',
    lessons: [
      {
        id: 'less_web123',
        title: 'Web 1.0 vs 2.0 vs 3.0',
        duration: '7 min',
        xpReward: 500,
        resources: [
           { title: "Ethereum Introduction", url: "https://ethereum.org/en/developers/docs/intro-to-ethereum/" }
        ],
        content: `
          <h3>The Evolution of Ownership</h3>
          <p>To understand Web3, you must understand the history of login.</p>
          
          <ul class="space-y-4 my-6">
             <li class="p-3 bg-slate-50 border border-slate-200 rounded-lg">
                <strong class="block text-slate-800">Web 1.0 (The Library)</strong>
                <p class="text-sm text-slate-600">You visit a website. You read. You leave. There is no login. (1990-2004)</p>
             </li>
             <li class="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                <strong class="block text-blue-800">Web 2.0 (The Platform)</strong>
                <p class="text-sm text-slate-600">You log in with Google or Facebook. You create content, but <strong>They own it</strong>. They can delete your account. They sell your data. (2004-Present)</p>
             </li>
             <li class="p-3 bg-purple-50 border border-purple-200 rounded-lg">
                <strong class="block text-purple-800">Web 3.0 (The Wallet)</strong>
                <p class="text-sm text-slate-600">You "Connect Wallet". Your identity is a cryptographic key that <strong>You own</strong>. You can take your data (money, assets, history) from one app to another. No one can ban you.</p>
             </li>
          </ul>

          <div class="mt-8 pt-6 border-t border-slate-200">
            <h4 class="text-slate-900 font-bold mb-2">🎓 Analysis: Sovereign Identity</h4>
            <p class="text-sm text-slate-700 leading-relaxed">
              Web3 is not just about money; it's about <strong>Portable State</strong>. In Web2, your Instagram photos are stuck in Instagram. In Web3, your assets live in your wallet, and you can plug that wallet into any app.
              <br/><br/>
              <strong>The Conclusion:</strong> Web3 development is harder because there is no central database to "fix" things if they go wrong. But it offers a level of user ownership that is impossible in Web2.
            </p>
          </div>
        `
      },
      {
        id: 'less_blockchain_basics',
        title: 'The Immutable Ledger',
        duration: '8 min',
        xpReward: 600,
        resources: [
           { title: "Blockchain Demo", url: "https://andersbrownworth.com/blockchain/" }
        ],
        content: `
          <h3>The Google Sheets in the Sky</h3>
          <p>Strip away the hype. A Blockchain is just a database (like an Excel sheet) shared by thousands of computers.</p>
          
          <div class="my-6 p-4 bg-green-50 border border-green-200 rounded-lg">
             <strong class="text-green-800 block mb-2">The Special Rule: Append Only</strong>
             <p class="text-sm text-slate-700">In a normal database, an admin can delete a row. "Oops, let's erase that transaction."</p>
             <p class="text-sm text-slate-700 mt-2">In a Blockchain, you can <strong>Never Delete</strong>. You can only add a new line that says "I reverse the previous line." History is permanent. This creates <strong>Trust</strong> without needing a bank.</p>
          </div>

          <div class="mt-8 pt-6 border-t border-slate-200">
            <h4 class="text-slate-900 font-bold mb-2">🎓 Analysis: Trust Minimization</h4>
            <p class="text-sm text-slate-700 leading-relaxed">
              The revolutionary part of blockchain isn't the coin; it's the fact that <strong>strangers can agree on the truth</strong> without meeting.
              <br/><br/>
              <strong>The Conclusion:</strong> Use Blockchain when you need multiple parties to trust a database but none of them trust each other. If you just need to store data for your own app, use a regular database (SQL) because it is faster and cheaper.
            </p>
          </div>
        `
      },
      {
        id: 'less_smart_contracts',
        title: 'Smart Contracts',
        duration: '9 min',
        xpReward: 700,
        resources: [
           { title: "Solidity Lang", url: "https://soliditylang.org/" },
           { title: "OpenZeppelin Contracts", url: "https://www.openzeppelin.com/contracts" }
        ],
        content: `
          <h3>The Vending Machine</h3>
          <p>A Smart Contract is code that holds money.</p>
          <p>Think of a Vending Machine. It is a box on a sidewalk. It has no employees. But it holds money and products.</p>
          
          <div class="bg-slate-900 text-green-400 p-4 rounded-lg font-mono text-xs my-4 overflow-x-auto">
             if (money_inserted >= 2.00) {<br/>
             &nbsp;&nbsp;release_soda();<br/>
             &nbsp;&nbsp;send_money_to_owner();<br/>
             } else {<br/>
             &nbsp;&nbsp;return_coins();<br/>
             }
          </div>
          
          <p class="text-sm text-slate-700">This logic runs on the blockchain. Once deployed, no one can stop it. It guarantees that if you pay, you get the product. No middleman.</p>

          <div class="mt-8 pt-6 border-t border-slate-200">
            <h4 class="text-slate-900 font-bold mb-2">🎓 Analysis: Code is Law</h4>
            <p class="text-sm text-slate-700 leading-relaxed">
              Smart Contracts replace lawyers and escrow agents with software. They are ruthless. If there is a bug in the code, the money is lost forever.
              <br/><br/>
              <strong>The Conclusion:</strong> Developing Smart Contracts is the highest-stakes coding in the world. AI can help you write them, but you must audit them with your life. A typo in a website breaks a button; a typo in a smart contract bankrupts the company.
            </p>
          </div>
        `
      }
    ]
  },
  {
    id: 'mod_social_galaxy',
    title: 'Module 22: The Social & Google Ecosystem',
    description: 'Launching your app into the wild.',
    icon: 'Share2',
    lessons: [
      {
        id: 'less_social_matrix',
        title: 'The Social Matrix',
        duration: '9 min',
        xpReward: 600,
        resources: [
           { title: "Building in Public Guide", url: "https://www.swyx.io/learn-in-public" }
        ],
        content: `
          <h3>Choosing Your Battlefield</h3>
          <p>You built the app. Now where do you find users? Each social platform has a different "physics".</p>
          
          <div class="space-y-6 my-6">
             <div class="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <strong class="text-blue-800 block mb-2">Facebook & Instagram (B2C)</strong>
                <p class="text-sm text-slate-700"><strong>Good for:</strong> Mass market, non-technical users, visual products (shopping, fitness).</p>
                <p class="text-sm text-slate-700 mt-1"><strong>Bad for:</strong> Developer tools, niche tech. The ads are expensive ($$$).</p>
             </div>

             <div class="p-4 bg-indigo-50 border border-indigo-200 rounded-lg">
                <strong class="text-indigo-800 block mb-2">Discord & Telegram (Community)</strong>
                <p class="text-sm text-slate-700"><strong>Good for:</strong> Gaming, Crypto, AI Tools. High retention. You build a "tribe".</p>
                <p class="text-sm text-slate-700 mt-1"><strong>The Difference:</strong> Discord is for hanging out (Voice/Streaming). Telegram is for broadcasting (Announcements/News).</p>
             </div>

             <div class="p-4 bg-black text-white border border-slate-700 rounded-lg">
                <strong class="block mb-2">Twitter/X & LinkedIn (B2B)</strong>
                <p class="text-sm opacity-90"><strong>Good for:</strong> "Building in Public". Showing your code, sharing your journey. Investors and other devs live here.</p>
             </div>
          </div>

          <div class="mt-8 pt-6 border-t border-slate-200">
            <h4 class="text-slate-900 font-bold mb-2">🎓 Analysis: Channel Fit</h4>
            <p class="text-sm text-slate-700 leading-relaxed">
              Don't try to be everywhere. Pick ONE platform that matches your audience.
              <br/><br/>
              <strong>The Conclusion:</strong> If you are building a dev tool, go to Twitter. If you are building a game, go to Discord. If you are building a local service, go to Facebook.
            </p>
          </div>
        `
      },
      {
        id: 'less_google_galaxy',
        title: 'The Google Galaxy',
        duration: '10 min',
        xpReward: 700,
        resources: [
           { title: "Google Maps Platform", url: "https://developers.google.com/maps" },
           { title: "YouTube Data API", url: "https://developers.google.com/youtube/v3" }
        ],
        content: `
          <h3>Leveraging the Giant</h3>
          <p>Google isn't just Search and Android. It's a suite of interconnected tools you can hook into.</p>
          
          <div class="grid grid-cols-1 gap-4 my-6">
             <div class="p-3 border border-slate-200 rounded shadow-sm">
                <strong class="text-red-600 block mb-1">YouTube (Google TV)</strong>
                <p class="text-xs text-slate-600">The #2 Search Engine. Your app needs a demo video. Embedding YouTube is the cheapest way to host video in your app.</p>
             </div>
             <div class="p-3 border border-slate-200 rounded shadow-sm">
                <strong class="text-green-600 block mb-1">Google Maps</strong>
                <p class="text-xs text-slate-600">Building a delivery or travel app? Don't build your own map. Use the Maps SDK to add location context instantly.</p>
             </div>
             <div class="p-3 border border-slate-200 rounded shadow-sm">
                <strong class="text-blue-600 block mb-1">Google Pay</strong>
                <p class="text-xs text-slate-600">The friction-killer. If users have to type their credit card number, they leave. Google Pay lets them buy with a thumbprint.</p>
             </div>
             <div class="p-3 border border-slate-200 rounded shadow-sm">
                <strong class="text-yellow-600 block mb-1">Drive & Docs</strong>
                <p class="text-xs text-slate-600">Use Sheets as a database! You can actually read/write to a Google Sheet from your app. It's the poor man's CMS.</p>
             </div>
          </div>

          <div class="mt-8 pt-6 border-t border-slate-200">
            <h4 class="text-slate-900 font-bold mb-2">🎓 Analysis: Ecosystem Gravity</h4>
            <p class="text-sm text-slate-700 leading-relaxed">
              Integration reduces friction. Users already trust Google. Borrow that trust.
              <br/><br/>
              <strong>The Conclusion:</strong> Don't reinvent the wheel. If you need maps, storage, or payments, check if there is a Google API for it first. It usually integrates seamlessly with Firebase and Android.
            </p>
          </div>
        `
      }
    ]
  },
  {
    id: 'mod_ai_landscape',
    title: 'Module 23: The AI Landscape',
    description: 'Comparing Gemini, ChatGPT, Claude & More.',
    icon: 'Globe',
    lessons: [
      {
        id: 'less_big_five',
        title: 'The Avengers Team',
        duration: '8 min',
        xpReward: 500,
        resources: [
           { title: "HuggingFace Leaderboard", url: "https://huggingface.co/spaces/lmsys/chatbot-arena-leaderboard" },
           { title: "Google DeepMind Blog", url: "https://deepmind.google/discover/blog/" }
        ],
        content: `
          <h3>Assemble Your Squad</h3>
          <p>Don't be a fanboy. Each AI is a specialist. You are the leader of a team.</p>
          
          <div class="space-y-4 my-6">
             <div class="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <strong class="text-blue-800 text-lg block mb-1">Gemini (The Librarian)</strong>
                <p class="text-sm text-slate-600">With its massive context window, it can read entire books. Use it for research, analyzing huge codebases, and connecting to Google Drive.</p>
             </div>

             <div class="p-4 bg-orange-50 border border-orange-200 rounded-lg">
                <strong class="text-orange-800 text-lg block mb-1">Claude (The Writer/Coder)</strong>
                <p class="text-sm text-slate-600">Claude 3.5 Sonnet is widely considered the best pure coder and creative writer. It feels more "human" and less robotic.</p>
             </div>

             <div class="p-4 bg-green-50 border border-green-200 rounded-lg">
                <strong class="text-green-800 text-lg block mb-1">ChatGPT (The General)</strong>
                <p class="text-sm text-slate-600">The jack of all trades. Good at voice, good at image generation (DALL-E), good at reasoning (o1).</p>
             </div>
          </div>

          <div class="mt-8 pt-6 border-t border-slate-200">
            <h4 class="text-slate-900 font-bold mb-2">🎓 Analysis: Commoditization of Intelligence</h4>
            <p class="text-sm text-slate-700 leading-relaxed">
              Brand loyalty is a weakness in AI. These models change weekly. One week Gemini is on top, the next week Claude.
              <br/><br/>
              <strong>The Conclusion:</strong> Stay agnostic. Use an interface (like a multi-model chat app) that lets you switch brains instantly. The prompt that works for Gemini might need tweaking for Claude, but the <em>Strategy</em> remains the same.
            </p>
          </div>
        `
      }
    ]
  },
  {
    id: 'mod_lifecycle',
    title: 'Module 24: The Release Lifecycle',
    description: 'Tracks, Testing & MVP Mindset.',
    icon: 'Flag',
    lessons: [
      {
        id: 'less_release_mvp_doctrine',
        title: 'The MVP Doctrine',
        duration: '7 min',
        xpReward: 600,
        resources: [
           { title: "Minimum Viable Product", url: "https://www.agilealliance.org/glossary/mvp/" },
           { title: "The Lean Startup", url: "http://theleanstartup.com/" }
        ],
        content: `
          <h3>Why Perfectionism Kills Startups</h3>
          <p>An MVP (Minimum Viable Product) is not a "bad" product. It is the smallest possible thing you can build that still solves a problem.</p>
          
          <div class="space-y-6 my-6">
             <div class="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <strong class="text-yellow-800 block mb-2">The Skateboard Analogy</strong>
                <p class="text-sm text-slate-600">You want to build a car. Don't build a wheel, then an axle, then a chassis. You have nothing usable until the end.</p>
                <p class="text-sm text-slate-600 mt-2">Instead, build a skateboard (V1). It moves. Then add a handle (Scooter V2). Then an engine (Motorcycle V3). At every stage, the user can <em>move</em>.</p>
             </div>

             <div class="p-4 bg-red-50 border border-red-200 rounded-lg">
                <strong class="text-red-800 block mb-2">Feature Creep</strong>
                <p class="text-sm text-slate-600">"We need dark mode." "We need AI chat." "We need crypto wallet connect."</p>
                <p class="text-sm text-slate-600 mt-2"><strong>NO.</strong> Cut until it hurts. If your app does one thing perfectly, it wins. If it does 10 things poorly, it dies.</p>
             </div>
          </div>

          <div class="mt-8 pt-6 border-t border-slate-200">
            <h4 class="text-slate-900 font-bold mb-2">🎓 Analysis: Shipping is a Feature</h4>
            <p class="text-sm text-slate-700 leading-relaxed">
              Users cannot give feedback on code that is sitting on your laptop. Shipping early exposes your bugs and your bad ideas faster.
              <br/><br/>
              <strong>The Conclusion:</strong> If you aren't embarrassed by V1, you launched too late.
            </p>
          </div>
        `
      },
      {
        id: 'less_mock_dev',
        title: 'Mock-Driven Development',
        duration: '8 min',
        xpReward: 600,
        resources: [
           { title: "JSON Placeholder (Fake API)", url: "https://jsonplaceholder.typicode.com/" }
        ],
        content: `
          <h3>Fake It Til You Make It</h3>
          <p>Waiting for the backend (Database) to be ready before building the frontend (UI) is slow. Smart developers use <strong>Mocks</strong>.</p>
          
          <div class="my-6 p-4 bg-slate-900 text-white rounded-lg">
             <strong class="block mb-2 text-green-400">The Hardcoded Database</strong>
             <p class="text-xs text-slate-400 mb-2">Instead of calling a server, just type the data into a file.</p>
             <code class="block text-xs font-mono bg-black p-2 rounded text-blue-300">
                const USERS = [<br/>
                &nbsp;&nbsp;{ id: 1, name: "Alice", role: "Admin" },<br/>
                &nbsp;&nbsp;{ id: 2, name: "Bob", role: "User" }<br/>
                ];
             </code>
             <p class="text-xs text-slate-400 mt-2">Now build your UI using this variable. It behaves exactly like a real app.</p>
          </div>
          
          <p class="text-sm text-slate-600"><strong>Why?</strong> You can show the client/user a working app on Day 1. When the real backend is ready weeks later, you just swap <code>USERS</code> for <code>fetch('/api/users')</code>.</p>

          <div class="mt-8 pt-6 border-t border-slate-200">
            <h4 class="text-slate-900 font-bold mb-2">🎓 Analysis: Decoupling</h4>
            <p class="text-sm text-slate-700 leading-relaxed">
              This app (AI Studio Masterclass) uses Mock Data. There is no server. It makes the app instant, offline-capable, and free to host.
              <br/><br/>
              <strong>The Conclusion:</strong> Don't block your creativity on infrastructure. Mock everything.
            </p>
          </div>
        `
      },
      {
        id: 'less_release_tracks',
        title: 'The Google Play Gauntlet',
        duration: '10 min',
        xpReward: 800,
        resources: [
           { title: "Play Console Release Tracks", url: "https://support.google.com/googleplay/android-developer/answer/9845334?hl=en" }
        ],
        content: `
          <h3>The 4 Stages of Launch</h3>
          <p>You cannot just hit "Publish" anymore. Google requires a rigorous testing lifecycle to prevent spam apps.</p>
          
          <div class="space-y-4 my-6">
             <div class="p-3 border-l-4 border-slate-500 bg-slate-50">
                <strong class="text-slate-800 block text-sm">1. Internal Testing (The Sandbox)</strong>
                <p class="text-xs text-slate-600">For you and your team (up to 100 people). Fast review. Use this to test if the APK actually installs.</p>
             </div>
             <div class="p-3 border-l-4 border-orange-500 bg-orange-50">
                <strong class="text-orange-800 block text-sm">2. Closed Testing (The 20-Tester Jail)</strong>
                <p class="text-xs text-slate-600"><strong>CRITICAL:</strong> Personal accounts MUST run a Closed Test with <strong>20 testers for 14 continuous days</strong> before you can apply for Production. You cannot skip this.</p>
             </div>
             <div class="p-3 border-l-4 border-blue-500 bg-blue-50">
                <strong class="text-blue-800 block text-sm">3. Open Testing (Public Beta)</strong>
                <p class="text-xs text-slate-600">Anyone can join from the store listing, but they can't leave public reviews (only feedback to you). Use this to stress-test your servers.</p>
             </div>
             <div class="p-3 border-l-4 border-green-500 bg-green-50">
                <strong class="text-green-800 block text-sm">4. Production (Gold)</strong>
                <p class="text-xs text-slate-600">The live store. Reviews count. Ratings count. This is "Launch Day".</p>
             </div>
          </div>

          <div class="mt-8 pt-6 border-t border-slate-200">
            <h4 class="text-slate-900 font-bold mb-2">🎓 Analysis: The Trust Barrier</h4>
            <p class="text-sm text-slate-700 leading-relaxed">
              Google introduced the 20-tester rule to stop "Shovelware" (garbage apps made by bots).
              <br/><br/>
              <strong>The Conclusion:</strong> Start finding your 20 testers NOW. Don't wait until the code is done. Join Discord communities or ask friends. Without them, you cannot launch.
            </p>
          </div>
        `
      }
    ]
  }
];

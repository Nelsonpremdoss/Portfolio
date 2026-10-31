/* All content for the portfolio page. index.html renders everything from this one object.
   Placeholders: any text field that starts with "TODO:" counts as empty. On the live site it is hidden
   (and a section or block with nothing filled in is hidden with its nav link). It shows as a dashed
   placeholder box only in draft view: on localhost, or with ?draft added to the URL.
   Search this file for "TODO:" to find every placeholder. */
const SITE = {
  /* "auto" = show placeholders only on localhost or with ?draft in the URL (add ?live to preview the public view locally); true = always; false = never */
  showPlaceholders: "auto",

  reels: [
    { id: "motion", title: "Motion Design Reel", src: "media/motion-reel.mp4?v=2", poster: "media/motion-reel.jpg", dur: "1:06",
      text: "Fullscreen 2D animation from long-form science explainers: orbits and spacetime, deep-sea creatures, dice physics, circuits and wind towers.",
      meta: ["After Effects", "Explainer animation"],
      credit: { role: "Motion graphics, concept and storyboard, editing", tools: "After Effects" } },
    { id: "ai", title: "AI Video Reel", src: "media/ai-reel.mp4?v=2", poster: "media/ai-reel.jpg", dur: "0:59",
      text: "Cinematic AI sequences from documentary explainers: a night-time truck crash, an 18th-century Paris theatre, hospital wards, anime-style study scenes and 3D medical shots.",
      meta: ["AI video", "Edit and grade"],
      credit: { role: "Concept and storyboard, script and direction, AI generation",
        tools: "GPT Image 2, Kling 3.0, Seedance 2.0", // TODO: add Higgsfield / Runway / Magnific / ElevenLabs here if used
        toolsNote: "TODO: list every AI tool shown in this reel (especially Higgsfield and ElevenLabs if used)" } },
  ],

  /* FINTECH & SHORT-FORM: the Markets by Zerodha pieces, in this order (by `media` id from brandwork below). */
  fintech: {
    order: ["markets-upi", "markets-ipo", "markets-rupee", "markets-milkymist", "markets-transformers", "markets-diamonds", "markets-night-shift", "markets-zombie"],
  },

  claude: {
    reel: { title: "Built with Claude: animation reel", src: "media/claude-reel.mp4?v=2", poster: "media/claude-reel.jpg", dur: "0:40",
      credit: { tools: "Claude Opus 5.5, Premiere Pro", turnaround: "1-day" } },
    films: [
      { title: "Wavelengths", credit: { role: "Concept and storyboard, Editing, Motion graphics, AI generation, Color grading, Sound design" }, src: "media/full/wavelengths/p0.mp4", parts: 5, poster: "media/claude-wavelengths.jpg", dur: "7:24",
        text: "The electromagnetic spectrum: waves that tighten as energy rises, choreographed to the narration." },
      { title: "Boiling Point", credit: { role: "Concept and storyboard, Editing, Motion graphics, AI generation, Color grading, Sound design" }, src: "media/full/boiling/p0.mp4", parts: 6, poster: "media/claude-boiling.jpg", dur: "6:11", yt: "https://www.youtube.com/watch?v=uuwJrVgSk8E", ytTitle: "Earth vs Mars: Who Cooks Faster",
        text: "Why water boils at 88 °C on a mountain: pressure, altitude and temperature in one evolving diagram." },
      { title: "EOS Satellite", credit: { role: "Concept and storyboard, Editing, Motion graphics, AI generation, Color grading, Sound design" }, src: "media/full/eos/p0.mp4", parts: 6, poster: "media/claude-eos.jpg", dur: "9:41", yt: "https://www.youtube.com/watch?v=16ffenU2fWA", ytTitle: "Everything You Know About Satellites Is Wrong",
        text: "Geosynchronous orbit explained with a rotating Earth, orbit dials and a satellite that holds its position." },
    ],
  },

  ai: [
    { title: "The Coma Patient: opening", src: "media/ai-coma-opener.mp4", poster: "media/ai-coma-opener.jpg", dur: "0:21",
      text: "A stormy night, a truck on a bridge, the crash. The cold open of a documentary about a coma patient.", yt: "https://www.youtube.com/watch?v=mmwBrd79oBo",
      credit: { role: "Concept and storyboard, script and direction, AI generation",
        tools: "Seedance 2.0 (multi-shot)", // TODO: add Higgsfield / Runway / Magnific / ElevenLabs here if used
        turnaround: "2 days" } },
    { title: "Paris theatre sequence", src: "media/ai-paris.mp4", poster: "media/ai-paris.jpg", dur: "0:52",
      text: "A candle-lit period theatre built entirely with AI for the history section of a projector explainer.", yt: "https://www.youtube.com/watch?v=EeDseEqFaKo&t=18s",
      credit: { role: "Concept and storyboard, script and direction, AI generation",
        tools: "Nano Banana Pro, Kling 3.0", // TODO: add Higgsfield / Runway / Magnific / ElevenLabs here if used
        turnaround: "2 days" } },
    { title: "Speed and the city", src: "media/ai-car-sequence.mp4", poster: "media/ai-car-sequence.jpg", dur: "0:10",
      text: "An illustrated driving sequence cut on the speedometer, from an explainer on how to study maths.", yt: "https://www.youtube.com/watch?v=nUzUT_vVMxc&t=223s",
      credit: { role: "Concept and storyboard, script and direction, AI generation",
        tools: "GPT Image 2, Kling 3.0", // TODO: add Higgsfield / Runway / Magnific / ElevenLabs here if used
        turnaround: "2 days" } },
    /* AI sequences from the Built with Claude films */
    { title: "Boiling Point: the Andes expedition", src: "media/ai-andes.mp4", poster: "media/ai-andes.jpg", dur: "0:48",
      text: "An animated mountain expedition that tries to cook potatoes at altitude, setting up why water boils below 100 °C.", yt: "https://www.youtube.com/watch?v=uuwJrVgSk8E&t=16s",
      credit: { role: "Concept and storyboard, Editing, AI generation, Color grading, Sound design",
        tools: "Kling" } },
    { title: "Wavelengths: Herschel finds infrared", src: "media/ai-herschel.mp4", poster: "media/ai-herschel.jpg", dur: "0:31",
      text: "William Herschel splits sunlight with a prism and finds heat beyond the red: a period recreation built shot by shot with AI.",
      credit: { role: "Concept and storyboard, Editing, AI generation, Color grading, Sound design", tools: "Kling" } },
  ],

  /* HOW I BUILD IT: one project as a five-step pipeline. `media` is an image (.jpg/.png/.webp) or a short silent loop (.mp4). */
  pipeline: {
    project: "TODO: name of the project shown in this pipeline",
    turnaround: "TODO: concept-to-final time for this project",
    steps: [
      { name: "Brief and script", tools: "TODO: tools used, if any", text: "TODO: one sentence on what was done", media: "TODO: media/pipeline/1-brief.jpg" },
      { name: "AI storyboard and style frames", tools: "Magnific / GPT Image 2 / Nano Banana Pro", text: "TODO: one sentence on what was done", media: "TODO: media/pipeline/2-storyboard.jpg" },
      { name: "AI asset generation", tools: "Higgsfield / Kling / Seedance", text: "TODO: one sentence on what was done", media: "TODO: media/pipeline/3-assets.mp4" },
      { name: "Edit, motion graphics and grade", tools: "Premiere Pro, After Effects", text: "TODO: one sentence on what was done", media: "TODO: media/pipeline/4-edit.mp4" },
      { name: "Voice, sound design and mix", tools: "ElevenLabs, Suno, Premiere Pro", text: "TODO: one sentence on what was done", media: "TODO: media/pipeline/5-sound.jpg" },
    ],
    breakdown: { title: "Raw AI output vs final", src: "TODO: media/pipeline/breakdown.mp4 (20–30 s split-screen, with sound)",
      preview: "TODO: media/pipeline/breakdown-loop.mp4 (6 s silent loop)", poster: "TODO: media/pipeline/breakdown.jpg", dur: "TODO: 0:25",
      text: "TODO: one line on what the split screen shows" },
  },

  /* FINISHING: colour before/after, raw vs mixed sound, static graphics, and one cut in every format */
  finishing: {
    colour: [
      { before: "media/finishing/grade-1-before.jpg", after: "media/finishing/grade-1-after.jpg", caption: "Wavelengths, 0:02: green-screen camera footage keyed onto the set and graded." },
      { before: "media/finishing/grade-2-before.jpg", after: "media/finishing/grade-2-after.jpg", caption: "Deep-sea explainer, 8:48: green-screen cockpit window replaced with the ocean and animated squid tentacles, matched to the set." },
      { before: "media/finishing/grade-3-before.jpg", after: "media/finishing/grade-3-after.jpg", caption: "Deep-sea explainer, 8:49: the submarine cabin plate, then the presenter keyed in front with the window and screens filled and the set softened for depth." },
    ],
    /* Raw vs mixed sound: same moment, both clips level-matched so you hear the mix, not the volume */
    sound: [
      { title: "Boiling Point, 4:02–4:22", raw: "media/finishing/sound-raw.mp3", mixed: "media/finishing/sound-mixed.mp3",
        note: "207 sound effects, 25 ambience beds and 6 music beds across the film, balanced under the voice." },
      { title: "Zerodha · UPI revolution, 0:29–0:49", raw: "media/finishing/sound-2-raw.mp3", mixed: "media/finishing/sound-2-mixed.mp3",
        note: "Raw field-recorder dialogue, cut to the same edit, vs the published reel with music and effects." },
      { title: "Wavelengths, 5:08–5:28", raw: "media/finishing/sound-3-raw.mp3", mixed: "media/finishing/sound-3-mixed.mp3",
        note: "Raw dialogue track vs the final film with music and sound effects under the voice." },
    ],
    graphics: [
      { img: "TODO: media/graphics/1.jpg", caption: "TODO: caption (icon set, overlay, lower third or layout)" },
      { img: "TODO: media/graphics/2.jpg", caption: "TODO: caption" },
      { img: "TODO: media/graphics/3.jpg", caption: "TODO: caption" },
      { img: "TODO: media/graphics/4.jpg", caption: "TODO: caption" },
      { img: "TODO: media/graphics/5.jpg", caption: "TODO: caption (optional)" },
      { img: "TODO: media/graphics/6.jpg", caption: "TODO: caption (optional)" },
    ],
    formats: {
      title: "TODO: name of the piece shown in three formats",
      cuts: [
        { ratio: "9:16", platform: "Reels / Shorts", src: "TODO: media/formats/vertical.mp4", poster: "TODO: media/formats/vertical.jpg" },
        { ratio: "1:1", platform: "Feed", src: "TODO: media/formats/square.mp4", poster: "TODO: media/formats/square.jpg" },
        { ratio: "16:9", platform: "YouTube / web", src: "TODO: media/formats/wide.mp4", poster: "TODO: media/formats/wide.jpg" },
      ],
    },
  },

  saas: [
    { title: "Mailmodo: The Marketing Stream", src: "media/saas-marketing-stream.mp4", poster: "media/saas-marketing-stream.jpg", dur: "1:03",
      text: "Launch film for a free library of marketing webinars, podcasts and expert talks.", yt: "https://www.youtube.com/watch?v=qIq0f-LQdT8",
      credit: { role: "Motion graphics, editing", tools: "After Effects", turnaround: "4 days" } },
    { title: "Mailmodo: AI Email Campaign Planner", src: "media/saas-ai-planner.mp4", poster: "media/saas-ai-planner.jpg", dur: "0:33",
      text: "Feature film for an AI tool that turns a website URL into a ready-to-use email strategy.", yt: "https://www.youtube.com/watch?v=SfW0BoywqFY",
      credit: { role: "Editing, motion graphics", tools: "After Effects", turnaround: "4 days" } },
  ],

  /* Explainers play in the site's player through YouTube's embed (no link shown); `t` (seconds) starts them where the animation begins. */
  explainers: [
    { title: "I Made a Projector With Just ₹100", thumb: "media/thumb-projector.jpg", pv: "ex-projector", id: "EeDseEqFaKo", role: "Concept and storyboard, Editing, Motion graphics, AI generation", t: 18, tag: "AI + motion", turnaround: "6 days" },
    { title: "The Coma Patient Who Could Hear Everything", thumb: "media/thumb-coma.jpg", pv: "ex-coma", id: "mmwBrd79oBo", role: "Concept and storyboard, Editing, Motion graphics, AI generation", tag: "AI film", turnaround: "6 days" },
    { title: "Stop Solving More Sums. Do This Instead.", thumb: "media/thumb-sums.jpg", pv: "ex-sums", id: "nUzUT_vVMxc", role: "Concept and storyboard, Editing, Motion graphics, AI generation", t: 171, tag: "AI + motion", turnaround: "6 days" },
    { title: "What If We Lost the Sun Today?", thumb: "media/thumb-gravity.jpg", pv: "ex-gravity", id: "Hs0qir_VCH8", role: "Concept and storyboard, Editing, Motion graphics, AI generation", tag: "Motion + AI", turnaround: "6 days" },
    { title: "3 Formulas That Built Modern Civilization", thumb: "media/thumb-pythagoras.jpg", pv: "ex-pythagoras", id: "FUX_a0FTZTY", role: "Concept and storyboard, Editing, Motion graphics, AI generation", t: 103, tag: "Motion", turnaround: "6 days" },
    { title: "Can You Actually Hack the Dice?", thumb: "media/thumb-dice.jpg", pv: "ex-dice", id: "trREQZaVkFs", role: "Concept and storyboard, Editing, Motion graphics", tag: "Motion", turnaround: "6 days" },
    { title: "What's Hiding in the Deepest Parts of the Ocean?", thumb: "media/thumb-submarine.jpg", pv: "ex-ocean", id: "jdJEH0iRPjs", role: "Concept and storyboard, Editing, Motion graphics, AI generation", tag: "Motion", turnaround: "6 days" },
    { title: "Can a ₹50 DIY AC Beat a ₹50,000 AC?", thumb: "media/thumb-zero-ac.jpg", pv: "ex-ac", id: "LctWvA1e1dU", role: "Concept and storyboard, Editing, Motion graphics, AI generation", tag: "Motion", turnaround: "6 days" },
  ],

  services: [
    ["Explainer videos", "Long-form YouTube explainers from script to final cut: pacing, fullscreen animation, b-roll and on-screen type that keep a 10-minute topic moving."],
    ["SaaS and product animation", "Launch films and feature walkthroughs built from your UI: animated screens, kinetic type and a clear story about what the product does."],
    ["AI video production", "Cinematic AI sequences for stories that can't be filmed: historical scenes, recreations and concept shots, generated, edited and graded to sit inside live footage."],
    ["Motion graphics", "2D and 2.5D animation, diagrams, data and title design in After Effects."],
    ["Short-form editing", "Reels, Shorts and TikTok edits with hooks, captions, sound design and pacing for the first three seconds."],
    ["Trailer editing", "Trailers and teasers that build tension through structure, music and sound."],
    ["Color grading", "Consistent looks across mixed sources, from camera footage to AI-generated shots."],
    ["Sound design", "SFX, music edits and mixes that make motion graphics and AI sequences feel physical."],
  ],

  /* A tool written as { name, todo: "TODO: …" } is unconfirmed: it shows only in draft view until you replace it with the plain name. */
  tools: [
    { name: "Edit and motion", adobe: true, items: ["Adobe Premiere Pro", "Adobe After Effects", "Adobe Photoshop",
      "Adobe Illustrator"] },
    { name: "AI video", items: ["Kling 3.0", "Seedance 2.5", "Google Omni", "Wan", "Runway", "Higgsfield", "HeyGen", "Topaz Video AI"] },
    { name: "AI image and animation", items: ["GPT Image 2", "Nano Banana Pro", "Seedream", "Midjourney", "Ideogram",
      "Adobe Firefly", "Magnific AI", "Claude Opus 5.5"] },
    { name: "AI audio", items: ["ElevenLabs", "Suno", "Adobe Podcast Enhance"] },
  ],

  /* Brand work: one folder per brand. Previews are short silent loops; `full` is what plays on the site (a file, or "yt:<id>" for YouTube's embedded player).
     `url` keeps the original post for reference; it isn't shown on the page.
     Optional per piece: results, tools, turnaround (hook only where you wrote the script). Empty or "TODO:" values are hidden on the live site. */
  brandwork: [
    { brand: "Markets by Zerodha", logo: "logos/zerodha.svg", cover: "markets-rupee", items: [
      { type: "AI animation", title: "Why the rupee keeps falling", media: "markets-rupee", full: "media/brand/full/markets-rupee.mp4", dur: "0:57", v: true, role: "Concept and storyboard, Editing, AI generation, Sound design",
        tools: "", // TODO: add Higgsfield / Runway / Magnific / ElevenLabs here if used
        results: "TODO: views or saves (optional)", turnaround: "4 days" },
      { type: "Motion graphics", title: "Milky Mist IPO", media: "markets-milkymist", full: "media/brand/full/markets-milkymist.mp4", dur: "1:25", v: true, role: "Concept and storyboard, Editing, Motion graphics, Color grading, Sound design",
        results: "TODO: views or saves (optional)", turnaround: "3 days" },
      { type: "Short-form", title: "IPO investing pitfalls", media: "markets-ipo", full: "media/brand/full/markets-ipo.mp4", dur: "1:06", v: true, url: "https://www.instagram.com/reel/DJEHeleAX4W/", role: "Concept and storyboard, Editing, Motion graphics, Color grading, Sound design",
        results: "TODO: views or saves (optional)", turnaround: "1 day" },
      { type: "Short-form", title: "Is the transformer business ready to explode?", media: "markets-transformers", full: "media/brand/full/markets-transformers.mp4", dur: "1:21", v: true, url: "https://www.instagram.com/reel/DUsTIQ9D0OF/", role: "Concept and storyboard, Editing, Motion graphics, Color grading, Sound design",
        results: "TODO: views or saves (optional)", turnaround: "1 day" },
      { type: "Short-form", title: "The De Beers diamond myth", media: "markets-diamonds", full: "media/brand/full/markets-diamonds.mp4", dur: "1:20", v: true, url: "https://www.instagram.com/reel/DNiOHZzvXTS/", role: "Concept and storyboard, Editing, Motion graphics, Color grading, Sound design",
        results: "TODO: views or saves (optional)", turnaround: "1 day" },
      { type: "Short-form", title: "India's UPI revolution", media: "markets-upi", full: "media/brand/full/markets-upi.mp4", dur: "1:04", v: true, url: "https://www.instagram.com/reel/DMuqcxUvi_z/", role: "Concept and storyboard, Editing, Motion graphics, Color grading, Sound design",
        results: "TODO: views or saves (optional)", turnaround: "1 day" },
      { type: "Short-form", title: "Women on the night shift", media: "markets-night-shift", full: "media/brand/full/markets-night-shift.mp4", dur: "1:31", v: true, url: "https://www.instagram.com/reel/DOLpeR_j2Tm/", role: "Concept and storyboard, Editing, Motion graphics, Color grading, Sound design",
        results: "TODO: views or saves (optional)", turnaround: "1 day" },
      { type: "Short-form", title: "The attack of the zombie firms", media: "markets-zombie", full: "media/brand/full/markets-zombie.mp4", dur: "1:16", v: true, url: "https://www.instagram.com/reel/DOIrtvCDxIY/", role: "Concept and storyboard, Editing, Motion graphics, Color grading, Sound design",
        results: "TODO: views or saves (optional)", turnaround: "1 day" },
    ] },
    { brand: "Coca-Cola", sub: "Charged", logo: "logos/coca-cola.svg", cover: "charged-1", items: [
      { type: "Short-form", title: "Street vox pop", media: "charged-1", full: "media/brand/full/charged-1.mp4", dur: "1:10", v: true, url: "https://www.instagram.com/reel/DaCLdXyxWlO/", role: "Concept and storyboard, Editing, AI generation, Color grading, Sound design",
        turnaround: "1 day" },
      { type: "Short-form", title: "Street vox pop, part two", media: "charged-2", full: "media/brand/full/charged-2.mp4", dur: "1:21", v: true, url: "https://www.instagram.com/reel/DXY3SJYjY22/", role: "Concept and storyboard, Editing, AI generation, Color grading, Sound design",
        turnaround: "1 day" },
    ] },
    { brand: "Lumio", logo: "logos/lumio.svg", cover: "lumio-aura", items: [
      { type: "Brand film", title: "Lumio Aura 5: HiFi Sound, Bar None", media: "lumio-aura", full: "yt:X2QHRhWtY-I", dur: "8:59", url: "https://www.youtube.com/watch?v=X2QHRhWtY-I", role: "Concept and storyboard, Editing, Motion graphics" },
    ] },
    { brand: "Zoho", sub: "Builders Central", logo: "logos/zoho.svg", cover: "zoho-builders", items: [
      { type: "Brand film", title: "SaaS Is Dead. Build This Instead.", media: "zoho-builders", full: "yt:NVPWYTZZpnI", dur: "7:47", url: "https://www.youtube.com/watch?v=NVPWYTZZpnI", role: "Concept and storyboard, Editing, Motion graphics" },
    ] },
    { brand: "Royal Challengers Bengaluru", sub: "RCB Kannada", logo: "logos/rcb.png", tall: true, cover: "rcb-podcast", items: [
      { type: "Podcast edit", title: "bigbasket now Podcast with Virat Kohli", media: "rcb-podcast", full: "media/brand/full/rcb-podcast.mp4", dur: "3:01", v: true, url: "https://www.instagram.com/reel/DEUfF5lS4mP/", turnaround: "1 day" },
      { type: "Feature video", title: "Inside the RCB auction table", media: "rcb-feature", full: "media/brand/full/rcb-feature.mp4", dur: "2:49", url: "https://www.instagram.com/reel/DDCdBJSMygf/", turnaround: "1 day" },
    ] },
    { brand: "Acko", sub: "Health insurance", logo: "logos/acko.png", cover: "acko-unlimited", items: [
      { type: "Short-form", title: "Unlimited health cover, compared", media: "acko-unlimited", full: "media/brand/full/acko-unlimited.mp4", dur: "2:24", v: true,
        role: "TODO: your role on this reel", turnaround: "TODO: turnaround" },
      { type: "Short-form", title: "If you have old parents, these are a must", media: "acko-parents", full: "media/brand/full/acko-parents.mp4", dur: "1:20", v: true,
        role: "TODO: your role on this reel", turnaround: "TODO: turnaround" },
    ] },
    { brand: "Vi", logo: "logos/vi.svg", cover: "vi-score", items: [
      { type: "Short-form", title: "Vi Score review reel", media: "vi-score", full: "media/brand/full/vi-score.mp4", dur: "0:59", v: true, url: "https://www.instagram.com/reel/DT8Aun7kjVV/", role: "Color grading, Sound design", turnaround: "1 day" },
    ] },
  ],

  /* Logo strip, in this order. Put a logo file at logos/<slug>.svg or .png and set `logo`; without one the brand name is shown. */
  brands: [
    { name: "Zerodha", slug: "zerodha", logo: "logos/zerodha.svg" },
    { name: "Coca-Cola", slug: "coca-cola", logo: "logos/coca-cola.svg" },
    { name: "ALLEN", slug: "allen", logo: "logos/allen.svg", note: "The Third Idiot YouTube channel", links: [{ label: "Channel", url: "https://www.youtube.com/@thethirdidiot" }] },
    { name: "RCB", slug: "rcb", logo: "logos/rcb.png", tall: true },
    { name: "Acko", slug: "acko", logo: "logos/acko.png" },
    { name: "Nothing", also: true, slug: "nothing", logo: "logos/nothing.svg" },
    { name: "Zoho", slug: "zoho", logo: "logos/zoho.svg", size: "mid" },
    { name: "Cleartrip", also: true, slug: "cleartrip", logo: "logos/cleartrip.svg" },
    { name: "Licious", also: true, slug: "licious", logo: "logos/licious.png", size: "mid" },
    { name: "Peakst8", also: true, slug: "peakst8", logo: "logos/peakst8.svg" },
    { name: "Vi", slug: "vi", logo: "logos/vi.svg", size: "mid" },
    { name: "Lumio", slug: "lumio", logo: "logos/lumio.svg" },
    { name: "Mailmodo", slug: "mailmodo", logo: "logos/mailmodo.svg", note: "SaaS launch and feature animation" },
  ],

  /* type "copy" shows the value as text with a Copy button; type "link" opens a site */
  contact: [
    { type: "copy", label: "Email", value: "nelsonpremdoss.e@gmail.com" },
    { type: "copy", label: "Phone / WhatsApp", value: "+91 99943 17417" },
    { type: "link", label: "LinkedIn", value: "in/nelsonpremdosse", url: "https://www.linkedin.com/in/nelsonpremdosse" },
  ],
};

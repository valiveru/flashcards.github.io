const adjectives = [
    "Affectionate",
    "Agreeable",
    "Amiable",
    "Bright",
    "Charming",
    "Creative",
    "Determined",
    "Energetic",
    "Friendly",
    "Generous",
    "Imaginative",
    "Polite",
    "Likable",
    "Gregarious",
    "Diplomatic",
    "Sincere",
    "Helpful",
    "Kind",
    "Hardworking",
    "Diligent",
    "Patient",
    "Dynamic",
    "Loyal",
    "Brave",
    "Sensible",
    "Sincere",
    "Thoughtful",
    "Warmhearted",
    "Proficient",
    "Powerful",
    "Persistent",
    "Faithful",
    "Optimistic",
    "Plucky",
    "Philosophical",
    "Humorous",
    "Fearless",
    "Considerate",
    "Courageous",
    "Marvelous",
    "Capable",
    "Accomplished",
    "Knowledgeable",
    "Adept",
    "Expert",
    "Engaging",
    "Amazing",
    "Awesome",
    "Blithesome",
    "Excellent",
    "Fabulous",
    "Fantastic",
    "Favorable",
    "Fortuitous",
    "Incredible",
    "Unique",
    "Mirthful",
    "Outstanding",
    "Perfect",
    "Remarkable",
    "Spectacular",
    "Splendid",
    "Stellar",
    "Stupendous",
    "Super",
    "Upbeat",
    "Stunning",
    "Wondrous",
    "Flexible",
    "Independent",
    "Insightful",
    "Productive",
    "Adventurous",
    "Articulate",
    "Charismatic",
    "Competitive",
    "Confident",
    "Devoted",
    "Educated",
    "Inquisitive",
    "Organized",
    "Relaxed",
    "Responsible",
    "Technological",
    "Resourceful",
    "Ambitious",
    "Approachable",
    "Focused",
    "Honest",
    "Efficient",
    "Personable",
]

const substantives = [
    "administrator",
    "admiral",
    "aristocrat",
    "archduke",
    "baron",
    "captain",
    "bishop",
    "caliph",
    "chief",
    "consul",
    "czar",
    "commodore",
    "director",
    "doge",
    "duke",
    "emir",
    "emperor",
    "excellency",
    "eminence",
    "executive",
    "general",
    "guru",
    "imperator",
    "khan",
    "noble",
    "oligarch",
    "officer",
    "provost",
    "principal",
    "ruler",
    "tycoon",
    "sheik",
    "senator",
    "skipper",
    "superintendent",
    "shah",
    "sultan",
    "president",
]

const rand = function(arr) {
    return arr[arr.length * Math.random() | 0]
}

const generateName = function() {
    return `user-${rand(adjectives)}-${rand(substantives)}`.toLowerCase()
}

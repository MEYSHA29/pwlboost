export interface Game {
  id: string
  name: string
  slug: string
  category: string
  image: string
  rating: number
  reviews: number
  services: Service[]
  description: string
}

export interface Service {
  id: string
  name: string
  description: string
  price: number
  originalPrice?: number
  icon: string
}

export interface Testimonial {
  id: string
  name: string
  avatar: string
  rating: number
  text: string
  date: string
  game: string
}

export const games: Game[] = [
  {
    id: "1",
    name: "World of Warcraft",
    slug: "world-of-warcraft",
    category: "MMORPG",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop",
    rating: 4.9,
    reviews: 2847,
    description: "The world's most popular MMORPG. Boost your character, get gold, or buy a high-level account.",
    services: [
      { id: "wow-1", name: "Character Boost", description: "Level 1-80 fast boost by pro players", price: 49.99, originalPrice: 79.99, icon: "Zap" },
      { id: "wow-2", name: "Gold Package", description: "Safe gold delivery on any server", price: 19.99, originalPrice: 29.99, icon: "Coins" },
      { id: "wow-3", name: "Raid Carry", description: "Full raid clear with loot priority", price: 89.99, originalPrice: 129.99, icon: "Sword" },
      { id: "wow-4", name: "PvP Rating", description: "Arena rating boost to your desired rank", price: 59.99, originalPrice: 89.99, icon: "Trophy" },
    ]
  },
  {
    id: "2",
    name: "Destiny 2",
    slug: "destiny-2",
    category: "FPS",
    image: "https://images.unsplash.com/photo-1552820728-8b83bb6b2b0a?w=400&h=300&fit=crop",
    rating: 4.8,
    reviews: 1923,
    description: "Epic looter shooter. Get exotic weapons, raid completions, and power level boosts.",
    services: [
      { id: "d2-1", name: "Power Level Boost", description: "Fast power level increase to cap", price: 39.99, originalPrice: 59.99, icon: "Zap" },
      { id: "d2-2", name: "Raid Completion", description: "Full raid clear with guaranteed drops", price: 29.99, originalPrice: 44.99, icon: "Sword" },
      { id: "d2-3", name: "Exotic Farm", description: "Get any exotic weapon or armor", price: 24.99, originalPrice: 39.99, icon: "Star" },
      { id: "d2-4", name: "Trials Flawless", description: "Flawless Trials of Osiris run", price: 34.99, originalPrice: 49.99, icon: "Trophy" },
    ]
  },
  {
    id: "3",
    name: "Final Fantasy XIV",
    slug: "final-fantasy-xiv",
    category: "MMORPG",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=300&fit=crop",
    rating: 4.9,
    reviews: 3156,
    description: "The critically acclaimed MMORPG. Story skips, gil, and ultimate raid clears.",
    services: [
      { id: "ff14-1", name: "Story Skip", description: "Skip to Endwalker or Dawntrail", price: 59.99, originalPrice: 89.99, icon: "Zap" },
      { id: "ff14-2", name: "Gil Package", description: "Safe gil delivery on any datacenter", price: 14.99, originalPrice: 24.99, icon: "Coins" },
      { id: "ff14-3", name: "Ultimate Clear", description: "Any ultimate raid completion", price: 149.99, originalPrice: 199.99, icon: "Sword" },
      { id: "ff14-4", name: "Leveling Boost", description: "1-90 fast leveling service", price: 44.99, originalPrice: 69.99, icon: "TrendingUp" },
    ]
  },
  {
    id: "4",
    name: "Apex Legends",
    slug: "apex-legends",
    category: "Battle Royale",
    image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=400&h=300&fit=crop",
    rating: 4.7,
    reviews: 1567,
    description: "Fast-paced battle royale. Rank boosting, badge farming, and account leveling.",
    services: [
      { id: "apex-1", name: "Rank Boost", description: "Boost to Diamond, Master, or Predator", price: 69.99, originalPrice: 99.99, icon: "Zap" },
      { id: "apex-2", name: "Badge Farm", description: "Get any badge including 4K/20 bomb", price: 49.99, originalPrice: 74.99, icon: "Star" },
      { id: "apex-3", name: "Account Leveling", description: "Fast account level increase", price: 29.99, originalPrice: 44.99, icon: "TrendingUp" },
      { id: "apex-4", name: "Battle Pass", description: "Full battle pass completion", price: 39.99, originalPrice: 59.99, icon: "Trophy" },
    ]
  },
  {
    id: "5",
    name: "League of Legends",
    slug: "league-of-legends",
    category: "MOBA",
    image: "https://images.unsplash.com/photo-1542751110-97427bbecf20?w=400&h=300&fit=crop",
    rating: 4.8,
    reviews: 4521,
    description: "The world's biggest MOBA. ELO boost, placement matches, and coaching.",
    services: [
      { id: "lol-1", name: "ELO Boost", description: "Rank up fast with pro players", price: 54.99, originalPrice: 79.99, icon: "Zap" },
      { id: "lol-2", name: "Placement Matches", description: "10-0 placement games guarantee", price: 34.99, originalPrice: 49.99, icon: "Trophy" },
      { id: "lol-3", name: "Coaching", description: "1-on-1 coaching with Challenger players", price: 24.99, originalPrice: 39.99, icon: "Users" },
      { id: "lol-4", name: "Account Leveling", description: "Fast level 30+ account", price: 19.99, originalPrice: 29.99, icon: "TrendingUp" },
    ]
  },
  {
    id: "6",
    name: "Valorant",
    slug: "valorant",
    category: "FPS",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop",
    rating: 4.8,
    reviews: 2134,
    description: "Tactical FPS by Riot Games. Rank boosting, placement games, and agent unlocks.",
    services: [
      { id: "val-1", name: "Rank Boost", description: "Boost to Immortal or Radiant", price: 59.99, originalPrice: 89.99, icon: "Zap" },
      { id: "val-2", name: "Placement Games", description: "High rank placement guarantee", price: 29.99, originalPrice: 44.99, icon: "Trophy" },
      { id: "val-3", name: "Agent Unlock", description: "Unlock all agents fast", price: 19.99, originalPrice: 29.99, icon: "Star" },
      { id: "val-4", name: "Battle Pass", description: "Full battle pass completion", price: 34.99, originalPrice: 49.99, icon: "TrendingUp" },
    ]
  },
  {
    id: "7",
    name: "Genshin Impact",
    slug: "genshin-impact",
    category: "RPG",
    image: "https://images.unsplash.com/photo-1612287230217-8c7c6c170b90?w=400&h=300&fit=crop",
    rating: 4.7,
    reviews: 1876,
    description: "Open-world action RPG. Primogems, account leveling, and artifact farming.",
    services: [
      { id: "gen-1", name: "Primogems", description: "Safe primogem top-up", price: 14.99, originalPrice: 24.99, icon: "Coins" },
      { id: "gen-2", name: "Account Leveling", description: "Adventure rank boost", price: 34.99, originalPrice: 49.99, icon: "TrendingUp" },
      { id: "gen-3", name: "Artifact Farm", description: "Perfect artifact set farming", price: 44.99, originalPrice: 69.99, icon: "Star" },
      { id: "gen-4", name: "Spiral Abyss", description: "Full 36-star clear", price: 24.99, originalPrice: 39.99, icon: "Trophy" },
    ]
  },
  {
    id: "8",
    name: "Elden Ring",
    slug: "elden-ring",
    category: "RPG",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400&h=300&fit=crop",
    rating: 4.9,
    reviews: 2341,
    description: "FromSoftware's masterpiece. Runes, boss kills, and full game completion.",
    services: [
      { id: "er-1", name: "Runes Package", description: "Millions of runes delivered", price: 19.99, originalPrice: 29.99, icon: "Coins" },
      { id: "er-2", name: "Boss Kill", description: "Any boss kill service", price: 14.99, originalPrice: 24.99, icon: "Sword" },
      { id: "er-3", name: "Full Completion", description: "100% game completion", price: 199.99, originalPrice: 299.99, icon: "Trophy" },
      { id: "er-4", name: "Item Farm", description: "Any weapon or armor farm", price: 24.99, originalPrice: 39.99, icon: "Star" },
    ]
  },
]

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Second_son",
    avatar: "S",
    rating: 5,
    text: "Ordered late at night, still got fast response and delivery. You guys are solid.",
    date: "1 day ago",
    game: "World of Warcraft"
  },
  {
    id: "2",
    name: "SilvaSurfer",
    avatar: "S",
    rating: 5,
    text: "Got an account, details came almost instantly. Logged in without any issues.",
    date: "1 day ago",
    game: "Destiny 2"
  },
  {
    id: "3",
    name: "DomiJazzman",
    avatar: "D",
    rating: 5,
    text: "Good prices compared to other sites I checked. Delivery was quick and matched the description perfectly.",
    date: "3 days ago",
    game: "Final Fantasy XIV"
  },
  {
    id: "4",
    name: "Benjamin Viera",
    avatar: "B",
    rating: 5,
    text: "Bought before, buying again. Fast delivery and helpful support every time.",
    date: "3 days ago",
    game: "League of Legends"
  },
  {
    id: "5",
    name: "forbidden_fearz",
    avatar: "F",
    rating: 5,
    text: "I've tried another marketplace before, but PWLboost felt more organized and professional. Good experience overall.",
    date: "3 days ago",
    game: "Apex Legends"
  },
  {
    id: "6",
    name: "Kiramarazzi",
    avatar: "K",
    rating: 5,
    text: "This was my first order, but I got clear instructions from support agent. Everyone was patient and helpful.",
    date: "4 days ago",
    game: "Valorant"
  },
  {
    id: "7",
    name: "275Beamer",
    avatar: "2",
    rating: 5,
    text: "PWLboost has fair prices and fast delivery. That's really all I need.",
    date: "4 days ago",
    game: "Genshin Impact"
  },
  {
    id: "8",
    name: "Atro",
    avatar: "A",
    rating: 5,
    text: "Everything went exactly as promised.",
    date: "4 days ago",
    game: "Elden Ring"
  },
  {
    id: "9",
    name: "summi",
    avatar: "S",
    rating: 5,
    text: "These players are really the best in the game and always overdeliver, thank you very much!",
    date: "5 days ago",
    game: "World of Warcraft"
  },
  {
    id: "10",
    name: "mugsh0t",
    avatar: "M",
    rating: 5,
    text: "Friendly and helpful support, quick responses and secure transfer process. I would say it's a trustworthy shop.",
    date: "6 days ago",
    game: "Destiny 2"
  },
  {
    id: "11",
    name: "BUBBA",
    avatar: "B",
    rating: 5,
    text: "This is my second time buying from PWLboost and once again everything went smoothly. Fast communication and no issues with login.",
    date: "6 days ago",
    game: "Final Fantasy XIV"
  },
  {
    id: "12",
    name: "QT314",
    avatar: "Q",
    rating: 5,
    text: "No delays, no drama. Pro player worked perfectly.",
    date: "6 days ago",
    game: "League of Legends"
  },
]

export const features = [
  {
    title: "Truly 24/7 Service",
    description: "Our support team and pro players are available around the clock. No matter your timezone, we're here.",
    icon: "Clock",
  },
  {
    title: "Money-Back Guarantee",
    description: "Not satisfied? Get a full refund. We stand behind every service we provide.",
    icon: "Shield",
  },
  {
    title: "Safe & Secure",
    description: "VPN protection, offline mode, and manual service only. Your account safety is our priority.",
    icon: "Lock",
  },
  {
    title: "Pro Players Only",
    description: "Every booster is verified, tested, and ranked among the top players in their game.",
    icon: "Award",
  },
  {
    title: "Live Updates",
    description: "Track your order in real-time. Chat with your booster and get progress screenshots.",
    icon: "MessageCircle",
  },
  {
    title: "Best Prices",
    description: "We monitor the market daily to ensure you get the best deal without compromising quality.",
    icon: "Tag",
  },
]

export const stats = [
  { value: "50K+", label: "Happy Customers" },
  { value: "148+", label: "Games Supported" },
  { value: "4.9", label: "Average Rating" },
  { value: "24/7", label: "Support Available" },
]

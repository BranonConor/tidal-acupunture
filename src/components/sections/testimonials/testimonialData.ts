export interface Testimonial {
  id: string;
  name: string;
  condition: string;
  category: string;
  quote: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah M.",
    condition: "Chronic Back Pain",
    category: "Pain Relief",
    quote:
      "After years of dealing with lower back pain, I finally found lasting relief at TIDAL. Dr. Eusebio took the time to understand my lifestyle and crafted a treatment plan that actually worked. I'm back to hiking without pain!",
    rating: 5,
  },
  {
    id: "2",
    name: "James T.",
    condition: "Anxiety & Insomnia",
    category: "Stress & Anxiety",
    quote:
      "I was skeptical about acupuncture for anxiety, but after just three sessions I noticed a dramatic shift. I'm sleeping through the night for the first time in years. The whole experience is so calming.",
    rating: 5,
  },
  {
    id: "3",
    name: "Michelle K.",
    condition: "Fertility Support",
    category: "Women's Health",
    quote:
      "TIDAL supported me through my fertility journey with such compassion and expertise. The combination of acupuncture and holistic guidance made all the difference. I'm forever grateful.",
    rating: 5,
  },
  {
    id: "4",
    name: "David R.",
    condition: "Sports Injury Recovery",
    category: "Pain Relief",
    quote:
      "As a runner, I was devastated by my knee injury. The cupping and acupuncture combo got me back on the trails faster than I ever expected. Dr. Eusebio genuinely cares about getting you back to what you love.",
    rating: 5,
  },
  {
    id: "5",
    name: "Priya S.",
    condition: "Migraines",
    category: "Pain Relief",
    quote:
      "I went from 3-4 migraines a week to maybe one a month. The relief has been life-changing. The clinic itself is beautiful and peaceful — you feel better the moment you walk in.",
    rating: 5,
  },
  {
    id: "6",
    name: "Lauren B.",
    condition: "Hormonal Imbalance",
    category: "Women's Health",
    quote:
      "After getting off birth control, my hormones were all over the place. TIDAL helped me regulate naturally. I feel more like myself than I have in a decade.",
    rating: 5,
  },
  {
    id: "7",
    name: "Marcus W.",
    condition: "Work-Related Stress",
    category: "Stress & Anxiety",
    quote:
      "My weekly sessions at TIDAL are the highlight of my self-care routine. The tension I carry from work just melts away. It's not just treatment — it's a reset for my whole nervous system.",
    rating: 5,
  },
  {
    id: "8",
    name: "Angela C.",
    condition: "Cosmetic Acupuncture",
    category: "Cosmetic",
    quote:
      "I tried cosmetic acupuncture on a whim and was blown away by the results. My skin has this glow that no serum has ever given me. Plus, I leave each session feeling deeply relaxed.",
    rating: 5,
  },
  {
    id: "9",
    name: "Tom H.",
    condition: "Digestive Issues",
    category: "General Wellness",
    quote:
      "Chronic bloating and stomach issues plagued me for years. After a few months of consistent treatment at TIDAL, my digestion is the best it's ever been. Wish I'd tried this sooner.",
    rating: 5,
  },
  {
    id: "10",
    name: "Nina F.",
    condition: "Postpartum Recovery",
    category: "Women's Health",
    quote:
      "The postpartum period was so much harder than I expected. TIDAL helped me recover physically and emotionally. Dr. Eusebio made me feel seen and supported during a really vulnerable time.",
    rating: 5,
  },
  {
    id: "11",
    name: "Chris L.",
    condition: "Shoulder Pain",
    category: "Pain Relief",
    quote:
      "Years of desk work wrecked my shoulders. After 6 sessions combining acupuncture and cupping, I have full range of motion again. The improvement was noticeable after the very first visit.",
    rating: 5,
  },
  {
    id: "12",
    name: "Jasmine A.",
    condition: "Skin Health",
    category: "Cosmetic",
    quote:
      "Between the microneedling and cosmetic acupuncture, my acne scars have faded significantly. I finally feel confident going makeup-free. The results speak for themselves!",
    rating: 5,
  },
];

export const categories = [
  "All",
  "Pain Relief",
  "Stress & Anxiety",
  "Women's Health",
  "Cosmetic",
  "General Wellness",
];

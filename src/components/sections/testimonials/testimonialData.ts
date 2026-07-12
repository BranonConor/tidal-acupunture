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
    name: "Jim",
    condition: "Lower Back Pain",
    category: "Pain Relief",
    quote:
      "I was new to acupuncture in 2025 and was referred to Tidal Acupuncture, specifically Dr. Rachel. My overall experience was excellent not just in results for helping me to manage debilitating lower back pain, but also the level of explanation, professionalism and considerate nature she brings to the table. She is a great listener as well which matters. Thank you Dr. Rachel!",
    rating: 5,
  },
  {
    id: "2",
    name: "Michael",
    condition: "Back Pain & Mental Health",
    category: "Pain Relief",
    quote:
      "I began seeing Dr. Rachel at Tidal Acupuncture for lower right back pain that stemmed from my time serving in the military. Many practitioners focus only on the immediate issue a patient comes in for, but Dr. Rachel treats the entire body — and mind. She genuinely cares about her patients, listens closely to their needs, and tailors each session with thoughtful intention and compassion. Her gentle, calming demeanor creates an environment where healing happens naturally. Through her treatments, I experienced more progress and relief than I ever imagined possible with acupuncture not only for my back pain, but also for my mental health. I couldn't be happier with my experience and would highly recommend Dr. Rachel to anyone seeking genuine, whole-body healing from a practitioner who truly cares.",
    rating: 5,
  },
  {
    id: "3",
    name: "Sarah",
    condition: "Anxiety & Sleep Issues",
    category: "Stress & Anxiety",
    quote:
      "Dr. Rachel is the best! I had debilitating anxiety and sleep issues due to my high stress job. Her treatments always leave me feeling light and relaxed.",
    rating: 5,
  },
  {
    id: "4",
    name: "Karla",
    condition: "General Wellness",
    category: "General Wellness",
    quote:
      "My family and I strongly dislike needles, but Dr. Eusebio's calm demeanor and clear explanation made us feel at ease every time. I always left her office feeling more relaxed and in a better state of mind.",
    rating: 5,
  },
  {
    id: "5",
    name: "Kathryn",
    condition: "Menstrual Cramps & Digestion",
    category: "Women's Health",
    quote:
      "I started seeing Dr. Rachel for painful menstrual cramps and digestive issues, and I couldn't be happier with my experience. From my very first appointment, she was incredibly attentive, thorough, and took the time to truly listen to my concerns. Thanks to her care, my symptoms improved significantly, and she also helped me better understand my body and the importance of prioritizing my health. I highly recommend Dr. Rachel.",
    rating: 5,
  },
  {
    id: "6",
    name: "Lauren",
    condition: "Pregnancy Support",
    category: "Women's Health",
    quote:
      "Dr. Rachel treated me prior to my pregnancy and I continued to receive treatments throughout my pregnancy. It was the highlight of my week and I always felt so much better afterwards. Dr. Rachel is so kind and gentle with her treatments, I am incredibly grateful I found her.",
    rating: 5,
  },
  {
    id: "7",
    name: "Taylor",
    condition: "Chronic Back Pain",
    category: "Pain Relief",
    quote:
      "As a nurse, I'm on my feet for long shifts, and chronic back pain had become part of my daily life. After just a few treatments with Dr. Rachel, I noticed a significant improvement in both my pain and mobility. She is knowledgeable, compassionate, and skilled. I highly recommend Tidal Acupuncture to anyone dealing with chronic pain.",
    rating: 5,
  },
];

export const categories = [
  "All",
  "Pain Relief",
  "Stress & Anxiety",
  "Women's Health",
  "General Wellness",
];

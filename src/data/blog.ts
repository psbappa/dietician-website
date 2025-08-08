export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  description?: string; // Optional field for additional description
  date: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "healthy-breakfast-ideas",
    title: "5 Healthy Breakfast Ideas to Start Your Day",
    excerpt: "Kickstart your morning with these easy and nutritious breakfast recipes.",
    description: "Learn how to set up a Next.js 14 project with TypeScript, Tailwind CSS, and the App Router.",
    content: `
      ## 5 Healthy Breakfast Ideas

      Starting your day with a nutritious breakfast can improve your energy, focus, and mood.

      1. Oatmeal with fresh fruits
      2. Greek yogurt with honey and nuts
      3. Smoothie bowl with chia seeds
      4. Whole-grain toast with avocado
      5. Vegetable omelette

      Remember: A balanced breakfast sets the tone for the whole day!
    `,
    date: "2025-08-08",
  },
  {
    slug: "benefits-of-drinking-water",
    title: "Top Benefits of Drinking Enough Water",
    excerpt: "Why hydration is the key to good health — and how much you should drink daily.",
    description: "Learn how to set up a Next.js 14 project with TypeScript, Tailwind CSS, and the App Router.",
    content: `
      ## Benefits of Drinking Water

      Staying hydrated helps with digestion, skin health, and energy levels.

      - Improves physical performance
      - Boosts brain function
      - Supports digestion
      - Prevents headaches

      Aim for at least 2-3 liters of water a day!
    `,
    date: "2025-08-05",
  },
];

import {
  peoplerandom,
  eco,
  speed,
  gear,
  origamiVase,
  rasenVase,
  simpleVase,
} from "../../assets";

export default {
  // Same value used for defaultNS
  translations: {
    headline: {
      part1: "Turning",
      part2: "Ideas",
      part3: "Into",
      part4: "Reality",
    },
    quote: {
      text: '"Great things are not done by impulse, but by a series of small things brought together."',
      author: "- Vincent Van Gogh",
    },
    equipment: {
      heading: "Equipment That",
      subheading: "Gets the Job Done.",
      description:
        "Our production is powered by several Anycubic Kobra 2 Max printers, a top-tier 3D printer known for its precision and reliability. With a large build volume and advanced features, this machine ensures that we can handle complex and high-quality prints, delivering detailed and durable results every time.",
    },
    business: {
      heading: "Who are",
      subheading: "we?",
      paragraph1:
        "We are a small but passionate Portuguese team of technology artists who believe that creativity knows no bounds. Our mission is simple: to turn your most ambitious ideas into tangible reality through the magic of 3D printing.",
      paragraph2:
        "We don't just print on demand—we actively collaborate with you, guiding your vision every step of the way. At the heart of everything we do is a deep love for transforming what seems impossible into something real, tangible, and beautiful.",
    },
    features: [
      {
        id: "feature-1",
        icon: gear,
        title: "Tailored Customization",
        content:
          "Bring your ideas to life with our advanced 3D printing technology, offering unparalleled customization. We create unique, client-specific products that are as functional as they are innovative.",
      },
      {
        id: "feature-2",
        icon: speed,
        title: "Speedy Prototyping",
        content:
          "Accelerate your design process with our rapid prototyping services. We deliver high-quality prototypes quickly, helping you reduce time to market and stay ahead of the competition.",
      },
      {
        id: "feature-3",
        icon: eco,
        title: "Eco-Friendly Production",
        content:
          "Commit to sustainability with our environmentally conscious 3D printing. We minimize waste and use recyclable materials, ensuring that your projects are both cutting-edge and eco-friendly.",
      },
    ],
    materials: {
      heading: "Choose your",
      subheading: "Materials.",
      discount: "20% Discount on every 3rd Order",
      description:
        "Experience seamless and customized 3D printing solutions with our on-demand order service. Simply send your design, choose your specifications, and let us handle the rest. From prototypes to final products, we deliver high-quality prints tailored to your needs.",
      table: {
        header: ["Colors", "Malleability", "Quality", "Cost"],
        rows: [
          {
            name: "PLA",
            malleability: "2/5",
            quality: "4/5",
            cost: ["3.00€/h", "2.50€/h"],
          },
          {
            name: "PETG",
            malleability: "3/5",
            quality: "4/5",
            cost: ["3.00€/h", "2.50€/h"],
          },
          {
            name: "TPU",
            malleability: "1/5",
            quality: "2/5",
            cost: ["4.00€/h", "3.50€/h"],
          },
          {
            name: "ABS",
            malleability: "2/5",
            quality: "1/5",
            cost: ["4.00€/h", "3.50€/h"],
          },
        ],
      },
    },
    testimonials: {
      heading: "What people say about us",
      feedback: [
        {
          id: "feedback-1",
          content:
            "The whole experience was smooth and professional, and we couldn’t be happier with the final products. Highly recommended!",
          name: "Margarida M.",
          title: "People Ops Specialist",
          img: "peoplerandom",
        },
        {
          id: "feedback-2",
          content:
            "The team was incredibly supportive throughout the process, and the 20% discount on every third item was a fantastic bonus.",
          name: "Luis R.",
          title: "Mechanical Engineer",
          img: "peoplerandom",
        },
        {
          id: "feedback-3",
          content:
            "Everyone was very nice to me. The models turned out great. Would recommend if you want something unique!",
          name: "Maria N.",
          title: "Assistant Professor",
          img: "peoplerandom",
        },
      ],
    },
    cta: {
      heading: "Are you ready to create?",
      description:
        "We'd love to hear from you! Reach out to us today and take advantage of an exclusive offer: enjoy a 20% discount on every third item you print with us. It's our way of saying thank you for choosing us. We look forward to helping you bring your ideas to life!",
    },
    products: [
      {
        id: "product-1",
        content: "A simple vase made for your flowers.",
        name: "Simple Flower Vase",
        sizes: "L, M, S",
        img: simpleVase,
      },
      {
        id: "product-2",
        content: "A touch of modern to your kitchen.",
        name: "Rasen Vase",
        sizes: "L, M, S",
        img: rasenVase,
      },
      {
        id: "product-3",
        content: "A unique vase with the right touch of modern. ",
        name: "Origami Vase",
        sizes: "L, M, S",
        img: origamiVase,
      },
    ],
    stats: [
      {
        id: "stats-1",
        title: "Customers Served",
        value: "100+",
      },
      {
        id: "stats-2",
        title: "Premade Models",
        value: "20+",
      },
      {
        id: "stats-3",
        title: "Day Shipping",
        value: "5",
      },
    ],
    footer: {
      slogan: "A new way to print 3D models. Your way.",
      copyright: "2024 BananaFrog 3D. All Rights Reserved.",
      footerLinks: [
        {
          title: "Links",
          links: [
            {
              id: "footer-link-1",
              name: "Terms & Conditions",
              link: "terms",
            },
            {
              id: "footer-link-2",
              name: "Privacy Policy",
              link: "privacy-policy",
            },
            {
              id: "footer-link-3",
              name: "Cookie Policy",
              link: "cookie-policy",
            },
          ],
        },
      ],
      socialMedia: [
        {
          id: "social-media-1",
          icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/1200px-Instagram_icon.png",
          link: "https://www.instagram.com/bananafrog3d/",
        },
      ]
    },
  },
};

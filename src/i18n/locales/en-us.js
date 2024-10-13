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
    navLinks: [
      {
        id: "home",
        title: "Home",
      },
    ],
    externalLinks: [
      {
        id: "products",
        title: "Products",
      },
    ],
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
      ],
    },
    terms: {
      websiteUsageTitle: "Website Usage",
      websiteUsageContent:
        "Users who visit the Website can access and read all the content contained therein without the need to register data or personal information. However, only registered users or those who have submitted completed forms for commercial contact requests will be contacted and informed about the available services through the email address or phone number previously submitted in the respective forms. They will receive updates and information about the services available at Banana Frog 3D, provided they have previously agreed to such communication in their registration or submitted form.",
      usageRestrictionsTitle:
        "This Website, or any of our services, should not be used:",
      usageRestrictionsList: [
        "- For any reason or purpose that is illegal, defamatory, offensive, harmful, abusive, invasive of someone else's privacy, or objectionable;",
        "- In a way that could harm or interrupt this Website or any of our services, or the peaceful use by other users;",
        "- To transmit viruses or other malicious code that can damage or disrupt equipment or computer systems (hardware or software) or telecommunications equipment;",
        "- In a way that could offend others or harm Banana Frog 3D, namely by sending or making available any illegal, false, misleading, threatening, malicious, abusive, defamatory, injurious, privacy-invasive, harmful content, or anything that could negatively affect the image or activity of Banana Frog 3D;",
        "- To promote any type of commercial activity, or send or make available information or content belonging to third parties which you do not have the right to use, such as content protected by third-party copyrights or content containing third-party personal data.",
      ],
      generalUsage:
        "In general, the User must use the Website responsibly, prudently, and carefully, not disturbing or damaging its continuity or integrity.",
      disclaimer:
        "Banana Frog 3D is not responsible for any direct, indirect, and/or negligent damages arising from the use of the information contained on this Website or the Website itself, as well as from the harmful or disruptive conduct of the User.",
      informationContentTitle: "Information and Content of this Website",
      informationContent:
        "All content and information published on this website are the responsibility of Banana Frog 3D, which ensures their truthfulness and transparency, striving to offer useful, updated, and reality-adjusted information. However, the information may not be correct or completely up-to-date. In this sense, we cannot be held responsible for any actions taken as a result of or based on the information contained or provided by this Website, whether in a contract action, negligence, or other illicit action. You can always send your suggestions or corrections through bananafrog@bananafrog3d.com..",
      contentChange:
        "Banana Frog 3D reserves the right to move, change, delete the Website, or its content (including registered user content, if applicable) at any time and for any reason. Therefore, you should keep a copy of any content you send to the Website that you wish to retain. After uploading the content, you can choose to delete it at any time.",
      reportConcern:
        "If you wish to report your concerns regarding any content available on this site, please email directly to bananafrog@bananafrog3d.com.",
      hyperlinksTitle: "Use of Hyperlinks",
      hyperlinksContent1:
        "The content of this Website may include Hyperlinks (links) to other Sites that are not operated by Banana Frog 3D. Banana Frog 3D is not responsible for the content of any other Website, including those that provide access to this one or whose access has been obtained through our Website.",
      hyperlinksContent2:
        "Banana Frog 3D does not endorse any linked Sites or the products/services provided on those Sites. The content on linked sites may change over time. It is recommended to check the terms and policies of the linked Sites.",
      hyperlinksContent3:
        "By providing a hyperlink to an external Website on this Website, Banana Frog 3D does so in good faith that it contains or may contain additional relevant information to that presented on its own Website. The existence of this hyperlink does not imply or assume its review and approval by Banana Frog 3D. In certain instances, a hyperlink may lead you to access a Website that presents information contradictory to that presented on our Website or another belonging to Banana Frog 3D or its subsidiaries.",
    },
  },
};

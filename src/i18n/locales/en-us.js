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
        name: "Harmony Vase",
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
    product_title: {
      title: "Choose your Favourite"
    },
    product: {
      size_title: "Sizes"
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
    cookie_policy: {
      title: "Cookie Policy",
      intro:
        "This website uses cookies to provide a better user experience to its visitors and to ensure that it is fully operational.",
      what_is_cookie: {
        title: "What is a cookie?",
        description1:
          "In order to provide a personalized and efficient service to our users, it is necessary to remember and store information about how this website should be used. For this purpose, we use small text files called cookies that contain a small amount of information downloaded to the user's computer or other devices via a server. Your web browser then sends these cookies back to the website on each subsequent visit, allowing us to recognize and remember our visitors' identity, including their usage preferences. You can find more detailed information about cookies and their operation here. Navigation on this website allows the collection of information using cookies and other technologies (e.g., web beacons, tags, scripts, local storage).",
        description2:
          "This Cookie Policy is part of our Privacy Statement. For more information about us and how we protect user information, please consult our Privacy Statement.",
      },
      cookies_title: "Cookies We May Use and Why",
      cookies_description:
        "When we use cookies on our website, we may place them into one of the following categories:",
      cookies_we_may_use: [
        "- Strictly Necessary Cookies: These are essential for the website to function and cannot be turned off in our systems. They are usually set in response to actions you have taken, such as setting your privacy preferences, logging in, or filling out forms.",
        "- Analytics and Performance Cookies: These allow us to count visits and traffic sources so we can measure and improve our website's performance. They may be set by us or by third parties to help us understand which pages or videos are most and least popular and how visitors navigate through the site.",
        "- Functional Cookies: These enable the website to provide enhanced functionality and personalization based on your interaction with the site. They may be set by us or by third parties, such as Adobe, whose services we have added to our pages.",
        "- Advertising and Targeting Cookies: These may be set on our website by our advertising partners, such as Adobe, Meta, LinkedIn, and Google. They can be used by these companies to build a profile of your interests and show you relevant ads on other websites.",
        "- Social Media Cookies: These are set by a range of social media services that we have added to the website to enable you to share our content with your friends and acquaintances. These cookies can track your browsing across other websites and build a profile of your interests, which may affect the content and messages you see on other sites you visit.",
      ],
      cookie_duration: {
        title: "How Long Do Cookies Stay on My Device?",
        description:
          "The duration that cookies remain on your device depends on whether they are 'persistent' cookies or 'session' cookies. A persistent cookie is stored on a web browser and remains valid until its expiry date, unless deleted before that date. On the other hand, a session cookie is deleted at the end of your web session when the web browser is closed.",
      },
      control_cookies: {
        title: "How to Control Cookies?",
        description:
          "You can control and manage cookies in various ways. Please note that removing or blocking cookies may affect your user experience and limit access to certain areas or features of this website. Where cookies are not strictly necessary for the operation of our website, we will ask for your consent for our use of cookies on your first visit to our site. You can also change your browser settings to manage and control cookies. More detailed information on how to do this can be found at http://www.aboutcookies.org/. Any consent to accept or reject cookies is limited to the website where this Cookie Policy is located and does not apply to other websites or pages that may be linked to our site. For more information on how cookies are used by those websites, please consult the specific privacy and cookie policies of those sites.",
      },
      email_communications: {
        title: "Email Communications",
        description:
          "We may also use monitoring technologies to determine if our visitors have read, clicked on links, or forwarded certain communications sent by us via email, with the aim of assessing the relevance of our communications. If you disagree with this practice, you should unsubscribe as it is not possible to send these emails without these monitoring mechanisms active. Registered subscribers can update their communication preferences at any time by contacting us or can unsubscribe by following the instructions in the email communication sent to their email address.",
      },
      changes: {
        title: "Changes to the Cookie Policy",
        description:
          "This Cookie Policy may be reviewed at any time at our discretion. When changes are made, the review date at the top of the page will be updated. The revised Cookie Policy will take effect from the review date. We recommend that users of our website periodically review the Cookie Policy to stay informed about our management of cookies.",
      },
      dispute_resolution: {
        title: "Dispute Resolution",
        description1:
          "Under and in compliance with Law No. 144/2015, of 08.09, Banana Frog 3D provides the necessary information for the consumer client to exercise their right to complain to an official, third-party, impartial entity that will help resolve the dispute in question. Alternative dispute resolution is the option that all consumers have to seek assistance from official entities to resolve or guide them in a conflict before initiating legal proceedings in court.",
        description2: "Generally, the procedure can be described as follows:",
        steps: [
          "- The consumer client requests an impartial third party to act as an intermediary between themselves and the supplier or service provider that is the subject of their complaint.",
          "- The intermediary may suggest a solution to the complaint, impose a solution on both parties, or bring the parties together to find a solution.",
        ],
        description3:
          "Alternative dispute resolution can take the form of 'mediation,' 'conciliation,' or 'arbitration.' It is usually less costly, less formal, and quicker than judicial proceedings. In case of a dispute, the consumer client can contact an Alternative Dispute Resolution entity:",
        arbitration_centers: [
          "- Lisbon Consumer Dispute Arbitration Center: http://www.centroarbitragemlisboa.pt",
          "- Vale do Ave/Arbitration Court Consumer Dispute Arbitration Center: http://www.triave.pt",
          "- CIAB - Center for Information, Mediation, and Arbitration of Consumer Disputes (Consumer Arbitration Court): http://www.ciab.pt/pt",
          "- CNIACC - National Center for Information and Arbitration of Consumer Disputes: https://www.cniacc.pt/pt/",
          "- Coimbra District Consumer Dispute Arbitration Center: http://www.centrodearbitragemdecoimbra.com",
          "- Algarve Consumer Information, Mediation, and Arbitration Center: http://www.consumoalgarve.pt",
          "- Porto Consumer Information and Arbitration Center: http://www.cicap.pt",
          "- Madeira Consumer Dispute Arbitration Center: https://www.madeira.gov.pt/cacc",
        ],
        consumer_portal:
          "For more information, visit the Consumer Portal: www.consumidor.pt",
      },
      complaint_book: {
        title: "Complaint Book",
        link: "https://www.livroreclamacoes.pt/inicio",
      },
    },
    privacyPolicy: {
      title: "Privacy Policy",
      intro: {
        text: `Esquilo Tranquilo Lda, which operates commercially as Banana Frog 3D, located at Rua Leopoldo de Almeida, 30, 2750-035, Cascais, Cascais e Estoril, with tax identification number 518178420, owns this website. The use of www.bananafrog3d.com acknowledges the general terms and conditions listed and described below. Acceptance of these terms is absolutely essential for the use of the services and information provided here. If you do not agree with them, you should immediately stop using this Website.
          www.bananafrog3d.com is a site aimed at promoting services related to the modeling and printing of 3D objects. 
          Banana Frog 3D reserves the right to change, add, update, delete, partially or fully, these Terms and Conditions of Use and Privacy Policy at any time, without prior notice and with immediate effect. This ensures, under any circumstances, the quality, safety, legality, truthfulness, and accuracy of the information on the respective properties and offers published on the website. Users should periodically review the page of these Terms and Conditions of Use and Privacy Policy to confirm if any updates or changes have been made. If you do not agree with any of these changes, you should not use this Website.`,
      },
      websiteUse: {
        title: "Use of the Website",
        text: "Users who visit the Website can access and read all content contained therein without the need to register data or personal information. This Website, or any of our services, should not be used:",
        list: [
          "- For any illegal, defamatory, offensive, harmful, abusive, invasive of someone else's privacy, or objectionable reason or purpose.",
          "- In a way that could harm or interrupt this Website or any of our services, or the peaceful use by other users.",
          "- To transmit viruses or other malicious code that could damage or disrupt computer or telecommunication equipment or systems (hardware or software).",
          "- In a way that could offend others or harm Banana Frog 3D, including sending or making available any illegal, false, misleading, threatening, malicious, abusive, defamatory, injurious, privacy-invasive, harmful content, or content that could negatively affect the image or activity of Banana Frog 3D.",
          "- To promote any type of commercial activity, or to send or make available information or content that belongs to third parties and that you do not have the right to use, such as content protected by third-party copyright or content that contains third-party personal data.",
        ],
        general:
          "In general, the User should use the Website responsibly, prudently, and carefully, and should not disturb or damage its continuity or integrity. Banana Frog 3D is not responsible for any direct, indirect, and/or negligent damages arising from the use of the information contained on this Website or the Website itself, as well as for harmful or disruptive conduct by the User.",
      },
      infoContent: {
        title: "Information and Content on this Website",
        paragraphs: [
          "All content and information published on this website are the responsibility of Banana Frog 3D, which ensures their truthfulness and transparency. Efforts are made to offer useful, updated, and reality-adjusted information. However, it may not be correct or completely updated. Therefore, we cannot be held responsible for any actions taken as a result of or based on the information contained or provided by this Website, whether in a contractual action, negligence, or other unlawful action. You can always send your suggestions or errata to bananafrog@bananafrog3d.com.",
          "Banana Frog 3D reserves the right to move, change, delete the Website, or its content (including content from registered users, if applicable) at any time and for any reason. Therefore, you should keep a copy of any content you upload to the Website that you wish to keep. After uploading the content, you can choose to delete it at any time.",
          "If you wish to report your concerns about any content available on this site, please send an email directly to bananafrog@bananafrog3d.com.",
        ],
      },
      hyperlinks: {
        title: "Use of Hyperlinks",
        paragraphs: [
          "The content of this Website may include Hyperlinks to other Sites that are not operated by Banana Frog 3D. Banana Frog 3D is not responsible for the content of any other Website, including those that give access to this one or whose access has been achieved through our Website.",
          "Banana Frog 3D does not endorse any linked Sites or the products/services provided on those Sites. The content on linked sites may change over time. It is recommended to check the terms and policies of the linked Sites.",
          "By providing a hyperlink to an external Website on this Website, Banana Frog 3D does so in good faith that it contains or may contain relevant additional information to that presented on its own Website. The existence of this hyperlink does not imply or assume its review and approval by Banana Frog 3D—in certain instances, a hyperlink may lead you to access a Website that presents contradictory information to that presented on our Website or another owned by Banana Frog 3D or its subsidiaries.",
        ]
      },
      responsibilityContacts: {
        title: "Our Responsibility and Contacts",
        paragraphs: [
          "Banana Frog 3D is not responsible for direct, indirect, or specific losses or damages or any other consequences arising from accessing or using this Website, nor from any information contained in it. Nevertheless, we are available to discuss with the user the implications of any issue that may arise, and you should contact us through our website at www.bananafrog3d.com (contacts), at the address Rua Leopoldo de Almeida, 30, 2750-035 Cascais, Cascais e Estoril, or through the email address bananafrog@bananafrog3d.com.",
          "By accessing our contact area, the user agrees that the information provided to us through this contact will be owned by Banana Frog 3D, which may use it in the manner it deems most appropriate, with no rights or payment due to the user for such use.",
          "To the maximum extent permitted by law, all warranties, explicit or implied, charges or endorsements, representations, and other terms and conditions of any kind related to this Website or matters not contained in these Terms and Conditions are expressly excluded.",
          "Nothing in these Terms of Use and Privacy Policy excludes, restricts, or modifies any right or remedy, or any warranties, or other terms or conditions, implied or imposed by any legislation that cannot be legally excluded or limited. This may include consumer rights legislation, in Portuguese territory, which contains guarantees that protect consumers of goods and services under certain circumstances.",
          "The liability of one party to another party is reduced to the extent that the acts or omissions of the other party, or those of a third party, contribute to or cause such liability.",
          "Although we take appropriate actions to keep this Website free from computer viruses or other harmful coding, we cannot guarantee that this will be the case. You should, therefore, use updated security software at all times to protect your computer from such malicious software.",
          "Although we make all reasonable commercial efforts to keep this Website available, we do not guarantee that it will be accessible or available on a constant temporal basis or that access will not be interrupted or error-free.",
          "Banana Frog 3D is responsible for the collection and processing of personal data. It respects the privacy of all users and commits to protecting all information submitted by each user in accordance with current national and community legislation.",
          "All users can navigate this website without the obligation to register or submit any data. When you submit your data, if you wish to receive news, campaigns, or others associated with properties or our services in addition to the commercial communications requested by you, we ask that you agree to their receipt.",
          "Providing personal data is only necessary if you wish to schedule a visit, request information, or request contact and will always be guaranteed, under the law, the right to access, rectify, and delete any data provided, which can be exercised in writing at any time, through the email bananafrog@bananafrog3d.com or by clicking on the unsubscribe link at the bottom of the email.",
        ]
      },
      dataRegistration: {
        title: "Data Registration",
        paragraphs: [
          "The personal data of each user will be kept as long as the user's subscription and/or requests are active, with the aim of improving the services offered, and after their expiration, they will be depersonalized and not identifiable. You are allowed to question the data and may request the deletion, rectification, updating, or completion of the same. These requests should be sent to bananafrog@bananafrog3d.com.",
          "We collect personal information via the voluntary filling out of forms provided for scheduling visits, requesting information about properties or services, and requesting contact.",
          "By contacting us via email, subscribing to free information, we are obligated to collect your email address, name, and other specific personal identification data, typically the name and contact number.",
          "When requesting sensitive personal data, we will ensure that its collection and use will be done in strict compliance with applicable data collection and protection legislation. If we intend to use your personal data for purposes beyond the initially established ones, we will ask for your consent. You can choose to give this consent at the time of initial data collection."
        ],
      },
      automaticDataCollection: {
        title: "Automatically Collected Data",
        text: "The domains and IP addresses of visitors are automatically recorded. This information does not identify the user but only the computer used to access the site. These data are analyzed globally to verify where in the world the site is being used, to ensure its coverage, allowing us to improve our service to the user. Personal data of each user are not collected and analyzed in this process."
      },
      dataRetention: {
        title: "Data Retention",
        text: "The data will be kept as long as the user's subscription is active, with the aim of improving the services offered, and after its expiration, they will be depersonalized and unidentifiable. Additional information about the user will only be collected beyond the mentioned purposes for contractual purposes related to the services provided.",
      },
      accessData: {
        title: "Access to Personal Data",
        text: "To request clarifications about accessing personal data, or to clarify issues related to the privacy policy practiced at Banana Frog 3D, contact us via email bananafrog@bananafrog3d.com, or use the following postal address: Rua Leopoldo de Almeida, 30, 2750-035 Cascais",
      },
    },
  },
};

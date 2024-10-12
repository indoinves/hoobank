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
      part1: "Transformar",
      part2: "Ideias",
      part3: "em",
      part4: "Realidade",
    },
    quote: {
      text: '"Grandes coisas não são feitas por impulso, mas por uma série de pequenas coisas reunidas."',
      author: "- Vincent Van Gogh",
    },
    equipment: {
      heading: "Equipamento de",
      subheading: "Alta Fiabilidade.",
      description:
        "A nossa produção utiliza várias impressoras Anycubic Kobra 2 Max, impressoras 3D de excelência, reconhecidas pela sua precisão e fiabilidade. Com um grande volume de construção e funcionalidades avançadas, estas máquinas asseguram que conseguimos realizar impressões complexas e de alta qualidade, proporcionando resultados detalhados e duradouros a cada utilização.",
    },
    business: {
      heading: "Quem somos",
      subheading: "nós?",
      paragraph1:
        "Somos uma pequena equipa portuguesa que acredita que a criatividade não tem limites. Nossa missão é simples: transformar as suas ideias mais ambiciosas em realidade através da magia da impressão 3D.",
      paragraph2:
        "Colaboramos ativamente consigo de forma a que a sua visão se possa tornar numa realidade. Criamos produtos de qualidade, usando apenas o melhor filamento de impressao.",
    },
    features: [
      {
        id: "feature-1",
        icon: gear,
        title: "Personalização Exclusiva",
        content:
          "Dê vida às suas ideias com a nossa avançada tecnologia de impressão 3D, oferecendo personalização incomparável. Criamos produtos únicos para cada cliente, que são tão funcionais quanto inovadores.",
      },
      {
        id: "feature-2",
        icon: speed,
        title: "Prototipagem Rapida",
        content:
          "Acelere o seu processo de design com os nossos serviços de prototipagem rápida. Entregamos protótipos de alta qualidade de forma rápida, ajudando-o a reduzir o tempo de lançamento no mercado e a manter-se à frente da concorrência.",
      },
      {
        id: "feature-3",
        icon: eco,
        title: "Produção Ecológica",
        content:
          "Comprometa-se com a sustentabilidade com a nossa impressão 3D ecologica. Minimizamos o desperdício e utilizamos materiais recicláveis, garantindo que os seus projetos possam ser tanto inovadores como amigos para o ambiente.",
      },
    ],
    testimonials: {
      heading: "O que as pessoas dizem sobre nós",
      feedback: [
        {
          id: "feedback-1",
          content:
            "Toda a experiência foi fluida e profissional, e não poderíamos estar mais felizes com os produtos finais. Altamente recomendado!",
          name: "Margarida M.",
          title: "Especialista em Recursos Humanos",
          img: "peoplerandom", // Ensure the image reference is correct
        },
        {
          id: "feedback-2",
          content:
            "A equipa foi incrivelmente solidária durante todo o processo, e o desconto de 20% em cada terceiro item foi um fantástico bónus.",
          name: "Luis R.",
          title: "Engenheiro Mecânico",
          img: "peoplerandom", // Ensure the image reference is correct
        },
        {
          id: "feedback-3",
          content:
            "Todos foram muito simpáticos comigo. Os modelos ficaram ótimos. Recomendo se estiver a procura de algo único!",
          name: "Maria N.",
          title: "Professora Assistente",
          img: "peoplerandom", // Ensure the image reference is correct
        },
      ],
    },
    materials: {
      heading: "Escolha os",
      subheading: "Materiais.",
      discount: "20% de desconto a cada 3ª encomenda",
      description:
        "Experimente soluções de impressão 3D personalizadas. Envie-nos o seu design, escolha o tipo de material e a nossa equipa tratara do resto. As nossas impressões são de alta qualidade e adaptadas às suas necessidades.",
      table: {
        header: ["Cores", "Maleabilidade", "Qualidade", "Custo"],
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
    cta: {
      heading: "Está pronto para criar?",
      description:
        "Adoraríamos ouvir a sua opiniao! Entre em contato conosco e aproveite uma oferta exclusiva: desfrute de um desconto de 20% a cada terceira encomenda! Estamos ansiosos por dar vida às suas ideias!",
    },
    products: [
      {
        id: "product-1",
        content: "Um vaso simples feito para as suas flores.",
        name: "Vaso Simples",
        sizes: "L, M, S",
        img: simpleVase,
      },
      {
        id: "product-2",
        content: "Dê um toque de modernidade à sua cozinha.",
        name: "Vaso Rasen",
        sizes: "L, M, S",
        img: rasenVase,
      },
      {
        id: "product-3",
        content: "Um vaso único com o toque certo de modernidade.",
        name: "Vaso Origami",
        sizes: "L, M, S",
        img: origamiVase,
      },
    ],
    stats: [
      {
        id: "stats-1",
        title: "Clientes Atendidos",
        value: "100+",
      },
      {
        id: "stats-2",
        title: "Modelos Pre-feitos",
        value: "20+",
      },
      {
        id: "stats-3",
        title: "Dias de Envio",
        value: "5",
      },
    ],
    footerLinks: [
      {
        title: "Useful Links",
        links: [
          {
            id: "footer-link-1",
            name: "Termos & Condições",
            link: "terms",
          },
          {
            id: "footer-link-2",
            name: "Política de Privacicade",
            link: "privacy-policy",
          },
          {
            id: "footer-link-3",
            name: "Política de Cookies",
            link: "cookie-policy",
          },
        ],
      },
    ],
  },
};

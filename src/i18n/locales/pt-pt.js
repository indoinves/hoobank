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
        title: "Início",
      },
    ],
    externalLinks: [
      {
        id: "products",
        title: "Produtos",
      },
    ],
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
    footer: {
      slogan: "Uma nova forma de imprimir modelos 3D. À sua maneira.",
      copyright: "2024 BananaFrog 3D. Todos os direitos reservados.",
      footerLinks: [
        {
          title: "Links",
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
      socialMedia: [
        {
          id: "social-media-1",
          icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/1200px-Instagram_icon.png",
          link: "https://www.instagram.com/bananafrog3d/",
        },
      ],
    },
    terms: {
      websiteUsageTitle: "Utilização do Website",
      websiteUsageContent:
        "Os Utilizadores que visitam o Website podem aceder e ler todo o conteúdo contido no mesmo, sem necessidade de registar dados ou informações pessoais. No entanto, apenas os utilizadores registados ou com a submissão de formulários preenchidos para pedidos de contactos comerciais serão contactados e informados sobre os serviços disponíveis através do endereço eletrónico ou telefone previamente submetidos em formulários próprios. Receberão atualizações e informações sobre os serviços disponíveis na Banana Frog 3D, no caso de terem previamente aceite no respetivo registo ou formulário submetido, comunicação para esse efeito.",
      usageRestrictionsTitle:
        "Este Website, ou qualquer um dos nossos serviços, não deverá ser utilizado:",
      usageRestrictionsList: [
        "- Por qualquer razão ou finalidade que seja ilegal, difamatória, ofensiva, prejudicial, abusiva, invasiva da privacidade de outrem ou censurável;",
        "- De forma que possa prejudicar ou interromper este Website ou qualquer um dos nossos serviços, ou a utilização pacífica por parte de outros utilizadores;",
        "- Para transmitir vírus ou outra codificação maliciosa que possam danificar ou perturbar equipamento ou sistema informático (hardware ou software) ou equipamento de telecomunicações;",
        "- De forma que possa ofender outrem ou prejudicar a Banana Frog 3D, designadamente, enviar ou disponibilizar qualquer conteúdo ilegal, falso, enganoso, ameaçador, maldoso, abusivo, difamatório, injurioso, invasivo da privacidade, prejudicial ou ainda que possa afetar negativamente a imagem ou atividade da Banana Frog 3D;",
        "- Para promover qualquer tipo de atividade comercial, ou enviar ou disponibilizar informação ou conteúdos que pertencem a terceiros e que não tem o direito de utilizar, como, por exemplo, conteúdos protegidos por direitos de autor de terceiros ou conteúdos que contenham dados pessoais de terceiros.",
      ],
      generalUsage:
        "Em geral, o Utilizador deve utilizar o Website de forma responsável, prudente e cuidadosa, não devendo perturbar ou danificar a continuidade ou integridade do mesmo.",
      disclaimer:
        "A Banana Frog 3D não é responsável por quaisquer danos diretos, indiretos e ou negligentes decorrente do uso da informação contida neste Website ou do próprio Website bem como da conduta prejudicial ou perturbadora do Utilizador.",
      informationContentTitle: "Informações e conteúdos deste Website",
      informationContent:
        "Todos os conteúdos e informações publicados no presente website são da responsabilidade da Banana Frog 3D que zela pela veracidade e transparência dos mesmos. Esforçando-se para oferecer informações úteis, atualizadas e ajustadas à realidade. No entanto, a mesma pode não estar correta ou completamente atualizada. Neste sentido, não nos podemos responsabilizar por quaisquer ações tomadas como resultado de ou com base nas informações contidas ou fornecidas por este Website, seja numa ação de contrato, negligência ou outra ação ilícita. Através bananafrog@bananafrog3d.com poderá sempre enviar as suas sugestões ou erratas.",
      contentChange:
        "À Banana Frog 3D está reservado o direito de mover, alterar, excluir o Website, ou conteúdo do mesmo (incluindo o conteúdo de utilizadores registados, se o caso), a qualquer momento e por qualquer motivo. Deve, portanto, manter uma cópia de qualquer conteúdo que enviar para o Website, que deseje manter. Depois de ter carregado o conteúdo, pode optar por excluir o conteúdo a qualquer momento.",
      reportConcern:
        "Caso deseje reportar as suas preocupações relativas a qualquer conteúdo disponível neste site, por favor, envie um e-mail diretamente para bananafrog@bananafrog3d.com.",
      hyperlinksTitle: "Utilização de Hyperlinks",
      hyperlinksContent1: "O conteúdo deste Website pode incluir Hyperlinks (hiperligações) para outros Sites que não são operados pela Banana Frog 3D. A Banana Frog 3D não é responsável pelo conteúdo de qualquer outro Website, incluindo aqueles que dêem acesso ao presente ou cujo acesso tenha sido conseguido através do nosso Website.",
      hyperlinksContent2: "A Banana Frog 3D não endossa quaisquer Sites vinculados ou os produtos/serviços que são fornecidos nesses Sites. Os conteúdos nos sites vinculados podem mudar ao longo do tempo. Recomenda-se a verificação dos termos e políticas dos Sites vinculados.",
      hyperlinksContent3: "Ao fornecer neste Website um hyperlink para um Website externo, a Banana Frog 3D fá-lo na boa-fé de que este contenha ou possa conter informações relevantes adicionais às apresentadas no seu próprio Website. A existência desse hyperlink não implica nem pressupõe a sua revisão e aprovação por parte da Banana Frog 3D- em determinadas instâncias, um hyperlink poderá levá-lo a aceder a um Website que apresente informação contraditória à apresentada no nosso Website ou a outro pertencente à Banana Frog 3D ou às suas subsidiárias.",
    },
  },
};

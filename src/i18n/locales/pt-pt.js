import {
  eco,
  speed,
  gear,
  bookmarker1,
  bookmarker2,
  bookmarker3,
  bookmarker4,
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
      part1: "Transforme",
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
        "A nossa produção utiliza várias impressoras Anycubic Kobra 2 Max, reconhecidas pela sua precisão e fiabilidade. Com um grande volume de construção e funcionalidades avançadas, estas impressoras asseguram que conseguimos realizar impressões de alta qualidade, proporcionando resultados detalhados.",
    },
    business: {
      heading: "Quem somos",
      subheading: "nós?",
      paragraph1:
        "Somos uma equipa portuguesa dedicada que acredita que a criatividade não tem limites. A nossa missão é clara: transformar as suas ideias mais ambiciosas em realidade através da magia da impressão 3D.",
      paragraph2:
        "Colaboramos ativamente consigo para que a sua visão ganhe forma. O nosso compromisso com a excelência assegura que cada detalhe é cuidadosamente considerado, resultando em soluções personalizadas que superam as suas expectativas.",
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
        header: ["Cor", "Elasticidade", "Qualidade", "Custo"],
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
    product_title: {
      title: "A nossa linha de produtos"
    },
    products_description: "A BananaFrog 3D é um serviço especializado de impressão 3D que transforma as suas ideias em realidade, usando materiais de alta qualidade. Seja uma peça única e personalizada ou um protótipo funcional, damos vida às suas ideias. Para além deste serviço, oferecemos também uma linha exclusiva de produtos, proporcionando uma seleção de designs para quem procura algo especial.",
    productSections: [
      {
        title: "Keycaps",
        products: [
          {
            id: "keycap-1",
            content: "A famosa tecla de pato para o teu teclado!",
            name: "Tecla Duck Cherry MX",
            price: "3.99",
            imgs: []
          },
          {
            id: "keycap-2",
            content: "O teu super-herói favorito no teu teclado!",
            name: "Tecla Batman Cherry MX",
            price: "3.99",
            imgs: []
          },
          {
            id: "keycap-3",
            content: "Mostra o teu entusiasmo por Minecraft com esta tecla personalizada!",
            name: "Tecla Minecraft Cherry MX",
            price: "3.99",
            imgs: []
          },
          {
            id: "keycap-5",
            content: "Chega às estrelas, mas com os pés no chão!",
            name: "Tecla Star Cherry MX",
            price: "3.99",
            imgs: []
          },
          {
            id: "keycap-6",
            content: "Uma tecla inspirada na energia radioativa. Perfeita para um setup eletrificante!",
            name: "Tecla Radioactive Cherry MX",
            price: "3.99",
            imgs: []
          },
          {
            id: "keycap-7",
            content: "A tecla de fuga definitiva - uma mini placa de saída para o teu teclado, porque às vezes só precisas de uma saída!",
            name: "Tecla Exit Cherry MX",
            price: "3.99",
            imgs: []
          },
          {
            id: "keycap-8",
            content: "Liberta a fera com esta tecla raptor - pura força e energia na ponta dos teus dedos!",
            name: "Tecla Raptor Cherry MX",
            price: "3.99",
            imgs: []
          },
          
        ]
      },
      {
        title: "Marcadores de Livros",
        products: [
          {
            id: "bookmarker-1",
            content: "Um marcador fantasma para os teus livros favoritos de Halloween!",
            name: "Marcador Fantasma",
            price: "Brevemente!",
            imgs: [bookmarker1, bookmarker2]
          },
          {
            id: "bookmarker-2",
            content: "Um marcador fantasma assustador para aquele livro especial de Halloween!",
            name: "Marcador Fantasma Assustador",
            price: "Brevemente!",
            imgs: [bookmarker3]
          },
          {
            id: "bookmarker-3",
            content: "Um marcador de árvore assustadora.",
            name: "Marcador de Árvore Assustadora",
            price: "Brevemente!",
            imgs: [bookmarker4]
          }
        ]
      }
    ],
    order: {
      heading: "Esta pronto para revolucionar o seu negócio?",
      description: [
        `Na Banana Frog 3D, somos especialistas em soluções de impressão 3D personalizadas, de forma a responder às necessidades específicas da sua empresa.
          A nossa tecnologia de impressão 3D permitem-nos oferecer precisão, qualidade e inovação adaptadas à sua visão. 
          Quer esteja à procura de prototipagem, otimização de produção ou melhoria dos seus produtos, a nossa equipa está aqui para apoiar os seus objetivos.`,
        `Fale connosco para saber como a Banana Frog 3D pode ajudar a dar vida às suas ideias. Venha explorar possibilidades de colaboração e personalização.`
      ]
    },
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
    product: {
      size_title: "Tamanhos"
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
      hyperlinksContent1:
        "O conteúdo deste Website pode incluir Hyperlinks (hiperligações) para outros Sites que não são operados pela Banana Frog 3D. A Banana Frog 3D não é responsável pelo conteúdo de qualquer outro Website, incluindo aqueles que dêem acesso ao presente ou cujo acesso tenha sido conseguido através do nosso Website.",
      hyperlinksContent2:
        "A Banana Frog 3D não endossa quaisquer Sites vinculados ou os produtos/serviços que são fornecidos nesses Sites. Os conteúdos nos sites vinculados podem mudar ao longo do tempo. Recomenda-se a verificação dos termos e políticas dos Sites vinculados.",
      hyperlinksContent3:
        "Ao fornecer neste Website um hyperlink para um Website externo, a Banana Frog 3D fá-lo na boa-fé de que este contenha ou possa conter informações relevantes adicionais às apresentadas no seu próprio Website. A existência desse hyperlink não implica nem pressupõe a sua revisão e aprovação por parte da Banana Frog 3D- em determinadas instâncias, um hyperlink poderá levá-lo a aceder a um Website que apresente informação contraditória à apresentada no nosso Website ou a outro pertencente à Banana Frog 3D ou às suas subsidiárias.",
    },
    cookie_policy: {
      title: "Política de Cookies",
      intro:
        "Este website recorre ao uso de cookies para proporcionar uma melhor experiência de utilização aos seus visitantes, bem como para assegurar que o mesmo se encontra em pleno funcionamento.",
      what_is_cookie: {
        title: "O que é um cookie",
        description1:
          "De modo a disponibilizarmos um serviço personalizado e eficiente aos nossos utilizadores torna-se necessário memorizar e armazenar informação sobre a forma como este website deve ser utilizado. Para tal, utilizamos ficheiros de texto reduzido denominados por cookies que contêm quantidades de informação reduzidas descarregadas para o computador ou outros dispositivos dos nossos utilizadores através de um servidor. O seu browser de internet posteriormente envia, em cada visita subsequente, estas cookies de volta para o website, permitindo o reconhecimento e memorização da identidade dos nossos visitantes, designadamente as preferências de utilização dos nossos utilizadores. Poderá encontrar aqui informação mais detalhada sobre cookies e seu respetivo funcionamento. A navegação neste website permite a recolha de informação com recurso a cookies e demais tecnologias (ex. web beacons, tags, scripts, armazenamento local).",
        description2:
          "Esta Política de Cookies faz parte da nossa Declaração de Privacidade. Para mais informações sobre nós e sobre a forma como protegemos as informações dos utilizadores consulte a nossa Declaração de Privacidade.",
      },
      cookies_title: "Cookies que podemos utilizar e porquê",
      cookies_description:
        "Quando utilizamos cookies no nosso website, podemos colocá-los dentro de uma das seguintes categorias:",
      cookies_we_may_use: [
        "- Os “Cookies estritamente necessários” são necessários para que o website funcione e não podem ser desligados nos nossos sistemas. Normalmente, só são configurados em resposta a ações levadas a cabo por si e que correspondem a uma solicitação de serviços, tais como definir as suas preferências de privacidade, iniciar sessão ou preencher formulários.",
        "- Os “Cookies de Analytics e desempenho” permitem-nos contar visitas e fontes de tráfego, para que possamos medir e melhorar o desempenho do nosso website. Podem ser configurados por nós ou por terceiros para nos ajudar a saber que páginas ou vídeos são os mais e menos populares e também para ver como os visitantes se movimentam pelo website.",
        "- Os “Cookies Funcionais” permitem que o website forneça uma funcionalidade e personalização melhoradas com base na sua interação com o website. Podem ser configurados por nós ou terceiros, como a Adobe, cujos serviços adicionámos às nossas páginas.",
        "- Os “Cookies de Publicidade e Targetização” podem ser configurados através do nosso website pelos nossos parceiros de publicidade, como a Adobe, Meta, LinkedIn e Google. Podem ser usados por essas empresas para construir um perfil sobre os seus interesses e mostrar-lhe anúncios relevantes noutros websites.",
        "- Os “Cookies de Redes Sociais” são configurados por um conjunto de serviços das redes sociais que adicionámos ao website para permitir que possa partilhar o nosso conteúdo com os seus amigos e conhecidos. Estes cookies são capazes de rastrear a sua navegação por outros websites e criar um perfil sobre os seus interesses. Isso pode afetar o conteúdo e as mensagens que vê noutros websites que visita.",
      ],
      cookie_duration: {
        title: "Quanto tempo ficam os cookies no meu dispositivo?",
        description:
          "O tempo que os cookies ficam no seu dispositivo depende se é um cookie “persistente” ou um cookie de “sessão”. Um cookie persistente irá ser armazenado num web browser e irá permanecer válido até à data de validade para o qual foi configurado, a não ser que o apague antes dessa data. Por outro lado, um cookie de sessão será apagado no fim da sua sessão web, quando o web browser for fechado.",
      },
      control_cookies: {
        title: "Como controlar os cookies?",
        description:
          "Pode controlar e gerir cookies de múltiplas formas. Informamos os utilizadores que a remoção ou bloqueio dos cookies poderá afetar a sua experiência de utilização e poderá limitar o acesso a algumas zonas ou funcionalidades deste website. Onde os cookies não forem estritamente necessários para o funcionamento do nosso website, iremos pedir o seu consentimento para a nossa utilização de cookies na sua primeira visita ao nosso website. Poderá também alterar as definições do seu browser para gerir e controlar cookies. Pode encontrar informação mais detalhada sobre como o fazer em http://www.aboutcookies.org/. Qualquer consentimento para aceitar ou rejeitar cookies é limitado ao website onde esta Política de Cookies se encontra e não para outros websites ou páginas, que podem ter sido linkadas ao nosso website. Para mais informações sobre como cookies são utilizados por esses websites, por favor consulte as políticas de privacidade e de cookies específicas desses websites.",
      },
      email_communications: {
        title: "Comunicações via Email",
        description:
          "Podemos também utilizar tecnologias de monitorização para determinar se os nossos visitantes leram, carregaram em links ou reencaminharam determinadas comunicações enviadas por nós através de email, com o objetivo de aferir a pertinência das nossas comunicações. Em caso de desacordo com esse modo de proceder os nossos utilizadores devem reverter a sua subscrição (unsubscribe) dado que não é possível enviar estes emails sem estes mecanismos de monitorização ativos. Os subscritores registados podem atualizar as suas preferências de comunicação a qualquer momento contactando-nos, ou podem cancelar a sua subscrição, seguindo as instruções no email de comunicação por nós enviado para o seu endereço eletrónico.",
      },
      changes: {
        title: "Alterações à Política de Cookies",
        description:
          "Esta Política de Cookies pode ser revista a qualquer momento, de acordo com o nosso critério. Quando se fizerem tais alterações, a data de revisão no topo da página será alterada. A Política de Cookies alterada entrará em vigor a partir da data de revisão. Recomendamos os utilizadores do nosso website que revejam as Políticas de Cookies periodicamente, com o propósito de ficarem informados sobre a nossa gestão das cookies.",
      },
      dispute_resolution: {
        title: "Resolução de Litigios",
        description1:
          "Nos termos e em cumprimento do disposto na Lei n.º 144/2015, de 08.09, a Banana Frog 3D disponibiliza a informação necessária para que o cliente consumidor possa exercer o seu direito de reclamação junto de uma entidade oficial, terceira e imparcial que o ajudará a resolver o litígio em questão. A resolução alternativa de litígios é a possibilidade que todos os consumidores têm ao seu dispor de recorrer a entidades oficiais que os ajudem na resolução ou orientação, de algum conflito, antes de abrirem processos litigiosos nos Tribunais.",
        description2:
          "Em regra, o procedimento pode descrever-se conforme segue:",
        steps: [
          "1) O cliente consumidor pede a um terceiro imparcial que intervenha como intermediário entre si e o fornecedor ou prestador de serviços que é o alvo da sua reclamação.",
          "2) O intermediário pode sugerir uma solução para a sua reclamação, impor uma solução a ambas as partes ou reunir as partes para encontrar uma solução.",
        ],
        description3:
          "A resolução alternativa de litígios pode traduzir-se em 'mediação', 'conciliação' ou 'arbitragem'. A resolução alternativa de litígios é, por norma, menos dispendiosa, menos formal e mais rápida do que a via judicial. Assim, em caso de litígio, o cliente consumidor pode recorrer a uma Entidade de Resolução Alternativa de Litígios de consumo:",
        arbitration_centers: [
          "- Centro de Arbitragem de Conflitos de Consumo de Lisboa: http://www.centroarbitragemlisboa.pt",
          "- Centro de Arbitragem de Conflitos de Consumo do Vale do Ave/Tribunal Arbitral: http://www.triave.pt",
          "- CIAB - Centro de Informação, Mediação e Arbitragem de Consumo (Tribunal Arbitral de Consumo): http://www.ciab.pt/pt",
          "- CNIACC - Centro Nacional de Informação e Arbitragem de Conflitos de Consumo: https://www.cniacc.pt/pt/",
          "- Centro de Arbitragem de Conflitos de Consumo do Distrito de Coimbra: http://www.centrodearbitragemdecoimbra.com",
          "- Centro de Informação, Mediação e Arbitragem de Conflitos de Consumo do Algarve: http://www.consumoalgarve.pt",
          "- Centro de Informação de Consumo e Arbitragem do Porto: http://www.cicap.pt",
          "- Centro de Arbitragem de Conflitos de Consumo da Madeira: https://www.madeira.gov.pt/cacc",
        ],
        consumer_portal:
          "Mais informações em Portal do Consumidor www.consumidor.pt",
      },
      complaint_book: {
        title: "Livro de reclamações",
        link: "https://www.livroreclamacoes.pt/inicio",
      },
    },
    privacyPolicy: {
      title: "Política de privacidade",
      intro: {
        text: `Esquilo Tranquilo Lda, que opera comercialmente como Banana Frog 3D, com sede na Rua Leopoldo de Almeida, 30, 2750-035, Cascais, Cascais e Estoril, pessoa coletiva número 518178420, é detentora do presente website. A utilização do www.bananafrog3d.com reconhece os termos e condições gerais abaixo enumerados e descritos. A sua aceitação é absolutamente indispensável à utilização dos serviços e informações aqui prestados. Caso não concorde com os mesmos, deverá cessar imediatamente a utilização deste Website.
          www.bananafrog3d.com é um site que pretende promover serviços relacionados com a modelação e impressão de objectos 3D.
          À Banana Frog 3D reserva-se o direito de, a qualquer momento, sem necessidade de aviso prévio e com efeitos imediatos, alterar, adicionar, atualizar, eliminar, parcial ou totalmente, os presentes Termos e Condições de Utilização e Política de Privacidade. Garantindo, em qualquer circunstância, a qualidade, segurança, legalidade, veracidade e exatidão das informações dos respetivos imóveis e ofertas no website publicados. O utilizador deve consultar periodicamente a página destes Termos e condições de utilização e Política de Privacidade para confirmar se foram efetuadas quaisquer atualizações ou alterações. Caso não concorde com alguma destas não deve utilizar o presente Website.`,
      },
      websiteUse: {
        title: "Utilização do Website",
        text: "Os Utilizadores que visitam o Website podem aceder e ler todo o conteúdo contido no mesmo, sem necessidade de registar dados ou informações pessoais. Este Website, ou qualquer um dos nossos serviços, não deverá ser utilizado:",
        list: [
          "- Por qualquer razão ou finalidade que seja ilegal, difamatória, ofensiva, prejudicial, abusiva, invasiva da privacidade de outrem ou censurável;",
          "- De forma que possa prejudicar ou interromper este Website ou qualquer um dos nossos serviços, ou a utilização pacífica por parte de outros utilizadores;",
          "- Para transmitir vírus ou outra codificação maliciosa que possam danificar ou perturbar equipamento ou sistema informático (hardware ou software) ou equipamento de telecomunicações;",
          "- De forma que possa ofender outrem ou prejudicar a Banana Frog 3D, designadamente, enviar ou disponibilizar qualquer conteúdo ilegal, falso, enganoso, ameaçador, maldoso, abusivo, difamatório, injurioso, invasivo da privacidade, prejudicial ou ainda que possa afetar negativamente a imagem ou atividade da Banana Frog 3D;",
          "- Para promover qualquer tipo de atividade comercial, ou enviar ou disponibilizar informação ou conteúdos que pertencem a terceiros e que não tem o direito de utilizar, como, por exemplo, conteúdos protegidos por direitos de autor de terceiros ou conteúdos que contenham dados pessoais de terceiros.",
        ],
        general:
          "Em geral, o Utilizador deve utilizar o Website de forma responsável, prudente e cuidadosa, não devendo perturbar ou danificar a continuidade ou integridade do mesmo. A Banana Frog 3D não é responsável por quaisquer danos diretos, indiretos e ou negligentes decorrente do uso da informação contida neste Website ou do próprio Website bem como da conduta prejudicial ou perturbadora do Utilizador.",
      },
      infoContent: {
        title: "Informações e conteúdos deste website",
        paragraphs: [
          "Todos os conteúdos e informações publicados no presente website são da responsabilidade da Banana Frog 3D que zela pela veracidade e transparência dos mesmos. Esforçando-se para oferecer informações úteis, atualizadas e ajustadas à realidade. No entanto, a mesma pode não estar correta ou completamente atualizada. Neste sentido, não nos podemos responsabilizar por quaisquer ações tomadas como resultado de ou com base nas informações contidas ou fornecidas por este Website, seja numa ação de contrato, negligência ou outra ação ilícita. Através bananafrog@bananafrog3d.com poderá sempre enviar as suas sugestões ou erratas.",
          "À Banana Frog 3D está reservado o direito de mover, alterar, excluir o Website, ou conteúdo do mesmo (incluindo o conteúdo de utilizadores registados, se o caso), a qualquer momento e por qualquer motivo. Deve, portanto, manter uma cópia de qualquer conteúdo que enviar para o Website, que deseje manter. Depois de ter carregado o conteúdo, pode optar por excluir o conteúdo a qualquer momento.",
          "Caso deseje reportar as suas preocupações relativas a qualquer conteúdo disponível neste site, por favor, envie um e-mail diretamente para bananafrog@bananafrog3d.com.",
        ],
      },
      hyperlinks: {
        title: "Utilização de Hyperlinks",
        paragraphs: [
          "O conteúdo deste Website pode incluir Hyperlinks (hiperligações) para outros Sites que não são operados pela Banana Frog 3D. A Banana Frog 3D não é responsável pelo conteúdo de qualquer outro Website, incluindo aqueles que deem acesso ao presente ou cujo acesso tenha sido conseguido através do nosso Website.",
          "A Banana Frog 3D não endossa quaisquer Sites vinculados ou os produtos/serviços que são fornecidos nesses Sites. Os conteúdos nos sites vinculados podem mudar ao longo do tempo. Recomenda-se a verificação dos termos e políticas dos Sites vinculados.",
          "Ao fornecer neste Website um hyperlink para um Website externo, a Banana Frog 3D fá-lo na boa-fé de que este contenha ou possa conter informações relevantes adicionais às apresentadas no seu próprio Website. A existência desse hyperlink não implica nem pressupõe a sua revisão e aprovação por parte da Banana Frog 3D- em determinadas instâncias, um hyperlink poderá levá-lo a aceder a um Website que apresente informação contraditória à apresentada no nosso Website ou a outro pertencente à Banana Frog 3D ou às suas subsidiárias."
        ],
      },
      responsibilityContacts: {
        title: "A Nossa Responsabilidade e Contactos",
        paragraphs: [
          "A Banana Frog 3D não é responsável, por perdas ou danos diretos, indiretos ou específicos ou quaisquer outras consequências provenientes do acesso ou utilização deste Website, nem de qualquer informação no mesmo contida. Não obstante, estamos disponíveis para discutir com o utilizador as implicações de qualquer questão que venha a surgir, devendo contactar-nos através do nosso site em www.bananafrog3d.com (contactos), através da morada Rua Leopoldo de Almeida, 30, 2750-035 Cascais, Cascais e Estoril, ou através do endereço de e-mail bananafrog@bananafrog3d.com.",
          "Ao aceder à nossa área de contacto, o utilizador estará a aceitar que a informação que nos presta, através desse contacto, passará a ser detida pela Banana Frog 3D, que a poderá utilizar nos termos que entender mais adequados, não havendo lugar, em situação alguma, a qualquer direito ou pagamento a seu favor por essa utilização.",
          "Até ao limite máximo permitido por lei, todas as garantias, explícitas ou implícitas, encargos ou avais, representações e outros termos e condições de qualquer tipo relacionada com este Website ou matéria não contida nestes Termos e Condições estão expressamente excluídas.",
          "Nada nestes Termos de Utilização e Política de Privacidade exclui, restringe ou modifica qualquer direito ou recurso, ou quaisquer garantias, ou outro termo ou condição, implícita ou impostas por qualquer legislação que não possam ser legalmente excluídas ou limitadas. Isso pode incluir a legislação referente aos direitos do Consumidor, em território Português, que contém garantias que protegem os Consumidores de bens e serviços em determinadas circunstâncias.",
          "A responsabilidade de uma parte para com outra parte é reduzida na medida em que os atos ou omissões da outra parte, ou aqueles de uma terceira parte, contribuem para ou causam tal responsabilidade.",
          "Apesar de desenvolvermos as correspondentes ações para manter este Website livre de vírus informáticos ou outra codificação danosa, não podemos garantir que este seja o caso. Deverá, portanto, utilizar um software de segurança, atualizado a todo o tempo, para proteger o seu computador de tais softwares maliciosos.",
          "Apesar de desenvolvermos todos os esforços comerciais razoáveis para manter este Website disponível, não garantimos que o mesmo esteja acessível ou disponível numa base temporal constante ou que o acesso não seja interrompido ou isento de erros.",
          "A Banana Frog 3D é a entidade responsável pela recolha e tratamento de dados pessoais. Respeita a privacidade de todos os utilizadores e compromete-se em proteger todas as informações submetidas por cada utilizador em conformidade com a legislação nacional e comunitária em vigor.",
          "Todos os utilizadores podem navegar neste website sem a obrigatoriedade de efetuar ou submeter qualquer registo de dados. Quando submete os seus dados, caso pretenda receber novidades, campanhas ou outros associados a imóveis ou aos nossos serviços além das comunicações comerciais por si solicitadas pedimos que concorde com o envio da mesma.",
          "O fornecimento de dados pessoais apenas é necessário no caso de pretender efetuar uma marcação de visita, um pedido de informações ou pedido de contacto e será sempre garantido, nos termos da lei, o direito de acesso, retificação e anulação de qualquer dado fornecido, podendo aquele direito ser exercido por escrito, a qualquer momento, através do e-mail bananafrog@bananafrog3d.com ou clicando no link de cessação da subscrição, na parte inferior do e-mail."
        ],
      },
      dataRegistration: {
        title: "Registo de dados",
        paragraphs: [
          "Os dados pessoais de cada utilizador serão mantidos enquanto a subscrição e/ou pedidos do utilizador estiverem ativos, com o objetivo de melhorar os serviços oferecidos, pelo que após a sua caducidade serão despersonalizados e não identificáveis. É-lhe permitido questionar os dados e poderá solicitar a eliminação dos dados, retificação, atualização ou completar os mesmos. Estes pedidos devem ser encaminhados para bananafrog@bananafrog3d.com.",
          "Recolhemos informação pessoal, via o preenchimento voluntário dos devidos formulários dispostos para marcação de visitas, pedidos de informações sobre imóveis ou serviços e pedidos de contacto.",
          "Ao contactar-nos através de e-mail, subscrever informações grátis, obriga-nos à recolha do seu endereço de e-mail, nome e outros dados específicos de identificação pessoal, traduzidos normalmente pelo nome e número de contacto.",
          "Ao pedir dados pessoais sensíveis, assegurar-nos-emos que a sua recolha e utilização será feita no rigoroso cumprimento da legislação aplicável à recolha e proteção de dados. Se pretendermos utilizar os seus dados pessoais para além dos fins estabelecidos inicialmente, pediremos o seu consentimento. Poderá escolher antecipadamente dar esse consentimento aquando da recolha inicial de dados."
        ],
      },
      automaticDataCollection: {
        title: "Dados recolhidos automaticamente",
        text: "Os domínios e endereços de IP dos visitantes são registados automaticamente. Esta informação não identifica o utilizador, mas apenas o computador utilizado no acesso ao site. Estes dados são analisados a nível global para verificar em que local do mundo é que o site está a ser utilizado, de forma a assegurar a sua cobertura, permitindo que o nosso serviço ao utilizador possa ser melhorado. Os dados pessoais de cada utilizador não são objeto de recolha e análise neste processo."
      },
      dataRetention: {
        title: "Retenção de dados",
        text: "Os dados serão mantidos enquanto a subscrição do utilizador estiver ativa, com o objetivo de melhorar os serviços oferecidos, pelo que após a sua caducidade serão despersonalizados e não identificáveis. Apenas serão recolhidas informações adicionais acerca do utilizador para além das mencionadas acima para efeitos contratuais adjacentes aos serviços prestados."
      },
      accessData: {
        title: "Acesso aos dados pessoais",
        text: "Para solicitar esclarecimentos acerca do acesso aos dados pessoais, ou para o esclarecimento de questões relacionadas com a política de privacidade de dados, praticada na Banana Frog 3D, contacte-nos através do e-mail bananafrog@bananafrog3d.com, ou utilize o seguinte endereço postal: Rua Leopoldo de Almeida, 30, 2750-035 Cascais. Fornecer-lhe-emos uma cópia dos dados pessoais que dispomos sobre si num prazo máximo de 40 dias, a contar do seu pedido feito para este site; para este fim, ser-lhe-á exigida uma prova de identificação. É-lhe permitido questionar os dados e, onde apropriado, poderá: apagar os dados, retificá-los, emendá-los ou completá-los. Reservamo-nos ao direito de recusa de fornecimento da cópia dos dados pessoais do utilizador, obrigando-nos a apresentar uma justificação para essa decisão. O utilizador poderá contestar a nossa decisão de recusa de fornecimento de cópia com os seus dados pessoais.",
      },
    },
  },
};

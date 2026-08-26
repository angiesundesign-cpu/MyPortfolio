export type Project = {
  slug: string;
  title: string;
  cardTitle: string;
  disciplines: string[];
  location: string;
  year: string;
  summary: string;
  cover: string;
  gallery: string[];
  externalLabel?: string;
  externalHref?: string;
};

const media = (id: string, ext: string) =>
  `/assets/wix/${id}.${ext}`;

export const projects: Project[] = [
  {
    slug: 'waterfall',
    title: 'Waterfall',
    cardTitle: 'Waterfall',
    disciplines: ['Furniture', 'Industrial Design', 'CMF Design', 'Design Research', 'Woodworking'],
    location: 'Dubuque',
    year: '2022',
    summary: 'Create a cohesive yet diverse collection of occasional pieces that embody adaptable sophistication, allowing customers to curate spaces that reflect their personal style while maintaining functional excellence.',
    cover: media('4ed940_bfdf4787d6ef44f09cc1153fd3684745', 'png'),
    gallery: [
      media('4ed940_6a741e27d54f4c51a6e987be36b06e46', 'jpg'),
      media('4ed940_e81088c6b8ff4ca09819a266aa5a4fc7', 'jpg'),
      media('4ed940_c5e43833e8474db8b6bfa58c7dfb0ad8', 'jpg'),
      media('4ed940_0c042874f3f14886a3bd39e28de33fab', 'jpg'),
      media('4ed940_eb5e8be5e6b0423d91cd4fc81f52ff19', 'jpg'),
      media('4ed940_a6c1330140174e07ade0d1f10f8721d0', 'jpg'),
    ],
    externalLabel: 'Explore Flexsteel Website',
    externalHref: 'https://www.flexsteel.com/',
  },
  {
    slug: 'emard',
    title: 'Emard',
    cardTitle: 'Emard - Delta Faucet',
    disciplines: ['Faucet', 'Industrial Design', '3D Printing', 'Prototyping'],
    location: 'Indianapolis, IN',
    year: '2019',
    summary: "This project is sponsored by Delta Faucet Co. The design objective is to create a faucet inspired by Hector Guimard's armchairs.",
    cover: media('4ed940_7d8252cc2f274e80ab81167b8ee4cca3', 'png'),
    gallery: [
      media('4ed940_ac2a9ec9baf14389a6df0dc8fe64c1c7', 'png'),
      media('4ed940_7b4e7211253e4ab891110c10d795d83e', 'jpg'),
      media('4ed940_b2067a559ac340db88f57aba42a0ba93', 'jpg'),
      media('4ed940_ec4e24de29694e75a682a6b5e7277635', 'jpg'),
      media('4ed940_6768b5edf3764629ac90c4a1a752f692', 'jpg'),
      media('4ed940_7b0d60eb559545b9b746a9833480675c', 'png'),
    ],
  },
  {
    slug: 'bsc',
    title: 'Blank Street Coffee',
    cardTitle: 'Blank Street Coffee',
    disciplines: ['Commerce', 'Strategy Design', 'UI / UX Design', 'Marketing'],
    location: 'New York',
    year: '2023',
    summary: 'Blank Street Coffee rapidly expanded to over 40 locations in just two years. This project aims to relocate Blank Street’s uniqueness within the F&B industry.',
    cover: media('4ed940_abc56d35a49243219bc6b0cade895e0d', 'png'),
    gallery: [
      media('4ed940_44ee3ce6f1d74fac8a8ccc18ddf52aff', 'png'),
      media('4ed940_880eab58deaa4d938ef6c566f86ce6cd', 'jpg'),
      media('4ed940_7e91ecd9770b49b3802faceb311bbed4', 'png'),
      media('4ed940_c30db68596054fa0a2f6dd7ad1bf6d12', 'gif'),
      media('4ed940_1bf835807c2a4541b9e91d501d346de3', 'png'),
      media('4ed940_760414bcafaa4e7a8b7fe260372dcb24', 'png'),
      media('4ed940_a8b801b1fb9d4325b4660222be27c3aa', 'png'),
    ],
  },
  {
    slug: 'boulder',
    title: 'Boulder',
    cardTitle: 'Boulder - Costco',
    disciplines: ['Kitchen Furniture', 'Industrial Design', 'Woodworking'],
    location: 'Dubuque, IA',
    year: '2022',
    summary: 'This collaborative project between Flexsteel Industries Inc. and Costco focuses on designing a wine bar and bar cart to complement the existing Boulder collection. All dimensions have been carefully considered to ensure optimal ergonomics.',
    cover: media('4ed940_c3a3cc1001144976b65701af23ea8934', 'png'),
    gallery: [
      media('4ed940_6c8b68cf66cf4cd5b28e03b9f7d2d749', 'png'),
      media('4ed940_39ceb22410c94466805230aed3451359', 'jpg'),
    ],
  },
  {
    slug: 'sfhs',
    title: 'Search For High School',
    cardTitle: 'Search For High School',
    disciplines: ['Website & Consultations', 'Service Design', 'UI / UX Design', 'Strategy Design', 'Design Research'],
    location: 'New York',
    year: '2024',
    summary: 'Search For High School is a search platform dedicated to bridging the information gap between Chinese students and American high schools.',
    cover: media('4ed940_c41676b230574806a77baf90418a5551', 'jpg'),
    gallery: [
      media('4ed940_6bb27fb95bb1423aaaff80ec3f58540c', 'png'),
      media('4ed940_7181aad6e27f451483cc70124d800c65', 'png'),
      media('4ed940_9829fd15b5244b66bd0e8633d3aa2aa1', 'png'),
      media('4ed940_1f321b069a384236af3e41b0b1073f82', 'png'),
      media('4ed940_1cc47be4961f45c1b98ca4f212e2dc45', 'png'),
      media('4ed940_093cdcd729ee47caad19b2632c5cb0ab', 'png'),
      media('4ed940_d1a454b8968b4d7096fe0cc4747e9ada', 'gif'),
    ],
    externalLabel: 'Explore the Website',
  },
  {
    slug: 'fillin',
    title: 'Fillin',
    cardTitle: 'Fillin - GCA',
    disciplines: ['Package', 'Industrial Design', 'Sustainable Design', 'Material Learning', 'Team Project'],
    location: 'West Lafayette, IN',
    year: '2021',
    summary: 'The design objective is to create a recycling system with a novel packaging filler made of recyclable material to replace traditional plastic fillers used for online shopping packaging. This project was nominated for Green Concept Award in 2021.',
    cover: media('4ed940_ac5e2b89eb2841d4b476a2b78dc86d36', 'jpg'),
    gallery: [
      media('4ed940_ac5e2b89eb2841d4b476a2b78dc86d36', 'jpg'),
      media('4ed940_f6a45ac4305e4f538d08306bd516cca2', 'png'),
      media('4ed940_446d4d6ea9f4404185dc525fc7a65b19', 'png'),
      media('4ed940_9192a3b16baf4f2abb0bbbcd2bda9969', 'png'),
      media('4ed940_64517cc8820b4f9e80ec371eb355ae88', 'png'),
      media('4ed940_dd86994be223490c9e5fc6af72ce9a74', 'png'),
      media('4ed940_ed3255d9a3a343258dde48e51270339a', 'png'),
    ],
  },
  {
    slug: 'catian',
    title: 'Catian',
    cardTitle: 'Catian',
    disciplines: ['Pet & Healthcare', 'Industrial Design', 'Social Impact'],
    location: 'West Lafayette, IN',
    year: '2021',
    summary: 'This project designs a product that eases daily insulin injections for pet owners whose cats are relatively untamed and aggressive, especially when the owners never had injection experience before.',
    cover: media('4ed940_e37fd3ae8db1445282a8149747db3647', 'png'),
    gallery: [
      media('4ed940_094172b55e3b4b89b65f346e3c952b65', 'png'),
      media('4ed940_395d9499f265489a91c8c7472cbe0c79', 'jpg'),
      media('4ed940_348804c869744f758061cfa5f9d4f9df', 'jpg'),
      media('4ed940_e7736e75108c4cffad951deea051cd6d', 'jpg'),
      media('4ed940_5362da4d79d541dda8935f23b28ec50d', 'jpg'),
      media('4ed940_64c017951bc4480b829633e1a861605b', 'jpg'),
      media('4ed940_f204446c469e475ca8459d0ec8aa5ca9', 'jpg'),
    ],
  },
  {
    slug: 'materials-and-manufacture',
    title: 'Materials & Manufacture',
    cardTitle: 'Materials & Manufacture',
    disciplines: ['Consumer Goods', 'Industrial Design', 'Material Learning', 'Manufacturing Learning'],
    location: 'West Lafayette, IN',
    year: '2018 – 2019',
    summary: 'This page contains three different projects from my time at Purdue. By exploring diverse types of machinery and materials, I learned about manufacturing and the potential of products in mass production.',
    cover: media('4ed940_a3f972f593224b7c88d4082301758c98', 'png'),
    gallery: [
      media('4ed940_d8cbb2b93e51437fb0873ff6a695890b', 'png'),
      media('4ed940_034440618fcc4048aa6b550a7465f185', 'png'),
      media('4ed940_03337cdafbca4a21b9d4c56d00a5f702', 'png'),
      media('4ed940_c1a46b4a14f34b11a3e9cd8fbb1db135', 'png'),
    ],
  },
];

export const regoCard = {
  cardTitle: 'RE:GO',
  disciplines: ['Industrial Design'],
  cover: media('4ed940_8fee5788318743d296b1c73b0fd8936c', 'png'),
};

export const expertise = [
  ['Industrial Design', 'Drawing on extensive product and furniture design expertise, I create functional, aesthetically compelling solutions that meet user needs.'],
  ['Design Strategy', 'My strategic approach ensures solutions address user needs while aligning with business goals and sustainability initiatives.'],
  ['Design Research', 'I conduct comprehensive research including user studies, market analysis, trend forecasting, material testing, and ergonomic evaluation.'],
  ['UI / UX Design', 'I use user-centered design principles, research, and interactive prototyping to create intuitive digital experiences.'],
  ['Sustainable Design', 'Sustainability principles guide my process from material selection to production strategies and circular design.'],
  ['Life Cycle Analysis (LCA)', 'My biobased materials and life cycle analysis experience supports lower-impact and more circular product decisions.'],
  ['CMF Design', 'Learning in progress on Udemy — Rina Shin, “What is CMF Design?”'],
] as const;

export const getProject = (slug: string) => projects.find((project) => project.slug === slug);

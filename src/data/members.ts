export enum OccupationSection {
  Leader = "Leader",
  Collaborators = "Collaborators",
  Researchers = "Researchers",
  ExternalResearchers = "ExternalResearchers",
  Alumni = "Alumni"
}


export interface Author {
  name: string;
  title: string;
  occupation: OccupationSection;
  selected: boolean;
  url: string;
  image_url: string;
  email?: string;
  school?: string;
  university?: string;
  idx: number;
  github?: string;
  twitter?: string;
  linkedin?: string;
  instagram?: string;
  website?: string;
  x?: string;
  bluesky?: string;
  threads?: string;
  mastodon?: string;
  youtube?: string;
  twitch?: string;
  scholar?: string;
  microsoft?: string;
  cv?: string;
}

export interface Authors {
  [key: string]: Author;
}

const authors: Authors = {
  // example author
  example: {
    name: "Example Author",
    title: "Example Title",
    occupation: OccupationSection.Leader,
    selected: false,
    url: "https://example.com",
    image_url: "/images/author.jpg",
    idx: 0,
    school: "Example School",
    github: "",
    twitter: "",
    linkedin: "",
    instagram: "",
    website: "",
    x: "",
    bluesky: "",
    threads: "",
    mastodon: "",
    youtube: "",
    twitch: "",
    scholar: "",
    microsoft: "",
    cv: "",
  },

  // Leader
  chunouyang: {
    name: "A/Prof. Chun Ouyang",
    title: "School of Information Systems @QUT",
    occupation: OccupationSection.Leader,
    selected: true,
    url: "https://www.qut.edu.au/about/our-people/academic-profiles/c.ouyang",
    image_url: "https://cdn.jsdelivr.net/gh/ZhipengHe/ImgRepo@master/img/ChunOuyang.jpg",
    idx: 1,
    email: "c.ouyang@qut.edu.au",
    school: "School of Information Systems",
    university: "Queensland University of Technology",
    linkedin: "https://www.linkedin.com/in/chunouyang",
    scholar: "https://scholar.google.com.au/citations?user=aQqD_CQAAAAJ",
  },

  catarinamoreira: {
    name: "A/Prof. Catarina Moreira",
    title: "Data Science Institute @UTS, UNESCO Co-Chair on AI&XR",
    occupation: OccupationSection.Leader,
    selected: true,
    url: "https://profiles.uts.edu.au/Catarina.PintoMoreira",
    image_url: "https://cdn.jsdelivr.net/gh/ZhipengHe/ImgRepo/img/Catarina.png",
    idx: 2,
    email: "Catarina.PintoMoreira@uts.edu.au",
    school: "Data Science Institute",
    university: "University of Technology Sydney",
    linkedin: "https://www.linkedin.com/in/catarinapmoreira",
    github: "https://github.com/catarina-moreira",
    scholar: "https://scholar.google.com/citations?user=nThsEsMAAAAJ",
  },

  // Collaborators
  renukasindhgatta: {
    name: "Dr. Renuka Sindhgatta",
    title: "IBM Research - AI @Bangalore, India",
    occupation: OccupationSection.Collaborators,
    selected: true,
    url: "https://research.ibm.com/people/renuka-sindhgatta",
    image_url: "https://cdn.jsdelivr.net/gh/ZhipengHe/ImgRepo@master/img/Renuka.jpg",
    idx: 1,
    email: "renuka.sr@ibm.com",
    school: "IBM Research - AI",
    university: "Bangalore, India",
    linkedin: "https://www.linkedin.com/in/renuka-sindhgatta-9042242",
    scholar: "https://scholar.google.com/citations?user=P-YUol0AAAAJ",
  },
  yuexu: {
    name: "A/Prof. Yue Xu",
    title: "School of Computer Science @QUT",
    occupation: OccupationSection.Collaborators,
    selected: true,
    url: "https://www.qut.edu.au/about/our-people/academic-profiles/yue.xu",
    image_url: "https://cdn.jsdelivr.net/gh/ZhipengHe/ImgRepo@master/img/YueXu.jpg",
    idx: 2,
    email: "yue.xu@qut.edu.au",
    school: "School of Computer Science",
    university: "Queensland University of Technology",
    linkedin: "https://www.linkedin.com/in/yue-xu-7368b133",
    scholar: "https://scholar.google.com/citations?user=dGr7W1kAAAAJ",
  },

  joaquimjorge: {
    name: "Prof. Joaquim Jorge",
    title: "Instituto Superior Técnico @ULisboa",
    occupation: OccupationSection.Collaborators,
    selected: true,
    url: "https://web.ist.utl.pt/jorgej/",
    image_url: "https://cdn.jsdelivr.net/gh/ZhipengHe/ImgRepo@master/img/Joaquim.jpg",
    idx: 4,
    email: "jorgej@tecnico.ulisboa.pt",
    school: "Instituto Superior Técnico",
    university: "University of Lisbon",
    linkedin: "https://www.linkedin.com/in/jorgej",
    scholar: "https://scholar.google.com/citations?user=RgiMdpAAAAAJ",
  },

  alistairbarros: {
    name: "Prof. Alistair Barros",
    title: "School of Information Systems @QUT",
    occupation: OccupationSection.Collaborators,
    selected: true,
    url: "https://www.qut.edu.au/about/our-people/academic-profiles/alistair.barros",
    image_url: "https://cdn.jsdelivr.net/gh/ZhipengHe/ImgRepo@master/img/Alistair.jpg",
    idx: 5,
    email: "alistair.barros@qut.edu.au",
    school: "School of Information Systems",
    university: "Queensland University of Technology",
    linkedin: "https://www.linkedin.com/in/alistairbarros/",
  },

  margotbrereton: {
    name: "Prof. Margot Brereton",
    title: "School of Computer Science @QUT",
    occupation: OccupationSection.Collaborators,
    selected: true,
    url: "https://www.qut.edu.au/about/our-people/academic-profiles/m.brereton",
    image_url: "https://cdn.jsdelivr.net/gh/ZhipengHe/ImgRepo@master/img/Margot.jpg",
    idx: 3,
    email: "m.brereton@qut.edu.au",
    school: "School of Computer Science",
    university: "Queensland University of Technology",
    linkedin: "https://www.linkedin.com/in/margot-brereton-130015a",
  },

  // Researchers
  mythreyivelmurugan: {
    name: "Dr. Mythreyi Velmurugan",
    title: "Associate Lecturer, School of Information Systems @QUT",
    occupation: OccupationSection.Researchers,
    selected: true,
    url: "https://www.qut.edu.au/about/our-people/academic-profiles/m.velmurugan",
    image_url: "https://cdn.jsdelivr.net/gh/ZhipengHe/ImgRepo@master/img/Mythreyi.jpg",
    idx: 2,
    email: "mythreyi.velmurugan@hdr.qut.edu.au",
    school: "School of Information Systems",
    university: "Queensland University of Technology",
    linkedin: "https://www.linkedin.com/in/mythreyivelmurugan",
    scholar: "https://scholar.google.com/citations?user=MfkWJ84AAAAJ",
  },

  yuliangchou: {
    name: "Yu-Liang Chou (Leon)",
    title: "MPhil Graduate",
    occupation: OccupationSection.Alumni,
    selected: true,
    url: "",
    image_url: "https://cdn.jsdelivr.net/gh/ZhipengHe/ImgRepo@master/img/Leon.jpg",
    idx: 1,
    email: "",
    school: "",
    university: "",
    linkedin: "https://www.linkedin.com/in/leon-chou-3b56ba175",
  },

  pengyu: {
    name: "Peng Yu (Kenny)",
    title: "PhD Student, School of Information Systems @QUT",
    occupation: OccupationSection.Researchers,
    selected: false,
    url: "",
    image_url: "https://cdn.jsdelivr.net/gh/ZhipengHe/ImgRepo@master/img/PengYu.jpg",
    idx: 4,
    email: "p6.yu@hdr.qut.edu.au",
    school: "School of Information Systems",
    university: "Queensland University of Technology",
    linkedin: "https://www.linkedin.com/in/kenny-yu-b82373130",
  },

  bemaliwickramanayake: {
    name: "Bemali Wickramanayake",
    title: "PhD Student, School of Information Systems @QUT",
    occupation: OccupationSection.Researchers,
    selected: true,
    url: "",
    image_url: "https://cdn.jsdelivr.net/gh/ZhipengHe/ImgRepo@master/img/Bemali.png",
    idx: 5,
    email: "bemali.wickramanayake@hdr.qut.edu.au",
    school: "School of Information Systems",
    university: "Queensland University of Technology",
    linkedin: "https://www.linkedin.com/in/bemali-wickramanayake-b2627261",
  },

  jiawei: {
    name: "Jia Wei (Jenny)",
    title: "PhD Student, School of Information Systems @QUT",
    occupation: OccupationSection.Researchers,
    selected: true,
    url: "",
    image_url: "https://cdn.jsdelivr.net/gh/ZhipengHe/ImgRepo@master/img/Jenny.jpg",
    idx: 6,
    email: "jia.wei@hdr.qut.edu.au",
    school: "School of Information Systems",
    university: "Queensland University of Technology",
    linkedin: "https://www.linkedin.com/in/jia-jenny-wei-203795132/",
  },

  chihchenghsieh: {
    name: "Chihcheng Hsieh (Richard)",
    title: "PhD Student, School of Information Systems @QUT",
    occupation: OccupationSection.Researchers,
    selected: true,
    url: "",
    image_url: "https://cdn.jsdelivr.net/gh/ZhipengHe/ImgRepo@master/img/Richard.jpg",
    idx: 7,
    email: "c21.hsieh@qut.edu.au",
    school: "School of Information Systems",
    university: "Queensland University of Technology",
    linkedin: "https://www.linkedin.com/in/chihcheng-hsieh-04623989",
    github: "https://github.com/ChihchengHsieh",
  },

  zhipenghe: {
    name: "Zhipeng He (Zippo)",
    title: "PhD Student, School of Information Systems @QUT",
    occupation: OccupationSection.Researchers,
    selected: true,
    url: "https://zhipenghe.me",
    image_url: "https://cdn.jsdelivr.net/gh/ZhipengHe/ImgRepo@master/img/Zippo.jpg",
    idx: 8,
    email: "zhipeng.he@hdr.qut.edu.au",
    school: "School of Information Systems",
    university: "Queensland University of Technology",
    linkedin: "https://www.linkedin.com/in/zhipenghe",
    github: "https://github.com/ZhipengHe",
  },

  jingyang: {
    name: "Dr. Jing Yang (Roy)",
    title: "Post-doc Research Fellow, School of Information Systems @QUT",
    occupation: OccupationSection.Researchers,
    selected: true,
    url: "https://royjy.me/",
    image_url: "https://cdn.jsdelivr.net/gh/ZhipengHe/ImgRepo@master/img/Roy.jpg",
    idx: 1,
    email: "roy.j.yang@qut.edu.au",
    school: "School of Information Systems",
    university: "Queensland University of Technology",
    linkedin: "https://www.linkedin.com/in/roy-jingyang",
    scholar: "https://scholar.google.com/citations?user=Ms1FNhsAAAAJ",
    github: "https://github.com/roy-jingyang",
  },

  giuseppejordao: {
    name: "Giuseppe Jordão",
    title: "Research Assistant @QUT",
    occupation: OccupationSection.Researchers,
    selected: false,
    url: "",
    image_url: "https://cdn.jsdelivr.net/gh/ZhipengHe/ImgRepo@master/img/Giuseppe.jpg",
    idx: 9,
    email: "guiseppe.jordao@qut.edu.au",
    school: "School of Information Systems",
    university: "Queensland University of Technology",
    linkedin: "https://www.linkedin.com/in/giuseppe-jord%C3%A3o-5b6006120",
  },

  zepingwang: {
    name: "Zeping Wang (Chester)",
    title: "PhD Student, School of Information Systems @QUT",
    occupation: OccupationSection.Researchers,
    selected: true,
    url: "",
    image_url: "https://cdn.jsdelivr.net/gh/ZhipengHe/ImgRepo@master/img/Chester.jpg",
    idx: 10,
    email: "zeping.wang@hdr.qut.edu.au",
    school: "School of Information Systems",
    university: "Queensland University of Technology",
    linkedin: "https://www.linkedin.com/in/zeping-wang/",
  },

  mohammedosmangani: {
    name: "Mohammed Osman Gani",
    title: "PhD Student, School of Information Systems @QUT",
    occupation: OccupationSection.Researchers,
    selected: true,
    url: "",
    image_url: "https://cdn.jsdelivr.net/gh/ZhipengHe/ImgRepo@master/img/Osman.jpg",
    idx: 11,
    email: "mohammedosman.gani@hdr.qut.edu.au",
    school: "School of Information Systems",
    university: "Queensland University of Technology",
    linkedin: "https://www.linkedin.com/in/mohammed-osman-gani-3b75a0185/",
  },
  
  goncaloalmeida: {
    name: "Gonçalo Almeida",
    title: "Master Student, Instituto Superior Técnico @ULisboa",
    occupation: OccupationSection.ExternalResearchers,
    selected: true,
    url: "",
    image_url: "https://cdn.jsdelivr.net/gh/ZhipengHe/ImgRepo@master/img/Goncalo.jpg",
    idx: 2,
    email: "",
    school: "Instituto Superior Técnico",
    university: "University of Lisbon",
    linkedin: "https://www.linkedin.com/in/goncalo-h-almeida",
  },

  andreluis: {
    name: "André Luís",
    title: "Master Student, Instituto Superior Técnico @ULisboa",
    occupation: OccupationSection.ExternalResearchers,
    selected: true,
    url: "",
    image_url: "https://cdn.jsdelivr.net/gh/ZhipengHe/ImgRepo@master/img/Andre.jpg",
    idx: 3,
    email: "andre.t.luis@tecnico.ulisboa.pt",
    school: "Instituto Superior Técnico",
    university: "University of Lisbon",
    linkedin: "",
  },

  diogoalvito: {
    name: "Diogo Alvito",
    title: "Master Student, Instituto Superior Técnico @ULisboa",
    occupation: OccupationSection.ExternalResearchers,
    selected: true,
    url: "",
    image_url: "https://cdn.jsdelivr.net/gh/ZhipengHe/ImgRepo@master/img/Diogo.jpg",
    idx: 4,
    email: "",
    school: "Instituto Superior Técnico",
    university: "University of Lisbon",
    linkedin: "https://www.linkedin.com/in/diogoalvito",
  },

  alexanderstevens: {
    name: "Alexander Stevens",
    title: "Visiting PhD Student @QUT, PhD Researcher @KU Leuven",
    occupation: OccupationSection.ExternalResearchers,
    selected: true,
    url: "https://alexanderpaulstevens.github.io/portfolio/",
    image_url: "https://cdn.jsdelivr.net/gh/ZhipengHe/ImgRepo@master/img/alex.jpg",
    idx: 1,
    email: "alexander.stevens@kuleuven.be",
    school: "PhD Researcher",
    university: "KU Leuven",
    linkedin: "https://www.linkedin.com/in/alexander-stevens-354b41183/",
    scholar: "https://scholar.google.com/citations?user=fNeFT5EAAAAJ",
  },

};

export default authors;

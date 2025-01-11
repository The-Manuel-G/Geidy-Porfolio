import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Geidy A.",
  lastName: "Hernández",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Architect, English Teacher, Project Manager, Human Resources",
  avatar: "/images/avatar.jpg", // Ajusta la ruta a tu avatar real
  location: "America/Santo_Domingo",  // Zona horaria para República Dominicana
  languages: ["Spanish", "English"]
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>I occasionally write about architecture, education, and share insights on teaching, design, and project management.</>
};

const social = [
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/TU-PERFIL" // Ajusta tu perfil real
  },
  {
    name: "Email",
    icon: "email",
  
    link: 'mailto:geidy100@hotmail.com'
  }
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Architect, Educator, and Facilitator</>,
  subline: (
    <>
      I'm Geidy, from the Dominican Republic. I combine my expertise in architecture,
      English teaching, project management, and human resources to create impactful solutions.
    </>
  )
};

const about = {
  label: "About",
  title: "About Me",
  description: `Meet ${person.name}, an ${person.role} based in ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false
  },
  avatar: {
    display: true
  },
  calendar: {
    display: true,
    link: "https://cal.com"
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Geidy is passionate about merging architecture with education. Since 2010, she has taught English 
        at various institutions, while also managing construction projects as an architect (beginning in 2003). 
        Her dual background enables her to excel in roles involving project management and human resources, 
        thanks to strong interpersonal skills and leadership abilities.
      </>
    )
  },

  // EXPERIENCIA PROFESIONAL
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "Teaching Experience",
        timeframe: "2010 - Present",
        role: "English Teacher / Facilitator",
        achievements: [
          <>Prof. Inglés at Visión Mundial, El Seibo</>,
          <>Prof. Inglés at Escuela Regional de Turismo, Higüey</>,
          <>Prof. Inglés at Colegio Jardín Verde, Bávaro</>,
          <>Prof. Inglés at Colegio Morada de Sabiduría, Higüey</>,
          <>Prof. Inglés at Despacho de la Primera Dama, El Seibo</>,
          <>Prof. Inglés at Programa de Inglés por Inmersión, El Seibo</>,
          <>Facilitadora de Inglés en INFOTEP (recognized for innovative teaching strategies)</>
        ],
        images: []
      },
      {
        company: "Architecture & Projects",
        timeframe: "2003 - Present",
        role: "Architect / Project Manager / Contractor",
        achievements: [
          <>Guest Service at Iberoestar Hotel, Bávaro</>,
          <>Supervisora de Obra (Internship) at Ayuntamiento Municipal, El Seibo</>,
          <>Arq. Residente at Liceo La Higuera, El Seibo</>,
          <>Arq. Residente at Escuela Básica KM 8, El Seibo</>,
          <>Arq. Residente at Escuela Básica KM 6, Miches</>,
          <>Arq. Encargada at Redes de Distribución, Monte Plata</>,
          <>Contratista at Ministerio de Obras Públicas, La Romana</>,
          <>Managed both public and private projects, overseeing design, construction, budgeting, and efficient execution</>
        ],
        images: []
      }
    ]
  },

  // CURSOS Y SEMINARIOS
  courses: {
    display: true,
    title: "Courses & Seminars",
    items: [
      { name: "Informática", institution: "UASD, Sto. Dgo.", year: "2003" },
      { name: "Relaciones Humanas", institution: "Infotec, El Seibo", year: "2010" },
      { name: "Taller de Autosuficiencia Laboral", institution: "Iglesia SUD, El Seibo", year: "2011" },
      { name: "Taller de Fonética Inglés", institution: "Colegio la Alt, Higüey", year: "2009" },
      { name: "Tasación", institution: "CODIA, La Romana", year: "2010" },
      { name: "Oratoria", institution: "Iglesia SUD, El Seibo", year: "2011" },
      { name: "Electricidad Residencial", institution: "FEDETEC, El Seibo", year: "2011" },
      { name: "Administración y Finanzas", institution: "Lic. Rodolfo De La Cruz", year: "2013" },
      { name: "Habilitación Docente", institution: "UTESA, Sto. Dgo.", year: "2017" },
      { name: "Revit básico", institution: "INFOTEP, CODIA", year: "2019" },
      { name: "Manejo de las TICs", institution: "Mescyt", year: "2020" },
      { name: "Dirección y Gestión de Proyectos", institution: "EDUTEC, Santiago", year: "2023" },
      { name: "Negociación Direccionada a Resultados", institution: "EDUTEC, Santiago", year: "2023" },
      { name: "Evaluación, Selección, y Relación de Proveedores", institution: "EDUTEC, Santiago", year: "2023" },
      { name: "Gerencia de Compras y Negociación con Proveedores", institution: "EDUTEC, Santiago", year: "2023" },
      { name: "Microsoft Project", institution: "EDUTEC, Santiago", year: "2023" },
      { name: "Formación de Tutores en Ambiente Virtual", institution: "INFOTEP, El Seibo", year: "2023" },
      { name: "Planeación y Aprendizaje del Inglés como Segunda Lengua", institution: "Universidad UNIR", year: "2024" },
      { name: "Soft Skills y Habilidades Directivas", institution: "Universidad UNIR", year: "2024" },
      { name: "Paquete de Oficinas (Informática)", institution: "INFOTEP", year: "2024" },
      { name: "Formación Humana", institution: "INFOTEP", year: "2024" },
      { name: "Facilitador de Proceso de Enseñanza y Aprendizaje Centrado en el Participante", institution: "INFOTEP", year: "2023" }
    ]
  },

  // ESTUDIOS ACADÉMICOS
  studies: {
    display: true,
    title: "Studies",
    institutions: [
      {
        name: "Universidad Autónoma de Santo Domingo (UASD)",
        description: <>Degree in Architecture</>
      },
      {
        name: "Universidad Internacional De La Rioja (UNIR)",
        description: <>Teaching English as a Foreign Language (EFL) and Soft Skills Development</>
      }
    ]
  },

  // HABILIDADES TÉCNICAS
  technical: {
    display: true,
    title: "Technical Skills",
    skills: [
      {
        title: "Revit",
        description: <>Proficient in Revit for architectural modeling and design.</>,
        images: []
      },
      {
        title: "Microsoft Project",
        description: <>Skilled in project management using Microsoft Project.</>,
        images: []
      },
      {
        title: "AutoCAD",
        description: <>Experienced in drafting and 2D design using AutoCAD.</>,
        images: []
      },
      {
        title: "SketchUp",
        description: <>Capable of quick 3D modeling and rendering for architectural proposals.</>,
        images: []
      },
      {
        title: "Office Suite (Word, Excel, PowerPoint)",
        description: <>Highly proficient in creating documents, presentations, and data sheets.</>,
        images: []
      }
    ]
  },

  // HABILIDADES BLANDAS
  softSkills: {
    display: true,
    title: "Soft Skills",
    items: [
      {
        name: "Communication",
        description: "Effective at delivering clear messages, active listening, and bilingual interactions (Spanish, English)."
      },
      {
        name: "Team Leadership",
        description: "Coordinates diverse teams toward shared goals, fostering collaboration and efficiency."
      },
      {
        name: "Conflict Resolution",
        description: "Identifies underlying issues and mediates constructive solutions among stakeholders."
      },
      {
        name: "Adaptability",
        description: "Excels in dynamic environments, handling shifting priorities and meeting deadlines."
      },
      {
        name: "Negotiation",
        description: "Developed negotiation strategies for project contracts and supplier agreements."
      }
    ]
  }
};

const blog = {
  label: "Blog",
  title: "Writing about Architecture, Education, and More...",
  description: `Read what ${person.name} has been up to recently`
};

const work = {
  label: "Work",
  title: "My Projects",
  description: `Architecture, education, and management projects by ${person.name}`
};

const gallery = {
  label: "Gallery",
  title: "My Photo Gallery",
  description: `A collection of images by ${person.name}`,
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical"
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal"
    },
    {
        src: '/images/gallery/img-03.jpg',
        alt: 'Project image',
        orientation: 'horizontal'
    },
    {
        src: '/images/gallery/img-04.jpg',
        alt: 'Project image',
        orientation: 'horizontal'
    },
    {
        src: '/images/gallery/img-05.jpg',
        alt: 'Project image',
        orientation: 'horizontal'
    },
    {
        src: '/images/gallery/img-06.jpg',
        alt: 'Project image',
        orientation: 'horizontal'
    },
    {
        src: '/images/gallery/img-07.jpg',
        alt: 'Project image',
        orientation: 'horizontal'
    },
    {
        src: '/images/gallery/img-08.jpg',
        alt: 'Project image',
        orientation: 'horizontal'
    },
    {
        src: '/images/gallery/img-09.jpg',
        alt: 'Project image',
        orientation: 'horizontal'
    },
    {
        src: '/images/gallery/img-10.jpg',
        alt: 'Project image',
        orientation: 'horizontal'
    },
    {
        src: '/images/gallery/img-11.jpg',
        alt: 'Project image',
        orientation: 'horizontal'
    },  {
        src: '/images/gallery/img-06.jpg',
        alt: 'Project image',
        orientation: 'horizontal'
    }
    // Agrega más imágenes según tu preferencia
  ]
};

export { person, newsletter, social, home, about, blog, work, gallery };

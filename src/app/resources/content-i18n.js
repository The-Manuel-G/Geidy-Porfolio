import { InlineCode } from "@/once-ui/components";

const createI18nContent = (t) => {
    // 1) Información de la persona
    const person = {
        firstName: 'Geidy A.',
        lastName:  'Hernández',
        get name() {
            return `${this.firstName} ${this.lastName}`;
        },
        // Roles principales (puedes editar o resumir)
        role: "Architect, English Teacher, Project Manager, Human Resources",
        avatar: '/images/geidy-avatar.jpg', // Ajusta la ruta según tus assets
        location: 'America/Santo_Domingo',  // Zona horaria de República Dominicana
        languages: ['Spanish', 'English']   // Idiomas que domina
    };

    // 2) Newsletter
    const newsletter = {
        display: true,
        title: <>Subscribe to Geidy's Newsletter</>,
        description: <>I occasionally write about architecture, education, and share insights on teaching and design.</>
    };

    // 3) Redes sociales
    const social = [
        {
            name: 'LinkedIn',
            icon: 'linkedin',
            link: 'https://www.linkedin.com/in/geidy-hern%C3%A1ndez-110028325/', // Ajusta con tu perfil real
        },
        
        {
            name: 'Email',
            icon: 'email',
            link: 'mailto:geidy100@hotmail.com', // Ajusta a tu correo real
        },
    ];

    // 4) Sección de inicio (Home)
    const home = {
        label: 'Home',
        title: `Geidy's Portfolio`,
        description: `Portfolio website showcasing my work as an Architect, English Teacher, Project Manager, and HR specialist.`,
        headline: <>Architect, Educator, and Facilitator</>,
        subline: <>
            I'm Geidy A. Hernández, from El Seibo, Dominican Republic. Passionate about merging architecture, teaching, and project management.
        </>
    };

    // 5) Sección "About" (Acerca de mí)
    const about = {
        label: 'About',
        title: 'About Me',
        description: `Meet ${person.name}, an Architect and English Teacher from El Seibo, Dominican Republic, with extensive experience also in Project Management and Human Resources.`,
        tableOfContent: {
            display: true,
            subItems: true
        },
        avatar: {
            display: true
        },
        calendar: {
            display: true,
            link: 'https://cal.com' // Si deseas compartir tu calendario para citas
        },
        intro: {
            display: true,
            title: 'Introduction',
            description: <>
                I have been teaching English since 2010 and working in architectural projects since 2003.  
                Throughout my career, I have combined my passion for education, construction project management,
                and people development, making me versatile for roles in Human Resources and Project Management.
            </>
        },

        // EXPERIENCIA PROFESIONAL
        work: {
            display: true,
            title: 'Work Experience',
            experiences: [
                // --- EXPERIENCIA EN ENSEÑANZA (Teaching) ---
                {
                    company: 'Teaching Experience',
                    timeframe: '2010 - Present',
                    role: 'English Teacher / Facilitator',
                    achievements: [
                        "Taught English in multiple institutions: Visión Mundial (El Seibo), Escuela Regional de Turismo (Higüey), Colegio Jardín Verde (Bávaro), Colegio Morada de Sabiduría (Higüey), Despacho de la Primera Dama (El Seibo), and Programa de Inglés por Inmersión (El Seibo).",
                        "Served as English Facilitator in INFOTEP.",
                        "Recognized for innovative teaching strategies and positive student outcomes."
                    ],
                    images: []
                },
                // --- EXPERIENCIA EN ARQUITECTURA Y PROYECTOS ---
                {
                    company: 'Architecture & Project Management',
                    timeframe: '2003 - Present',
                    role: 'Architect / Project Manager / Contractor',
                    achievements: [
                        "Guest Service at Iberoestar Hotel, Bávaro.",
                        "Construction Supervisor at Ayuntamiento Municipal, El Seibo (Internship).",
                        "Resident Architect in Liceo La Higuera (El Seibo), Escuela Básica KM 8 (El Seibo), and Escuela Básica KM 6 (Miches).",
                        "Architect in charge of Redes de Distribución, Monte Plata.",
                        "Contractor for Ministerio de Obras Públicas, La Romana.",
                        "Oversaw construction, design, and efficient project execution in both public and private sectors."
                    ],
                    images: []
                },
            ]
        },

        // ESTUDIOS
        studies: {
            display: true,
            title: 'Studies',
            institutions: [
                {
                    name: 'Universidad Autónoma de Santo Domingo (UASD)',
                    description: <>Degree in Architecture</>
                },
                {
                    name: 'Universidad Internacional de La Rioja (UNIR)',
                    description: <>Teaching English as a Foreign Language and Soft Skills Development</>
                }
            ]
        },

        // CURSOS Y SEMINARIOS (Podemos crear una nueva sección "courses")
        courses: {
            display: true,
            title: 'Courses & Seminars',
            items: [
                { name: "Informatics", institution: "UASD, Santo Domingo", year: "2003" },
                { name: "Human Relations", institution: "Infotec, El Seibo", year: "2010" },
                { name: "Labor Self-sufficiency Workshop", institution: "Iglesia SUD, El Seibo", year: "2011" },
                { name: "English Phonetics Workshop", institution: "Colegio la Alt, Higüey", year: "2009" },
                { name: "Property Valuation (Tasación)", institution: "CODIA, La Romana", year: "2010" },
                { name: "Public Speaking (Oratoria)", institution: "Iglesia SUD, El Seibo", year: "2011" },
                { name: "Residential Electricity", institution: "FEDETEC, El Seibo", year: "2011" },
                { name: "Administration & Finance", institution: "Rodolfo De La Cruz", year: "2013" },
                { name: "Teaching Certification (Habilitación Docente)", institution: "UTESA, Santo Domingo", year: "2017" },
                { name: "Basic Revit", institution: "INFOTEP, CODIA", year: "2019" },
                { name: "ICT Management (Manejo de las TICs)", institution: "Mescyt", year: "2020" },
                { name: "Project Management & Leadership (Dirección y Gestión de Proyectos)", institution: "EDUTEC, Santiago", year: "2023" },
                { name: "Result-Oriented Negotiation", institution: "EDUTEC, Santiago", year: "2023" },
                { name: "Evaluation, Selection & Supplier Relations", institution: "EDUTEC, Santiago", year: "2023" },
                { name: "Procurement Management & Supplier Negotiations", institution: "EDUTEC, Santiago", year: "2023" },
                { name: "Microsoft Project", institution: "EDUTEC, Santiago", year: "2023" },
                { name: "Virtual Tutor Training", institution: "INFOTEP, El Seibo", year: "2023" },
                { name: "English Planning & Learning as a Second Language", institution: "Universidad UNIR", year: "2024" },
                { name: "Soft Skills & Managerial Abilities", institution: "Universidad UNIR", year: "2024" },
                { name: "Office Suite (Informatics)", institution: "INFOTEP", year: "2024" },
                { name: "Human Education & Development", institution: "INFOTEP", year: "2024" },
                { name: "Facilitator of Participant-Centered Learning", institution: "INFOTEP", year: "2023" },
            ]
        },

        // HABILIDADES TÉCNICAS
        technical: {
            display: true,
            title: 'Technical Skills',
            skills: [
                {
                    title: 'Revit',
                    description: <>Proficient in Revit for architectural modeling and design.</>,
                    images: []
                },
                {
                    title: 'Microsoft Project',
                    description: <>Skilled in project management using Microsoft Project.</>,
                    images: []
                }
            ]
        }
    };

    // 6) Sección de Blog
    const blog = {
        label: 'Blog',
        title: "Geidy's Blog",
        description: `Stay updated with ${person.name}'s latest articles on architecture, education, and more.`
    };

    // 7) Sección de Proyectos (Work)
    const work = {
        label: 'Work',
        title: 'My Projects',
        description: `Explore ${person.name}'s architecture, education, and management projects.`
    };

    // 8) Sección de Galería
    const gallery = {
        label: 'Gallery',
        title: 'My Project Gallery',
        description: `A collection of architectural, educational, and managerial work by ${person.name}.`,
        images: [
            {
                src: '/images/gallery/img-01.jpg',
                alt: 'Project image',
                orientation: 'vertical'
            },
            {
                src: '/images/gallery/img-02.jpg',
                alt: 'Project image',
                orientation: 'horizontal'
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
            // Agrega más según tu preferencia
        ]
    };

    return {
        person,
        social,
        newsletter,
        home,
        about,
        blog,
        work,
        gallery
    };
};

export { createI18nContent };

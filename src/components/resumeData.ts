export interface Resume {
    name: string;
    icon: string;
    skills: string[];
  }
  
  // Lista de currículums
  export const myResumes: Resume[] = [
    {
      name: "Project Manager Resume",
      icon: "briefcase",
      skills: ["Leadership", "Scheduling", "Budgeting", "Risk Management"]
    },
    {
      name: "Teacher Resume",
      icon: "teacher",
      skills: ["Pedagogy", "Lesson Planning", "Student Engagement"]
    },
    {
      name: "Administrative Assistant Resume",
      icon: "clipboard",
      skills: ["Organization", "Scheduling", "Record Keeping"]
    },
    {
      name: "Architect Resume",
      icon: "draftingCompass",
      skills: ["AutoCAD", "Revit", "Blueprints", "Construction"]
    },
    {
      name: "Interpreter Resume",
      icon: "comments",
      skills: ["Bilingual", "Spanish-English", "Simultaneous Translation"]
    },
    {
      name: "Translator Resume",
      icon: "translation",
      skills: ["Accuracy", "Localization", "Technical Documents"]
    },
    {
      name: "Complete Resume",
      icon: "checkCircle",
      skills: ["Everything", "All advanced features", "Total coverage"]
    }
  ];
  
  // Paleta de 21 colores metálicos únicos para habilidades
  export const metallicColors: string[] = [
    "#b22222", // Rojo metálico
    "#800080", // Púrpura metálico
    "#0000cd", // Azul metálico
    "#228b22", // Verde metálico
    "#daa520", // Dorado metálico
    "#4682b4", // Azul acero metálico
    "#a52a2a", // Marrón metálico
    "#708090", // Gris pizarra
    "#8b0000", // Rojo oscuro metálico
    "#4b0082", // Índigo metálico
    "#1e90ff", // Azul dodger metálico
    "#32cd32", // Verde lima metálico
    "#ffd700", // Oro
    "#b8860b", // Oro oscuro metálico
    "#6495ed", // Azul aciano metálico
    "#2e8b57", // Verde mar metálico
    "#ff4500", // Naranja roja metálico
    "#9932cc", // Púrpura oscuro metálico
    "#00ced1", // Turquesa oscuro metálico
    "#d2691e", // Chocolate metálico
    "#5f9ea0"  // Cadete azul metálico
  ];
  
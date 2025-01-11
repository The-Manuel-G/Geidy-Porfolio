import { IconType } from 'react-icons';

import {
    HiChevronUp,
    HiChevronDown,
    HiChevronRight,
    HiChevronLeft,
    HiArrowUpRight,
    HiOutlineArrowPath,
    HiCheck,
    HiMiniQuestionMarkCircle,
    HiMiniXMark,
    HiOutlineLink,
    HiExclamationTriangle,
    HiInformationCircle,
    HiExclamationCircle,
    HiCheckCircle,
    HiMiniGlobeAsiaAustralia,
    HiEnvelope,
    HiCalendarDays,
    HiClipboard,
    HiOutlineBriefcase,       // EJEMPLO para "briefcase"
    HiOutlineDocumentText,    // EJEMPLO para "document"
    HiOutlineChatBubbleLeft,  // EJEMPLO para "comments" (o algo similar)
} from "react-icons/hi2";

import {
    PiHouseDuotone,
    PiUserCircleDuotone,
    PiGridFourDuotone,
    PiBookBookmarkDuotone,
    PiImageDuotone,
    PiChalkboardTeacherDuotone // EJEMPLO para "teacher" (si existe)
} from "react-icons/pi";

import {
    FaDiscord,
    FaGithub,
    FaLinkedin,
    FaXTwitter,
    FaLanguage,           // EJEMPLO para "translation"
} from "react-icons/fa6";

// Nota: el naming varía. Ajusta según qué librerías y versiones uses. 

export const iconLibrary: Record<string, IconType> = {
    chevronUp: HiChevronUp,
    chevronDown: HiChevronDown,
    chevronRight: HiChevronRight,
    chevronLeft: HiChevronLeft,
    refresh: HiOutlineArrowPath,
    arrowUpRight: HiArrowUpRight,
    check: HiCheck,
    helpCircle: HiMiniQuestionMarkCircle,
    infoCircle: HiInformationCircle,
    warningTriangle: HiExclamationTriangle,
    errorCircle: HiExclamationCircle,
    checkCircle: HiCheckCircle,
    email: HiEnvelope,
    globe: HiMiniGlobeAsiaAustralia,
    person: PiUserCircleDuotone,
    grid: PiGridFourDuotone,
    book: PiBookBookmarkDuotone,
    close: HiMiniXMark,
    openLink: HiOutlineLink,
    calendar: HiCalendarDays,
    home: PiHouseDuotone,
    gallery: PiImageDuotone,
    discord: FaDiscord,
    github: FaGithub,
    linkedin: FaLinkedin,
    x: FaXTwitter,
    clipboard: HiClipboard,

    // Íconos adicionales que faltaban:
    briefcase: HiOutlineBriefcase,       // "Project Manager" 
    document: HiOutlineDocumentText,     // "Resume" o "Documento"
    comments: HiOutlineChatBubbleLeft,   // "comments" o "chat"
    teacher: PiChalkboardTeacherDuotone, // Ajustar si la librería lo contiene
    translation: FaLanguage,             // Ej. "Translator" / "Language"
};

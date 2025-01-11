"use client";

import React from "react";
import { createPortal } from "react-dom";
// Asegúrate de que Once UI tenga estos componentes:
import {
  Flex,
  Heading,
  IconButton,
  Text,
  Button,
  Icon
} from "@/once-ui/components";

/* --------------------------------------------------------------------------
   EJEMPLO: Modal que incluye la información de vacantes directamente.
   Podrás importarlo en distintas páginas y controlarlo con props.
--------------------------------------------------------------------------- */

interface VacanciesModalProps {
  open: boolean;          // true/false para mostrar/ocultar el modal
  onClose: () => void;    // función para cerrar el modal
}

export default function VacanciesModal({ open, onClose }: VacanciesModalProps) {
  // Lista de vacantes (asegúrate de usar íconos disponibles en tu iconLibrary)
  const vacancies = [
    {
      role: "Project Manager",
      icon: "briefcase",
      keywords: ["Leadership", "Scheduling", "Budgeting", "Risk Management"]
    },
    {
      role: "Profesora",
      icon: "teacher",
      keywords: ["Pedagogy", "Lesson Planning", "Student Engagement"]
    },
    {
      role: "Asistente Administrativo",
      icon: "clipboard",
      keywords: ["Organization", "Scheduling", "Record Keeping"]
    },
    {
      role: "Arquitecta",
      icon: "draftingCompass",
      keywords: ["AutoCAD", "Revit", "Blueprints", "Construction"]
    },
    {
      role: "Intérprete",
      icon: "comments",
      keywords: ["Bilingual", "Spanish-English", "Simultaneous Translation"]
    },
    {
      role: "Traductora",
      icon: "translation",
      keywords: ["Accuracy", "Localization", "Technical Documents"]
    }
  ];

  // Aquí puedes ponerle un título fijo o permitir personalizarlo con props
  const title = "Available Vacancies";

  // Controla el montaje: si open es false, no renderiza nada
  if (!open) return null;

  // Portal container
  return createPortal(
    <Flex
      // Overlay semitransparente
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "rgba(0, 0, 0, 0.4)",
        zIndex: 9999
      }}
      alignItems="center"
      justifyContent="center"
    >
      {/* Contenedor del modal */}
      <Flex
        direction="column"
        alpha="neutral-weak"   // Fondo clarito (Once UI)
        radius="m"
        padding="m"
        style={{
          minWidth: "320px",
          maxWidth: "600px",
          maxHeight: "80vh",
          overflowY: "auto",
          position: "relative"
        }}
      >
        {/* Cabecera con título e icono de cierre */}
        <Flex justifyContent="space-between" alignItems="center" marginBottom="16">
          <Heading variant="heading-strong-m">{title}</Heading>
          <IconButton
            variant="tertiary"
            icon="close"       // Asegúrate de tener "close" en tu icon library
            onClick={onClose}
          />
        </Flex>

        {/* Contenido: Lista de vacantes */}
        {vacancies.map((vac, idx) => (
          <Flex key={idx} gap="8" alignItems="center" marginBottom="12">
            <Icon name={vac.icon} size="m" />
            <Flex direction="column">
              <Text variant="heading-strong-s">{vac.role}</Text>
              <Text variant="body-default-s" onBackground="neutral-weak">
                Keywords: {vac.keywords.join(", ")}
              </Text>
            </Flex>
          </Flex>
        ))}

        {/* Botón para cerrar */}
        <Flex marginTop="16" justifyContent="flex-end">
          <Button
            variant="secondary"
            label="Close"
            onClick={onClose}
          />
        </Flex>
      </Flex>
    </Flex>,
    document.body // Montaje en <body>
  );
}

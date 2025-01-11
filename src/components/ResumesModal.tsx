"use client";

import React from "react";
import { Flex, Heading, IconButton, Icon, Text, Button } from "@/once-ui/components";

interface Resume {
  name: string;
  icon: string;
  skills: string[];
}

interface ResumeModalProps {
  open: boolean;
  onClose: () => void;
  resumes: Resume[];
  // Mantendremos la propiedad skillColors aunque no se usará en la lógica actual,
  // para mantener la compatibilidad con el paso de props.
  skillColors: string[];
}

const ResumeModal: React.FC<ResumeModalProps> = ({ open, onClose, resumes }) => {
  if (!open) return null;

  // Definir colores fijos
  const purpleMetal = "#800080"; // Color púrpura metálico para la mayoría de habilidades
  const completeColors = [
    "#b22222", // Rojo metálico
    "#0000cd", // Azul metálico
    "#228b22"  // Verde metálico
  ];

  return (
    <Flex
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "#000", // Fondo negro
        zIndex: 9999
      }}
      alignItems="center"
      justifyContent="center"
    >
      <Flex
        direction="column"
        alpha="neutral-strong"
        radius="m"
        padding="m"
        style={{
          minWidth: "320px",
          maxWidth: "600px",
          maxHeight: "80vh",
          overflowY: "auto",
          position: "relative",
          backgroundColor: "#000" // Fondo negro para el contenido del modal
        }}
      >
        {/* Título y botón de cerrar */}
        <Flex justifyContent="space-between" alignItems="center" marginBottom="16">
          <Heading variant="heading-strong-m" style={{ color: "#fff" }}>My Resumes</Heading>
          <IconButton variant="tertiary" icon="close" onClick={onClose} />
        </Flex>

        {/* Renderizado de cada Resume */}
        {resumes.map((resume, idx) => (
          <Flex key={idx} gap="8" alignItems="center" marginBottom="12">
            <Icon name={resume.icon} size="m" style={{ color: "#fff" }} />
            <Flex direction="column">
              <Text variant="heading-strong-s" style={{ color: "#fff" }}>{resume.name}</Text>

              {/* Habilidades con fondo metálico y texto blanco */}
              <Flex direction="row" gap="8" wrap style={{ marginTop: "4px" }}>
                {resume.skills.map((skill, skillIndex) => {
                  // Si es "Complete Resume", usar colores rotativos; de lo contrario, púrpura.
                  const color =
                    resume.name === "Complete Resume"
                      ? completeColors[skillIndex % completeColors.length]
                      : purpleMetal;
                  return (
                    <Flex
                      key={skillIndex}
                      style={{
                        backgroundColor: color,
                        color: "#fff",
                        padding: "3px 6px",
                        borderRadius: "4px"
                      }}
                    >
                      <Text variant="body-default-s">{skill}</Text>
                    </Flex>
                  );
                })}
              </Flex>
            </Flex>
          </Flex>
        ))}

        {/* Pie de modal: botón de cerrar */}
        <Flex marginTop="16" justifyContent="flex-end">
          <Button variant="secondary" label="Close" onClick={onClose} />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ResumeModal;

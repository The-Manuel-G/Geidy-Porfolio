"use client";

import React from "react";
import {
  Avatar,
  Button,
  Flex,
  Heading,
  Icon,
  IconButton,
  SmartImage,
  Tag,
  Text
} from "@/once-ui/components";
import TableOfContents from "@/components/about/TableOfContents";
import styles from "@/components/about/about.module.scss";

import { useTranslations } from "next-intl";
import { baseURL, renderContent } from "@/app/resources";
import { useMediaQuery } from "react-responsive";

import ResumeModal from "@/components/ResumesModal";

// Importar datos de currículums
import { myResumes, metallicColors } from "@/components/resumeData";

interface AboutClientProps {
  locale: string;
}

export default function AboutClient({ locale }: AboutClientProps) {
  const t = useTranslations();
  const { person, about, social } = renderContent(t);
  const isSmallScreen = useMediaQuery({ maxWidth: 640 });

  const [openResumesModal, setOpenResumesModal] = React.useState(false);

  const enhancedSocial = [
    ...social,
    {
      name: "Resume",
      icon: "document",
      onClick: () => {
        setOpenResumesModal(true);
      }
    }
  ];

  const structure = [
    {
      title: about.intro.title,
      display: about.intro.display,
      items: []
    },
    {
      title: about.work.title,
      display: about.work.display,
      items: about.work.experiences.map(experience => experience.company)
    },
    {
      title: about.studies.title,
      display: about.studies.display,
      items: about.studies.institutions.map(institution => institution.name)
    },
    {
      title: about.technical.title,
      display: about.technical.display,
      items: about.technical.skills.map(skill => skill.title)
    }
  ];

  return (
    <Flex fillWidth maxWidth="m" direction="column">
      {/* JSON-LD (opcional) */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: person.name,
            jobTitle: person.role,
            description: about.intro.description,
            url: `https://${baseURL}/about`,
            image: `${baseURL}/images/${person.avatar}`,
            sameAs: social
              .filter(item => item.link && !item.link.startsWith("mailto:"))
              .map(item => item.link),
            worksFor: {
              "@type": "Organization",
              name: about.work.experiences[0]?.company || ""
            }
          })
        }}
      />

      {/* Tabla de Contenidos */}
      {about.tableOfContent.display && (
        <Flex
          style={{ left: "0", top: "50%", transform: "translateY(-50%)" }}
          position="fixed"
          paddingLeft="24"
          gap="32"
          direction="column"
          hide="s"
        >
          <TableOfContents structure={structure} about={about} />
        </Flex>
      )}

      {/* Contenido principal */}
      <Flex fillWidth mobileDirection="column" justifyContent="center">
        {/* Avatar e info */}
        {about.avatar.display && (
          <Flex
            className={styles.avatar}
            minWidth="160"
            paddingX="l"
            paddingBottom="xl"
            gap="m"
            flex={3}
            direction="column"
            alignItems="center"
          >
            <Avatar src={person.avatar} size="xl" />
            <Flex gap="8" alignItems="center">
              <Icon onBackground="accent-weak" name="globe" />
              {person.location}
            </Flex>
            {person.languages.length > 0 && (
              <Flex wrap gap="8">
                {person.languages.map((language, index) => (
                  <Tag key={index} size="l">
                    {language}
                  </Tag>
                ))}
              </Flex>
            )}
          </Flex>
        )}

        <Flex
          className={styles.blockAlign}
          fillWidth
          flex={9}
          maxWidth={40}
          direction="column"
        >
          {/* Cabecera: Nombre, Rol, Redes */}
          <Flex
            id={about.intro.title}
            fillWidth
            minHeight="160"
            direction="column"
            justifyContent="center"
            marginBottom="32"
          >
            {about.calendar.display && (
              <Flex
                className={styles.blockAlign}
                style={{
                  backdropFilter: "blur(var(--static-space-1))",
                  border: "1px solid var(--brand-alpha-medium)",
                  width: "fit-content"
                }}
                alpha="brand-weak"
                radius="full"
                fillWidth
                padding="4"
                gap="8"
                marginBottom="m"
                alignItems="center"
              >
                <Flex paddingLeft="12">
                  <Icon name="calendar" onBackground="brand-weak" />
                </Flex>
                <Flex paddingX="8">Schedule a call</Flex>
                <IconButton
                  href={about.calendar.link}
                  data-border="rounded"
                  variant="tertiary"
                  icon="chevronRight"
                />
              </Flex>
            )}
            <Heading className={styles.textAlign} variant="display-strong-xl">
              {person.name}
            </Heading>
            <Text
              className={styles.textAlign}
              variant="display-default-xs"
              onBackground="neutral-weak"
            >
              {person.role}
            </Text>

            {/* Redes sociales + Resume */}
            {enhancedSocial.length > 0 && (
              <Flex
                className={styles.blockAlign}
                paddingTop="20"
                paddingBottom="8"
                gap="8"
                wrap
              >
                {enhancedSocial.map((item, idx) => {
                  if (item.onClick) {
                    return (
                      <Button
                        key={`${item.name}-${idx}`}
                        prefixIcon={item.icon}
                        label={isSmallScreen ? "" : item.name}
                        size="s"
                        variant="tertiary"
                        onClick={item.onClick}
                      />
                    );
                  }
                  return (
                    <Button
                      key={`${item.name}-${idx}`}
                      prefixIcon={item.icon}
                      label={isSmallScreen ? "" : item.name}
                      href={item.link}
                      size="s"
                      variant="tertiary"
                    />
                  );
                })}
              </Flex>
            )}
          </Flex>

          {/* Sección Introducción */}
          {about.intro.display && (
            <Flex
              direction="column"
              textVariant="body-default-l"
              fillWidth
              gap="m"
              marginBottom="xl"
            >
              {about.intro.description}
            </Flex>
          )}

          {/* Work Experience */}
          {about.work.display && (
            <>
              <Heading
                as="h2"
                id={about.work.title}
                variant="display-strong-s"
                marginBottom="m"
              >
                {about.work.title}
              </Heading>
              <Flex direction="column" fillWidth gap="l" marginBottom="40">
                {about.work.experiences.map((experience, index) => (
                  <Flex
                    key={`${experience.company}-${experience.role}-${index}`}
                    fillWidth
                    direction="column"
                  >
                    <Flex
                      fillWidth
                      justifyContent="space-between"
                      alignItems="flex-end"
                      marginBottom="4"
                    >
                      <Text id={experience.company} variant="heading-strong-l">
                        {experience.company}
                      </Text>
                      <Text variant="heading-default-xs" onBackground="neutral-weak">
                        {experience.timeframe}
                      </Text>
                    </Flex>
                    <Text
                      variant="body-default-s"
                      onBackground="brand-weak"
                      marginBottom="m"
                    >
                      {experience.role}
                    </Text>
                    <Flex as="ul" direction="column" gap="16">
                      {experience.achievements.map((achievement: string, i2: number) => (
                        <Text
                          as="li"
                          variant="body-default-m"
                          key={`${experience.company}-${i2}`}
                        >
                          {achievement}
                        </Text>
                      ))}
                    </Flex>
                    {experience.images.length > 0 && (
                      <Flex fillWidth paddingTop="m" paddingLeft="40" wrap>
                        {experience.images.map((img, idx3) => (
                          <Flex
                            key={idx3}
                            border="neutral-medium"
                            borderStyle="solid-1"
                            radius="m"
                            minWidth={img.width}
                            height={img.height}
                          >
                            <SmartImage
                              enlarge
                              radius="m"
                              sizes={img.width.toString()}
                              alt={img.alt}
                              src={img.src}
                            />
                          </Flex>
                        ))}
                      </Flex>
                    )}
                  </Flex>
                ))}
              </Flex>
            </>
          )}

          {/* Studies */}
          {about.studies.display && (
            <>
              <Heading
                as="h2"
                id={about.studies.title}
                variant="display-strong-s"
                marginBottom="m"
              >
                {about.studies.title}
              </Heading>
              <Flex direction="column" fillWidth gap="l" marginBottom="40">
                {about.studies.institutions.map((institution, i4) => (
                  <Flex
                    key={`${institution.name}-${i4}`}
                    fillWidth
                    gap="4"
                    direction="column"
                  >
                    <Text id={institution.name} variant="heading-strong-l">
                      {institution.name}
                    </Text>
                    <Text variant="heading-default-xs" onBackground="neutral-weak">
                      {institution.description}
                    </Text>
                  </Flex>
                ))}
              </Flex>
            </>
          )}

          {/* Technical Skills */}
          {about.technical.display && (
            <>
              <Heading
                as="h2"
                id={about.technical.title}
                variant="display-strong-s"
                marginBottom="40"
              >
                {about.technical.title}
              </Heading>
              <Flex direction="column" fillWidth gap="l">
                {about.technical.skills.map((skill, i5) => (
                  <Flex
                    key={`${skill.title}-${i5}`}
                    fillWidth
                    gap="4"
                    direction="column"
                  >
                    <Text variant="heading-strong-l">{skill.title}</Text>
                    <Text variant="body-default-m" onBackground="neutral-weak">
                      {skill.description}
                    </Text>
                  </Flex>
                ))}
              </Flex>
            </>
          )}

          {/* Courses & Seminars */}
          {about.courses?.display && (
            <>
              <Heading
                as="h2"
                id={about.courses.title}
                variant="display-strong-s"
                marginBottom="m"
              >
                {about.courses.title}
              </Heading>
              <Flex direction="column" fillWidth gap="l" marginBottom="40">
                {about.courses.items.map((course, idx6) => (
                  <Flex key={`${course.name}-${idx6}`} fillWidth direction="column">
                    <Text variant="heading-strong-m">
                      {course.name}
                      {course.year && (
                        <Text
                          as="span"
                          onBackground="neutral-weak"
                          style={{ marginLeft: "8px" }}
                        >
                          ({course.year})
                        </Text>
                      )}
                    </Text>
                    <Text variant="body-default-s" onBackground="brand-weak">
                      {course.institution}
                    </Text>
                  </Flex>
                ))}
              </Flex>
            </>
          )}

          {/* Soft Skills */}
          {about.softSkills?.display && (
            <>
              <Heading
                as="h2"
                id={about.softSkills.title}
                variant="display-strong-s"
                marginBottom="m"
              >
                {about.softSkills.title}
              </Heading>
              <Flex direction="column" fillWidth gap="l" marginBottom="40">
                {about.softSkills.items.map((skill, i7) => (
                  <Flex key={`${skill.name}-${i7}`} fillWidth direction="column">
                    <Text variant="heading-strong-m">{skill.name}</Text>
                    <Text variant="body-default-s" onBackground="neutral-weak">
                      {skill.description}
                    </Text>
                  </Flex>
                ))}
              </Flex>
            </>
          )}
        </Flex>
      </Flex>

      {/* Llamada al componente ResumeModal */}
      <ResumeModal
        open={openResumesModal}
        onClose={() => setOpenResumesModal(false)}
        resumes={myResumes}
        skillColors={metallicColors}
      />
    </Flex>
  );
}

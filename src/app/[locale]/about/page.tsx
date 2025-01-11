// app/[locale]/about/page.tsx

import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { baseURL, renderContent } from '@/app/resources';
import AboutClient from './AboutClient'; // importa el componente cliente

/**
 * Lógica de servidor para metadatos
 */
export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations();
  const { person, about } = renderContent(t);
  const title = about.title;
  const description = about.description;
  const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'website',
      url: `https://${baseURL}/${locale}/about`,
      images: [
        {
          url: ogImage,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  };
}

/**
 * Componente servidor que llama a AboutClient
 */
export default function AboutPage({ params: { locale } }) {
  // Lógica de internacionalización en servidor
  unstable_setRequestLocale(locale);

  // Retorna el componente que maneja el UI (Cliente)
  return <AboutClient locale={locale} />;
}

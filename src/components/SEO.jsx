import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({
  title,
  description,
  keywords,
  ogImage,
  ogUrl,
  ogType = 'website',
  twitterCard = 'summary_large_image',
  canonical,
  noIndex = false,
  schema = null
}) => {
  const siteName = 'Sai Chaitanya Junior College';
  const defaultDescription = 'Best Intermediate College in Madanapalle, Andhra Pradesh. Offering MPC, BiPC, MBiPC, MEC, and CEC courses with experienced faculty and excellent results.';
  const defaultImage = 'https://saichaitanyacollege.com/logo.png';

  return (
    <Helmet>
      {/* Title */}
      <title>{title ? `${title} | ${siteName}` : siteName}</title>
      
      {/* Description */}
      <meta name="description" content={description || defaultDescription} />
      
      {/* Keywords */}
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Author */}
      <meta name="author" content={siteName} />
      
      {/* Robots */}
      <meta name="robots" content={noIndex ? 'noindex, nofollow' : 'index, follow'} />
      
      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Open Graph */}
      <meta property="og:title" content={title || siteName} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={ogUrl || 'https://saichaitanyacollege.com'} />
      <meta property="og:image" content={ogImage || defaultImage} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en_IN" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title || siteName} />
      <meta name="twitter:description" content={description || defaultDescription} />
      <meta name="twitter:image" content={ogImage || defaultImage} />
      
      {/* Structured Data (JSON-LD) */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;

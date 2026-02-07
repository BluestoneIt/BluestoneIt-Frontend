import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { metadataConfig, type MetaTags } from '../config/metadata';

export const useMetaTags = (overrideMetaTags?: MetaTags) => {
  const location = useLocation();

  useEffect(() => {
    // Get metadata from config or use override
    const metaTags = overrideMetaTags || metadataConfig[location.pathname] || {};

    // Update document title
    if (metaTags.title) {
      document.title = metaTags.title;
    }

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, property = false) => {
      const attribute = property ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;

      if (element) {
        element.content = content;
      } else {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        element.content = content;
        document.head.appendChild(element);
      }
    };

    // Update standard meta tags
    if (metaTags.description) {
      updateMetaTag('description', metaTags.description);
    }

    if (metaTags.keywords) {
      updateMetaTag('keywords', metaTags.keywords);
    }

    // Update Open Graph meta tags
    if (metaTags.ogTitle) {
      updateMetaTag('og:title', metaTags.ogTitle, true);
    }

    if (metaTags.ogDescription) {
      updateMetaTag('og:description', metaTags.ogDescription, true);
    }

    if (metaTags.ogImage) {
      updateMetaTag('og:image', metaTags.ogImage, true);
    }

    if (metaTags.ogUrl) {
      updateMetaTag('og:url', metaTags.ogUrl, true);
    }

    // Update Twitter Card meta tags
    if (metaTags.twitterCard) {
      updateMetaTag('twitter:card', metaTags.twitterCard);
    }

    if (metaTags.twitterTitle) {
      updateMetaTag('twitter:title', metaTags.twitterTitle);
    }

    if (metaTags.twitterDescription) {
      updateMetaTag('twitter:description', metaTags.twitterDescription);
    }

    if (metaTags.twitterImage) {
      updateMetaTag('twitter:image', metaTags.twitterImage);
    }

    // Cleanup function to reset to default when component unmounts
    return () => {
      // Reset title to default
      document.title = 'Bluestone IT Tech LLC - IT Staffing & Consulting Services';

      // Reset description to default
      const descElement = document.querySelector('meta[name="description"]') as HTMLMetaElement;
      if (descElement) {
        descElement.content = 'Leading IT staffing and consulting company providing offshore and onsite IT solutions, SAP services, cloud & DevOps, and data engineering.';
      }
    };
  }, [overrideMetaTags, location.pathname]);
};
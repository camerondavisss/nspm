/**
 * Structured Data (JSON-LD) for SEO
 * Adds rich snippets for search engines
 */

// Organization Schema
const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://novasolutionspropertymanagement.com",
    "name": "Nova Solutions Property Management",
    "alternateName": "Nova Solutions",
    "url": "https://novasolutionspropertymanagement.com",
    "logo": "https://novasolutionspropertymanagement.com/favicon.svg",
    "description": "Southwest Nova Scotia's premier provider of property management, luxury landscaping, commercial lawn care, and waterfront solutions.",
    "telephone": "+1-902-749-8000",
    "email": "info@novasolutionspm.ca",
    "address": {
        "@type": "PostalAddress",
        "addressLocality": "Yarmouth",
        "addressRegion": "NS",
        "addressCountry": "CA"
    },
    "areaServed": [
        {
            "@type": "City",
            "name": "Yarmouth"
        },
        {
            "@type": "City",
            "name": "Shelburne"
        },
        {
            "@type": "State",
            "name": "Southwest Nova Scotia"
        }
    ],
    "geo": {
        "@type": "GeoCoordinates",
        "latitude": "43.8377",
        "longitude": "-66.1175"
    },
    "openingHoursSpecification": [
        {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "08:00",
            "closes": "18:00"
        },
        {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": "Saturday",
            "opens": "09:00",
            "closes": "16:00"
        }
    ],
    "priceRange": "$$",
    "sameAs": [
        "https://www.facebook.com/novasolutionspm",
        "https://www.instagram.com/novasolutionspm"
    ]
};

// Services Schema
const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Property Management Services",
    "provider": {
        "@type": "LocalBusiness",
        "name": "Nova Solutions Property Management",
        "url": "https://novasolutionspropertymanagement.com"
    },
    "areaServed": {
        "@type": "State",
        "name": "Southwest Nova Scotia"
    },
    "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Property and Landscape Services",
        "itemListElement": [
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Property Management",
                    "description": "Comprehensive property management including tenant screening, leasing, maintenance, inspections, and financial reporting.",
                    "url": "https://novasolutionspropertymanagement.com/property-management.html"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Commercial Lawn Care",
                    "description": "Professional commercial-grade lawn maintenance with pristine cuts, edging, fertilization, and year-round grounds care.",
                    "url": "https://novasolutionspropertymanagement.com/lawn-care.html"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Luxury Landscaping",
                    "description": "Custom landscape design and installation featuring premium interlock, retaining walls, curated gardens, and lighting.",
                    "url": "https://novasolutionspropertymanagement.com/landscaping.html"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "EZ Dock Solutions",
                    "description": "Complete waterfront solutions including EZ Dock sales, professional installations, seasonal removals, and maintenance.",
                    "url": "https://novasolutionspropertymanagement.com/ez-dock.html"
                }
            }
        ]
    }
};

// Website Schema
const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Nova Solutions Property Management",
    "url": "https://novasolutionspropertymanagement.com",
    "potentialAction": {
        "@type": "SearchAction",
        "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://novasolutionspropertymanagement.com/?s={search_term_string}"
        },
        "query-input": "required name=search_term_string"
    }
};

// Breadcrumb Schema (for service pages)
function createBreadcrumbSchema(pageName, pageUrl) {
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://novasolutionspropertymanagement.com"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": pageName,
                "item": pageUrl
            }
        ]
    };
}

// FAQ Schema
const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "What does your property management service include?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Our comprehensive property management includes tenant screening and placement, rent collection and financial reporting, 24/7 maintenance coordination, quarterly property inspections, legal compliance and documentation, lease enforcement and renewals, and online owner portal access."
            }
        },
        {
            "@type": "Question",
            "name": "How do you screen potential tenants?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "We employ a rigorous multi-step screening process including credit history check, employment verification, previous landlord references, criminal background check, income verification (typically 3x rent requirement), and rental history review."
            }
        },
        {
            "@type": "Question",
            "name": "What areas do you serve?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "We proudly serve all of Southwest Nova Scotia, including Yarmouth and surrounding areas, Shelburne County, Digby County, and Queens County."
            }
        },
        {
            "@type": "Question",
            "name": "Are you licensed and insured?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes! Nova Solutions maintains full commercial liability insurance, WCB coverage for all employees, proper licensing for all services, and bonding where required. We can provide proof of insurance and licensing upon request."
            }
        }
    ]
};

// Insert schemas into page
function insertStructuredData() {
    const schemas = [organizationSchema, servicesSchema, websiteSchema];

    schemas.forEach((schema, index) => {
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.text = JSON.stringify(schema, null, 2);
        script.id = `structured-data-${index}`;
        document.head.appendChild(script);
    });

    // Add FAQ schema if on FAQ page
    if (window.location.pathname.includes('faq')) {
        const faqScript = document.createElement('script');
        faqScript.type = 'application/ld+json';
        faqScript.text = JSON.stringify(faqSchema, null, 2);
        faqScript.id = 'structured-data-faq';
        document.head.appendChild(faqScript);
    }

    // Add breadcrumb schema for service pages
    const pageMap = {
        'property-management.html': 'Property Management',
        'lawn-care.html': 'Commercial Lawn Care',
        'landscaping.html': 'Luxury Landscaping',
        'ez-dock.html': 'EZ Dock Solutions',
        'faq.html': 'FAQ'
    };

    Object.keys(pageMap).forEach(page => {
        if (window.location.pathname.includes(page)) {
            const breadcrumb = createBreadcrumbSchema(
                pageMap[page],
                `https://novasolutionspropertymanagement.com/${page}`
            );
            const breadcrumbScript = document.createElement('script');
            breadcrumbScript.type = 'application/ld+json';
            breadcrumbScript.text = JSON.stringify(breadcrumb, null, 2);
            breadcrumbScript.id = 'structured-data-breadcrumb';
            document.head.appendChild(breadcrumbScript);
        }
    });

    console.log('Structured data schemas loaded');
}

// Run when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', insertStructuredData);
} else {
    insertStructuredData();
}

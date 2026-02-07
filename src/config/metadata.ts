interface MetaTags {
    title?: string;
    description?: string;
    keywords?: string;
    ogTitle?: string;
    ogDescription?: string;
    ogImage?: string;
    ogUrl?: string;
    twitterCard?: string;
    twitterTitle?: string;
    twitterDescription?: string;
    twitterImage?: string;
}

export const metadataConfig: Record<string, MetaTags> = {
    '/': {
        title: 'Home | Bluestone IT Tech LLC',
        description: 'Bluestone IT Tech LLC is a US IT staffing and consulting company delivering offshore and onsite IT candidates across SAP, Cloud, DevOps, Data, and Application Development.',
        keywords: 'US IT Staffing Company, Offshore IT Staffing Services, Onsite IT Consultants USA, IT Staffing & Consulting Services, SAP Staffing Company USA, Offshore Delivery Model IT'
    },
    '/about': {
        title: 'About Us | Bluestone IT Tech LLC',
        description: 'Bluestone IT Tech LLC is committed to delivering high-quality IT solutions that help organizations grow, innovate, and stay competitive in a rapidly evolving digital world.',
        keywords: 'IT consulting company, technology solutions, digital transformation, IT services'
    },
    '/services': {
        title: 'IT Services & Consulting | Bluestone IT Tech LLC',
        description: 'Comprehensive IT services including SAP, Cloud & DevOps, Data Engineering, Application Development, and IT Staffing solutions.',
        keywords: 'IT consulting, SAP services, cloud solutions, DevOps, data engineering, application development, IT staffing'
    },
    '/staffing': {
        title: 'Offshore & Onsite IT Staffing Services | Bluestone IT Tech LLC',
        description: 'We deliver JD-aligned offshore and onsite IT consultants to prime vendors and direct clients across the USA.',
        keywords: 'IT staffing, offshore staffing, onsite consultants, contract IT staffing, SAP staffing, cloud staffing, DevOps staffing'
    },
    '/vendors': {
        title: 'IT Vendor Partnership | Bluestone IT Tech LLC',
        description: 'Partner with Bluestone IT Tech LLC for seamless IT staffing and consulting. We collaborate with prime vendors and implementation partners across the US IT ecosystem.',
        keywords: 'IT vendor partnership, prime vendor, implementation partner, IT staffing partner, vendor collaboration'
    },
    '/bench-sales': {
        title: 'Bench Sales Services USA | Bluestone IT Tech LLC',
        description: 'Pre-screened, market-ready IT consultants available for immediate deployment. Bench sales services across SAP, Cloud, Data, DevOps, and Full Stack technologies.',
        keywords: 'bench sales, IT bench consultants, candidate marketing, pre-screened consultants, IT talent pool'
    },
    '/careers': {
        title: 'Careers | Bluestone IT Tech LLC',
        description: 'Join our team at Bluestone IT Tech LLC. We offer growth-oriented culture, challenging projects, competitive compensation, and global exposure opportunities.',
        keywords: 'IT careers, job opportunities, IT consulting jobs, technology careers, software development jobs'
    },
    '/contact': {
        title: 'Contact Us | Bluestone IT Tech LLC',
        description: 'Get in touch with Bluestone IT Tech LLC. Contact us for IT consulting, staffing solutions, and technology services. Located in Maple Valley, Washington.',
        keywords: 'contact IT company, IT consulting contact, technology services contact, Bluestone IT contact'
    },
    '/privacy-policy': {
        title: 'Privacy Policy | Bluestone IT Tech LLC',
        description: 'Learn about how Bluestone IT Tech LLC protects and handles your personal information in accordance with our privacy policy.',
        keywords: 'privacy policy, data protection, personal information, Bluestone IT Tech LLC'
    },
    '/terms-conditions': {
        title: 'Terms & Conditions | Bluestone IT Tech LLC',
        description: 'Read the legal terms and conditions governing the use of Bluestone IT Tech LLC services and website.',
        keywords: 'terms and conditions, legal terms, service agreement, Bluestone IT Tech LLC'
    },
    // default meta tags for any undefined routes
    '*': {
        title: 'Bluestone IT Tech LLC - IT Staffing & Consulting Services',
        description: 'Leading IT staffing and consulting company providing offshore and onsite IT solutions, SAP services, cloud & DevOps, and data engineering.',
        keywords: 'IT staffing, IT consulting, SAP services, cloud solutions, DevOps, data engineering, application development'
    }
};

export type { MetaTags };
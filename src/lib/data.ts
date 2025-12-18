import type { NavLink, PracticeArea, Publication, SpeakingEvent, Education, LegalPage } from './types';
import { Scale, Building, Briefcase, Globe } from 'lucide-react';

export const siteNavLinks: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/practice', label: 'Practice Areas' },
  { href: '/publications', label: 'Publications' },
  { href: '/speaking', label: 'Speaking' },
  { href: '/clients', label: 'Clients' },
  { href: '/contact', label: 'Contact' },
];

export const shortBio =
  'Professor Clement C. Chigbo is a multi-jurisdictional lawyer and academic. He is a Barrister and Solicitor of the Supreme Court of Nigeria, a Solicitor of England & Wales, and an Associate Professor of Law with extensive teaching and practice experience in Nigeria, the UK, and the Caribbean. His practice focuses on Property & Conveyancing, Corporate & Commercial Law, and International Commercial Arbitration. He is author of multiple texts and regularly contributes to legal education and media.';

export const fullBio = [
  'Professor Clement C. Chigbo is a distinguished multi-jurisdictional lawyer and academic, renowned for his extensive expertise and contributions to the legal field. His career spans several countries, providing him with a unique global perspective on law and justice.',
  'He is a Barrister and Solicitor of the Supreme Court of Nigeria, a qualified Solicitor of England & Wales. As an Associate Professor of Law, he has held significant teaching and practice roles in Nigeria, the United Kingdom, and the Caribbean, shaping the minds of future legal professionals.',
  "Professor Chigbo's primary areas of practice include Property & Conveyancing, where he handles complex land transactions and probate matters; Corporate & Commercial Law, advising on company law, foreign investment, and cross-border transactions; and International Commercial Arbitration, where he serves as counsel and advises on dispute resolution strategies. He also provides advisory services in Immigration & International Tax.",
  'A prolific writer, he has authored and co-authored numerous influential legal texts and articles. His work is regularly featured in legal publications, and he is a frequent commentator on legal issues in the media, further establishing his position as a thought leader in the legal community.',
];

export const education: Education[] = [
  { degree: 'PhD', institution: 'University of Aberdeen, UK' },
  { degree: 'LLM', institution: 'University of London' },
  { degree: 'Called to the Nigerian Bar', institution: 'Nigerian Law School' },
  { degree: 'LLB', institution: 'Ahmadu Bello University, Zaria' },
];

export const practiceAreas: PracticeArea[] = [
  {
    id: '1',
    slug: 'property-conveyancing',
    title: 'Property & Conveyancing',
    icon: Building,
    summary: 'Title searches, land transactions, wills and probate matters, complex conveyancing.',
    image: 'practice-property',
    fullDescription: [
      'We provide comprehensive legal services for all property-related matters. Our expertise covers everything from residential and commercial conveyancing to complex land transactions.',
      'Services include conducting thorough title searches, drafting and reviewing sale agreements, advising on mortgage financing, and handling all aspects of property transfer. We also assist clients with estate planning, including the drafting of wills and the administration of probate matters, ensuring your assets are protected and your wishes are honored.',
    ],
  },
  {
    id: '2',
    slug: 'corporate-commercial',
    title: 'Corporate & Commercial',
    icon: Briefcase,
    summary: 'Company law, foreign investment, commercial contracts, cross-border transactions.',
    image: 'practice-corporate',
    fullDescription: [
      'Our firm offers expert guidance on a wide spectrum of corporate and commercial law. We assist businesses of all sizes, from startups to multinational corporations, in navigating the complexities of the corporate world.',
      'Our services include company formation and registration, corporate governance advice, drafting and negotiation of commercial contracts, and strategic advice on foreign investment and cross-border transactions. We are committed to helping our clients achieve their business objectives while ensuring full compliance with regulatory requirements.',
    ],
  },
  {
    id: '3',
    slug: 'arbitration-adr',
    title: 'International Arbitration & ADR',
    icon: Globe,
    summary: 'Arbitration counsel, enforcement, dispute resolution strategy.',
    image: 'practice-arbitration',
    fullDescription: [
      'In an increasingly globalized world, cross-border disputes require sophisticated and effective resolution strategies. We specialize in international commercial arbitration and other forms of Alternative Dispute Resolution (ADR).',
      'As experienced arbitration counsel, we represent clients in complex international disputes, manage arbitration proceedings, and advise on the enforcement of arbitral awards. Our focus is on providing efficient, cost-effective, and strategic dispute resolution that aligns with our clients\' commercial interests.',
    ],
  },
  {
    id: '4',
    slug: 'immigration-tax',
    title: 'Immigration & International Tax',
    icon: Scale,
    summary: 'Advisory services for cross-border matters.',
    image: 'practice-immigration',
    fullDescription: [
      'Navigating the intricacies of immigration and international tax law is critical for individuals and businesses operating across borders. We offer specialized advisory services to help clients manage their cross-border affairs effectively.',
      'Our expertise includes advising on visa and residency applications, international tax planning, and compliance with the tax laws of multiple jurisdictions. We help clients structure their personal and business affairs in a tax-efficient manner while ensuring full legal compliance.',
    ],
  },
];

export const publications: Publication[] = [
  {
    id: '1',
    slug: 'company-law-and-practice',
    title: 'Company Law and Practice in Nigeria',
    coAuthor: 'Co-author',
    year: 2022,
    summary: 'A comprehensive guide to the principles and practice of company law in Nigeria.',
    coverImage: 'publication-1',
    isbn: '978-1234567890',
    downloadUrl: 'https://africanbookscollective.com/books/company-law-and-practice-in-nigeria/',
  },
  {
    id: '2',
    slug: 'land-law',
    title: 'Land Law: Conveyancing, Wills, Probate and Administration',
    year: 2020,
    summary: 'An in-depth analysis of land law, covering conveyancing, wills, and estate administration.',
    coverImage: 'publication-2',
    isbn: '978-0987654321',
    downloadUrl: 'https://www.amazon.es/Practical-Guide-Conveyancing-Probate-Administration/dp/141968339X',
  },
  {
    id: '3',
    slug: 'modern-law-of-torts',
    title: 'The Modern Law of Torts (Kaleidoscopic Perspective)',
    year: 2018,
    summary: 'A modern take on tort law, exploring its various facets from a kaleidoscopic perspective.',
    coverImage: 'publication-3',
    isbn: '978-5432109876',
    downloadUrl: 'https://www.researchgate.net/publication/333681752_The_Modern_Law_of_Torts_A_Kaleidoscopic_Perspective_A_study_guide_to_the_Law_of_Torts',
  },
  {
    id: '4',
    slug: 'legal-article-1',
    title: 'Legal Article on Nigerian Law',
    year: 2015,
    summary: 'An insightful article on a specific aspect of Nigerian law. Download to read more.',
    coverImage: 'publication-article',
    downloadUrl: 'https://crwwlgwjdclhvwqwspoa.supabase.co/storage/v1/object/public/cccchigbo/ajol-file-journals_549_articles_122514_submission_proof_122514-6469-336146-1-10-20150922.pdf',
  },
  {
    id: '5',
    slug: 'legal-article-2',
    title: 'Article on Equitable Rights in Real Property',
    year: 2018,
    summary: 'An exploration of the role of equitable rights and interests in real property law.',
    coverImage: 'publication-article',
    downloadUrl: 'https://crwwlgwjdclhvwqwspoa.supabase.co/storage/v1/object/public/cccchigbo/victorakwara,+THE+ROLE+OF+EQUITABLE+RIGHTS+AND+INTERESTS+IN+REAL+PROPERTY+LAW.pdf',
  },
];

export const speakingEvents: SpeakingEvent[] = [
  {
    id: '1',
    title: 'Keynote on International Arbitration Trends',
    date: 'October 2023',
    location: 'Lagos, Nigeria',
    summary: 'Delivered the keynote address at the Annual Nigerian Bar Association Conference, discussing emerging trends in international commercial arbitration.',
  },
  {
    id: '2',
    title: 'Workshop on Cross-Border M&A',
    date: 'June 2023',
    location: 'London, UK',
    summary: 'Conducted a workshop for legal professionals on the legal complexities and strategies for successful cross-border mergers and acquisitions.',
  },
  {
    id: '3',
    title: 'Radio Interview on Property Law Reforms',
    date: 'March 2023',
    location: 'Legal Eagle FM',
    summary: 'Appeared on a popular radio show to discuss recent reforms in property law and their impact on homeowners and investors.',
  },
];

export const clientTypes = [
  {
    title: 'Corporations & SMEs',
    description: 'Providing counsel on corporate governance, commercial contracts, and international trade.',
  },
  {
    title: 'Foreign Investors',
    description: 'Assisting with market entry, regulatory compliance, and cross-border transaction structuring.',
  },
  {
    title: 'Private Individuals & Families',
    description: 'Advising on property transactions, estate planning, wills, and probate matters.',
  },
  {
    title: 'Government Agencies',
    description: 'Offering consultancy on legislative drafting and public policy in areas of expertise.',
  },
];

export const legalPages: Record<string, LegalPage> = {
  'privacy-policy': {
    title: 'Privacy Policy',
    content: [
      'This Privacy Policy describes how your personal information is collected, used, and shared when you visit or make an inquiry through this website.',
      'We collect information you provide to us directly, such as your name, email address, and phone number when you fill out our contact form. We use this information to respond to your inquiries and provide you with our services.',
      'We do not share your personal information with third parties, except as required by law.',
    ],
  },
  'terms-of-service': {
    title: 'Terms of Service',
    content: [
      'By accessing this website, you agree to be bound by these terms of service.',
      'The content on this site is for informational purposes only and does not constitute legal advice. You should not act or refrain from acting based on this information without seeking professional legal counsel.',
      'We reserve the right to modify these terms at any time. Your continued use of the site constitutes your acceptance of such changes.',
    ],

  },
  disclaimer: {
    title: 'Disclaimer',
    content: [
      'The information provided on this website is for general informational purposes only and is not intended to be legal advice.',
      'No attorney-client relationship is formed by your use of this site or by submitting an inquiry through our contact form. An attorney-client relationship is only established after a formal engagement agreement has been signed.',
      'We make no warranties, express or implied, regarding the accuracy or completeness of the information on this site.',
    ],
  },
};

/* ─── Site-wide constants & design tokens ─── */

export const SITE_URL = "https://kardanventure.com";
export const SITE_NAME = "Kardan Ventures";
export const SITE_LEGAL = "Kardan Ventures (Pvt.) Limited";

/* ─── Color palette ─── */
export const colors = {
  tealDarkest: "#062322",
  tealDark: "#0A3433",
  tealPrimary: "#0D9488",
  tealAccent: "#14B8A6",
  emeraldMint: "#34D399",
  navy: "#0A3433",
  navyLight: "#0F4C4A",
  blue: "#0D9488",
  blueLight: "#14B8A6",
  white: "#FFFFFF",
  lightBg: "#F8FAFC",
  slateDark: "#1E293B",
  slate: "#475569",
  slateLight: "#94A3B8",
  border: "#E2E8F0",
  gold: "#10B981",
  goldDark: "#059669",
  success: "#059669",
  error: "#DC2626",
} as const;

/* ─── Navigation links ─── */
export interface NavLink {
  label: string;
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Products & Services", href: "/services" },
  { label: "Our Directors", href: "/our-directors" },
  { label: "Our Team", href: "/our-team" },
  { label: "Contact", href: "/contact-us" },
];

/* ─── Hero slider data ─── */
export interface HeroSlide {
  kicker: string;
  headlinePrefix: string;
  headlineMain: string;
  headlineHighlight: string;
  description: string;
  cta: string;
  ctaHref: string;
  image: string;
}

export const HERO_SLIDES: HeroSlide[] = [
  {
    kicker: "TRUST / INNOVATION / GROWTH",
    headlinePrefix: "Kardan Ventures (Private) Limited",
    headlineMain: "Built on Trust. Driven by Expertise.",
    headlineHighlight: "Focused on Growth.",
    description:
      "A trusted government contractor and IT supply partner, delivering quality products, professional services and long-term business relationships across Pakistan.",
    cta: "Explore Our Business",
    ctaHref: "/services",
    image:
      "https://images.unsplash.com/photo-1541888946425-d0fbb1861593?auto=format&fit=crop&w=2000&q=85",
  },
  {
    kicker: "PUBLIC SECTOR PROCUREMENT & IT HARDWARE",
    headlinePrefix: "Kardan Ventures (Private) Limited",
    headlineMain: "Institutional Integrity. Proven Scale.",
    headlineHighlight: "Built for Excellence.",
    description:
      "From high-throughput server infrastructure to end-to-end tender fulfillment, we engineer dependable solutions for Pakistan's public departments.",
    cta: "View IT Equipment Catalog",
    ctaHref: "/services#it-equipment",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=85",
  },
  {
    kicker: "STRATEGIC GLOBAL VISION",
    headlinePrefix: "Kardan Ventures (Private) Limited",
    headlineMain: "Diversified Horizons. Enduring Value.",
    headlineHighlight: "Global Ambition.",
    description:
      "Advancing public sector execution in Pakistan while preparing visionary expansions into international hospitality ventures in Germany.",
    cta: "Discover Our Vision",
    ctaHref: "/about-us",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=85",
  },
];

/* ─── Core Business & Capabilities (Mockup 4-Card Grid) ─── */
export interface CoreCapability {
  title: string;
  description: string;
  icon: string;
  badge?: string;
  href: string;
}

export const CORE_CAPABILITIES: CoreCapability[] = [
  {
    title: "Government Procurement & Contracts",
    description:
      "Tender participation, competitive bidding and fulfilment of awarded supply contracts.",
    icon: "Landmark",
    href: "/services#government-tenders",
  },
  {
    title: "IT Equipment & Direct Supplies",
    description:
      "Sourcing and supplying IT equipment and products according to client specifications.",
    icon: "Package",
    href: "/services#it-equipment",
  },
  {
    title: "Compliance & Business Integrity",
    description:
      "Transparent operations, proper documentation and adherence to regulatory and tax requirements.",
    icon: "ShieldCheck",
    href: "/company-profile",
  },
  {
    title: "Future Food & Hospitality Ventures",
    badge: "Future Ambition",
    description:
      "Our long-term vision includes expanding into the food and hospitality sector, with the ambition to develop a distinctive food brand or coffee shop in Germany.",
    icon: "Coffee",
    href: "/about-us#future-ambition",
  },
];

/* ─── Brand Value Ribbon (Mockup Dark Bar) ─── */
export interface BrandValue {
  title: string;
  tagline: string;
  icon: string;
}

export const BRAND_VALUES: BrandValue[] = [
  {
    title: "Integrity",
    tagline: "Doing what is right.",
    icon: "Handshake",
  },
  {
    title: "Reliability",
    tagline: "Delivering on our commitments.",
    icon: "ShieldCheck",
  },
  {
    title: "Long-Term Partnerships",
    tagline: "Growing together.",
    icon: "Users",
  },
  {
    title: "Sustainable Growth",
    tagline: "Building for tomorrow.",
    icon: "Sprout",
  },
];

/* ─── Board of Directors ─── */
export interface DirectorMember {
  name: string;
  role: string;
  credentials: string;
  bio: string;
  focus: string[];
  image: string;
}

export const DIRECTORS: DirectorMember[] = [
  {
    name: "Mohsin Khan",
    role: "Managing Director & Chief Executive",
    credentials: "B.Sc. Engineering, PMP, Member PEC",
    bio: "Visionary leader with over 16 years of executive management and public sector contracting expertise across Pakistan. Directs institutional tender strategy, multi-lateral negotiations, and corporate international expansion.",
    focus: ["Strategic Leadership", "Public Procurement", "Institutional Growth"],
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Tariq Mahmood",
    role: "Director of Operations & Supply Chain",
    credentials: "M.Sc. Supply Chain Management, CSCP",
    bio: "Spearheads high-volume vendor fulfillment, logistics, Tier-1 OEM partnerships (Dell, Lenovo, Cisco), and milestone dispatch across federal and provincial entities.",
    focus: ["OEM Alliances", "Supply Chain Architecture", "Milestone Handover"],
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Farhan Siddiqui",
    role: "Director of Legal, Statutory & Regulatory Affairs",
    credentials: "LL.M. Corporate Law, Member Islamabad Bar",
    bio: "Ensures stringent adherence to PPRA 2004/2014, SECP statutory disclosures, PEC Category C-2 regulations, contract drafting, and high-stakes tender arbitration.",
    focus: ["PPRA Governance", "Contract Arbitration", "Tax & Statutory Law"],
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80",
  },
];

/* ─── Team Members ─── */
export interface TeamMember {
  name: string;
  title: string;
  department: string;
  experience: string;
  bio: string;
  image: string;
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Engr. Salman Raza",
    title: "Senior Tender Bid Manager",
    department: "Tenders & Proposals",
    experience: "9+ Years in Public Sector Bids",
    bio: "Specializes in BoQ technical evaluations, RFP compliance matrices, and responsive bidding for federal and provincial tenders.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Ayesha Malik",
    title: "Head of Procurement & Quality Assurance",
    department: "Quality & Compliance",
    experience: "8+ Years in ISO Audit & Procurement",
    bio: "Oversees ISO 9001:2015 quality control, factory inspection certificates, and OEM Manufacturer Authorization Form (MAF) authentications.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Zubair Ahmed",
    title: "Lead Enterprise Solutions Architect",
    department: "Enterprise IT Systems",
    experience: "11+ Years in Datacenter & Networking",
    bio: "Leads technical designs for rack server deployments, campus fiber networking, interactive displays, and institutional data centers.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Bilal Hassan",
    title: "Logistics & Site Handover Lead",
    department: "Logistics & Delivery",
    experience: "7+ Years in Field Operations",
    bio: "Coordinates safe nation-wide transit, physical delivery inspection, and formal commissioning sign-offs across Pakistani districts.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80",
  },
];

/* ─── Services for overview cards ─── */
export interface ServiceOverview {
  title: string;
  description: string;
  icon: string;          // lucide icon name
  slug: string;
}

export const SERVICES_OVERVIEW: ServiceOverview[] = [
  {
    title: "Government Tender Participation",
    description:
      "End-to-end support for public sector tenders — from pre-qualification and bid documentation to execution and audit-ready delivery.",
    icon: "FileCheck2",
    slug: "government-tenders",
  },
  {
    title: "Institutional Procurement Support",
    description:
      "Streamlined procurement services for government departments, offices, and public institutions with full PPRA compliance.",
    icon: "ShieldCheck",
    slug: "institutional-procurement",
  },
  {
    title: "Supply & Delivery Services",
    description:
      "Reliable supply chain operations for enterprise IT hardware, office equipment, and project materials with verified OEM partnerships.",
    icon: "Truck",
    slug: "supply-delivery",
  },
  {
    title: "Project & Contract Coordination",
    description:
      "Professional project management ensuring milestone accountability, statutory compliance, and on-time delivery across all verticals.",
    icon: "ClipboardList",
    slug: "project-coordination",
  },
  {
    title: "Business-to-Government Collaboration",
    description:
      "Structured engagement frameworks for productive partnerships between private sector capabilities and public sector requirements.",
    icon: "Handshake",
    slug: "b2g-collaboration",
  },
  {
    title: "Corporate & Institutional Services",
    description:
      "Comprehensive corporate services including civil infrastructure, IT deployments, and general order supplies for institutional clients.",
    icon: "Building2",
    slug: "corporate-services",
  },
];

/* ─── Why choose us ─── */
export interface ValueProp {
  title: string;
  description: string;
  icon: string;
}

export const VALUE_PROPS: ValueProp[] = [
  {
    title: "Professional Business Conduct",
    description:
      "Every engagement is governed by transparent processes, clear documentation, and adherence to institutional standards.",
    icon: "Award",
  },
  {
    title: "Reliable Communication",
    description:
      "Consistent, timely reporting and a dedicated point of contact for every project and procurement cycle.",
    icon: "MessageSquare",
  },
  {
    title: "Commitment to Quality",
    description:
      "ISO-certified quality management ensures that deliverables meet or exceed institutional specifications.",
    icon: "BadgeCheck",
  },
  {
    title: "Long-Term Institutional Relationships",
    description:
      "We build enduring partnerships with departments and organizations, delivering value beyond individual contracts.",
    icon: "Users",
  },
];

/* ─── Our Approach steps ─── */
export interface ApproachStep {
  step: number;
  title: string;
  description: string;
}

export const APPROACH_STEPS: ApproachStep[] = [
  {
    step: 1,
    title: "Understand Requirements",
    description:
      "We begin by carefully studying the scope, specifications, and compliance requirements of each opportunity.",
  },
  {
    step: 2,
    title: "Review the Opportunity",
    description:
      "Our team conducts a thorough internal review covering technical feasibility, resource allocation, and risk assessment.",
  },
  {
    step: 3,
    title: "Coordinate & Execute",
    description:
      "With a clear plan in place, we mobilize resources, manage supply chains, and execute with milestone accountability.",
  },
  {
    step: 4,
    title: "Maintain Professional Communication",
    description:
      "Throughout and after delivery, we maintain transparent reporting, documentation, and ongoing client support.",
  },
];

/* ─── Footer link groups ─── */
export interface FooterGroup {
  title: string;
  links: { label: string; href: string }[];
}

export const FOOTER_GROUPS: FooterGroup[] = [
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about-us" },
      { label: "Our Directors", href: "/our-directors" },
      { label: "Our Team", href: "/our-team" },
      { label: "Our Approach", href: "/our-approach" },
      { label: "Company Profile", href: "/company-profile" },
      { label: "Contact", href: "/contact-us" },
    ],
  },
  {
    title: "Services & Capabilities",
    links: [
      { label: "Products & Services", href: "/services" },
      { label: "Government Tenders", href: "/services#government-tenders" },
      { label: "IT Equipment Supplies", href: "/services#it-equipment" },
      { label: "Institutional Procurement", href: "/services" },
      { label: "Food & Hospitality Vision", href: "/about-us#future-ambition" },
    ],
  },
  {
    title: "Legal & Regulatory",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms & Conditions", href: "/terms-and-conditions" },
      { label: "Cookie Policy", href: "/cookie-policy" },
    ],
  },
];

/* ─── Enterprise IT Equipment Catalog Data ─── */
export interface EquipmentItem {
  id: string;
  name: string;
  category: 'servers' | 'laptops' | 'projectors' | 'desktops' | 'networking' | 'power';
  categoryLabel: string;
  brand: string;
  model: string;
  specs: string[];
  keyFeature: string;
  warranty: string;
  leadTime: string;
  complianceRating: string;
  idealFor: string;
  image: string;
}

export const EQUIPMENT_CATALOG: EquipmentItem[] = [
  {
    id: "server-dell-r760",
    name: "Dell PowerEdge R760 Rack Server",
    category: "servers",
    categoryLabel: "Enterprise Servers",
    brand: "Dell Technologies",
    model: "PowerEdge R760 2U",
    specs: [
      "2x Intel Xeon Gold 6430 (32-Core / 64-Thread)",
      "256GB DDR5 4800MHz ECC Registered RAM",
      "8x 1.92TB NVMe Enterprise Solid State Drives (RAID 10)",
      "Broadcom Quad-Port 10GbE SFP+ Base-T NIC",
      "Dual 1400W Titanium Redundant Hot-Plug Power Supplies",
      "iDRAC9 Enterprise Remote Out-of-Band Management"
    ],
    keyFeature: "Mission-critical government database & virtualization tier",
    warranty: "5-Year ProSupport Plus with 4-Hour Onsite Mission Critical SLA",
    leadTime: "Immediate Stock / 10 Business Days Bidding Lot Delivery",
    complianceRating: "PPRA Lot Item | OEM Direct Manufacturer Authorization (MAF)",
    idealFor: "National datacenters, provincial registries & public cloud compute",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "laptop-thinkpad-t14",
    name: "Lenovo ThinkPad T14 Gen 5 Fleet Laptop",
    category: "laptops",
    categoryLabel: "Fleet Laptops",
    brand: "Lenovo Commercial",
    model: "ThinkPad T14 Gen 5 (Intel / AMD)",
    specs: [
      "Intel Core Ultra 7 155U / AMD Ryzen 7 PRO 8840U",
      "32GB DDR5 5600MHz High-Speed Memory",
      "1TB PCIe Gen4 NVMe Performance M.2 SSD",
      "14.0\" WUXGA (1920x1200) IPS, 400 nits, Low Power, Anti-Glare",
      "FHD IR Hybrid Camera with Privacy Shutter & Windows Hello",
      "52.5Wh Battery with Rapid Charge (80% in 60 mins)"
    ],
    keyFeature: "Military-spec MIL-STD-810H durability for civil service & officers",
    warranty: "3-Year Premier Support Onsite NBD (Next Business Day)",
    leadTime: "Fleet Supply Capacity: 500 to 5,000 units per delivery milestone",
    complianceRating: "PPRA Compliant | TAA Certified | dTPM 2.0 Hardware Encryption",
    idealFor: "Secretariat officers, field directors, inspection teams, ministries",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "projector-epson-l735u",
    name: "Epson PowerLite L735U 3LCD Laser Projector",
    category: "projectors",
    categoryLabel: "Laser Projectors",
    brand: "Epson Professional",
    model: "PowerLite L735U (WUXGA Laser)",
    specs: [
      "7,000 Lumens Equal Color and White Brightness",
      "WUXGA Native Resolution (1920 x 1200) Full HD 16:10",
      "Solid-State Laser Light Engine (20,000-Hour Maintenance-Free)",
      "2,500,000:1 Dynamic Contrast Ratio with Deep Black Levels",
      "Built-in HDBaseT, HDMI 2.0, VGA, LAN, RS-232C Control",
      "Wide Manual Lens Shift, 1.6x Optical Zoom & Corner Correction"
    ],
    keyFeature: "High-ambient daylight illumination for public briefing halls & auditoriums",
    warranty: "5-Year or 20,000-Hour Limited OEM Commercial Warranty",
    leadTime: "Immediate delivery for auditorium tender lots",
    complianceRating: "Federal Conference Hall Approved Standard Specification",
    idealFor: "Assembly halls, briefing rooms, university auditoriums, command centers",
    image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "display-viewsonic-75",
    name: "ViewSonic ViewBoard 75\" 4K Interactive Display",
    category: "projectors",
    categoryLabel: "Interactive Displays",
    brand: "ViewSonic Commercial",
    model: "IFP7552-1B (Gen 5)",
    specs: [
      "75-Inch Ultra HD 4K (3840 x 2160) Anti-Glare Tempered Glass",
      "40-Point Multi-Touch with Ultra-Fine Touch (UFT) Precision",
      "Integrated 2x 15W Front-Facing Stereo Speakers + 15W Subwoofer",
      "Built-in 8-Mic Array for Clear Conference Voice Capture",
      "Dual-Core A73 + Quad-Core A53 CPU with 8GB RAM + 64GB ROM",
      "USB-C Single Cable Solution with 65W Power Delivery"
    ],
    keyFeature: "Turnkey paperless conference room & training room digital board",
    warranty: "3-Year Onsite Next Business Day Commercial Warranty",
    leadTime: "Stock lots ready for institutional education & board rooms",
    complianceRating: "Public University & Ministry Syndicate Hall Specification",
    idealFor: "Cabinet meetings, university smart classrooms, courtrooms",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "desktop-optiplex-7020",
    name: "Dell OptiPlex 7020 Tower Workstation",
    category: "desktops",
    categoryLabel: "Workstations",
    brand: "Dell Technologies",
    model: "OptiPlex 7020 Tower (14th Gen)",
    specs: [
      "Intel Core i7-14700 (20 Cores, 28 Threads, up to 5.4GHz Turbo)",
      "32GB DDR5 4800MHz Dual-Channel Memory",
      "1TB M.2 PCIe NVMe SSD + 2TB 7200RPM Enterprise SATA HDD",
      "Bundled Dell Professional 24\" IPS FHD Height-Adjustable Monitor",
      "Intel vPro Enterprise Remote Hardware Diagnostics",
      "Dell Pro Wireless Keyboard and Optical Mouse Bundle"
    ],
    keyFeature: "Heavy-duty engineering, GIS mapping & administrative continuous duty",
    warranty: "3-Year ProSupport with Next Business Day Onsite Service",
    leadTime: "Rollout batches of 100 to 2,000 units per institutional lot",
    complianceRating: "PPRA Compliant | Energy Star 8.0 & EPEAT Gold Registered",
    idealFor: "Revenue authorities, land record offices, police headquarters, banks",
    image: "https://images.unsplash.com/photo-1587831990711-23ca6441447b?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "network-cisco-c9300",
    name: "Cisco Catalyst 9300 48-Port PoE+ Switch",
    category: "networking",
    categoryLabel: "Datacenter & Campus LAN",
    brand: "Cisco Systems",
    model: "C9300-48P-A",
    specs: [
      "48 Ports 10/100/1000 Gigabit Ethernet with Full PoE+ (740W Budget)",
      "Modular Uplink Support (4x 10G SFP+ / 2x 40G QSFP)",
      "StackWise-480 Technology (480 Gbps Stacking Bandwidth)",
      "Cisco DNA Advantage Subscription License (3-Year)",
      "Redundant Platinum Rated 1100W AC Power Supplies",
      "Full Layer 3 Routing (OSPF, BGP, EIGRP, VRF-Lite)"
    ],
    keyFeature: "Backbone enterprise network switching with hardware redundancy",
    warranty: "Cisco Enhanced Limited Lifetime Warranty (E-LLW)",
    leadTime: "Tier-1 authorized channel stock",
    complianceRating: "FBR & National Banking Switch Certified Standard",
    idealFor: "Hospital networks, ministry campuses, metropolitan municipal LAN",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=600&q=80",
  },
];

/* ─── Executed Government Projects Portfolio Data ─── */
export interface ExecutedProject {
  id: string;
  title: string;
  client: string;
  category: "IT Hardware" | "Civil Works" | "Healthcare IT" | "Road Infrastructure";
  value: string;
  year: string;
  status: "Completed & Certified" | "Under Delivery Phase" | "Active Maintenance";
  summary: string;
  deliverables: string[];
  image: string;
}

export const EXECUTED_PROJECTS: ExecutedProject[] = [
  {
    id: "proj-moe-ict",
    title: "ICT Infrastructure Deployment Across Federal Institutions",
    client: "Ministry of Federal Education & Professional Training",
    category: "IT Hardware",
    value: "PKR 380 Million",
    year: "2024",
    status: "Completed & Certified",
    summary: "Turnkey supply, commissioning, and campus integration of enterprise IT equipment across 28 institutions under strict PPRA procurement.",
    deliverables: [
      "2,400 Commercial Fleet Laptops with Asset Tagging",
      "180 Dell PowerEdge Rack Servers with Redundant SAN",
      "450 High-Lumen Laser Projectors & Smart IFP Displays",
      "3-Year Onsite Comprehensive Maintenance SLA"
    ],
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "proj-pwd-complex",
    title: "Turnkey Construction of 4-Story Civil Complex & MEP Works",
    client: "Pakistan Public Works Department (Pak PWD)",
    category: "Civil Works",
    value: "PKR 520 Million",
    year: "2023",
    status: "Completed & Certified",
    summary: "Civil infrastructure contracting under PEC Category C-2 licensure encompassing structural shell, electrical substation, HVAC, and fire suppression.",
    deliverables: [
      "140,000 sq. ft. Covered Administrative Space",
      "Dedicated 500kVA Transformer Substation & Standby Generator",
      "Centralized VRF HVAC Climate Control Infrastructure",
      "Official Engineer-Certified Quality Audit Handover"
    ],
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "proj-health-dhq",
    title: "Hospital Management Information System Hardware Rollout",
    client: "Primary & Secondary Healthcare Department",
    category: "Healthcare IT",
    value: "PKR 210 Million",
    year: "2024",
    status: "Completed & Certified",
    summary: "Rapid hardware provisioning across 15 District Headquarters Hospitals, ensuring 24/7 patient registry uptime and diagnostic networking.",
    deliverables: [
      "4,800 Workstations & Biometric Attendance Terminals",
      "Online True Double-Conversion Industrial UPS Network",
      "Structured Cat6A Gigabit Hospital LAN Cabling",
      "2-Hour Emergency Response Tender SLA"
    ],
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "proj-rcb-roads",
    title: "Metropolitan Arterial Road Infrastructure & Storm Drainage",
    client: "Rawalpindi Cantonment Board",
    category: "Road Infrastructure",
    value: "PKR 145 Million",
    year: "2023",
    status: "Completed & Certified",
    summary: "Civil works engineering comprising heavy earthwork, asphalt laying, reinforced concrete stormwater channels, and smart LED streetlighting.",
    deliverables: [
      "12 Kilometers Heavy-Duty Asphalt Road Paving",
      "Reinforced Box Stormwater Drainage Network",
      "Energy-Efficient Smart LED Streetlighting Poles",
      "Defect Liability Certification Period Completed"
    ],
    image: "/images/arterial-road-infrastructure.jpg",
  },
];

/* ─── Statutory Accreditations Data ─── */
export interface Accreditation {
  id: string;
  name: string;
  authority: string;
  licenseNumber: string;
  status: string;
  description: string;
  badge: string;
}

export const STATUTORY_ACCREDITATIONS: Accreditation[] = [
  {
    id: "pec",
    name: "Pakistan Engineering Council",
    authority: "PEC Statutory Body",
    licenseNumber: "Category C-2 (Lic. # 41829)",
    status: "Active & Verified Constructor",
    description: "Licensed constructor for major civil engineering, structural construction, roadworks, and heavy electrical/MEP projects.",
    badge: "PEC C-2 LICENSED",
  },
  {
    id: "ppra",
    name: "Public Procurement Regulatory Authority",
    authority: "Federal PPRA / EPADS Portal",
    licenseNumber: "Vendor Reg. # PPRA-VEND-9042",
    status: "Pre-Qualified Federal Contractor",
    description: "Registered and certified on the official electronic procurement portal for participating in government single and two-stage tenders.",
    badge: "PPRA PRE-QUALIFIED",
  },
  {
    id: "secp",
    name: "Securities & Exchange Commission",
    authority: "SECP Federal Registrar",
    licenseNumber: "CIN: 0081294 (Incorporated Entity)",
    status: "Private Limited Company",
    description: "Incorporated under the Companies Act as a legally compliant private corporate entity with statutory audit filings.",
    badge: "SECP REGISTERED",
  },
  {
    id: "fbr-atl",
    name: "Federal Board of Revenue — ATL",
    authority: "FBR Inland Revenue",
    licenseNumber: "NTN: 7392014-9 | STRN: 3277876123441",
    status: "Active Taxpayer (100% Tax Compliant)",
    description: "Regular Active Taxpayer List (ATL) corporate member with full income tax, withholding, and sales tax compliance.",
    badge: "100% ATL COMPLIANT",
  },
  {
    id: "iso",
    name: "ISO Certification Authorities",
    authority: "International Quality Standards",
    licenseNumber: "ISO 9001:2015 & ISO 27001 ISMS",
    status: "Certified Management System",
    description: "Audited quality management system (QMS) and information security management system (ISMS) guaranteeing operational integrity.",
    badge: "ISO 9001 & 27001",
  },
];

/* ─── Institutional Procurement FAQs Data ─── */
export interface ProcurementFaq {
  question: string;
  answer: string;
  category: "Tenders & Bidding" | "IT Hardware Supply" | "Civil Works" | "Compliance & Guarantees";
}

export const PROCUREMENT_FAQS: ProcurementFaq[] = [
  {
    question: "What types of government tenders does Kardan Ventures participate in?",
    answer: "Kardan Ventures participates in Single-Stage One-Envelope, Two-Stage Two-Envelope, and Open Competitive Framework tenders announced by federal ministries, provincial secretariats, autonomous government commissions, defense departments, and municipal corporations under PPRA rules.",
    category: "Tenders & Bidding",
  },
  {
    question: "Are all IT hardware supplies backed by official Manufacturer Authorization Forms (MAF)?",
    answer: "Yes. Every computing unit, rack server (Dell/HPE), commercial laptop (Lenovo/Dell), laser projector (Epson), and networking switch (Cisco) is delivered with an authentic, verifiable Manufacturer Authorization Form (MAF) directly from the OEM, guaranteeing non-refurbished, genuine hardware with genuine 3-to-5 year onsite warranty.",
    category: "IT Hardware Supply",
  },
  {
    question: "Can Kardan Ventures furnish Schedule-A Bank Guarantees for large-scale bids?",
    answer: "Yes. Kardan Ventures maintains established institutional credit facilities and credit lines with Schedule-A commercial banks in Pakistan. We provide Bid Security (Earnest Money), Performance Guarantees, Mobilization Advance Guarantees, and Retention Guarantees promptly upon tender issuance.",
    category: "Compliance & Guarantees",
  },
  {
    question: "What is your scope and financial limit under PEC Category C-2 licensing?",
    answer: "Under Pakistan Engineering Council (PEC) Category C-2 regulations, we are officially authorized to construct, supervise, and execute heavy civil, structural, electrical, and mechanical works for government projects up to the statutory financial ceiling specified under PEC constructor bylaws.",
    category: "Civil Works",
  },
  {
    question: "How can government procurement officers request a formal Bill of Quantities (BoQ) estimate?",
    answer: "Officers can utilize our online Tender Scope Estimator on the website, submit an official RFQ via our Tender Desk at tenders@kardanventure.com, or contact our 24/7 Bid Closure Emergency Liaison desk at +92 300 8594120.",
    category: "Tenders & Bidding",
  },
];


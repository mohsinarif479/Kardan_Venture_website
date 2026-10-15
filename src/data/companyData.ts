import { EquipmentItem, ServiceVertical, TenderProject, ComplianceCert, FaqItem } from '../types';

export const COMPANY_PROFILE = {
  name: 'Kardan Ventures',
  legalName: 'Kardan Ventures (Pvt.) Limited',
  corporateType: 'Private Limited Company (Incorporated under the Companies Act)',
  tagline: 'Government Contracting, Turnkey Infrastructure & Enterprise ICT Solutions',
  shortSummary: 'Kardan Ventures (Pvt.) Limited is a pre-qualified institutional contractor delivering turnkey public sector infrastructure, civil engineering, enterprise datacenter computing, fleet commercial laptops, laser projectors, and statutory government tender execution.',
  establishedYear: '2012',
  corporateId: 'SECP CIN: 0081294',
  stats: [
    { label: 'Tenders Executed & Certified', value: '450+', subtext: 'Federal & Provincial Public Sector' },
    { label: 'Cumulative Contract Value', value: 'PKR 14.8B+', subtext: 'Civil Infrastructure & ICT Procurement' },
    { label: 'Contractual On-Time Milestone Rate', value: '99.6%', subtext: 'Zero Liquidated Damages / Default Record' },
    { label: 'Active Statutory Registrations', value: '42', subtext: 'SECP, PEC, FBR, PPRA, EPADS' }
  ],
  contact: {
    address: 'Corporate Commercial Tower, Plot 44-C, Blue Area / Sector F-6',
    city: 'Islamabad (Federal Capital) | Regional Hubs: Lahore & Karachi',
    phone: '+92 (051) 844-9211',
    emergencyTenderCell: '+92 300 8594120',
    email: 'tenders@kardanventures.com',
    supportEmail: 'procurement@kardanventures.com',
    operatingHours: 'Mon - Fri: 08:30 - 17:30 (24/7 Dedicated Tender Response Desk during active bid closures)'
  },
  complianceKeys: {
    ntn: 'NTN: 7392014-9 (Active Taxpayer ATL - 100% Tax Compliant)',
    strn: 'STRN: 3277876123441',
    pecCategory: 'PEC Category C-2 (Civil, Structural, Electrical & MEP)',
    ppraStatus: 'PPRA & EPADS Pre-Qualified Vendor (Reg # 9042)',
    iso: 'ISO 9001:2015 QMS & ISO 27001 ISMS Certified'
  }
};

export const SERVICES_DATA: ServiceVertical[] = [
  {
    id: 'government-tenders',
    title: 'Public Sector Tender Contracting & Turnkey Execution',
    tagline: 'End-to-end statutory procurement compliant with PPRA / EPADS frameworks.',
    description: 'We act as the prime EPC and supply contractor for federal ministries, autonomous commissions, and provincial government departments. From initial pre-qualification and technical-financial bid structuring to mobilization bank guarantees and final audit sign-offs, we provide end-to-end milestone accountability.',
    detailedPoints: [
      'Single-Stage Two-Envelope and Two-Stage Two-Envelope tender participation',
      'Mobilization of Schedule-A Bank Guarantees (Bid Bonds, Earnest Money, Performance Guarantees)',
      '100% compliance with Federal PPRA, SPPRA, KP-PPRA, and B-PPRA procurement statutory rules',
      'Stage-wise delivery challans, certified Factory Acceptance Tests (FAT), and Site Acceptance Tests (SAT)',
      'Institutional invoicing with automated tax deductions (WHT, PRA, SRB, FBR) and zero-dispute audit trails'
    ],
    capabilities: [
      'Turnkey Public Sector Bidding',
      'Single & Two-Stage Tenders',
      'Joint Venture (JV) Consortiums',
      'Post-Contract SLA Maintenance'
    ],
    stats: [
      { label: 'PPRA Compliant Bids', value: '100%' },
      { label: 'Audit Sign-Offs', value: '450+' }
    ],
    complianceHighlight: 'Registered with Federal & Provincial E-Procurement Portals (EPADS/PPRA)',
    iconName: 'FileCheck'
  },
  {
    id: 'civil-construction',
    title: 'Civil Construction & Infrastructure Engineering',
    tagline: 'Institutional buildings, structural engineering, and heavy civil public works.',
    description: 'Operating under Pakistan Engineering Council (PEC) Category C-2, our construction division executes turnkey public sector building complexes, academic campuses, administrative directorates, and municipal infrastructure with certified structural engineers and modern earthmoving equipment.',
    detailedPoints: [
      'Multi-storey administrative complexes, public university faculty blocks, and state laboratories',
      'Reinforced Cement Concrete (RCC) framed structures designed to Seismic Zone 3 & 4 standards',
      'Integrated MEP systems (HVAC central chilling, 3-phase electrical distribution, fire suppression)',
      'Perimeter security infrastructure, ballistic-resistant checkpoints, and boundary surveillance',
      'Heavy asphalt carriageway roads, stormwater drainage networks, and water reservoirs'
    ],
    capabilities: [
      'Turnkey EPC Civil Contracting',
      'Institutional Complexes',
      'MEP & Central HVAC Systems',
      'Structural Seismic Engineering'
    ],
    stats: [
      { label: 'Sq. Ft. Constructed', value: '2.1M+' },
      { label: 'PEC Engineer Cadre', value: '35+ Staff' }
    ],
    complianceHighlight: 'PEC Category C-2 Licensed, ASTM & ACI Material Quality Conformance',
    iconName: 'Building2'
  },
  {
    id: 'it-hardware-procurement',
    title: 'Enterprise ICT Systems & Hardware Procurement',
    tagline: 'Authorized Tier-1 supply of servers, laptops, projectors, desktops & networking.',
    description: 'We are a trusted technology contractor delivering massive IT deployments for public sector departments, defense directorates, universities, and financial institutions. Every unit is backed by verifiable Manufacturer Authorization Forms (MAF) and 3-to-5 year onsite warranty SLAs.',
    detailedPoints: [
      'Enterprise 2U/4U Rack & Blade Servers (Dell PowerEdge, HPE ProLiant, Lenovo ThinkSystem)',
      'Fleet Commercial Laptops (Lenovo ThinkPad, Dell Latitude) with TPM 2.0 and MIL-STD durability',
      'High-Lumen Laser Projectors (Epson 6,000-8,000 Lumens) and 75"/86" 4K Interactive Touch Panels',
      'Enterprise Workstations, Micro-towers, and Borderless Commercial All-In-One (AIO) Fleets',
      'Datacenter Infrastructure: 42U Server Racks, Cisco Catalyst PoE+ Switching, 10G SFP+ Fiber Optics',
      'Schneider/APC 3-Phase Online Industrial Double-Conversion UPS Systems (20kVA to 80kVA)'
    ],
    capabilities: [
      'Enterprise Server Clusters',
      'Commercial PC & Laptop Fleets',
      'Smart Auditorium Laser Projection',
      'Campus Core Network Infrastructure'
    ],
    stats: [
      { label: 'ICT Hardware Delivered', value: '68,000+ Units' },
      { label: 'OEM Authorized Lines', value: '12 Tier-1 Brands' }
    ],
    complianceHighlight: 'Direct Tier-1 OEM Sourcing with Certified MAF & Serial-Number Registry',
    iconName: 'Server'
  },
  {
    id: 'general-order-supply',
    title: 'General Order Supply & Strategic Logistics',
    tagline: 'High-volume institutional logistics, biometric systems, and emergency power.',
    description: 'A disciplined logistics and procurement supply chain designed for high-volume government demands. We import, warehouse, and distribute specialized security apparatus, biometric attendance infrastructure, heavy silent diesel generators, and laboratory equipment.',
    detailedPoints: [
      'Biometric fingerprint and multi-spectral facial recognition terminals and optical turnstiles',
      'Heavy-duty industrial silent diesel generator sets (30kVA to 250kVA) with automated transfer switches',
      'High-speed network multi-function laser printers, heavy document scanners, and secure PIN release',
      'Specialized scientific, diagnostic, and vocational laboratory equipment packages'
    ],
    capabilities: [
      'Bulk Institutional Distribution',
      'Customs Bonded Warehousing',
      'Emergency Power Engineering',
      'Biometric Identity Hardware'
    ],
    stats: [
      { label: 'Districts Reached', value: '95+' },
      { label: 'Warehousing Buffer', value: '50,000 sq.ft' }
    ],
    complianceHighlight: 'Active Taxpayer (ATL) with Full Import Clearances and Customs Documentation',
    iconName: 'Truck'
  }
];

export const EQUIPMENT_CATALOG: EquipmentItem[] = [
  {
    id: 'srv-01',
    name: 'Dell PowerEdge R760 2U Enterprise Rack Server',
    category: 'servers',
    categoryLabel: 'Mission-Critical Enterprise Servers',
    brand: 'Dell Technologies',
    model: 'PowerEdge R760 Dual-Socket Rackmount',
    specs: [
      'Dual 4th/5th Gen Intel Xeon Scalable Gold/Silver (up to 64 cores total)',
      '128GB - 512GB ECC DDR5 4800MHz Registered Memory',
      '8x 1.92TB NVMe Enterprise Read-Intensive Solid State Drives (Hardware RAID 5/10)',
      'Dual Redundant 1400W Titanium Hot-Plug Power Supplies',
      'iDRAC9 Enterprise Remote Out-of-Band Management with Lifecycle Controller',
      'Dual 10GbE SFP+ plus Quad 1GbE Base-T Network Daughter Card'
    ],
    keyFeature: 'Designed for government mission-critical datacenters, provincial registries, and ERP workloads.',
    warranty: '3 to 5 Years Onsite NBD (Next Business Day) Comprehensive OEM Direct Warranty',
    leadTime: 'Immediate Stock (Ex-Stock Buffer) or 2 Weeks for Custom Tender Configurations',
    complianceRating: 'PPRA & Defense IT Procurement Compliant Specification',
    idealFor: 'Provincial datacenters, university cloud nodes, healthcare database backbones',
    badge: 'Standard Tender Line'
  },
  {
    id: 'srv-02',
    name: 'HPE ProLiant DL380 Gen11 2U Rackmount Server',
    category: 'servers',
    categoryLabel: 'Mission-Critical Enterprise Servers',
    brand: 'Hewlett Packard Enterprise',
    model: 'DL380 Gen11 Dual Socket',
    specs: [
      'Dual Intel Xeon Silver/Gold Scalable Processors with Thermal Optimization',
      '256GB TruDDR5 Registered Error-Correcting Memory',
      'HPE Smart Array Tri-Mode Enterprise Controller with 4GB Flash-Backed Write Cache',
      '12x 3.5" Hot-Plug SAS/SATA Enterprise Storage Drive Bays',
      'HPE iLO 6 Advanced Silicon Root of Trust Hardware Security Architecture',
      'Redundant Hot-Plug 1000W Flex Slot Platinum Power Supplies'
    ],
    keyFeature: 'Hardware-level Silicon Root of Trust security mandated by statutory national security bodies.',
    warranty: '3 Years 24x7 4-Hour Response Onsite Support with Keep Your Hard Drive',
    leadTime: 'Ready for Immediate Deployment / Tender Allocation',
    complianceRating: 'ISO 27001 Secure Compute Standard Approved',
    idealFor: 'Security agencies, revenue authorities, central government archives',
    badge: 'High Security'
  },
  {
    id: 'lap-01',
    name: 'Lenovo ThinkPad T14 / L14 Gen 5 Enterprise Fleet',
    category: 'laptops',
    categoryLabel: 'Fleet Commercial Laptops',
    brand: 'Lenovo Commercial',
    model: 'ThinkPad T14 / L14 MIL-SPEC Series',
    specs: [
      'Intel Core i5 / i7 vPro 13th/14th Gen or AMD Ryzen 7 PRO',
      '16GB / 32GB DDR5 5600MHz System RAM',
      '512GB / 1TB PCIe Gen4 Performance Opal2 NVMe SSD',
      '14.0" WUXGA (1920x1200) IPS Anti-Glare 400 nits Low Power ComfortView',
      'Discrete TPM 2.0 Security Chip, Fingerprint Sensor & Smartcard Reader',
      'MIL-STD-810H Military Durability Certified (Drop, Spill, and Vibration Tested)'
    ],
    keyFeature: 'The benchmark for government executive fleets, engineered for long lifecycle deployment.',
    warranty: '3 Years Premier Onsite Support with International Coverage',
    leadTime: 'Bulk Consignments (100 to 3,000+ units delivered nationwide within 10 days)',
    complianceRating: 'Federal Procurement Standard for Executive Computing',
    idealFor: 'Civil service officers, public university faculty, field inspection auditors',
    badge: 'Bulk Tender Fleet'
  },
  {
    id: 'lap-02',
    name: 'Dell Latitude 5540 / 5550 15.6" Business Class Laptop',
    category: 'laptops',
    categoryLabel: 'Fleet Commercial Laptops',
    brand: 'Dell Technologies',
    model: 'Latitude 5000 Series Enterprise',
    specs: [
      'Intel Core Ultra 5 / Ultra 7 Processor with Dedicated NPU Neural Engine',
      '16GB / 32GB DDR5 Dual Channel Memory',
      '512GB PCIe M.2 NVMe Solid State Drive',
      '15.6" FHD (1920x1080) Anti-Glare IPS Non-Touch Display',
      'Integrated FHD Camera with Hardware Mechanical Privacy Shutter',
      '54Whr Long Lifecycle Battery with ExpressCharge (80% in 60 minutes)'
    ],
    keyFeature: 'Robust chassis and enterprise AI audio processing for ministerial video conferences.',
    warranty: '3-Year Dell ProSupport Onsite Service with Accidental Damage Cover',
    leadTime: 'Buffer Stock Warehoused for Rapid Tender Mobilization',
    complianceRating: 'Energy Star 8.0 & EPEAT Gold Registered',
    idealFor: 'Government secretariats, public enterprise leadership, medical officers',
    badge: 'Enterprise Class'
  },
  {
    id: 'proj-01',
    name: 'Epson EB-L730U 7,000 Lumens WUXGA 3LCD Laser Projector',
    category: 'projectors',
    categoryLabel: 'Laser Projectors & Presentation Displays',
    brand: 'Epson Professional',
    model: 'EB-L730U High-Lumen Laser Engine',
    specs: [
      '7,000 Lumens Equal Color and White Brightness (ISO 21118)',
      'Native WUXGA Resolution (1920 x 1200) with 4K Signal Enhancement',
      'Solid-State Laser Light Source with 20,000 Hours Maintenance-Free Operation',
      'Up to 500-inch diagonal projection capability with Optical Zoom and Lens Shift',
      'Built-in HDBaseT, Dual HDMI 2.0, and Miracast Wireless Screen Sharing',
      '360-degree installation flexibility with edge blending and geometric correction'
    ],
    keyFeature: 'Ultra-bright sharp projection designed for high-ambient-light government auditoriums and halls.',
    warranty: '3 Years or 20,000 Hours Comprehensive Replacement Warranty',
    leadTime: 'Supplied with Heavy-Duty Ceiling Mount Kits and Motorized Screens',
    complianceRating: 'RoHS, CE, and Public Works Presentation Standard',
    idealFor: 'Parliamentary committee rooms, university auditoriums, conference centers',
    badge: 'Smart Auditorium'
  },
  {
    id: 'proj-02',
    name: 'ViewSonic ViewBoard IFP7552-1B 75" 4K Interactive Flat Panel',
    category: 'projectors',
    categoryLabel: 'Laser Projectors & Presentation Displays',
    brand: 'ViewSonic Commercial',
    model: 'ViewBoard 75" UHD Interactive Display',
    specs: [
      '75" 4K Ultra HD (3840 x 2160) Anti-Glare 9H Tempered Safety Glass Panel',
      '40-Point Ultra-Fine Touch Recognition with Dual-Pen Multi-Color Writing',
      'Integrated 45W Stereo Soundbar (2x 15W + 1x 15W Subwoofer) for Clear Meeting Audio',
      'Built-in 8-Element Microphone Array with Beamforming and Acoustic Echo Cancellation',
      'Front USB-C 65W Power Delivery, HDMI, and USB Touch Passthrough',
      'Integrated Android OS with Modular OPS PC Slot for Windows 11 Enterprise'
    ],
    keyFeature: 'Turnkey interactive presentation and video conferencing display replacing legacy projectors.',
    warranty: '3 Years Commercial Onsite Warranty with Advance Unit Exchange',
    leadTime: 'Delivered with Heavy-Duty Mobile Floor Trolleys or Wall Mount Brackets',
    complianceRating: 'HEC Smart Classroom & Digital Boardroom Standard',
    idealFor: 'Cabinet meeting rooms, executive boardrooms, higher education lecture halls',
    badge: 'Interactive 4K'
  },
  {
    id: 'desk-01',
    name: 'HP Pro Tower 400 G9 / EliteDesk Commercial Desktop',
    category: 'desktops',
    categoryLabel: 'Commercial Desktops & Workstations',
    brand: 'HP Inc.',
    model: 'Pro Tower 400 G9 Microtower',
    specs: [
      'Intel Core i5-13500 / i7-13700 Processor (13th/14th Gen, Up to 16 Cores)',
      '16GB / 32GB DDR4/DDR5 Dual Channel RAM',
      '512GB PCIe M.2 NVMe SSD + Optional 1TB 7200 RPM Enterprise Secondary Storage',
      'HP Sure Start Gen7 BIOS Self-Healing Security & TPM 2.0 Cryptographic Processor',
      'Includes HP 23.8" FHD IPS Borderless Monitor with Low Blue Light Certification',
      'Pre-activated Genuine Windows 11 Pro 64-bit National OEM License'
    ],
    keyFeature: 'Engineered for continuous 24/7 public service operations with durable steel chassis.',
    warranty: '3-Year Next Business Day Parts, Labor and Onsite Service',
    leadTime: 'Immediate Bulk Stock (Consignments of 50 to 2,500 units)',
    complianceRating: 'Standard Federal Procurement Specification for Office IT',
    idealFor: 'Government secretariats, revenue facilitation centers, public service desks',
    badge: 'Institutional Workhorse'
  },
  {
    id: 'desk-02',
    name: 'Dell OptiPlex 7410 / 7420 23.8" Commercial All-In-One',
    category: 'desktops',
    categoryLabel: 'Commercial Desktops & Workstations',
    brand: 'Dell Technologies',
    model: 'OptiPlex AIO 7000 Series',
    specs: [
      'Intel Core i5 / i7 vPro 13th Gen Desktop Processor',
      '16GB DDR5 4800MHz Memory',
      '512GB PCIe NVMe Solid State Drive',
      '23.8" FHD (1920x1080) IPS Anti-Glare Non-Touch Display with Height-Adjustable Stand',
      'Retractable 5MP Privacy Webcam with Windows Hello Facial Recognition',
      'Includes Dell Pro Wireless Commercial Keyboard and Optical Mouse Bundle'
    ],
    keyFeature: 'Zero-clutter commercial footprint ideal for citizen facilitation centers and executive desks.',
    warranty: '3-Year Basic Onsite Service with Remote Diagnostic Support',
    leadTime: 'Direct Logistics Allocation for Turnkey Tenders',
    complianceRating: 'TCO Certified & Energy Star Qualified',
    idealFor: 'Citizen facilitation centers, public counters, healthcare admission stations',
    badge: 'Countertop Fleet'
  },
  {
    id: 'net-01',
    name: 'Cisco Catalyst 9300 Series 48-Port PoE+ Managed Switch',
    category: 'networking',
    categoryLabel: 'Datacenter & Campus Networking',
    brand: 'Cisco Systems',
    model: 'Catalyst C9300-48P-A',
    specs: [
      '48 Ports 10/100/1000 Gigabit Ethernet with Full PoE+ Support (740W Power Budget)',
      'Modular Uplink Architecture supporting 4x 10G SFP+ or 2x 40G QSFP+ Uplinks',
      'StackWise-480 Technology for 480 Gbps Stack Bandwidth',
      'Layer 3 Advanced Enterprise Routing Protocols (OSPF, BGP, VRF, Cisco DNA Ready)',
      'Dual Redundant Hot-Swappable 1100W AC Power Supplies'
    ],
    keyFeature: 'The institutional gold standard for government campus backbones and secure CCTV networks.',
    warranty: 'Cisco Enhanced Limited Lifetime Warranty (E-LLW) with TAC Access',
    leadTime: 'Supplied with 10G SFP+ Optical Modules and Patch Cords',
    complianceRating: 'Carrier-Grade Security Clearance Approved',
    idealFor: 'Government campus LANs, secure data centers, video surveillance backbones',
    badge: 'Carrier Grade'
  },
  {
    id: 'pwr-01',
    name: 'Schneider Electric / APC Easy 3S 20kVA - 40kVA Online 3-Phase UPS',
    category: 'power',
    categoryLabel: 'Datacenter Power & Conditioning',
    brand: 'Schneider Electric / APC',
    model: 'Easy UPS 3S Series 3-Phase',
    specs: [
      '20kVA / 18kW - 40kVA / 36kW Double-Conversion Online Topology',
      'Wide Input Voltage Window (304V - 477V) engineered for harsh utility grid conditions',
      'Up to 96% Efficiency in Double Conversion Mode, 99% in ECO Mode',
      'Modular VRLA Battery Cabinets configured for 30 to 180 Minutes Full-Load Autonomy',
      'Integrated SNMP Network Management Card for Cloud Telemetry and Automated Server Shutdown'
    ],
    keyFeature: 'Guarantees uninterrupted pure sinewave power shielding sensitive government datacenters.',
    warranty: '2 Years Comprehensive Warranty Including Battery Packs with Factory Startup',
    leadTime: 'Complete Onsite Installation & Commissioning by Certified Electrical Engineers',
    complianceRating: 'IEC 62040-3 Performance Standard Compliant',
    idealFor: 'Datacenter server rooms, emergency command centers, medical diagnostic labs',
    badge: 'Zero Downtime'
  }
];

export const TENDER_PROJECTS: TenderProject[] = [
  {
    id: 'proj-001',
    title: 'National Smart Classroom & IT Infrastructure Turnkey Rollout',
    client: 'Federal Ministry of Education & Professional Training',
    sector: 'education',
    sectorLabel: 'Higher Education & Public Sector',
    year: '2025 - 2026',
    scopeSummary: 'Turnkey procurement and deployment of 3,200 commercial desktop PCs, 450 high-lumen laser projectors, and 120 interactive flat panels across 95 institutions nationwide.',
    deliverables: [
      '3,200 Core i7 Workstations with Licensed National Enterprise OS',
      '450 Epson EB-L730U Laser Projectors with Motorized 120" Screens',
      '120 ViewSonic 75" Interactive 4K Flat Panels with Mobile Stands',
      'Onsite administrative orientation and 3-Year 24/7 SLA maintenance'
    ],
    valueBand: 'PKR 650 Million',
    completionTime: 'Completed 18 days ahead of contractual milestone',
    status: 'Delivered & Certified',
    location: 'Nationwide (Islamabad, Lahore, Peshawar, Quetta)'
  },
  {
    id: 'proj-002',
    title: 'Regional Directorate & Administrative Complex Civil Construction',
    client: 'Public Works Department (PWD) / Ministry of Housing',
    sector: 'construction',
    sectorLabel: 'Civil & Engineering Works',
    year: '2024 - 2025',
    scopeSummary: 'Turnkey civil construction of a 4-storey seismic-resistant administrative complex encompassing 78,000 sq.ft of covered area, complete with MEP, elevators, and security perimeters.',
    deliverables: [
      'RCC Framed structure designed to Seismic Zone 3 specifications',
      'Centralized VRF air conditioning and acoustic auditorium for 300 seats',
      'Heavy-duty boundary wall with automated biometric security gate',
      'Complete structural and material quality compliance certificates from PEC'
    ],
    valueBand: 'PKR 1.2 Billion',
    completionTime: 'Executed within 14-month contracted schedule',
    status: 'Completed',
    location: 'Sector G-9/1, Federal Capital Territory'
  },
  {
    id: 'proj-003',
    title: 'Primary Provincial Datacenter & Server Expansion',
    client: 'Provincial Information Technology Board (PITB)',
    sector: 'it-infra',
    sectorLabel: 'IT Infrastructure & Datacenters',
    year: '2025',
    scopeSummary: 'Design, supply, and installation of tier-3 datacenter computing nodes consisting of 42 high-density 2U rack servers, 10G SAN storage, and redundant 40kVA online UPS.',
    deliverables: [
      '42 Dell PowerEdge R760 2U Dual Xeon Servers (16TB Enterprise NVMe)',
      '2x 100TB High-Availability SAN Fibre Channel Storage Arrays',
      '4x 42U Cold Aisle Containment Server Enclosures',
      'Schneider Electric Easy 3S 40kVA Double Conversion UPS with Battery Banks'
    ],
    valueBand: 'PKR 480 Million',
    completionTime: 'Delivered & commissioned with zero downtime',
    status: 'Active AMC',
    location: 'Arfa Software Technology Park / Regional Datacenter'
  },
  {
    id: 'proj-004',
    title: 'Modernization of Urban Traffic Command Center & IT Fleet',
    client: 'Urban Transport & Municipal Development Authority',
    sector: 'government',
    sectorLabel: 'Government & Public Sector',
    year: '2024',
    scopeSummary: 'Supply and installation of 55" video wall matrix, Cisco core network switching, 650 All-in-One officer workstations, and biometric verification gates.',
    deliverables: [
      '3x4 55" Ultra-Narrow Bezel 4K Command Center Video Wall',
      '650 Dell OptiPlex 24" Commercial All-In-One Desktops',
      '24 Cisco Catalyst 9300 48-Port PoE+ Managed Switches',
      'Biometric turnstiles integrated with automated time-attendance software'
    ],
    valueBand: 'PKR 310 Million',
    completionTime: '100% FAT/SAT sign-offs on first inspection',
    status: 'Delivered & Certified',
    location: 'Metropolitan Urban Command Complex'
  },
  {
    id: 'proj-005',
    title: 'University Technology Campus Academic Block Civil Works',
    client: 'Higher Education Commission / Public University Engineering Wing',
    sector: 'construction',
    sectorLabel: 'Civil & Engineering Works',
    year: '2023 - 2024',
    scopeSummary: 'Civil construction of a 3-storey Academic Faculty building, research labs, external asphalt access roads, and stormwater drainage infrastructure.',
    deliverables: [
      '55,000 sq.ft civil building with state-of-the-art computer labs',
      '1.2 km heavy asphalt dual-carriageway access road with LED solar streetlights',
      'Complete sanitary, stormwater sewer lines, and underground water reservoir',
      'Handover with 3-year structural maintenance defect liability guarantee'
    ],
    valueBand: 'PKR 740 Million',
    completionTime: 'Delivered on schedule with zero safety incidents',
    status: 'Completed',
    location: 'University Campus Extension'
  },
  {
    id: 'proj-006',
    title: 'Emergency Medical Logistics & IT Supply Chain Provisioning',
    client: 'Provincial Health Services Academy',
    sector: 'government',
    sectorLabel: 'Government & Public Sector',
    year: '2024 - 2025',
    scopeSummary: 'Fast-track general order supply including 1,400 ruggedized field laptops, 120 emergency power generators, and medical cold-chain temperature telemetry sensors.',
    deliverables: [
      '1,400 Lenovo ThinkPad Rugged Laptops with 4G LTE eSIM connectivity',
      '120 Silent Diesel Generators (15kVA - 30kVA) with automated transfer switches',
      'Real-time IoT cloud telemetry tracking across 34 district healthcare offices',
      'Emergency delivery completed within 21 calendar days of award letter'
    ],
    valueBand: 'PKR 420 Million',
    completionTime: 'Rapid emergency mobilization SLA fulfilled',
    status: 'Delivered & Certified',
    location: '34 District Headquarters'
  }
];

export const COMPLIANCE_LIST: ComplianceCert[] = [
  {
    id: 'c1',
    title: 'Public Procurement Regulatory Authority (PPRA)',
    issuer: 'Cabinet Division, Government of Pakistan',
    code: 'PPRA-VEND-9042 / EPADS Portal Enrolled',
    status: 'Active & Verified',
    description: 'Pre-qualified active vendor authorized for federal e-procurement (EPADS) bidding and major procurement lots.'
  },
  {
    id: 'c2',
    title: 'Federal Board of Revenue (FBR)',
    issuer: 'Revenue Authority of Pakistan',
    code: 'NTN: 7392014-9 / Active Taxpayer List (100% ATL)',
    status: 'Active & Verified',
    description: 'Verified 100% active taxpayer with compliant withholding tax clearance, sales tax (STRN 3277876123441), and audited books.'
  },
  {
    id: 'c3',
    title: 'Pakistan Engineering Council (PEC)',
    issuer: 'Statutory Body for Engineering Works',
    code: 'PEC Category C-2 (Lic. # 41829)',
    status: 'Active & Verified',
    description: 'Licensed constructor authorized for high-value civil engineering, structural works, electrical, and MEP turnkey contracts.'
  },
  {
    id: 'c4',
    title: 'Securities & Exchange Commission of Pakistan (SECP)',
    issuer: 'Corporate Regulatory Authority',
    code: 'CIN: 0081294 (Private Limited Company)',
    status: 'Active & Verified',
    description: 'Incorporated under the Companies Act as a Private Limited corporate entity with authorized capital structure.'
  },
  {
    id: 'c5',
    title: 'ISO 9001:2015 Quality Management',
    issuer: 'UKAS / International Standards Body',
    code: 'CERT-ISO-9001-QMS-8271',
    status: 'Audited 2026',
    description: 'Certified operational management for quality assurance, OEM product inspection, and construction project governance.'
  },
  {
    id: 'c6',
    title: 'ISO 27001 Information Security Management',
    issuer: 'ISMS Certification Board',
    code: 'CERT-ISO-27001-ISMS-3319',
    status: 'Audited 2026',
    description: 'Hardware custody chain security, secure cryptographic wipe protocols, and zero-compromise datacenter deployments.'
  }
];

export const FAQS_DATA: FaqItem[] = [
  {
    category: 'Tender Process',
    question: 'How does Kardan Ventures participate in government tenders?',
    answer: 'We monitor official tender gazettes and e-procurement portals (PPRA, EPADS, provincial procurement authorities, military engineering services). We prepare compliant technical and financial bids adhering strictly to the tender terms, provide verified earnest money / bid security bank guarantees from Schedule-A commercial banks, and execute according to the awarded Letter of Acceptance (LoA).'
  },
  {
    category: 'Tender Process',
    question: 'Can government departments issue direct RFQs or single-source inquiries to Kardan Ventures?',
    answer: 'Yes. For pre-qualified panels, rate contracts, petty purchases under PPRA Rule 42(a)/(b), or emergency procurement provisions, authorized procurement officers can request formal bids directly through our Tender Desk portal or by contacting tenders@kardanventures.com.'
  },
  {
    category: 'IT Procurement',
    question: 'Are all IT equipment, servers, and laptops genuine with official OEM warranty?',
    answer: 'Yes, 100%. We provide authentic Manufacturer Authorization Forms (MAF) from Tier-1 OEMs including Dell, HPE, Lenovo, Cisco, and Epson. Every server, laptop, desktop, and projector is verifiable via the OEM serial number database and backed by official 3-to-5 year onsite warranty.'
  },
  {
    category: 'IT Procurement',
    question: 'What is the lead time for bulk delivery of 500+ laptops or desktops?',
    answer: 'For standard commercial models, we maintain buffer warehousing allowing initial batch mobilization within 48 to 72 hours. For customized enterprise configurations (e.g. specialized vPro, specific NVMe raids, defense security chips), delivery timelines typically range between 10 to 21 business days.'
  },
  {
    category: 'Construction',
    question: 'What engineering standards and PEC categories does your construction division hold?',
    answer: 'Kardan Ventures operates under PEC Category C-2 registration with approved civil, structural, electrical (MEP), and road construction codes. All material tests (concrete cylinder crush tests, steel tensile yield tests, soil compaction) are certified by accredited government laboratories prior to milestone billing.'
  },
  {
    category: 'Compliance & Invoicing',
    question: 'How do you handle milestone billing, advance mobilization, and performance bank guarantees?',
    answer: 'We operate in full accordance with Public Procurement Rules. We submit verified Performance Guarantees (5% - 10% of contract value from Schedule-A commercial banks) and accept payment via institutional cross-cheques or direct state treasury bank transfers upon verified delivery and inspection certificates.'
  }
];

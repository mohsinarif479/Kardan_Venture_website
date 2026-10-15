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
  badge?: string;
}

export interface ServiceVertical {
  id: string;
  title: string;
  tagline: string;
  description: string;
  detailedPoints: string[];
  capabilities: string[];
  stats: { label: string; value: string }[];
  complianceHighlight: string;
  iconName: string;
}

export interface TenderProject {
  id: string;
  title: string;
  client: string;
  sector: 'government' | 'it-infra' | 'construction' | 'education';
  sectorLabel: string;
  year: string;
  scopeSummary: string;
  deliverables: string[];
  valueBand: string;
  completionTime: string;
  status: 'Completed' | 'Delivered & Certified' | 'Active AMC';
  location: string;
}

export interface ComplianceCert {
  id: string;
  title: string;
  issuer: string;
  code: string;
  status: 'Active & Verified' | 'Audited 2026';
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'Tender Process' | 'IT Procurement' | 'Construction' | 'Compliance & Invoicing';
}

export interface RfqItemSelection {
  item: EquipmentItem;
  quantity: number;
}


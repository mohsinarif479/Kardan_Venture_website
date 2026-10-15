'use client';

import React, { useState } from 'react';
import TopNotificationBar from '../components/TopNotificationBar';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AboutOverview from '../components/AboutOverview';
import ServicesSection from '../components/ServicesSection';
import EquipmentCatalog from '../components/EquipmentCatalog';
import TenderCalculator from '../components/TenderCalculator';
import ProjectsPortfolio from '../components/ProjectsPortfolio';
import TenderProcess from '../components/TenderProcess';
import ComplianceBadges from '../components/ComplianceBadges';
import TestimonialsFaq from '../components/TestimonialsFaq';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import CompanyProfileModal from '../components/CompanyProfileModal';
import { EquipmentItem } from '../types';

export default function Home() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [basketItems, setBasketItems] = useState<EquipmentItem[]>([]);

  const handleAddItemToRfq = (item: EquipmentItem) => {
    if (!basketItems.some((i) => i.id === item.id)) {
      setBasketItems((prev) => [...prev, item]);
    }

    // Smoothly navigate down to the Tender Scope Estimator
    const calcElement = document.getElementById('calculator');
    if (calcElement) {
      calcElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleRemoveItem = (id: string) => {
    setBasketItems((prev) => prev.filter((i) => i.id !== id));
  };

  const handleClearBasket = () => {
    setBasketItems([]);
  };

  const handleSelectServiceForRfq = () => {
    const calcElement = document.getElementById('calculator');
    if (calcElement) {
      calcElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenRfq = () => {
    const calcElement = document.getElementById('calculator');
    if (calcElement) {
      calcElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="min-h-screen flex flex-col bg-[#f8fafc] text-slate-900 selection:bg-amber-500 selection:text-slate-950">
      
      {/* Top Bar for Tender Announcements & Quick Contact */}
      <TopNotificationBar
        onOpenProfile={() => setIsProfileOpen(true)}
        onOpenRfq={handleOpenRfq}
      />

      {/* Main Navigation Bar */}
      <Navbar
        onOpenRfq={handleOpenRfq}
        onOpenProfile={() => setIsProfileOpen(true)}
      />

      {/* Hero Section with Interactive Status Cockpit */}
      <Hero
        onOpenRfq={handleOpenRfq}
        onOpenProfile={() => setIsProfileOpen(true)}
      />

      {/* Corporate Overview & 4 Pillars */}
      <AboutOverview
        onOpenProfile={() => setIsProfileOpen(true)}
      />

      {/* Core Contracting Divisions (Tenders, Civil, IT Equipment, General Order) */}
      <ServicesSection
        onSelectServiceForRfq={handleSelectServiceForRfq}
      />

      {/* IT Hardware & Equipment Showcase (Servers, Laptops, Projectors, Desktops) */}
      <EquipmentCatalog
        onAddItemToRfq={handleAddItemToRfq}
        selectedItemIds={basketItems.map((i) => i.id)}
      />

      {/* Interactive Official Tender Scope & RFQ Estimator */}
      <TenderCalculator
        basketItems={basketItems}
        onRemoveItem={handleRemoveItem}
        onClearBasket={handleClearBasket}
      />

      {/* Executed Government Tenders & Projects Portfolio */}
      <ProjectsPortfolio />

      {/* 5-Step Government Contracting Methodology */}
      <TenderProcess />

      {/* Statutory Accreditations, PEC Category, PPRA & Tax Standing */}
      <ComplianceBadges
        onOpenProfile={() => setIsProfileOpen(true)}
      />

      {/* Institutional Testimonials & Procurement FAQs */}
      <TestimonialsFaq />

      {/* Emergency Tender Desk & Direct Procurement Contact */}
      <ContactSection />

      {/* Corporate Footer with Full Statutory Disclaimers */}
      <Footer
        onOpenProfile={() => setIsProfileOpen(true)}
        onOpenRfq={handleOpenRfq}
      />

      {/* Printable Vendor Capability Statement Modal */}
      <CompanyProfileModal
        isOpen={isProfileOpen}
        onClose={() => setIsProfileOpen(false)}
        onOpenRfq={handleOpenRfq}
      />

    </main>
  );
}

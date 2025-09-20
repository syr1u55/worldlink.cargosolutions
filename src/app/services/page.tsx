
import Link from "next/link";
import ServicesHero from "../../components/ServicesHero/ServicesHero";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import styles from "./page.module.css";

const servicesData = [
  {
    icon: '🚚', // Placeholder icon
    name: 'Land Transport',
    description: 'Efficient and reliable ground transportation for all your cargo needs.',
    href: '/services/land-transport',
  },
  {
    icon: '🚢', // Placeholder icon
    name: 'Sea Freight',
    description: 'Cost-effective ocean freight solutions for international shipping.',
    href: '/services/sea-freight',
  },
  {
    icon: '✈️', // Placeholder icon
    name: 'Air Freight',
    description: 'Fastest delivery option for urgent and time-sensitive shipments.',
    href: '/services/air-freight',
  },
  {
    icon: '📦', // Placeholder icon
    name: 'Warehousing',
    description: 'Secure and flexible warehousing solutions for storage and distribution.',
    href: '/services/warehousing',
  },
  {
    icon: '🌍', // Placeholder icon
    name: 'Forwarding Services',
    description: 'Comprehensive freight forwarding to streamline your logistics.',
    href: '/services/forwarding-services',
  },
  {
    icon: '🔗', // Placeholder icon
    name: 'Supply Chain',
    description: 'Optimized supply chain management for maximum efficiency.',
    href: '/services/supply-chain',
  },
  {
    icon: '🛡️', // Placeholder icon
    name: 'Cargo Insurance',
    description: 'Protect your valuable cargo with our comprehensive insurance options.',
    href: '/services/cargo-insurance',
  },
  {
    icon: '🏛️', // Placeholder icon for Diplomatic Shipment
    name: 'Diplomatic Shipment',
    description: 'Specialized handling for diplomatic cargo with utmost care and security.',
    href: '/services/diplomatic-shipment',
  },
  {
    icon: '📊', // Placeholder icon for Logistics
    name: 'Logistics',
    description: 'End-to-end logistics solutions to optimize your operations.',
    href: '/services/logistics',
  },


];

export default function Services() {
  return (
    <div className={styles.page}>
      <ServicesHero />
      <main className={styles.main}>
        <section className={styles.servicesGridSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Explore Our Solutions</h2>
            <p className={styles.sectionSubtitle}>
              We provide a wide array of logistics services designed to meet your specific needs.
            </p>
            <div className={styles.grid}>
              {servicesData.map((service) => (
                <ServiceCard
                  key={service.name}
                  icon={service.icon}
                  title={service.name}
                  description={service.description}
                  href={service.href}
                />
              ))}
            </div>
          </div>
        </section>

        <section className={styles.callToActionSection}>
          <div className={styles.container}>
            <h2>Ready to Get Started?</h2>
            <p>Contact us today for a personalized quote and discover how we can help your business.</p>
            <Link href="/quote" className={styles.callToActionButton}>Get a Free Quote</Link>
          </div>
        </section>
      </main>
    </div>
  );
}

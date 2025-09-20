import Link from 'next/link';
import styles from './Services.module.css';

const servicesData = [
  {
    icon: '🚚', // Placeholder icon
    title: 'Land Transport',
    description: 'Efficient and reliable ground transportation for all your cargo needs.',
    link: '/services/land-transport',
  },
  {
    icon: '🚢', // Placeholder icon
    title: 'Sea Freight',
    description: 'Cost-effective ocean freight solutions for international shipping.',
    link: '/services/sea-freight',
  },
  {
    icon: '✈️', // Placeholder icon
    title: 'Air Freight',
    description: 'Fastest delivery option for urgent and time-sensitive shipments.',
    link: '/services/air-freight',
  },
  {
    icon: '📦', // Placeholder icon
    title: 'Warehousing',
    description: 'Secure and flexible warehousing solutions for storage and distribution.',
    link: '/services/warehousing',
  },
  {
    icon: '🌍', // Placeholder icon
    title: 'Forwarding Services',
    description: 'Comprehensive freight forwarding to streamline your logistics.',
    link: '/services/forwarding-services',
  },
  {
    icon: '🔗', // Placeholder icon
    title: 'Supply Chain',
    description: 'Optimized supply chain management for maximum efficiency.',
    link: '/services/supply-chain',
  },
];

const Services = () => {
  return (
    <section className={styles.servicesSection}>
      <div className={styles.container}>
        <h2>Our Comprehensive Services</h2>
        <p className={styles.subtitle}>We offer a wide range of logistics solutions to meet your business needs.</p>
        <div className={styles.grid}>
          {servicesData.map((service, index) => (
            <Link href={service.link} key={index} className={styles.card}>
              <div className={styles.icon}>{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

import LogoCarousel from '@/components/Logocarousel';

export default function HomePage() {
  const companies = [
    { name: "Google", logo: "/images/google-logo.svg", url: "https://www.zapier.com" },
    { name: "Amazon", logo: "/images/amazon-logo.svg", url: "https://www.zapier.com" },
    { name: "Microsoft", logo: "/images/microsoft-logo.svg", url: "https://www.zapier.com" },
    { name: "Apple", logo: "/images/apple-logo.svg", url: "https://www.zapier.com" },
    { name: "Meta", logo: "/images/meta-logo.svg", url: "https://www.zapier.com" },
    { name: "IBM", logo: "/images/ibm-logo.svg", url: "https://www.zapier.com" },
    { name: "Adobe", logo: "/images/adobe-logo.svg", url: "https://www.zapier.com" },
    { name: "Intel", logo: "/images/intel-logo.svg", url: "https://www.zapier.com" },
    { name: "Infosys", logo: "/images/infosys-logo.svg", url: "https://www.zapier.com" },
    { name: "tcs", logo: "/images/tcs-logo.svg", url: "https://www.zapier.com" },
  ];

  return (
    <main>
      <LogoCarousel
        companies={companies}
        title="Trusted By Top Companies"
        speed={80}
        grayscale={true}
        hoverEffect={true}
      />
    </main>
  );
}
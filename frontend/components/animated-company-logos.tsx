import LogoCarousel from '@/components/Logocarousel';

export default function HomePage() {
  const companies = [
    { name: "Amazon", logo: "/images/amazon-logo.svg", url: "https://www.amazon.com" },
    { name: "Microsoft", logo: "/images/microsoft-logo.svg", url: "https://www.microsoft.com" },
    { name: "GAIL", logo: "/images/gail-logo.svg", url: "https://gailonline.com/" },
    { name: "Zee News", logo: "/images/zee-news-logo.svg", url: "https://zeenews.india.com/" },
    { name: "TV9", logo: "/images/tv9-logo.svg", url: "https://tv9bharatvarsh.com/" },
    { name: "Malaysian Airlines", logo: "/images/malaysian-airlines-logo.png", url: "https://www.malaysiaairlines.com/" },
    { name: "Ease My Trip", logo: "/images/ease-my-trip-logo.svg", url: "https://www.easemytrip.com/" },
    { name: "ONGC", logo: "/images/ongc-logo.svg", url: "https://www.ongcindia.com/" },
    { name: "Deloitte", logo: "/images/Deloitte-logo.svg", url: "https://www2.deloitte.com/global/en.html" },
    { name: "IIITD", logo: "/images/iiitd-logo.svg", url: "https://www.iiitd.ac.in/" },
    { name: "German Corporation", logo: "/images/german-corporation-logo.jpg", url: "https://www.google.com/search?q=german+corporation" },
    { name: "IESA", logo: "/images/iesa-logo.svg", url: "https://iesa.org/" },
    { name: "KIIT", logo: "/images/kiit-logo.svg", url: "https://kiit.ac.in/" },
    { name: "AICGIM", logo: "/images/aicgim-logo.svg", url: "https://aicgim.in/" },
    { name: "Techbox Hindi", logo: "/images/techbox-hindi-logo.svg", url: "https://www.youtube.com/@TechBoxHindi" },
    { name: "MeitY", logo: "/images/meity-logo.svg", url: "https://www.meity.gov.in/" },
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
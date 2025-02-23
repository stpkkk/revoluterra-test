import footer from '../assets/images/Footer.png';

export default function Footer() {
  return (
    <footer className="relative flex w-full justify-center">
      <div className="absolute bottom-0 h-25 w-full bg-white"></div>
      <img src={footer} alt="footer" className="z-10" />
    </footer>
  );
}

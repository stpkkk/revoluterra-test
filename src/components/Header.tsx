import header from '../assets/images/Header.png';

export default function Header() {
  return (
    <header className="mb-10 flex w-full justify-center bg-white">
      <img src={header} alt="header" />
    </header>
  );
}

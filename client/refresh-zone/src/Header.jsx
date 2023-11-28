import logo from "./images/more/logo1.png";

export default function Header() {
  return (
    <header className="w-full px-2 py-1 bg-yellow-950 text-white flex items-center justify-center gap-4">
      <div>
        <img src={logo} alt="logo" className="w-[60px]" />
      </div>
      <div>
        <h1 className="font-bold font-serif tracking-wider text-2xl">
          Espresso Emporium
        </h1>
      </div>
    </header>
  );
}

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-300 py-8 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} Sofiya Yasin. All rights reserved.</p>
        <p className="mt-2 text-sm">Built with React & Tailwind CSS</p>
      </div>
    </footer>
  );
};

export default Footer;
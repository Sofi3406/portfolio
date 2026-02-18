const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} Sofiya Yasin. All rights reserved.</p>
        <p className="mt-2 text-sm">Built with React & Tailwind CSS</p>
      </div>
    </footer>
  );
};

export default Footer;
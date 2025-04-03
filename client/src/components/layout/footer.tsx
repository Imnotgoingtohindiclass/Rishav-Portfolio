const Footer = () => {
  return (
    <footer className="py-12 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <span className="text-primary font-bold text-xl">R/</span>
            <p className="text-muted-foreground text-sm mt-2">© {new Date().getFullYear()} Rishav. All rights reserved.</p>
          </div>
          
          <div>
            <p className="text-muted-foreground text-sm">
              Designed & Built with <span className="text-primary">♥</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

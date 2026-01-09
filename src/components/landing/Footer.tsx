import { Github, Twitter, Linkedin } from "lucide-react";

const footerLinks = {
  produk: [
    { name: "Fitur", href: "#fitur" },
    { name: "Harga", href: "#harga" },
    { name: "Changelog", href: "#" },
    { name: "Status", href: "#" },
  ],
  resources: [
    { name: "Dokumentasi", href: "#" },
    { name: "Tutorial", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Community", href: "#" },
  ],
  company: [
    { name: "Tentang Kami", href: "#" },
    { name: "Karir", href: "#" },
    { name: "Kontak", href: "#" },
    { name: "Partner", href: "#" },
  ],
  legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "SLA", href: "#" },
  ],
};

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          {/* Brand */}
          <div className="col-span-2">
            <a href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">W3</span>
              </div>
              <span className="font-bold text-xl text-foreground">wp3x.com</span>
            </a>
            <p className="text-muted-foreground text-sm mb-6 max-w-xs">
              Platform WordPress hosting dengan performa enterprise. Scaling horizontal tanpa pusing.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center hover:bg-primary/10 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4 text-muted-foreground" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center hover:bg-primary/10 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4 text-muted-foreground" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center hover:bg-primary/10 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4 text-muted-foreground" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Produk</h4>
            <ul className="space-y-3">
              {footerLinks.produk.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} wp3x.com. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm">
            Made with ❤️ in Indonesia
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

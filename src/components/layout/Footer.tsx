import Link from 'next/link';
import { Mountain, Twitter, Linkedin, Github, Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Mountain className="h-7 w-7" />
              <span className="text-2xl font-bold">DevCore</span>
            </Link>
            <p className="text-primary-foreground/80">
              DevCore offers its clients a whole host of services, from land acquisition to development and even marketing and sales.
            </p>
            <div className="flex space-x-4">
              <Link href="#" aria-label="Facebook" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"><Facebook /></Link>
              <Link href="#" aria-label="Twitter" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"><Twitter /></Link>
              <Link href="#" aria-label="Instagram" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"><Instagram /></Link>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="#about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">About Us</Link></li>
              <li><Link href="#services" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Services</Link></li>
              <li><Link href="#portfolio" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Our Projects</Link></li>
              <li><Link href="#testimonials" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Our Blog</Link></li>
              <li><Link href="#contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4">Office</h4>
            <address className="not-italic text-primary-foreground/80 space-y-2">
              <p>22nd Floor, Control Tower, Motor City, Dubai, UAE</p>
              <p>+971 50 888 8888</p>
              <p>info@devcoreproperties.com</p>
            </address>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4">Subscribe To Our Newsletter</h4>
            <form className="flex space-x-2">
              <input type="email" placeholder="Enter your email" className="bg-primary-foreground/10 border-primary-foreground/20 text-white placeholder:text-primary-foreground/50 rounded-md px-3 py-2 w-full" />
              <button type="submit" className="bg-white text-primary rounded-md px-4 py-2">&gt;</button>
            </form>
          </div>
        </div>
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/70">
          <p>Copyright &copy; {new Date().getFullYear()} DevCore</p>
        </div>
      </div>
    </footer>
  );
}

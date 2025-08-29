import Link from 'next/link';
import { Mountain, Twitter, Linkedin, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Mountain className="h-7 w-7" />
              <span className="text-2xl font-bold">Devcore Reimagined</span>
            </Link>
            <p className="text-primary-foreground/80">
              Innovative solutions for the digital world. We build amazing web and mobile apps.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="#about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">About Us</Link></li>
              <li><Link href="#services" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Services</Link></li>
              <li><Link href="#portfolio" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Portfolio</Link></li>
              <li><Link href="#contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link href="#services" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Web Development</Link></li>
              <li><Link href="#services" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Mobile App Development</Link></li>
              <li><Link href="#services" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">UI/UX Design</Link></li>
              <li><Link href="#services" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">E-commerce</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <Link href="#" aria-label="Twitter" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"><Twitter /></Link>
              <Link href="#" aria-label="LinkedIn" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"><Linkedin /></Link>
              <Link href="#" aria-label="GitHub" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"><Github /></Link>
            </div>
          </div>
        </div>
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/70">
          <p>&copy; {new Date().getFullYear()} Devcore Reimagined. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

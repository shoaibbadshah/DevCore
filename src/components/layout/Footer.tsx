
import Link from 'next/link';
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Send } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-4">
            <Image src="/img/logo/white-logo.svg" alt="DevCore Logo" width={150} height={40} />
            <p className="text-white/80">
              DEVCORE is a cutting-edge real estate hub, built on the foundation of expertise, innovation, and seamless execution.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-white/80 hover:text-accent"><i className="fab fa-facebook-f"></i></Link>
              <Link href="#" className="text-white/80 hover:text-accent"><i className="fab fa-twitter"></i></Link>
              <Link href="#" className="text-white/80 hover:text-accent"><i className="fab fa-youtube"></i></Link>
              <Link href="#" className="text-white/80 hover:text-accent"><i className="fab fa-linkedin-in"></i></Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="#about" className="text-white/80 hover:text-accent">About Us</Link></li>
              <li><Link href="#services" className="text-white/80 hover:text-accent">Our Services</Link></li>
              <li><Link href="#projects" className="text-white/80 hover:text-accent">Our Projects</Link></li>
              <li><Link href="#blog" className="text-white/80 hover:text-accent">Our Blog</Link></li>
              <li><Link href="#contact" className="text-white/80 hover:text-accent">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Office</h3>
            <p className="text-white/80">Office 1404, Marina Plaza, Dubai Marina, Dubai, UAE</p>
            <div className="mt-4 space-y-2">
              <p><a href="tel:+97148737111" className="text-white/80 hover:text-accent">+971 4 873 7111</a></p>
              <p><a href="mailto:info@devcoreproperties.com" className="text-white/80 hover:text-accent">info@devcoreproperties.com</a></p>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Subscribe to our newsletter</h3>
            <form className="flex gap-2">
              <Input type="email" placeholder="Enter your email" className="bg-blue-800/50 border-blue-700/50 text-white placeholder:text-white/70" />
              <Button type="submit" size="icon"><Send className="h-4 w-4" /></Button>
            </form>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-blue-800/50 text-center text-white/80">
          <p>Copyright @ 2025 DevCore</p>
        </div>
      </div>
    </footer>
  );
}

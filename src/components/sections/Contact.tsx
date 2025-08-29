
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-sm uppercase tracking-widest text-primary mb-4">Contact Us</h2>
            <p className="text-4xl md:text-5xl font-teko font-semibold leading-tight">
              Have a quick <span className="text-primary">question?</span> <br /> Get in touch and we'll help you out.
            </p>
          </div>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input type="text" placeholder="First Name" />
            <Input type="text" placeholder="Last Name" />
            <Input type="email" placeholder="Email" />
            <Input type="tel" placeholder="Phone Number" />
            <Textarea placeholder="Message" className="md:col-span-2" rows={5} />
            <div className="md:col-span-2">
              <Button type="submit" size="lg">Send Message</Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

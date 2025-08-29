import { Award, Building, DollarSign, Home, Key, Users } from "lucide-react";

const stats = [
  { value: '2000+', label: 'projects', icon: <Building /> },
  { value: '25BN+', label: 'value of projects', icon: <DollarSign /> },
  { value: '25000k', label: 'professional partners', icon: <Users /> },
  { value: '200k', label: 'properties sold', icon: <Home /> },
  { value: '10500k', label: 'happy clients', icon: <Users /> },
  { value: '3000k', label: 'awards won', icon: <Award /> },
];

export default function Partners() {
  return (
    <section id="partners" className="py-12 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <p className="text-3xl font-bold text-primary">{stat.value}</p>
              <p className="text-sm text-foreground/80">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

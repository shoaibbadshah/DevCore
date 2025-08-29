const stats = [
  { value: '2000+', label: 'Units in pipeline' },
  { value: '25BN+', label: 'Worth Of Sale' },
  { value: '25000k', label: 'Broker Agents' },
  { value: '200k', label: 'Employees' },
  { value: '10500k', label: 'Units Sold' },
  { value: '3000k', label: 'Brokerages' },
];

export default function Stats() {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="wow fadeInUp" data-wow-delay={`${index * 0.1}s`}>
              <p className="text-4xl md:text-5xl font-teko font-bold text-accent">{stat.value}</p>
              <p className="text-sm uppercase tracking-wider text-muted-foreground mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

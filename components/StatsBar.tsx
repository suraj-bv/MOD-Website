import AnimatedCounter from "./ui/AnimatedCounter";

interface Stat {
  value: number;
  label: string;
}

const stats: Stat[] = [
  { value: 500000, label: "Homes Cleaned" },
  { value: 300000, label: "Hours Saved" },
  { value: 2000, label: "Tappit Professionals" },
];

export default function StatsBar() {
  return (
    <section className="bg-sky-600 py-9 text-white sm:py-10">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-7 px-4 text-center sm:gap-8 sm:px-8 md:grid-cols-3">
        {stats.map((stat) => (
          <div key={stat.label}>
            <AnimatedCounter value={stat.value} className="font-display text-4xl font-extrabold tracking-tight" />
            <p className="mt-2 text-sm text-sky-100">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

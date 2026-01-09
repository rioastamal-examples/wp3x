import { motion } from "framer-motion";
import { CheckCircle2, TrendingUp, Headphones } from "lucide-react";

const stats = [
  {
    icon: CheckCircle2,
    value: "99.99%",
    label: "Uptime Guarantee",
    description: "SLA terjamin untuk ketersediaan situs Anda",
  },
  {
    icon: TrendingUp,
    value: "Auto-Scaling",
    label: "Ready",
    description: "Skalabilitas otomatis sesuai kebutuhan traffic",
  },
  {
    icon: Headphones,
    value: "24/7",
    label: "Expert Support",
    description: "Tim ahli siap membantu kapan saja",
  },
];

const StatsSection = () => {
  return (
    <section className="py-16 bg-muted/30 border-y border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.value}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 mb-4">
                <stat.icon className="w-7 h-7 text-primary" />
              </div>
              <div className="flex items-baseline justify-center gap-2 mb-2">
                <span className="text-3xl sm:text-4xl font-bold text-foreground">
                  {stat.value}
                </span>
                <span className="text-lg font-medium text-muted-foreground">
                  {stat.label}
                </span>
              </div>
              <p className="text-muted-foreground text-sm">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

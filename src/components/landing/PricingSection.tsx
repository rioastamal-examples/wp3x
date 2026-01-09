import { motion } from "framer-motion";
import { Check, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Starter",
    price: "149K",
    period: "/bulan",
    description: "Sempurna untuk blog personal dan website portfolio.",
    features: [
      "1 WordPress Installation",
      "10GB SSD Storage",
      "Unlimited Bandwidth",
      "Free SSL Certificate",
      "Daily Backups",
      "Email Support",
    ],
    cta: "Mulai Gratis",
    popular: false,
  },
  {
    name: "Pro",
    price: "449K",
    period: "/bulan",
    description: "Ideal untuk bisnis dan toko online yang berkembang.",
    features: [
      "5 WordPress Installations",
      "50GB SSD Storage",
      "Unlimited Bandwidth",
      "Free SSL Certificate",
      "Multi-node Deployment",
      "Primary + 1 Replica DB",
      "Priority Support",
      "Staging Environment",
    ],
    cta: "Pilih Pro",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "Solusi lengkap untuk kebutuhan enterprise dan high-traffic.",
    features: [
      "Unlimited Installations",
      "Custom Storage",
      "Unlimited Bandwidth",
      "Free SSL Certificate",
      "Auto-Scaling Nodes",
      "Primary + Multi Replica DB",
      "24/7 Dedicated Support",
      "Custom SLA",
      "Managed Services",
    ],
    cta: "Hubungi Sales",
    popular: false,
  },
];

const PricingSection = () => {
  return (
    <section id="harga" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Harga Transparan
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-4">
            Pilih Paket yang Sesuai
          </h2>
          <p className="text-muted-foreground text-lg">
            Tanpa biaya tersembunyi. Upgrade atau downgrade kapan saja.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-2xl border p-8 ${
                plan.popular
                  ? "border-primary bg-card shadow-xl glow-shadow"
                  : "border-border card-gradient"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-sm font-medium">
                    <Zap className="w-3.5 h-3.5" />
                    Paling Populer
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-bold text-foreground mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm">{plan.description}</p>
              </div>

              <div className="mb-6">
                <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                <span className="text-muted-foreground">{plan.period}</span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className="w-full"
                variant={plan.popular ? "default" : "outline"}
                size="lg"
              >
                {plan.cta}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

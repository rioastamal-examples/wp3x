import { motion } from "framer-motion";
import { Server, Shield, Zap, Clock, ArrowUpRight, Database, Globe, Lock } from "lucide-react";

const features = [
  {
    icon: Server,
    title: "Horizontal Scaling Otomatis",
    description:
      "Tambahkan instance baru secara otomatis saat traffic melonjak. Tidak ada lagi downtime karena overload.",
  },
  {
    icon: Shield,
    title: "Situs Selalu Online",
    description:
      "Multi-instance deployment memastikan situs Anda tetap online bahkan jika satu server bermasalah.",
  },
  {
    icon: Database,
    title: "Database Primary & Replica",
    description:
      "Performa baca ultra-cepat dengan replica database. Write ke primary, read dari replica.",
  },
  {
    icon: Clock,
    title: "Setup dalam 3 Menit",
    description:
      "Konfigurasi enterprise-grade tanpa ribet. Deploy WordPress dengan infrastruktur cloud dalam hitungan menit.",
  },
  {
    icon: Globe,
    title: "CDN Global Terintegrasi",
    description:
      "Konten statis disajikan dari edge server terdekat. Loading cepat dari mana saja di dunia.",
  },
  {
    icon: Lock,
    title: "Keamanan Berlapis",
    description:
      "SSL gratis, firewall aplikasi, dan proteksi DDoS. Situs Anda aman dari berbagai ancaman.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="fitur" className="py-24 bg-background">
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
            Fitur Unggulan
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-4">
            Infrastruktur Cloud yang Powerful
          </h2>
          <p className="text-muted-foreground text-lg">
            Semua yang Anda butuhkan untuk menjalankan WordPress dengan performa tinggi dan keandalan maksimal.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative card-gradient rounded-2xl border border-border p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                {feature.title}
                <ArrowUpRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

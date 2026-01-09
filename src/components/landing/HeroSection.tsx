import { motion } from "framer-motion";
import { ArrowRight, Play, Zap, Database, Server } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen hero-gradient pt-24 pb-16 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-32 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8"
          >
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground">
              Platform hosting WordPress tercepat di Indonesia
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6"
          >
            WordPress Scaling
            <br />
            <span className="text-gradient">Tanpa Pusing</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            Dapatkan performa enterprise dengan multi-instance deployment dan 
            database Primary-Replica. Cukup beberapa klik, situs Anda siap 
            menangani jutaan pengunjung.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Button size="lg" className="glow-shadow animate-pulse-glow">
              Coba Gratis
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline">
              <Play className="mr-2 w-4 h-4" />
              Lihat Demo
            </Button>
          </motion.div>

          {/* Hero Visual */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="relative"
          >
            <div className="bg-card rounded-2xl border border-border shadow-2xl p-6 sm:p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Instance Card */}
                <div className="card-gradient rounded-xl border border-border p-5 text-left">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Server className="w-5 h-5 text-primary" />
                  </div>
                  <div className="text-sm text-muted-foreground mb-1">Active Instances</div>
                  <div className="text-2xl font-bold text-foreground">4 Nodes</div>
                  <div className="mt-3 flex gap-1">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="h-2 flex-1 rounded-full bg-primary" />
                    ))}
                  </div>
                </div>

                {/* Database Card */}
                <div className="card-gradient rounded-xl border border-border p-5 text-left">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Database className="w-5 h-5 text-primary" />
                  </div>
                  <div className="text-sm text-muted-foreground mb-1">Database Mode</div>
                  <div className="text-2xl font-bold text-foreground">Primary + Replica</div>
                  <div className="mt-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    <span className="text-xs text-muted-foreground">Syncing in real-time</span>
                  </div>
                </div>

                {/* Performance Card */}
                <div className="card-gradient rounded-xl border border-border p-5 text-left">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Zap className="w-5 h-5 text-primary" />
                  </div>
                  <div className="text-sm text-muted-foreground mb-1">Response Time</div>
                  <div className="text-2xl font-bold text-foreground">48ms</div>
                  <div className="mt-3">
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full w-[15%] bg-primary rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

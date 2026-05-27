import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ChevronRight,
  ShieldCheck,
  Zap,
  MapPin,
  MonitorSmartphone,
  Home,
  Wind,
  Bath,
  UtensilsCrossed,
  HardHat,
  Layers,
  PaintRoller,
  Wrench,
  Plug,
  ClipboardCheck,
  Landmark,
  ShieldCheck as ShieldIcon,
  FileText,
  Scale,
  Truck,
  Sofa,
  Camera,
  Trees,
  Trash2,
  Hammer,
  Sparkles,
  Sprout,
  Droplets,
  CircleDot,
  Tablet,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hire Home Service Professionals | FastExpert" },
      {
        name: "description",
        content:
          "Browse top-rated home service professionals across the U.S. Find verified local pros for remodeling, repairs, real estate, and more.",
      },
      { property: "og:title", content: "Hire Home Service Professionals | FastExpert" },
      {
        property: "og:description",
        content:
          "Browse top-rated home service professionals across the U.S. and find the right expert for your needs.",
      },
    ],
  }),
  component: Index,
});

const services: { label: string; icon: LucideIcon }[] = [
  { label: "Roofing Contractors", icon: Home },
  { label: "HVAC Contractors", icon: Wind },
  { label: "Bathroom Remodelers", icon: Bath },
  { label: "Kitchen Remodelers", icon: UtensilsCrossed },
  { label: "General Contractors", icon: HardHat },
  { label: "Flooring Contractors", icon: Layers },
  { label: "Painters", icon: PaintRoller },
  { label: "Plumbers", icon: Wrench },
  { label: "Electricians", icon: Plug },
  { label: "Home Inspectors", icon: ClipboardCheck },
  { label: "Mortgage Lenders", icon: Landmark },
  { label: "Home Insurance Agents", icon: ShieldIcon },
  { label: "Title / Settlement", icon: FileText },
  { label: "Real Estate Attorneys", icon: Scale },
  { label: "Movers", icon: Truck },
  { label: "Home Stagers", icon: Sofa },
  { label: "Real Estate Photographers", icon: Camera },
  { label: "Landscapers", icon: Trees },
  { label: "Junk Removal / Hauling", icon: Trash2 },
  { label: "Handymen", icon: Hammer },
  { label: "House Cleaners", icon: Sparkles },
  { label: "Lawn Care", icon: Sprout },
  { label: "Power Washing", icon: Droplets },
  { label: "Carpet Cleaners", icon: CircleDot },
  { label: "Window / Glass Repair", icon: Tablet },
];

const trust = [
  { icon: ShieldCheck, title: "Verified", sub: "Professionals" },
  { icon: Zap, title: "Fast", sub: "Response Times" },
  { icon: MapPin, title: "Local", sub: "Businesses" },
  { icon: MonitorSmartphone, title: "Remote", sub: "Services Available" },
];

function Index() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/60 bg-background">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          <Link to="/" className="flex items-center gap-2">
            <span className="relative inline-flex h-7 w-9">
              <span className="absolute left-0 top-0 h-5 w-5 rounded-full bg-primary" />
              <span className="absolute right-0 bottom-0 h-3 w-3 rounded-full bg-amber-400" />
            </span>
            <span className="text-2xl font-bold tracking-tight text-foreground">
              Fast<span className="text-primary">Expert</span>
            </span>
          </Link>
          <nav className="hidden items-center gap-10 md:flex">
            {["Marketplace", "Categories", "Top Pros", "Why FastExpert"].map((l) => (
              <a key={l} href="#" className="text-sm font-medium text-foreground/80 hover:text-primary">
                {l}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-6">
            <a href="#" className="hidden text-sm font-medium text-foreground/80 hover:text-primary md:inline">
              My Leads
            </a>
            <a
              href="#"
              className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition hover:opacity-90"
            >
              Unlock Trusted Pros
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section
        className="relative px-6 py-20 text-white"
        style={{
          backgroundImage:
            "linear-gradient(135deg, var(--hero-from), var(--hero-to))",
        }}
      >
        <div className="mx-auto max-w-7xl">
          <nav className="mb-10 flex items-center gap-2 text-sm text-white/80">
            <a href="#" className="hover:text-white">Home</a>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white">Pros</span>
          </nav>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
              Hire Home Service Professionals
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base text-white/90 md:text-lg">
              Browse top-rated professionals across the U.S. and find the right expert for your needs.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
              {trust.map(({ icon: Icon, title, sub }) => (
                <div key={title} className="flex items-center gap-3">
                  <span
                    className="flex h-10 w-10 items-center justify-center rounded-full"
                    style={{ backgroundColor: "rgba(255, 255, 255, 0.3)" }}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <div className="text-left text-base leading-tight">
                    <div className="font-semibold">{title}</div>
                    <div className="text-white/80">{sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section
        className="px-6 py-20"
        style={{
          backgroundImage:
            "linear-gradient(oklch(0.985 0.005 250) 1px, transparent 1px), linear-gradient(90deg, oklch(0.985 0.005 250) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          backgroundColor: "oklch(0.99 0.003 250)",
        }}
      >
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Featured Home Services
          </h2>
          <p className="mt-3 max-w-5xl whitespace-nowrap text-ellipsis overflow-hidden" style={{ color: "#333333" }}>
            Explore trusted local professionals for home improvement, maintenance, real estate services, and everyday homeowner needs.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map(({ label, icon: Icon }) => (
              <a
                key={label}
                href="#"
                className="group rounded-2xl border bg-card p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                style={{
                  borderColor: "transparent",
                  transitionProperty: "border-color, transform, box-shadow",
                  transitionDuration: "150ms",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#006ADC")}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "transparent")}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span
                      className="flex h-8 w-8 items-center justify-center rounded-full flex-shrink-0"
                      style={{ backgroundColor: "transparent" }}
                    >
                      <Icon className="h-5 w-5" style={{ color: "#006ADC" }} />
                    </span>
                    <div className="text-sm font-semibold group-hover:underline" style={{ color: "#006ADC" }}>
                      {label}
                    </div>
                  </div>
                  <ChevronRight className="h-5 w-5 flex-shrink-0" style={{ color: "#006ADC" }} />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

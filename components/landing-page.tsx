import Image from "next/image";

const navItems = ["Services", "Track", "Support", "Security"];

const services = [
  {
    icon: "document",
    title: "Permits and licenses",
    description: "Apply, renew, and receive approvals without visiting an office.",
  },
  {
    icon: "wallet",
    title: "Payments and fees",
    description: "Pay securely, download receipts, and view your full history.",
  },
  {
    icon: "shield",
    title: "Identity services",
    description: "Verify details, update records, and manage official documents.",
  },
  {
    icon: "chat",
    title: "Citizen support",
    description: "Get guided help, submit requests, and follow every response.",
  },
];

const steps = [
  "Sign in with your verified identity",
  "Choose the service you need",
  "Submit documents and pay securely",
  "Track progress through completion",
];

const metrics = [
  { value: "24/7", label: "online access" },
  { value: "96%", label: "requests resolved digitally" },
  { value: "180+", label: "integrated public services" },
];

function Icon({ name }: { name: string }) {
  const common = "h-5 w-5";

  if (name === "wallet") {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M4 7.5h14.5A2.5 2.5 0 0 1 21 10v6.5a2.5 2.5 0 0 1-2.5 2.5h-14A2.5 2.5 0 0 1 2 16.5v-11A2.5 2.5 0 0 1 4.5 3H18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16.5 13h.01" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      </svg>
    );
  }

  if (name === "shield") {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 3 5 6v5.5c0 4.3 2.8 7.8 7 9.5 4.2-1.7 7-5.2 7-9.5V6l-7-3Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="m9 12 2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (name === "chat") {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M4 6.5A3.5 3.5 0 0 1 7.5 3h9A3.5 3.5 0 0 1 20 6.5v5A3.5 3.5 0 0 1 16.5 15H12l-4.5 4v-4A3.5 3.5 0 0 1 4 11.5v-5Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 8h8M8 11h5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M7 3.5h7l3 3V20a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 6 20V5A1.5 1.5 0 0 1 7.5 3.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 3.5V7h3M9 12h6M9 15.5h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-slate-950 focus:shadow">
          Skip to content
        </a>
        <a href="#" className="flex items-center gap-3 font-semibold text-slate-950" aria-label="CivicOne home">
          <span className="flex h-10 w-10 items-center justify-center rounded-md bg-slate-950 text-sm font-bold text-white">CO</span>
          <span className="leading-tight">
            CivicOne
            <span className="block text-xs font-medium text-slate-500">Digital Services</span>
          </span>
        </a>
        <nav className="hidden items-center gap-7 text-sm font-medium text-slate-700 md:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="transition hover:text-slate-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500">
              {item}
            </a>
          ))}
        </nav>
        <a href="#services" className="inline-flex h-10 items-center justify-center rounded-md bg-emerald-600 px-4 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2">
          Start online
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      <Image
        src="/digital-services-hero.png"
        alt="People using a secure digital services portal in a bright public service center"
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-45"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,23,.95)_0%,rgba(15,23,42,.84)_44%,rgba(15,23,42,.22)_100%)]" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 sm:py-24 lg:grid-cols-[1.05fr_.95fr] lg:px-8 lg:py-28">
        <div className="max-w-3xl">
          <p className="mb-5 inline-flex rounded-md border border-white/20 bg-white/10 px-3 py-1 text-sm font-medium text-emerald-100">
            Official digital access for public services
          </p>
          <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-normal sm:text-5xl lg:text-6xl">
            CivicOne
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-100">
            A secure portal where residents and businesses can apply, pay, verify, and track government services from one trusted place.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#services" className="inline-flex h-12 items-center justify-center rounded-md bg-emerald-500 px-6 text-base font-semibold text-slate-950 shadow-lg shadow-emerald-950/30 transition hover:bg-emerald-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-200 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950">
              Explore services
            </a>
            <a href="#track" className="inline-flex h-12 items-center justify-center rounded-md border border-white/25 bg-white/10 px-6 text-base font-semibold text-white transition hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950">
              Track an application
            </a>
          </div>
        </div>
        <div className="hidden items-end justify-end lg:flex">
          <div className="w-full max-w-sm rounded-md border border-white/15 bg-white/12 p-5 shadow-2xl backdrop-blur-md">
            <div className="flex items-center justify-between border-b border-white/15 pb-4">
              <span className="text-sm font-semibold text-white">Service status</span>
              <span className="rounded-md bg-emerald-400 px-2 py-1 text-xs font-bold text-slate-950">Live</span>
            </div>
            <div className="mt-5 space-y-4">
              {["Business registration", "Passport renewal", "Property tax"].map((item, index) => (
                <div key={item} className="flex items-center justify-between gap-4">
                  <span className="text-sm text-slate-100">{item}</span>
                  <span className="text-sm font-semibold text-emerald-200">{index === 2 ? "Paid" : "In review"}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">Services</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-normal text-slate-950 sm:text-4xl">One account for the work people need done.</h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Designed for high-volume public transactions with clear next steps, secure payments, and transparent status updates.
          </p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <article key={service.title} className="rounded-md border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <div className="flex h-11 w-11 items-center justify-center rounded-md bg-emerald-50 text-emerald-700">
                <Icon name={service.icon} />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-slate-950">{service.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function TrackSection() {
  return (
    <section id="track" className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[.9fr_1.1fr] lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-amber-700">Track</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-normal text-slate-950 sm:text-4xl">Know exactly where every request stands.</h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Applicants see requirements, deadlines, office actions, receipts, and completion notices without having to call or queue.
          </p>
        </div>
        <div className="rounded-md border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <div className="flex flex-col gap-3 border-b border-slate-200 pb-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500">Application ID</p>
              <p className="mt-1 text-lg font-semibold text-slate-950">CO-2026-18492</p>
            </div>
            <span className="w-fit rounded-md bg-amber-100 px-3 py-1 text-sm font-semibold text-amber-800">Officer review</span>
          </div>
          <ol className="mt-6 space-y-5">
            {steps.map((step, index) => (
              <li key={step} className="flex gap-4">
                <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-sm font-bold ${index < 3 ? "bg-emerald-600 text-white" : "bg-slate-200 text-slate-700"}`}>
                  {index + 1}
                </span>
                <div>
                  <p className="font-semibold text-slate-950">{step}</p>
                  <p className="mt-1 text-sm text-slate-600">{index < 3 ? "Completed" : "Next step"}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function TrustSection() {
  return (
    <section id="security" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">Security</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-normal text-slate-950 sm:text-4xl">Built for public trust and operational scale.</h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              CivicOne supports verified identities, audit trails, role-based access, encrypted transactions, and clear service-level reporting.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {metrics.map((metric) => (
              <div key={metric.label} className="rounded-md border border-slate-200 bg-slate-50 p-5">
                <p className="text-3xl font-semibold text-slate-950">{metric.value}</p>
                <p className="mt-2 text-sm leading-5 text-slate-600">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SupportSection() {
  return (
    <section id="support" className="bg-slate-950 py-14 text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>
          <h2 className="text-2xl font-semibold tracking-normal sm:text-3xl">Need help choosing a service?</h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300">
            Guided support helps residents find the correct service, prepare documents, and understand next steps.
          </p>
        </div>
        <a href="mailto:support@example.gov" className="inline-flex h-12 w-fit items-center justify-center rounded-md bg-white px-6 text-base font-semibold text-slate-950 transition hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950">
          Contact support
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 text-sm text-slate-600 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <p>&copy; 2026 CivicOne Digital Services.</p>
        <div className="flex flex-wrap gap-4">
          <a href="#" className="hover:text-slate-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500">Accessibility</a>
          <a href="#" className="hover:text-slate-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500">Privacy</a>
          <a href="#" className="hover:text-slate-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500">Terms</a>
        </div>
      </div>
    </footer>
  );
}

export function LandingPage() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <Services />
        <TrackSection />
        <TrustSection />
        <SupportSection />
      </main>
      <Footer />
    </>
  );
}

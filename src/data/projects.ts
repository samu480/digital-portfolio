export type ProjectSlug =
  | "jarvis"
  | "reiseagentur"
  | "csr-fivem"
  | "nexplay"
  | "python-experiments"
  | "portfolio";

export type Project = {
  slug: ProjectSlug;
  icon: "bot" | "globe" | "gamepad" | "palette" | "terminal" | "code";
  title: string;
  kicker: string;
  description: string;
  longDescription: string;
  tech: string[];
  features: string[];
  lessons: string[];
  nextSteps: string[];
  status: "In Progress" | "Learning" | "Live Soon";
  accent: string;
};

export const projects: Project[] = [
  {
    slug: "jarvis",
    icon: "bot",
    title: "Jarvis V3",
    kicker: "Local AI Assistant",
    description:
      "Lokaler AI-Assistent mit Sprache, Memory, Projektsteuerung, Automatisierung und persönlichem Workflow.",
    longDescription:
      "Jarvis V3 ist mein persönlicher AI-Assistent für produktives Arbeiten am PC. Der Fokus liegt auf lokaler Kontrolle, Sprachinteraktion, Memory, Automatisierung und einer Oberfläche, die echte Aufgaben schneller macht.",
    tech: ["Python", "AI", "Automation", "Speech", "Local Workflow"],
    features: ["Voice Commands", "Memory Layer", "Task Automation", "Project Control", "Local-First Setup"],
    lessons: ["AI muss praktisch bleiben.", "Automatisierung braucht klare Grenzen.", "Lokale Tools geben mehr Kontrolle."],
    nextSteps: ["Stabileres Memory-System", "Bessere Desktop-Integration", "Projekt-Dashboard ausbauen"],
    status: "In Progress",
    accent: "#55f0ff"
  },
  {
    slug: "reiseagentur",
    icon: "globe",
    title: "Reiseagentur Webseite",
    kicker: "Conversion Website",
    description:
      "Kundenwebsite für Ausflüge und Reiseangebote mit Fokus auf Design, Struktur, Vertrauen und Conversion.",
    longDescription:
      "Die Reiseagentur-Webseite verbindet klare Angebotsstruktur mit hochwertigem visuellen Design. Ziel ist eine Seite, die Vertrauen schafft, Angebote schnell erklärt und Besucher zu Kontakt oder Buchung führt.",
    tech: ["HTML", "CSS", "JavaScript", "Web Design", "UX"],
    features: ["Offer Sections", "Trust Elements", "Responsive Layout", "CTA Flow", "Visual Tour Cards"],
    lessons: ["Struktur verkauft besser als Effekte.", "Mobile Lesbarkeit entscheidet viel.", "CTAs brauchen Kontext."],
    nextSteps: ["Buchungslogik planen", "CMS-Option prüfen", "Performance-Bilder optimieren"],
    status: "Live Soon",
    accent: "#8b5cf6"
  },
  {
    slug: "csr-fivem",
    icon: "gamepad",
    title: "CSR / FiveM",
    kicker: "Roleplay Infrastructure",
    description:
      "Roleplay-System mit Admin-Funktionen, Datenbank, Bewerbungslogik und Server-Infrastruktur.",
    longDescription:
      "CSR / FiveM ist ein technisches Roleplay-Projekt mit Admin-Flows, Bewerbungslogik und Infrastruktur. Es verbindet Gaming-Community, Backend-Logik und saubere Verwaltungsoberflächen.",
    tech: ["FiveM", "Backend", "Admin UI", "Database", "Infrastructure"],
    features: ["Admin Tools", "Application Flow", "Database Models", "Server Operations", "Role Management"],
    lessons: ["Community-Systeme brauchen klare Rechte.", "Admin UX muss schnell sein.", "Datenmodelle müssen früh sauber sitzen."],
    nextSteps: ["Admin UI erweitern", "Logs und Audit verbessern", "Deployment-Prozess dokumentieren"],
    status: "In Progress",
    accent: "#ff3df2"
  },
  {
    slug: "nexplay",
    icon: "palette",
    title: "NexPlay",
    kicker: "Gaming Brand Concept",
    description:
      "Gaming-Brand rund um Mousepads, E-Commerce, Social Media und Branding.",
    longDescription:
      "NexPlay ist meine Brand-Idee im Gaming-Bereich. Das Projekt verbindet Produktgefühl, visuelles Branding, E-Commerce-Denken und Social-Media-Auftritt zu einer Marke, die technisch und visuell wachsen kann.",
    tech: ["Branding", "E-Commerce", "Marketing", "Design", "Social Media"],
    features: ["Brand Direction", "Product Positioning", "Shop Concept", "Social Assets", "Landing Flow"],
    lessons: ["Branding braucht Wiedererkennung.", "Produktseiten müssen schnell überzeugen.", "Design und Marketing gehören zusammen."],
    nextSteps: ["Mockups ausarbeiten", "Shop-Struktur planen", "Content-System testen"],
    status: "Learning",
    accent: "#2563eb"
  },
  {
    slug: "python-experiments",
    icon: "terminal",
    title: "Python Experiments",
    kicker: "Creative Coding Lab",
    description:
      "Kreative Python-Übungen, Turtle Animationen, Random Walks, Mini-Games und visuelle Experimente.",
    longDescription:
      "Python Experiments ist mein kreatives Lernlabor. Ich teste Animationen, Turtle-Grafiken, kleine Games und visuelle Muster, um Programmierlogik spielerisch und praktisch zu verstehen.",
    tech: ["Python", "Turtle", "Games", "Animation", "Learning"],
    features: ["Random Walks", "Mini Games", "Turtle Visuals", "Creative Loops", "Algorithm Practice"],
    lessons: ["Kleine Projekte machen Konzepte greifbar.", "Visualisierung motiviert.", "Fehler sind oft die besten Lehrer."],
    nextSteps: ["Experimente sammeln", "Code strukturieren", "Interaktive Web-Demos prüfen"],
    status: "Learning",
    accent: "#b6ff63"
  },
  {
    slug: "portfolio",
    icon: "code",
    title: "Portfolio Website",
    kicker: "3D Web Experience",
    description:
      "Diese Website als eigenes 3D Web Experience Projekt mit Next.js, Three.js, Framer Motion und Tailwind.",
    longDescription:
      "Dieses Portfolio ist selbst ein Projekt: eine moderne Web Experience mit Multi-Page-Struktur, 3D-Szenen, RGB-Design, Animationen und einem professionellen Bewerbungsfokus.",
    tech: ["Next.js", "Three.js", "React", "Framer Motion", "Tailwind"],
    features: ["3D Hero", "RGB UI", "Project Gallery", "Detail Pages", "Responsive Motion"],
    lessons: ["Wow-Effekt braucht Struktur.", "Performance bleibt Teil des Designs.", "Content muss trotz Effekten klar bleiben."],
    nextSteps: ["Live Deployment", "Mehr echte Projekt-Screens", "GitHub-Projekte verlinken"],
    status: "In Progress",
    accent: "#55f0ff"
  }
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Setup", href: "/setup" },
  { label: "Journey", href: "/journey" },
  { label: "Contact", href: "/contact" }
];

export const journeyItems = [
  {
    year: "2025",
    title: "Start mit Code",
    text: "Webentwicklung, Python und erste eigene Projekte wurden zur neuen Richtung."
  },
  {
    year: "2026",
    title: "Echte Projekte",
    text: "Aufbau von Portfolio, Jarvis, Kundenwebseiten, GitHub Workflow und moderner Webentwicklung."
  },
  {
    year: "2027 Ziel",
    title: "Applikationsentwickler EFZ",
    text: "Lehre starten, Fullstack-Grundlagen vertiefen und langfristig professionelle Software bauen."
  }
];

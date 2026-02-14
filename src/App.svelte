<script>
  const today = new Date();
  const aiStartYear = 2023;
  const aiImplementationYears = Math.max(1, today.getFullYear() - aiStartYear);
  const aiYearsLabel = `${aiImplementationYears} year${aiImplementationYears === 1 ? '' : 's'}`;

  const profile = {
    name: 'Oskar',
    role: 'Product-focused fullstack engineer',
  };

  const experiences = [
    {
      period: '2019 - Present',
      title: 'Teamtailor',
      description:
        `Building and shipping features in our large-scale Ruby on Rails and Ember app, and part of the AI team for the past ${aiYearsLabel}.`,
    },
    {
      period: '2017 - 2019',
      title: 'Cryptocurrency exchange',
      description:
        'Architected and built a real-time React frontend as the sole frontend developer, shipping a well-optimized PWA for both desktop and mobile.',
    },
    {
      period: '2015 - 2017',
      title: 'Infor',
      description:
        "Helped build the foundation for offline-first React PWAs and Cordova apps for retail use cases inside a small product team.",
    },
    {
      period: '2013 - 2015',
      title: 'Samly',
      description:
        'Co-founded and developed a cost-sharing and event-planning app, handling both full stack development and business development.',
    },
    {
      period: '2010 - 2015',
      title: 'Linköping University',
      description: 'MSc in Computer Science, focused on software and web development.',
    },
  ];

  const yearsExperience = today.getFullYear() - 2015;
</script>

<svelte:head>
  <title>oskar.dev</title>
  <meta name="description" content="Product-focused fullstack engineer building AI features" />
</svelte:head>

<div class="relative min-h-screen overflow-hidden">
  <div
    class="pointer-events-none absolute -top-24 left-10 h-56 w-56 rounded-full bg-sky-400/30 blur-[90px]"
  ></div>
  <div
    class="pointer-events-none absolute right-6 top-1/3 h-72 w-72 rounded-full bg-amber-400/20 blur-[120px]"
  ></div>

  <main class="mx-auto max-w-6xl px-6 py-10 md:px-10 lg:py-16">
    <section class="panel relative overflow-hidden p-8 md:p-12">
      <div class="mt-6 grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-start">
        <div>
          <h1 class="text-4xl font-semibold leading-tight text-slate-50 md:text-6xl">
            Hi, I'm {profile.name}.
          </h1>
          <p class="mt-4 max-w-2xl text-xl text-slate-100/95 md:text-2xl">
            {profile.role}
          </p>
          <p class="mt-6 max-w-2xl text-base leading-relaxed text-slate-300">
            I'm driven by building innovative things that make an impact. Doing that together with awesome people and cool tech is 🔥.
          </p>

        </div>

        <div class="grid gap-4">
          <article class="panel p-5">
            <p class="mono text-xs uppercase tracking-[0.2em] text-sky-200/75">Experience</p>
            <p class="mt-2 text-3xl font-bold text-white">{yearsExperience}+ years</p>
            <p class="mt-2 text-sm text-slate-300">Building reliable products</p>
          </article>

          <article class="panel p-5">
            <p class="mono text-xs uppercase tracking-[0.2em] text-sky-200/75">AI focus</p>
            <p class="mt-2 text-3xl font-bold text-white">{aiYearsLabel}</p>
            <p class="mt-2 text-sm text-slate-300">Shipping AI features at Teamtailor</p>
          </article>

          <article class="panel p-5">
            <p class="mono text-xs uppercase tracking-[0.2em] text-sky-200/75">Approach</p>
            <p class="mt-2 text-2xl font-bold text-white">Product impact</p>
            <p class="mt-2 text-sm text-slate-300">Outcome-driven, pragmatic, and quality-focused</p>
          </article>
        </div>
      </div>
    </section>

    <section class="mt-14" id="experience">
      <div class="mb-6">
        <p class="section-kicker">Career timeline</p>
        <h2 class="mt-2 text-3xl font-semibold text-white md:text-4xl">Experience</h2>
      </div>

      <div class="relative space-y-6">
        <div
          class="pointer-events-none absolute left-[70px] top-3 hidden h-[calc(100%-2rem)] w-px bg-gradient-to-b from-sky-300/70 via-slate-300/35 to-transparent md:block"
        ></div>

        {#each experiences as experience}
          <article class="panel relative p-6 md:p-8 md:pl-16">
            <div
              class="mb-4 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.18em] text-sky-100/80"
            >
              <span
                class="hidden h-3 w-3 rounded-full bg-amber-300 shadow-[0_0_0_4px_rgba(15,23,42,0.8)] md:inline-block"
              ></span>
              <span>{experience.period}</span>
            </div>
            <h3 class="text-2xl font-semibold text-white">{experience.title}</h3>
            <p class="mt-3 max-w-4xl leading-relaxed text-slate-300">
              {experience.description}
            </p>
          </article>
        {/each}
      </div>
    </section>

  </main>
</div>

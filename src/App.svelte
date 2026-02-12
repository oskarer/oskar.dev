<script>
  const profile = {
    name: 'Oskar',
    role: 'Full stack developer with a frontend focus',
    email: 'hello@oskar.dev',
    location: 'Sweden',
    twitter: '@oskar_eriksson9',
    twitterUrl: 'https://twitter.com/oskar_eriksson9',
  };

  const experiences = [
    {
      period: '2019 - Present',
      title: 'Teamtailor',
      description:
        'Building candidate and recruiter experiences in a large-scale Ruby on Rails and Ember product.',
    },
    {
      period: '2017 - 2019',
      title: 'Cryptocurrency Exchange',
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
      title: 'Linkoping University',
      description: 'MSc in Computer Science, focused on software and web development.',
    },
  ];

  const quickFacts = [
    'Live in Sweden',
    'Enjoys nature',
    'Performance focused',
    'Interested in blockchain and decentralization',
  ];

  const birthDate = new Date('1991-12-05');
  const today = new Date();

  const yearsExperience = today.getFullYear() - 2015;

  let age = today.getFullYear() - birthDate.getFullYear();
  const birthdayReachedThisYear =
    today.getMonth() > birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() &&
      today.getDate() >= birthDate.getDate());

  if (!birthdayReachedThisYear) {
    age -= 1;
  }
</script>

<svelte:head>
  <title>oskar.dev</title>
  <meta name="description" content="Full stack developer with a frontend focus" />
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
      <p class="eyebrow">oskar.dev</p>

      <div class="mt-6 grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-start">
        <div>
          <h1 class="text-4xl font-semibold leading-tight text-slate-50 md:text-6xl">
            Hi, I'm {profile.name}.
          </h1>
          <p class="mt-4 max-w-2xl text-xl text-slate-100/95 md:text-2xl">
            {profile.role}
          </p>
          <p class="mt-6 max-w-2xl text-base leading-relaxed text-slate-300">
            I'm driven by building innovative things that make an impact. I like doing that with
            strong teams, pragmatic product thinking, and technology that scales.
          </p>

          <div class="mt-8 flex flex-wrap gap-3">
            <a class="button-primary" href="#experience">See experience</a>
            <a class="button-secondary" href={`mailto:${profile.email}`}>Contact</a>
          </div>
        </div>

        <div class="grid gap-4">
          <article class="panel p-5">
            <p class="mono text-xs uppercase tracking-[0.2em] text-sky-200/75">Experience</p>
            <p class="mt-2 text-3xl font-bold text-white">{yearsExperience}+ years</p>
            <p class="mt-2 text-sm text-slate-300">Building tested and maintainable products</p>
          </article>

          <article class="panel p-5">
            <p class="mono text-xs uppercase tracking-[0.2em] text-sky-200/75">Current age</p>
            <p class="mt-2 text-3xl font-bold text-white">{age}</p>
            <p class="mt-2 text-sm text-slate-300">Based on a December 5, 1991 birth date</p>
          </article>

          <article class="panel p-5">
            <p class="mono text-xs uppercase tracking-[0.2em] text-sky-200/75">Location</p>
            <p class="mt-2 text-2xl font-bold text-white">{profile.location}</p>
            <p class="mt-2 text-sm text-slate-300">Open to great product conversations</p>
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
          class="pointer-events-none absolute left-[11px] top-3 hidden h-[calc(100%-2rem)] w-px bg-gradient-to-b from-sky-300/70 via-slate-300/35 to-transparent md:block"
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

    <section class="mt-14 grid gap-8 lg:grid-cols-[1fr_1.15fr]">
      <article class="panel p-8">
        <p class="section-kicker">Quick facts</p>
        <h2 class="mt-2 text-3xl font-semibold text-white">Beyond the resume</h2>

        <ul class="mt-6 grid gap-3 text-slate-200">
          {#each quickFacts as fact}
            <li class="rounded-2xl border border-slate-600/40 bg-slate-900/50 p-4">{fact}</li>
          {/each}
        </ul>
      </article>

      <article class="panel p-8">
        <p class="section-kicker">Contact</p>
        <h2 class="mt-2 text-3xl font-semibold text-white">Want to talk?</h2>
        <p class="mt-4 max-w-xl leading-relaxed text-slate-300">
          If you are building something ambitious and need a frontend-focused full stack developer,
          let's connect.
        </p>

        <a
          class="mt-8 inline-flex rounded-full border border-sky-300/70 px-6 py-3 text-lg font-semibold text-sky-100 transition hover:bg-sky-400/15"
          href={`mailto:${profile.email}`}
        >
          {profile.email}
        </a>

        <p class="mt-6 text-sm text-slate-300">
          Also on
          <a class="text-amber-300 hover:text-amber-200" href={profile.twitterUrl} target="_blank" rel="noreferrer">
            {profile.twitter}
          </a>
        </p>
      </article>
    </section>
  </main>
</div>

export function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl glass-panel p-8 md:p-12 rounded-3xl backdrop-blur-md">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
          About <span className="text-fluid">Me</span>
        </h2>

        <div className="prose prose-lg dark:prose-invert mx-auto">
          <p className="text-lg leading-relaxed text-muted-foreground text-center">
            I love turning ideas into real-world smart applications. I&apos;m passionate about merging design with
            function, creating seamless experiences that solve real problems. With a strong foundation in both frontend
            and backend technologies, I build robust, scalable solutions that make a difference.
          </p>

          <p className="text-lg leading-relaxed text-muted-foreground text-center mt-6">
            My journey in software engineering has equipped me with expertise in modern web frameworks, database design,
            and AI integration. I thrive on challenges that push me to learn and grow, always staying curious about
            emerging technologies.
          </p>
        </div>
      </div>
    </section>
  )
}

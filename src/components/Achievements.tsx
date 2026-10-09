
import { motion } from 'framer-motion';
import { achievements, certifications } from '../data/portfolio';
import { EASE, SectionHeading } from './fx';

export default function Achievements() {
  return (
    <>
      <SectionHeading
        kicker="Milestones"
        title="Achievements & Recognition"
      />

      <div className="gutter">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((achievement, index) => (
            <motion.article
              key={achievement.id}
              className="glass group rounded-2xl p-6 transition-colors duration-300 hover:border-crimson-2/40"
              initial={{
                opacity: 0,
                y: 24,
                filter: 'blur(8px)',
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                filter: 'blur(0px)',
              }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
                ease: EASE,
              }}
            >
              <div className="mb-5 flex items-center justify-between gap-3">
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-crimson-2">
                  Highlight {String(index + 1).padStart(2, '0')}
                </span>

                <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[10px] font-medium text-mist">
                  {achievement.laurel}
                </span>
              </div>

              <h3 className="font-display text-xl leading-snug text-bone">
                {achievement.title}
              </h3>

              <p className="mt-2 text-sm font-medium text-mist">
                {achievement.org}
              </p>

              <p className="mt-4 text-sm leading-6 text-smoke">
                {achievement.detail}
              </p>

              {achievement.link && (
                <a
                  href={achievement.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-crimson-2 transition-colors hover:text-bone"
                >
                  View Details
                  <span aria-hidden="true">↗</span>
                </a>
              )}
            </motion.article>
          ))}
        </div>

        <div className="mt-16">
          <SectionHeading
            kicker="Continuous Learning"
            title="Courses & Certifications"
          />

          <div className="grid gap-3 sm:grid-cols-2">
            {certifications.map((certification, index) => (
              <motion.article
                key={`${certification.issuer}-${certification.name}`}
                className="glass flex items-start gap-4 rounded-xl p-5"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.07,
                  ease: EASE,
                }}
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] font-display text-lg text-crimson-2">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <div className="min-w-0">
                  <h3 className="text-sm font-semibold leading-5 text-bone">
                    {certification.name}
                  </h3>

                  <p className="mt-1 text-xs text-mist">
                    {certification.issuer}
                  </p>

                  {certification.link && (
                    <a
                      href={certification.link}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-2 inline-block text-xs font-medium text-crimson-2 hover:text-bone"
                    >
                      View Certificate ↗
                    </a>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
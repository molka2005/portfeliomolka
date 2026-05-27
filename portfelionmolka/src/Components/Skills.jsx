import React, { useRef } from "react";
import { motion } from "framer-motion";

/* ─── Hard skills list with real devicons SVG logos ─── */
const hardSkills = [
  {
    title: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    title: "Java",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  {
    title: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    title: "Docker",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  {
    title: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    title: "Vite",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg",
  },
  {
    title: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    title: "Jenkins",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg",
  },
  {
    title: "Git / GitHub",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    title: "Spark",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachespark/apachespark-original.svg",
  },
  {
    title: "MySQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  {
    title: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
];

/* ─── framer-motion variants ─── */
const fadeIn = (direction, type, delay, duration) => ({
  hidden: {
    x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
    y: direction === "up"   ? 100 : direction === "down"  ? -100 : 0,
    opacity: 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: { type, delay, duration, ease: "easeOut" },
  },
});

const textVariant = (delay = 0) => ({
  hidden: { y: -50, opacity: 0 },
  show:   { y: 0, opacity: 1, transition: { type: "spring", duration: 1.25, delay } },
});

/* ─── Custom 3D Tilt wrapper (no external lib) ─── */
const Tilt3D = ({ children }) => {
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    const card = ref.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -18;
    const rotateY = ((x - centerX) / centerX) * 18;
    card.style.transform = `perspective(700px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.06,1.06,1.06)`;
  };

  const handleMouseLeave = () => {
    if (ref.current) {
      ref.current.style.transform =
        "perspective(700px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)";
    }
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transition: "transform 0.15s ease", willChange: "transform" }}
    >
      {children}
    </div>
  );
};

/* ─── Single skill card ─── */
const SkillCard = ({ index, title, icon, darkMode }) => (
  <Tilt3D>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.1, 0.65)}
      className="w-[160px] sm:w-[180px] p-[2px] rounded-2xl shadow-xl"
      style={{ background: "linear-gradient(135deg, #f97316, #f59e0b)" }}
    >
      <div
        className={`rounded-2xl py-6 px-4 min-h-[150px] flex flex-col justify-evenly items-center gap-3 cursor-pointer transition-colors duration-300 ${
          darkMode
            ? "bg-gray-900 hover:bg-gray-800"
            : "bg-white hover:bg-orange-50"
        }`}
      >
        <img
          src={icon}
          alt={title}
          className="w-14 h-14 object-contain drop-shadow-md"
          loading="lazy"
        />
        <h3
          className={`text-[14px] font-bold text-center tracking-wide ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt3D>
);

/* ─── Full Skills section ─── */
const Skills = ({ darkMode }) => {
  const theme = {
    textPrimary:   darkMode ? "text-white"    : "text-gray-900",
    textSecondary: darkMode ? "text-gray-300" : "text-gray-600",
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* decorative glowing blobs */}
      <div className="absolute top-0 left-1/3 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl -z-10 pointer-events-none animate-pulse" />
      <div
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl -z-10 pointer-events-none animate-pulse"
        style={{ animationDelay: "1.5s" }}
      />

      <div className="container mx-auto px-4 sm:px-8 lg:px-14">

        {/* ── Section header ── */}
        <motion.div
          variants={textVariant(0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="text-center mb-6"
        >
          <p className="uppercase tracking-widest text-sm font-semibold text-orange-500 mb-2">
            What I bring
          </p>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight ${theme.textPrimary}`}>
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">
              Skills
            </span>
          </h2>
          <div className="mt-4 h-1 w-20 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto rounded-full" />
        </motion.div>

        {/* ── Soft Skills paragraph ── */}
        <motion.p
          variants={fadeIn("", "tween", 0.15, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className={`mt-4 mb-14 text-[16px] sm:text-[17px] leading-[30px] max-w-2xl mx-auto text-center ${theme.textSecondary}`}
        >
          Highly autonomous and detail-oriented, I excel in dynamic environments,
          leveraging strong{" "}
          <span className="text-orange-400 font-semibold">collaboration</span> and{" "}
          <span className="text-amber-400 font-semibold">problem-solving</span>{" "}
          skills to consistently deliver high-quality results.
        </motion.p>

        {/* ── Hard Skills divider ── */}
        <motion.div
          variants={fadeIn("up", "spring", 0.2, 0.75)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="flex items-center gap-3 mb-10 justify-center"
        >
          <div className="h-px flex-1 max-w-[80px] bg-gradient-to-r from-transparent to-orange-500 rounded-full" />
          <span className={`text-sm font-semibold uppercase tracking-widest ${theme.textSecondary}`}>
            Hard Skills
          </span>
          <div className="h-px flex-1 max-w-[80px] bg-gradient-to-l from-transparent to-amber-500 rounded-full" />
        </motion.div>

        {/* ── Cards ── */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          className="flex flex-wrap justify-center gap-5"
        >
          {hardSkills.map((skill, index) => (
            <SkillCard
              key={skill.title}
              index={index}
              title={skill.title}
              icon={skill.icon}
              darkMode={darkMode}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

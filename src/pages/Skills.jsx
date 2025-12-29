import { motion } from "framer-motion";
import { Tooltip } from "react-tooltip";
import Title from "../components/Title";

// Icon URLs (kept your sources)
const html = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg";
const css = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg";
const javascript = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg";
const typescript = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg";
const reactJs = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg";
const nextjs = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg";

const tailwind = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg";
const bootstrap = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg";
const materialUi = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg";
const shadcn = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 256 256'%3E%3Cpath fill='none' d='M0 0h256v256H0z'/%3E%3Cpath d='M208 128l-80 80M192 40L40 192' fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/%3E%3C/svg%3E";
const figma = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg";

const nodeJs = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg";
const expressJs = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg";
const php = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg";
const laravel = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg";

const mongoDB = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg";
const mysql = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg";
const firebase = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg";

const vercel = "https://assets.vercel.com/image/upload/v1588805858/repositories/vercel/logo.png";
const netlify = "https://www.vectorlogo.zone/logos/netlify/netlify-icon.svg";
const github = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg";
const nginx = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg";

const c = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg";
const cpp = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg";
const python = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg";

const Skills = () => {
  const categories = [
    {
      title: "Frontend",
      color: "text-[#2EDEF5]",
      skills: [
        { name: "HTML", img: html },
        { name: "CSS", img: css },
        { name: "JavaScript", img: javascript },
        { name: "TypeScript", img: typescript },
        { name: "React", img: reactJs },
        { name: "Next.js", img: nextjs },
      ],
    },
    {
      title: "Programming Languages",
      color: "text-[#4776b9]",
      skills: [
        { name: "C", img: c },
        { name: "C++", img: cpp },
        { name: "Python", img: python },
      ],
    },
    {
      title: "Styling & Design",
      color: "text-[#88afdd]",
      skills: [
        { name: "Tailwind CSS", img: tailwind },
        { name: "Bootstrap", img: bootstrap },
        { name: "Material UI", img: materialUi },
        { name: "Shadcn/ui", img: shadcn },
        { name: "Figma", img: figma },
      ],
    },
    {
      title: "Backend",
      color: "text-[#4776b9]",
      skills: [
        { name: "Node.js", img: nodeJs },
        { name: "Express", img: expressJs },
        { name: "PHP", img: php },
        { name: "Laravel", img: laravel },
      ],
    },
    {
      title: "Databases",
      color: "text-[#2EDEF5]",
      skills: [
        { name: "MongoDB", img: mongoDB },
        { name: "MySQL", img: mysql },
        { name: "Firebase", img: firebase },
      ],
    },
    {
      title: "DevOps & Tools",
      color: "text-[#88afdd]",
      skills: [
        { name: "Vercel", img: vercel },
        { name: "Netlify", img: netlify },
        { name: "GitHub", img: github },
        { name: "Nginx", img: nginx },
      ],
    },
  ];

  return (
    <div className="container mx-auto px-5 md:px-10 lg:px-20 py-10 min-h-screen">
      <Title text="My Skills" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20 max-w-7xl mx-auto">
        {categories.map((category, idx) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="bg-slate-900/30 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-500"
          >
            {/* Category Title */}
            <div className="flex items-center justify-between mb-8">
              <h3 className={`text-2xl font-semibold ${category.color}`}>
                {category.title}
              </h3>
              <span className="text-white/40 text-sm">{category.skills.length}</span>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-3 gap-6">
              {category.skills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 + i * 0.05 }}
                  whileHover={{ scale: 1.15, y: -8 }}
                  className="group relative"
                  data-tooltip-id="skill-tooltip"
                  data-tooltip-content={skill.name}
                >
                  <div className="aspect-square bg-white/5 rounded-xl flex items-center justify-center p-4 border border-white/10 group-hover:border-white/30 transition-all duration-300">
                    <img
                      src={skill.img}
                      alt={skill.name}
                      className="w-full h-full object-contain grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Global Tooltip */}
      <Tooltip
        id="skill-tooltip"
        place="top"
        className="!bg-slate-800 !text-white !text-sm !px-3 !py-1.5 !rounded-lg !border !border-[#2EDEF5]/30 !backdrop-blur-xl"
        offset={10}
      />
    </div>
  );
};

export default Skills;
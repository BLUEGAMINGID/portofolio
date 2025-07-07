"use client";

import { motion } from 'framer-motion';
import { Download, Briefcase, GraduationCap, Code, Award, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const skillsData = [
  { name: 'Python', level: 45, category: 'Backend' },
  { name: 'Ruby', level: 25, category: 'Backend' },
  { name: 'Javascript', level: 65, category: 'Backend' },
  { name: 'TypeScript', level: 55, category: 'Frontend' },
  { name: 'Node.js', level: 65, category: 'Backend' },
  { name: 'SQL', level: 50, category: 'Database' },
  { name: 'Git', level: 90, category: 'Tools' },
];

const experienceData = [
  {
    role: 'Luascript Engineering',
    company: 'in Community',
    duration: '2020 29 Oktober - 1 Januari 2023',
    description: 'Actively involved in the LuaScript community, focusing on the development of encryption systems, obfuscation techniques, and game code creation and modification. Engaged in various discussions, experiments, and collaborative projects to develop secure, efficient, and innovative solutions in Lua programming.',
    achievements: ['Led and Managed Multiple Online Scripting Projects', 'Hosted Online Encryption Classes'],
  },
];

const educationData = [
  {
    degree: 'Junior High School',
    institution: 'SMPN 244 Jakarta',
    duration: '2020-2023',
    description: 'Focused on applying mathematics and informatics to enhance my computer science foundation, particularly through Lua scripting projects and ongoing academic development.',
    grade: 'Good',
  },
  {
    degree: 'Senior High School',
    institution: 'MAN 5 Jakarta',
    duration: '2023-now',
    description: 'Focused on leveraging the power of mathematics and informatics to strengthen and deepen my foundation in computer science, enabling more effective problem-solving and innovation.',
    grade: 'Excellent',
  },
];

const ResumeSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <section id="resume" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-muted/30"></div>
      <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-3 mb-6 glass rounded-full px-6 py-3">
            <Award className="h-6 w-6 text-primary" />
            <span className="text-lg font-medium">Professional Journey</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            <span className="gradient-text">Resume</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-balance mb-8">
            My professional experience, education, and technical expertise that drive innovation.
          </p>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            </Button>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Experience Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants} className="mb-12">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Briefcase className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-3xl font-bold">Work Experience</h3>
              </div>
            </motion.div>
            
            <div className="space-y-8">
              {experienceData.map((item, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="relative overflow-hidden card-hover group">
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-blue-500"></div>
                    <CardHeader>
                      <CardTitle>
                        <div className="space-y-2">
                          <h4 className="text-2xl font-bold group-hover:text-primary transition-colors duration-300">
                            {item.role}
                          </h4>
                          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                            <p className="text-primary font-semibold text-lg">{item.company}</p>
                            <p className="text-sm text-muted-foreground bg-muted/50 px-3 py-1 rounded-full">
                              {item.duration}
                            </p>
                          </div>
                        </div>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4 leading-relaxed">{item.description}</p>
                      <div className="space-y-2">
                        <h5 className="font-semibold text-sm uppercase tracking-wide text-primary">Key Achievements</h5>
                        <ul className="space-y-1">
                          {item.achievements.map((achievement, i) => (
                            <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education & Skills Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Education */}
            <motion.div variants={itemVariants} className="mb-12">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <GraduationCap className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-3xl font-bold">Education</h3>
              </div>
            </motion.div>
            
            <div className="space-y-8 mb-16">
              {educationData.map((item, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="relative overflow-hidden card-hover group">
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-purple-500"></div>
                    <CardHeader>
                      <CardTitle>
                        <div className="space-y-2">
                          <h4 className="text-2xl font-bold group-hover:text-primary transition-colors duration-300">
                            {item.degree}
                          </h4>
                          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                            <p className="text-primary font-semibold text-lg">{item.institution}</p>
                            <p className="text-sm text-muted-foreground bg-muted/50 px-3 py-1 rounded-full">
                              {item.duration}
                            </p>
                          </div>
                        </div>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-3 leading-relaxed">{item.description}</p>
                      <div className="inline-flex items-center gap-2 bg-primary/10 px-3 py-1 rounded-full">
                        <Award className="h-4 w-4 text-primary" />
                        <span className="text-sm font-semibold text-primary">{item.grade}</span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Skills */}
            <motion.div variants={itemVariants} className="mb-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Code className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-3xl font-bold">Technical Skills</h3>
              </div>
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-1 gap-6"
              variants={containerVariants}
            >
              {skillsData.map((skill, index) => (
                <motion.div 
                  key={index} 
                  className="space-y-3"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <span className="font-semibold text-lg">{skill.name}</span>
                      <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full font-medium">
                        {skill.category}
                      </span>
                    </div>
                    <span className="text-sm font-bold text-primary">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <motion.div 
                      className="skill-progress"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const todo = z.string().startsWith('TODO:');

const projectLink = z.object({
  label: z.string(),
  url: z.string(),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/projects' }),
  schema: ({ image }) =>
    z
      .object({
        title: z.string(),
        slug: z.string(),
        type: z.enum(['capstone', 'iot', 'third-year', 'early-work']),
        status: z.enum(['completed', 'in-progress']),
        year: z.number().int(),
        course: z.string().optional(),
        description: z.string(),
        objectives: z.array(z.string()).min(1),
        technologies: z.array(z.string()).min(1),
        team: z.array(z.string()).min(1),
        myRole: z.string(),
        output: z.string(),
        links: z.array(projectLink),
        evidence: z
          .array(
            z.union([
              z.object({
                image: image(),
                caption: z.string(),
              }),
              todo,
            ]),
          )
          .min(1),
        featured: z.boolean(),
      })
      .superRefine((project, context) => {
        if (project.type === 'third-year' && !project.course) {
          context.addIssue({
            code: 'custom',
            path: ['course'],
            message: 'Third-year projects must include their course.',
          });
        }
      }),
});

const certifications = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/certifications' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      issuer: z.string(),
      dateEarned: z.iso.date(),
      verifyUrl: z.url(),
      image: image(),
      badgeImage: image().optional(),
    }),
});

const courses = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/courses' }),
  schema: ({ image }) =>
    z.discriminatedUnion('status', [
      z.object({
        title: z.string(),
        provider: z.string(),
        dateCompleted: z.iso.date(),
        status: z.literal('completed'),
        certificate: z.object({
          image: image(),
          pdf: z.string(),
        }),
        verifyUrl: z.url().optional(),
        badgeImage: image().optional(),
        modules: z.array(z.string()).optional(),
      }),
      z.object({
        title: z.string(),
        provider: z.string(),
        dateCompleted: z.literal('in progress'),
        status: z.literal('in-progress'),
        certificate: z.literal('in progress'),
        verifyUrl: z.url().optional(),
        badgeImage: image().optional(),
        modules: z.array(z.string()).optional(),
      }),
    ]),
});

const about = defineCollection({
  loader: glob({ pattern: 'about.json', base: './src/content/about' }),
  schema: z.object({
    name: z.string(),
    program: z.string(),
    tagline: z.string(),
    story: z.array(z.string()).min(1),
    education: z.array(z.string()).min(1),
    goals: z.array(z.string()).min(1),
    interests: z.array(z.string()).min(1),
    skills: z.object({
      technical: z.array(z.string()).min(1),
      soft: z.array(z.string()).min(1),
    }),
    links: z.object({
      email: z.email(),
      github: z.url(),
      linkedin: z.url(),
    }),
  }),
});

export const collections = { projects, certifications, courses, about };

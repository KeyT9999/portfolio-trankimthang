import { z } from "zod";

export const ProjectDossierSchema = z.object({
  slug: z.string().min(1),
  serial: z.string().min(1), // e.g. DA-001
  title: z.string().min(1),
  edition: z.string().default("SỐ ĐẶC BIỆT"),
  category: z.string(),
  period: z.object({
    start: z.string(),
    end: z.string(),
    display: z.string(),
  }),
  role: z.string(),
  summary: z.string(),
  lead: z.string(),
  featured: z.boolean().default(false),
  technologies: z.array(z.string()),
  keyFeatures: z.array(
    z.object({
      title: z.string(),
      description: z.string(),
    })
  ),
  technicalDetails: z.array(
    z.object({
      label: z.string(),
      points: z.array(z.string()),
    })
  ),
  testing: z
    .object({
      tools: z.array(z.string()),
      coverage: z.string().optional(),
      description: z.string(),
    })
    .optional(),
  integrations: z
    .array(
      z.object({
        name: z.string(),
        purpose: z.string(),
      })
    )
    .optional(),
  recognition: z
    .object({
      title: z.string(),
      organizer: z.string(),
      level: z.string(),
    })
    .optional(),
  coverImage: z.string().optional(),
});

export type ProjectDossier = z.infer<typeof ProjectDossierSchema>;

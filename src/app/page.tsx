"use client";
// src/app/page.tsx
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

export default function HomePage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-24">
      <section className="space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4"
        >
          <Avatar className="size-14 rounded-full overflow-hidden ring-2 ring-border">
            <AvatarImage src="/avatar.jpg" alt="Leo avatar" />
            <AvatarFallback className="bg-muted text-foreground">LE</AvatarFallback>
          </Avatar>
          <div className="text-sm text-muted-foreground">Hi, I’m Leo</div>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-5xl md:text-7xl font-bold tracking-tight"
        >
          Building reliable web experiences.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl"
        >
          I’m Leo, a software engineer focused on modern web stacks—Next.js, TypeScript, and great UX.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          className="flex gap-3"
        >
          <Button size="lg" asChild>
            <Link href="/projects" className="inline-flex items-center">
              View Projects
              <ArrowRight className="ml-2 size-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/contact">Contact Me</Link>
          </Button>
        </motion.div>
      </section>
      <section className="mt-16">
        <div className="flex items-center gap-4 text-muted-foreground">
          <Link href="https://github.com/" className="hover:text-foreground" target="_blank" rel="noopener noreferrer">
            <Github className="size-5" />
          </Link>
          <Link href="https://www.linkedin.com/" className="hover:text-foreground" target="_blank" rel="noopener noreferrer">
            <Linkedin className="size-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
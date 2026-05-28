"use client";

import {
  Education,
  Header,
  Projects,
  SelfComment,
  Skills,
  WorkExperience,
} from "@/components/resume";
import { ResumeStyleWrapper } from "@/components/resume-style-wrapper";
import { ResumeToolbar } from "@/components/resume-toolbar";
import { useLocale } from "@/contexts/locale-context";

export default function ResumePage() {
  const { locale } = useLocale();

  return (
    <ResumeStyleWrapper toolbar={<ResumeToolbar />}>
      <Header locale={locale} />

      <div className="mt-8 print:mt-3 flex flex-col gap-6 print:gap-3">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-4">
          <Education locale={locale} />
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-primary/15 to-transparent print:hidden" />

        <Skills locale={locale} />

        <div className="h-px bg-gradient-to-r from-transparent via-primary/15 to-transparent print:hidden" />

        <WorkExperience locale={locale} />

        <div className="h-px bg-gradient-to-r from-transparent via-primary/15 to-transparent print:hidden" />

        <Projects locale={locale} />

        <div className="h-px bg-gradient-to-r from-transparent via-primary/15 to-transparent print:hidden" />

        <SelfComment locale={locale} />
      </div>
    </ResumeStyleWrapper>
  );
}

import {
  Education,
  Header,
  Projects,
  SelfComment,
  Skills,
  WorkExperience,
} from "@/components/resume";
import { ResumeToolbar } from "@/components/resume-toolbar";
import { cookies } from "next/headers";

export default async function ResumePage() {
  const cookieStore = await cookies();
  const locale = (cookieStore.get("locale")?.value === "en" ? "en" : "zh") as "zh" | "en";

  return (
    <div className="print:p-0 print:m-0">
      {/* 顶部操作栏 - 打印时隐藏 */}
      <ResumeToolbar />

      {/* 简历内容 */}
      <div className="resume-content container mx-auto px-6 py-8 w-full md:max-w-4xl lg:max-w-4xl print:max-w-none print:px-8 print:py-0">
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
      </div>
    </div>
  );
}

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
      <div className="resume-content container mx-auto px-4 py-4 w-full md:max-w-4xl lg:max-w-4xl print:max-w-none print:px-8 print:py-0">
        <Header locale={locale} />
        <div className="my-4 print:my-2 flex flex-col lg:flex-row lg:justify-between gap-4">
          <Education locale={locale} />
        </div>
        <div className="my-4 print:my-2">
          <Skills locale={locale} />
        </div>
        <div className="my-4 print:my-2">
          <WorkExperience locale={locale} />
        </div>
        <div className="my-4 print:my-2">
          <Projects locale={locale} />
        </div>
        <div className="my-4 print:my-2">
          <SelfComment locale={locale} />
        </div>
      </div>
    </div>
  );
}

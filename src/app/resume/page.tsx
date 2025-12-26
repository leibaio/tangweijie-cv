import {
  Education,
  Header,
  PrintButton,
  Projects,
  SelfComment,
  Skills,
  WorkExperience,
} from "@/components/resume";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function ResumePage() {
  return (
    <div className="print:p-0 print:m-0">
      {/* 顶部操作栏 - 打印时隐藏 */}
      <div className="container mx-auto px-4 py-4 flex justify-between items-center print:hidden">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="w-4 h-4" />
          返回首页
        </Link>
        <PrintButton />
      </div>

      {/* 简历内容 */}
      <div className="resume-content container mx-auto px-4 py-4 w-full md:max-w-4xl lg:max-w-4xl print:max-w-none print:px-8 print:py-0">
        <Header />
        <div className="my-4 print:my-2 flex flex-col lg:flex-row lg:justify-between gap-4">
          <Education />
        </div>
        <div className="my-4 print:my-2">
          <Skills />
        </div>
        <div className="my-4 print:my-2">
          <WorkExperience />
        </div>
        <div className="my-4 print:my-2">
          <Projects />
        </div>
        <div className="my-4 print:my-2">
          <SelfComment />
        </div>
      </div>
    </div>
  );
}

import {
  Education,
  Header,
  Projects,
  SelfComment,
  Skills,
  WorkExperience,
} from "@/components/resume";

export default function ResumePage() {
  return (
    <div className="container mx-auto px-4 py-8 w-full md:max-w-4xl lg:max-w-4xl">
      <Header />
      <div className="my-4 flex flex-col lg:flex-row lg:justify-between gap-4">
        <Education />
      </div>
      <div className="my-4">
        <Skills />
      </div>
      <div className="my-4">
        <WorkExperience />
      </div>
      <div className="my-4">
        <Projects />
      </div>
      <div className="my-4">
        <SelfComment />
      </div>
    </div>
  );
}

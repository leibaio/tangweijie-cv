import Header from "@/components/my-page/header";
import ContactInfo from "@/components/my-page/contact-info";
import Education from "@/components/my-page/education";
import Skills from "@/components/my-page/skills";
import WorkExperience from "@/components/my-page/work-experience";

export default function MyPage() {
  return (
    <div className="container mx-auto px-4 py-8 w-full md:max-w-4xl lg:max-w-6xl">
      <Header />
      <div className="my-4 flex flex-col lg:flex-row lg:justify-between gap-4">
        <ContactInfo />
        <Education />
      </div>
      <div className="my-4">
        <Skills />
      </div>
      <div className="my-4">
        <WorkExperience />
      </div>
    </div>
  );
}

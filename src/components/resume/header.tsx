import { i18n, Locale, personalInfo } from "@/config";

interface HeaderProps {
  locale?: Locale;
}

export default function Header({ locale = "zh" }: HeaderProps) {
  const t = i18n[locale].resume;
  const name = locale === "en" && personalInfo.nameEn ? personalInfo.nameEn : personalInfo.name;
  const title = locale === "en" && personalInfo.titleEn ? personalInfo.titleEn : personalInfo.title;
  const location = locale === "en" && personalInfo.locationEn ? personalInfo.locationEn : personalInfo.location;

  return (
    <header className="flex flex-col md:flex-row md:justify-between w-full items-center md:items-start border-b-2 border-primary/30 pb-6 md:pb-4 print:pb-2 print:border-b">
      <div className="flex flex-col items-center md:items-start space-y-4 md:space-y-2 print:space-y-1">
        <div className="flex flex-col md:flex-row items-center md:items-end space-y-2 md:space-y-0 md:space-x-4 print:space-x-2">
          <h1 className="text-3xl font-bold print:text-2xl text-primary">{name}</h1>
          <h2 className="text-xl print:text-base">{t.jobTarget}：{title}</h2>
        </div>
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-2 md:space-y-0 md:space-x-6 print:space-x-4 print:text-sm text-muted-foreground">
          <div>{t.phone}：{personalInfo.phone}</div>
          <div>
            {t.email}：
            <a href={`mailto:${personalInfo.email}`} className="hover:underline hover:text-primary">
              {personalInfo.email}
            </a>
          </div>
          <div>{t.location}：{location}</div>
          <div>{t.age}：{personalInfo.age}</div>
          <div>{t.english}：{personalInfo.english}</div>
        </div>
      </div>
    </header>
  );
}

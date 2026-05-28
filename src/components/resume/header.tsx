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
    <header className="relative pb-6 print:pb-3">
      {/* 顶部装饰线 */}
      <div className="h-1 w-20 bg-gradient-to-r from-primary to-primary/30 rounded-full mb-5 print:hidden" />

      <div className="flex flex-col md:flex-row md:justify-between md:items-end w-full gap-4">
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight print:text-3xl text-foreground">
            {name}
          </h1>
          <p className="text-lg text-muted-foreground print:text-base">
            {t.jobTarget}：{title}
          </p>
        </div>
      </div>

      {/* 联系信息 - 紧凑排列 */}
      <div className="mt-4 flex flex-wrap items-center gap-x-1 gap-y-1 text-sm text-muted-foreground print:text-xs print:mt-2">
        <span>{t.phone}：{personalInfo.phone}</span>
        <span className="text-primary/30 mx-1.5">|</span>
        <span>
          {t.email}：
          <a href={`mailto:${personalInfo.email}`} className="hover:text-primary transition-colors">
            {personalInfo.email}
          </a>
        </span>
        <span className="text-primary/30 mx-1.5">|</span>
        <span>{t.location}：{location}</span>
        <span className="text-primary/30 mx-1.5">|</span>
        <span>{t.age}：{personalInfo.age}</span>
        <span className="text-primary/30 mx-1.5">|</span>
        <span>{t.english}：{personalInfo.english}</span>
      </div>

      {/* 底部渐变分隔线 */}
      <div className="mt-5 h-px bg-gradient-to-r from-primary/30 via-primary/15 to-transparent print:mt-2 print:bg-primary/20" />
    </header>
  );
}

import { Tag } from "@/components/resume";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function TagShowcase() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Link
        href="/showcase"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8"
      >
        <ArrowLeft className="w-4 h-4" />
        返回展示列表
      </Link>

      <h1 className="text-2xl font-bold mb-8">标签组件</h1>

      <div className="space-y-6">
        <div>
          <h3 className="text-sm font-medium mb-3">蓝色标签</h3>
          <div className="flex flex-wrap gap-2">
            <Tag color="blue">React</Tag>
            <Tag color="blue">Vue</Tag>
            <Tag color="blue">TypeScript</Tag>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium mb-3">绿色标签</h3>
          <div className="flex flex-wrap gap-2">
            <Tag color="green">Node.js</Tag>
            <Tag color="green">Express</Tag>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium mb-3">红色标签</h3>
          <div className="flex flex-wrap gap-2">
            <Tag color="red">重要</Tag>
            <Tag color="red">紧急</Tag>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium mb-3">其他颜色</h3>
          <div className="flex flex-wrap gap-2">
            <Tag color="yellow">警告</Tag>
            <Tag color="purple">特殊</Tag>
            <Tag color="gray">默认</Tag>
          </div>
        </div>
      </div>
    </div>
  );
}

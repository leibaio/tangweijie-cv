import { Contact } from "lucide-react";

export default function ContactInfo() {
  return (
    <section className="flex flex-col gap-2">
      <div className="flex gap-4">
        <Contact className="hidden sm:block" />
        <h2 className="text-xl font-bold">Contact</h2>
      </div>
      <div className="">
        <ul>
          <li>Tel: 12312311231</li>
          <li>Email: xxxxxx@xxx.com</li>
          <li>Location: Shanghai, China Mainland</li>
        </ul>
      </div>
    </section>
  );
}

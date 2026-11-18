export default function SectionTitle({ title, subtitle, as: Tag = "h2" }) {
  return (
    <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
      <Tag className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
        {title}
      </Tag>
      {subtitle && (
        <p className="text-base sm:text-lg text-slate-600">{subtitle}</p>
      )}
    </div>
  );
}

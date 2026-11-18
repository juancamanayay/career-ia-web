export default function FeatureCard({ icon: Icon, title, description }) {
  return (
    <div className="group bg-white p-7 rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-shadow">
      <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-5 group-hover:bg-blue-600 group-hover:text-white transition-colors">
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
      <p className="text-sm text-slate-600">{description}</p>
    </div>
  );
}

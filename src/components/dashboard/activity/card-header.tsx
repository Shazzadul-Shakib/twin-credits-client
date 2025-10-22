interface CardHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export const CardHeader: React.FC<CardHeaderProps> = ({
  title,
  subtitle,
  className = "",
}) => (
  <div
    className={`rounded-t-xl border-b border-gray-200 bg-gradient-to-r from-indigo-50 to-purple-50 px-6 py-5 ${className}`}
  >
    <h3 className="text-xl font-bold text-gray-900">{title}</h3>
    {subtitle && <p className="mt-1 text-sm text-gray-600">{subtitle}</p>}
  </div>
);

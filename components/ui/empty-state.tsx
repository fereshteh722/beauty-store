import Link from "next/link";

interface EmptyStateProps {
  title: string;
  description: string;
  actionLabel?: string;
  actionHref?: string;
}

export function EmptyState({
  title,
  description,
  actionLabel,
  actionHref,
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-32 px-4 text-center">
      {/* Icon */}
      <div className="relative mb-8">
        <div className="w-24 h-24 bg-stone-100 rounded-full flex items-center justify-center">
          <svg
            className="w-10 h-10 text-stone-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
        </div>

        <div className="absolute -top-2 -right-2 w-8 h-8 bg-pink-50 rounded-full flex items-center justify-center border-2 border-white">
          <span className="text-pink-600 font-bold text-lg">!</span>
        </div>
      </div>

      {/* Title */}
      <h3 className="text-2xl font-bold text-stone-800 mb-3">
        {title}
      </h3>

      {/* Description */}
      <p className="text-stone-500 max-w-sm mx-auto mb-8 leading-relaxed">
        {description}
      </p>

      {/* Optional Action */}
      {actionLabel && actionHref && (
        <Link
          href={actionHref}
          className="px-8 py-3 bg-stone-900 text-white text-sm font-bold rounded-full hover:bg-pink-600 transition-all duration-300 shadow-xl shadow-stone-200"
        >
          {actionLabel}
        </Link>
      )}
    </div>
  );
}

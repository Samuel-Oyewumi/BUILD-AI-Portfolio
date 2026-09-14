export default function Logo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M45 25 L15 75 L35 75 L55 40 Z" fill="currentColor" />
      <path d="M55 25 L85 75 L65 75 L45 40 Z" fill="currentColor" opacity="0.7" />
    </svg>
  );
}

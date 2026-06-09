import { Container } from "@/components/layout/container"; // Fix typo here

const SkeletonBox = ({ className }: { className?: string }) => (
  <div className={`animate-pulse rounded-2xl bg-stone-200/80 ${className}`} />
);

export default function Loading() {
  return (
    <div className="min-h-screen bg-stone-50/30 pb-20">
      <Container className="pt-8">
        <SkeletonBox className="mb-8 h-4 w-48" />
        {/* ... بقیه بخش‌های اسکلتون ... */}
      </Container>
    </div>
  );
}

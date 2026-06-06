// components/layout/ScreenSection.tsx

export default function ScreenSection({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="min-h-screen flex items-center">
      <div className="cinematic-shell w-full">
        {children}
      </div>
    </section>
  );
}
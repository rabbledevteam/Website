const companies = [
  "Microsoft", "Google", "Amazon", "Meta", "Apple",
  "Netflix", "Tesla", "Spotify", "Adobe", "Salesforce",
  "Oracle", "IBM", "Intel", "NVIDIA", "PayPal"
];

export const ScrollingLogos = () => {
  return (
    <div className="w-full overflow-hidden bg-primary/10 py-8">
      <div className="flex animate-scroll whitespace-nowrap">
        {[...companies, ...companies].map((company, idx) => (
          <div
            key={idx}
            className="mx-8 inline-block text-2xl font-bold text-deep-green"
          >
            {company}
          </div>
        ))}
      </div>
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </div>
  );
};

import { demos } from "../data/demos";

export const HomePage = ({ navigate }) => (
  <div className="space-y-8">
    <div className="text-center">
      <h2
        className="text-3xl font-bold mb-4"
        style={{ color: "var(--color-text-primary)" }}
      >
        Framer Motion Playground-এ স্বাগতম
      </h2>
      <p
        className="max-w-2xl mx-auto mb-8"
        style={{ color: "var(--color-text-secondary)" }}
      >
        এটি Framer Motion-এর বিভিন্ন ফিচার শেখার এবং পরীক্ষা করার একটি
        ইন্টারেক্টিভ প্ল্যাটফর্ম। নিচের ডেমোগুলো থেকে বেছে নিয়ে শুরু
        করুন।
      </p>
    </div>

    {/* Demo Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {demos.map((demo) => (
        <div
          key={demo.slug}
          className="p-6 rounded-lg border cursor-pointer transition-all hover:shadow-lg hover:scale-105"
          style={{
            backgroundColor: "var(--color-bg-secondary)",
            borderColor: "var(--color-border)",
          }}
          onClick={() => navigate(demo.slug)}
        >
          <h3
            className="text-lg font-semibold mb-2"
            style={{ color: "var(--color-text-primary)" }}
          >
            {demo.title}
          </h3>
          <p
            className="text-sm mb-4"
            style={{ color: "var(--color-text-secondary)" }}
          >
            {demo.description}
          </p>
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigate(demo.slug);
            }}
            className="text-white text-sm font-medium px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors"
            style={{ backgroundColor: "var(--color-accent)" }}
          >
            দেখুন
          </button>
        </div>
      ))}
    </div>

    {/* Quick Start Button */}
    <div className="text-center">
      <button
        onClick={() => navigate("basic-box")}
        className="text-white font-semibold px-8 py-4 rounded-lg hover:bg-indigo-700 transition-colors shadow-lg text-lg"
        style={{ backgroundColor: "var(--color-accent)" }}
      >
        প্রথম ডেমো দিয়ে শুরু করুন
      </button>
    </div>
  </div>
);

export const HomePage = ({ navigate }) => (
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
      ইন্টারেক্টিভ প্ল্যাটফর্ম। বাম পাশের সাইডবার থেকে একটি ডেমো বেছে নিয়ে শুরু
      করুন।
    </p>
    <button
      onClick={() => navigate("basic-box")}
      className="text-white font-semibold px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors shadow-lg"
      style={{ backgroundColor: "var(--color-accent)" }}
    >
      প্রথম ডেমো দেখুন
    </button>
  </div>
);

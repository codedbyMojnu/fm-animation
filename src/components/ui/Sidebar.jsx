import { demos } from "../../data/demos";

export const Sidebar = ({ currentSlug, navigate }) => (
  <aside
    className="fixed top-16 w-64 h-[calc(100vh-4rem)] border-r p-4 overflow-y-auto"
    style={{ borderColor: "var(--color-border)" }}
  >
    <nav>
      <ul>
        {demos.map((demo) => (
          <li key={demo.slug}>
            <a
              href={`#${demo.slug}`}
              onClick={(e) => {
                e.preventDefault();
                navigate(demo.slug);
              }}
              className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                currentSlug === demo.slug
                  ? "bg-indigo-50 text-indigo-600"
                  : "hover:bg-slate-100"
              }`}
              style={{
                color:
                  currentSlug === demo.slug
                    ? "#6366f1"
                    : "var(--color-text-primary)",
                backgroundColor:
                  currentSlug === demo.slug
                    ? "rgba(99, 102, 241, 0.1)"
                    : "transparent",
              }}
            >
              {demo.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  </aside>
);

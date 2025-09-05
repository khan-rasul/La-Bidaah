import { BookOpen, ChevronRight } from "lucide-react";

const Hadith = () => (
  <div
    className="rounded-2xl p-6 mb-20 border"
    style={{
      backgroundColor: "#2E2E2E",
      borderColor: "#A17C28",
    }}
  >
    <div className="flex items-center justify-between mb-4">
      <h3 className="font-medium" style={{ color: "#D4B65A" }}>
        Hadith of the Day
      </h3>
      <ChevronRight className="w-5 h-5" style={{ color: "#A17C28" }} />
    </div>

    <div className="space-y-4">
      <div className="italic leading-relaxed" style={{ color: "#F5F3F0" }}>
        "The best of people are those who benefit others."
      </div>
      <div className="text-sm" style={{ color: "#B0B0B0" }}>
        <span className="font-medium" style={{ color: "#D4B65A" }}>
          Narrator:
        </span>{" "}
        Jabir ibn Abdullah (RA)
      </div>
      <div className="flex justify-center">
        <button
          className="flex items-center space-x-2 px-4 py-2 rounded-full border hover:opacity-80 transition-all"
          style={{
            backgroundColor: "#585858",
            borderColor: "#A17C28",
            color: "#D4B65A",
          }}
        >
          <BookOpen className="w-4 h-4" />
          <span className="text-sm">Read More</span>
        </button>
      </div>
    </div>
  </div>
);

export default Hadith;

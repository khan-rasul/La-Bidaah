import {
  Book,
  BookOpen,
  Calendar,
  Clock,
  Grid3X3,
  Home,
  MessageCircle,
  User,
} from "lucide-react";

const Footer = () => (
  <div
    className="fixed bottom-0 left-0 right-0 backdrop-blur-sm border-t"
    style={{
      backgroundColor: "rgba(46, 46, 46, 0.95)",
      borderColor: "rgba(161, 124, 40, 0.3)",
    }}
  >
    <div className="flex justify-around items-center py-3">
      <div className="flex flex-col items-center space-y-1">
        <div
          className="w-8 h-8 rounded-lg flex items-center justify-center border"
          style={{
            backgroundColor: "#A17C28",
            borderColor: "#D4B65A",
          }}
        >
          <BookOpen className="w-4 h-4" style={{ color: "#F5F3F0" }} />
        </div>
        <span className="text-xs" style={{ color: "#D4B65A" }}>
          Qur'an
        </span>
      </div>

      <div className="flex flex-col items-center space-y-1">
        <div
          className="w-8 h-8 rounded-lg flex items-center justify-center border"
          style={{
            backgroundColor: "#585858",
            borderColor: "#B0B0B0",
          }}
        >
          <Clock className="w-4 h-4" style={{ color: "#B0B0B0" }} />
        </div>
        <span className="text-xs" style={{ color: "#B0B0B0" }}>
          Qibla
        </span>
      </div>

      <div className="flex flex-col items-center space-y-1">
        <div
          className="w-8 h-8 rounded-lg flex items-center justify-center border"
          style={{
            backgroundColor: "#585858",
            borderColor: "#B0B0B0",
          }}
        >
          <MessageCircle className="w-4 h-4" style={{ color: "#B0B0B0" }} />
        </div>
        <span className="text-xs" style={{ color: "#B0B0B0" }}>
          Recordings
        </span>
      </div>
    </div>

    <div
      className="flex justify-around items-center py-2 border-t"
      style={{ borderColor: "rgba(161, 124, 40, 0.2)" }}
    >
      <div className="flex flex-col items-center space-y-1">
        <Home className="w-5 h-5" style={{ color: "#D4B65A" }} />
        <span className="text-xs" style={{ color: "#D4B65A" }}>
          Home
        </span>
      </div>

      <div className="flex flex-col items-center space-y-1">
        <User className="w-5 h-5" style={{ color: "#B0B0B0" }} />
        <span className="text-xs" style={{ color: "#B0B0B0" }}>
          Explore
        </span>
      </div>

      <div className="flex flex-col items-center space-y-1">
        <Calendar className="w-5 h-5" style={{ color: "#B0B0B0" }} />
        <span className="text-xs" style={{ color: "#B0B0B0" }}>
          Calendar
        </span>
      </div>

      <div className="flex flex-col items-center space-y-1">
        <Book className="w-5 h-5" style={{ color: "#B0B0B0" }} />
        <span className="text-xs" style={{ color: "#B0B0B0" }}>
          Bookmarks
        </span>
      </div>

      <div className="flex flex-col items-center space-y-1">
        <Grid3X3 className="w-5 h-5" style={{ color: "#B0B0B0" }} />
        <span className="text-xs" style={{ color: "#B0B0B0" }}>
          Menu
        </span>
      </div>
    </div>
  </div>
);
export default Footer;

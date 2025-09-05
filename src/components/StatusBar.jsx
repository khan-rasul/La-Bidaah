const StatusBar = () => (
  <>
    <div className="flex justify-between items-center p-4 pt-12">
      <div className="text-sm" style={{ color: "#D4B65A" }}>
        9:30
      </div>
      <div className="flex items-center space-x-1">
        <div
          className="w-4 h-2 rounded-sm"
          style={{ backgroundColor: "#D4B65A" }}
        ></div>
        <div
          className="w-1 h-1 rounded-full"
          style={{ backgroundColor: "#D4B65A" }}
        ></div>
        <div className="flex space-x-1">
          <div
            className="w-1 h-3 rounded-full"
            style={{ backgroundColor: "#D4B65A" }}
          ></div>
          <div
            className="w-1 h-3 rounded-full"
            style={{ backgroundColor: "#D4B65A" }}
          ></div>
          <div
            className="w-1 h-3 rounded-full"
            style={{ backgroundColor: "#585858" }}
          ></div>
          <div
            className="w-1 h-3 rounded-full"
            style={{ backgroundColor: "#585858" }}
          ></div>
        </div>
      </div>
    </div>
  </>
);

export default StatusBar;

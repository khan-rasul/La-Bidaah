export default function ColorCards() {
  const cards = [
    { name: "Card 1", color: "#625443" },
    { name: "Card 2", color: "#263936" },
    { name: "Olive", color: "#4A5744" },
    { name: "Taupe", color: "#8C7B6B" },
    { name: "Plum", color: "#5E4B56" },
    { name: "Sand", color: "#C4B6A6" },
    { name: "Gold", color: "#D4B65A" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-2xl font-semibold mb-6 text-gray-800">
        Card Color Samples
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="rounded-xl p-6 text-white shadow-md flex items-center justify-center text-center font-medium text-lg"
            style={{ backgroundColor: card.color }}
          >
            {card.name}
            <br />
            <span className="text-sm opacity-70">{card.color}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

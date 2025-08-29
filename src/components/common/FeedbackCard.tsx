export default function FeedbackCard() {
  return (
    <div className="p-6 bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300">
      <div className="flex items-center mb-4">
        <img
          className="w-14 h-14 rounded-full border-2 border-gray-200"
          src="https://i.pravatar.cc/100?img=11"
          alt="Client"
        />
        <div className="ml-4">
          <h3 className="text-lg font-semibold text-gray-300">Alex Johnson</h3>
          <p className="text-sm text-gray-500">CTO, NextGen Solutions</p>
        </div>
      </div>

      <p className="text-gray-400 mb-5">
        {
          "Rakibul’s work was exceptional. The design was modern, the code was clean, and everything was delivered ahead of schedule!"
        }
      </p>

      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            className={`w-5 h-5 ${
              star <= 5 ? "text-yellow-400" : "text-gray-300"
            }`}
            fill="currentColor"
            viewBox="0 0 20 20">
            <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.562-.955L10 0l2.95 5.955 6.562.955-4.756 4.635 1.122 6.545z" />
          </svg>
        ))}
      </div>
    </div>
  );
}

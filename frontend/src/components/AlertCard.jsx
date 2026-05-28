export default function AlertCard({
  message
}) {

  return (
    <div className="bg-red-500/20 border border-red-500 p-4 rounded-xl">

      <p className="text-red-300">
        {message}
      </p>

    </div>
  );
}
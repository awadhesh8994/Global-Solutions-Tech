export default function ServiceCard({ img, title, link }) {
  return (
    <a
      href={link}
      className="group relative block overflow-hidden rounded-lg shadow-md cursor-pointer"
    >
      {/* Main Image */}
      <img
        src={img}
        alt={title}
        className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Overlay sliding from bottom */}
      <div
        className="
        absolute bottom-0 left-0 w-full 
        bg-black/60 text-white px-4 py-3
        translate-y-full 
        group-hover:translate-y-0 
        transition-all duration-500
        "
      >
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm opacity-80">More Details</p>
      </div>
    </a>
  );
}

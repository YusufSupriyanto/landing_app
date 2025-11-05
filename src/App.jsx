export default function App() {
  const base = import.meta.env.BASE_URL; // base otomatis: '/landing_app/' di GitHub Pages

  const browsers = [
    { name: "GOOGLE CHROME", version: "Version 40+", color: "bg-[#EBBA4A]/25", image: `${base}Assets/chrome.svg` },
    { name: "MOZILLA FIREFOX", version: "Version 40+", color: "bg-[#E8A03E]/25", image: `${base}Assets/firefox-browser.svg` },
    { name: "MICROSOFT EDGE", version: "Version 40+", color: "bg-[#5AC6FA]/25", image: `${base}Assets/edge.svg` },
    { name: "APPLE SAFARI", version: "Version 40+", color: "bg-[#459CE3]/25", image: `${base}Assets/safari.svg` },
    { name: "OPERA", version: "Version 40+", color: "bg-[#E3634D]/25", image: `${base}Assets/opera.svg` },
  ];

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background */}
      <img
        src={`${base}Assets/background.jpg`}
        alt=""
        className="absolute inset-0 w-full h-full object-cover -z-10"
        loading="eager"
        fetchpriority="high"
      />

      {/* Banner atas */}
      <div className="md:absolute md:mt-32 w-full bg-gray-600/90 text-white py-6 sm:py-10 px-4 sm:px-6 flex flex-col items-center z-20 shadow">
        <div className="flex flex-col max-w-2xl items-start text-left">
          {/* Ikon + Judul */}
          <div className="flex items-center mb-2 sm:mb-3">
            <img
              src={`${base}Assets/exclamation-triangle.svg`}
              alt="Warning"
              className="w-6 h-6 sm:w-8 sm:h-8 object-contain filter brightness-0 invert"
              loading="eager"
            />
            <div className="text-base ml-3 text-xl font-semibold mb-0">
              Your browser Internet Explorer 11 is deprecated
            </div>
          </div>

          {/* Paragraf */}
          <p className="text-xs sm:text-sm text-gray-200 leading-snug sm:leading-relaxed mb-3 sm:mb-4">
            Modern browsers protect your device from viruses and support new technologies.{" "}
            <br className="hidden sm:block" />
            That’s why we decided to stop supporting your current browser or your browser version. To access our website,
            please download one of the browsers below.
          </p>

          {/* Tombol */}
          <button className="hidden sm:inline-block border border-white text-white px-4 py-2 rounded font-medium text-xs sm:text-sm hover:bg-white hover:text-gray-800 transition">
            How do I update my browser?
          </button>
        </div>
      </div>

      {/* 5 kolom browser */}
      <div className="md:absolute flex flex-col md:flex-row w-full min-h-screen md:h-full text-center z-10">
        {browsers.map((b, i) => (
          <div
            key={i}
            className={`
              ${b.color}
              flex flex-col justify-center md:justify-end py-6 sm:py-10 px-2 sm:px-4
              flex-1
              ${i === 0 || i === 4 ? "md:flex-[1.5]" : "md:flex-1"}
              ${i === 0 ? "md:items-end" : ""}
              ${i === 4 ? "md:items-start" : ""}
            `}
          >
            <div className="flex md:flex-col items-center sm:justify-between md:justify-end gap-2 sm:gap-4 h-full">
              {/* Logo + Nama */}
              <div className="flex flex-row sm:flex-col items-center sm:items-center gap-1 sm:gap-3 ml-3 sm:ml-0 md:ml-0">
                <img
                  src={b.image}
                  alt={b.name}
                  className="w-14 h-14 sm:w-28 sm:h-28 object-contain filter brightness-0 invert"
                  loading="lazy"
                />
                <div className="flex flex-col justify-center text-left sm:text-center sm:items-center leading-tight">
                  <h2 className="text-white font-semibold text-[16px] sm:text-lg md:text-base">{b.name}</h2>
                  <p className="text-white text-[12px] sm:text-sm mb-0 sm:mb-2">{b.version}</p>
                </div>
              </div>

              {/* Tombol teks desktop */}
              <button className="hidden md:block bg-transparent text-white border border-white px-3 py-1.5 rounded font-medium text-xs md:text-sm hover:bg-white hover:text-gray-800 transition">
                Download
              </button>

              {/* Tombol gambar mobile */}
              <div className="block md:hidden flex justify-end items-center mr-3 sm:mr-4">
                <img
                  src={`${base}Assets/download.svg`}
                  alt="Download"
                  className="w-8 h-8 sm:w-14 sm:h-14 object-contain filter brightness-0 invert"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

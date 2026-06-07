import { ScrollReveal } from "./ScrollReveal";

export const EndResult = () => {
  const videos = [
    {
      src: "https://framerusercontent.com/assets/KlBhhvYD567zQdPcPKmqND4U.mp4",
      img: "https://framerusercontent.com/images/JLm2rSMcgu0xiQErH96iJCHiCIg.png",
      title: "Duolingo",
      mt: "",
    },
    {
      src: "https://framerusercontent.com/assets/ySvG09nTOuS07tHBMRNZejszzs.mp4",
      img: "https://framerusercontent.com/images/oR86guuzKeGgLoQPShxp3PhAOd8.png",
      title: "Files",
      mt: "lg:mt-8",
    },
    {
      src: "https://framerusercontent.com/assets/AhB25AHci65tC7cjM3bBmpGpfw.mp4",
      img: "https://framerusercontent.com/images/RrIxlQ5xiZ7QVytC1VzCEbR57CI.png",
      title: "ChatGPT",
      mt: "",
    },
    {
      src: "https://framerusercontent.com/assets/LnX7wlIL5R7Mp8CR1G4fKjHAOIQ.mp4",
      img: "https://framerusercontent.com/images/qfUoVSHy4ebtoVGcIIWVOUzXdE.png",
      title: "Uber",
      mt: "lg:mt-8",
    },
  ];

  return (
    <section id="end-result" className="flex flex-col items-center">
      <ScrollReveal>
        <div className="flex flex-col items-center">
          <span className="bg-[#e6e6e6] text-black px-3 py-1 rounded text-sm font-bold uppercase tracking-wider mb-6 inline-block">
            The End Result
          </span>
          <h2 className="text-5xl md:text-6xl font-medium tracking-tight text-black text-center leading-[1.1]">
            This Is What You&apos;ll Be Able to <span className="font-serif-italic text-[#FF5100] font-normal">Create</span>
          </h2>
          <p className="text-[#6b6b6b] text-lg mt-6 max-w-2xl text-center">
            If these look like Apple keynote material to you, you&apos;re seeing it correctly. That&apos;s the standard you&apos;re
            learning.
          </p>
        </div>
      </ScrollReveal>

      {/* Video Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 w-full">
        {videos.map((video, i) => (
          <ScrollReveal key={i}>
            <div
              className={`relative w-full aspect-[4/5] rounded-[32px] overflow-hidden bg-[#1c1c1c] shadow-lg pattern-bg ${video.mt}`}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10 opacity-60"></div>
              <video
                src={video.src}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover relative z-0"
              ></video>
              <div className="absolute bottom-6 left-6 z-20 flex items-center gap-3">
                <img
                  src={video.img}
                  alt={video.title}
                  className="w-10 h-10 rounded-xl object-cover border border-white/20"
                />
                <span className="text-[#f5f5f5] font-bold text-lg flex items-center gap-1">
                  {video.title}
                  <img
                    src="https://framerusercontent.com/images/arcHk4VRD950hQnLVwPvfV4IGA.png"
                    className="w-4 h-4"
                    alt="Check"
                  />
                </span>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal>
        <div className="flex justify-center mt-16">
          <a
            href="#pricing"
            className="inline-block bg-[#ff0000] text-white font-semibold text-lg px-10 py-4 rounded-full glow-button hover:scale-105 transition-transform duration-300"
          >
            I want To Create Work Like This
          </a>
        </div>
      </ScrollReveal>
    </section>
  );
};

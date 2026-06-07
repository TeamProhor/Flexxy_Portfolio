import { ScrollReveal } from "./ScrollReveal";

export const Results = () => {
  const testimonials = [
    {
      text: "If you put into practice the courses teachings and actually apply and complete the modules. All you have to do is post your work and clients will come, the apple-style is super viral and there are hundreds of clients who will pay good money for it. Definetly recommend the course to anyone who wants to learn 👍",
      author: "Mykel Oritz",
      img: "https://framerusercontent.com/images/O0uAX5rEdIWiu8QzZQOpgUKIiww.png",
      imgPos: "",
    },
    {
      text: "I think it&apos;s a great community for Motion Design, especially UI style animations with great design sense included. Would definitely recommend to others as well as the people are are quite helpful.",
      author: "Tanay Pandey",
      img: "https://framerusercontent.com/images/b8iqiETIBXAD8CKoHxpdVpPdY.png",
      imgPos: "object-top",
    },
    {
      text: "I think it’s the best course if you want to improve your motion design skills, put them into real work and get better clients, plus the community really helps you grow and opens your eyes to a lot of things that make you better",
      author: "joemotions.io",
      img: "https://framerusercontent.com/images/4a50wzIhlYH8dxbYQjluItztDM.png",
      imgPos: "",
    },
  ];

  return (
    <section id="results" className="flex flex-col items-center mt-20">
      <ScrollReveal>
        <div className="flex flex-col items-center">
          <span className="bg-[#e6e6e6] text-black px-3 py-1 rounded text-sm font-bold uppercase tracking-wider mb-6 inline-block">
            Results
          </span>
          <h2 className="text-5xl md:text-6xl font-medium tracking-tight text-black text-center leading-[1.1]">
            Results From Motion Designers Like You
          </h2>
          <p className="text-[#6b6b6b] text-lg mt-6 max-w-2xl text-center">
            What happens when designers stop guessing and start animating with intention.
          </p>
        </div>
      </ScrollReveal>

      {/* Testimonials Stack */}
      <div className="flex flex-col gap-8 mt-16 w-full max-w-4xl">
        {testimonials.map((t, i) => (
          <ScrollReveal key={i}>
            <div className="bg-[#F7F7F7] rounded-[24px] p-8 md:p-10 flex flex-col gap-6 shadow-sm">
              <h3 className="text-5xl font-medium text-gray-400 font-serif leading-none">&quot;</h3>
              <p className="text-lg text-[#1c1c1c] leading-relaxed">{t.text}</p>
              <div className="flex items-center gap-4 mt-4">
                <img
                  src={t.img}
                  className={`w-16 h-16 rounded-full object-cover shadow-lg ${t.imgPos}`}
                  alt={t.author}
                />
                <span className="font-medium text-lg text-black flex items-center gap-1">
                  {t.author}{" "}
                  <img
                    src="https://framerusercontent.com/images/arcHk4VRD950hQnLVwPvfV4IGA.png"
                    className="w-5 h-5"
                    alt="Verified"
                  />
                </span>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};

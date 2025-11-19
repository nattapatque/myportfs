export default function AboutSection() {
  return (
    <div className="flex lg:flex-row flex-col w-full lg:px-40 md:px-20 px-10 space-y-4">
      <div className="flex w-full lg:w-1/3 md:text-4xl text-2xl font-bold text-white">
        <span className="md:h-15 h-10 border-b-4 text-nowrap">About me</span>
      </div>
      <div className="w-full lg:w-2/3 text-gray-200 leading-relaxed">
        Hi, I’m Nattapat, a third-year{" "}
        <span className="font-bold text-white">Computer Engineering</span>{" "}
        student at Chulalongkorn University, passionate about{" "}
        <span className="font-bold text-white">web development</span>. I build
        fullstack web applications using{" "}
        <span className="font-bold text-white">React Next.js and Nest.js</span>.
        I'm interested in both frontend and backend development. I enjoy solving
        real-world problems with technology and creating applications that
        improve user experiences. I’m also curious to learn new technologies and
        always ready to do the interesting things.
      </div>
    </div>
  );
}

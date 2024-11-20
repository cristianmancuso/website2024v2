export default function Video(){
return(
<section className="bg-slate-950 py-16 px-4 h-screen w-screen">
  <div className="w-full h-full flex justify-center items-center">
      <iframe
        className="w-full h-full  rounded-lg bg-slate-950 "
        src="/welcome.mp4"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
  
  </div>
</section>
);
}
import AnimatedCodeIcon from "@/components/AnimatedCodeIcon";
import AnimatedGameControllerIcon from "@/components/AnimatedGameControllerIcon";
import AnimatedSecretBookIcon from "@/components/AnimatedSecretBookIcon";
import AnimatedStackedTraysIcon from "@/components/AnimatedStackedTraysIcon";

export default function Home() {
  return (
    <>
      <main className="main-content grow flex flex-col">
        <header className="h-1/2 justify-center flex flex-col px-10">
          <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">InfoStation</h1>
          <div className="w-full text-lg sm:w-4/5 sm:text-xl md:w-2/3 md:text-2xl lg:w-1/2">A personal knowledge base containing notes, projects, ideas, resources, and everything I am learning.</div>
        </header>
        <div className="grid flex-1 grid-cols-1 place-content-center gap-5 px-5 py-8 sm:grid-cols-2 sm:px-8 xl:grid-cols-4 xl:gap-8 xl:px-10">
          <div className="group flex min-h-50 w-full flex-col items-center justify-center rounded-2xl border-3 border-purple-500 bg-dark-purple p-4 text-center transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-105">
            <AnimatedSecretBookIcon size={50} className="overflow-visible text-purple-500" />
            <div className="text-2xl font-bold">Notes</div>
            <div>Topics, Guides, and Learning</div>
          </div>
          <div className="group flex min-h-50 w-full flex-col items-center justify-center rounded-2xl border-3 border-purple-500 bg-dark-purple p-4 text-center transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-105">
            <AnimatedCodeIcon size={50} className="overflow-visible text-purple-500" />
            <div className="text-2xl font-bold">Projects</div>
            <div>Personal and Open Source</div>
          </div>
          <div className="group flex min-h-50 w-full flex-col items-center justify-center rounded-2xl border-3 border-purple-500 bg-dark-purple p-4 text-center transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-105">
            <AnimatedGameControllerIcon size={50} className="overflow-visible text-purple-500" />
            <div className="text-2xl font-bold">Games</div>
            <div>Web Games and Experiments</div>
          </div>
          <div className="group flex min-h-50 w-full flex-col items-center justify-center rounded-2xl border-3 border-purple-500 bg-dark-purple p-4 text-center transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-105">
            <AnimatedStackedTraysIcon size={50} className="overflow-visible text-purple-500" />
            <div className="text-2xl font-bold"> Resources</div>
            <div>Useful sites, Tools, and References</div>
          </div>
        </div>
      </main>
    </>
  )
}

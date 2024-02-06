export default function Header() {
  return (
    <main className="flex justify-between text-white items-center m-0.5 font-roboto static bg-gray-800 h-20 overflow-hidden ml-1">
      {/* <section className="cursor-pointer">Digital-Store</section> */}
      <section className="relative cursor-pointer rounded-lg group">
        <span className="absolute top-0 left-0 w-0 h-full group-hover:bg-blue-800 group-hover:w-full group-hover:rounded-lg transition-all ease-in duration-300 ml-1"></span>
        <span className="relative p-2 text-xl">Digital-Store</span>
      </section>
    </main>
  )
}

import Sidebar from "../components/Sidebar";



export default function Products() {
  return (
    <>
      <section>
        <Sidebar/>
        {/*content */}
        <div className="min-h-screen py-30">
          <div className="flex justify-center">
            <h3>All products</h3>
            <div className="grid md:grid-cols-5 sm:grid-cols-4 grid-cols-2 gap-3">
                <div className="p-4">
                  <h2>hello</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore?</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

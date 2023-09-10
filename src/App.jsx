import './App.css'
import Bottoles from './component/Bottles/Bottoles'

function App() {


  return (
    <>
      <section className='max-w-screen-xl min-h-screen mx-auto px-4 md:px-8 lg:px-12 pt-5 bg-neutral-400'>
      <h1 className='text-center text-4xl font-bold'>The Bottoles are</h1>
      <Bottoles></Bottoles>
      </section>
    </>
  )
}

export default App

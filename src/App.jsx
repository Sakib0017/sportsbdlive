function App() {
  return (
    <div className="min-h-screen">
      <>
        <iframe
            id="mainPlayer"
            src="https://playerado.top/embed2.php?id=willow"
            class="w-2xl mx-auto max-h-screen"
            frameborder="2"
            allowfullscreen
            allow="autoplay; fullscreen; picture-in-picture">
        </iframe>
        <div className='container'>
           <button
                onclick="changeChannel('Willow Cricket','https://playerado.top/embed2.php?id=willow')"
                class="shrink-0 px-5 py-3 rounded-full bg-blue-600 text-white font-medium hover:scale-105 transition">
                Willow Cricket
            </button>
        </div>

        </>
    </div>
  )
}

export default App
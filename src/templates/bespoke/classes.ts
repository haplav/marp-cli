// Based on https://github.com/bespokejs/bespoke-classes

export default function bespokeClasses(deck) {
  deck.parent.classList.add('bespoke-marp-parent')
  deck.slides.map((element) => element.classList.add('bespoke-marp-slide'))

  deck.on('activate', (e) => {
    const shouldResetAnimation = !e.slide.classList.contains(
      'bespoke-marp-active'
    )

    deck.slides.map((element) => {
      element.classList.remove('bespoke-marp-active')
    })
    e.slide.classList.add('bespoke-marp-active')

    if (shouldResetAnimation) {
      e.slide.classList.add('bespoke-marp-active-ready')
      void document.body.clientHeight
      e.slide.classList.remove('bespoke-marp-active-ready')
    }
  })
}

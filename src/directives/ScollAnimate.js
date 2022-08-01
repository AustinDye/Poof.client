const animatedScollObserver = new IntersectionObserver(
 (entries ,animatedScollObserver) => {
  entries.forEach((entry) => {
   if (entry.isIntersecting) {
    entry.target.classList.add('enter')
    animatedScollObserver.unobserve(entry.target)
   }
  })
 }
)

export default {
 bind(el) {
  el.classList.add('before-enter')
  animatedScollObserver.observe(el)
 }
}
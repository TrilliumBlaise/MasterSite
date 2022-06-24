export function toggleBackgroundSize(size: string) {
  const body = document.querySelector('body')
  if (body != null) {
    body.style.backgroundSize = size
  }
}

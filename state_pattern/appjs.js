function app(initialState = {}) {
  const state = initialState
  return {
    setState(newState = state) {
      return (e) => {
        console.log('previous state', state)
        Object.assign(state, newState)
        console.log('updated state', state)
        document.getElementById('heading').textContent = state.heading
        document.getElementById('content').innerHTML = state.content()
        e.preventDefault()
      }
    },
  }
}
 
function homeComponent() {
  return `
    <div class="jumbotron">
      <h1 class="display-4">Hello, world!</h1>
      <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
      <hr class="my-4">
      <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
      <p class="lead">
      <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
      </p>
    </div>
  `
}
 
function aboutComponent() {
  return `
    <p>This is the about page</p>
  `
}
 
function contactComponent() {
  return `<form>
   <div class="form-group">
     <label>Name</label>
     <input type="text class="form-control">
   </div>
     <div class="form-group">
     <label>Email Address</label>
     <input type="email" class="form-control">
   </div>
   <button type="submit" class="btn btn-primary">Submit</button>
 </form>
 `
}
 
const pageState = app()
 
document.addEventListener(
  'DOMContentLoaded',
  pageState.setState({ heading: null, content: homeComponent })
)
 
document
  .getElementById('home')
  .addEventListener(
    'click',
    pageState.setState({ heading: null, content: homeComponent })
  )
 
document
  .getElementById('about')
  .addEventListener(
    'click',
    pageState.setState({ heading: 'About Us', content: aboutComponent })
  )
 
document
  .getElementById('contact')
  .addEventListener(
    'click',
    pageState.setState({ heading: 'Contact Us', content: contactComponent })
  )
import './style.css'
export default function Filter(props) {
  let func = props.func
  return <div className='filter'>
      <button className='category choose' onClick={(e) => (func(e.target.textContent))}>All</button>
      <button className='category' onClick={(e) => (func(e.target.textContent))}>svelte</button>
      <button className='category' onClick={(e) => (func(e.target.textContent))}>react</button>
      <button className='category' onClick={(e) => (func(e.target.textContent))}>backend</button>
      <button className='category' onClick={(e) => (func(e.target.textContent))}>desktop</button>
      <button className='category' onClick={(e) => (func(e.target.textContent))}>css</button>
      <button className='category view_all'>view_all</button>
    </div>
}
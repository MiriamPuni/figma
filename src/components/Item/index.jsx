import './style.css'

export default function Item(props) {
  return <div className='item'>
    <a href={props.link}>
    <div className="coverImage" style={{backgroundImage: `url(${props.coverImage})`}}>
        <button className='tags'>{props.tags[0]}</button>
    </div>
    <div className='date'>{props.date}</div>
    <div className='title'>{props.title}</div>
    <div className='intro'>{props.intro}</div>
    </a>
  </div>
}
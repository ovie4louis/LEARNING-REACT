import './CSS/TodoItems.css'
import tick1 from './Assets/img/tick1.png';
import space from './Assets/img/space.png';
import cross from './Assets/img/cross.png';
const TodoItems = ({no,display,text}) => {
  return (
    <div className='todoitems'>
        <div className="todoitems-container">
          <img src={space} alt="" />
          <img src={tick1} alt="" />
          <div className="todoitems-text">{text}</div>
        </div>
        <img className='todoitems-cross-icon' src={cross} alt="" />
    </div>
  )
}

export default TodoItems
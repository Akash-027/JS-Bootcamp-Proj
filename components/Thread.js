import { FaTimes } from 'react-icons/fa'

const Thread = ({ thread, onDelete }) => {
  return (
    <div className='thread'>
      <h3>{thread.id}</h3>
      <h4>
          {thread.text}<FaTimes style={{ color: 'red', cursor: 'pointer' }}
          onClick={() => onDelete(thread.id)} />
      </h4>

    </div>
  )
}

export default Thread
import Thread from './Thread'

const Threads = ({ threads, onDelete }) => { //structured props
  return (
    <>
      {threads.map((thread) => ( //creates a list, parent 'Thread' must have a unique key prompt
        <Thread key={thread.id} thread={thread} onDelete={onDelete} />
      ))}
    </>
  )
}

export default Threads
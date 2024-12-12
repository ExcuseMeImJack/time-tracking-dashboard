import Image from 'next/image'

function UserCard({ status, setStatus, user = "Jeremy Robson", profilePic = "/images/image-jeremy.png" }) {
  return (
    <div className='flex flex-col gap-6 w-48 h-96 bg-dark-blue rounded-b-lg'>
      <div className='bg-blue h-60 rounded-xl flex flex-col gap-6 p-6'>
        <div className='relative w-12 h-12 border-white border-2 rounded-full'>
          <Image
            src={profilePic}
            fill
            priority
            alt={user}
          />
        </div>
        <div>
          <p className='font-extralight text-xs'>Report for</p>
          <h3 className='font-medium text-3xl'>{user}</h3>
        </div>
      </div>
      <div className='flex flex-col gap-4 px-6 text-sm text-desaturated-blue'>
        <p href='/' onClick={() => setStatus("D")} className={`hover:cursor-pointer hover:text-white duration-300 ${status === "D" && "text-white"} `}>Daily</p>
        <p href='/' onClick={() => setStatus("W")} className={`hover:cursor-pointer hover:text-white duration-300 ${status === "W" && "text-white"} `}>Weekly</p>
        <p href='/' onClick={() => setStatus("M")} className={`hover:cursor-pointer hover:text-white duration-300 ${status === "M" && "text-white"} `}>Monthly</p>
      </div>
    </div>
  )
}

export default UserCard

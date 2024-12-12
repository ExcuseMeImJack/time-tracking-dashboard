import Image from 'next/image';
import React from 'react'


function ItemCard({ item, status }) {
  const { title, timeframes } = item;
  const determineColor = () => {
    if (title === "Work") return "bg-light-red-work";
    if (title === "Play") return "bg-soft-blue-play";
    if (title === "Study") return "bg-light-red-study";
    if (title === "Exercise") return "bg-lime-green-exercise";
    if (title === "Social") return "bg-violet";
    if (title === "Self Care") return "bg-soft-orange-self-care";
  }

  const determineIcon = () => {
    if (title === "Work") return "/images/icon-work.svg";
    if (title === "Play") return "/images/icon-play.svg";
    if (title === "Study") return "/images/icon-study.svg";
    if (title === "Exercise") return "/images/icon-exercise.svg";
    if (title === "Social") return "/images/icon-social.svg";
    if (title === "Self Care") return "/images/icon-self-care.svg";
  }

  const determineCurrentTime = () => {
    if (status === "W") return timeframes.weekly.current;
    if (status === "D") return timeframes.daily.current;
    if (status === "M") return timeframes.monthly.current;
  }

  const determinePrevTime = () => {
    if (status === "W") return timeframes.weekly.previous;
    if (status === "D") return timeframes.daily.previous;
    if (status === "M") return timeframes.monthly.previous;
  }

  return (
    <div className={`w-48 h-40 rounded-t-lg rounded-b-3xl ${determineColor()}`}>
      <div className='h-8'>
        <div className='flex justify-end px-2 h-8'>
          <Image
            src={determineIcon()}
            width={60}
            height={40}
            alt={`${title}-icon`}
            className='object-cover overflow-hidden'
          />
        </div>
      </div>
      <div className='bg-dark-blue h-36 p-4 rounded-xl flex flex-col justify-between relative'>
        <div className='flex justify-between items-center'>
          <p className='text-sm font-semibold'>{title}</p>
          <div className='mt-2 hover:cursor-pointer'>
            <Image
              src="images/icon-ellipsis.svg"
              width={12}
              height={20}
              alt={`${title}-ellipsis`}
            />
          </div>
        </div>
        <h1 className='text-4xl'>{determineCurrentTime()}hrs</h1>
        <p className='text-xs text-desaturated-blue'>{`${status === "W" ? "Last Week - " : status === "D" ? "Yesterday - " : "Last Month - "} ${determinePrevTime()}hrs`}</p>
        <div className="absolute inset-0 bg-desaturated-blue opacity-0 hover:opacity-30 transition-opacity duration-300 hover:cursor-pointer rounded-xl"></div>
      </div>
    </div>

  )
}

export default ItemCard

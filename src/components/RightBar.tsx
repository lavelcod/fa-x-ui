import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
const menuList = [
  {
    id: 1,
    name: "خانه",
    link: "/",
    icon: "home.svg",
  },
  {
    id: 2,
    name: "کاوش",
    link: "/",
    icon: "explore.svg",
  },
  {
    id: 3,
    name: "آگاه‌سازی‌ها",
    link: "/",
    icon: "notification.svg",
  },
  {
    id: 4,
    name: "پیام‌ها",
    link: "/",
    icon: "message.svg",
  },
  {
    id: 5,
    name: "نشانک‌ها",
    link: "/",
    icon: "bookmark.svg",
  },
  {
    id: 6,
    name: "شغل‌ها",
    link: "/",
    icon: "job.svg",
  },
  {
    id: 7,
    name: "انجمن‌ها",
    link: "/",
    icon: "community.svg",
  },
  {
    id: 8,
    name: "نمایه",
    link: "/",
    icon: "profile.svg",
  },
  {
    id: 9,
    name: "بیشتر",
    link: "/",
    icon: "more.svg",
  },
];
function RightBar() {
  return (
    <div className='h-screen sticky top-0 flex flex-col justify-between pt-2 pb-8'>
      <div className='flex flex-col text-lg items-center gap-4 xxl:items-start'>
        <Link className='p-2 rounded-full hover:bg-[#141414]' href="/">
          <Image src={"icons/logo.svg"} alt='logo' width={24} height={24}/>
        </Link>
        <div className='flex flex-col gap-4'>
          {
            menuList.map(
              item => {
                return <Link className='flex items-center gap-4 p-2 rounded-full hover:bg-[#141414]' href={item.link} key={item.id}>
                  <Image src={`icons/${item.icon}`} alt={item.name} width={24} height={24}/>
                  <span className='hidden xxl:inline'>{item.name}</span>
                </Link>
              }
            )
          }
        </div>
        <Link href="/" className='bg-white text-black rounded-full w-12 h-12 flex items-center justify-center xxl:hidden'>
          <Image src="icons/post.svg" alt='پست جدید' width={24} height={24} />
        </Link>
        <Link href="/" className='hidden xxl:block bg-white text-black rounded-full font-bold py-2 px-20'>
          پست کردن
        </Link>
      </div>
      <div className='flex items-center justify-between'>
        <div className='flex items-center justify-center'>
          <div className='relative w-10 h-10 rounded-full overflow-hidden'>
            <Image src="/general/avatar.png" alt='Ehsan' fill/>
          </div>
          <div className='hidden xxl:flex flex-col'>
            <span className='text-bold'>Ehsan Namdari</span>
            <span className='text-textGray'>@lavelcod</span>
          </div>
        </div>
        <div className='hidden xxl:block cursor-pointer font-bold'>
          ...
        </div>
      </div>
    </div>
  )
}

export default RightBar
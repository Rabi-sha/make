import React from 'react'
import Image from 'next/image'
const page = () => {
    return (
        <div><figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
        <Image className="w-24 h-24 rounded-full mx-auto" src="/rabia.png" alt="" width="384" height="512"/>
        <div className="pt-6 te space-y-4">
          <blockquote>
            <p className="text-lg font-medium">
            My name is Rabia. I am a student of Generative AI. I live in
            Rahim Yar Khan.
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">
              Rabia Waqar
            </div>
            <div className="text-slate-700 dark:text-slate-500">
              Programmer, Rahim Yar Khhan
            </div>
          </figcaption>
        </div>
      </figure></div>
    )
}

export default page
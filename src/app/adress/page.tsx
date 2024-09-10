import React from 'react'
import Image from 'next/image'
const page = () => {
    return (
        <div><figure className="bg-green-100 rounded-xl p-8 dark:bg-slate-800">
        <Image className="w-24 h-24 rounded-full mx-auto" src="/rabia.png" alt="" width="384" height="512"/>
        <div className="pt-6  space-y-4">
          <blockquote>
            <p className="text-lg font-small">
            My address is located in the vibrant city of Rahim Yar Khan Punjab Pakistan.
             Rahim Yar Khan is a thriving metropolis known for its rich history cultural heritage and 
             warm hospitality. The city scenic views bustling markets and friendly community make it a wonderful place to call home.
              With its unique blend of traditional and modern charm Rahim Yar Khan is a great place to live work and explore.
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">
              Rabia Waqar
            </div>
            <div className="text-slate-700 dark:text-slate-500">
              Programmer, Rahim Yar Khan
            </div>
          </figcaption>
        </div>
      </figure></div>
    )
}

export default page
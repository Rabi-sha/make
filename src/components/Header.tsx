import React from 'react'
import Link from 'next/link'
const Header = () => {
    return (
        <div className='flex gap-3 p-6 bg-green-200'>
<Link href ="\">Home page</Link>
<Link href ="\name">name page</Link>
<Link href ="\adress">adress page</Link>
        </div>
    )
}

export default Header
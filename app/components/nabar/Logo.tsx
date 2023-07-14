'use client'

import Image from 'next/image'
import {useRouter} from "next/navigation";

const Logo = () => {
    const router = useRouter()

    return (
        <Image
            src="/images/ecospace_logo.png"
            alt="Logo"
            className="hidden md:block cursor-pointer"
            width="150"
            height="150"
        />
    )
}

export default Logo
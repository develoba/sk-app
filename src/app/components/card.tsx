import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface CardProps {
    image: string
    name: string
    id: string
    href: string
    as: string
}

export default function Card({ name, image, id, href, as }: CardProps) {
    return (
        <article className='w-full bg-gray-800 text-white border-2 border-gray-700 overflow-hidden rounded-md relative transition-all hover:scale-110'>
            <Link href={href} as={as}>
                <div className='h-72'>
                    <Image src={image} alt={`routine ${id}`} fill={true} objectFit='cover' />
                    <div className='absolute inset-0 bg-gray-800 bg-opacity-50'></div>
                </div>

                <div className='absolute inset-0 p-2 flex flex-col justify-end bg-gradient-to-t from-gray-700 to-transparent'>
                    <p className='text-xl font-bold'>{name}</p>
                </div>
            </Link>
        </article>
    )
}

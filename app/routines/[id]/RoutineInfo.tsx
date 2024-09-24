'use client'

import React, { useState } from 'react'
import { IoMdInformationCircleOutline } from "react-icons/io";
import { IoCloseCircle } from 'react-icons/io5';
import Modal from 'react-modal';

interface PageProps {
    instructions: string
}

export default function RoutineInfo({ instructions }: PageProps) {
    const [modalIsOpen, setIsOpen] = useState(false)

    return (<>
        {<div>
            <button className='bg-teal-700 rounded-md p-2 border-none' onClick={() => setIsOpen(true)}>
                <IoMdInformationCircleOutline className='text-white text-2xl' />
            </button>
        </div>}

        <Modal isOpen={modalIsOpen} >
            <button onClick={() => setIsOpen(false)}>
                <IoCloseCircle />
            </button>

            <div className='flex flex-col gap-4'>
                <h2>Instrucciones</h2>
                <p>{instructions}</p>
            </div>
        </Modal>
    </>

    )
}
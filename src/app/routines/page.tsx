import supabase from '@/utils/supabase'
import React from 'react'

interface Routine {
    routine_id: string;
    name: string;
    main_img_url: string;
    duration: string;
    location: string;
    price: number;
    total_days: number;
    completed_days: number;
    total_exercises: number;
    total_sets: number;
    muscles: string;
    instructions: string;
    category: string;
    goal: string;
    muscle: string;
    level: string;
}

export default async function Page() {
    const { data: routines, error } = await supabase.from('routines').select()

    routines as Routine[];

    if (error) {
        console.log('Error fetching', error)
    }

    return <div className='m-4 grid grid-cols-4 gap-8'>
        {(routines?.map((routine) => (
            <a href={`/weeks?routine=${routine.routine_id}`} key={routine.routine_id} className='text-white bg-slate-800 p-2'>
                {routine.name}
            </a>
        ))
        )}
    </div>
}
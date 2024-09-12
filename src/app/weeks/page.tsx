import supabase from '@/utils/supabase';
import React from 'react'

interface PageProps {
    searchParams: {
        routine?: string;
    }
}

export default async function Page({ searchParams }: PageProps) {
    const isUUID = (value: string) => /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(value);

    const routineId = searchParams.routine!.trim(); // Recortar espacios en blanco

    if (isUUID(routineId)) {
        console.log('Valid UUID:', routineId);
        // Puedes usar routineId directamente en tu consulta con supabase
    } else {
        console.error('Invalid UUID format:', routineId);
    }

    console.log(typeof routineId, routineId)
    const { data: routineWeeks, error } = await supabase.from('routine_weeks').select().eq('routine_id', `${routineId}`);
    console.log("after sql")



    if (error) {
        console.log('Error fetching', error)
    }

    console.log(typeof routineId)
    console.log(routineWeeks)

    return (
        <div className='m-4 grid grid-cols-4 gap-8'>
            {(routineWeeks?.map((routineWeek) => (
                <a href={`/week?routine_week=${routineWeek.routine_week_id}`} key={routineWeek.routine_week_id} className='text-white bg-slate-800 p-2'>
                    Semana {routineWeek.number}
                </a>
            ))
            )}
        </div>
    )
}
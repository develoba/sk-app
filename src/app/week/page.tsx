import supabase from '@/utils/supabase';
import React from 'react'

interface PageProps {
    searchParams: {
        routine_week?: string;
    }
}

export default async function Page({ searchParams }: PageProps) {
    const isUUID = (value: string) => /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(value);

    const routineWeekId = searchParams.routine_week!.trim(); // Recortar espacios en blanco

    if (isUUID(routineWeekId)) {
        console.log('Valid UUID:', routineWeekId);
        // Puedes usar routineId directamente en tu consulta con supabase
    } else {
        console.error('Invalid UUID format:', routineWeekId);
    }

    const { data: weekDays, error } = await supabase.from('week_day').select().eq('routine_week_id', `${routineWeekId}`);

    if (error) {
        console.log('Error fetching', error)
    }
    return (
        <div className='m-4 grid grid-cols-4 gap-8'>{
            weekDays?.map((weekDay) => (
                <a href={`/day?week_day=${weekDay.week_day_id}`} key={weekDay.week_day_id} className='text-white bg-slate-800 p-2'>Día {weekDay.number}</a>
            ))
        }</div>
    )
}
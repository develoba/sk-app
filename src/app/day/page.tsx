import supabase from '@/utils/supabase';
import React from 'react'

interface PageProps {
    searchParams: {
        week_day?: string;
    }
}


export default async function Page({ searchParams }: PageProps) {
    const isUUID = (value: string) => /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(value);

    const weekId = searchParams.week_day!.trim(); // Recortar espacios en blanco

    if (isUUID(weekId)) {
        console.log('Valid UUID:', weekId);
        // Puedes usar routineId directamente en tu consulta con supabase
    } else {
        console.error('Invalid UUID format:', weekId);
    }


    // get day exercises
    const { data: dayExercises, error: dayExercisesError } = await supabase.from('day_exercises').select().eq('week_day_id', weekId)


    if (dayExercisesError) {
        console.log('Error fetching', dayExercisesError)
    }

    // get exercises
    const dayExercisesIds = dayExercises?.map((dayExercise) => dayExercise.exercise_id) ?? []
    const { data: exercises, error: exercisesError } = await supabase.from('exercises').select().in('exercise_id', dayExercisesIds)

    if (exercisesError) {
        console.log('Error fetching', exercisesError)
    }

    return (
        <div>
            {exercises?.map((exercise) => (
                <div key={exercise.exercise_id}>{exercise.spanish_name}</div>
            ))}

        </div>
    )
}
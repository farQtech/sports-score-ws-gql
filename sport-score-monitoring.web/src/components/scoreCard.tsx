import React, { useEffect, useState } from 'react';

import { useQuery, gql } from '@apollo/client';
import { READ_SCORES_QUERY } from './gql/Queries';

export const ScoreCard = () => {

    // const { data, error, loading } = useGetAllSportsDataQuery();

    const {error, loading, data} = useQuery(READ_SCORES_QUERY);
    
    const [score, setScore] = useState([]);

    useEffect(() => {
        setScore(data?.getAllMockSportScoreData)
    }, [data]);

    return (
        <>
            {
                score?.map((val: any) => { return (
                <div className="p-5 grid grid-cols-3 bg-slate-900 rounded ">
                    {/*  left content */}
                    <div>
                        {/* team & score */}
                            {
                                val?.payload?.competitors.map((comp: any) => {
                                    return (
                                        <div className="flex justify-between" key={comp.id}>
                                            <p className="text-white">{comp.name}</p>
                                            <p className="text-green-600">{comp.score}</p>
                                        </div>
                                    )
                                })
                            }
                        {/* Date/time */}
                        <p className="text-gray-500"> 24/09 18:30</p>
                    </div>
                    {/* right content */}
                    <div className="flex align-center ml-40 col-span-2">
                        <div className="bg-gray-600 p-5 rounded mx-2">
                            <p className="text-white text-lg">1.48</p>
                        </div>
                        <div className="bg-gray-600 p-5 rounded mx-2">
                            <p className="text-white text-lg">1.48</p>
                        </div>
                        <div className="bg-gray-600 p-5 rounded mx-2">
                            <p className="text-white text-lg">1.48</p>
                        </div>
                    </div>
                </div>
                )
                })
            }
        </>
    );
};
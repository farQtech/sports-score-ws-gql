import React from 'react';

import { useGetAllSportsDataQuery } from '../generated/graphql';

export const ScoreCard = () => {

    const { data, error, loading } = useGetAllSportsDataQuery();

    return (
        <>
            <div className="p-5 grid grid-cols-3 bg-slate-900 rounded ">
                {/*  left content */}
                <div>
                    {/* team & score */}
                    <div className="flex justify-between">
                        <p className="text-white">{data?.payload?.competitors?.map(c => c?.name)}</p>
                        <p className="text-green-600">0</p>
                    </div>
                    <div className="flex justify-between">
                        <p className="text-white">Team B</p>
                        <p className="text-green-600">0</p>
                    </div>
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
        </>
    );
};
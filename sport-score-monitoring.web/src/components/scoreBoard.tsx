import React from 'react';
import { ScoreCard } from './scoreCard';
import { useGetAllSportsDataQuery } from '../generated/graphql';

export const ScoreBoard = () => {

    const { data, error, loading } = useGetAllSportsDataQuery();
    
    return (
        <>
            <div className="px-2 py-1 bg-slate-600 mx-auto">
                <div>
                    <div className="my-1">
                        <ScoreCard />
                    </div>
                    <div className="my-1">
                        <ScoreCard />
                    </div>
                    <div className="my-1">
                        <ScoreCard />
                    </div>
                    <div className="my-1">
                        <ScoreCard />
                    </div>
                </div>
            </div>
        </>
    )
}
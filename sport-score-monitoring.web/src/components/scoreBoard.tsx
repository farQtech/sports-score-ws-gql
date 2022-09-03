import React, { useEffect, useState } from 'react';
import { ScoreCard } from './scoreCard';
import { gql, useSubscription } from '@apollo/client';
import { SCORE_UPDATED_SUBSCRIPTION } from './gql/subscriptions';

export const ScoreBoard = () => {

    const {error, loading, data} = useSubscription(SCORE_UPDATED_SUBSCRIPTION, {
        onSubscriptionData: (data) => {
            console.log('subs', data)
        }
    });
    
    // const [scoreUpdated, setScore] = useState([]);

    // useEffect(() => {
    //     // setScore(data?)
    //     console.log(data)
    // }, [data]);
    
    return (
        <>
            <div className="px-2 py-1 bg-slate-600 mx-auto">
                <div>
                    <div className="my-1">
                        <ScoreCard />
                    </div>
                </div>
            </div>
        </>
    )
}
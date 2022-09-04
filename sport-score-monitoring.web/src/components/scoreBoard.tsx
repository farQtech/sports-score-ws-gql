import { useEffect, useState } from 'react';
import { ScoreCard } from './scoreCard';
import { useQuery } from '@apollo/client';
import { SCORE_UPDATED_SUBSCRIPTION } from './gql/subscriptions';
import { READ_SCORES_QUERY } from './gql/Queries';

import { SportCategories } from './sportCategories';

export const ScoreBoard = () => {

    const { error, loading, data, subscribeToMore } = useQuery(READ_SCORES_QUERY);
    const [score, setScore] = useState({});
    const [categoriesToShow, setcategoriesToShow] = useState([]);

    useEffect(() => {
        setScore(data?.getAllMockSportScoreData);
    }, [data]);

    subscribeToMore({
        document: SCORE_UPDATED_SUBSCRIPTION,
        updateQuery: (prev, { subscriptionData }) => {
            if (!subscriptionData.data) return prev;
            setScore(subscriptionData);
        }
    });

    /**
     * is triggered when user selects a catergory
     * @param categoryGroupedData 
     */
    const handleCategoryChange = (categoryGroupedData: any) => {
        // set categories to show
        setcategoriesToShow(categoryGroupedData);
    }

    // if data is not ready
    if (loading) return <div className="lds-dual-ring"></div>;
    // on error
    if (error) return <p>Error :(</p>;

    // data recieved, show all sports categories
    if (categoriesToShow.length == 0) {
        return <>
            <div className="px-2 py-1 mx-auto">
                <div>
                    <div className="my-1">
                        <SportCategories categoryClicked={handleCategoryChange} score={score} />
                    </div>
                </div>
            </div>
        </>
    } else
        // show data for a specific category
        return (
            <>
                <div className="px-2 py-1 bg-slate-600 mx-auto">
                    <button onClick={e => setcategoriesToShow([])} className='text-blue-500 underline text-xl'>Back to all sports</button>
                    <div>
                        <div className="overflow-auto max-h-600 scrollbar">
                            <ScoreCard scoreBoardData={score} categoriesToShow={categoriesToShow} />
                        </div>
                    </div>
                </div>
            </>
        )
}
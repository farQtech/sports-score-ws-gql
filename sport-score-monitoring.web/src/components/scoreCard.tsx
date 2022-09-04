import dateFormat from 'dateformat';


export const ScoreCard = ({ scoreBoardData, categoriesToShow }: any) => {
    // handle no data case
    if (!scoreBoardData || !categoriesToShow) return <p>NO DATA</p>;

    // filter elements to display
    const allScores = scoreBoardData.filter((d: any) => {
        return categoriesToShow.map((c: any) => c.id).includes(d.category.id)
    })

    // render UI
    return (
        <>
            <h2 className='text-white font-bold mb-4 text-3xl text-center'>{categoriesToShow[0].slug}</h2>
            {
                allScores?.map((val: any) => {
                    return (
                        <div className="p-5 grid grid-cols-3 bg-slate-900 rounded mt-2 overflow-auto scrollbar">
                            {/*  left content */}
                            <div>
                                {
                                    val.competitors.map((comp: any) => {
                                        return (
                                            <div className="flex justify-between" key={comp.id}>
                                                <p className="text-white font-bold">{comp.name}</p>
                                                <p className="text-green-600 font-bold">{comp.score}</p>
                                            </div>
                                        )
                                    })
                                }
                                <p className="text-gray-500 font-bold">{dateFormat(val.updatedAt, "dd/MM hh:mm")}</p>
                            </div>
                            {/* right content */}
                            <div className="flex align-center ml-40 col-span-2">
                                {
                                    val.markets.length == 0 ? <p className='text-center text-red-700 font-bold text-4xl'>No Data Received Yet!</p> : val.markets.map((market: any) => {
                                        return market.selections.map((sel: any) => {
                                            return (
                                                <div className="bg-gray-600 p-5 rounded mx-2">
                                                    <p className="text-white text-lg font-bold">{sel && sel.odds ? parseFloat(sel.odds).toFixed(2) : '—'}</p>
                                                </div>
                                            )// return
                                        }) // selections
                                    }) // markets
                                }
                            </div>
                        </div>
                    )
                })
            }
        </>
    );
};
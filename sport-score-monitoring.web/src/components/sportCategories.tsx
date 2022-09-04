/**
 * groups an array's elements by   ${key}
 * @param items 
 * @param key 
 * @returns 
 */
const groupBy = (items: any, key: any) => items.reduce(
    (result: any, item: any) => ({
        ...result,
        [item[key]]: [
            ...(result[item[key]] || []),
            item,
        ],
    }),
    {},
);


export const SportCategories = ({ score, categoryClicked }: any) => {
    // handle no data case
    if (!score) return <p>No Data</p>;

    // extract all category objects
    const allData = (score as any[]).map(s => s.category);

    // group by slug
    const sportCategories = groupBy(allData, 'slug');

    // nothing left?
    if (!sportCategories) return <p>NO DATA</p>;

    // render UI
    return (
        <div className="grid grid-cols-4 gap-4">
            {
                Object.keys(sportCategories).map((key) => {
                    return (
                        <>
                            <div onClick={e => categoryClicked(sportCategories[key])} className='p-4 bg-white m-2 rounded shadow-lg text-center hover:bg-blue-300'>
                                <span className="relative animate-ping inline-flex rounded-full h-5/6 w-5 pb-1 pl-0.5 text-sm text-white font-bold bg-sky-500 float-right ml-5">{sportCategories[key].length}</span>
                                {key}
                            </div>
                        </>
                    );
                })
            }
        </div>
    );
}
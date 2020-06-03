import React, { useEffect, useState, useCallback } from 'react'

const FeelingsStatsList = ({ primaryFeelings, entries }) => {

    const [feelings, setFeelings] = useState([])

    // Count the number of entries for each feeling
    const sortFeelings = useCallback(entries => {
        const feelings = []
        primaryFeelings.forEach(primaryFeeling => {
            let filtered = entries.filter(entry => entry.feeling.feelingId === primaryFeeling.feelingId)
            feelings.push({
                ...primaryFeeling,
                entriesCount: filtered.length
            })
        })
        setFeelings(feelings)
    }, [primaryFeelings])

    useEffect(() => {
        sortFeelings(entries)
    }, [sortFeelings, entries])

    return (
        <div className="feelings-list">
            {feelings.map(feeling => (
                <div className='feelings-list__element' key={feeling.feelingId}>
                    <span>{feeling.feelingName}</span>
                    <span>{feeling.entriesCount}</span>
                </div>
            ))}
        </div>
    )
}

export default FeelingsStatsList

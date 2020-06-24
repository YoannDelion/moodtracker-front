import React, { useEffect, useState, useCallback } from 'react'
import * as Moods from '../Assets/mood-icons'

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
        <div className="card feelings-list">
            {feelings.map(feeling => (
                <div className='feelings-list__element' key={feeling.feelingId}>
                    <img src={Moods[feeling.feelingName]} alt={feeling.feelingName}
                        className={`list-mood moods--${feeling.feelingName}`} />
                    <span>{feeling.entriesCount}</span>
                    <span>{Math.round(feeling.entriesCount / entries.length * 100)}%</span>
                </div>
            ))}
        </div>
    )
}

export default FeelingsStatsList

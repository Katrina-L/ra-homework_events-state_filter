export default function Toolbar( {filters, selected, onSelectFilter} ) {

    return (
        <div className="toolbar">
            {filters.map( (filter, index) => {
                const className = filter === selected ? 
                "toolbar-btn selected" : 
                "toolbar-btn";

                return (
                    <button 
                        key={index}
                        className={className} 
                        onClick={() => onSelectFilter(filter)}>
                        {filter}
                    </button>
                )
            })}
        </div>
    )
}

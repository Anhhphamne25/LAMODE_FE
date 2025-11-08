"use client"

export function StatusFilter({ statuses, selectedStatus, onStatusChange }) {
  return (
    <div className="flex flex-wrap gap-3 mb-8">
      {statuses.map((status) => (
        <button
          key={status}
          onClick={() => onStatusChange(status)}
          className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
            selectedStatus === status
              ? "bg-primary text-primary-foreground scale-105"
              : "bg-muted text-muted-foreground hover:bg-muted/80"
          }`}
        >
          {status}
        </button>
      ))}
    </div>
  )
}

const BookingsIcon = (props) => (
    <svg
        fill="none"
        viewBox="0 0 32 32"
        version="1.1"
        preserveAspectRatio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <rect
            x={3.116}
            y={8.068}
            width={26.539}
            height={19.847}
            rx={2}
            className="navBarIcon"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path strokeWidth={2} d="M3 14.842h27" className="navBarIcon" />
        <path
            className="navBarIcon"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.562 6v4.069M22.503 6v4.069"
        />
    </svg>
)

export default BookingsIcon;
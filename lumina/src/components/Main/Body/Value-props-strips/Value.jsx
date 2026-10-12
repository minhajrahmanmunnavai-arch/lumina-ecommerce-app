import Card from "./Card"



const Value = () => {

    const cardDetails = [
        {
            svg: (
                <svg className="w-6 h-6 text-neutral-900" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
                </svg>),

            title: "Complimentary Shipping",
            details: "On all domestic & global orders over $300"

        },
        {
            svg: (
                <svg className="w-6 h-6 text-neutral-900" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm6 9.09c0 4-2.55 7.7-6 8.83-3.45-1.13-6-4.82-6-8.83V6.31l6-2.25 6 2.25v4.78z" />
                </svg>),

            title: "Authenticity Guaranteed",
            details: "Every piece serialized with certificate of origin"
        },
        {
            svg: (
                <svg className="w-6 h-6 text-neutral-900" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M21 15h-2.38c-.35-1.12-.99-2.13-1.82-2.95l1.09-1.09a1 1 0 00-1.42-1.42l-1.4 1.4A8.962 8.962 0 0012 9c-1.33 0-2.61.3-3.77.85l-1.4-1.4a1 1 0 00-1.42 1.42l1.09 1.09C5.37 12.87 4.73 13.88 4.38 15H2a1 1 0 000 2h18a1 1 0 000-2zm-9-8c.55 0 1 .45 1 1v1h-2V8c0-.55.45-1 1-1zm-6.2 8c.55-1.43 1.55-2.62 2.83-3.32l1.37 1.37A5.992 5.992 0 009 15H5.8zm6.2 4c-2.21 0-4-1.79-4-4h8c0 2.21-1.79 4-4 4zm4.2-4h-3.18a6.002 6.002 0 00-.77-2.65l1.37-1.37c1.28.7 2.28 1.89 2.83 3.32z" />
                </svg>),

            title: "Cash on Delivery",
            details: "Inspect your artifact before completing payment"
        },
        {
            svg: (
                <svg className="w-6 h-6 text-neutral-900" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                </svg>),

            title: "30-Day Effortless Returns",
            details: "Pre-paid courier pickup for peace of mind"
        }

    ]
    return (
        <div className="flex px-43 gap-5 py-5 h-32.5 w-full mt-8 justify-between items-center border-b border-gray-400">
           {cardDetails.map((elem, idx) => (
                <Card 
                    key={idx} 
                    svg={elem.svg} 
                    title={elem.title} 
                    details={elem.details} 
                />
            ))}
        </div>
    )
}


export default Value
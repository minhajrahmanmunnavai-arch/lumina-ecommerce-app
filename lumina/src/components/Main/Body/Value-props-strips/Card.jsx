const Card = (props) => {
    return (
        <div className="flex gap-3 max-w-78 cursor-pointer transition-transform-ease duration-500 hover:scale-101 ">
            <div className="mt-3">
                {props.svg}
            </div>
            <div>
                <h1 className="font-bold text-[18px]">{props.title}</h1>
                <p>{props.details}</p>
            </div>
        </div>
    )
}


export default Card
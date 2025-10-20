
export default function FooterCard(props) {
    return (
        <div className="bg-white rounded-md p-6 flex flex-col gap-1">
            <div>
                <h4 className="font-semibold text-[1.3rem]"> 
                    {props.title}
                    
                    </h4>
            </div>
            <div>
                <p>{props.text}</p>
            </div>
        </div>
    )
}
import { ExclamationCircleIcon } from "@heroicons/react/24/outline";

const Error = ({text}: {text: string}) => {
    return (
        <div className="flex items-center gap-2 m-auto w-full">
            <ExclamationCircleIcon className="size-4 text-red-500" />
            <div>
                <p>Ops, something went wrong</p>    
                <p className="text-sm">{text}</p>
            </div>
        </div>
    )
}

export default Error
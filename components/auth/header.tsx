
interface HeaderProps {
    label: string
}

export const Header = ({ label }: HeaderProps) => {
    return (
        <div className="w-full flex flex-col gap-y-4 items-center justify-center">
            <div className="w-full flex flex-col gap-y-4">
                <h1>{label}</h1>
            </div>
        </div>
    )
}

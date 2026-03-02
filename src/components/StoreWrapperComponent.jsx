import PlatformCardComponent from "./PlatformCardComponent";

export default function StoreWrapperComponent({ children, type }) {
    return (
        <div className="max-w-6xl mx-auto p-4">
            {children}
            <div className="grid grid-cols-3 gap-4 m-2">
                {
                    type.map((item, index) => (
                        <PlatformCardComponent type={item} key={index} />
                    )
                )}
            </div>
        </div>
    )
}
export default function PaymentComponent({ methods }) {
    return (
        <div className="flex flex-col justify-center items-center h-auto w-auto p-8 bg-gray-100 my-10 mx-63 rounded-lg">
            <div className="flex mb-3">
                <h1 className="text-3xl font-bold">Supported Payment Methods</h1>
            </div>
            <div className="flex">
                {
                    methods.map((item) => (
                        <div key={item.id} className="flex flex-col items-center mx-2 p-8" style={{
                            background: item.id === 2 ? "#0288d1" : "#7ecefd",
                            borderRadius: "8px",
                            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                        }}>
                            <img src={item.image} alt={item.title} className="w-16 h-16 rounded-sm" />
                            <p className="text-sm mt-1 font-bold">{item.title}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}
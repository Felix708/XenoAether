export default function Pricing() {
    const tiers = [
        {
            title: "Bronze",
            price: "4.99",
            colorTheme: "text-amber-500",
            headerColor: "bg-gradient-to-r from-amber-500 to-amber-700",
            features: [
                "Access to basic game deals",
                "Daily deal notifications",
                "Community forum access",
                "Standard support"
            ],
            buttonText: "Choose Bronze"
        },
        {
            title: "Silver",
            price: "9.99",
            isPopular: true,
            colorTheme: "text-gray-400",
            headerColor: "bg-gradient-to-r from-gray-300 to-gray-500 text-gray-900",
            features: [
                "Everything in Bronze",
                "Early access to steam sales",
                "Ad-free browsing experience",
                "Priority 24/7 support"
            ],
            buttonText: "Choose Silver"
        },
        {
            title: "Diamond",
            price: "19.99",
            colorTheme: "text-cyan-400",
            headerColor: "bg-gradient-to-r from-cyan-300 to-blue-500",
            features: [
                "Everything in both Silver and Bronze",
                "Exclusive AAA title discounts",
                "Free monthly indie game",
                "Beta access to new features",
                "VIP Discord channel"
            ],
            buttonText: "Choose Diamond"
        }
    ];

    return (
        <section className="bg-gray-50 dark:bg-gray-900 min-h-screen pt-8 pb-24">
            <div className="py-8 px-4 mx-auto max-w-7xl lg:py-16 lg:px-6">
                <div className="mx-auto max-w-3xl text-center mb-12 lg:mb-16">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                        Start Your Membership to Save More!
                    </h2>
                    <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
                        Select a membership tier to unlock exclusive gaming discounts and premium features.
                    </p>
                </div>
                
                <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
                    {tiers.map((tier, index) => (
                        <div key={index} className={`relative flex flex-col mx-auto max-w-lg text-center text-gray-900 bg-white rounded-2xl border ${tier.isPopular ? 'border-gray-200 shadow-md dark:border-gray-700' : 'border-gray-200 shadow dark:border-gray-700'} dark:bg-gray-800 dark:text-white transform transition-all overflow-hidden`}>
                            
                            {tier.isPopular && (
                                <div className="absolute top-4 right-4">
                                    <span className="bg-cyan-100 text-cyan-800 text-xs font-bold px-3 py-1 rounded-full dark:bg-cyan-900 dark:text-cyan-300">
                                        Most Popular
                                    </span>
                                </div>
                            )}

                            <div className={`p-8 ${tier.headerColor} ${tier.headerColor.includes("text-gray-900") ? "text-gray-900" : "text-white"}`}>
                                <h3 className="mb-2 text-3xl font-extrabold tracking-wide uppercase">{tier.title}</h3>
                                <p className="font-medium opacity-90">Best for dedicated gamers.</p>
                            </div>

                            <div className="p-8 flex flex-col grow">
                                <div className="flex justify-center items-baseline mb-8">
                                    <span className="mr-2 text-5xl font-extrabold">${tier.price}</span>
                                    <span className="text-gray-500 dark:text-gray-400">/month</span>
                                </div>
                                <ul role="list" className="mb-8 space-y-2 text-left list-disc list-inside grow lg:mb-12 text-gray-600 dark:text-gray-300">
                                    {tier.features.map((feature, idx) => (
                                        <li key={idx}>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <button
                                    type="button"
                                    className={`w-full mt-auto font-medium rounded-lg text-sm px-5 py-3.5 text-center transition-colors focus:ring-4 focus:outline-none ${
                                        tier.isPopular 
                                        ? 'text-white bg-cyan-600 hover:bg-cyan-700 dark:bg-cyan-500' 
                                        : 'text-white bg-gray-800 hover:bg-gray-900 dark:bg-gray-700'
                                    }`}
                                >
                                    {tier.buttonText}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
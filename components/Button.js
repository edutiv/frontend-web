export default function Button({ children, className }) {
	return (
		<button
			className={`${
				className
					? className
					: "bg-teal-700 hover:bg-teal-600 focus:ring-teal-200 text-white"
			} py-2 text-sm rounded-md transition duration-300 focus:outline-none focus:ring w-full`}
		>
			{children}
		</button>
	);
}

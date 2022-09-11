// external components
import { createContext, useContext, useState } from "react";

const rootContext = createContext(null);

const ContextHandler = ({ children }) => {
	const [submittedBook, setSubmittedBook] = useState("");
	return (
		<>
			<rootContext.Provider value={{ submittedBook, setSubmittedBook }}>
				{children}
			</rootContext.Provider>
		</>
	);
};

export const GetContextApi = () => {
	return useContext(rootContext);
};

export default ContextHandler;

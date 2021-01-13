import { createContext, useState, useEffect } from "react";

export const BookContext = createContext();

export default({ children }) => {
    const [bookIds, setBookIds] = useState({});

    return (
        <BookContext.Provider value={{bookIds, setBookIds}}>
            { children }
        </BookContext.Provider>
    );
}
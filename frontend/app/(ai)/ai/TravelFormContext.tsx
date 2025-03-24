"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

// Define your form data shape based on your schema
interface FormData {
    destination: string;
    purpose: string;
    duration: number;
    traveler: string;
}

// Define context props
interface TravelFormContextProps {
    formData: FormData;
    setFormData: (data: FormData) => void;
    updateFormData: (key: keyof FormData, value: string | number) => void;
}

// Create context with default values
const TravelFormContext = createContext<TravelFormContextProps | undefined>(undefined);

// Provider component
export const TravelFormProvider = ({ children }: { children: ReactNode }) => {
    const [formData, setFormData] = useState<FormData>({
        destination: "",
        purpose: "",
        duration: null as unknown as number,
        traveler: "",
    });

    // Helper function to update a single field
    const updateFormData = (key: keyof FormData, value: string | number) => {
        setFormData((prev) => ({
            ...prev,
            [key]: value,
        }));
    };

    return (
        <TravelFormContext.Provider value={{ formData, setFormData, updateFormData }}>
            {children}
        </TravelFormContext.Provider>
    );
};

// Custom hook for consuming the context
export const useTravelForm = () => {
    const context = useContext(TravelFormContext);
    if (!context) {
        throw new Error("useTravelForm must be used within a TravelFormProvider");
    }
    return context;
};

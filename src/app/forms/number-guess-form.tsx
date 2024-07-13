"use client"

import { useState } from "react";

export default function NumberGuesserForm() {
    const PREFIXES = ["099", "091", "098" , "095"];
    const NUMBER_LENGTH = 6;

    const [phoneNumber, setPhoneNumber] = useState(generateRandomNumber());

    function handleNoClick() {
        setPhoneNumber(e => generateRandomNumber())
    }

    function generateRandomNumber(): string {
        let generatedPhoneNumber = '';
        do {
            generatedPhoneNumber += Math.floor(Math.random() * 10);
        } while (generatedPhoneNumber.length < NUMBER_LENGTH);
        return generatedPhoneNumber;
    }

    function onSubmit(form: FormData) {
        alert(form.get('prefix')?.toString()! + form.get('phoneNumber')?.toString()!);
    }

    return (
        <div>
            <form action={onSubmit} className="flex flex-col gap-5">
                <div className="text-center flex flex-col gap-2">
                    <label className="mx-auto" htmlFor="">Is this your number?</label>
                    <div className="flex gap-3">
                        <div>
                            <select name="prefix" id="prefix" required>
                                {PREFIXES.map((prefix) => (
                                    <option key={prefix} value={prefix}>{prefix}</option>
                                ))}
                            </select>
                        </div>
                         <p className="text-xl font-bold">{phoneNumber}</p>
                    </div>
                   
                    <input type="hidden" name="phoneNumber" required value={phoneNumber} />
                </div>

                <div className="flex gap-5">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md w-[75px]" type="submit">Yes</button>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md w-[75px]" type="button" onClick={() => handleNoClick()}>No</button>

                </div>
            </form>
        </div>
    );
}
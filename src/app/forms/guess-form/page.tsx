"use client";
import { useEffect, useState } from "react";

export default function NumberGuesserForm() {
  const PREFIXES = ["099", "091", "098", "095"];
  const MIN_NUMBER_LENGTH = 6;
  const MAX_NUMBER_LENGTH = 9;
  const DEFAULT_NUMBER_LENGTH = 7;

  const [numberLength, setNumberLength] = useState(DEFAULT_NUMBER_LENGTH);
  const [phoneNumber, setPhoneNumber] = useState("");

  useEffect(() => {
    setPhoneNumber(generateRandomNumber());
  }, []);

  function handleNoClick() {
    setPhoneNumber((e) => generateRandomNumber());
  }

  function handleNumberChange(e: React.ChangeEvent<HTMLInputElement>) {
    setNumberLength(e.currentTarget.value as unknown as number);
  }

  function generateRandomNumber(): string {
    let generatedPhoneNumber = "";
    do {
      generatedPhoneNumber += Math.floor(Math.random() * 10);
    } while (generatedPhoneNumber.length < numberLength);
    return generatedPhoneNumber;
  }

  function onSubmit(form: FormData) {
    alert(
      form.get("prefix")?.toString()! + form.get("phoneNumber")?.toString()!
    );
  }

  return (
    <div className="pt-24">
      <form action={onSubmit} className="flex flex-col gap-5">
        <div className="text-center flex flex-col gap-2 items-center">
          <label className="mx-auto" htmlFor="">
            Is this your number?
          </label>
          <div className="flex gap-3">
            <div>
              <select name="prefix" id="prefix" required>
                {PREFIXES.map((prefix) => (
                  <option key={prefix} value={prefix}>
                    {prefix}
                  </option>
                ))}
              </select>
            </div>
            <p className="text-xl font-bold">{phoneNumber}</p>
          </div>

          <label htmlFor="">Number length:</label>
          <input
            type="number"
            name="numberLength"
            id="numberLength"
            min={MIN_NUMBER_LENGTH}
            max={MAX_NUMBER_LENGTH}
            defaultValue={DEFAULT_NUMBER_LENGTH}
            onChange={(e) => handleNumberChange(e)}
          />

          <input
            type="hidden"
            name="phoneNumber"
            required
            value={phoneNumber}
          />
        </div>

        <div className="flex gap-5 justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 transition delay-100 text-white font-bold py-2 px-4 rounded-md w-[75px]"
            type="submit"
          >
            Yes
          </button>
          <button
            className="bg-red-500 hover:bg-red-700 transition delay-100 text-white font-bold py-2 px-4 rounded-md w-[75px]"
            type="button"
            onClick={() => handleNoClick()}
          >
            No
          </button>
        </div>
      </form>
    </div>
  );
}

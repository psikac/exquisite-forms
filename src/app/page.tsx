import NumberGuesserForm from "./forms/number-guess-form";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        {/* <NumberForm /> */}
        <NumberGuesserForm />
    </main>
  );
}

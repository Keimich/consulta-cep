import { Navbar } from "../components/Navbar";
import { ZipCodeInput } from "../components/ZipCodeInput";
import { NumberQueries } from "../components/NumberQueries";

function HomePage() {
  return (
    <>
    <Navbar />
    <div className="container flex flex-col items-center justify-center py-80 mx-auto gap-4">
      <ZipCodeInput />
      <NumberQueries />
    </div>
    </>
  );
}

export default HomePage;

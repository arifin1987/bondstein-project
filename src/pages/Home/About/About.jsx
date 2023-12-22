import { BsFileBarGraph } from "react-icons/bs";
import { BsWallet } from "react-icons/bs";

const About = () => {
  return (
    <div className="md:flex justify-between bg-slate-100 m-4 p-10 gap-2">
      <div>
        <h1 className="font-extrabold">
          THE AMAZING NFT ART <br /> OF THE WORLD HERE
        </h1>
      </div>

      <div>
        <h2 className="font-bold">
          <div className="flex gap-2">
            <BsWallet />
            Fast Transaction
          </div>
        </h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur <br /> adipisicing elit.
          Adipisci, sit.
        </p>
      </div>
      <div>
        <h2 className="font-bold">
          <div className="flex gap-2">
            <BsFileBarGraph />
            Growth Transaction
          </div>
        </h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur <br /> adipisicing elit.
          Adipisci, sit.
        </p>
      </div>
    </div>
  );
};

export default About;

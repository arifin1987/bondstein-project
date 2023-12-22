const Card = () => {
  return (
    <div className="m-8 md:grid grid-cols-3 ">
      <div>
        <div>
          <img
            className="w-3/4 rounded-md"
            src="../../../../public/card-1.jpg"
            alt=""
          />
          <div>
            <div>
              <div className="flex gap-10 ">
                <div>
                  <h4 className="font-bold">The Futr Abstr</h4>
                  <p>10 in the stock</p>
                </div>
                <div>
                  <p>Highest Bid</p>
                  <p className="font-bold">0.25 ETH</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <div>
            <img
              className="w-1/2 rounded-md"
              src="../../../../public/card-1.jpg"
              alt=""
            />
            <div>
              <div>
                <div className="flex gap-10 ">
                  <div>
                    <h4 className="font-bold">The Futr Abstr</h4>
                    <p>10 in the stock</p>
                  </div>
                  <div>
                    <p>Highest Bid</p>
                    <p className="font-bold">0.25 ETH</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img
              className="w-1/2 rounded-md"
              src="../../../../public/card-1.jpg"
              alt=""
            />
            <div>
              <div>
                <div className="flex gap-10 ">
                  <div>
                    <h4 className="font-bold">The Futr Abstr</h4>
                    <p>10 in the stock</p>
                  </div>
                  <div>
                    <p>Highest Bid</p>
                    <p className="font-bold">0.25 ETH</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img
              className="w-1/2 rounded-md"
              src="../../../../public/card-1.jpg"
              alt=""
            />
            <div>
              <div>
                <div className="flex gap-10 ">
                  <div>
                    <h4 className="font-bold">The Futr Abstr</h4>
                    <p>10 in the stock</p>
                  </div>
                  <div>
                    <p>Highest Bid</p>
                    <p className="font-bold">0.25 ETH</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1 className="font-bold">Top Collections Over</h1>
        <p className="text-blue-500">Last 7 days</p>
        <div className="grid grid-rows-2 gap-4 ">
          <div className="md:flex gap-4">
            <img
              className="w-1/5 rounded-full"
              src="../../../../public/card-1.jpg"
              alt=""
            />
            <p>Crypto</p>
            <p>+28.25%</p>
          </div>
          <div className="md:flex gap-4">
            <img
              className="w-1/5 rounded-full"
              src="../../../../public/card-1.jpg"
              alt=""
            />
            <p>Crypto</p>
            <p>+28.25%</p>
          </div>
          <div className="md:flex gap-4">
            <img
              className="w-1/5 rounded-full"
              src="../../../../public/card-1.jpg"
              alt=""
            />
            <p>Crypto</p>
            <p>+28.25%</p>
          </div>
          <div className="md:flex gap-4">
            <img
              className="w-1/5 rounded-full"
              src="../../../../public/card-1.jpg"
              alt=""
            />
            <p>Crypto</p>
            <p>+28.25%</p>
          </div>
          <div className="md:flex gap-4">
            <img
              className="w-1/5 rounded-full"
              src="../../../../public/card-1.jpg"
              alt=""
            />
            <p>Crypto</p>
            <p>+28.25%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

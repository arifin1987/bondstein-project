const Banner = () => {
  return (
    <div className="md:flex justify-between">
      <div>
        <h1 className="text-4xl font-extrabold">
          DISCOVER AND COLLECT <br></br> DIGITAL ART NFTS
        </h1>
        <p>
          Digital marketplace for crypto collectibles and <br></br>
          non-fungible tokens(NFTs), Buy sell and discover <br></br> exclusive
          digital assets.
        </p>
        <button className="bg-blue-800 text-white rounded-2xl px-4 py-2 mx-4">
          Explore Now
        </button>
        <div className="md:flex  gap-4">
          <p className="font-extrabold text-2xl">
            98k+ <br /> <span className="text-sm">Artwork</span>
          </p>
          <p className="font-extrabold text-2xl">
            12k+ <br /> <span className="text-sm">Auction</span>
          </p>
          <p className="font-extrabold text-2xl">
            15k+ <br /> <span className="text-sm">Artist</span>
          </p>
        </div>
      </div>
      <div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

const UpdateMedForm = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center text-gray-800 rounded-xl bg-gray-50">
      <form>
        <div className="grid grid-cols-1 gap-10">
          <div className="space-y-6">
            {/* Name */}
            <div className="space-y-1 text-sm">
              <label htmlFor="name" className="block text-gray-600">
                Name
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-lime-300 focus:outline-lime-500 rounded-md bg-white"
                name="name"
                id="name"
                type="text"
                placeholder="Product Name"
                required
              />
            </div>
            {/* Category */}
            <div className="space-y-1 text-sm">
              <label htmlFor="category" className="block text-gray-600 ">
                Category
              </label>
              <select
                required
                className="w-full px-4 py-3 border-lime-300 focus:outline-lime-500 rounded-md bg-white"
                name="category"
              >
                <option value="Smartphones">Smartphones</option>
                <option value="Feature Phones">Feature Phones</option>
                <option value="Phone Cases & Covers">
                  Phone Cases & Covers
                </option>
                <option value="Screen Protectors">Screen Protectors</option>
                <option value="Mobile Holders & Mounts">
                  Mobile Holders & Mounts
                </option>
                <option value="Laptops">Laptops</option>
                <option value="Desktop PCs">Desktop PCs</option>
                <option value="Monitors">Monitors</option>
                <option value="Keyboards & Mice">Keyboards & Mice</option>
                <option value="External Hard Drives & SSDs">
                  External Hard Drives & SSDs
                </option>
                <option value="Printers & Scanners">Printers & Scanners</option>
                <option value="USB Hubs & Cables">USB Hubs & Cables</option>
                <option value="Earphones (Wired & Wireless)">
                  Earphones (Wired & Wireless)
                </option>
                <option value="Headphones">
                  Headphones (Over-Ear, On-Ear, In-Ear)
                </option>
                <option value="Bluetooth Speakers">Bluetooth Speakers</option>
                <option value="Smart Glasses">Smart Glasses</option>
                <option value="VR Headsets">VR Headsets</option>
                <option value="DSLRs & Mirrorless Cameras">
                  DSLRs & Mirrorless Cameras
                </option>
                <option value="Action Cameras">
                  Action Cameras (GoPro, DJI)
                </option>
                <option value="Security Cameras">Security Cameras</option>
                <option value="Camera Tripods & Accessories">
                  Camera Tripods & Accessories
                </option>
                <option value="Smart TVs">Smart TVs</option>
                <option value="LED & OLED TVs">LED & OLED TVs</option>
                <option value="Soundbars & Home Theaters">
                  Soundbars & Home Theaters
                </option>
                <option value="Streaming Devices">Streaming Devices</option>
                <option value="Projectors">Projectors</option>
                <option value="Power Banks">Power Banks</option>
                <option value="Fast Chargers">Fast Chargers</option>
                <option value="Wireless Chargers">Wireless Chargers</option>
                <option value="Charging Cables">Charging Cables</option>
                <option value="Smart Lights & Bulbs">
                  Smart Lights & Bulbs
                </option>
                <option value="Car Gadgets">
                  Car Gadgets (Dash Cams, Bluetooth Transmitters)
                </option>
                <option value="Smart Pens & Notebooks">
                  Smart Pens & Notebooks
                </option>
                <option value="Sharee">Sharee</option>
                <option value="3pc set">3pc set</option>
                <option value="Punjabi">Punjabi</option>
                <option value="Shirt">Shirt</option>
                <option value="Pant">Pant</option>
                <option value="Toys">Toys</option>
                <option value="Food">Food</option>
                <option value="Groceries">Groceries</option>
                <option value="Homemade Food">Homemade Food</option>
                <option value="Regional Food">Regional Food</option>
                <option value="Fish">Fish</option>
                <option value="Others">Others</option>
              </select>
            </div>
            {/* Description */}
            <div className="space-y-1 text-sm">
              <label htmlFor="description" className="block text-gray-600">
                Description
              </label>

              <textarea
                id="description"
                placeholder="Write product's description here..."
                className="block rounded-md focus:lime-300 w-full h-32 px-4 py-3 text-gray-800  border border-lime-300 bg-white focus:outline-lime-500 "
                name="description"
              ></textarea>
            </div>
          </div>
          <div className="space-y-6 flex flex-col">
            {/* Price & Quantity */}
            <div className="flex justify-between gap-2">
              {/* Price */}
              <div className="space-y-1 text-sm">
                <label htmlFor="price" className="block text-gray-600 ">
                  Price
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 border border-lime-300 focus:outline-lime-500 rounded-md bg-white"
                  name="price"
                  id="price"
                  type="number"
                  placeholder="Price per unit"
                  required
                />
              </div>

              {/* Quantity */}
              <div className="space-y-1 text-sm">
                <label htmlFor="quantity" className="block text-gray-600">
                  Quantity
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 border border-lime-300 focus:outline-lime-500 rounded-md bg-white"
                  name="quantity"
                  id="quantity"
                  type="number"
                  placeholder="Available quantity"
                  required
                />
              </div>
            </div>
            {/* Image */}
            <div className=" p-4  w-full  m-auto rounded-lg flex-grow">
              <div className="file_upload px-5 py-3 relative border-4 border-dotted border-gray-300 rounded-lg">
                <div className="flex flex-col w-max mx-auto text-center">
                  <label>
                    <input
                      className="text-sm cursor-pointer w-36 hidden"
                      type="file"
                      name="image"
                      id="image"
                      accept="image/*"
                      hidden
                    />
                    <div className="bg-lime-500 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-lime-500">
                      Upload Image
                    </div>
                  </label>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-lime-500 "
            >
              Update Medicine
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default UpdateMedForm
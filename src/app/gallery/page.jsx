"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import categories from "@/utils/galleryFilter";
import { getAllImages } from "@/services/galleryService";
import toast from "react-hot-toast";

export default function App() {
  const [lightboxImage, setLightboxImage] = useState(null);
  const [sortBy, setSortBy] = useState("newest");
  const [category, setCategory] = useState("");
  const [galleryImages, setGalleryImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchGallery = async () => {
    setLoading(true);
    try {
      const query = `category=${category}&sort=${sortBy}`;
      const response = await getAllImages(query);
      if (response.status) {
        setGalleryImages(response.data);
      } else {
        toast.error(response.message || "Failed to fetch the Images");
      }
    } catch (error) {
      console.error("Error fetching images:", error);
      toast.error("Something went wrong while fetching images");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchGallery();
  }, [category, sortBy])

  const filteredAndSortedData = galleryImages;

  return (
    <div className="!min-h-screen !bg-gray-50">
      {/* Header Section */}
      <div className="!bg-white !border-b !my-14 md:my-7 !top-20 ">
        <div className="!max-w-7xl !mx-auto !px-4 sm:!px-6 lg:!px-8 !py-6">
          <h1 className="!text-5xl !font-bold !text-gray-900 !mb-4">Gallery</h1>

          <div className="!flex !flex-col md:!flex-row !gap-4">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="!px-4 !py-2 !border !border-gray-300 !rounded-lg focus:!ring-2 focus:!ring-blue-500 focus:!border-transparent"
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
            </select>
          </div>

          {categories?.length > 0 && (
            <div className="!mt-4 !p-4 !bg-gray-50 !rounded-lg">
              <h3 className="!text-sm !font-semibold !text-gray-700 !mb-3">Categories</h3>
              <div className="!flex !flex-wrap !gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setCategory(cat === "All" ? "" : cat)}
                    className={`!px-4 !py-1.5 !rounded-full !text-sm !transition-colors ${category === cat
                      ? "!bg-blue-600 !text-white"
                      : "!bg-white !text-gray-700 !border !border-gray-300 hover:!bg-gray-100"
                      }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="!max-w-7xl !mx-auto !px-4 sm:!px-6 lg:!px-8 !py-8">
        <div className="!mb-4 !text-sm !text-gray-600">
          Showing {galleryImages?.length} images
        </div>

        {filteredAndSortedData.length === 0 ? (
          <div className="!text-center !py-20">
            <p className="!text-gray-500">No images found matching your criteria</p>
          </div>
        ) : (
          <div className="!grid !grid-cols-2 md:!grid-cols-4 !gap-4">
            {filteredAndSortedData.map((item, idx) => (
              <div
                key={item._id}
                className="!aspect-square !overflow-hidden !cursor-pointer group !relative !bg-white !rounded-lg !shadow-sm hover:!shadow-md !transition-shadow"
                onClick={() => setLightboxImage(item)}
              >
                <img
                  src={item.image}
                  alt={item.idx}
                  className="!w-full !h-full !object-cover !transition-transform !duration-300 group-hover:!scale-105"
                />
                <div className="!absolute !inset-0 !bg-gradient-to-t from-black/60 via-transparent to-transparent !opacity-0 group-hover:!opacity-100 !transition-opacity">
                  <div className="!absolute !bottom-0 !left-0 !right-0 !p-3">
                    <span className="!inline-block !px-2 !py-1 !bg-white/90 !text-xs !font-medium !text-gray-900 !rounded">
                      {item.category}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="!fixed !inset-0 !bg-black !bg-opacity-95 !z-50 !flex !items-center !justify-center !p-4"
          onClick={() => setLightboxImage(null)}
        >
          <button
            onClick={() => setLightboxImage(null)}
            className="!absolute !top-4 !right-4 !text-white hover:!text-gray-300 !transition-colors"
          >
            <X className="!w-8 !h-8" />
          </button>

          <div className="!max-w-5xl !w-full" onClick={(e) => e.stopPropagation()}>
            <img src={lightboxImage.image} alt={lightboxImage.image} className="!w-full !h-auto !rounded-lg" />
            <div className="!mt-4 !text-center">
              <h3 className="!text-white !text-xl !font-medium">{lightboxImage.image}</h3>
              <p className="!text-gray-400 !text-sm !mt-1">{lightboxImage.category}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
'use client'

import { getAllImages } from "@/services/galleryService";
import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [category, setCategory] = useState("All");
  const [loading, setLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const fetchImages = async () => {
    setLoading(true);
    try {
      const query = category && category !== "All" ? `category=${category}` : "";
      const response = await getAllImages(query);

      if (response.status) {
        setImages(response.data || []);
      } else {
        toast.error(response.message || "Failed to fetch the images");
      }
    } catch (error) {
      console.error("Error fetching images:", error);
      toast.error("Something went wrong while fetching images");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchImages();
  }, [category])

  return (
    <>
<section className="!py-16 bg-gradient-to-br from-cyan-100 via-white to-blue-200">

        <div className="!container !mx-auto !px-4 !max-w-7xl">
          {/* Header */}
          <div className="!text-center !mb-12">
            <h2 className="!tracking-tight !text-4xl md:!text-5xl !font-bold !text-gray-800 !mb-4">
              Our Gallery
            </h2>
            <p className="!text-lg !text-gray-600 !max-w-2xl !mx-auto">
              Explore our work and see the transformations we've created for our patients
            </p>
          </div>

          {/* Category Filter Tabs */}
          {/* <div className="!flex !flex-wrap !justify-center !gap-3 !mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`
                  !px-6 !py-2.5 !rounded-full !font-medium !transition-all !duration-300
                  ${category === cat 
                    ? '!bg-blue-600 !text-white !shadow-lg !shadow-blue-600/30 !scale-105' 
                    : '!bg-white !text-gray-600 hover:!bg-gray-100 hover:!text-gray-800 !border !border-gray-200'
                  }
                `}
              >
                {cat}
              </button>
            ))}
          </div> */}

          {/* Gallery Content */}
          <div className="!relative">
            {loading ? (
              <div className="!flex !flex-col !items-center !justify-center !py-20">
                <div className="!w-12 !h-12 !border-4 !border-blue-600 !border-t-transparent !rounded-full !animate-spin !mb-4"></div>
                <p className="!text-gray-500 !text-lg">Loading images...</p>
              </div>
            ) : (
              <>
                {images.length > 0 ? (
                  <div className="!grid !grid-cols-1 sm:!grid-cols-2 md:!grid-cols-3 lg:!grid-cols-4 !gap-4">
                    {images.map((image, idx) => (
                      <div
                        key={image._id || idx}
                        onClick={() => setSelectedImage(image?.image)}
                        className="!group !relative !overflow-hidden !rounded-xl !cursor-pointer !bg-white !shadow-md hover:!shadow-xl !transition-all !duration-300"
                      >
                        <div className="!aspect-square !overflow-hidden">
                          <img
                            src={image?.image || "/placeholder.jpg"}
                            loading="lazy"
                            alt={image?.category || "gallery image"}
                            className="!w-full !h-full !object-cover group-hover:!scale-110 !transition-transform !duration-500"
                          />
                        </div>
                        
                        {/* Overlay */}
                        <div className="!absolute !inset-0 !bg-gradient-to-t !from-black/60 !via-black/20 !to-transparent !opacity-0 group-hover:!opacity-100 !transition-opacity !duration-300">
                          <div className="!absolute !bottom-0 !left-0 !right-0 !p-4">
                            <p className="!text-white !font-medium !text-sm">
                              {image?.category || "Gallery"}
                            </p>
                          </div>
                          
                          {/* Zoom Icon */}
                          <div className="!absolute !inset-0 !flex !items-center !justify-center">
                            <div className="!bg-white/90 !rounded-full !p-3 !transform !scale-0 group-hover:!scale-100 !transition-transform !duration-300">
                              <svg 
                                className="!w-6 !h-6 !text-gray-800" 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                              >
                                <path 
                                  strokeLinecap="round" 
                                  strokeLinejoin="round" 
                                  strokeWidth={2} 
                                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" 
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="!text-center !py-20">
                    <svg 
                      className="!w-24 !h-24 !mx-auto !text-gray-300 !mb-4" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={1.5} 
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" 
                      />
                    </svg>
                    <p className="!text-gray-500 !text-lg !mb-2">
                      No images found
                    </p>
                    <p className="!text-gray-400">
                      {category !== "All" && `Try selecting a different category`}
                    </p>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="!fixed !inset-0 !z-50 !flex !items-center !justify-center !bg-black/90 !backdrop-blur-sm !p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="!relative !max-w-5xl !max-h-[90vh]">
            <img
              src={selectedImage}
              alt="Gallery preview"
              className="!w-full !h-full !object-contain"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="!absolute !top-4 !right-4 !bg-white/90 !rounded-full !p-2 hover:!bg-white !transition-colors"
            >
              <svg 
                className="!w-6 !h-6 !text-gray-800" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12" 
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
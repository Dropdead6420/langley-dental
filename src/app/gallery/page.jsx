"use client";
import { useState, useMemo } from "react";
import { X, Search, SlidersHorizontal } from "lucide-react";

export default function App() {
  const [lightboxImage, setLightboxImage] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("newest");
  const [showFilters, setShowFilters] = useState(false);

  const mockGalleryData = [
  {
    id: 1,
    image:
      "https://images.pexels.com/photos/4269692/pexels-photo-4269692.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Dentist treating a patient in clinic",
    category: "Treatment",
    date: "2024-03-25",
  },
  {
    id: 2,
    image:
      "https://plus.unsplash.com/premium_photo-1681966962522-546f370bc98e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGVudGlzdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=1000",
    alt: "Dental surgeon performing oral surgery",
    category: "Surgery",
    date: "2024-03-10",
  },
  {
    id: 3,
    image:
      "https://plus.unsplash.com/premium_photo-1663088767412-b10c8dc27ad1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGRlbnRpc3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=1000",
    alt: "Dental hygiene training session",
    category: "Education",
    date: "2024-02-28",
  },
  {
    id: 4,
    image:
      "https://cdn.prod.website-files.com/633daa121f1308def083b05d/633dcdd7948ee4b287177584_pexels-polina-zimmerman-4687360.webp",
    alt: "Modern dental equipment setup",
    category: "Equipment",
    date: "2024-02-20",
  },
  {
    id: 5,
    image:
      "https://cdn.prod.website-files.com/633daa121f1308def083b05d/633dcdd8f8e729726c866a0c_pexels-cedric-fauntleroy-4269361.webp",
    alt: "Dental model used for demonstration",
    category: "Education",
    date: "2024-02-15",
  },
  {
    id: 6,
    image:
      "https://images.pexels.com/photos/4269690/pexels-photo-4269690.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Dentist consulting patient",
    category: "Consultation",
    date: "2024-01-30",
  },
  {
    id: 7,
    image:
      "https://cdn.prod.website-files.com/633daa121f1308def083b05d/633dcddd0fc6852af40f954b_pexels-cedric-fauntleroy-4269942.webp",
    alt: "Dental hygiene awareness class",
    category: "Education",
    date: "2024-01-22",
  },
  {
    id: 8,
    image:
      "https://images.pexels.com/photos/8460158/pexels-photo-8460158.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Modern dental office interior",
    category: "Facility",
    date: "2024-01-10",
  },
  {
    id: 9,
    image:
      "https://cdn.prod.website-files.com/633daa121f1308def083b05d/63440f6f3c42c434c4a70131_pexels-cedric-fauntleroy-4269931%20(1).webp",
    alt: "Teeth cleaning procedure close-up",
    category: "Treatment",
    date: "2024-03-18",
  },
  {
    id: 10,
    image:
      "https://plus.unsplash.com/premium_photo-1675686363507-22a8d0e11b4c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZGVudGlzdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=1000",
    alt: "Dentist explaining orthodontic plan",
    category: "Consultation",
    date: "2024-03-05",
  },
  {
    id: 11,
    image:
      "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGRlbnRpc3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=1000",
    alt: "Dental assistant holding mirror during exam",
    category: "Treatment",
    date: "2024-02-25",
  },
  {
    id: 12,
    image:
      "https://cdn.prod.website-files.com/633daa121f1308def083b05d/633dcddd0fc6852af40f954b_pexels-cedric-fauntleroy-4269942.webp",
    alt: "Team of dentists during oral surgery",
    category: "Surgery",
    date: "2024-02-10",
  },
];


  const categories = ["All", "Treatment", "Surgery", "Education", "Equipment", "Consultation", "Facility"];

  const filteredAndSortedData = useMemo(() => {
    let filtered = mockGalleryData.filter((item) => {
      const matchesSearch = item.alt.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });

    filtered.sort((a, b) => {
      if (sortBy === "newest") {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      } else {
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      }
    });

    return filtered;
  }, [searchTerm, selectedCategory, sortBy]);

  return (
    <div className="!min-h-screen !bg-gray-50">
      {/* Header Section */}
      <div className="!bg-white !border-b !my-14 md:my-7 !top-20 ">
        <div className="!max-w-7xl !mx-auto !px-4 sm:!px-6 lg:!px-8 !py-6">
          <h1 className="!text-5xl !font-bold !text-gray-900 !mb-4">Gallery</h1>

          <div className="!flex !flex-col md:!flex-row !gap-4">
            <div className="!flex-1 !relative">
              <Search className="!absolute !left-3 !top-1/2 !-translate-y-1/2 !text-gray-400 !w-5 !h-5" />
              <input
                type="text"
                placeholder="Search images..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="!w-full !pl-10 !pr-4 !py-2 !border !border-gray-300 !rounded-lg focus:!ring-2 focus:!ring-blue-500 focus:!border-transparent"
              />
            </div>

            <button
              onClick={() => setShowFilters(!showFilters)}
              className="!flex !items-center !gap-2 !px-4 !py-2 !border !border-gray-300 !rounded-lg hover:!bg-gray-50 !transition-colors"
            >
              <SlidersHorizontal className="!w-5 !h-5" />
              <span>Filters</span>
            </button>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="!px-4 !py-2 !border !border-gray-300 !rounded-lg focus:!ring-2 focus:!ring-blue-500 focus:!border-transparent"
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
            </select>
          </div>

          {showFilters && (
            <div className="!mt-4 !p-4 !bg-gray-50 !rounded-lg">
              <h3 className="!text-sm !font-semibold !text-gray-700 !mb-3">Categories</h3>
              <div className="!flex !flex-wrap !gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`!px-4 !py-1.5 !rounded-full !text-sm !transition-colors ${
                      selectedCategory === category
                        ? "!bg-blue-600 !text-white"
                        : "!bg-white !text-gray-700 !border !border-gray-300 hover:!bg-gray-100"
                    }`}
                  >
                    {category}
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
          Showing {filteredAndSortedData.length} of {mockGalleryData.length} images
        </div>

        {filteredAndSortedData.length === 0 ? (
          <div className="!text-center !py-20">
            <p className="!text-gray-500">No images found matching your criteria</p>
          </div>
        ) : (
          <div className="!grid !grid-cols-2 md:!grid-cols-4 !gap-4">
            {filteredAndSortedData.map((item) => (
              <div
                key={item.id}
                className="!aspect-square !overflow-hidden !cursor-pointer group !relative !bg-white !rounded-lg !shadow-sm hover:!shadow-md !transition-shadow"
                onClick={() => setLightboxImage(item)}
              >
                <img
                  src={item.image}
                  alt={item.alt}
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
            <img src={lightboxImage.image} alt={lightboxImage.alt} className="!w-full !h-auto !rounded-lg" />
            <div className="!mt-4 !text-center">
              <h3 className="!text-white !text-xl !font-medium">{lightboxImage.alt}</h3>
              <p className="!text-gray-400 !text-sm !mt-1">{lightboxImage.category}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

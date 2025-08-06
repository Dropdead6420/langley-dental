import React from 'react'

const Services = () => {
    const services = [
  {
    title: "General Dentistry",
    description: "Patient can get general treatments with single sitting.",
    image: "https://cdn.prod.website-files.com/656d63a5a8c1cffefeee75d0/6571595b87e6de31df8e25b0_service-01.jpg",
    icon: "https://cdn.prod.website-files.com/656d63a5a8c1cffefeee75d0/6571598b987ad31d4ca923ea_clinic.svg",
    link: "/services/general-dentistry",
  },
  {
    title: "Dental Implants",
    description: "Patient can get general treatments with single sitting.",
    image: "https://cdn.prod.website-files.com/656d63a5a8c1cffefeee75d0/657159b17edc226931b9a739_service-02.jpg",
    icon: "https://cdn.prod.website-files.com/656d63a5a8c1cffefeee75d0/6571597682dfecc9c1dbcf86_dental-implant.svg",
    link: "/services/dental-implants",
  },
  {
    title: "Cavity Protection",
    description: "Patient can get general treatments with single sitting.",
    image: "https://cdn.prod.website-files.com/656d63a5a8c1cffefeee75d0/65715ce55262312767b4dbc5_service-05.jpg",
    icon: "https://cdn.prod.website-files.com/656d63a5a8c1cffefeee75d0/65715cedc41731789d25f9e6_periodontal-scaler.svg",
    link: "/services/cavity-protection",
  },
  {
    title: "Paradontosis",
    description: "Patient can get general treatments with single sitting.",
    image: "https://cdn.prod.website-files.com/656d63a5a8c1cffefeee75d0/65715caa17defee615ed90a2_service-04.jpg",
    icon: "https://cdn.prod.website-files.com/656d63a5a8c1cffefeee75d0/65715cc017defee615ed9a65_root-canal.svg",
    link: "/services/paradontosis",
  },
  {
    title: "Teeth Whitening",
    description: "Patient can get general treatments with single sitting.",
    image: "https://cdn.prod.website-files.com/656d63a5a8c1cffefeee75d0/65715c750888a8c72afeff9a_service-03.jpg",
    icon: "https://cdn.prod.website-files.com/656d63a5a8c1cffefeee75d0/65715c8219f5eea4b0665af4_dental-care.svg",
    link: "/services/teeth-whitening",
  },
  {
    title: "Radiographs",
    description: "Patient can get general treatments with single sitting.",
    image: "https://cdn.prod.website-files.com/656d63a5a8c1cffefeee75d0/65715d2984999b1ed9f56873_service-06.jpg",
    icon: "https://cdn.prod.website-files.com/656d63a5a8c1cffefeee75d0/65715d559da5271e8990bc41_happy-tooth.svg",
    link: "/services/radiographs",
  },
];
  return (
      <section>
      <div className="section-gap">
        <div className="w-layout-blockcontainer container w-container">
              <div className="flex justify-center items-center gap-2 mb-2">
        <div className="w-2 h-2 rounded-full bg-blue-500"></div>
        <span className="text-sm font-medium tracking-widest text-gray-600 uppercase">
          Our Services
        </span>
      </div>
      <h2 className="text-4xl md:text-6xl jost-font font-bold text-[#0d072c] leading-tight text-center">
        Dentistry for the whole <br /> Family
      </h2>

          <div className="service-two w-dyn-list">
            <div className="service-two-list grid w-dyn-items">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="service-two-item w-dyn-item"
                  style={{
                    opacity: 1,
                    transform:
                      "translate3d(0px, 0px, 0px) scale3d(1,1,1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                    transformStyle: "preserve-3d",
                  }}
                >
                  <a href={service.link} className="service-two-link w-inline-block">
                    <div className="service-two-image-wrap">
                      <img
                        src={service.image}
                        alt=""
                        className="service-two-image"
                        width={500}
                        height={250}
                        loading="lazy"
                        style={{
                          transform:
                            "translate3d(0px, 0px, 0px) scale3d(1,1,1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                          transformStyle: "preserve-3d",
                          borderBottomColor: "rgba(0,0,0,0)",
                          willChange: "transform",
                        }}
                      />
                    </div>
                    <div className="service-two-icon-wrap">
                      <div className="service-two-icon-border">
                        <img src={service.icon} alt="Service Icon" className="service-two-icon" loading="lazy" />
                      </div>
                    </div>
                    <div className="service-two-overlay">
                      <h4 className="service-two-title">{service.title}</h4>
                      <div className="service-two-line"></div>
                      <div className="service-two-text">{service.description}</div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
    
  )
}

export default Services

// Personalbranding.js
import React, { useState } from "react";
import BrandingModal from "./BrandingModal";
import VideoResumeModal from "./VideoResumeModal"
import "../css/Personalbranding.css";
import Kit from "../Images/Kit.png";
import vds from "../Images/vds.png";
import Vdt from "../Images/Vdt.png";
import pwd from "../Images/pwd.png";
import Youtube from "../Images/Youtube.png";
import { HiHand } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
const Personalbranding = () => {
  const [logoIdModalOpen, setLogoIdModalOpen] = useState(false);
  const [videoTestimonialModalOpen, setVideoTestimonialModalOpen] =
    useState(false);
  const [videoResumeModalOpen, setVideoResumeModalOpen] = useState(false);

  const openLogoIdModal = () => setLogoIdModalOpen(true);
  const closeLogoIdModal = () => setLogoIdModalOpen(false);

  const openVideoTestimonialModal = () => setVideoTestimonialModalOpen(true);
  const closeVideoTestimonialModal = () => setVideoTestimonialModalOpen(false);

  const openVideoResumeModal = () => setVideoResumeModalOpen(true);
  const closeVideoResumeModal = () => setVideoResumeModalOpen(false);

  const handleOnclick = () => {
    openLogoIdModal();
  };

  const handleOnclickVideo = () => {
    openVideoTestimonialModal();
  };

  const handleOnclickWebsite = () => {
    openVideoResumeModal();
  };

  return (
    <div>
      <div
        className="branding-heading"
        data-aos="fade-up"
        data-aos-anchor-placement="bottom-center"
        id="branding"
      >
        <h1>Personal Branding Solutions</h1>
        <p>
          Your personal brand is very vital to you professionally. It is how you
          present yourself to potential employers. We provide you with solutions
          to ensure that employers see you in the way you want them to!
        </p>
      </div>

      <div className="main-branding">
        <div className="main-box" data-aos="zoom-out-right">
          <div className="brand-box-container">
            <div className="brand-box-1" onClick={handleOnclick}>
              <img src={Kit} alt="" width={200} />
            </div>
            <div className="brand-box-2">
              <p>Logo Id Kits</p>
            </div>
          </div>

          <div className="brand-box-container">
            <div className="brand-box-1" onClick={handleOnclickVideo}>
              <img src={vds} alt="" width={200} />
            </div>
            <div className="brand-box-2">
              <p>Video Testimonial</p>
            </div>
          </div>

          <div className="brand-box-container">
            <div className="brand-box-1" onClick={handleOnclickWebsite}>
              <img src={Vdt} alt="" width={200} />
            </div>
            <div className="brand-box-2">
              <p>Video Resume</p>
            </div>
          </div>

          <div className="brand-box-container">
            <div className="brand-box-1">
              <img src={pwd} alt="" width={200} />
            </div>
            <div className="brand-box-2">
              <p>Personalised websites</p>
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      <BrandingModal
        isOpen={logoIdModalOpen}
        onRequestClose={closeLogoIdModal}
        handleSubmit={() => {
          // Handle form submission logic for Logo Id Kit
          // ...
          closeLogoIdModal(); // Close the modal after submission
        }}
      />

      <BrandingModal
        isOpen={videoTestimonialModalOpen}
        onRequestClose={closeVideoTestimonialModal}
        handleSubmit={() => {
          // Handle form submission logic for Video Testimonial
          // ...
          closeVideoTestimonialModal(); // Close the modal after submission
        }}
      />

      <VideoResumeModal
        isOpen={videoResumeModalOpen}
        onRequestClose={closeVideoResumeModal}
        handleSubmit={() => {
          // Handle form submission logic for Video Resume
          // ...
          closeVideoResumeModal(); // Close the modal after submission
        }}
      />
    </div>
  );
};

export default Personalbranding;

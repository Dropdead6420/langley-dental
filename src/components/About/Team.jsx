"use client"

import { getAllTeam } from "@/services/teamService";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const Team = () => {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchOurTeams = async () => {
    setLoading(true);
    try {
      const response = await getAllTeam();
      if (response.status) {
        setTeams(response.data);
      } else {
        toast.error(response.message || "Failed to fetch the Blogs");
      }
    } catch (error) {
      console.error("Error fetching blogs:", error);
      toast.error("Something went wrong while fetching blogs");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchOurTeams();
  }, [])

  if (loading) {
    return null;
  }

  return (
    teams.length === 0 ? null : <section className="section about-b-team-section">
      <div className="w-layout-blockcontainer main-container w-container">
        <div className="headline-about-b-team">
          <div className="text-h3">Meet the team</div>
        </div>
        <div className="about-b-team">
          <div className="w-layout-grid team-grid">
            {teams?.map((team, idx) => (
              <div
                key={idx}
                data-w-id="73fefbbb-0330-2f67-2787-7348b235a4dd"
                className="member-card wow fadeInUp"
              >
                <div
                  data-w-id="35200175-5a43-00d1-84f8-035f8728f63f"
                  className="member-card wow fadeInUp"
                >
                  <div className="member-image">
                    <img
                      src={team.image?.url || "/assets/images/team/satpreet-singh.png"}
                      loading="lazy"
                      sizes="(max-width: 479px) 100vw, (max-width: 767px) 92vw, 94vw"
                      alt={team.image?.alt || team?.name}
                      className="image-cover"
                    />
                  </div>
                  <div className="member-info-tile">
                    <div className="text-medium">{team?.name || "Dr. Satpreet Singh"}</div>
                    <div className="member-profession">{team?.designation || "Dentist"}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;

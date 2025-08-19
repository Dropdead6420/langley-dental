import React from "react";

const Content = ({treatment}) => {
  return (
    <section className="section article-section">
      <div className="w-layout-blockcontainer main-container small-container w-container">
        <div className="master-article-body">
          <div className="wrap-article-body">
           <div
           dangerouslySetInnerHTML={{ __html: treatment?.content }}
           >
           </div>
          </div>
       
        </div>
      </div>
    </section>
  );
};

export default Content;

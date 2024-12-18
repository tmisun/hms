import React from "react";
import styles from "./card.module.scss";

const Card = ({card}) => {
  return (
    <div className={styles.card + " " + card.className}>
      <a href={card.url} target="_blank" className={styles.card_inner + ' grid_column'}>
    
        
        
        <div className={styles.item_content}>
            
            <div className={styles.content}>

              {/* <div className={styles.num}>
                
                <em className={styles.bline}>0{card.index}</em>
  
                  
              </div> */}
              <div>
                <h3 className={styles.title}>
                  <span>{card.title}</span>
                </h3>
                <p className={styles.txt}>{card.description}</p>
                
              </div>
              
              <div className={styles.tag_list}>

                {card.tagList.map((tag) => <em className={styles.tag}>#{tag}</em> )}

              </div>
              {
                card.url ? 
                <div className={styles.icon_arr}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" className={styles.icon}>
                      <path d="M14.5107 25.48L24.9217 15.0691" stroke-linecap="square" stroke-linejoin="round"></path>
                      <path d="M14.5107 14.522H25.4696V25.4809" stroke-linecap="square"></path>
                      <rect x="0.5" y="0.5" width="39" height="39" rx="19.5"></rect>
                  </svg>                            
                </div>
                : ""
              }
                
              
            </div>               
                                            
            
        </div>
        
        
        <div className={styles.item_img}>

          {
              card.video ? 
              <video src={card.video} className={styles.bg} muted></video>
              :
              <img src={card.image} className={styles.bg} alt="" />
          }




          {/* <div className={styles.notebook}>
            <div className={styles.inner}>
                
            </div>
          </div> */}

        </div>
      </a>
      <div className="grid_column">
        <div className={styles.item_line}></div>
      </div>
    </div>
  );
};

export default Card;

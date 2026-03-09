import React from "react";
import { motion } from "framer-motion";
import pic1 from "../../assets/pic1.jpeg";
import pic2 from "../../assets/pic2.jpeg";
import pic3 from "../../assets/pic3.jpeg";
import pic4 from "../../assets/pic4.jpeg";
import pic5 from "../../assets/pic5.jpeg";
import pic6 from "../../assets/pic6.jpeg";
import pic7 from "../../assets/pic7.jpeg";
import pic8 from "../../assets/pic8.jpeg";
import Wrapper from "../UI/Wrapper";
import classes from "./Gallery.module.css";

const items = [
  { key: "g1", src: pic1, caption: "Delivering excellence across the U.S.", area: "a" },
  { key: "g2", src: pic2, caption: "Trusted by federal agencies", area: "b" },
  { key: "g3", src: pic3, caption: "Quality products, on time", area: "c" },
  { key: "g4", src: pic4, caption: "Our team in action", area: "d" },
  { key: "g5", src: pic5, caption: "Committed to public service", area: "e" },
  { key: "g6", src: pic6, caption: "National supply operations", area: "f" },
  { key: "g7", src: pic7, caption: "Logistics and distribution", area: "g" },
  { key: "g8", src: pic8, caption: "Government contracting expertise", area: "h" },
];

const Gallery = () => (
  <Wrapper>
    <section className={classes["gallery-section"]}>
      <motion.div
        className={classes["gallery-header"]}
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: [0.2, 0.65, 0.3, 0.9], duration: 1.5 }}
        viewport={{ once: true, amount: 0.6 }}
      >
        <p className={classes["gallery-title"]}>Our Work in Action</p>
        <motion.hr
          className={classes["gallery-hr"]}
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          transition={{ ease: [0.2, 0.65, 0.3, 0.9], duration: 2 }}
          viewport={{ once: true, amount: 0.6 }}
        />
      </motion.div>

      <div className={classes["photo-grid"]}>
        {items.map((item, index) => (
          <motion.div
            key={item.key}
            className={`${classes["photo-item"]} ${classes[`area-${item.area}`]}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: [0.2, 0.65, 0.3, 0.9], duration: 0.9, delay: index * 0.12 }}
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ scale: 1.02, zIndex: 2 }}
          >
            <img src={item.src} alt={item.caption} className={classes["photo-img"]} />
            <div className={classes["photo-overlay"]}>
              <p className={classes["photo-caption"]}>{item.caption}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  </Wrapper>
);

export default Gallery;
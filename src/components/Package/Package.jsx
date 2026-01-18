import React from "react";
import packageclasses from "./Package.module.css";
import PackageCard from "../UI/PackageCard";
import { motion } from "framer-motion";
import { IconContext } from "react-icons";
import Carousel from "../UI/Carousel";

import baltimore from "../../assets/clients/baltimore-county.webp";
import bcps from "../../assets/clients/bcps.webp";
import coastGuard from "../../assets/clients/coast-guard.webp";
import defense from "../../assets/clients/defense.webp";
import marineCorps from "../../assets/clients/marine-corps.webp";
import navalLab from "../../assets/clients/naval-lab.webp";
import navy from "../../assets/clients/navy.webp";
import usda from "../../assets/clients/usda.webp";
import alpha from "../../assets/suppliers/alpha.webp";
import carrollMotor from "../../assets/suppliers/carroll-motor.webp";
import ingersoll from "../../assets/suppliers/ingersoll.webp";
import mightyMax from "../../assets/suppliers/mighty-max.webp";
import millikenMedical from "../../assets/suppliers/milliken-medical.webp";
import practicon from "../../assets/suppliers/practicon.webp";
import ww from "../../assets/suppliers/ww.webp";
import sba from "../../assets/sba.webp";
import sbaMaryland from "../../assets/maryland-sba.webp"

const mainTitleAnimation = {
  hidden: { opacity: 0, y: -90 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.2, 0.65, 0.3, 0.9],
      duration: 2,
    },
  },
};

const lineanimate = {
  hidden: {
    width: 0,
  },
  visible: {
    width: "100%",
    transition: {
      ease: [0.2, 0.65, 0.3, 0.9],
      duration: 2,
    },
  },
};

const fadeinAnimate = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      ease: [0.2, 0.65, 0.3, 0.9],
      duration: 2,
    },
  },
};

const cardreveal = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 20,
    transition: {
      type: "spring",
      stiffness: 200,
    },
  },
};

const clients = [
  {
    src: baltimore,
    alt: "Baltimore County",
  },
  {
    src: bcps,
    alt: "Baltimore County Public Schools",
  },
  {
    src: coastGuard,
    alt: "United States Coast Guard",
  },
  {
    src: defense,
    alt: "Department of Defense",
  },
  {
    src: marineCorps,
    alt: "United States Marine Corps",
  },
  {
    src: navalLab,
    alt: "Naval Research Laboratory",
  },
  {
    src: navy,
    alt: "United States Navy",
  },
  {
    src: usda,
    alt: "United States Department of Agriculture",
  },
];



const suppliers = [
  {
    src: alpha,
    alt: "Alpha",
  },
  {
    src: carrollMotor,
    alt: "Carroll Motor Fuels",
  },
  {
    src: ingersoll,
    alt: "Ingersoll Rand",
  },
  {
    src: mightyMax,
    alt: "Mighty Max",
  },
  {
    src: millikenMedical,
    alt: "Milliken Medical",
  },
  {
    src: practicon,
    alt: "Practicon",
  },
  {
    src: ww,
    alt: "WW",
  },
];


const Package = () => {
  const PackageCardMotion = motion(PackageCard);
  return (
    <aside className={packageclasses["package-wrapper"]}>
      <div id="package" className={packageclasses["package-info__div"]}>
        <motion.h4
          variants={mainTitleAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
          className={packageclasses.title}
        >
          Our Network of Clients and Suppliers
        </motion.h4>
        <motion.hr
          variants={lineanimate}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
        />
        <motion.p
          variants={fadeinAnimate}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
        >
          Our Clients
        </motion.p>
        <div className={packageclasses["package-card__info"]}>
          <Carousel 
            items={clients}
          /> 
        </div>
        <motion.p
          variants={fadeinAnimate}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
        >
          Our Suppliers
        </motion.p>
        <div className={packageclasses["package-card__info"]}>
          <Carousel 
            items={suppliers}
          /> 
        </div>
        <motion.p
          variants={fadeinAnimate}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
        >
          Our Certifications
        </motion.p>
        <div className={packageclasses["package-card__info"]}>
          <img
            src={sba}
            alt="Small Business Certification"
            style={{height:"150px", width:"auto"}}
          />
          <img
            src={sbaMaryland}
            alt="Small Business Certification"
            style={{height:"150px", width:"auto"}}
          />
        </div>

      </div>
    </aside>
  );
};

export default Package;

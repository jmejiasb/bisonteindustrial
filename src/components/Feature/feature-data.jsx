import { AiOutlineLike } from "react-icons/ai";
import { BiCheckCircle } from "react-icons/bi";
import { LuTarget } from "react-icons/lu";
import { AiOutlineCompass } from "react-icons/ai";

export const featureHome = {
  title: "Why choose us?",
  items: [
    {
      title: "Vast experience as state and federal providers",
      icon: <AiOutlineLike color="#f35508" />,
      description:
        "We bring extensive experience working with state and federal \
        agencies, with a deep understanding of regulatory requirements, \
        compliance standards, and procurement processes. Our team is \
        accustomed to operating within strict guidelines while \
        maintaining accuracy, transparency, and reliability. This \
        experience allows us to anticipate challenges, reduce risk, and \
        deliver solutions that meet public-sector expectations without \
        delays or surprises.",
    },
    {
      title: "Right products, best price, on your timeline",
      icon: <BiCheckCircle />,
      description: "Our goal is to deliver the right products at the most \
        competitive price, aligned precisely with your project timeline. \
        We focus on efficiency at every stage—from sourcing and planning \
        to delivery and support—to ensure cost-effectiveness without \
        compromising quality. By combining strong supplier relationships \
        with disciplined project management, we help you stay on \
        schedule, within budget, and confident in the outcome.",
    },
  ],
};

export const featureAboutUs = {
  title: "Vision and Mission",
  items: [
    {
      title: "Vision",
      icon: <LuTarget color="#f35508" />,
      description:
        "Our vision is to become a trusted and preferred supplier for government agencies across the United States. We aim to be recognized as a leader not only for the quality of our products, but also for excellence in customer service, logistics, and responsiveness. \
        By continuously improving our processes and expanding our capabilities, we strive to set a high standard in public-sector supply, delivering consistent value and dependable solutions to every client we serve.",
    },
    {
      title: "Mission",
      icon: <AiOutlineCompass />,
      description:
        "Our mission is to provide high-quality, reliable products to federal, state, and local agencies while ensuring efficiency, transparency, and compliance at every stage of delivery. We are committed to earning and maintaining our clients’ trust through consistent performance and long-term satisfaction. \
        In addition, we focus on building strong, collaborative relationships with customers, business partners, and employees, fostering a culture of accountability, professionalism, and shared success.",
    },
  ],
};

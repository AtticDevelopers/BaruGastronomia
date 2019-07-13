import quienesSomosLogo from "assets/images/baru.png";
import missionImage from "assets/images/quienes-somos/about-mission.png";
import planImage from "assets/images/quienes-somos/about-compromise.png";
import visionImage from "assets/images/quienes-somos/about-vision.png";

export const HEADER_LABELS = {
  title: "Barú Gastronomía"
};

export const FOOTER_LABELS = {
  copyright: "Copyright © Baru Gastronomía",
  design: "Design & Dev. By Attic Developers",
  info: "2019"
};

export const ROUTES_LABELS = {
  quienesSomos: "¿Quiénes somos?",
  nuestrosEmprendimientos: "Nuestros emprendimientos",
  viandasEmpresariales: "Viandas empresariales",
  contacto: "Contacto"
};

export const SIDEMENU = {
  title: "Barú gastronomía"
};

export const ICONS_LABELS = {
  next: "⤞",
  previous: "⤝",
  cross: "✖"
};

export const QUIENES_SOMOS = {
  presentation: {
    slogan: '"Sólo es necesario mostrar otro camino"',
    logo: quienesSomosLogo
  },
  organization: {
    title: "Quiénes somos",
    description:
      "Amantes de la gastronomía, y sumado a nuestra vocación de servicios, hemos dado nacimiento a BARU Desarrollos Gastronómicos & Gastronomía Industrial. Este es un espacio en donde, partiendo desde la gastronomía, brindamos servicios de catering, comedores para empresas y distribución de alimentos y viandas empresariales.",
    cards: {
      mission: {
        title: "Misión",
        description:
          "Poder ofrecer a nuestros comensales, diferentes opciones gastronómicas en el marco del tipo de servicio que nos sea requerido.",
        image: missionImage
      },
      compromise: {
        title: "Compromiso y filosofía",
        description:
          "Consideramos que la gastronomía representa en nuestra empresa, las raíces que nos adhieren a nuestro desarrollo laboral y económico. Por otro lado, la honestidad es la base filosófica sobre la que reposan nuestros sueños. Entendemos a la gastronomía en un concepto amplio, que va más allá del sabor o aroma de un plato en particular, pues buscamos dejar una experiencia única-de todos los sentidos- en nuestros comensales.",
        image: planImage
      },
      vision: {
        title: "Visión",
        description:
          "Convertirnos en una empresa distinguida y renombrada en el ambiente gastronómico, tanto por los sistemas de trabajo aplicables como así también por la calidad de nuestros servicios, pudiendo en ese sentido, lograr la atención de los más exigentes.",
        image: visionImage
      }
    }
  }
};

export const VIANDAS = {
  title: "Nuestras viandas",
  lunchTypes: {
    transporte: {
      title: "Para Transporte",
      description:
        "Acá iría un texto descriptivo que haga referencia a las viandas para transporte"
    },
    empresas: {
      title: "Para Empresas",
      description:
        "Acá iría un texto descriptivo que haga referencia a las viandas para empresas"
    },
    particulares: {
      title: "Particulares",
      description:
        "Acá iría un texto descriptivo que haga referencia a las viandas particulares"
    },
    egresados: {
      title: "Egresados",
      description:
        "Acá iría un texto descriptivo que haga referencia a las viandas para egresados"
    }
  }
};

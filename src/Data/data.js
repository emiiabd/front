
const ENVIROMENT = {
  URL_FRONT: "http://localhost:5173",
  URL_BACK: `seguridad101.com.ar:3000`,
  G_MAPS_API_KEY: 'AIzaSyDho985O13eR1wkuDX00c2vWwkA8xabyCc',
  G_CAPTCHA_API_KEY: '6LeezH0qAAAAAImjUoIqHzED8LdLmJHIwQAd1wzM' 
}

const INFODATA = {
  NAME: "Seguridad 101",
  DESCRIPTION: "Seguridad 101",
  KEYWORDS: "Seguridad 101",
  AUTHOR: "Seguridad 101",
  PRESENTATION: {
    HOME: {
      title: "Sistemas de alarmas y videovigilancia",
      text: "Tu seguridad es nuestra misión.",
      btn: "Pedir cotización"
    },
    CONTACT: {
      title: "Contacto",
      text: "¿Tienes alguna pregunta o duda? Háznosla saber."
    },
    ABOUTUS: {
      title: "Sobre nosotros",
      text: "¿Quienes somos? Conoce nuestra historia."
    },
    LOGIN: {
      title: "Login",
      text: "Esta seccion es solo para usuarios registrados."
    }
  },
  HOME_CARDS: [   
    {
      title: "Monitoreo en tiempo real, seguridad sin límites",
      description: "Cámaras de vigilancia con acceso desde cualquier dispositivo. Controla tu hogar o empresa en todo momento y desde cualquier lugar.",
      imageURL: "./IMG_0391.png",
      styles: {
        translate: "-100% 0",
        transition: "translate 0.7s ease-out",
      }
    },
    {
      title: "Control de acceso inteligente",
      description: "Protege y gestiona quién entra y sale de tu propiedad con sistemas biométricos, tarjetas RFID y accesos remotos.",
      imageURL: "./ezvizCameraCard.jpg",
      styles: {
        translate: "0 100%",
        transition: "translate 0.7s ease-out",
      }
    },
    {
      title: "Alarmas conectadas y alertas instantáneas",
      description: "Recibe notificaciones en tu celular ante cualquier intrusión o evento sospechoso. Mantén tu propiedad segura 24/7.",
      imageURL: "./accesControl.jpg",
      styles: {
        translate: "100% 0",
        transition: "translate 0.7s ease-out",
      }
    }
  ],
  HOME_WHY_US: [
    {
      title: "Tecnología de última generación",
      description: "Implementamos los sistemas más avanzados para garantizar la máxima protección en tiempo real.",
      styles: { translate: "100% 0", transition: "translate 0.4s ease-out" }
    },
    {
      title: "Expertos en seguridad con más de 35 años de experiencia",
      description: "Nuestro equipo diseña soluciones a medida para cada cliente, asegurando eficiencia y confianza.",
      styles: { translate: "100% 0", transition: "translate 0.5s ease-out" }
    },
    {
      title: "Instalaciones rápidas, seguras y sin complicaciones",
      description: "Nuestros técnicos trabajan con precisión, garantizando un servicio impecable y sin afectar la estética de tu hogar o negocio.",
      styles: { translate: "100% 0", transition: "translate 0.6s ease-out" }
    },
    {
      title: "Soporte técnico continuo",
      description: "No solo instalamos seguridad, la mantenemos. Nuestro equipo está disponible para asistencia inmediata cuando lo necesites.",
      styles: { translate: "100% 0", transition: "translate 0.7s ease-out" }
    }
  ],
  HOME_VALUES: [
    {
      title: "Excelencia en cada detalle",
      description: "Cada instalación se realiza con precisión, asegurando la mejor calidad y durabilidad.",
      styles: { translate: "-100% 0", transition: "translate 0.4s ease-out" }
    },
    {
      title: "Confianza y transparencia",
      description: "Construimos relaciones sólidas con nuestros clientes, brindando soluciones claras y efectivas.",
      styles: { translate: "100% 0", transition: "translate 0.4s ease-out" }
    },
    {
      title: "Compromiso con tu seguridad",
      description: "Nos aseguramos de que cada sistema funcione a la perfección y esté siempre actualizado.",
      styles: { translate: "-100% 0", transition: "translate 0.6s ease-out" }
    },
    {
      title: "Soporte técnico post-instalación",
      description: "Tu tranquilidad es nuestra prioridad. Estamos contigo después de la instalación para resolver cualquier duda o problema.",
      styles: { translate: "100% 0", transition: "translate 0.6s ease-out" }
    }
    ]
}

const FORM_SCHEMA = {
  username: {
    elementHTML: 'input',
    type: 'text',
    labelText: 'Nombre de usuario',
    id: 'username',
    className: 'form-control',
    
  } ,
  password: {
    elementHTML: 'input',
    type: 'password',
    labelText: 'Contraseña',
    id: 'password',
    className: 'form-control',
    
  } ,
  name: {
    elementHTML: 'input',
    type: 'text',
    labelText: 'Nombre y Apellido',
    id: 'name',
    className: 'form-control',
  } ,
  phone: {
    elementHTML: 'input',
    type: 'tel',
    labelText: 'Número de Teléfono',
    id: 'phone',
    className: 'form-control',
    
  } ,
  location: {
    elementHTML: '<MapAutocompleteComponent onPlaceSelected={handlePlaceSelected} />'
  },
  typeOfWork: {
    elementHTML: 'select',
    type: '',
    labelText: 'Selecciona el trabajo a realizar',
    id: 'workToDo',
    className: 'form-select',
    options: [
      {value: 'Cámaras de Seguridad', text: 'Cámaras de Seguridad'},
      {value: 'Alarmas Antirrobo', text: 'Alarmas Antirrobo'},
      {value: 'Control de Acceso Biométrico', text: 'Control de Acceso Biométrico'},
      {value: 'Alarmas de Incendio', text: 'Alarmas de Incendio'},
      {value: 'Cerraduras Biométricas y/o Numéricas', text: 'Cerraduras Biométricas y/o Numéricas'},
      {value: 'Instalaciones de Redes', text: 'Instalaciones de Redes'},
      {value: 'Otro...', text: 'Otro...'}
    ]
  },
  commentBox: {
    elementHTML: 'textarea',
    type: 'text',
    labelText: 'Explicación breve del trabajo a realizar:',
    id: 'commentBox',
    className: 'form-control',
  },
  servicesType : {
    elementHTML: 'select',
    type: '',
    labelText: 'Tipo de servicio',
    id: 'servicesType',
    className: 'form-select',
    options: [
      {value: 'Cámaras de Seguridad', text: 'Cámaras de Seguridad'},
      {value: 'Alarmas Antirrobo', text: 'Alarmas Antirrobo'},
      {value: 'Control de Acceso Biométrico', text: 'Control de Acceso Biométrico'},
      {value: 'Alarmas de Incendio', text: 'Alarmas de Incendio'},
      {value: 'Cerraduras Biométricas y/o Numéricas', text: 'Cerraduras Biométricas y/o Numéricas'},
      {value: 'Instalaciones de Redes', text: 'Instalaciones de Redes'},
      {value: 'Otro...', text: 'Otro...'}
    ]
  }



}


export { ENVIROMENT, INFODATA, FORM_SCHEMA}
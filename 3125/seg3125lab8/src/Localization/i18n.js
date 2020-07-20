import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n.use(LanguageDetector).init({
  resources: {
    en: {
      header:{
        buy_a_car : "Buy a Cars",
        new_user: "New User ?",
        aboutus: "AboutUs",
        change_language: "change language",
        myaccount: "MyAccount",
        sign_in: "Sign In",
        l_username: "User Name",
        l_email: "Email Address",
        l_password: 'Password',
        bt_sign_in: "Sign In",
        l_promotion: "I want to receive inspiration, marketing promotions and updates via email.",
        sign_up: "Don`t have an account? Sign Up"
      },
      footer:{
        home: "Home",
        about: "About",
        contact: "Contact",
        privacy_policy: "Privacy Policy",
        terms_of_service: "Terms of Service"
      },
      notfound:{
        Error:"Error - 404",
        PAGE_NOT_FOUND:"PAGE NOT FOUND"
      },
      newuser:{
        Account_Registration:"Account Registration"
      },
      stepper:{
        Personal_Information:"Personal Information",
        Set_Perference:"Set Perference",
        Completed:"Completed !",
        Congrats:"You’ve worked so hard for this. Congrats!",
        Unknown_step:"Unknown step",
        Back:"Back",
        Finish:"Finish",
        Next:"Next",
        Congratulation:"Congratulation !!!, All steps completed",
        First_Name:"First Name",
        Last_Name:"Last Name",
        Email_Address:"Email Address",
        Address:"Address",
        User_Name:"User Name",
        Password:"Password",
        Invalid_format:"Invalid format, must be letter",
        Invalid_format_must_be:"Invalid format, must be xxx@xxx.xxx",
        Minimum_8_characters:"Minimum 8 characters, one uppercase letter, one lowercase letter and one number",
        please_fill_out:"please fill out this form",
        intro:"Introduction",
        Buying:"Buying your first car is an exciting and emotional time where you’re faced with balancing matters of the head, the heart and the hip pocket. Maybe throw in some well-intentioned parental guidance for good measure. The journey is different for everyone.",
        followstep:"Complete the follow register steps to start your shopping"
      },
      homepage:{
        Find_your_car:"Find your car",
        Option_1:"Option 1",
        Option_2:"Option 2"
      },
      aboutus:{
        about:"Steals is a constantly growing car shopping brand, which has as priority to provide quality services at affordable rates and flexible terms and conditions, combined with real 24 hours support. This had established us as one of the most competitive company in the market."
      },
      booking:{
        Booking_Confirmed:"Booking Confirmed!",
        You_have_booked:"You have booked:",
        Appointment_Date:"Appointment Date:",
        Countinue:"Countinue",
        Booking_Details:"Booking Details",
        Contact_Number:"Contact Number",
        Issue_Date:"Issue Date",
        Cancel:"Cancel",
        Book_Now:"Book Now",
        Cancel:"Cancel",
        name:"Name",
        Booking_Details:"Booking Details",
        "You can't book a car in the previous date!!!":"You can't book a car in the previous date!!!",
        "Please enter a valid return date!!!":"Please enter a valid return date!!!",
        "You can only use letters & spaces!":"You can only use letters & spaces!",
        "Please enter a valid phone no.!":"Please enter a valid phone no.!"
      },
      showdetail:{
        Price:"Price: ",
        Book_Now:"Book Now",
        Seater:"Seater",
        Car_Details:"Car Details",
        Current_Booking:"Current Booking",
        Name:"Name",
        Phone_No:"Phone No.",
        Issue_Date:"Issue Date",
        Return_Date:"Return Date",
        Not_Available:"Not Available",
        Available:'Available',
        Vehicle_No:"Vehicle No.: ",
        Type:"Type: ",
        Engine:"Engine: ",

      },
      simple:{
        Number_of_Seats:"Number of Seats",
        choose_a_color:"choose a color",
        choose_a_style:"choose a style",
        price_range:"price range",
        update_filter:"update filter",
        red:"red",
        blue:"blue",
        yellow:"yellow",
        black:"black",
        green:"green",

      },
      car:{
        Cars_For_Sale:"Cars For Sale",
        Search:"Search"
      },
      caritem:{
        Seater:"Seater",
        Price:"Price",
        Book_Now:"Book Now",
        Details:"Details",
        "show engine and other info":"show engine and other info"
      }
      
    },





    fr:{
      header:{
        buy_a_car : "Acheter une voiture",
        new_user: "Nouvel utilisateur ?",
        aboutus: "à propos de nous",
        change_language: "changer de langue",
        myaccount: "Mon compte",
        sign_in: "se connecter",
        l_username: "Nom d'utilisateur",
        l_email: "Adresse électronique",
        l_password: 'mot de passe',
        bt_sign_in: "se connecter",
        l_promotion: "Je souhaite recevoir de l'inspiration, des promotions marketing et des mises à jour par e-mail.",
        sign_up: "Vous n'avez pas de compte? S'inscrire"
      },
      footer:{
        home: "Accueil",
        about: "À propos",
        contact: "Contact",
        privacy_policy: "Politique de confidentialité",
        terms_of_service: "Conditions d'utilisation"
      },
      notfound:{
        Error:"Erreur - 404",
        PAGE_NOT_FOUND:"PAGE NON TROUVÉE"
      },
      newuser:{
        Account_Registration:"Enregistrement du Compte"
      },
      stepper:{
        Personal_Information:"Renseignements personnels",
        Set_Perference:"Définir la préférence",
        Completed:"Terminé !",
        Congrats:"Vous avez travaillé si dur pour cela. Félicitations!",
        Unknown_step:"Étape inconnue",
        Back:"Arrière",
        Finish:"terminer",
        Next:"Prochain",
        Congratulation:"Félicitations !!!, toutes les étapes sont terminées",
        First_Name:"Prénom",
        Last_Name:"Nom de famille",
        Email_Address:"Adresse e-mail",
        Address:"Adresse",
        User_Name:"Nom d'utilisateur",
        Password:"Mot de passe",
        Invalid_format:"Format non valide, doit être une lettre",
        Invalid_format_must_be:"Format non valide, doit être xxx@xxx.xxx",
        Minimum_8_characters:"Minimum 8 caractères, une lettre majuscule, une lettre minuscule et un chiffre",
        please_fill_out:"s'il vous plait remplissez le formulaire",
        intro:"Introduction",
        Buying:"L'achat de votre première voiture est une période passionnante et émotionnelle où vous êtes confronté à un équilibre entre la tête, le cœur et la poche de hanche. Peut-être ajouter des conseils parentaux bien intentionnés pour faire bonne mesure. Le voyage est différent pour chacun.",
        followstep:"Suivez les étapes d'inscription suivantes pour commencer vos achats"
      },
      homepage:{
        Find_your_car:"Trouvez votre voiture",
        Option_1:"Option 1",
        Option_2:"Option 2"
      },
      aboutus:{
        about:"Steals est une marque de magasinage automobile en croissance constante, qui a pour priorité de fournir des services de qualité à des tarifs abordables et des termes et conditions flexibles, combinés à une assistance réelle 24h / 24. Cela nous avait établi comme l'une des entreprises les plus compétitives du marché."
      },
      booking:{
        Booking_Confirmed:"Réservation confirmée!",
        You_have_booked:"Vous avez réservé:",
        Appointment_Date:"Date de rendez-vous:",
        Countinue:"Continuer",
        Booking_Details:"Les détails de réservation",
        Contact_Number:"Numéro de contact",
        Issue_Date:"Date d'émission",
        Cancel:"Annuler",
        Book_Now:"Reserve maintenant",
        name:"Nom",
        Booking_Details:"Les détails de réservation",
        "You can't book a car in the previous date!!!":"Vous ne pouvez pas réserver de voiture à la date précédente!!!",
        "Please enter a valid return date!!!":"Veuillez entrer une date de retour valide!!!",
        "You can only use letters & spaces!":"Vous ne pouvez utiliser que des lettres et des espaces!",
        "Please enter a valid phone no.!":"Veuillez saisir un numéro de téléphone valide.!"

      },
      showdetail:{
        Price:"Prix",
        Book_Now:"Reserve maintenant",
        Seater:"Seater",
        Car_Details:"Détails de la voiture",
        Current_Booking:"Réservation en cours",
        Name:"Nom",
        Phone_No:"Pas de téléphone.",
        Issue_Date:"Date d'émission",
        Return_Date:"Date de retour",
        Not_Available:"Indisponible",
        Available:'Disponible',
        Vehicle_No:"No. de véhicule: ",
        Type:"Type: ",
        Engine:"Moteur: ",
      },
      simple:{
        Number_of_Seats:"Nombre de places",
        choose_a_color:"choisir une couleur",
        choose_a_style:"choisissez un style",
        price_range:"échelle des prix",
        update_filter:"filtre de mise à jour",
        red:"rouge",
        blue:"bleue",
        yellow:"Jaune",
        black:"noir",
        green:"vert",
        
      },
      car:{
        Cars_For_Sale:"Voitures à vendre",
        Search:"Chercher"
      },
      caritem:{
        Seater:"Seater",
        Price:"Prix: ",
        Book_Now:"Reserve maintenant",
        Details:"Détails",
        "show engine and other info":"afficher le moteur et d'autres informations"
      }

    }
  },
  fallbackLng: "en",
  debug: true,

  // have a common namespace used around the full app
  ns: ["translations"],
  defaultNS: "translations",

  keySeparator: false, // we use content as keys

  interpolation: {
    escapeValue: false, // not needed for react!!
    formatSeparator: ","
  },

  react: {
    wait: true
  }
});

export default i18n;